# 快速开始指南

## 🚀 5分钟快速上手

### 1. 安装依赖（首次运行）

```bash
pnpm install

# 或使用 npm
npm install
```

### 2. 启动开发模式

```bash
pnpm dev

# 或使用 npm
npm run dev
```

这将启动应用并自动打开DevTools。你应该能看到：
- ✅ Vite dev server 运行在 `http://localhost:5173`
- ✅ Electron 应用窗口自动打开
- ✅ 浏览器开发者工具自动打开

### 3. 测试功能

#### 基本功能测试

1. **选择演示文件夹**
   - 应用中点击"选择文件夹"
   - 选择项目下的 `demo-site` 文件夹

2. **配置服务器**
   - 端口：8080（默认）
   - HTTPS：关闭（或开启测试）
   - 目录列表：开启

3. **启动服务器**
   - 点击"启动服务器"按钮
   - 应用会自动在浏览器中打开 `http://localhost:8080`
   - 你应该能看到Hotdog演示页面

4. **查看日志**
   - 滚动到日志查看器
   - 观察服务器启动日志和请求日志

#### HMR（热重载）测试

1. **测试React组件热更新**
   ```bash
   # 保持应用运行，用编辑器打开：
   src/renderer/src/App.jsx

   # 修改标题文字：
   🌭 Hotdog → 🌭 Hotdog HMR测试

   # 保存文件，观察应用自动刷新
   ```

2. **测试样式热更新**
   ```bash
   # 打开样式文件：
   src/renderer/src/styles/index.css

   # 在文件末尾添加：
   .card {
     border: 2px solid red !important;
   }

   # 保存后，所有卡片应该立即显示红色边框
   ```

3. **测试组件修改**
   - 修改任何组件文件
   - 保存后立即看到变化

### 4. 测试主题切换

在应用右上角：
- ☀️ 点击太阳图标 → 切换到浅色模式
- 🌙 点击月亮图标 → 切换到深色模式
- 💻 点击显示器图标 → 跟随系统主题

### 5. 测试HTTPS

1. 在设置区启用"启用 HTTPS"开关
2. 重新启动服务器
3. 浏览器会打开 `https://localhost:8080`
4. 出现安全警告时，点击"高级" → "继续访问"
5. 应该能正常访问页面

## 📦 构建和打包

### 构建生产版本

```bash
pnpm build

# 或使用 npm
npm run build
```

### 预览生产版本

```bash
pnpm preview
```

### 打包为可执行文件

```bash
# macOS
pnpm package:mac

# Windows
pnpm package:win

# Linux
pnpm package:linux

# 所有平台
pnpm package
```

打包后的文件位于 `release/` 目录。

## 🐛 故障排除

### 问题：端口8080被占用
**解决**：在设置中更改为其他端口，如8081、3000等

### 问题：HMR不工作
**检查**：
1. 确保使用 `pnpm dev` 而不是 `pnpm build`
2. 查看终端输出，确认Vite dev server正在运行
3. 检查浏览器控制台是否有错误

### 问题：应用无法启动
**解决**：
```bash
# 清理并重新安装
rm -rf node_modules
pnpm install

# 或尝试清理缓存
rm -rf node_modules/.vite
```

### 问题：pnpm安装失败
**解决**：
```bash
# 尝试使用npm
npm install

# 或更新pnpm
pnpm add -g pnpm
```

## 💡 开发提示

### 推荐的编辑器

- **VS Code** + 插件：
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

### 调试技巧

**主进程调试**：
```javascript
// 在 src/main/index.js 中添加
console.log('Debug:', someVariable);
```
输出会显示在启动应用的终端中。

**渲染进程调试**：
```javascript
// 在任何React组件中添加
console.log('Debug:', someVariable);
```
输出会显示在Electron应用的DevTools控制台中。

## 📚 进阶使用

### 添加新功能

1. **添加新的IPC通道**：
   - 在 `src/main/index.js` 中注册新的 `ipcMain.handle`
   - 在 `src/preload/index.js` 中暴露新的API
   - 在React组件中调用 `window.electronAPI.yourMethod()`

2. **添加新的UI组件**：
   - 在 `src/renderer/src/components/` 创建新组件
   - 使用Tailwind CSS类名样式化
   - 在 `App.jsx` 中导入并使用

### 自定义主题

编辑 `tailwind.config.js` 中的颜色配置：
```javascript
colors: {
  primary: {
    500: '#your-color',
    // ...
  }
}
```

## 🎯 下一步

- 阅读完整的 [README.md](./README.md)
- 查看源代码了解实现细节
- 根据需要自定义功能
- 打包并分发给其他用户

---

如有问题，请查看 [README.md](./README.md) 中的"常见问题"部分。
