# 🌭 Hotdog Landing Page

Hotdog 产品的官方着陆页，使用 React + Vite + Tailwind CSS 构建。

## 特性

- ✨ 现代简约的设计风格
- 🎨 玻璃态设计 (Glassmorphism)
- 📱 完全响应式设计
- ⚡ 使用 Vite 实现快速 HMR
- 🎭 平滑动画和过渡效果
- 🖼️ 主题切换的截图展示

## 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 http://localhost:5173 查看页面。

### 构建生产版本

```bash
npm run build
```

构建产物会输出到 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

## 部署

你可以将此项目部署到以下平台：

- **GitHub Pages**: 使用 GitHub Actions 自动部署
- **Vercel**: 连接 GitHub 仓库后一键部署
- **Netlify**: 拖拽 `dist` 目录即可部署
- **Cloudflare Pages**: 支持自动部署和边缘缓存

## 项目结构

```
landing-page/
├── src/
│   ├── components/      # React 组件
│   │   ├── Hero.jsx     # 首屏区域
│   │   ├── Features.jsx # 功能特性
│   │   ├── Screenshots.jsx # 截图展示
│   │   ├── Download.jsx # 下载区域
│   │   ├── Tutorial.jsx # 使用教程
│   │   └── Footer.jsx   # 页脚
│   ├── App.jsx          # 主应用组件
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── public/              # 静态资源
│   └── screenshots/     # 应用截图
├── index.html           # HTML 模板
└── package.json         # 项目配置
```

## 技术栈

- **React 18** - UI 框架
- **Vite** - 构建工具
- **Tailwind CSS** - CSS 框架
- **PostCSS** - CSS 处理器

## 自定义

### 修改颜色主题

编辑 `tailwind.config.js` 中的颜色配置：

```js
theme: {
  extend: {
    colors: {
      primary: {
        // 你的颜色配置
      },
    },
  },
}
```

### 修改内容

- **英雄区域**: 编辑 `src/components/Hero.jsx`
- **功能特性**: 编辑 `src/components/Features.jsx`
- **下载链接**: 编辑 `src/components/Download.jsx`

### 更换截图

将新截图放入 `public/screenshots/` 目录，并更新 `src/components/Screenshots.jsx` 中的路径。

## License

MIT
