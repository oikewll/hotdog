export default function Tutorial() {
  const steps = [
    {
      number: '1',
      title: '选择文件夹',
      description: '点击"选择文件夹"，找到你想要分享的目录',
      icon: '📁',
    },
    {
      number: '2',
      title: '调整设置',
      description: '设置端口号、选择是否启用 HTTPS',
      icon: '⚙️',
    },
    {
      number: '3',
      title: '启动服务器',
      description: '点击"启动服务器"，浏览器会自动打开',
      icon: '🚀',
    },
    {
      number: '4',
      title: '开始使用',
      description: '在浏览器里访问你的文件，就这么简单',
      icon: '✨',
    },
  ]

  const tips = [
    {
      title: 'HTTPS 自签名证书',
      icon: '🔒',
      content: '启用 HTTPS 后会自动生成证书。浏览器提示不安全？点击"高级"继续访问就行，这是本地测试的正常现象。',
    },
    {
      title: '目录列表功能',
      icon: '📋',
      content: '启用后，访问没有 index.html 的目录会显示文件列表。关闭后只能访问完整路径的文件。',
    },
    {
      title: '端口被占用了？',
      icon: '🔌',
      content: '如果默认的 8080 端口被占用，换个其他的就行，比如 3000、8081、9000 都可以。',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            使用起来很简单
          </h2>
          <p className="text-xl text-gray-600">
            四步搞定，不需要看文档
          </p>
        </div>

        {/* 使用步骤 */}
        <div className="relative mb-20">
          {/* 连接线 - 仅在桌面端显示 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-red-200 to-orange-200 -translate-y-1/2 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-100"
              >
                {/* 步骤编号 */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {step.number}
                </div>

                <div className="mt-6 text-center space-y-3">
                  <div className="text-5xl">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 使用提示 */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            💡 常见问题
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="glass-accent rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {tip.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
