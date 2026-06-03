import http from 'http';
import https from 'https';
import fs from 'fs';
import handler from 'serve-handler';
import selfsigned from 'selfsigned';

class StaticServer {
  constructor() {
    this.server = null;
    this.config = {
      port: 8080,
      https: false,
      directoryListing: true,
      rootPath: null
    };
    this.certificates = null;
  }

  /**
   * 生成自签名证书（selfsigned v5 起为 async）
   */
  async generateCertificates() {
    if (!this.certificates) {
      const attrs = [{ name: 'commonName', value: 'localhost' }];
      const pems = await selfsigned.generate(attrs, {
        keySize: 2048,
        algorithm: 'sha256'
      });
      this.certificates = {
        key: pems.private,
        cert: pems.cert
      };
    }
    return this.certificates;
  }

  /**
   * 启动服务器
   */
  async start(config, logCallback) {
    if (this.server) {
      throw new Error('服务器已在运行中');
    }

    this.config = { ...this.config, ...config };
    const { port, https: useHttps, directoryListing, rootPath } = this.config;

    if (!rootPath) {
      throw new Error('请先选择文件夹');
    }

    // 检查路径是否存在
    if (!fs.existsSync(rootPath)) {
      throw new Error('指定的文件夹不存在');
    }

    // 请求处理器
    const requestHandler = async (request, response) => {
      const clientIp = request.socket.remoteAddress;
      logCallback(`收到请求: ${request.method} ${request.url} (来自 ${clientIp})`);

      // 禁用缓存，确保切换目录后内容实时更新
      response.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      response.setHeader('Pragma', 'no-cache');
      response.setHeader('Expires', '0');

      try {
        await handler(request, response, {
          public: rootPath,
          directoryListing: directoryListing,
          cleanUrls: true,
          trailingSlash: false,
          renderSingle: false
        });
      } catch (error) {
        logCallback(`处理请求出错: ${error.message}`, 'error');
        response.statusCode = 500;
        response.end('Internal Server Error');
      }
    };

    // 创建服务器
    try {
      if (useHttps) {
        const certs = await this.generateCertificates();
        this.server = https.createServer(certs, requestHandler);
      } else {
        this.server = http.createServer(requestHandler);
      }

      // 启动监听
      await new Promise((resolve, reject) => {
        this.server.listen(port, '0.0.0.0', () => { // 监听 0.0.0.0 以支持局域网访问
          const protocol = useHttps ? 'https' : 'http';
          const url = `${protocol}://localhost:${port}`;
          logCallback(`✓ 服务器已启动: ${url}`, 'success');
          logCallback(`✓ 服务目录: ${rootPath}`, 'info');
          resolve();
        });

        this.server.on('error', (error) => {
          if (error.code === 'EADDRINUSE') {
            reject(new Error(`端口 ${port} 已被占用，请尝试其他端口`));
          } else {
            reject(error);
          }
        });
      });

      return {
        url: `${useHttps ? 'https' : 'http'}://localhost:${port}`,
        port,
        https: useHttps
      };
    } catch (error) {
      this.server = null;
      throw error;
    }
  }

  /**
   * 停止服务器
   */
  async stop(logCallback) {
    if (!this.server) {
      return;
    }

    return new Promise((resolve) => {
      this.server.close(() => {
        logCallback('✓ 服务器已停止', 'info');
        this.server = null;
        // 重置配置以防止状态污染
        this.config = {
          port: 8080,
          https: false,
          directoryListing: true,
          rootPath: null
        };
        resolve();
      });

      // 强制关闭所有连接
      this.server.closeAllConnections?.();
    });
  }

  /**
   * 获取服务器状态
   */
  isRunning() {
    return this.server !== null && this.server.listening;
  }

  /**
   * 获取当前配置
   */
  getConfig() {
    return { ...this.config };
  }
}

export default StaticServer;
