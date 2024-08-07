# [Babel](https://babeljs.io/docs/babel-preset-env)

<!-- https://babel.nodejs.cn/docs/babel-preset-env/#targets -->

<!-- https://static.kancloud.cn/cyyspring/webpack/2670925 -->

> 官网解释：Babel是一个工具链，主要用于将采用ECMAScript 2015+语法编写的代码转换为向后兼容的 JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

<font color=#7A297B>编译ES6+最新语法，实现旧版本浏览器不支持的ES6+的API。</font>

## @babel/core

是 Babel 实现编译的核心，平常说的 Babel 6（babel-core）、Babel 7 指的就是 @babel/core 的版本。

## Presets

| 预设 | 说明 |
|---|---|
| @babel/preset-env | 编译 ES2015+ 语法 |
| @babel/preset-typescript | 编译 Typescript 语法 |
| @babel/preset-react | 编译 React 语法 |
| @babel/preset-flow | 编译 Flow 语法 |

安装一个预设，相当于安装了一系列的插件，通过预设可以减少开发者的配置。

## @babel/preset-env
.babelrc 或 babelrc.js 或 babel.config.js:
```
presets: [
 "@babel/preset-env",
]
```
只包含编译**stage4**的预设

<font color=#085820>@babel/preset-env 的 useBuiltIns 选项默认值是 false。</font>这意味着使用这个 Babel 插件预设时，<font color=#085820>不会自动插入 polyfill。</font>如果想要让 Babel 自动包含所需的 polyfill，需要显式地设置 useBuiltIns 选项（entry、usage）。

```
presets: [
  // @babel/preset-env 只转换语法，不要提供 polyfill
  [
    "@babel/preset-env", 
    {
      useBuiltIns: false
    }
  ]
],
```

#### 如何查看当前 @babel/preset-env 包含了哪些预设呢？

<font color=#B21016>@babel/preset-env --> package.json --> dependencies 里面</font>


## @vue/babel-preset-app

如果用 Vue，presets 一般是 @vue/app，这个是把在 @babel/preset-env 包含的 plugins 上又加了很多自己定义的 plugins。

默认的 Vue cli 项目会使用 @vue/babel-preset-app，默认配置了@babel/plugin-transform-runtime。

> package.json 文件里的 browserslist 字段 (或单独的 .browserslistrc 文件)，用来指定项目的目标浏览器。这个值会被 @babel/preset-env 和 autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。
 

```
module.exports = {
  presets: [
    '@vue/app'
  ]
}
```
<font color=gray size=2>@vue/app 实际对应的是 @vue/babel-preset-app</font>

## Babel 插件和预设执行顺序

- 插件 plugins 比预设 presets 先执行

- 插件 数组从前向后执行

- 预设 数组从后向前执行

## ES2020 语法配置demo

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

template 模板中支持

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

## polyfill

ES6+ API 的方法与实现的集合叫做 polyfill，也就是经常说的"垫片"

## webpack中使用babel
```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'], // 只进行语法转换
          plugins: [
            [
              // 将core-js交给transform-runtime处理 API
              // 解决多个地方使用相同代码导致打包重复的问题
              "@babel/plugin-transform-runtime",
              {
                "corejs": 3 // 推荐版本， 注意要安装@babel/runtime-corejs3
              }
            ]
          ]
        }
      }
    }
  ]
}
```
因为我们用了 exclude: /node_modules/，可能会造成某个第三方依赖出现兼容性问题，解决办法就是在
vue.config.js 设置：
```
transpileDependencies: [
  'module-name'
]
```




