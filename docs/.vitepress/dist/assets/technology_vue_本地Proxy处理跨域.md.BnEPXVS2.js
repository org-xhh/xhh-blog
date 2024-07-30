import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const g=JSON.parse('{"title":"本地开发环境 Proxy 处理跨域","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/本地Proxy处理跨域.md","filePath":"technology/vue/本地Proxy处理跨域.md"}'),e={name:"technology/vue/本地Proxy处理跨域.md"},t=p(`<h1 id="本地开发环境-proxy-处理跨域" tabindex="-1">本地开发环境 Proxy 处理跨域 <a class="header-anchor" href="#本地开发环境-proxy-处理跨域" aria-label="Permalink to &quot;本地开发环境 Proxy 处理跨域&quot;">​</a></h1><p>vue.config.js：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    host: &#39;127.0.0.1&#39;,</span></span>
<span class="line"><span>    port: 8081,</span></span>
<span class="line"><span>    open: true, // vue项目启动时自动打开浏览器</span></span>
<span class="line"><span>    proxy: {</span></span>
<span class="line"><span>      &#39;/api&#39;: {</span></span>
<span class="line"><span>        target: &quot;http://www.test.com&quot;, // 后台服务器地址</span></span>
<span class="line"><span>        changeOrigin: true, // 是否跨域</span></span>
<span class="line"><span>        pathRewrite: { // 把 &#39;/api&#39; 替换为 &#39;&#39;</span></span>
<span class="line"><span>          &#39;^/api&#39;: &#39;&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过 axios 发送请求，配置请求的根路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>axios.defaults.baseURL = &#39;/api&#39;</span></span></code></pre></div>`,5),o=[t];function i(l,c,r,d,_,h){return n(),a("div",null,o)}const v=s(e,[["render",i]]);export{g as __pageData,v as default};
