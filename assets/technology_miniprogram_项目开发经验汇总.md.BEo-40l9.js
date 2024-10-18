import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/problem1.BTvmTI2q.jpg",t="/xhh-blog/assets/problem2.CGHMURu7.jpg",i="/xhh-blog/assets/problem3.Dl1e_okA.jpg",l="/xhh-blog/assets/301.DdhEgxf1.jpg",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/miniprogram/项目开发经验汇总.md","filePath":"technology/miniprogram/项目开发经验汇总.md"}'),o={name:"technology/miniprogram/项目开发经验汇总.md"},c=p(`<h3 id="微信浏览器-h5-如何判断是否已经网页授权-如何授权" tabindex="-1">微信浏览器 h5 如何判断是否已经网页授权？如何授权？ <a class="header-anchor" href="#微信浏览器-h5-如何判断是否已经网页授权-如何授权" aria-label="Permalink to &quot;微信浏览器 h5 如何判断是否已经网页授权？如何授权？&quot;">​</a></h3><p>判断是否已经网页授权：可以把openid存cookie或缓存，已存在就是授权过直接跳目的页；</p><p>如何授权：直接跳转地址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jumpUrl = encodeURIComponent(location.protocol + &#39;//&#39; + location.hostname + jumpUrl)</span></span>
<span class="line"><span>let authUrl = \`https://open.weixin.qq.com/connect/oauth2/authorize?appid=\${appId}&amp;redirect_uri=\${jumpUrl}&amp;response_type=code&amp;scope=snsapi_userinfo&amp;state=\${state}&amp;connect_redirect=1#wechat_redirect\`</span></span>
<span class="line"><span>window.location.href = authUrl</span></span></code></pre></div><p>微信网页授权文档： <a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html</a></p><h3 id="微信浏览器-h5-如何直接关闭" tabindex="-1">微信浏览器 h5 如何直接关闭？ <a class="header-anchor" href="#微信浏览器-h5-如何直接关闭" aria-label="Permalink to &quot;微信浏览器 h5 如何直接关闭？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function wxJSBridgeClose() {</span></span>
<span class="line"><span>  if (typeof WeixinJSBridge === &#39;undefined&#39;) {</span></span>
<span class="line"><span>    document.addEventListener(&#39;WeixinJSBridgeReady&#39;, function onBridgeReady() {</span></span>
<span class="line"><span>      document.removeEventListener(&#39;WeixinJSBridgeReady&#39;, onBridgeReady, false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      WeixinJSBridge.call(&#39;closeWindow&#39;)</span></span>
<span class="line"><span>    }, false)</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    WeixinJSBridge.call(&#39;closeWindow&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="微信浏览器-h5-页面回退或前进事件-如何监听" tabindex="-1">微信浏览器 h5 页面回退或前进事件 如何监听？ <a class="header-anchor" href="#微信浏览器-h5-页面回退或前进事件-如何监听" aria-label="Permalink to &quot;微信浏览器 h5 页面回退或前进事件 如何监听？&quot;">​</a></h3><p>ios:</p><p>location跳转触发popstate; vue router不触发;</p><p>&lt; 回退按钮亮，跳到前一个页面触发popstate; &gt; 前进按钮亮，跳到下一个页面触发popstate;</p><p>&lt;&gt; 跳转都不会触发vue路由(beforeEach...)</p><p>箭头不亮不触发 popstate。</p><p>没有路由栈如何触发 popstate:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.pushHistoryFn() // 为了能触发 popstate</span></span>
<span class="line"><span>window.addEventListener(&#39;popstate&#39;, this.watchPopState, false)</span></span>
<span class="line"><span>window.removeEventListener(&#39;popstate&#39;, this.watchPopState, false)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pushHistoryFn() {</span></span>
<span class="line"><span>    pushHistory()</span></span>
<span class="line"><span>    function pushHistory() {</span></span>
<span class="line"><span>        const state = {</span></span>
<span class="line"><span>            title: &#39;title&#39;,</span></span>
<span class="line"><span>            url: &#39;#&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        window.history.pushState(state, &#39;title&#39;, &#39;#&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Android：只有左返回按钮，不触发popstate，但会触发vue路由(beforeEach...)</p><h3 id="微信浏览器-h5-左上角x按钮关闭事件-如何监听" tabindex="-1">微信浏览器 h5 左上角X按钮关闭事件 如何监听？ <a class="header-anchor" href="#微信浏览器-h5-左上角x按钮关闭事件-如何监听" aria-label="Permalink to &quot;微信浏览器 h5 左上角X按钮关闭事件 如何监听？&quot;">​</a></h3><p>监听不了</p><h3 id="微信浏览器-h5-ios偶现-头部绿色进度条一直loading怎么回事" tabindex="-1">微信浏览器 h5 iOS偶现 头部绿色进度条一直loading怎么回事? <a class="header-anchor" href="#微信浏览器-h5-ios偶现-头部绿色进度条一直loading怎么回事" aria-label="Permalink to &quot;微信浏览器 h5 iOS偶现 头部绿色进度条一直loading怎么回事?&quot;">​</a></h3><p><img src="`+e+`" alt="alt text"> 不知道啥原因，有一次抓包时遇到了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>captureError connect  http tunnel to gateway.icloud.com.cn:443</span></span>
<span class="line"><span>captureError connect http tunnel to xp.apple.com:443</span></span></code></pre></div><p>这种情况wx.config未生效，分享好友设置无效。</p><p>手動刷新页面后是好的，不loading了。</p><h3 id="微信h5分享-转发给朋友-卡片-如何配置" tabindex="-1">微信h5分享 转发给朋友 卡片 如何配置？ <a class="header-anchor" href="#微信h5分享-转发给朋友-卡片-如何配置" aria-label="Permalink to &quot;微信h5分享 转发给朋友 卡片 如何配置？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wx.config({</span></span>
<span class="line"><span>    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，报错也会alert。</span></span>
<span class="line"><span>    appId: data.appId,</span></span>
<span class="line"><span>    timestamp: data.timestamp,</span></span>
<span class="line"><span>    nonceStr: data.nonceStr,</span></span>
<span class="line"><span>    signature: data.signature,</span></span>
<span class="line"><span>    jsApiList: [&#39;updateAppMessageShareData&#39;, &#39;chooseWXPay&#39;] // 必填，需要使用的JS接口列表</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wx.ready(() =&gt; { // 需在用户可能点击分享按钮前就先调用</span></span>
<span class="line"><span>    wx.updateAppMessageShareData({</span></span>
<span class="line"><span>        title: this.currentObj.title, // 分享标题</span></span>
<span class="line"><span>        desc: &#39;描述非必填&#39;,</span></span>
<span class="line"><span>        link: this.shareLink,</span></span>
<span class="line"><span>        imgUrl: this.currentObj.coverImage, // 必填</span></span>
<span class="line"><span>        success: function() {</span></span>
<span class="line"><span>            // 设置成功</span></span>
<span class="line"><span>            // alert(&#39;设置成功&#39;)</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        fail: function(error) {</span></span>
<span class="line"><span>            console.log(&#39;分享设置失败：&#39; + error.errMsg)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>如果使用url链接打开的页面，分享出去不是卡片，还是链接。</p><p>从公众号进去分享就是卡片。</p><h3 id="vue的beforeeach如何跳过某一个页面直接进入下一页" tabindex="-1">vue的beforeEach如何跳过某一个页面直接进入下一页？ <a class="header-anchor" href="#vue的beforeeach如何跳过某一个页面直接进入下一页" aria-label="Permalink to &quot;vue的beforeEach如何跳过某一个页面直接进入下一页？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 跳微信授权页</span></span>
<span class="line"><span>goWxAuth() // 本来要进入的页面也在历史栈里，展示空白页面；授权页面回退会到空白页</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>next() // 会执行本来要进入的初始页面代码</span></span>
<span class="line"><span>goWxAuth() // 授权页面回退会到初始页面</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>next() // 最终只有home页面</span></span>
<span class="line"><span>location.href = &#39;/home&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>next() // 最终只有baidu页面</span></span>
<span class="line"><span>location.href = &#39;https://www.baidu.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>next() </span></span>
<span class="line"><span>// android 只展示 /home 页面，页面底部&lt; 返回直接closeWindow</span></span>
<span class="line"><span>// 在这里_blank ios没反应，还在初始页面无法打开/home</span></span>
<span class="line"><span>window.open(&#39;/home&#39;, &#39;_blank&#39;) </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>next({ // 直接替换初始页面进入到/home</span></span>
<span class="line"><span>    path: &#39;/home&#39;,</span></span>
<span class="line"><span>    replace: true</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="如何记录视频播放进度-下次从观看位置继续播放" tabindex="-1">如何记录视频播放进度，下次从观看位置继续播放？ <a class="header-anchor" href="#如何记录视频播放进度-下次从观看位置继续播放" aria-label="Permalink to &quot;如何记录视频播放进度，下次从观看位置继续播放？&quot;">​</a></h3><p>监听页面回退，调接口记录视频播放时长；</p><p>但是有场景无法监听到页面回退或关闭，比如微信h5左上角关闭事件，那就在视频播放时使用定时器定时调接口；</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.player.on(&#39;play&#39;, (e) =&gt; {</span></span>
<span class="line"><span>    this.recordTimer = setInterval(() =&gt; {</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    }, 15000)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="承接上个问题-退出微信h5页面到后台-再次打开页面-定时器开启多个产生混乱" tabindex="-1">承接上个问题，退出微信h5页面到后台，再次打开页面，定时器开启多个产生混乱 <a class="header-anchor" href="#承接上个问题-退出微信h5页面到后台-再次打开页面-定时器开启多个产生混乱" aria-label="Permalink to &quot;承接上个问题，退出微信h5页面到后台，再次打开页面，定时器开启多个产生混乱&quot;">​</a></h3><p>页面再次打开，会再次进入播放器play事件；又执行了定时器操作；</p><p>解决办法：监听页面隐藏，关闭定时器；</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>document.addEventListener(&#39;visibilitychange&#39;, () =&gt; {</span></span>
<span class="line"><span>    if (document.visibilityState === &#39;visible&#39;) {</span></span>
<span class="line"><span>        // alert(&#39;页面显示&#39;)</span></span>
<span class="line"><span>    } else if (document.visibilityState === &#39;hidden&#39;) {</span></span>
<span class="line"><span>        this.recordTimer &amp;&amp; clearInterval(this.recordTimer)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>或者使用一个变量，判断开启过定时器，就return，不执行 this.player.on(&#39;play&#39;,...)里的代码。</p><h3 id="微信网页授权-invalid-signature" tabindex="-1">微信网页授权 invalid signature <a class="header-anchor" href="#微信网页授权-invalid-signature" aria-label="Permalink to &quot;微信网页授权 invalid signature&quot;">​</a></h3><p><img src="`+t+'" alt="alt text"></p><p>签名用到的url必须和当前页面的url地址一样</p><p>从公众号底部菜单跳转授权h5地址，如果state没有设置，ios第一次进入目的页面url上是state=，再刷新就是state，导致第一次进来就报错，刷新反而好了。android正常。</p><p>解决：state=111（随便写一个）</p><p>随便写的state=1，页面竟然报错了： <img src="'+i+'" alt="alt text"> 不知道啥原因，改了个state=111好了。</p><p>JS-SDK说明文档：</p><p><a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html</a></p><h3 id="微信授权-使用code调接口获取用户信息-发现code使用了2次导致接口报错" tabindex="-1">微信授权 使用code调接口获取用户信息，发现code使用了2次导致接口报错？ <a class="header-anchor" href="#微信授权-使用code调接口获取用户信息-发现code使用了2次导致接口报错" aria-label="Permalink to &quot;微信授权 使用code调接口获取用户信息，发现code使用了2次导致接口报错？&quot;">​</a></h3><p><img src="'+l+'" alt="alt text"></p><p>因为页面进行了301重定向，url后面加了个&#39;/&#39;，页面打开2次，code调接口执行2次，导致接口报错。</p><p>解决办法：要跳转的页面url后面直接加上/，就不会再重定向了。</p>',50),r=[c];function h(d,u,g,m,b,v){return n(),s("div",null,r)}const x=a(o,[["render",h]]);export{f as __pageData,x as default};
