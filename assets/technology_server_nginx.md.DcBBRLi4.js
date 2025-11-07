import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-1.DHu9EUcR.png",_=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[],"relativePath":"technology/server/nginx.md","filePath":"technology/server/nginx.md"}'),t={name:"technology/server/nginx.md"},l=p('<h1 id="nginx" tabindex="-1"><a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">nginx</a> <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;[nginx](https://nginx.org/en/download.html)&quot;">​</a></h1><p><img src="'+e+`" alt="alt text"></p><p>在安装目录打开 cmd，输入命令：nginx.exe，浏览器输入 localhost:80 地址即可打开 html/index.html 页面。</p><h3 id="查找文件" tabindex="-1">查找文件 <a class="header-anchor" href="#查找文件" aria-label="Permalink to &quot;查找文件&quot;">​</a></h3><p>try_files 按顺序检查文件是否存在，返回第一个找到的文件，至少需要两个参数，但最后一个是内部重定向，也就是和 rewrite 效果一致。 可以用一个状态码 404 作为最后一个参数。</p><p>错误代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location ~.*\\.(gif|jpg|jpeg|png)$ {</span></span>
<span class="line"><span>        root /web/wwwroot;</span></span>
<span class="line"><span>        try_files /static/$uri $uri;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>原意图是访问 <a href="https://net.com/test.jpg" target="_blank" rel="noreferrer">https://net.com/test.jpg</a> 时，先去检查 /web/wwwroot/static/test.jpg 是否存在，不存在就取 /web/wwwroot/test.jpg。</p><p>但由于最后一个参数是一个内部重定向，所以并不会检查/web/wwwroot/test.jpg 是否存在，只要第一个路径不存在，就会重定向，然后再进入这个 location 造成死循环，结果出现 500 Internal Server Error</p><p>修改之后的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location ~.*\\.(gif|jpg|jpeg|png)$ {</span></span>
<span class="line"><span>    root /web/wwwroot;</span></span>
<span class="line"><span>    try_files /static/$uri $uri 404;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样才会先检查 /web/wwwroot/static/test.jpg 是否存在，不存在就 /web/wwwroot/test.jpg，再不存在则返回 404</p><h3 id="解决-vue-router-history-模式问题" tabindex="-1">解决 Vue Router history 模式问题 <a class="header-anchor" href="#解决-vue-router-history-模式问题" aria-label="Permalink to &quot;解决 Vue Router history 模式问题&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>    root   E:\\xhh\\myproject\\xhh-project\\dist;</span></span>
<span class="line"><span>    index  index.html index.htm;</span></span>
<span class="line"><span>    try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Vue 是单页面应用（SPA），history 路由模式下，我们只需要将任意页面都重定向到 index.html，把路由交由前端router处理。</p><p><a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">vue 中 history 模式服务器配置示例</a></p><h3 id="静态资源缓存策略" tabindex="-1">静态资源缓存策略 <a class="header-anchor" href="#静态资源缓存策略" aria-label="Permalink to &quot;静态资源缓存策略&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    # 入口index.html 文件不缓存</span></span>
<span class="line"><span>    location = /index.html {</span></span>
<span class="line"><span>        expires -1;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;no-cache, must-revalidate&quot;;</span></span>
<span class="line"><span>        add_header Pragma &quot;no-cache&quot;;</span></span>
<span class="line"><span>        add_header Expires &quot;0&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 图片字体等缓存30天</span></span>
<span class="line"><span>    location ~* \\.(jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf)$ {</span></span>
<span class="line"><span>        expires 30d;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;public, no-transform&quot;;</span></span>
<span class="line"><span>        access_log off;  # 减少日志噪音</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 带8位hash的JS和CSS文件缓存1年（代码修改时hash自然会变）</span></span>
<span class="line"><span>    location ~* \\.[a-f0-9]{8}\\.(css|js)$ {</span></span>
<span class="line"><span>        expires 1y;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;public, immutable&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="api代理配置、跨域配置" tabindex="-1">API代理配置、跨域配置 <a class="header-anchor" href="#api代理配置、跨域配置" aria-label="Permalink to &quot;API代理配置、跨域配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    location /api/ {</span></span>
<span class="line"><span>        # 重写请求路径：去掉 /api 前缀 (根据后端要求调整)</span></span>
<span class="line"><span>        rewrite ^/api/(.*)$ /$1 break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 代理到真实的后端服务器地址</span></span>
<span class="line"><span>        proxy_pass http://backend-server/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 处理跨域相关头信息</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 可选，WebSocket 代理支持</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 跨域配置</span></span>
<span class="line"><span>        add_header &#39;Access-Control-Allow-Origin&#39; $http_origin always;</span></span>
<span class="line"><span>        add_header &#39;Access-Control-Allow-Methods&#39; &#39;GET, POST, OPTIONS&#39; always;</span></span>
<span class="line"><span>        add_header &#39;Access-Control-Allow-Headers&#39; &#39;DNT,Authorization,X-CustomHeader,Keep-Alive,Origin,X-Requested-With,Content-Type&#39; always;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # 预检请求处理</span></span>
<span class="line"><span>        if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span>            add_header &#39;Access-Control-Max-Age&#39; 1728000;</span></span>
<span class="line"><span>            add_header &#39;Content-Type&#39; &#39;text/plain charset=UTF-8&#39;;</span></span>
<span class="line"><span>            add_header &#39;Content-Length&#39; 0;</span></span>
<span class="line"><span>            return 204;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="gzip-压缩" tabindex="-1">Gzip 压缩 <a class="header-anchor" href="#gzip-压缩" aria-label="Permalink to &quot;Gzip 压缩&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    gzip on; # 开启 Gzip</span></span>
<span class="line"><span>    gzip_min_length 1k; # 大于 1KB 的文件才压缩</span></span>
<span class="line"><span>    gzip_comp_level 6; # 压缩级别 (1-9, 6 是较好的平衡点)</span></span>
<span class="line"><span>    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; # 压缩的文件类型</span></span>
<span class="line"><span>    gzip_vary on; # 告诉客户端支持 Gzip</span></span>
<span class="line"><span>    gzip_disable &quot;msie6&quot;; # 对旧 IE 不启用</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="强制-http-跳到-https" tabindex="-1">强制 http 跳到 https <a class="header-anchor" href="#强制-http-跳到-https" aria-label="Permalink to &quot;强制 http 跳到 https&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name shop.com www.shop.com; # 域名</span></span>
<span class="line"><span>    return 301 https://$host$request_uri;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="http-2-支持" tabindex="-1">HTTP/2 支持 <a class="header-anchor" href="#http-2-支持" aria-label="Permalink to &quot;HTTP/2 支持&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl http2; #启用 HTTP/2</span></span>
<span class="line"><span>    server_name your-domain.com;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # SSL证书配置</span></span>
<span class="line"><span>    ssl_certificate /path/to/cert.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /path/to/key.pem;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="禁止访问敏感文件" tabindex="-1">禁止访问敏感文件 <a class="header-anchor" href="#禁止访问敏感文件" aria-label="Permalink to &quot;禁止访问敏感文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    location ~ /\\.(env|git) {</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>        return 404;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="测试与重载配置" tabindex="-1">测试与重载配置 <a class="header-anchor" href="#测试与重载配置" aria-label="Permalink to &quot;测试与重载配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 检查配置文件语法是否正确</span></span>
<span class="line"><span>sudo nginx -t</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重新加载 Nginx (不中断服务)</span></span>
<span class="line"><span>sudo nginx -s reload</span></span></code></pre></div>`,30),i=[l];function o(c,r,h,d,g,u){return n(),a("div",null,i)}const m=s(t,[["render",o]]);export{_ as __pageData,m as default};
