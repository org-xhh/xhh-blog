import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const m=JSON.parse('{"title":"设置应用深浅模式","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/应用深浅主题.md","filePath":"web/css/应用深浅主题.md","lastUpdated":null}'),p={name:"web/css/应用深浅主题.md"},l=e(`<h1 id="设置应用深浅模式" tabindex="-1">设置应用深浅模式 <a class="header-anchor" href="#设置应用深浅模式" aria-label="Permalink to &quot;设置应用深浅模式&quot;">​</a></h1><h2 id="css-设置" tabindex="-1">css 设置 <a class="header-anchor" href="#css-设置" aria-label="Permalink to &quot;css 设置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen and (prefers-color-scheme: light)&quot; href=&quot;./light.css&quot;&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h2 id="js-设置" tabindex="-1">js 设置 <a class="header-anchor" href="#js-设置" aria-label="Permalink to &quot;js 设置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const darkTheme = window.matchMedia(&#39;(prefers-color-scheme: dark)&#39;)</span></span>
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
<span class="line"><span>})</span></span></code></pre></div>`,7),t=[l];function c(i,o,r,d,h,u){return n(),a("div",null,t)}const k=s(p,[["render",c]]);export{m as __pageData,k as default};
