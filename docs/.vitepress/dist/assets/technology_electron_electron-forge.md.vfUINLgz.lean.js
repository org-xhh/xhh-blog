import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const p="/xhh-blog/assets/image-6.BM_0VmdT.png",m=JSON.parse('{"title":"Electron Forge","description":"","frontmatter":{},"headers":[],"relativePath":"technology/electron/electron-forge.md","filePath":"technology/electron/electron-forge.md"}'),t={name:"technology/electron/electron-forge.md"},l=e(`<h1 id="electron-forge" tabindex="-1"><a href="https://www.electronforge.io/" target="_blank" rel="noreferrer">Electron Forge</a> <a class="header-anchor" href="#electron-forge" aria-label="Permalink to &quot;[Electron Forge](https://www.electronforge.io/)&quot;">​</a></h1><h2 id="添加-vue3-支持" tabindex="-1">添加 vue3 支持 <a class="header-anchor" href="#添加-vue3-支持" aria-label="Permalink to &quot;添加 vue3 支持&quot;">​</a></h2><p><a href="https://www.electronforge.io/guides/framework-integration/vue-3" target="_blank" rel="noreferrer">https://www.electronforge.io/guides/framework-integration/vue-3</a></p><h2 id="添加-tailwind-css" tabindex="-1">添加 Tailwind.css <a class="header-anchor" href="#添加-tailwind-css" aria-label="Permalink to &quot;添加 Tailwind.css&quot;">​</a></h2><p>一、<strong>Tailwindcss@3</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install tailwindcss@3 postcss autoprefixer -S</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx tailwindcss init -p</span></span></code></pre></div><p>执行完该命令后，会自动生成 tailwind.config.js 和 postcss.config.js 文件</p><p>tailwind.config.js 文件的 content 添加：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>content: [</span></span>
<span class="line"><span>  &quot;./index.html&quot;,</span></span>
<span class="line"><span>  &quot;./src/**/*.{vue,js,ts,jsx,tsx}&quot;</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>index.css 文件引入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@tailwind base;</span></span>
<span class="line"><span>@tailwind components;</span></span>
<span class="line"><span>@tailwind utilities;</span></span></code></pre></div><p>VScode 安装插件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Tailwind CSS IntelliSense</span></span></code></pre></div><p>二、<strong>Tailwindcss@4</strong></p><p><a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank" rel="noreferrer">https://tailwindcss.com/docs/installation/using-vite</a></p><p>要把 vite.renderer.config.ts 后缀改为 mjs</p><h2 id="应用打包" tabindex="-1">应用打包 <a class="header-anchor" href="#应用打包" aria-label="Permalink to &quot;应用打包&quot;">​</a></h2><p><a href="https://www.electronforge.io/config/makers" target="_blank" rel="noreferrer">https://www.electronforge.io/config/makers</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run package</span></span>
<span class="line"><span>// 生成可执行程序，但还不是安装包，直接双击就可以使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm run make</span></span>
<span class="line"><span>// 生成完整的安装包，需要安装完后使用</span></span></code></pre></div><p><strong>可执行程序 vs 安装包的系统关系</strong></p><p>一、<strong>可执行程序</strong></p><p>只是一个文件夹，不与系统发生关系。</p><p>npm run package 后生成 out 文件夹：</p><p>命名规则</p><p>[应用名]-[平台]-[架构]/</p><p>平台标识:</p><p>• win32 = Windows</p><p>• darwin = macOS</p><p>• linux = Linux</p><p>架构标识:</p><p>• x64 = 64 位</p><p>• arm64 = ARM 架构</p><p>二、<strong>安装包</strong></p><ul><li>添加到程序列表</li><li>创建快捷方式</li><li>注册文件关联</li><li>添加卸载信息</li></ul><p>三、<strong>适用场景对比</strong></p><p>可执行程序适合：</p><ul><li>测试版本</li><li>便携版</li><li>不需要安装的场景</li></ul><p>安装包适合：</p><ul><li>正式发布</li><li>面向普通用户</li><li>需要系统集成的场景</li></ul><p><strong>特别注意跨平台限制</strong></p><ul><li>Windows 电脑一般只能打包 Windows 版本</li><li>macOS 可以打包 macOS 和 Linux 版本</li><li>Linux 可以打包 Linux 版本</li></ul><h2 id="asar-文件格式" tabindex="-1">asar 文件格式 <a class="header-anchor" href="#asar-文件格式" aria-label="Permalink to &quot;asar 文件格式&quot;">​</a></h2><p><a href="https://github.com/electron/asar" target="_blank" rel="noreferrer">https://github.com/electron/asar</a></p><p>所在目录：</p><p>electron-forge-project\\out\\electron-forge-project-win32-x64\\resources\\app.asar</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 安装</span></span>
<span class="line"><span>npm install -g @electron/asar</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2. 解压 asar 文件</span></span>
<span class="line"><span>asar extract app.asar 目标文件夹</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3. 查看 asar 内容 (不解压)</span></span>
<span class="line"><span>asar list app.asar</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4. 解压单个文件</span></span>
<span class="line"><span>asar extract-file app.asar package.json</span></span></code></pre></div><h2 id="生成-makers-安装包" tabindex="-1">生成 makers 安装包 <a class="header-anchor" href="#生成-makers-安装包" aria-label="Permalink to &quot;生成 makers 安装包&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>packagerConfig: {</span></span>
<span class="line"><span>  name: &#39;electron-forge-project&#39;,</span></span>
<span class="line"><span>  icon: &#39;./assets/icon&#39;, // 应用图标</span></span>
<span class="line"><span>  asar: true, // 将源码打包成 asar 归档格式</span></span>
<span class="line"><span>},</span></span></code></pre></div><p><strong>图标</strong>的对应关系</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>icon.icns  # macOS 应用图标</span></span>
<span class="line"><span>icon.ico   # Windows 图标</span></span>
<span class="line"><span>icon.png   # Linux 图标</span></span></code></pre></div><p>生成 Mac 安装包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install --save-dev @electron-forge/maker-dmg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { MakerDMG } from &#39;@electron-forge/maker-dmg&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>makers: {</span></span>
<span class="line"><span>  new MakerDMG({</span></span>
<span class="line"><span>    icon: &#39;./assets/icon.icns&#39;,</span></span>
<span class="line"><span>    format: &#39;ULFO&#39;</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  new MakerZIP({}, [&#39;darwin&#39;])</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>打包：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run make</span></span></code></pre></div><p>windows 生成目录：</p><p>electron-forge-project\\out\\make\\squirrel.windows\\x64\\electron-forge-project-1.0.0 Setup.exe</p><h2 id="应用发布" tabindex="-1">应用发布 <a class="header-anchor" href="#应用发布" aria-label="Permalink to &quot;应用发布&quot;">​</a></h2><p><a href="https://www.electronforge.io/config/publishers/github" target="_blank" rel="noreferrer">https://www.electronforge.io/config/publishers/github</a></p><p>forge.config.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const config: ForgeConfig = {</span></span>
<span class="line"><span>  publishers: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      name: &#39;@electron-forge/publisher-github&#39;,</span></span>
<span class="line"><span>      config: {</span></span>
<span class="line"><span>        repository: {</span></span>
<span class="line"><span>          owner: &#39;org-xhh&#39;,</span></span>
<span class="line"><span>          name: &#39;electron-forge-project&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        draft: true, // 首次发布建议为草稿，确认无误后在 GitHub 上手动发布</span></span>
<span class="line"><span>        prerelease: false,</span></span>
<span class="line"><span>        generateReleaseNotes: true</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>获取 Github Token：Settings =&gt; Developer settings =&gt; Personal access tokens =&gt; Tokens(classic)</p></blockquote><p>新建 .env 文件中添加 GITHUB_TOKEN 环境变量，并在 forge.config.js 中使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import dotenv from &#39;dotenv&#39;;</span></span>
<span class="line"><span>// 加载 .env 环境变量</span></span>
<span class="line"><span>dotenv.config();</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>const config: ForgeConfig = {</span></span>
<span class="line"><span>  publishers: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>      config: {</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>        authToken: process.env.GITHUB_TOKEN,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>发布：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run publish</span></span></code></pre></div><p><img src="`+p+`" alt="alt text"></p><p>编辑后可以发布 Release</p><h2 id="应用自动更新" tabindex="-1">应用自动更新 <a class="header-anchor" href="#应用自动更新" aria-label="Permalink to &quot;应用自动更新&quot;">​</a></h2><p><a href="https://github.com/electron/update-electron-app" target="_blank" rel="noreferrer">https://github.com/electron/update-electron-app</a></p><p><strong>使用 update.electronjs.org（官方服务）推荐</strong></p><p>仓库地址：<a href="https://github.com/electron/update.electronjs.org" target="_blank" rel="noreferrer">https://github.com/electron/update.electronjs.org</a></p><p>update-electron-app 是一个由 Electron 团队维护的免费、开源的更新服务。 封装了 Electron 内置的 autoUpdater 模块，开发者无需手动配置更新协议的服务器。</p><p>工作方式：</p><ul><li>依赖 GitHub Releases 作为更新分发源。</li><li>当应用发布新版本到 GitHub 时，update.electronjs.org 会生成对应的更新 feed（例如 <a href="https://update.electronjs.org/owner/repo/platform/version%EF%BC%89" target="_blank" rel="noreferrer">https://update.electronjs.org/owner/repo/platform/version）</a>, 供客户端查询。</li><li>应用必须是开源的，且托管在公开的 GitHub 仓库。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i update-electron-app -S</span></span></code></pre></div><p>main.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { updateElectronApp } from &#39;update-electron-app&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>updateElectronApp({</span></span>
<span class="line"><span>  repo: &#39;org-xhh/electron-forge-project&#39;,</span></span>
<span class="line"><span>  updateInterval: &#39;1 hour&#39;</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,78),i=[l];function o(c,r,d,g,h,u){return n(),a("div",null,i)}const v=s(t,[["render",o]]);export{m as __pageData,v as default};
