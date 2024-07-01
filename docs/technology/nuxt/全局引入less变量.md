# 全局引入less变量

## 安装@nuxtjs/style-resources

## 配置 styleResources

nuxt.config.js:
```
modules: [
    '@nuxtjs/style-resources'
],
styleResources: {
    less: '@/assets/styles/theme.less'
},
```
less文件有多个，可以设置为数组，即 less: [xx.less, yy.less]

## 使用

```
color: @main-color;
```

## 扩展
```
modules: [
    '@nuxtjs/style-resources'
],
styleResources: {
    less: [],
    scss: [],
    sass: [],
    stylus: []
},
```


