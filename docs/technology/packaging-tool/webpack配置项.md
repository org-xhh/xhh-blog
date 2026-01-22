webpack.base.cjs:
```
// 导入 Node.js 内置的 path 模块，用于处理文件路径
const path = require('path');
// 导入 vue-loader 插件，用于处理 .vue 文件
const { VueLoaderPlugin } = require('vue-loader');
// 导入 HtmlWebpackPlugin，用于生成 HTML 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 导入 unplugin-auto-import 的 webpack 版本，用于自动导入 Vue 组合式 API
const AutoImport = require('unplugin-auto-import/webpack');
// 导入 unplugin-vue-components 的 webpack 版本，用于自动导入 Vue 组件
const Components = require('unplugin-vue-components/webpack');
// 导入 ElementPlusResolver，用于自动导入 Element Plus 组件和样式
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
    // 入口文件配置
    entry: './src/main.ts',

    output: {
        // 输出目录，使用绝对路径
        path: path.resolve(__dirname, 'dist'),
    },

    // 解析配置
    resolve: {
        // 路径别名配置
        alias: {
            // 将 @ 别名指向 src 目录
            '@': path.resolve(__dirname, 'src'),
        },
        // 自动解析的扩展名列表，这样导入时可以省略扩展名
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
    },

    // 插件配置
    plugins: [
        // 自动导入配置
        AutoImport({
            // 解析器配置，使用 ElementPlusResolver 自动导入 Element Plus
            resolvers: [ElementPlusResolver()],
        }),
        // 自动组件导入配置
        Components({
            // 解析器配置，使用 ElementPlusResolver 自动导入 Element Plus 组件
            resolvers: [ElementPlusResolver()],
        }),
        // 用于编译 Vue 单文件组件
        new VueLoaderPlugin(),
        // 用于生成 HTML 文件
        new HtmlWebpackPlugin({
            // 使用 public/index.html 作为模板
            template: './public/index.html',
        })
    ],

    // 模块配置
    module: {
        // 规则配置，用于处理不同类型的文件
        rules: [
            {
                // 匹配 .vue 文件
                test: /\.vue$/,
                // 使用 vue-loader 处理
                loader: 'vue-loader',
                // vue-loader 选项配置
                options: {
                    // 编译器选项
                    compilerOptions: {
                        // 不保留空格，减小文件体积
                        preserveWhitespace: false,
                    },
                },
            },
            {
                // 匹配 .ts 文件
                test: /\.ts$/,
                // 排除 node_modules 目录
                exclude: /node_modules/,
                // 使用多个 loader 处理
                use: [
                    // 首先使用 babel-loader 处理
                    {
                        loader: 'babel-loader',
                        options: {
                            // 使用 @babel/preset-env 预设，将 ES6+ 转换为 ES5
                            presets: ['@babel/preset-env'],
                            // 使用 @babel/plugin-transform-runtime 插件，避免重复注入 helper 函数
                            plugins: ['@babel/plugin-transform-runtime'],
                        },
                    },
                    // 然后使用 ts-loader 处理
                    {
                        loader: 'ts-loader',
                        options: {
                            // 为 .vue 文件添加 .ts 后缀，以便 ts-loader 处理
                            appendTsSuffixTo: [/\.vue$/],
                            // 只进行转译，不进行类型检查，提高构建速度
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                // 匹配 .js 文件
                test: /\.js$/,
                // 排除 node_modules 目录
                exclude: /node_modules/,
                // 使用 babel-loader 处理
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 使用 @babel/preset-env 预设，将 ES6+ 转换为 ES5
                        presets: ['@babel/preset-env'],
                        // 使用 @babel/plugin-transform-runtime 插件，避免重复注入 helper 函数
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                // 匹配 .css 文件
                test: /\.css$/,
                // 执行顺序：从右到左，先使用 css-loader 解析 CSS，再使用 style-loader 将 CSS 插入到页面
                use: ['style-loader', 'css-loader'],
            },
            {
                // 匹配 .scss 和 .sass 文件
                test: /\.s[ac]ss$/i,
                // 执行顺序：从右到左，先使用 sass-loader 编译 Sass，再使用 css-loader 解析 CSS，最后使用 style-loader 将 CSS 插入到页面
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                // 匹配 png、jpg、jpeg、gif 和 webp 格式的图片文件
                test: /\.(png|jpe?g|gif|webp)$/i,
                // 使用 file-loader 处理，将图片文件复制到输出目录并返回文件路径
                use: 'file-loader',
            },
        ],
    },
}
```
webpack.dev.cjs:
```
// 导入 webpack-merge 模块，用于合并 webpack 配置
const { merge } = require('webpack-merge');
// 导入基础配置文件
const baseConfig = require('./webpack.base.cjs');
// 导入 Node.js 内置的 path 模块，用于处理文件路径
const path = require('path');

// 合并基础配置和开发环境配置
module.exports = merge(baseConfig, {
    // 模式设置为开发环境
    mode: 'development',

    // 输出配置
    output: {
        // 输出文件名，开发环境使用简单的 bundle.js
        filename: 'bundle.js',
    },

    // 开发工具配置，用于生成 source map
    // eval-cheap-module-source-map 能在开发时提供较好的性能和调试体验
    devtool: 'eval-cheap-module-source-map',

    // 开发服务器配置
    devServer: {
        static: {
            // 指定 public 目录为静态文件目录
            directory: path.join(__dirname, 'public'),
        },
        // 是否启用 gzip 压缩
        compress: true,
        // 开发服务器端口
        port: 3000,
        // 是否启用热模块替换（HMR）
        hot: true,
        // 构建完成后是否自动打开浏览器
        open: true,
        // 客户端配置
        client: {
            // 错误和警告的覆盖层配置
            overlay: {
                // 显示错误覆盖层
                errors: true,
                // 不显示警告覆盖层
                warnings: false,
            },
        },
        // 支持 SPA 路由，所有 404 请求都会返回 index.html
        historyApiFallback: true,
        // 代理配置
        proxy: {
            '/api': {
                target: "http://www.test.com", // 后台服务器地址
                changeOrigin: true, // 是否跨域
                pathRewrite: { // 把 '/api' 替换为 ''
                    '^/api': ''
                }
            }
        }
    },

    // 优化配置
    optimization: {
        // 启用 tree shaking，只打包使用到的代码
        usedExports: true,
    }
})
```
webpack.prod.cjs:
```
// 导入 webpack-merge 模块，用于合并 webpack 配置
const { merge } = require('webpack-merge');
// 导入基础配置文件
const baseConfig = require('./webpack.base.cjs');
// 导入 TerserPlugin，用于压缩 JavaScript 代码
const TerserPlugin = require('terser-webpack-plugin');
// 导入 CssMinimizerPlugin，用于压缩 CSS 代码
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// 导入 BundleAnalyzerPlugin，用于分析打包后的文件结构和大小
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// 合并基础配置和生产环境配置
module.exports = merge(baseConfig, {
    // 模式设置为生产环境
    mode: 'production',

    output: {
        // 输出文件名，使用 contenthash 确保文件内容变化时文件名变化
        filename: 'bundle.[contenthash].js',
        // 构建前清理输出目录
        clean: true,
    },
    devtool: 'hidden-source-map',
    // 优化配置
    optimization: {
        // 启用代码压缩
        minimize: true,
        // 配置压缩器
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        // 删除所有 console 语句
                        drop_console: true,
                        // 删除所有 debugger 语句
                        drop_debugger: true,
                    },
                },
            }),
            // CSS 压缩器
            new CssMinimizerPlugin(),
            // 打包分析工具配置
            new BundleAnalyzerPlugin({
                // 分析模式设置为静态文件
                analyzerMode: 'static',
                // 不自动打开分析报告
                openAnalyzer: false,
            }),
        ],
        // 代码分割配置
        splitChunks: {
            // 对所有类型的 chunk 进行拆分（包括异步和同步）
            chunks: 'all',
            // 控制生成 chunk 的最小大小（20KB）
            minSize: 20000,
            // 剩余大小的最小值，确保拆分后剩余部分不会过小
            minRemainingSize: 0,
            // 模块被引用的最小次数
            minChunks: 1,
            // 异步加载时的最大请求数
            maxAsyncRequests: 30,
            // 初始加载时的最大请求数
            maxInitialRequests: 30,
            // 强制执行大小阈值（50KB），超过此值的 chunk 会被强制拆分
            enforceSizeThreshold: 50000,
            // 缓存组配置，用于将不同类型的模块分割到不同的 chunk 中
            cacheGroups: {
                // Element Plus 组件库缓存组
                elementPlus: {
                    // 输出文件名
                    name: 'element-plus',
                    // 匹配 Element Plus 模块
                    test: /[\/]node_modules[\/]element-plus[\/]/,
                    // 优先级，数字越大优先级越高
                    priority: 20,
                    // 对所有类型的 chunk 生效
                    chunks: 'all',
                    // 重用已存在的 chunk，避免重复打包
                    reuseExistingChunk: true,
                },
                // Vue Router 路由库缓存组
                vueRouter: {
                    name: 'vue-router',
                    test: /[\/]node_modules[\/]vue-router[\/]/,
                    priority: 20,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                // Pinia 状态管理库缓存组
                pinia: {
                    name: 'pinia',
                    test: /[\/]node_modules[\/]pinia[\/]/,
                    priority: 20,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                // Axios HTTP 客户端库缓存组
                axios: {
                    name: 'axios',
                    test: /[\/]node_modules[\/]axios[\/]/,
                    priority: 20,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                // Vue 核心库缓存组
                vue: {
                    name: 'vue',
                    test: /[\/]node_modules[\/]vue[\/]/,
                    priority: 20,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                // VueUse 工具库缓存组
                vueUse: {
                    name: 'vue-use',
                    test: /[\/]node_modules[\/]@vueuse[\/]/,
                    priority: 20,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                // 公共代码缓存组
                common: {
                    name: 'common',
                    // 至少被引用 2 次的模块才会被打包到这个 chunk
                    minChunks: 2,
                    priority: 5,
                    chunks: 'all',
                    reuseExistingChunk: true,
                },
                // 其他第三方依赖缓存组
                vendors: {
                    name: 'vendors',
                    test: /[\/]node_modules[\/]/,
                    priority: 10,
                    // 只对初始加载的 chunk 生效
                    chunks: 'initial',
                    reuseExistingChunk: true,
                    // 强制执行缓存组，即使不符合其他条件
                    enforce: true,
                },
            },
        },
        // 运行时代码分割配置
        runtimeChunk: {
            // 运行时代码的输出文件名
            name: 'runtime',
        },
    }
})
```