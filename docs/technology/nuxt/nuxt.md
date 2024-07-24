
- [Nuxt.js](https://www.nuxtjs.cn/guide)

### 环境变量
```
npm install cross-env --save-dev
```
```
"dev": "cross-env NODE_ENV=development nuxt",
"upload": "cross-env NODE_ENV=production node build/deploy/index.js",
"upload:stage": "cross-env NODE_ENV=stage node build/deploy/index.js",
```
代码中访问：
```
process.env.NODE_ENV
```

### 服务器端渲染SSR部署
```
服务端启动项目：
pm2 start npm --name "你的项目名称" -- run start
本地打包文件启动项目：
npm run start
```

放在服务器端文件：

![alt text](image-1.png)