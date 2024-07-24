import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/vue-cli.md","filePath":"technology/vue/vue-cli.md","lastUpdated":null}'),e={name:"technology/vue/vue-cli.md"},t=p(`<h2 id="本地服务-proxy-解决跨域" tabindex="-1">本地服务 Proxy 解决跨域 <a class="header-anchor" href="#本地服务-proxy-解决跨域" aria-label="Permalink to &quot;本地服务 Proxy 解决跨域&quot;">​</a></h2><p>vue.config.js：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>通过 axios 发送请求，配置请求的根路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>axios.defaults.baseURL = &#39;/api&#39;</span></span></code></pre></div>`,5),l=[t];function i(o,c,r,d,u,h){return n(),a("div",null,l)}const g=s(e,[["render",i]]);export{v as __pageData,g as default};
