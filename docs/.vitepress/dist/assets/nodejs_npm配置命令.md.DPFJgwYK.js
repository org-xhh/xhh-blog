import{_ as r,c as e,o as a,a3 as n}from"./chunks/framework.DrOZDLiO.js";const g=JSON.parse('{"title":"npm","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/npm配置命令.md","filePath":"nodejs/npm配置命令.md","lastUpdated":1718767703000}'),t={name:"nodejs/npm配置命令.md"},p=n('<h1 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h1><h3 id="查看npm使用的镜像" tabindex="-1">查看npm使用的镜像 <a class="header-anchor" href="#查看npm使用的镜像" aria-label="Permalink to &quot;查看npm使用的镜像&quot;">​</a></h3><p>npm config get registry</p><h3 id="设置官方镜像源" tabindex="-1">设置官方镜像源 <a class="header-anchor" href="#设置官方镜像源" aria-label="Permalink to &quot;设置官方镜像源&quot;">​</a></h3><p>npm config set registry <a href="https://registry.npmjs.org" target="_blank" rel="noreferrer">https://registry.npmjs.org</a></p><h3 id="执行npm淘宝镜像" tabindex="-1">执行npm淘宝镜像 <a class="header-anchor" href="#执行npm淘宝镜像" aria-label="Permalink to &quot;执行npm淘宝镜像&quot;">​</a></h3><p>配置镜像站</p><p>npm config set registry=<a href="https://registry.npmmirror.com" target="_blank" rel="noreferrer">https://registry.npmmirror.com</a></p><p>检查一下镜像站是否正常</p><p>npm config get registry</p><p><small>使用哪个镜像，只需要 npm config set registry 对应的镜像网址 就可以了</small></p><h3 id="安装cnpm-不用修改镜像源-这种方式也可以用淘宝镜像下载模块cnpm-i" tabindex="-1">安装cnpm（不用修改镜像源，这种方式也可以用淘宝镜像下载模块cnpm i） <a class="header-anchor" href="#安装cnpm-不用修改镜像源-这种方式也可以用淘宝镜像下载模块cnpm-i" aria-label="Permalink to &quot;安装cnpm（不用修改镜像源，这种方式也可以用淘宝镜像下载模块cnpm i）&quot;">​</a></h3><p>npm install -g cnpm --registry=<a href="https://registry.npmmirror.com" target="_blank" rel="noreferrer">https://registry.npmmirror.com</a></p><p>如果安装报错没权限啥的:</p><p>npm install -g cnpm@7.1.1 --registry=<a href="https://registry.npmmirror.com" target="_blank" rel="noreferrer">https://registry.npmmirror.com</a></p><p>采用cnpm 安装依赖会忽略 package-lock.json</p><h3 id="清空缓存" tabindex="-1">清空缓存 <a class="header-anchor" href="#清空缓存" aria-label="Permalink to &quot;清空缓存&quot;">​</a></h3><p>npm cache clean --force</p><h3 id="nrm" tabindex="-1">nrm <a class="header-anchor" href="#nrm" aria-label="Permalink to &quot;nrm&quot;">​</a></h3><p>nrm 是一个 npm 源管理器，可以快速地在 npm 源间切换。</p>',20),m=[p];function o(i,s,c,l,h,d){return a(),e("div",null,m)}const f=r(t,[["render",o]]);export{g as __pageData,f as default};
