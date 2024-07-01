# 配置全局使用less变量

## vite

vite.config.js:
```
export default defineConfig(({ mode }) => ({
    ...
    css: {
    preprocessorOptions: {
      less: {
        math: 'always', // 括号内使用数学计算
        additionalData: `@import "@/assets/css/public.less";`
      }
    },
}))
```

## webpack

vue.config.js:
```
module.exports = {
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/public.less";`
      }
    }
  }
}
```
