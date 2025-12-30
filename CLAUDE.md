# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hotdog is an Electron-based desktop application for serving static files locally via HTTP/HTTPS. It features a modern React UI with Tailwind CSS, built using Vite for fast HMR during development.

## Development Commands

### Setup and Installation

```bash
# Install dependencies (use npm, see pnpm notes below)
npm install

# Development mode with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Platform-Specific Packaging

```bash
# Package for all platforms
npm run package

# Platform-specific builds
npm run package:mac      # macOS (.dmg, .zip)
npm run package:win      # Windows (NSIS installer, portable)
npm run package:linux    # Linux (.AppImage, .deb)
```

### Package Manager Notes

**Important**: On Node.js v24, pnpm has known memory overflow issues. Use npm instead, or downgrade to Node.js v20 LTS to use pnpm. See PNPM_NOTES.md for details.

## Architecture

### Three-Process Model

This is a standard Electron application with three isolated processes:

1. **Main Process** (`src/main/index.js`)
   - Creates BrowserWindow
   - Manages application lifecycle
   - Handles IPC from renderer
   - Controls StaticServer instance
   - Uses electron-store for persistence

2. **Preload Script** (`src/preload/index.js`)
   - Security bridge using contextBridge
   - Exposes safe IPC methods to renderer as `window.electronAPI`
   - All renderer ↔ main communication must go through here

3. **Renderer Process** (`src/renderer/`)
   - React 18 application
   - Vite handles bundling and HMR
   - Communicates with main only via `window.electronAPI`
   - Uses Tailwind CSS for styling

### Key Architecture Patterns

#### IPC Communication Flow

All communication between renderer and main follows this pattern:

```
Renderer → window.electronAPI.method() → Preload (contextBridge) → Main (ipcMain.handle)
Main → mainWindow.webContents.send() → Preload (ipcRenderer.on) → Renderer callback
```

Available IPC channels (defined in `src/preload/index.js`):
- `select-folder` - Opens native folder dialog
- `start-server` / `stop-server` - Controls HTTP/HTTPS server
- `get-server-status` - Queries current server state
- `open-browser` - Opens URL in default browser
- `get-settings` / `save-theme` - Manages persisted settings
- `server-log` - Push notifications from main to renderer (logs)

#### StaticServer Class (`src/main/server.js`)

Singleton instance managing HTTP/HTTPS server:
- Uses `serve-handler` for static file serving
- Generates self-signed certificates on-demand using `selfsigned`
- Tracks server state (running/stopped)
- Accepts config: `{ port, https, directoryListing, rootPath }`
- Callbacks to main process for logging

#### State Management

- **Persistent state**: electron-store saves `{ lastFolder, port, https, directoryListing, theme }`
- **Runtime state**: React hooks in App.jsx manage UI state
- **Server state**: StaticServer class maintains server instance

#### Environment Detection

The main process uses `process.env.NODE_ENV` and `process.env.ELECTRON_RENDERER_URL` to determine:
- Development: Load from Vite dev server (http://localhost:5173)
- Production: Load from built files (file://)

### Build Configuration

`electron.vite.config.js` defines three separate Vite builds:

1. **main**: Bundles main process (ESM, externalized deps)
2. **preload**: Bundles preload script (ESM, externalized deps)
3. **renderer**: Bundles React app (includes React HMR plugin)

Path alias `@` → `src/renderer/src` is available in renderer code.

### Component Structure

Five main React components in `src/renderer/src/components/`:

- **FolderSelector** - Folder selection UI
- **Settings** - Port, HTTPS, directory listing toggles
- **ServerControls** - Start/stop buttons
- **StatusDisplay** - Shows server URL with copy/open actions
- **LogViewer** - Real-time log display (max 100 entries)

App.jsx orchestrates these and manages theme switching (light/dark/system).

## Code Conventions

- **Module system**: ESM (import/export) throughout - this is a `"type": "module"` package
- **Main process**: Use `fileURLToPath(import.meta.url)` to get `__dirname` equivalent
- **Renderer imports**: Use `@/` alias for renderer source files
- **Styling**: Tailwind utility classes only - no custom CSS outside `@layer` directives
- **IPC**: Always validate inputs in main process handlers for security

## Security Model

- `contextIsolation: true` - Renderer has no direct Node.js access
- `nodeIntegration: false` - Node APIs not exposed to renderer
- `sandbox: false` - Required for preload script to work
- All Node.js operations go through preload's contextBridge

## HMR Behavior

During `npm run dev`:
- **Renderer changes**: Vite HMR applies instantly
- **Main/preload changes**: electron-vite restarts the app
- DevTools auto-open in development

## Testing the App

Use the included `demo-site/` folder to test server functionality:
1. Run `npm run dev`
2. Click "选择文件夹" and select `demo-site/`
3. Click "启动服务器"
4. Browser opens to http://localhost:8080 showing demo page
