import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/css样式集锦.md","filePath":"web/css/css样式集锦.md","lastUpdated":1720517320000}'),e={name:"web/css/css样式集锦.md"},l=p(`<h2 id="_0-5px-全边框" tabindex="-1">0.5px 全边框 <a class="header-anchor" href="#_0-5px-全边框" aria-label="Permalink to &quot;0.5px 全边框&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>li {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  &amp;::after {</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 200%;</span></span>
<span class="line"><span>    height: 200%;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    border: 1px solid #eee;</span></span>
<span class="line"><span>    border-radius: 16px;</span></span>
<span class="line"><span>    transform: scale(0.5, 0.5);</span></span>
<span class="line"><span>    transform-origin: 0 0;</span></span>
<span class="line"><span>    box-sizing: border-box;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_0-5px-下边框" tabindex="-1">0.5px 下边框 <a class="header-anchor" href="#_0-5px-下边框" aria-label="Permalink to &quot;0.5px 下边框&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>li {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  &amp;::after {</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 200%;</span></span>
<span class="line"><span>    height: 1px;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    bottom: 0;</span></span>
<span class="line"><span>    background-color: #eee;</span></span>
<span class="line"><span>    transform: scale(0.5);</span></span>
<span class="line"><span>    transform-origin: 0 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4),i=[l];function t(c,o,r,d,h,_){return n(),a("div",null,i)}const m=s(e,[["render",t]]);export{u as __pageData,m as default};
