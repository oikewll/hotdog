# 🌭 Hotdog Landing Page 项目说明

## 项目位置

`landing-page/` 目录包含了 Hotdog 产品的独立营销网站。

## 快速开始

```bash
cd landing-page
pnpm install
pnpm run dev
```

访问 http://localhost:5173 查看页面。

## 项目内容

### 页面区域
1. **Hero 区域** - 品牌展示、主要 CTA
2. **Features 区域** - 8 个核心功能展示
3. **Screenshots 区域** - 可切换主题的截图展示
4. **Download 区域** - 三大平台下载链接
5. **Tutorial 区域** - 4 步使用教程
6. **Footer 区域** - 链接和版权信息

### 技术栈
- React 18.3.1
- Vite 5.4.21
- Tailwind CSS 3.4.19
- 现代玻璃态设计

### 特性
- ✨ 现代简约设计
- 📱 完全响应式
- 🎭 流畅动画效果
- ⚡ 快速加载
- 🌐 SEO 优化
- 📦 自动部署到 GitHub Pages

## 目录结构

```
landing-page/
├── .github/workflows/     # GitHub Actions 配置
├── public/               # 静态资源（截图、Logo）
├── src/
│   ├── components/       # React 组件
│   ├── App.jsx          # 主应用
│   └── index.css        # 全局样式
├── dist/                # 构建输出
├── README.md            # 项目说明
├── QUICKSTART.md        # 快速开始指南
├── DEPLOYMENT.md        # 部署指南
├── FEATURES.md          # 功能清单
└── SUMMARY.md           # 项目总结
```

## 部署

### GitHub Pages（自动）
1. 启用 GitHub Pages（Settings → Pages → GitHub Actions）
2. 推送代码到 main 分支
3. GitHub Actions 自动构建和部署

详见 [landing-page/DEPLOYMENT.md](./landing-page/DEPLOYMENT.md)

### 其他平台
- **Vercel**: 一键部署
- **Netlify**: 拖拽部署或 Git 连接
- **Cloudflare Pages**: Git 连接自动部署

## 相关文档

- [landing-page/README.md](./landing-page/README.md) - Landing Page 项目说明
- [landing-page/QUICKSTART.md](./landing-page/QUICKSTART.md) - 快速开始指南
- [landing-page/DEPLOYMENT.md](./landing-page/DEPLOYMENT.md) - 详细部署指南
- [landing-page/FEATURES.md](./landing-page/FEATURES.md) - 功能清单
- [landing-page/SUMMARY.md](./landing-page/SUMMARY.md) - 项目总结

## 维护和更新

### 更新截图
1. 替换 `landing-page/public/screenshots/` 中的图片
2. 重新构建：`cd landing-page && pnpm run build`

### 更新下载链接
1. 编辑 `landing-page/src/components/Download.jsx`
2. 更新 `formats` 数组中的 `url` 字段

### 修改内容
各区域对应的组件文件：
- Hero: `src/components/Hero.jsx`
- Features: `src/components/Features.jsx`
- Screenshots: `src/components/Screenshots.jsx`
- Download: `src/components/Download.jsx`
- Tutorial: `src/components/Tutorial.jsx`
- Footer: `src/components/Footer.jsx`

## 性能指标

### 构建产物大小
- HTML: ~0.6 KB
- CSS: ~14.6 KB (gzip: ~3.5 KB)
- JS: ~158 KB (gzip: ~50 KB)
- 总计: ~173 KB (gzip: ~54 KB)

### 加载性能
- 首屏加载: < 2s
- HMR 更新: < 200ms
- 构建时间: < 1s

## 需要帮助？

查看详细文档：
- [QUICKSTART.md](./landing-page/QUICKSTART.md) - 最快上手
- [DEPLOYMENT.md](./landing-page/DEPLOYMENT.md) - 部署问题
- [FEATURES.md](./landing-page/FEATURES.md) - 功能说明
- [SUMMARY.md](./landing-page/SUMMARY.md) - 深入了解

---

**创建日期**: 2026-01-03
**技术栈**: React + Vite + Tailwind CSS
**作者**: Hoan
