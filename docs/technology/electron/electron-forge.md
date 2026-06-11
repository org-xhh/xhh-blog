# [Electron Forge](https://www.electronforge.io/)

### 添加 vue3 支持
https://www.electronforge.io/guides/framework-integration/vue-3

### 添加 Tailwind.css

一、**Tailwindcss@3**
```
npm install tailwindcss@3 postcss autoprefixer -S
```
```
npx tailwindcss init -p
```
执行完该命令后，会自动生成 tailwind.config.js 和 postcss.config.js 文件

tailwind.config.js 文件的 content 添加：
```
content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"
]
```
index.css 文件引入：
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
VScode 安装插件
```
Tailwind CSS IntelliSense
```

二、**Tailwindcss@4**

https://tailwindcss.com/docs/installation/using-vite

要把 vite.renderer.config.ts 后缀改为 mjs

