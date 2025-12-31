import { useState, useEffect } from 'react';
import FolderSelector from './components/FolderSelector';
import Settings from './components/Settings';
import ServerControls from './components/ServerControls';
import StatusDisplay from './components/StatusDisplay';
import LogViewer from './components/LogViewer';

function App() {
  const [theme, setTheme] = useState('system');
  const [folder, setFolder] = useState(null);
  const [port, setPort] = useState(8080);
  const [httpsEnabled, setHttpsEnabled] = useState(false);
  const [directoryListing, setDirectoryListing] = useState(true);
  const [serverRunning, setServerRunning] = useState(false);
  const [serverUrl, setServerUrl] = useState('');
  const [logs, setLogs] = useState([]);

  // 加载保存的设置
  useEffect(() => {
    const loadSettings = async () => {
      const settings = await window.electronAPI.getSettings();
      if (settings.lastFolder) setFolder(settings.lastFolder);
      if (settings.port) setPort(settings.port);
      if (settings.https !== undefined) setHttpsEnabled(settings.https);
      if (settings.directoryListing !== undefined) setDirectoryListing(settings.directoryListing);
      if (settings.theme) setTheme(settings.theme);
    };

    loadSettings();

    // 监听服务器日志
    const unsubscribe = window.electronAPI.onServerLog((logData) => {
      setLogs((prev) => [...prev, logData].slice(-100)); // 保留最后100条
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // 主题切换
  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = (selectedTheme) => {
      if (selectedTheme === 'dark') {
        root.classList.add('dark');
      } else if (selectedTheme === 'light') {
        root.classList.remove('dark');
      } else {
        // system
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };

    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme('system');
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, [theme]);

  // 切换主题并保存
  const handleThemeChange = async (newTheme) => {
    setTheme(newTheme);
    await window.electronAPI.saveTheme(newTheme);
  };

  // 选择文件夹
  const handleSelectFolder = async () => {
    const selectedFolder = await window.electronAPI.selectFolder();
    if (selectedFolder) {
      setFolder(selectedFolder);
      addLog('已选择文件夹: ' + selectedFolder, 'info');
    }
  };

  // 启动服务器
  const handleStartServer = async () => {
    if (!folder) {
      addLog('请先选择文件夹', 'error');
      return;
    }

    const result = await window.electronAPI.startServer({
      port,
      https: httpsEnabled,
      directoryListing,
      rootPath: folder
    });

    if (result.success) {
      setServerRunning(true);
      setServerUrl(result.url);
      addLog(`服务器已启动: ${result.url}`, 'success');

      // 自动在浏览器中打开
      await window.electronAPI.openBrowser(result.url);
    } else {
      addLog(`启动失败: ${result.error}`, 'error');
    }
  };

  // 停止服务器
  const handleStopServer = async () => {
    const result = await window.electronAPI.stopServer();
    if (result.success) {
      setServerRunning(false);
      setServerUrl('');
      addLog('服务器已停止', 'info');
    } else {
      addLog(`停止失败: ${result.error}`, 'error');
    }
  };

  // 添加日志
  const addLog = (message, type = 'info') => {
    setLogs((prev) =>
      [...prev, { message, type, timestamp: new Date().toISOString() }].slice(-100)
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* 标题栏 */}
      <header className="flex items-center justify-between px-6 pt-8 pb-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            🌭 Hotdog
          </h1>
        </div>

        {/* 主题切换 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleThemeChange('light')}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'light'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="浅色模式"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="深色模式"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
          <button
            onClick={() => handleThemeChange('system')}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'system'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="跟随系统"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 overflow-auto p-6 space-y-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 文件夹选择 */}
          <FolderSelector folder={folder} onSelectFolder={handleSelectFolder} />

          {/* 设置区 */}
          <Settings
            port={port}
            onPortChange={setPort}
            httpsEnabled={httpsEnabled}
            onHttpsChange={setHttpsEnabled}
            directoryListing={directoryListing}
            onDirectoryListingChange={setDirectoryListing}
          />

          {/* 服务器控制 */}
          <ServerControls
            serverRunning={serverRunning}
            onStart={handleStartServer}
            onStop={handleStopServer}
            disabled={!folder}
          />

          {/* 状态显示 */}
          {serverRunning && <StatusDisplay url={serverUrl} />}

          {/* 日志查看器 */}
          <LogViewer logs={logs} />
        </div>
      </main>
    </div>
  );
}

export default App;
