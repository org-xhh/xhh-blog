# cookie 详解

## cookie 

- 由网站存储在用户的浏览器中
- 大多数浏览器对单个Cookie的大小限制为4KB
- 没有设置过期时间的 Cookie，关闭浏览器就会被清空

## JS设置Cookie
```
const cookieExpirationHours = 7 * 24 // 7天后过期
const expiresIn = new Date(Date.now() + cookieExpirationHours * 60 * 60 * 1000)
document.cookie = "username=cookieName; expires=" + expiresIn + "; path=/; Secure; HttpOnly; SameSite=Strict"
```
![alt text](image-4.png)

## Cookie 属性

- Expires 和 Max-Age：Cookie的过期时间
- Domain：Cookie的作用域，默认是当前域名
- Path：只有特定目录下的页面才可以读取Cookie
- Secure：设置Secure属性，确保Cookie仅在HTTPS连接中传输
- HttpOnly：标记为HttpOnly的Cookie不能被JavaScript访问，减少XSS攻击风险
- SameSite：防止CSRF攻击，取值： Strict、Lax、None。

    SameSite有三个属性：
    - ‌Strict‌：当网址与请求域名完全一致时，Cookie才会被发送；
    - ‌Lax‌：在跨站点的情况下，只有对GET请求才会发送Cookie，而对于POST请求等非安全的HTTP方法则不会发送；
    - ‌None‌：无论是跨站点还是同站点，Cookie都会被发送。当设置SameSite=None时，必须同时设置Secure属性，以确保Cookie只能通过HTTPS发送。



## 异步请求携带cookie

1. 网址和接口域名同源时，异步请求头里会自动携带 Cookie

2. 跨域请求时，异步请求(axios)需要设置 withCredentials: true