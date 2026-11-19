# [Babel](https://babeljs.io/docs/babel-preset-env)

<!-- https://babel.nodejs.cn/docs/babel-preset-env/#targets -->

<!-- https://static.kancloud.cn/cyyspring/webpack/2670925 -->

<!-- https://astexplorer.net/ -->

> 官网解释：Babel 是一个工具链，主要用于将 ECMAScript 2015+ 语法代码转换为可以在旧版浏览器或其他环境中运行的、兼容低版本的 JavaScript 代码。

<font color=#7A297B>功能：Babel 负责语法转译，搭配 core-js 实现 API 的 polyfill 补齐</font>

## @babel/core

是 Babel 实现编译的核心，平常说的 Babel 6（babel-core）、Babel 7 是 @babel/core 的版本。插件、preset 都是交给 @babel/core 来加载执行。

## Presets

| 预设 | 说明 |
|---|---|
| @babel/preset-env | 编译 ES2015+ 语法 |
| @babel/preset-typescript | 编译 Typescript 语法 |
| @babel/preset-react | 编译 React 语法 |

安装一个预设，相当于安装了一系列的插件，通过预设可以减少开发者的配置。

## @babel/preset-env
.babelrc 或 babelrc.js 或 babel.config.js:
```
presets: [
 "@babel/preset-env",
]
```
@babel/preset-env 仅内置已经进入 Stage 4（正式纳入 ES 标准）特性的转换插件；处于提案阶段的语法，需要单独引入插件。

<font color=#085820>@babel/preset-env 的 useBuiltIns 选项默认值是 false，</font>这意味着使用这个 Babel 插件预设时，<font color=#085820>不会自动插入 polyfill。</font>如果想要让 Babel 自动包含所需的 polyfill，需要显式地设置 useBuiltIns 选项（entry、usage）。

```
presets: [
  ['@babel/preset-env', { useBuiltIns: false}]
]

presets: [
  ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]
]
```
> 备注：`useBuiltIns: 'usage'` 只扫描**自己业务代码**，`node_modules` 里第三方依赖的代码默认不会扫描，这就是为什么会有 `transpileDependencies`

## @vue/babel-preset-app

`@vue/babel-preset-app` 内部封装了 `@babel/preset-env`，默认 `useBuiltIns: 'usage'`，内部还自动处理 core-js 版本、runtime、JSX 等

> package.json 文件里的 browserslist 字段 (或单独的 .browserslistrc 文件)，用来指定项目的目标浏览器。这个值会被 @babel/preset-env 和 autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。
 

```
module.exports = {
  presets: [
    '@vue/babel-preset-app'
  ]
}
```
<font color=gray size=2>@vue/app 是 @vue/babel-preset-app 的简写别名；推荐直接写全名 @vue/babel-preset-app，可读性更好。</font>

<font color=gray size=2>提示：该预设仅用于 Vue CLI 项目</font>

## Babel插件和预设执行顺序

- 插件 plugins 比预设 presets 先执行

- 插件 数组从前向后执行

- 预设 数组从后向前执行

> 备注：同类型之间顺序规则，插件优先于预设

## ES2020语法配置demo

以 <font color=#44000A>可选链操作符 **?.**</font> 为例：
```
let obj = {}
obj?.foo?.xxx
```
- 确定 <font color=#44000A>**?.**</font> 是 ES2020 新增特性
- 获取项目中 @vue/babel-preset-app 版本，以此获取其依赖项 @babel/preset-env 版本
- 根据 @babel/preset-env 版本，确定是否包含 ES2020 特性
- 如果已包含，则项目中配置该预设就可以使用
- 如果不包含，则需要安装对应 [plugin](https://babeljs.io/docs/plugins-list)

安装插件：
```
npm install @babel/plugin-proposal-optional-chaining --save-dev
```

**babel.config.js**:
```
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining'
  ]
}
```

template 模板中支持：

**vue.config.js**: 
```
chainWebpack: (config) => {
  config.module
    .rule('vue')
    .use('vue-loader')
    .tap(options => {
      options.compiler = require('vue-template-babel-compiler')
      return options
    }
  )
}
```
该方案仅适用于 Vue2；Vue3 模板原生支持可选链、空值合并等语法，无需额外插件与替换 template compiler。

## polyfill

ES6+ API 的方法与实现的集合叫做 polyfill，也就是经常说的"垫片"。

Babel 默认只转换新的JavaScript 语法，而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）。

这些在使用时需要用polyfill的方式来提供旧环境的兼容性。

### @babel/plugin-transform-runtime作用：

1. 抽离复用辅助函数，避免重复打包；

2. 配合 `corejs: 3` 引入隔离版本的 polyfill，**不污染全局**（和 @babel/preset-env 的 usage/entry 全局垫片是两套方案）

## vue-cli 项目中使用babel
`@babel/plugin-transform-runtime` 设置 `corejs: 3` 时，会从 @babel/runtime-corejs3 引入隔离版本（core-js-pure）的 polyfill，不会修改全局原型和全局内置对象，不会污染全局环境；该方案多用于组件库、工具库开发。

⚠️ 注意：开启 corejs:3 需要安装 `@babel/runtime-corejs3`，并且建议把 `@babel/preset-env` 的 `useBuiltIns` 设置为 false，防止两套 polyfill 同时注入造成冲突。
```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          // 只进行语法转换，避免两套polyfill冲突
          presets: ['@babel/preset-env', { useBuiltIns: false }],
          plugins: [
            [
              // 将core-js交给transform-runtime处理API
              '@babel/plugin-transform-runtime',
              {
                corejs: 3, // 开启隔离版core-js polyfill
                helpers: true, // 默认开启，抽离重复辅助函数
                regenerator: true // 处理async/generator
              }
            ]
          ]
        }
      }
    }
  ]
}
```
因为用了 exclude: /node_modules/，可能会造成某个第三方依赖出现兼容性问题，解决办法就是在
vue.config.js 设置：
```
// 用来指定哪些 node_modules 里面的依赖，强制交给 babel 转译
transpileDependencies: [
  'module-name'
]
```