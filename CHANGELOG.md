# Changelog

## [1.0.1](https://github.com/oikewll/hotdog/compare/hotdog-v1.0.0...hotdog-v1.0.1) (2026-06-04)


### 🐛 Bug Fixes

* 改用 out/ 目录作为 Electron 构建输出（移除 symlink 依赖） ([70cc62c](https://github.com/oikewll/hotdog/commit/70cc62c5419c1778759426435b2157f075287fe2))
* 补齐 Linux .deb 维护者信息并把 checksums 抽成跨平台 ESM 脚本 ([c7ccdaa](https://github.com/oikewll/hotdog/commit/c7ccdaae134450e8ca538162be330dd055ba3c9f))
* 重建 dist-electron symlink 解决 CI 中 electron-builder 找不到入口 ([3651b23](https://github.com/oikewll/hotdog/commit/3651b23947886b8de27bfab9b83c39c5313d1c6f))


### 📝 Documentation

* 添加发布流程说明到 README ([ed2c012](https://github.com/oikewll/hotdog/commit/ed2c012d36b31e7287dd905597fd653c39f57f0b))
