一、绕过 DNS 解析

1. 查看ip地址

https://www.ipaddress.com/

在页面头部搜索框输入 github.com

![alt text](image-1.png)

![alt text](image-2.png)

2. 修改 hosts 文件

Windows 位置：C:\Windows\System32\drivers\etc\hosts

Mac 位置：/etc/hosts

```
140.82.113.3 github.com
```


3. 刷新 DNS 缓存

windows：ipconfig /flushdns

Mac：sudo killall -HUP mDNSResponder​

二、dev-sidecar

三、VPN
