export default function Features() {
  const features = [
    {
      icon: '📁',
      title: '文件夹选择',
      description: '原生文件选择器，熟悉的操作方式',
      color: 'from-orange-100 to-amber-100',
    },
    {
      icon: '🚀',
      title: '秒速启动',
      description: '点击按钮即可启动，自动打开浏览器',
      color: 'from-red-100 to-orange-100',
    },
    {
      icon: '⚙️',
      title: '灵活配置',
      description: '自定义端口、HTTPS、目录列表',
      color: 'from-yellow-100 to-orange-100',
    },
    {
      icon: '🎨',
      title: '精致界面',
      description: '深色/浅色/跟随系统，三种主题',
      color: 'from-amber-100 to-yellow-100',
    },
    {
      icon: '📝',
      title: '实时日志',
      description: '请求记录一目了然，方便调试',
      color: 'from-orange-100 to-red-100',
    },
    {
      icon: '💾',
      title: '记住设置',
      description: '自动保存配置，下次打开直接用',
      color: 'from-yellow-100 to-amber-100',
    },
    {
      icon: '🔒',
      title: 'HTTPS 支持',
      description: '自动生成证书，测试更方便',
      color: 'from-red-100 to-pink-100',
    },
    {
      icon: '🌐',
      title: '全平台支持',
      description: 'Windows、macOS、Linux 都能用',
      color: 'from-amber-100 to-orange-100',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            一切都很简单
          </h2>
          <p className="text-xl text-gray-600">
            我们把复杂的东西藏在后面，给你最简单的体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl border border-orange-200/50`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 额外说明 */}
        <div className="mt-16 text-center">
          <div className="glass inline-block px-8 py-4 rounded-2xl">
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">提示：</span>
              Hotdog 不会修改你的文件，只是让它们可以通过浏览器访问
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
