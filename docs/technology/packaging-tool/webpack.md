
- [webpack](https://www.webpackjs.com/configuration/output/#outputclean)

### 构建方式

Webpack 先打包再启动开发服务器。

### 环境变量
```
.env.[mode] 
```
只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。

可以通过传递 --mode 选项参数为命令行覆写默认的模式。
```
vue-cli-service build --mode release
```

代码中访问：
```
console.log(process.env.VUE_APP_BASE_API)
```

### 热更新 

Webpack 的热更新通常需要借助 webpack-dev-server 等插件，在一些情况下配置起来比较复杂。