import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const m=JSON.parse('{"title":"应用深浅主题","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/应用深浅主题.md","filePath":"web/css/应用深浅主题.md","lastUpdated":1719995463000}'),p={name:"web/css/应用深浅主题.md"},t=e(`<h1 id="应用深浅主题" tabindex="-1">应用深浅主题 <a class="header-anchor" href="#应用深浅主题" aria-label="Permalink to &quot;应用深浅主题&quot;">​</a></h1><h2 id="css-使用深浅主题" tabindex="-1">css 使用深浅主题 <a class="header-anchor" href="#css-使用深浅主题" aria-label="Permalink to &quot;css 使用深浅主题&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen and (prefers-color-scheme: light)&quot; href=&quot;./light.css&quot;&gt;</span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen and (prefers-color-scheme: dark)&quot; href=&quot;./dark.css&quot;&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    @import url(&#39;./light.css&#39;) screen and (prefers-color-scheme: light);</span></span>
<span class="line"><span>    @import url(&#39;./dark.css&#39;) screen and (prefers-color-scheme: dark);</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>:root {</span></span>
<span class="line"><span>  --vt-c-black: #181818;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media (prefers-color-scheme: dark) {</span></span>
<span class="line"><span>  :root {</span></span>
<span class="line"><span>    --color-background: var(--vt-c-black);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="js-使用深浅主题" tabindex="-1">js 使用深浅主题 <a class="header-anchor" href="#js-使用深浅主题" aria-label="Permalink to &quot;js 使用深浅主题&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const darkTheme = window.matchMedia(&#39;(prefers-color-scheme: dark)&#39;)</span></span>
<span class="line"><span>// 如果应用设置了深色主题</span></span>
<span class="line"><span>if (darkTheme.matches) {</span></span>
<span class="line"><span>    link.href = &#39;./dark.css&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>darkTheme.addEventListener(&#39;change&#39;, e =&gt; {</span></span>
<span class="line"><span>    if (e.matches) {</span></span>
<span class="line"><span>        link.href = &#39;./dark.css&#39;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        link.href = &#39;./light.css&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><hr><hr><p>Windows 设置主题：开始 -&gt; 设置 -&gt; 个性化 -&gt; 颜色 -&gt; 选择默认应用模式</p>`,10),l=[t];function c(i,o,r,d,h,u){return n(),a("div",null,l)}const k=s(p,[["render",c]]);export{m as __pageData,k as default};
