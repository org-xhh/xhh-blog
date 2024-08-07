import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image.Dj7MS5Wb.png",l="/xhh-blog/assets/image-2.BJMS2eXl.png",t="/xhh-blog/assets/image-1.DFLJY2Lx.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/packaging-tool/webpack配置实例.md","filePath":"technology/packaging-tool/webpack配置实例.md"}'),i={name:"technology/packaging-tool/webpack配置实例.md"},c=p(`<h3 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm init -y</span></span></code></pre></div><h3 id="安装-模块" tabindex="-1">安装 模块 <a class="header-anchor" href="#安装-模块" aria-label="Permalink to &quot;安装 模块&quot;">​</a></h3><p>打包命令 &quot;webpack&quot; （默认 webpack --config webpack.config.js）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i webpack webpack-cli --save-dev</span></span></code></pre></div><p>引用插件生成一个 HTML5 文件,在 body 中使用 script 标签引入 webpack 生成的 bundle：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i html-webpack-plugin --save-dev</span></span></code></pre></div><p>babel 将代码里的ES6+语法转为es5：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install --save-dev @babel/core babel-loader @babel/preset-env</span></span></code></pre></div><p>babel 转换API（比如 Promise）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i @babel/plugin-transform-runtime @babel/runtime-corejs3 --save-dev</span></span></code></pre></div><h3 id="代码展示" tabindex="-1">代码展示 <a class="header-anchor" href="#代码展示" aria-label="Permalink to &quot;代码展示&quot;">​</a></h3><p>webpack.config.js：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  mode: &#39;development&#39;,</span></span>
<span class="line"><span>  entry: { // 打包-入口</span></span>
<span class="line"><span>    main: &#39;./src/index.js&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  output: { // 打包-出口 dist目录下</span></span>
<span class="line"><span>    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span>    filename: &#39;[name].js&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  module: {</span></span>
<span class="line"><span>    rules: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        test: /\\.(js)$/,</span></span>
<span class="line"><span>        exclude: /node_modules/,</span></span>
<span class="line"><span>        use: {</span></span>
<span class="line"><span>          loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span>          // options: { // 在.babelrc中配置</span></span>
<span class="line"><span>          //   presets: [&#39;@babel/preset-env&#39;]</span></span>
<span class="line"><span>          // }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    new HtmlWebpackPlugin({</span></span>
<span class="line"><span>      template: &#39;./index.html&#39;, // 模板文件路径</span></span>
<span class="line"><span>      inject: &#39;body&#39; // 插入的位置</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>.babelrc：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;presets&quot;: [</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &quot;@babel/preset-env&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;plugins&quot;: [</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &quot;@babel/plugin-transform-runtime&quot;,</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;corejs&quot;: 3</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><p><img src="`+e+'" alt="alt text"></p><h3 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h3><p><img src="'+l+'" alt="alt text"></p><h3 id="webpack打包后代码" tabindex="-1">webpack打包后代码 <a class="header-anchor" href="#webpack打包后代码" aria-label="Permalink to &quot;webpack打包后代码&quot;">​</a></h3><p><img src="'+t+'" alt="alt text"></p>',22),o=[c];function d(r,h,b,u,g,m){return n(),s("div",null,o)}const _=a(i,[["render",d]]);export{v as __pageData,_ as default};
