# 🌭 Hotdog 项目指南 (GEMINI.md)

## 📋 项目概览
Hotdog 是一个现代化、极简、美观的本地静态文件服务器桌面应用。它允许用户快速将本地文件夹转换为 HTTP/HTTPS 服务，适用于前端开发调试、局域网文件共享等场景。

### 核心技术栈
- **框架**: Electron (跨平台桌面框架)
- **构建工具**: electron-vite (集成 Vite 的 Electron 构建方案)
- **前端**: React + Tailwind CSS
- **静态服务**: serve-handler (生产级静态文件处理)
- **安全**: selfsigned (自动生成本地 HTTPS 证书)
- **存储**: electron-store (配置持久化)

---

## 🛠️ 构建与运行

### 环境要求
- **Node.js**: >= 18 (建议 v20 LTS)
- **包管理器**: npm (Node v24 环境下优先使用 npm 以避免 pnpm 内存问题)

### 开发命令
- `npm install`: 安装依赖
- `npm run dev`: 启动开发模式 (支持 HMR)
- `npm run build`: 构建生产版本
- `npm run package`: 打包跨平台安装包 (输出至 `release/`)
- `npm run package:win / :mac / :linux`: 定向打包特定平台

### 落地页 (Landing Page)
- 目录: `landing-page/`
- 命令: 在该目录下执行 `npm run dev` / `npm run build`

---

## 🏗️ 架构说明

### 1. 进程模型
- **主进程 (Main Process)**: 位于 `src/main/`。负责 Node.js 环境操作，包括文件系统访问、HTTP 服务器逻辑 (`server.js`) 和应用生命周期管理。
- **渲染进程 (Renderer Process)**: 位于 `src/renderer/`。基于 React 的 Web 界面，通过预加载脚本与主进程通信。
- **预加载脚本 (Preload)**: 位于 `src/preload/`。定义安全桥接 API。

### 2. 关键模块
- **StaticServer (`src/main/server.js`)**: 封装了 `http` 和 `https` 模块，使用 `serve-handler` 处理请求。支持动态切换端口和目录列表。
- **IPC 通信**:
    - `select-folder`: 调用系统对话框选择目录。
    - `start-server` / `stop-server`: 控制服务器状态。
    - `server-log`: 从后端实时推送日志到前端展示。

### 3. 数据持久化
应用使用 `electron-store` 记录以下设置，确保重启后恢复状态：
- 上次访问的文件夹
- 端口号 (默认 8080)
- HTTPS 开启状态
- 目录列表开关
- UI 主题 (Light/Dark/System)

---

## 📏 开发约定

### 代码风格
- **模块化**: 强制使用 ESM (`"type": "module"`)。
- **UI 组件**: 渲染进程组件应放在 `src/renderer/src/components/`。
- **样式**: 优先使用 Tailwind CSS 实用类，自定义样式放在 `src/renderer/src/styles/index.css`。

### 安全实践
- **Context Isolation**: 必须保持开启，所有 Electron API 必须通过 `preload` 暴露。
- **Sandbox**: 启用沙盒模式以增强安全性。
- **HTTPS**: 自签名证书仅限 localhost 使用。

### 提交规范
- 建议遵循清晰的语义化提交信息。

---

## 📝 TODO / 待办事项
- [ ] 支持局域网 IP 访问显示 (不仅仅是 localhost)
- [ ] 增加文件上传功能
- [ ] 增加基础认证 (Basic Auth) 支持
- [ ] 优化大文件下载的性能监控

---

**注意**: 修改 `src/main` 代码后，`electron-vite` 会自动重启应用；修改 `src/renderer` 代码则触发 HMR 刷新。
