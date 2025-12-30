import { contextBridge, ipcRenderer } from 'electron';

/**
 * 暴露API到渲染进程
 */
contextBridge.exposeInMainWorld('electronAPI', {
  // 文件夹选择
  selectFolder: () => ipcRenderer.invoke('select-folder'),

  // 服务器控制
  startServer: (config) => ipcRenderer.invoke('start-server', config),
  stopServer: () => ipcRenderer.invoke('stop-server'),
  getServerStatus: () => ipcRenderer.invoke('get-server-status'),

  // 浏览器操作
  openBrowser: (url) => ipcRenderer.invoke('open-browser', url),

  // 设置
  getSettings: () => ipcRenderer.invoke('get-settings'),
  saveTheme: (theme) => ipcRenderer.invoke('save-theme', theme),

  // 日志监听
  onServerLog: (callback) => {
    const subscription = (_, data) => callback(data);
    ipcRenderer.on('server-log', subscription);

    // 返回取消订阅函数
    return () => {
      ipcRenderer.removeListener('server-log', subscription);
    };
  }
});
