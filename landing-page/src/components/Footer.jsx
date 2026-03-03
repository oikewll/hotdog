export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: '功能特性', href: '#features' },
      { name: '界面预览', href: '#screenshots' },
      { name: '下载', href: '#download' },
      { name: '使用教程', href: '#tutorial' },
    ],
    resources: [
      { name: 'GitHub', href: 'https://github.com/yourusername/hotdog', external: true },
      { name: '问题反馈', href: 'https://github.com/yourusername/hotdog/issues', external: true },
      { name: '更新日志', href: 'https://github.com/yourusername/hotdog/releases', external: true },
      { name: '文档', href: 'https://github.com/yourusername/hotdog#readme', external: true },
    ],
    tech: [
      { name: 'Electron', href: 'https://www.electronjs.org/', external: true },
      { name: 'React', href: 'https://react.dev/', external: true },
      { name: 'Vite', href: 'https://vitejs.dev/', external: true },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', external: true },
    ],
  }

  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-transparent to-orange-50/50 border-t border-orange-100">
      <div className="max-w-7xl mx-auto">
        {/* 主要内容 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 品牌信息 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🌭</span>
              <span className="text-2xl font-bold text-gray-900">Hotdog</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              让本地文件服务器变得简单又好用
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername/hotdog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* 产品链接 */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 资源链接 */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 技术栈 */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">技术栈</h3>
            <ul className="space-y-2">
              {links.tech.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="border-t border-orange-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Hotdog. Made with ❤️ by Hoan
          </p>
          <p className="text-gray-600 text-sm">
            Released under the MIT License
          </p>
        </div>
      </div>
    </footer>
  )
}
