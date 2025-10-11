import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image.mPHE0uY0.png",l="/xhh-blog/assets/image-2.B1szPgqn.png",t="/xhh-blog/assets/image-3.Cx75rGzt.png",i="/xhh-blog/assets/image-4.Cvomjq7m.png",k=JSON.parse('{"title":"SSR 服务端渲染","description":"","frontmatter":{},"headers":[],"relativePath":"technology/server/ssr.md","filePath":"technology/server/ssr.md"}'),o={name:"technology/server/ssr.md"},c=p('<h1 id="ssr-服务端渲染" tabindex="-1">SSR 服务端渲染 <a class="header-anchor" href="#ssr-服务端渲染" aria-label="Permalink to &quot;SSR 服务端渲染&quot;">​</a></h1><h3 id="新建项目" tabindex="-1">新建项目 <a class="header-anchor" href="#新建项目" aria-label="Permalink to &quot;新建项目&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm init -y</span></span></code></pre></div><h3 id="安装依赖包" tabindex="-1">安装依赖包 <a class="header-anchor" href="#安装依赖包" aria-label="Permalink to &quot;安装依赖包&quot;">​</a></h3><p><img src="'+e+`" alt="alt text"></p><h3 id="写一个demo功能" tabindex="-1">写一个demo功能 <a class="header-anchor" href="#写一个demo功能" aria-label="Permalink to &quot;写一个demo功能&quot;">​</a></h3><p>Hello.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React, { useState } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const Hello = () =&gt; {</span></span>
<span class="line"><span>  const [count, setCount] = useState(0)</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;Hello World!&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;button onClick={() =&gt; setCount((count) =&gt; count+1)}&gt;{count}&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="服务端渲染模板" tabindex="-1">服务端渲染模板 <a class="header-anchor" href="#服务端渲染模板" aria-label="Permalink to &quot;服务端渲染模板&quot;">​</a></h3><p>render.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// react 服务端渲染方法</span></span>
<span class="line"><span>import { renderToString } from &#39;react-dom/server&#39;</span></span>
<span class="line"><span>import { Hello } from &#39;./Hello.jsx&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const render = () =&gt; {</span></span>
<span class="line"><span>  // 将模板进行渲染</span></span>
<span class="line"><span>  const html = renderToString(&lt;Hello /&gt;)</span></span>
<span class="line"><span>  return html</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="新建html页面" tabindex="-1">新建html页面 <a class="header-anchor" href="#新建html页面" aria-label="Permalink to &quot;新建html页面&quot;">​</a></h3><p>index.html:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    ssr</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;!--app-html--&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h3 id="创建express服务-返回带有hello组件的html页面给浏览器" tabindex="-1">创建express服务，返回带有Hello组件的html页面给浏览器 <a class="header-anchor" href="#创建express服务-返回带有hello组件的html页面给浏览器" aria-label="Permalink to &quot;创建express服务，返回带有Hello组件的html页面给浏览器&quot;">​</a></h3><p>server.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import express from &#39;express&#39;</span></span>
<span class="line"><span>import fs from &#39;node:fs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建 vite 服务</span></span>
<span class="line"><span>import { createServer } from &#39;vite&#39;</span></span>
<span class="line"><span>const vite = await createServer({</span></span>
<span class="line"><span>  server: { middlewareMode: true },</span></span>
<span class="line"><span>  appType: &#39;custom&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = express()</span></span>
<span class="line"><span>app.use(vite.middlewares)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(&#39;*&#39;, async (req, res) =&gt; {</span></span>
<span class="line"><span>  // 使用 vite 进行模板加载</span></span>
<span class="line"><span>  const template = await vite.transformIndexHtml(</span></span>
<span class="line"><span>    req.url,</span></span>
<span class="line"><span>    fs.readFileSync(&#39;index.html&#39;, &#39;utf-8&#39;)</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  // 加载 render 渲染器</span></span>
<span class="line"><span>  const { render } = await vite.ssrLoadModule(&#39;render.jsx&#39;)</span></span>
<span class="line"><span>  const html = render()</span></span>
<span class="line"><span>  res.send(template.replace(\`&lt;!--app-html--&gt;\`, html))</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.listen(3000, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;Server listening on port 3000&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>打开 localhost:3000:</p><p><img src="`+l+`" alt="alt text"></p><p>此时点击事件不生效，需要客户端使用 hydrateRoot 进行水合</p><h3 id="修改index-html" tabindex="-1">修改index.html <a class="header-anchor" href="#修改index-html" aria-label="Permalink to &quot;修改index.html&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    ssr</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;!--app-html--&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;script type=&quot;module&quot; src=&quot;./main.jsx&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><h3 id="客户端水合" tabindex="-1">客户端水合 <a class="header-anchor" href="#客户端水合" aria-label="Permalink to &quot;客户端水合&quot;">​</a></h3><p>main.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 客户端入口</span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { hydrateRoot } from &#39;react-dom/client&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { Hello } from &#39;./Hello.jsx&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 客户端水合，否则 Hello 组件里的点击事件不会生效</span></span>
<span class="line"><span>hydrateRoot(</span></span>
<span class="line"><span>  document.getElementById(&#39;app&#39;),</span></span>
<span class="line"><span>  &lt;Hello /&gt;</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="添加样式" tabindex="-1">添加样式 <a class="header-anchor" href="#添加样式" aria-label="Permalink to &quot;添加样式&quot;">​</a></h3><p>hello.module.css:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.main-color {</span></span>
<span class="line"><span>    color: red;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Hello.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import styles from &#39;./hello.module.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const Hello = () =&gt; {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className={styles[&#39;main-color&#39;]}&gt;</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span></code></pre></div><h3 id="功能展示" tabindex="-1">功能展示 <a class="header-anchor" href="#功能展示" aria-label="Permalink to &quot;功能展示&quot;">​</a></h3><p><img src="`+t+'" alt="alt text"><img src="'+i+'" alt="alt text"></p>',32),r=[c];function d(h,m,g,u,b,v){return n(),a("div",null,r)}const q=s(o,[["render",d]]);export{k as __pageData,q as default};
