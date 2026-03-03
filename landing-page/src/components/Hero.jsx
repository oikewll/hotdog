export default function Hero() {
  const scrollToDownload = () => {
    document.getElementById('download').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-hotdog-mustard/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-hotdog-ketchup/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-hotdog-bun/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-100 rounded-full border border-orange-200">
              <span className="text-3xl">🌭</span>
              <span className="text-sm font-semibold text-orange-800">简单·快速·美观</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hotdog
            </h1>

            <p className="text-3xl md:text-4xl font-bold text-gray-700">
              本地静态文件服务器
            </p>

            <p className="text-lg text-gray-600 max-w-xl">
              不需要复杂的配置，不需要学习命令行。选个文件夹，点个按钮，你的本地服务器就启动了。
            </p>

            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToDownload}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>免费下载</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <a
                href="https://github.com/yourusername/hotdog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-orange-300 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>

            {/* 快速标签 */}
            <div className="flex flex-wrap gap-3 pt-6">
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                支持 HTTPS
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                跨平台
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                开源免费
              </span>
            </div>
          </div>

          {/* 右侧特性卡片 */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl space-y-2 hover:scale-105 transition-transform">
              <div className="text-4xl">📁</div>
              <h3 className="font-bold text-gray-800">选择文件夹</h3>
              <p className="text-sm text-gray-600">点击按钮，选择目录，就这么简单</p>
            </div>
            <div className="glass-accent p-6 rounded-2xl space-y-2 hover:scale-105 transition-transform mt-8">
              <div className="text-4xl">🚀</div>
              <h3 className="font-bold text-gray-800">一键启动</h3>
              <p className="text-sm text-gray-600">不需要命令行，不需要配置</p>
            </div>
            <div className="glass-accent p-6 rounded-2xl space-y-2 hover:scale-105 transition-transform">
              <div className="text-4xl">🎨</div>
              <h3 className="font-bold text-gray-800">现代界面</h3>
              <p className="text-sm text-gray-600">深色/浅色主题，随心切换</p>
            </div>
            <div className="glass p-6 rounded-2xl space-y-2 hover:scale-105 transition-transform mt-8">
              <div className="text-4xl">⚡</div>
              <h3 className="font-bold text-gray-800">快速高效</h3>
              <p className="text-sm text-gray-600">基于 Electron，原生体验</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
