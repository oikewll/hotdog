import { useState } from 'react';

function FolderSelector({ folder, onSelectFolder }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="card p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        静态文件目录
      </h2>

      <div className="space-y-3">
        <button
          onClick={onSelectFolder}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-base"
        >
          <svg
            className={`w-5 h-5 transition-transform ${isHovering ? 'scale-110' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          {folder ? '更改文件夹' : '选择文件夹'}
        </button>

        {folder && (
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">当前目录：</p>
                <p className="font-mono text-sm break-all text-gray-900 dark:text-gray-100">
                  {folder}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FolderSelector;
