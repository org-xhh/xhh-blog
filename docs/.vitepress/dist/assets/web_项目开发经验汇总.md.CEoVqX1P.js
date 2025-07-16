import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%BA%E7%BC%93%E5%AD%98.B0FQMlmC.png",i="/xhh-blog/assets/network206.DkQ3oLRl.png",l="/xhh-blog/assets/%E6%B8%B2%E6%9F%93%E7%A9%BA%E7%99%BD.yex4TdnC.jpg",t="/xhh-blog/assets/%E5%BE%AE%E4%BF%A1problem.BTvmTI2q.jpg",o="/xhh-blog/assets/%E5%BE%AE%E4%BF%A1%E6%8E%88%E6%9D%83%E9%97%AE%E9%A2%98.CGHMURu7.jpg",c="/xhh-blog/assets/%E5%BE%AE%E4%BF%A1%E6%8E%88%E6%9D%83%E9%97%AE%E9%A2%982.Dl1e_okA.jpg",r="/xhh-blog/assets/301.DdhEgxf1.jpg",_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/项目开发经验汇总.md","filePath":"web/项目开发经验汇总.md"}'),h={name:"web/项目开发经验汇总.md"},d=p('<h3 id="每次打开页面图片视频资源很耗流量-有没有办法解决" tabindex="-1">每次打开页面图片视频资源很耗流量，有没有办法解决？ <a class="header-anchor" href="#每次打开页面图片视频资源很耗流量-有没有办法解决" aria-label="Permalink to &quot;每次打开页面图片视频资源很耗流量，有没有办法解决？&quot;">​</a></h3><h4 id="图片" tabindex="-1">图片： <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片：&quot;">​</a></h4><p>浏览器强缓存</p><p><img src="'+e+`" alt="alt text"></p><h4 id="视频" tabindex="-1">视频： <a class="header-anchor" href="#视频" aria-label="Permalink to &quot;视频：&quot;">​</a></h4><p>2.1 range请求头</p><p>Range: bytes=0-1024</p><p>如果服务器支持范围请求，它会以状态码206 Partial Content响应，并在消息体中包含指定范围的内容。</p><p>这种请求方式通常不支持强制缓存，因为Range请求的设计初衷是为了提高网络传输效率，允许客户端只加载视频的一部分，而不是整个视频文件。</p><p>2.2 完整文件请求</p><h3 id="前端获取当前时间-不同时区时间不一样如何统一" tabindex="-1">前端获取当前时间，不同时区时间不一样如何统一？ <a class="header-anchor" href="#前端获取当前时间-不同时区时间不一样如何统一" aria-label="Permalink to &quot;前端获取当前时间，不同时区时间不一样如何统一？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let moment = require(&#39;moment-timezone&#39;)</span></span>
<span class="line"><span>moment.tz(date, &#39;Asia/Shanghai&#39;).format(&#39;YYYY-MM-DD HH:mm:ss&#39;) // 统一为北京时间（东八区）</span></span>
<span class="line"><span>// 全局设置默认时区</span></span>
<span class="line"><span>moment.tz.setDefault(&#39;Asia/Shanghai&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// dayjs</span></span>
<span class="line"><span>const dayjs = require(&#39;dayjs&#39;)</span></span>
<span class="line"><span>const timezone = require(&#39;dayjs/plugin/timezone&#39;)</span></span>
<span class="line"><span>dayjs.extend(timezone)</span></span>
<span class="line"><span>dayjs.tz.setDefault(&#39;Asia/Shanghai&#39;)</span></span>
<span class="line"><span>// 单独设置</span></span>
<span class="line"><span>dayjs.tz(&quot;2025-01-15 14:25&quot;, &quot;Asia/Shanghai&quot;)</span></span></code></pre></div><h3 id="后台通过aes加密-前端通过aes解密-加密过后的特殊字符含有-号的无法正确解密" tabindex="-1">后台通过aes加密，前端通过aes解密，加密过后的特殊字符含有“+”号的无法正确解密？ <a class="header-anchor" href="#后台通过aes加密-前端通过aes解密-加密过后的特殊字符含有-号的无法正确解密" aria-label="Permalink to &quot;后台通过aes加密，前端通过aes解密，加密过后的特殊字符含有“+”号的无法正确解密？&quot;">​</a></h3><p>浏览器会把url中的+转为空格，导致解密失败。</p><p>解决办法：</p><ol><li><p>服务端把将“+”号转义为“%2B”，前端就可以把%2B解析为+了；</p></li><li><p>使用base64编解码，不会出现+特殊字符。</p></li></ol><h3 id="canvas-获取-video-视频第一帧做为封面图-偶现封面图加载不出来" tabindex="-1">canvas 获取 video 视频第一帧做为封面图，偶现封面图加载不出来? <a class="header-anchor" href="#canvas-获取-video-视频第一帧做为封面图-偶现封面图加载不出来" aria-label="Permalink to &quot;canvas 获取 video 视频第一帧做为封面图，偶现封面图加载不出来?&quot;">​</a></h3><p>代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const videoEle = document.createElement(&#39;video&#39;)</span></span>
<span class="line"><span>videoEle.src = video</span></span>
<span class="line"><span>videoEle.crossOrigin = &#39;anonymous&#39;</span></span>
<span class="line"><span>videoEle.currentTime = 1</span></span>
<span class="line"><span>videoEle.oncanplay = () =&gt; {</span></span>
<span class="line"><span>    const canvas = document.createElement(&#39;canvas&#39;)</span></span>
<span class="line"><span>    canvas.width = 80</span></span>
<span class="line"><span>    canvas.height = 80</span></span>
<span class="line"><span>    canvas.getContext(&#39;2d&#39;).drawImage(videoEle, 0, 0, canvas.width, canvas.height)</span></span>
<span class="line"><span>    const previewImgSrc = canvas.toDataURL(&#39;image/png&#39;)</span></span>
<span class="line"><span>    console.log(previewImgSrc) // 封面图</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>比较大的视频(时长30min左右)会偶现封面图加载不出来的情况。</p><p>把视频时间从1改成0.9，未复现以上问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>videoEle.currentTime = 0.9</span></span></code></pre></div><h3 id="从cdn获取视频地址控制台有报错-net-err-failed-206-partial-content" tabindex="-1">从CDN获取视频地址控制台有报错 net::ERR_FAILED 206 (Partial Content) ？ <a class="header-anchor" href="#从cdn获取视频地址控制台有报错-net-err-failed-206-partial-content" aria-label="Permalink to &quot;从CDN获取视频地址控制台有报错 net::ERR_FAILED 206 (Partial Content) ？&quot;">​</a></h3><p><img src="`+i+`" alt="alt text"></p><p>报错如图，但是视频可以播放。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const videoEle = document.createElement(&#39;video&#39;)</span></span>
<span class="line"><span>videoEle.src = videoUrl</span></span>
<span class="line"><span>// 会进入 error 事件</span></span>
<span class="line"><span>videoEle.onerror = (e) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;error&#39;, e)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可能的解决办法：修改 nginx 缓存大小。</p><h3 id="html页面滚动到顶部闪现大块空白-然后又正常渲染内容-是怎么回事" tabindex="-1">html页面滚动到顶部闪现大块空白，然后又正常渲染内容，是怎么回事？ <a class="header-anchor" href="#html页面滚动到顶部闪现大块空白-然后又正常渲染内容-是怎么回事" aria-label="Permalink to &quot;html页面滚动到顶部闪现大块空白，然后又正常渲染内容，是怎么回事？&quot;">​</a></h3><p><img src="`+l+`" alt="alt text"></p><p>有大图！ 头部logo就3M，换成200K的就好了。</p><h3 id="微信浏览器-h5-如何判断是否已经网页授权-如何授权" tabindex="-1">微信浏览器 h5 如何判断是否已经网页授权？如何授权？ <a class="header-anchor" href="#微信浏览器-h5-如何判断是否已经网页授权-如何授权" aria-label="Permalink to &quot;微信浏览器 h5 如何判断是否已经网页授权？如何授权？&quot;">​</a></h3><p>判断是否已经网页授权：可以把openid存cookie或缓存，已存在就是授权过直接跳目的页；</p><p>如何授权：直接跳转地址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jumpUrl = encodeURIComponent(location.protocol + &#39;//&#39; + location.hostname + jumpUrl)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>Android：只有左返回按钮，不触发popstate，但会触发vue路由(beforeEach...)</p><h3 id="微信浏览器-h5-左上角x按钮关闭事件-如何监听" tabindex="-1">微信浏览器 h5 左上角X按钮关闭事件 如何监听？ <a class="header-anchor" href="#微信浏览器-h5-左上角x按钮关闭事件-如何监听" aria-label="Permalink to &quot;微信浏览器 h5 左上角X按钮关闭事件 如何监听？&quot;">​</a></h3><p>监听不了</p><h3 id="微信浏览器-h5-ios偶现-头部绿色进度条一直loading怎么回事" tabindex="-1">微信浏览器 h5 iOS偶现 头部绿色进度条一直loading怎么回事? <a class="header-anchor" href="#微信浏览器-h5-ios偶现-头部绿色进度条一直loading怎么回事" aria-label="Permalink to &quot;微信浏览器 h5 iOS偶现 头部绿色进度条一直loading怎么回事?&quot;">​</a></h3><p><img src="`+t+`" alt="alt text"> 不知道啥原因，有一次抓包时遇到了：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
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
<span class="line"><span>next() // 放行，会向历史堆栈中添加一个新的记录</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><h3 id="承接上个问题-退出微信h5页面到后台-再次打开页面-定时器开启多个产生混乱" tabindex="-1">承接上个问题，退出微信h5页面到后台，再次打开页面，定时器开启多个产生混乱 <a class="header-anchor" href="#承接上个问题-退出微信h5页面到后台-再次打开页面-定时器开启多个产生混乱" aria-label="Permalink to &quot;承接上个问题，退出微信h5页面到后台，再次打开页面，定时器开启多个产生混乱&quot;">​</a></h3><p>视频正在播放时退到后台，再次打开页面，会再次进入播放器play事件；又执行了定时器操作；</p><p>解决办法：监听页面隐藏，关闭定时器；</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>document.addEventListener(&#39;visibilitychange&#39;, () =&gt; {</span></span>
<span class="line"><span>    if (document.visibilityState === &#39;visible&#39;) {</span></span>
<span class="line"><span>        // alert(&#39;页面显示&#39;)</span></span>
<span class="line"><span>    } else if (document.visibilityState === &#39;hidden&#39;) {</span></span>
<span class="line"><span>        this.recordTimer &amp;&amp; clearInterval(this.recordTimer)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>或者使用一个变量，判断开启过定时器，就return，不执行 this.player.on(&#39;play&#39;,...)里的代码。</p><h3 id="微信网页授权-invalid-signature" tabindex="-1">微信网页授权 invalid signature <a class="header-anchor" href="#微信网页授权-invalid-signature" aria-label="Permalink to &quot;微信网页授权 invalid signature&quot;">​</a></h3><p><img src="`+o+'" alt="alt text"></p><p>签名用到的url必须和当前页面的url地址一样</p><p>从公众号底部菜单跳转授权h5地址，如果state没有设置，ios第一次进入目的页面url上是state=，再刷新就是state，导致第一次进来就报错，刷新反而好了。android正常。</p><p>解决：state=111（随便写一个）</p><p>随便写的state=1，页面竟然报错了： <img src="'+c+'" alt="alt text"> 不知道啥原因，改了个state=111好了。</p><p>JS-SDK说明文档：</p><p><a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html</a></p><h3 id="微信授权-使用code调接口获取用户信息-发现code使用了2次导致接口报错" tabindex="-1">微信授权 使用code调接口获取用户信息，发现code使用了2次导致接口报错？ <a class="header-anchor" href="#微信授权-使用code调接口获取用户信息-发现code使用了2次导致接口报错" aria-label="Permalink to &quot;微信授权 使用code调接口获取用户信息，发现code使用了2次导致接口报错？&quot;">​</a></h3><p><img src="'+r+`" alt="alt text"></p><p>因为页面进行了301重定向，url后面加了个&#39;/&#39;，页面打开2次，code调接口执行2次，导致接口报错。</p><p>解决办法：要跳转的页面url后面直接加上/，就不会再重定向了。</p><h3 id="微信授权-snsapi-userinfo-跳转后的页面返回的是虚拟用户" tabindex="-1">微信授权 snsapi_userinfo 跳转后的页面返回的是虚拟用户？ <a class="header-anchor" href="#微信授权-snsapi-userinfo-跳转后的页面返回的是虚拟用户" aria-label="Permalink to &quot;微信授权 snsapi_userinfo 跳转后的页面返回的是虚拟用户？&quot;">​</a></h3><p>微信官方：当开发者在网页中不规范使用发起 snsapi_userinfo 网页授权时，微信将默认打开网页快照页模式进行基础浏览。 此情况根据code获取到的用户信息openid等都是假用户，需要点击右下角 “使用完整服务” 触发授权弹窗，用户确认后进入原网页。</p><p>is_snapshotuser: 当用户是快照页模式虚拟账号时返回，值为1。</p><h3 id="vue2修改对象页面偶现不更新" tabindex="-1">vue2修改对象页面偶现不更新 <a class="header-anchor" href="#vue2修改对象页面偶现不更新" aria-label="Permalink to &quot;vue2修改对象页面偶现不更新&quot;">​</a></h3><p>原代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.dataTotalObj = Object.assign(this.dataTotalObj, newData)</span></span></code></pre></div><p>优化后：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.dataTotalObj = { ...this.dataTotalObj, newData }</span></span>
<span class="line"><span>this.dataTotalObj = Object.assign({}, this.dataTotalObj, newData)</span></span></code></pre></div><p>或者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.$forceUpdate()</span></span></code></pre></div><h3 id="循环事件中使用-splice-的坑" tabindex="-1">循环事件中使用 splice 的坑 <a class="header-anchor" href="#循环事件中使用-splice-的坑" aria-label="Permalink to &quot;循环事件中使用 splice 的坑&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for (let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    arr.splice(i, 1)</span></span>
<span class="line"><span>    i = i - 1 // 必须加这句</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>或 倒序删除</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for(let i=arr.length-1;i&gt;=0;i--) {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>	arr.splice(i,1);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="vue修改query参数更新当前页面" tabindex="-1">vue修改query参数更新当前页面 <a class="header-anchor" href="#vue修改query参数更新当前页面" aria-label="Permalink to &quot;vue修改query参数更新当前页面&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let routeUrl = this.$router.resolve({</span></span>
<span class="line"><span>    name: &#39;NewPage&#39;,</span></span>
<span class="line"><span>    query: {</span></span>
<span class="line"><span>        id: this.id</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>window.open(routeUrl.href, &#39;_blank&#39;)</span></span></code></pre></div><p>chrome浏览器新开一个页面，但没法回退了。</p><p>优化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>this.$router.push({</span></span>
<span class="line"><span>    name: &#39;NewPage&#39;,</span></span>
<span class="line"><span>    query: {</span></span>
<span class="line"><span>        id: this.id</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch: {</span></span>
<span class="line"><span>    &#39;$route.query&#39;: {</span></span>
<span class="line"><span>        handler(newVal) {</span></span>
<span class="line"><span>            this.resetAllData()</span></span>
<span class="line"><span>            this.initData()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        immediate: true // 首次打开页面执行</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="如何在用户离开页面时发送埋点" tabindex="-1">如何在用户离开页面时发送埋点？ <a class="header-anchor" href="#如何在用户离开页面时发送埋点" aria-label="Permalink to &quot;如何在用户离开页面时发送埋点？&quot;">​</a></h3><p>现代浏览器引入了“往返缓存”（Back-Forward Cache, bfcache）。当用户导航到其他页面点击返回，浏览器可能会直接从缓存中恢复上一个页面，而不是重新加载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.addEventListener(&#39;pagehide&#39;, (event) =&gt; {</span></span>
<span class="line"><span>  if (event.persisted) {</span></span>
<span class="line"><span>    console.log(&#39;页面正在进入 bfcache&#39;)</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    console.log(&#39;页面正在被正常卸载&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 埋点</span></span>
<span class="line"><span>  navigator.sendBeacon(&#39;/logs&#39;, data);</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,102),u=[d];function g(b,v,m,k,x,f){return n(),s("div",null,u)}const q=a(h,[["render",g]]);export{_ as __pageData,q as default};
