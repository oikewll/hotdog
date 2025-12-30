function ServerControls({ serverRunning, onStart, onStop, disabled }) {
  return (
    <div className="card p-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {!serverRunning ? (
          <button
            onClick={onStart}
            disabled={disabled}
            className="flex-1 btn-success flex items-center justify-center gap-2 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            启动服务器
          </button>
        ) : (
          <button
            onClick={onStop}
            className="flex-1 btn-danger flex items-center justify-center gap-2 py-4 text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              />
            </svg>
            停止服务器
          </button>
        )}
      </div>

      {disabled && !serverRunning && (
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 text-center">
          请先选择文件夹后再启动服务器
        </p>
      )}
    </div>
  );
}

export default ServerControls;
