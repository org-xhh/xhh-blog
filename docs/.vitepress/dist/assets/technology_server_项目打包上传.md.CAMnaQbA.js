import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/server/项目打包上传.md","filePath":"technology/server/项目打包上传.md"}'),e={name:"technology/server/项目打包上传.md"},l=p(`<h2 id="本地服务器部署" tabindex="-1">本地服务器部署 <a class="header-anchor" href="#本地服务器部署" aria-label="Permalink to &quot;本地服务器部署&quot;">​</a></h2><p>server.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;)</span></span>
<span class="line"><span>const history = require(&#39;connect-history-api-fallback&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const PORT = 8088</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = express()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 插件，处理 前端 history 路由刷新404问题</span></span>
<span class="line"><span>app.use(history())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(express.static(__dirname + &#39;/public&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.listen(PORT, () =&gt; {</span></span>
<span class="line"><span>  console.log(\`Server is running http://localhost:\${PORT}\`)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>把打包后的文件放在 public 目录下，启动 npx nodemon server.js，打开</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://localhost:8088/</span></span></code></pre></div><p>即可访问。</p><h2 id="nginx-服务器部署" tabindex="-1">nginx 服务器部署 <a class="header-anchor" href="#nginx-服务器部署" aria-label="Permalink to &quot;nginx 服务器部署&quot;">​</a></h2><p>安装 nginx， conf 文件夹下有 nginx.conf 配置文件，修改端口号为8099：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       8099;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   html;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>双击 nginx 安装包根目录下的 nginx.exe, 打开 localhost:8099 及可访问到 nginx安装包/html/index.html 页面。</p><p>设置让 nginx 打开 前端项目打包后的页面，更改root html路径（或者直接替换/html/index.html），进程管理器里停止 nginx，再重启：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       8099;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   E:\\xhh\\myproject\\xhh-project\\dist;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>处理 前端 history 路由刷新404问题，重启服务：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>    root   E:\\xhh\\myproject\\xhh-project\\dist;</span></span>
<span class="line"><span>    index  index.html index.htm;</span></span>
<span class="line"><span>    try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="云服务器部署" tabindex="-1">云服务器部署 <a class="header-anchor" href="#云服务器部署" aria-label="Permalink to &quot;云服务器部署&quot;">​</a></h2><ol><li>购买云服务器，记住 公网IP 和 密码</li><li>客户端安装 XShell 教育版，连接服务器</li><li>比如在/var/目录下新建 dist 目录，并上传项目打包文件</li><li>XShell 安装 nginx：执行命令 yum install nginx -y，安装完后可以在 /etc/ 看到 nginx</li><li>打开 nginx.conf，配置 location 的 root 为 /var/dist</li><li>XShell 启动 nginx：执行命令 service nginx start</li><li>浏览器输入 公网IP 即可访问</li><li>申请域名，绑定公网IP</li></ol>`,16),i=[l];function t(c,o,r,h,d,g){return a(),n("div",null,i)}const m=s(e,[["render",t]]);export{u as __pageData,m as default};
