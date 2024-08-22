import{_ as e,c as a,o as t,a3 as o}from"./chunks/framework.C5U8cnJv.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/packaging-tool/vite.md","filePath":"technology/packaging-tool/vite.md"}'),i={name:"technology/packaging-tool/vite.md"},s=o('<ul><li><a href="https://cn.vitejs.dev/config/build-options" target="_blank" rel="noreferrer">Vite</a></li></ul><h3 id="构建方式" tabindex="-1">构建方式 <a class="header-anchor" href="#构建方式" aria-label="Permalink to &quot;构建方式&quot;">​</a></h3><p>Vite 采用了即时编译的方式，在开发模式下通过浏览器原生支持的 ES Module 特性进行加载，不需要打包。</p><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.env.[mode]</span></span></code></pre></div><p>只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。</p><p>代码中访问：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(import.meta.env.VITE_SOME_KEY)</span></span></code></pre></div><h3 id="热更新" tabindex="-1">热更新 <a class="header-anchor" href="#热更新" aria-label="Permalink to &quot;热更新&quot;">​</a></h3><p>Vite 内置了基于浏览器原生模块热更新的开发服务器，无需额外配置即可实现快速的热更新。</p>',10),n=[s];function l(c,p,r,d,h,g){return t(),a("div",null,n)}const m=e(i,[["render",l]]);export{v as __pageData,m as default};
