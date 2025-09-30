
- [Vite](https://cn.vitejs.dev/config/build-options)

### 和 webpack 启动流程比较

| Vite启动流程	| Webpack启动流程 |
| -----------   | ------------ |
| 1. 启动服务器	 | 1. 扫描所有模块 |
| 2. 按需编译首个页面 |	2. 打包成bundle |
| 3. 其他模块等请求时再处理	| 3. 启动服务器 |

Vite 采用了即时编译的方式，在开发模式下通过浏览器原生支持的 ES Module 特性进行加载，不需要打包。

<!-- 
### esbuild
esbuild 强力加持：依赖预构建，将非ESM依赖转换为ESM；将大型依赖内部众多小模块打包成单一模块。 

开发时用 esbuild，生产时用 rollup 构建。
-->

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