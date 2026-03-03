# 部署指南

本文档介绍如何将 Hotdog Landing Page 部署到各个平台。

## GitHub Pages（推荐）

### 自动部署

1. **启用 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"

2. **推送代码**
   ```bash
   git add .
   git commit -m "Add landing page"
   git push
   ```

3. **自动构建和部署**
   - GitHub Actions 会自动触发
   - 几分钟后，网站将部署到 `https://yourusername.github.io/hotdog/`

### 手动部署

如果不使用 GitHub Actions，可以手动部署：

```bash
cd landing-page
pnpm build
```

然后将 `dist/` 目录的内容上传到 GitHub Pages。

## Vercel

1. **连接 GitHub 仓库**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库

2. **配置项目**
   - Framework Preset: Vite
   - Root Directory: `landing-page`
   - Build Command: `pnpm build`
   - Output Directory: `dist`

3. **部署**
   - 点击 "Deploy" 按钮
   - Vercel 会自动构建和部署

## Netlify

### 方法 1：拖拽部署

1. 构建项目：
   ```bash
   cd landing-page
   pnpm build
   ```

2. 访问 [app.netlify.com](https://app.netlify.com)

3. 将 `dist/` 目录拖拽到上传区域

### 方法 2：连接 Git

1. 访问 Netlify，点击 "New site from Git"

2. 选择你的 GitHub 仓库

3. 配置构建设置：
   - Base directory: `landing-page`
   - Build command: `pnpm build`
   - Publish directory: `landing-page/dist`

4. 点击 "Deploy site"

## Cloudflare Pages

1. **连接 GitHub**
   - 访问 [pages.cloudflare.com](https://pages.cloudflare.com)
   - 点击 "Create a project"
   - 选择你的 GitHub 仓库

2. **配置构建**
   - Framework preset: Vite
   - Root directory: `landing-page`
   - Build command: `pnpm build`
   - Build output directory: `dist`

3. **部署**
   - 点击 "Save and Deploy"

## 自定义域名

部署完成后，你可以在各个平台的设置中添加自定义域名：

- **GitHub Pages**: Settings → Pages → Custom domain
- **Vercel**: Project Settings → Domains
- **Netlify**: Site settings → Domain management
- **Cloudflare Pages**: Pages project → Custom domains

## 环境变量

如果需要配置环境变量（例如 API 密钥），在各个平台的设置中添加：

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **Cloudflare Pages**: Settings → Environment variables

## 性能优化

部署后，建议启用以下优化：

1. **启用 HTTPS**（所有平台默认启用）
2. **启用 CDN**（所有平台默认启用）
3. **启用 Gzip 压缩**（所有平台默认启用）
4. **配置缓存头**

## 故障排除

### 构建失败

1. 检查 Node.js 版本是否为 18+
2. 检查 pnpm 版本是否为 8+
3. 清除缓存后重试

### 图片无法加载

1. 确保图片路径以 `/` 开头
2. 检查 `public/` 目录中是否有对应的文件

### 路由 404

1. 确保配置了 SPA 路由重写
2. 对于 Netlify，创建 `public/_redirects` 文件：
   ```
   /*    /index.html   200
   ```

## 更新部署

所有平台都支持自动部署：

1. 推送代码到 GitHub
2. 平台会自动检测到更改
3. 自动构建并部署新版本

## 监控

建议设置以下监控：

- **Vercel Analytics**: 内置分析工具
- **Netlify Analytics**: 内置分析工具
- **Google Analytics**: 添加到 `index.html`
- **Sentry**: 错误监控
