function Settings({ port, onPortChange, httpsEnabled, onHttpsChange, directoryListing, onDirectoryListingChange }) {
  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        服务器设置
      </h2>

      <div className="space-y-4">
        {/* 端口设置 */}
        <div>
          <label className="block text-sm font-medium mb-2">
            端口号
          </label>
          <input
            type="number"
            min="1"
            max="65535"
            value={port}
            onChange={(e) => onPortChange(parseInt(e.target.value) || 8080)}
            className="input w-full"
            placeholder="8080"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            建议使用 1024-65535 之间的端口
          </p>
        </div>

        {/* HTTPS 开关 */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-3">
            <svg
              className={`w-5 h-5 ${httpsEnabled ? 'text-green-500' : 'text-gray-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <div>
              <p className="font-medium">启用 HTTPS</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                使用自签名证书（浏览器会显示警告）
              </p>
            </div>
          </div>
          <button
            onClick={() => onHttpsChange(!httpsEnabled)}
            className={`toggle ${httpsEnabled ? 'toggle-checked' : 'toggle-unchecked'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                httpsEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* 目录列表开关 */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-3">
            <svg
              className={`w-5 h-5 ${directoryListing ? 'text-blue-500' : 'text-gray-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            <div>
              <p className="font-medium">显示目录列表</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                当没有 index.html 时显示文件列表
              </p>
            </div>
          </div>
          <button
            onClick={() => onDirectoryListingChange(!directoryListing)}
            className={`toggle ${directoryListing ? 'toggle-checked' : 'toggle-unchecked'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                directoryListing ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
