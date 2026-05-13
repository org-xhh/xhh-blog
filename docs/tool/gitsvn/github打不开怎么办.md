一、绕过 DNS 解析

1. 查看ip地址

https://www.ipaddress.com/

在页面头部搜索框输入 github.com

![alt text](image-1.png)
![alt text](image-3.png)
![alt text](image-4.png)

![alt text](image-2.png)

2. 修改 hosts 文件

Windows 位置：C:\Windows\System32\drivers\etc\hosts

Mac 位置：/etc/hosts

```
140.82.113.3 github.com
151.101.1.194 github.global.ssl.fastly.net
151.101.65.194 github.global.ssl.fastly.net
151.101.129.194 github.global.ssl.fastly.net
151.101.193.194 github.global.ssl.fastly.net
185.199.108.153 assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
```


3. 刷新 DNS 缓存

windows：ipconfig /flushdns

Mac：sudo killall -HUP mDNSResponder​

二、Watt Toolkit

window搜索 => store => Microsoft Store => 搜索 Watt Toolkit => 安装
=> 网络加速 => 勾选 Github => 一键加速

三、dev-sidecar

四、VPN
