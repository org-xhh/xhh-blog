import{_ as o,D as n,c as s,I as t,w as l,a3 as i,j as e,a as c,o as h}from"./chunks/framework.C5U8cnJv.js";const r="/xhh-blog/assets/image.DePBMj6z.png",d="/xhh-blog/assets/image-1.BALPerQv.png",E=JSON.parse('{"title":"http缓存","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/http缓存.md","filePath":"web/js/http缓存.md","lastUpdated":1718875125000}'),p={name:"web/js/http缓存.md"},_=i("",18),u=e("ul",null,[e("li",null,[e("p",null,"后端资源修改了，前端无法实时获取最新资源"),e("p",null,"可以在文件名后面带上hash值，只要资源被修改，hash值就会更改，浏览器就会重新发起请求。")]),e("li",null,[e("p",null,"通过浏览器url地址栏发送的get请求，无法被强缓存"),e("p",null,"但通过页面上的链接、表单提交、ajax请求等方式发送的get请求，可以被强缓存。")])],-1),f=i("",6),m=e("ul",null,[e("li",null,[e("p",null,"当服务器响应一个资源请求时，会在响应头中包含 Last-Modified 字段，表示资源的最后修改时间。")]),e("li",null,[e("p",null,"当客户端再次请求相同资源时，会在请求头中包含 If-Modified-Since 字段，值为上一次获取资源时服务器返回的 Last-Modified 时间。")]),e("li",null,[e("p",null,"服务器收到带有 If-Modified-Since 字段的请求后，会比较该字段的值与资源的最后修改时间，如果资源的最后修改时间大于 If-Modified-Since 字段的值，则返回资源内容和状态码 200 OK，并更新 Last-Modified 为新的值；如果资源的最后修改时间等于 If-Modified-Since 字段的值，则返回状态码 304 Not Modified，告知客户端可以使用缓存的资源。")])],-1),g=e("h4",{id:"etag-if-none-match-优先级高",tabindex:"-1"},[c("ETag / If-None-Match（优先级高） "),e("a",{class:"header-anchor",href:"#etag-if-none-match-优先级高","aria-label":'Permalink to "ETag / If-None-Match（优先级高）"'},"​")],-1),T=e("ul",null,[e("li",null,[e("p",null,"当服务器响应一个资源请求时，可以在响应头中包含 ETag 字段，表示资源的标识符。")]),e("li",null,[e("p",null,"当客户端再次请求相同资源时，可以在请求头中包含 If-None-Match 字段，值为上一次获取资源时服务器返回的 ETag。")]),e("li",null,[e("p",null,"服务器收到带有 If-None-Match 字段的请求后，会比较该字段的值与资源的当前 ETag，如果两者相等，则返回状态码 304 Not Modified，告知客户端可以使用缓存的资源；如果两者不相等，则返回新的资源内容和状态码 200 OK。")])],-1),b=e("p",null,"协商缓存图片",-1),x=e("p",null,[e("img",{src:d,alt:"alt text"})],-1);function P(M,I,N,k,C,S){const a=n("font");return h(),s("div",null,[_,t(a,{color:"gray"},{default:l(()=>[u]),_:1}),f,t(a,{color:"#666"},{default:l(()=>[m]),_:1}),g,t(a,{color:"#666"},{default:l(()=>[T]),_:1}),b,x])}const V=o(p,[["render",P]]);export{E as __pageData,V as default};
