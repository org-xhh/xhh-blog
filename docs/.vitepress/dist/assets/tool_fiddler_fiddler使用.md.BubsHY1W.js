import{_ as e,c as t,o as a,a3 as r}from"./chunks/framework.DrOZDLiO.js";const i="/assets/image.BBW1LVpE.png",o="/assets/image-1.UE_ci7kl.png",d="/assets/image-2.3a1cUdxu.png",l="/assets/image-3.CqTp7pvr.png",p="/assets/image-4.1-cd9-VJ.png",x=JSON.parse('{"title":"Fiddler使用","description":"","frontmatter":{},"headers":[],"relativePath":"tool/fiddler/fiddler使用.md","filePath":"tool/fiddler/fiddler使用.md","lastUpdated":1718682295000}'),s={name:"tool/fiddler/fiddler使用.md"},n=r('<h1 id="fiddler使用" tabindex="-1">Fiddler使用 <a class="header-anchor" href="#fiddler使用" aria-label="Permalink to &quot;Fiddler使用&quot;">​</a></h1><h2 id="fiddler设置" tabindex="-1">Fiddler设置 <a class="header-anchor" href="#fiddler设置" aria-label="Permalink to &quot;Fiddler设置&quot;">​</a></h2><p>打开Fiddler,配置fiddler允许监听到https（fiddler默认只抓取http格式的）：</p><p>Tools -&gt; Options -&gt; HTTPS: <img src="'+i+'" alt="alt text"></p><p>配置fiddler允许远程连接：</p><p>Tools -&gt; Options -&gt; Connections: <img src="'+o+'" alt="alt text"> 重启Fiddler。</p><h2 id="查看电脑ip地址" tabindex="-1">查看电脑ip地址 <a class="header-anchor" href="#查看电脑ip地址" aria-label="Permalink to &quot;查看电脑ip地址&quot;">​</a></h2><p>cmd -&gt; ipconfig -&gt; IPv4地址</p><p>以10.1.20.1为例。</p><h2 id="手机代理" tabindex="-1">手机代理 <a class="header-anchor" href="#手机代理" aria-label="Permalink to &quot;手机代理&quot;">​</a></h2><p>首先确保手机和电脑连接同一个网络，打开手机浏览器，输入</p><p><a href="http://10.1.20.1:8888" target="_blank" rel="noreferrer">http://10.1.20.1:8888</a></p><p>提示下载Fiddler证书，安装FiddlerRootcertificate即可。</p><p>然后设置当前网络HTTP代理： <img src="'+d+'" alt="alt text"></p><h2 id="iphone授权" tabindex="-1">iphone授权 <a class="header-anchor" href="#iphone授权" aria-label="Permalink to &quot;iphone授权&quot;">​</a></h2><p>（1）通用 - VPN与设备管理 - 验证DO_NOT_TRUST_FiddlerRoot</p><p>（2）通用 - 关于本机 - 信任Fiddler</p><p>操作手机，浏览百度等网页，fiddler就可以抓到包了。</p><h2 id="pc端安装证书" tabindex="-1">PC端安装证书 <a class="header-anchor" href="#pc端安装证书" aria-label="Permalink to &quot;PC端安装证书&quot;">​</a></h2><p>1.Fiddler -Tools -Options - HTTPS - Actions - Export Root Certificate to Desktop</p><p>2.chrome浏览器 - 隐私设置和安全 - 安全 - 管理证书</p><p>3.受信任的根证书颁发机构 - 导入 - 选择证书</p><p>4.Fiddler -Tools - Options- HTTPS - Actions - Trust Root Certificate</p><p>5.重新打开fiddler</p><h2 id="autoresponder-环境代理" tabindex="-1">AutoResponder 环境代理 <a class="header-anchor" href="#autoresponder-环境代理" aria-label="Permalink to &quot;AutoResponder 环境代理&quot;">​</a></h2><p><img src="'+l+'" alt="alt text"></p><h2 id="模拟接口返回数据" tabindex="-1">模拟接口返回数据 <a class="header-anchor" href="#模拟接口返回数据" aria-label="Permalink to &quot;模拟接口返回数据&quot;">​</a></h2><p><img src="'+p+'" alt="alt text"></p>',28),c=[n];function h(_,f,m,u,g,T){return a(),t("div",null,c)}const b=e(s,[["render",h]]);export{x as __pageData,b as default};
