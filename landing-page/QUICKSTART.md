# 🚀 快速开始

## 第一次使用

### 1. 安装依赖

```bash
cd landing-page
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm run dev
```

在浏览器中打开 http://localhost:5173

### 3. 实时预览

修改代码后，浏览器会自动刷新，无需手动重载。

## 构建和部署

### 构建生产版本

```bash
pnpm run build
```

构建产物会输出到 `dist/` 目录。

### 预览生产版本

```bash
pnpm run preview
```

### 部署到 GitHub Pages

1. 确保已启用 GitHub Pages（Settings → Pages → GitHub Actions）
2. 推送代码到 main 分支
3. GitHub Actions 会自动构建和部署
4. 几分钟后，访问你的 GitHub Pages 地址

## 常用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产版本
pnpm run preview

# 清理构建产物
rm -rf dist
```

## 目录说明

- `src/` - 源代码目录
  - `components/` - React 组件
  - `App.jsx` - 主应用组件
  - `main.jsx` - React 入口
  - `index.css` - 全局样式
- `public/` - 静态资源目录
  - `screenshots/` - 应用截图
  - `hotdog.svg` - Logo
- `dist/` - 构建输出目录（git 忽略）

## 修改内容

### 更新文案
- Hero 区域：编辑 `src/components/Hero.jsx`
- Features：编辑 `src/components/Features.jsx`
- Tutorial：编辑 `src/components/Tutorial.jsx`
- Download：编辑 `src/components/Download.jsx`

### 更换截图
1. 将新截图放入 `public/screenshots/`
2. 命名规则：`light-1.jpeg`, `light-2.jpeg`, `dark-1.jpeg`, `dark-2.jpeg`

### 修改样式
- 全局样式：编辑 `src/index.css`
- Tailwind 配置：编辑 `tailwind.config.js`
- 组件内样式：使用 Tailwind 类名

## 故障排除

### 端口被占用
如果 5173 端口被占用，Vite 会自动选择下一个可用端口。

### 构建失败
1. 删除 `node_modules` 和 `pnpm-lock.yaml`
2. 重新运行 `pnpm install`
3. 再次尝试构建

### 图片无法加载
1. 确保图片在 `public/` 目录下
2. 使用绝对路径（以 `/` 开头）

## 需要帮助？

- [README.md](./README.md) - 项目说明
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 详细部署指南
- [FEATURES.md](./FEATURES.md) - 功能清单
- [SUMMARY.md](./SUMMARY.md) - 项目总结

## 提示

- 修改组件后，页面会自动刷新
- 修改 `tailwind.config.js` 后，需要重启开发服务器
- 使用浏览器开发者工具查看响应式设计
- 按 `Ctrl + C` 停止开发服务器

Happy Coding! 🎉
