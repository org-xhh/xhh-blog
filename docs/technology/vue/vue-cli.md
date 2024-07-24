
## 本地服务 Proxy 解决跨域

vue.config.js：
```
module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8081,
    open: true, // vue项目启动时自动打开浏览器
    proxy: {
      '/api': {
        target: "http://www.test.com", // 后台服务器地址
        changeOrigin: true, // 是否跨域
        pathRewrite: { // 把 '/api' 替换为 ''
          '^/api': ''
        }
      }
    }
  }
}
```
通过 axios 发送请求，配置请求的根路径：
```
axios.defaults.baseURL = '/api'
```