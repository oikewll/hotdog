export default function Download() {
  const platforms = [
    {
      name: 'macOS',
      icon: '🍎',
      version: 'v1.0.0',
      formats: [
        { name: 'DMG 安装包', size: '~85 MB', url: '#', recommended: true },
        { name: 'ZIP 压缩包', size: '~80 MB', url: '#' },
      ],
      requirement: 'macOS 10.15+',
    },
    {
      name: 'Windows',
      icon: '🪟',
      version: 'v1.0.0',
      formats: [
        { name: 'NSIS 安装程序', size: '~90 MB', url: '#', recommended: true },
        { name: 'Portable 便携版', size: '~85 MB', url: '#' },
      ],
      requirement: 'Windows 10+',
    },
    {
      name: 'Linux',
      icon: '🐧',
      version: 'v1.0.0',
      formats: [
        { name: 'AppImage', size: '~95 MB', url: '#', recommended: true },
        { name: 'DEB 包', size: '~85 MB', url: '#' },
      ],
      requirement: 'Ubuntu 20.04+ / Debian 11+',
    },
  ]

  return (
    <section id="download" className="py-20 px-4 bg-gradient-to-b from-orange-50/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            开始下载
          </h2>
          <p className="text-xl text-gray-600">
            选择你的操作系统，立即开始使用
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              {/* 平台图标和名称 */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-500 text-sm">{platform.version}</p>
              </div>

              {/* 下载选项 */}
              <div className="space-y-3 mb-6">
                {platform.formats.map((format, fIndex) => (
                  <a
                    key={fIndex}
                    href={format.url}
                    className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                      format.recommended
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        {format.name}
                        {format.recommended && (
                          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                            推荐
                          </span>
                        )}
                      </span>
                      <span className={`text-sm ${format.recommended ? 'text-white/80' : 'text-gray-500'}`}>
                        {format.size}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* 系统要求 */}
              <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
                系统要求：{platform.requirement}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Release */}
        <div className="text-center">
          <div className="glass inline-block px-8 py-4 rounded-2xl">
            <p className="text-gray-700 mb-3">
              也可以从 GitHub Releases 页面下载历史版本
            </p>
            <a
              href="https://github.com/yourusername/hotdog/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>查看所有版本</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
