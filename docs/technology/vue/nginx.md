# [nginx](https://nginx.org/en/download.html)

![alt text](image-1.png)

在安装目录打开 cmd，输入命令：nginx.exe，浏览器输入 localhost:80 地址即可打开 html/index.html 页面。

### 配置 demo

try_files 按顺序检查文件是否存在，返回第一个找到的文件，至少需要两个参数，但最后一个是内部重定向，也就是和 rewrite 效果一致。
可以用一个状态码 404 作为最后一个参数。

错误代码：

```
location ~.*\.(gif|jpg|jpeg|png)$ {
        root /web/wwwroot;
        try_files /static/$uri $uri;
}
```

原意图是访问 https://net.com/test.jpg 时，先去检查 /web/wwwroot/static/test.jpg 是否存在，不存在就取 /web/wwwroot/test.jpg。

但由于最后一个参数是一个内部重定向，所以并不会检查/web/wwwroot/test.jpg 是否存在，只要第一个路径不存在，就会重定向，然后再进入这个 location 造成死循环，结果出现 500 Internal Server Error

修改之后的代码：

```
location ~.*\.(gif|jpg|jpeg|png)$ {
        root /web/wwwroot;
        try_files /static/$uri $uri 404;
}
```

这样才会先检查 /web/wwwroot/static/test.jpg 是否存在，不存在就 /web/wwwroot/test.jpg， 再不存在则返回 404 not found

### 举个网站例子

```
location / {
  root html;
  index index.html index.htm;
  try_files $uri $uri/ /index.html;   // vue配置history模式需要加上这个配置
}
```

假设网站地址是 https://net.test，直接访问的话，浏览器会去寻找 https://net.test 所在服务器的根目录下面的 index.html。

而当我们访问 https://net.test/home 时，首先查找有无 home 文件，如果没有，再去查找有无 home 目录，如果也没有最终就会定位到第三个参数从而返回 index.html，按照这个规则，所有路由里的 url 路径最后都会定位到 index.html, 由 vue router 接管进行导航。

$uri/ 在这个例子中并没有多大用，是可以去掉的。

总结：
Vue 是单页面应用（SPA），history 路由模式下，我们只需要将任意页面都重定向到 index.html，把路由交由前端处理。

[vue 中 history 模式服务器配置示例](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)


### 静态资源缓存策略

```
server {
    # HTML 文件不缓存
    location~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # 图片文件缓存 1 个月
    location~* \.(jpg|jpeg|png|gif|ico|svg)$ {
        expires1M;
        add_header Cache-Control "public";
    }
}
```

### API 代理配置，解决跨域
```
server {
    location /api/ {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
        add_header Access-Control-Allow-Headers "Content-Type, Authorization";
    
        if ($request_method = 'OPTIONS') {
                return 204;
        }

        proxy_pass http://backend-server/;
    }
}
```

### Gzip 压缩
```
http {
    gzipon;
    gzip_varyon;
    gzip_min_length1024;
    gzip_proxied any;
    gzip_comp_level6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;
}
```

### HTTP/2 支持
```
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
}
```