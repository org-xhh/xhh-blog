import{_ as s,c as a,o as n,a3 as t}from"./chunks/framework.C5U8cnJv.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/nuxt/网站地图.md","filePath":"technology/nuxt/网站地图.md"}'),e={name:"technology/nuxt/网站地图.md"},p=t(`<h3 id="nuxtjs-sitemap" tabindex="-1">@nuxtjs/sitemap <a class="header-anchor" href="#nuxtjs-sitemap" aria-label="Permalink to &quot;@nuxtjs/sitemap&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>modules: [</span></span>
<span class="line"><span>    &#39;@nuxtjs/sitemap&#39;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  sitemap: {</span></span>
<span class="line"><span>    hostname: &#39;https://www.test.com/&#39;, // 线上域名</span></span>
<span class="line"><span>    exclude: [], // 不要的页面</span></span>
<span class="line"><span>    routes: [</span></span>
<span class="line"><span>      &#39;/&#39;,</span></span>
<span class="line"><span>      &#39;/news&#39;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>npm run generate 即可在dist目录生成 sitemap.xml 网站地图文件</p><p>参考文档：<a href="https://sitemap.nuxtjs.org/usage/sitemap-options/" target="_blank" rel="noreferrer">https://sitemap.nuxtjs.org/usage/sitemap-options/</a></p><h3 id="nuxtjs-robots" tabindex="-1">@nuxtjs/robots <a class="header-anchor" href="#nuxtjs-robots" aria-label="Permalink to &quot;@nuxtjs/robots&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>modules: [</span></span>
<span class="line"><span>    &#39;@nuxtjs/robots&#39;</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>npm run generate 即可在dist目录生成 robots.txt 文件</p><p>robots.txt 添加 Sitemap 属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>User-agent: *</span></span>
<span class="line"><span>Disallow: </span></span>
<span class="line"><span>Sitemap: https://www.test.com/sitemap.xml</span></span></code></pre></div>`,9),i=[p];function o(l,c,r,d,u,h){return n(),a("div",null,i)}const g=s(e,[["render",o]]);export{_ as __pageData,g as default};
