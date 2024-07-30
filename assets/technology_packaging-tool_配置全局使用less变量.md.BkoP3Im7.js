import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const g=JSON.parse('{"title":"配置全局使用less变量","description":"","frontmatter":{},"headers":[],"relativePath":"technology/packaging-tool/配置全局使用less变量.md","filePath":"technology/packaging-tool/配置全局使用less变量.md"}'),p={name:"technology/packaging-tool/配置全局使用less变量.md"},l=e(`<h1 id="配置全局使用less变量" tabindex="-1">配置全局使用less变量 <a class="header-anchor" href="#配置全局使用less变量" aria-label="Permalink to &quot;配置全局使用less变量&quot;">​</a></h1><h2 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h2><blockquote><p>Vite 和 webpack 不同，不需要 less-loader，只需要安装less</p></blockquote><p>vite.config.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default defineConfig(({ mode }) =&gt; ({</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    css: {</span></span>
<span class="line"><span>    preprocessorOptions: {</span></span>
<span class="line"><span>      less: {</span></span>
<span class="line"><span>        math: &#39;always&#39;, // 括号内使用数学计算</span></span>
<span class="line"><span>        additionalData: \`@import &quot;@/assets/css/public.less&quot;;\`</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}))</span></span></code></pre></div><h2 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h2><p>vue.config.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  css: {</span></span>
<span class="line"><span>    loaderOptions: {</span></span>
<span class="line"><span>      less: {</span></span>
<span class="line"><span>        additionalData: \`@import &quot;@/public.less&quot;;\`</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,8),t=[l];function i(o,c,d,r,h,_){return n(),a("div",null,t)}const b=s(p,[["render",i]]);export{g as __pageData,b as default};
