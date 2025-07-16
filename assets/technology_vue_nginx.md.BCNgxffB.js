import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-1.DHu9EUcR.png",b=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/nginx.md","filePath":"technology/vue/nginx.md"}'),t={name:"technology/vue/nginx.md"},l=p('<h1 id="nginx" tabindex="-1"><a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">nginx</a> <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;[nginx](https://nginx.org/en/download.html)&quot;">​</a></h1><p><img src="'+e+`" alt="alt text"></p><p>在安装目录打开 cmd，输入命令：nginx.exe，浏览器输入 localhost:80 地址即可打开 html/index.html 页面。</p><h3 id="配置-demo" tabindex="-1">配置 demo <a class="header-anchor" href="#配置-demo" aria-label="Permalink to &quot;配置 demo&quot;">​</a></h3><p>try_files 按顺序检查文件是否存在，返回第一个找到的文件，至少需要两个参数，但最后一个是内部重定向，也就是和 rewrite 效果一致。 可以用一个状态码 404 作为最后一个参数。</p><p>错误代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location ~.*\\.(gif|jpg|jpeg|png)$ {</span></span>
<span class="line"><span>        root /web/wwwroot;</span></span>
<span class="line"><span>        try_files /static/$uri $uri;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>原意图是访问 <a href="https://net.com/test.jpg" target="_blank" rel="noreferrer">https://net.com/test.jpg</a> 时，先去检查 /web/wwwroot/static/test.jpg 是否存在，不存在就取 /web/wwwroot/test.jpg。</p><p>但由于最后一个参数是一个内部重定向，所以并不会检查/web/wwwroot/test.jpg 是否存在，只要第一个路径不存在，就会重定向，然后再进入这个 location 造成死循环，结果出现 500 Internal Server Error</p><p>修改之后的代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location ~.*\\.(gif|jpg|jpeg|png)$ {</span></span>
<span class="line"><span>        root /web/wwwroot;</span></span>
<span class="line"><span>        try_files /static/$uri $uri 404;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样才会先检查 /web/wwwroot/static/test.jpg 是否存在，不存在就 /web/wwwroot/test.jpg， 再不存在则返回 404 not found</p><h3 id="举个网站例子" tabindex="-1">举个网站例子 <a class="header-anchor" href="#举个网站例子" aria-label="Permalink to &quot;举个网站例子&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location / {</span></span>
<span class="line"><span>  root html;</span></span>
<span class="line"><span>  index index.html index.htm;</span></span>
<span class="line"><span>  try_files $uri $uri/ /index.html;   // vue配置history模式需要加上这个配置</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>假设网站地址是 <a href="https://net.test" target="_blank" rel="noreferrer">https://net.test</a>，直接访问的话，浏览器会去寻找 <a href="https://net.test" target="_blank" rel="noreferrer">https://net.test</a> 所在服务器的根目录下面的 index.html。</p><p>而当我们访问 <a href="https://net.test/home" target="_blank" rel="noreferrer">https://net.test/home</a> 时，首先查找有无 home 文件，如果没有，再去查找有无 home 目录，如果也没有最终就会定位到第三个参数从而返回 index.html，按照这个规则，所有路由里的 url 路径最后都会定位到 index.html, 由 vue router 接管进行导航。</p><p>$uri/ 在这个例子中并没有多大用，是可以去掉的。</p><p>总结： Vue 是单页面应用（SPA），history 路由模式下，我们只需要将任意页面都重定向到 index.html，把路由交由前端处理。</p><p><a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90" target="_blank" rel="noreferrer">vue 中 history 模式服务器配置示例</a></p><h3 id="静态资源缓存策略" tabindex="-1">静态资源缓存策略 <a class="header-anchor" href="#静态资源缓存策略" aria-label="Permalink to &quot;静态资源缓存策略&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    # HTML 文件不缓存</span></span>
<span class="line"><span>    location~* \\.html$ {</span></span>
<span class="line"><span>        expires -1;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;no-cache, no-store, must-revalidate&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 图片文件缓存 1 个月</span></span>
<span class="line"><span>    location~* \\.(jpg|jpeg|png|gif|ico|svg)$ {</span></span>
<span class="line"><span>        expires1M;</span></span>
<span class="line"><span>        add_header Cache-Control &quot;public&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="api-代理配置-解决跨域" tabindex="-1">API 代理配置，解决跨域 <a class="header-anchor" href="#api-代理配置-解决跨域" aria-label="Permalink to &quot;API 代理配置，解决跨域&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    location /api/ {</span></span>
<span class="line"><span>        add_header Access-Control-Allow-Origin *;</span></span>
<span class="line"><span>        add_header Access-Control-Allow-Methods &quot;GET, POST, PUT, DELETE, OPTIONS&quot;;</span></span>
<span class="line"><span>        add_header Access-Control-Allow-Headers &quot;Content-Type, Authorization&quot;;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>        if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span>                return 204;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        proxy_pass http://backend-server/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="gzip-压缩" tabindex="-1">Gzip 压缩 <a class="header-anchor" href="#gzip-压缩" aria-label="Permalink to &quot;Gzip 压缩&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    gzipon;</span></span>
<span class="line"><span>    gzip_varyon;</span></span>
<span class="line"><span>    gzip_min_length1024;</span></span>
<span class="line"><span>    gzip_proxied any;</span></span>
<span class="line"><span>    gzip_comp_level6;</span></span>
<span class="line"><span>    gzip_types</span></span>
<span class="line"><span>        text/plain</span></span>
<span class="line"><span>        text/css</span></span>
<span class="line"><span>        text/xml</span></span>
<span class="line"><span>        text/javascript</span></span>
<span class="line"><span>        application/json</span></span>
<span class="line"><span>        application/javascript</span></span>
<span class="line"><span>        application/xml+rss</span></span>
<span class="line"><span>        application/atom+xml</span></span>
<span class="line"><span>        image/svg+xml;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="http-2-支持" tabindex="-1">HTTP/2 支持 <a class="header-anchor" href="#http-2-支持" aria-label="Permalink to &quot;HTTP/2 支持&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl http2;</span></span>
<span class="line"><span>    server_name your-domain.com;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ssl_certificate /path/to/cert.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /path/to/key.pem;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,27),i=[l];function o(c,r,h,d,g,u){return n(),s("div",null,i)}const v=a(t,[["render",o]]);export{b as __pageData,v as default};
