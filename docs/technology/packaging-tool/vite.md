
- [Vite](https://cn.vitejs.dev/config/build-options)

### 构建方式

Vite 采用了即时编译的方式，在开发模式下通过浏览器原生支持的 ES Modules 特性进行加载，不需要打包。

### 环境变量
```
.env.[mode]
```

只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。

代码中访问：
```
console.log(import.meta.env.VITE_SOME_KEY) 
```

### 热更新

Vite 内置了基于浏览器原生模块热更新的开发服务器，无需额外配置即可实现快速的热更新。