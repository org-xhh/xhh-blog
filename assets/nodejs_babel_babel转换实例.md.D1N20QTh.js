import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const p="/xhh-blog/assets/image-1.CazsFQ7T.png",l="/xhh-blog/assets/image.BVJ4h0Qh.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/babel/babel转换实例.md","filePath":"nodejs/babel/babel转换实例.md"}'),t={name:"nodejs/babel/babel转换实例.md"},i=e(`<h3 id="安装模块" tabindex="-1">安装模块 <a class="header-anchor" href="#安装模块" aria-label="Permalink to &quot;安装模块&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i @babel/core @babel/cli @babel/preset-env corejs -S</span></span></code></pre></div><h3 id="test-js" tabindex="-1">test.js <a class="header-anchor" href="#test-js" aria-label="Permalink to &quot;test.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = [1,2,3]</span></span>
<span class="line"><span>let b = [4,5,6]</span></span>
<span class="line"><span>let c = [...a,...b]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class classNew {}</span></span>
<span class="line"><span>new classNew()</span></span></code></pre></div><h3 id="index-js" tabindex="-1">index.js: <a class="header-anchor" href="#index-js" aria-label="Permalink to &quot;index.js:&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import babel from &#39;@babel/core&#39;</span></span>
<span class="line"><span>import presetEnv from &#39;@babel/preset-env&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import fs from &#39;node:fs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const code = fs.readFileSync(&#39;./test.js&#39;, &#39;utf-8&#39;)</span></span>
<span class="line"><span>const res = babel.transform(code, {</span></span>
<span class="line"><span>  presets: [</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      presetEnv, </span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        useBuiltIns: &#39;usage&#39;, // 引入需要的垫片, entry 手动引入</span></span>
<span class="line"><span>        corejs: 3</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(res.code)</span></span></code></pre></div><h3 id="执行命令" tabindex="-1">执行命令 <a class="header-anchor" href="#执行命令" aria-label="Permalink to &quot;执行命令&quot;">​</a></h3><p><img src="`+p+`" alt="alt text"></p><h3 id="转换-react-代码" tabindex="-1">转换 react 代码 <a class="header-anchor" href="#转换-react-代码" aria-label="Permalink to &quot;转换 react 代码&quot;">​</a></h3><p>安装模块</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i react react-dom @babel/preset-react -S</span></span></code></pre></div><h3 id="新建app-jsx" tabindex="-1">新建app.jsx <a class="header-anchor" href="#新建app-jsx" aria-label="Permalink to &quot;新建app.jsx&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &#39;react&#39;;</span></span>
<span class="line"><span>import { createRoot } from &#39;react-dom/client&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const App = ()=&gt; &lt;div&gt;hello world&lt;/div&gt;</span></span>
<span class="line"><span>createRoot(document.getElementById(&#39;app&#39;)).render(&lt;App /&gt;)</span></span></code></pre></div><h3 id="修改-index-js" tabindex="-1">修改 index.js <a class="header-anchor" href="#修改-index-js" aria-label="Permalink to &quot;修改 index.js&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import babel from &#39;@babel/core&#39;</span></span>
<span class="line"><span>import presetEnv from &#39;@babel/preset-env&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import presetReact from &#39;@babel/preset-react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import fs from &#39;node:fs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const code = fs.readFileSync(&#39;./app.jsx&#39;, &#39;utf-8&#39;)</span></span>
<span class="line"><span>const res = babel.transform(code, {</span></span>
<span class="line"><span>  presets: [</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      presetEnv, {</span></span>
<span class="line"><span>        useBuiltIns: &#39;usage&#39;, // 引入需要的垫片, entry 手动引入</span></span>
<span class="line"><span>        corejs: 3</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ], </span></span>
<span class="line"><span>    presetReact</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(res.code)</span></span></code></pre></div><p><img src="`+l+'" alt="alt text"></p>',16),c=[i];function o(r,d,h,b,m,u){return n(),a("div",null,c)}const _=s(t,[["render",o]]);export{v as __pageData,_ as default};
