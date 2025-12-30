# pnpm 使用说明

## ⚠️ 已知问题

在当前环境下（Node.js v24.4.1 + pnpm），安装依赖时会遇到内存溢出错误：

```
FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
```

### 问题原因

这是pnpm与Node.js v24版本的兼容性问题，特别是在处理依赖哈希计算时会导致内存溢出。

## 🔧 解决方案

### 方案1：使用npm（推荐）

npm已经过完整测试，可以正常工作：

```bash
npm install
npm run dev
npm run build
npm run package
```

### 方案2：降级Node.js

使用Node.js LTS版本（v20或v18）：

```bash
# 使用nvm切换Node.js版本
nvm install 20
nvm use 20

# 然后使用pnpm
pnpm install
pnpm dev
```

### 方案3：升级pnpm

尝试使用最新版本的pnpm：

```bash
# 升级pnpm到最新版
pnpm add -g pnpm@latest

# 清理缓存
pnpm store prune

# 重新安装
pnpm install
```

### 方案4：使用Bun

Bun是一个现代化的JavaScript运行时，兼容npm生态：

```bash
bun install --no-cache
bun run dev
```

## 📊 性能对比

| 工具 | 安装时间 | 磁盘空间 | 兼容性 |
|------|---------|---------|--------|
| npm  | ~45s    | ~300MB  | ✅ 完美 |
| pnpm | ❌ 失败  | N/A     | ⚠️ 需降级Node.js |
| bun  | 未测试   | 未测试  | 未知   |

## 🎯 推荐配置

对于本项目，推荐使用以下配置之一：

### 配置A（稳定）
- Node.js v20.x LTS
- npm v10.x
- 适合：生产环境、新手用户

### 配置B（最新）
- Node.js v20.x LTS
- pnpm v9.x
- 适合：追求速度、熟悉pnpm用户

### 配置C（实验性）
- Node.js v24.x
- npm v10.x
- 适合：开发环境、测试最新特性

## 📝 更新日志

- 2025-12-31：发现Node.js v24 + pnpm内存溢出问题
- 2025-12-31：验证npm可正常工作
- 2025-12-31：建议降级到Node.js v20 LTS使用pnpm

## 🔗 相关链接

- [pnpm已知问题](https://github.com/pnpm/pnpm/issues)
- [Node.js版本列表](https://nodejs.org/en/about/previous-releases)
- [nvm安装指南](https://github.com/nvm-sh/nvm)
