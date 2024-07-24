# nginx

### 配置 demo

try_files 按顺序检查文件是否存在，返回第一个找到的文件，至少需要两个参数，但最后一个是内部重定向，也就是和rewrite效果一致。
可以用一个状态码 404 作为最后一个参数。


错误代码：
```
location ~.*\.(gif|jpg|jpeg|png)$ {
        root /web/wwwroot;
        try_files /static/$uri $uri;
}
```

原意图是访问 https://net.com/test.jpg 时，先去检查 /web/wwwroot/static/test.jpg 是否存在，不存在就取 /web/wwwroot/test.jpg。
 
但由于最后一个参数是一个内部重定向，所以并不会检查/web/wwwroot/test.jpg是否存在，只要第一个路径不存在，就会重定向，然后再进入这个location造成死循环，结果出现 500 Internal Server Error


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

而当我们访问 https://net.test/home 时，首先查找有无home文件，如果没有，再去查找有无 home 目录，如果也没有最终就会定位到第三个参数从而返回 index.html，按照这个规则，所有路由里的 url 路径最后都会定位到 index.html。

$uri/ 在这个例子中并没有多大用，是可以去掉的。

总结：
Vue是单页面应用（SPA），history路由模式下，我们只需要将任意页面都重定向到 index.html，把路由交由前端处理。

[vue中history模式服务器配置示例](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)