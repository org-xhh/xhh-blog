import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const p="/xhh-blog/assets/image-3.g22Qm12G.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/packaging-tool/webpack.md","filePath":"technology/packaging-tool/webpack.md"}'),i={name:"technology/packaging-tool/webpack.md"},l=e(`<ul><li><a href="https://www.webpackjs.com/configuration/output/#outputclean" target="_blank" rel="noreferrer">webpack</a></li></ul><h3 id="构建方式" tabindex="-1">构建方式 <a class="header-anchor" href="#构建方式" aria-label="Permalink to &quot;构建方式&quot;">​</a></h3><p>Webpack 先打包再启动开发服务器。</p><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.env.[mode]</span></span></code></pre></div><p>只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。</p><p>可以通过传递 --mode 选项参数为命令行覆写默认的模式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vue-cli-service build --mode release</span></span></code></pre></div><p>代码中访问：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>process.env.NODE_ENV</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.env.BASE_URL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>process.env.VUE_APP_BASE_API</span></span></code></pre></div><h3 id="配置全局使用-less-变量" tabindex="-1">配置全局使用 less 变量 <a class="header-anchor" href="#配置全局使用-less-变量" aria-label="Permalink to &quot;配置全局使用 less 变量&quot;">​</a></h3><p>安装 less、less-loader 模块</p><p>vue.config.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  css: {</span></span>
<span class="line"><span>    loaderOptions: {</span></span>
<span class="line"><span>      less: {</span></span>
<span class="line"><span>        additionalData: \`@import &quot;@/public.less&quot;;\`</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="加载图片" tabindex="-1">加载图片 <a class="header-anchor" href="#加载图片" aria-label="Permalink to &quot;加载图片&quot;">​</a></h3><p>Webpack 使用自己的模块解析系统</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 动态 require</span></span>
<span class="line"><span>const imageUrl = require(&#39;@/assets/img1.jpg&#39;)</span></span>
<span class="line"><span>&lt;img :src=&quot;imagePath&quot; /&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 静态导入</span></span>
<span class="line"><span>import staticImage from &#39;@/assets/static.png&#39;</span></span></code></pre></div><h3 id="热更新" tabindex="-1">热更新 <a class="header-anchor" href="#热更新" aria-label="Permalink to &quot;热更新&quot;">​</a></h3><p>Webpack 的热更新通常需要借助 webpack-dev-server 等插件，在一些情况下配置起来比较复杂。</p><h3 id="打包配置" tabindex="-1">打包配置 <a class="header-anchor" href="#打包配置" aria-label="Permalink to &quot;打包配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>output: {</span></span>
<span class="line"><span>  filename: \`[name]\` + &#39;-&#39; + Timestamp + &#39;-[hash]&#39; + &#39;.js&#39;, // 入口文件</span></span>
<span class="line"><span> // chunkFilename: \`[name].[hash].js\`</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>路由懒加载设置 webpackChunkName，chunkFilename 就会变成对应的值，否则默认是 chunk.[hash]</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;/login&#39;,</span></span>
<span class="line"><span>  name: &#39;login&#39;,</span></span>
<span class="line"><span>  component: () =&gt; import(/* webpackChunkName: &quot;login&quot; */ &#39;@/views/login/index&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+p+`" alt="alt text"></p><h3 id="拆包" tabindex="-1">拆包 <a class="header-anchor" href="#拆包" aria-label="Permalink to &quot;拆包&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>optimization: {</span></span>
<span class="line"><span>  splitChunks: {</span></span>
<span class="line"><span>    chunks: &#39;all&#39;,</span></span>
<span class="line"><span>    name: &#39;vendors&#39;,</span></span>
<span class="line"><span>    minSize: 10000, // 设置拆分的最小文件大小</span></span>
<span class="line"><span>    maxSize: 0, // 不限制最大文件大小，让webpack自动决定</span></span>
<span class="line"><span>    minChunks: 1, // 每个模块至少被多少个chunk引用才会被拆分</span></span>
<span class="line"><span>    cacheGroups: {</span></span>
<span class="line"><span>      vendors: {</span></span>
<span class="line"><span>        test: /[\\\\/]node_modules[\\\\/]/,</span></span>
<span class="line"><span>        priority: -10, // 设置较低的优先级，保证核心代码先加载</span></span>
<span class="line"><span>        enforce: true, // 强制执行拆分</span></span>
<span class="line"><span>        reuseExistingChunk: true // 重用已存在的chunk</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样体积较大的 vendors 文件就被拆分为几个小的 vendors 文件。</p>`,28),t=[l];function c(o,d,h,r,u,g){return n(),s("div",null,t)}const k=a(i,[["render",c]]);export{m as __pageData,k as default};
