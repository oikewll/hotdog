import { useState } from 'react'

export default function Screenshots() {
  const [activeTheme, setActiveTheme] = useState('light')

  const screenshots = {
    light: [
      {
        src: '/screenshots/light-1.jpeg',
        alt: '浅色主题 - 主界面',
        title: '清爽明亮',
      },
      {
        src: '/screenshots/light-2.jpeg',
        alt: '浅色主题 - 运行中',
        title: '一目了然',
      },
    ],
    dark: [
      {
        src: '/screenshots/dark-1.jpeg',
        alt: '深色主题 - 主界面',
        title: '护眼舒适',
      },
      {
        src: '/screenshots/dark-2.jpeg',
        alt: '深色主题 - 运行中',
        title: '专注开发',
      },
    ],
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-orange-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            看看长什么样
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            简洁的界面，所有功能都在你需要的地方
          </p>

          {/* 主题切换 */}
          <div className="inline-flex glass rounded-full p-1.5 gap-2">
            <button
              onClick={() => setActiveTheme('light')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeTheme === 'light'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ☀️ 浅色模式
            </button>
            <button
              onClick={() => setActiveTheme('dark')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeTheme === 'dark'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🌙 深色模式
            </button>
          </div>
        </div>

        {/* 截图展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {screenshots[activeTheme].map((screenshot, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="glass rounded-2xl p-3 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-gray-700 font-medium mt-4 text-lg">
                  {screenshot.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
