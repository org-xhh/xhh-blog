vite.base.ts:
```
// 导入Vite的defineConfig函数，用于定义Vite配置
import { defineConfig } from 'vite';
// 导入Vue插件，用于支持Vue组件
import vue from '@vitejs/plugin-vue';
// 导入自动导入插件，用于自动导入Vue API和其他库
import AutoImport from 'unplugin-auto-import/vite';
// 导入组件自动注册插件，用于自动注册Vue组件
import Components from 'unplugin-vue-components/vite';
// 导入Element Plus解析器，用于自动导入Element Plus组件和API
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 导入Node.js的path模块，用于处理文件路径
import path from 'path';

// 导出公共配置
export default defineConfig({
    // 设置项目基础路径，使用相对路径
    base: './',

    // 配置Vite插件
    plugins: [
        // 使用Vue插件
        vue(),

        // 配置自动导入插件
        AutoImport({
            // 使用Element Plus解析器
            resolvers: [ElementPlusResolver()],
            // 生成类型声明文件
            dts: true,
            // 自动导入的库
            imports: ['vue', 'vue-router', 'pinia'],
        }),

        // 配置组件自动注册插件
        Components({
            // 使用Element Plus解析器
            resolvers: [ElementPlusResolver()],
            // 生成类型声明文件
            dts: true,
            // 组件所在目录
            dirs: ['./src/components'],
        }),
    ],

    // 配置模块解析
    resolve: {
        // 配置路径别名
        alias: {
            // 将@符号指向src目录
            '@': path.resolve(__dirname, './src'),
        },
        // 配置文件扩展名，导入时可以省略
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },

    // 配置CSS
    css: {
        // 配置预处理器选项
        preprocessorOptions: {
            less: {
                math: 'always',
                additionalData: `@import "@/assets/css/public.less";`
            }
        },
    },

    // 配置开发服务器
    server: {
        // 服务器端口
        port: 3000,
        // 自动打开浏览器
        open: true,
        // 允许外部访问
        host: '0.0.0.0',
        // 配置代理
        proxy: {
            '/test': {
                // 代理目标地址
                target: 'http://www.test.com',
                // 改变请求头中的Origin
                changeOrigin: true,
                // 允许HTTPS证书无效
                secure: false,
            },
        },
    },

    // lodash是CommonJS，module.exports=...浏览器不认识，Vite预构建转成ESM
    optimizeDeps: {
        // 提前预构建这些包
        include: ['vue', 'vue-router', 'lodash-es']
    },
})
```
vite.dev.ts:
```
// defineConfig用于定义Vite配置，mergeConfig用于合并配置
import { defineConfig, mergeConfig } from 'vite';

// 导入公共配置
import baseConfig from './vite.base.ts';

// 导出开发环境配置
export default defineConfig(
    mergeConfig(
        baseConfig,
        // 开发环境特定配置
        defineConfig({
            // 设置环境模式为development
            mode: 'development',
            // 配置全局常量替换
            define: {
                // Vue feature flag for hydration mismatch details
                __PROJECT_VERSION__: false,
            },
            // 配置构建选项
            build: {
                // 构建输出目录
                outDir: 'dist',
                // 静态资源输出目录
                assetsDir: 'assets',
                // 开发环境启用sourcemap，便于调试
                sourcemap: true,
                // 开发环境不压缩代码，提高构建速度
                minify: false,
            },
        })
    )
)
```
vite.prod.ts:
```
// defineConfig用于定义Vite配置，mergeConfig用于合并配置
import { defineConfig, mergeConfig } from 'vite';

// 导入构建分析工具，用于生成构建包大小分析报告
import { visualizer } from 'rollup-plugin-visualizer';

// 导入Gzip压缩插件，用于压缩静态资源
import Compression from 'vite-plugin-compression';

// 导入公共配置
import baseConfig from './vite.base.ts';

// 导出生产环境配置
export default defineConfig(
    mergeConfig(
        baseConfig,
        // 生产环境特定配置
        defineConfig({
            // 设置环境模式为production
            mode: 'production',
            // 配置全局常量替换
            define: {
                // Vue feature flag for hydration mismatch details
                __PROJECT_VERSION__: true,
            },
            // 配置生产环境特定插件
            plugins: [
                // 构建分析工具配置
                visualizer({
                    // 构建完成后不自动打开报告
                    open: false,
                    // 显示gzip压缩后的大小
                    gzipSize: true,
                    // 显示brotli压缩后的大小
                    brotliSize: true,
                    // 报告生成路径
                    filename: 'dist/stats.html',
                }),

                // Gzip压缩插件配置
                Compression({
                    // 输出压缩信息
                    verbose: true,
                    // 启用压缩
                    disable: false,
                    // 压缩阈值，大于10KB的文件才会被压缩
                    threshold: 10240,
                    // 压缩算法
                    algorithm: 'gzip',
                    // 压缩文件扩展名
                    ext: '.gz',
                }),
            ],

            // 配置构建选项
            build: {
                // 构建输出目录
                outDir: 'dist',
                // 静态资源输出目录
                assetsDir: 'assets',
                // 生产环境禁用sourcemap，减少文件大小
                sourcemap: false,
                // 生产环境使用terser进行代码压缩
                minify: 'terser',

                // terser压缩配置
                terserOptions: {
                    // 压缩选项
                    compress: {
                        // 移除console语句
                        drop_console: true,
                        // 移除debugger语句
                        drop_debugger: true,
                    },
                },

                // 输出配置
                rollupOptions: {
                    output: {
                        // 入口文件命名规则
                        entryFileNames: 'assets/js/[name].[hash].js',
                        // 代码块命名规则
                        chunkFileNames: 'assets/js/[name].[hash].js',
                        // 静态资源命名规则
                        assetFileNames: 'assets/[ext]/[name].[hash].[ext]',

                        // 手动代码分割配置
                        manualChunks: {
                            // 将Vue相关库打包到vue-vendor chunk
                            'vue-vendor': ['vue', 'vue-router', 'pinia'],
                            // 将Element Plus打包到element-plus chunk
                            'element-plus': ['element-plus'],
                            // 将Axios打包到axios chunk
                            axios: ['axios'],
                            // 将@vueuse/core打包到@vueuse/core chunk
                            '@vueuse/core': ['@vueuse/core'],
                        },
                    },
                },
            },
        })
    )
)
```