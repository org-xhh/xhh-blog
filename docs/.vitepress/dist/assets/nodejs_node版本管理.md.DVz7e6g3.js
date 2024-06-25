import{_ as s,c as a,o as e,a3 as t}from"./chunks/framework.C5U8cnJv.js";const n="/xhh-blog/assets/image.C0ZaDops.png",p="/xhh-blog/assets/image-1.D4bj2wS_.png",i="/xhh-blog/assets/image-2.DA-pSj_-.png",o="/xhh-blog/assets/image-3.C8FKYGFG.png",l="/xhh-blog/assets/image-4.D6FUukRt.png",d="/xhh-blog/assets/image-5.2SRLGfwf.png",C=JSON.parse('{"title":"node版本管理","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/node版本管理.md","filePath":"nodejs/node版本管理.md","lastUpdated":1718767703000}'),c={name:"nodejs/node版本管理.md"},h=t('<h1 id="node版本管理" tabindex="-1">node版本管理 <a class="header-anchor" href="#node版本管理" aria-label="Permalink to &quot;node版本管理&quot;">​</a></h1><h2 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h2><p><img src="'+n+'" alt="alt text"> 解压，放在各版本新建的安装目录： <img src="'+p+'" alt="alt text"><img src="'+i+'" alt="alt text"><img src="'+o+'" alt="alt text"><img src="'+l+'" alt="alt text"></p><h3 id="推荐-nvm" tabindex="-1"><strong>推荐 NVM</strong> <a class="header-anchor" href="#推荐-nvm" aria-label="Permalink to &quot;**推荐 NVM**&quot;">​</a></h3><p>nvm：Node Version Manager，node的版本管理工具。在一台电脑上可以同时安装多个node版本，同时只能运行使用某个版本，而且可以随时切换到其他node版本。</p><ul><li><strong>安装前工作</strong>：</li></ul><p>卸载node：控制面板，直接找到node卸载即可</p><p>删除npm：C:\\Users\\登录账号\\AppData\\Roaming， 在这个目录里面找到npm与npm-cache文件夹，将这两个文件夹删掉</p><p>删除yarn：C:\\Users\\登录账号\\AppData\\Local，这个目录找到yarn文件夹，删掉</p><p>如果环境变量 path 中配置了npm或yarn，建议也删掉</p><ul><li><p><strong>安装时不建议修改默认路径，避免后续过多的麻烦</strong></p></li><li><p><strong>nvm -v 检查是否安装成功</strong></p></li><li><p><strong>常用命令</strong></p></li></ul><p>列出当前已经安装的node版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nvm list</span></span></code></pre></div><p>查看当前可以使用node版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nvm list available</span></span></code></pre></div><p>安装node某一版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nvm install 16.15.1</span></span></code></pre></div><p>切换到某一版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nvm use 16.15.1</span></span></code></pre></div><h2 id="mac" tabindex="-1">Mac <a class="header-anchor" href="#mac" aria-label="Permalink to &quot;Mac&quot;">​</a></h2><p>n是Mac下的node管理工具，可以在同一台电脑上安装多个Node.js版本灵活切换。</p><p>安装 n 可能需要输入password(开机密码)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo npm install n -g</span></span></code></pre></div><p>查看 所有的node版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm view node versions</span></span></code></pre></div><p>安装稳定版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo n stable</span></span></code></pre></div><p>安装 16 的版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo n 16.20.2</span></span></code></pre></div><p>查看当前node版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node -v</span></span></code></pre></div><p>查看已安装的node版本列表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>n list</span></span></code></pre></div><p>切换node版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo n</span></span></code></pre></div><p>    <small>上下键切换，回车即可</small></p><p>删除指定版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo n rm 16.20.0</span></span></code></pre></div><p>清除node.js的cache</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo npm cache clean -f</span></span></code></pre></div><p><img src="'+d+'" alt="alt text"></p>',41),g=[h];function r(u,b,v,m,k,_){return e(),a("div",null,g)}const y=s(c,[["render",r]]);export{C as __pageData,y as default};
