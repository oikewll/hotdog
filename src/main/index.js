import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Store from 'electron-store';
import open from 'open';
import StaticServer from './server.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 初始化持久化存储
const store = new Store({
  defaults: {
    lastFolder: null,
    port: 8080,
    https: false,
    directoryListing: true,
    theme: 'system'
  }
});

// 静态服务器实例
const server = new StaticServer();

let mainWindow = null;

/**
 * 发送日志到渲染进程
 */
function sendLog(message, type = 'info') {
  if (mainWindow) {
    mainWindow.webContents.send('server-log', { message, type, timestamp: new Date().toISOString() });
  }
}

/**
 * 创建主窗口
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#F8F9FA',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    open(details.url);
    return { action: 'deny' };
  });

  // 开发模式：加载Vite开发服务器
  // 生产模式：加载构建后的文件
  if (process.env.NODE_ENV === 'development' && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

/**
 * 应用启动
 */
app.whenReady().then(() => {
  // 设置应用用户模型ID（Windows）
  if (process.platform === 'win32') {
    app.setAppUserModelId('com.hoan.hotdog');
  }

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

/**
 * 所有窗口关闭时退出（macOS除外）
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * 应用退出前清理
 */
app.on('before-quit', async () => {
  if (server.isRunning()) {
    await server.stop(sendLog);
  }
});

// ============ IPC 事件处理 ============

/**
 * 选择文件夹
 */
ipcMain.handle('select-folder', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
    title: '选择静态文件根目录'
  });

  if (!result.canceled && result.filePaths.length > 0) {
    const folderPath = result.filePaths[0];
    store.set('lastFolder', folderPath);
    return folderPath;
  }

  return null;
});

/**
 * 启动服务器
 */
ipcMain.handle('start-server', async (_, config) => {
  try {
    const result = await server.start(config, sendLog);

    // 保存配置
    store.set('port', config.port);
    store.set('https', config.https);
    store.set('directoryListing', config.directoryListing);

    return { success: true, ...result };
  } catch (error) {
    sendLog(`启动失败: ${error.message}`, 'error');
    return { success: false, error: error.message };
  }
});

/**
 * 停止服务器
 */
ipcMain.handle('stop-server', async () => {
  try {
    await server.stop(sendLog);
    return { success: true };
  } catch (error) {
    sendLog(`停止失败: ${error.message}`, 'error');
    return { success: false, error: error.message };
  }
});

/**
 * 获取服务器状态
 */
ipcMain.handle('get-server-status', () => {
  return {
    isRunning: server.isRunning(),
    config: server.getConfig()
  };
});

/**
 * 在浏览器中打开URL
 */
ipcMain.handle('open-browser', async (_, url) => {
  try {
    await open(url);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

/**
 * 获取保存的设置
 */
ipcMain.handle('get-settings', () => {
  return {
    lastFolder: store.get('lastFolder'),
    port: store.get('port'),
    https: store.get('https'),
    directoryListing: store.get('directoryListing'),
    theme: store.get('theme')
  };
});

/**
 * 保存主题设置
 */
ipcMain.handle('save-theme', (_, theme) => {
  store.set('theme', theme);
  return { success: true };
});
