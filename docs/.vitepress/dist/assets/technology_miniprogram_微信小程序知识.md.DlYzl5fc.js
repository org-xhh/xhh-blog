import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const b=JSON.parse('{"title":"miniprogram knowledge","description":"","frontmatter":{},"headers":[],"relativePath":"technology/miniprogram/微信小程序知识.md","filePath":"technology/miniprogram/微信小程序知识.md"}'),e={name:"technology/miniprogram/微信小程序知识.md"},i=p(`<h1 id="miniprogram-knowledge" tabindex="-1">miniprogram knowledge <a class="header-anchor" href="#miniprogram-knowledge" aria-label="Permalink to &quot;miniprogram knowledge&quot;">​</a></h1><h2 id="状态管理" tabindex="-1">状态管理 <a class="header-anchor" href="#状态管理" aria-label="Permalink to &quot;状态管理&quot;">​</a></h2><p>mobx-miniprogram-bindings</p><p>文档：</p><p><a href="https://github.com/wechat-miniprogram/mobx-miniprogram-bindings" target="_blank" rel="noreferrer">https://github.com/wechat-miniprogram/mobx-miniprogram-bindings</a></p><h2 id="动态主题设置" tabindex="-1">动态主题设置 <a class="header-anchor" href="#动态主题设置" aria-label="Permalink to &quot;动态主题设置&quot;">​</a></h2><h3 id="设置全局样式" tabindex="-1">设置全局样式 <a class="header-anchor" href="#设置全局样式" aria-label="Permalink to &quot;设置全局样式&quot;">​</a></h3><p>app.wxss:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>page {</span></span>
<span class="line"><span>  --theme-color: #910893;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>页面样式使用(**.wxss)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.order-detail {</span></span>
<span class="line"><span>  color: var(--theme-color);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="动态主题设置-1" tabindex="-1">动态主题设置 <a class="header-anchor" href="#动态主题设置-1" aria-label="Permalink to &quot;动态主题设置&quot;">​</a></h3><p>app.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>App({</span></span>
<span class="line"><span>  globalData: {</span></span>
<span class="line"><span>    themeColor: &#39;--themeColorVal: red&#39;,</span></span>
<span class="line"><span>    bgColor: &#39;green&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>页面引入globalData(**.js)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const app = getApp()</span></span>
<span class="line"><span>Page({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    themeColor: app.globalData.themeColor</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  onShow() {</span></span>
<span class="line"><span>    // 设置页面背景样式</span></span>
<span class="line"><span>    wx.setPageStyle({</span></span>
<span class="line"><span>      style: {</span></span>
<span class="line"><span>        background: app.globalData.bgColor</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>页面设置顶级view标签(**.wxml):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;view style=&quot;{{ themeColor }}&quot;&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;/view&gt;</span></span></code></pre></div><p>页面样式使用(**.wxss):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.status-wrap {</span></span>
<span class="line"><span>    color: var(--themeColorVal);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="动态引入图片" tabindex="-1">动态引入图片 <a class="header-anchor" href="#动态引入图片" aria-label="Permalink to &quot;动态引入图片&quot;">​</a></h3><p>app.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>App({</span></span>
<span class="line"><span>  globalData: {</span></span>
<span class="line"><span>    orderImgObj: {</span></span>
<span class="line"><span>      phone3x: &#39;/assets/phone3x.png&#39;,</span></span>
<span class="line"><span>      phone2x: &#39;/assets/phone2x.png&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>js引入(**.js)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Page({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    orderImgObj: app.globalData.orderImgObj,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>页面使用图片(**.wxml):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;image webp=&quot;{{true}}&quot; wx:if=&quot;{{ pixelRatio === 3 }}&quot; src=&quot;{{orderImgObj.phone3x}}&quot; /&gt;</span></span>
<span class="line"><span>&lt;image webp=&quot;{{true}}&quot; wx:else src=&quot;{{orderImgObj.phone2x}}&quot; /&gt;</span></span></code></pre></div><h2 id="转发给好友" tabindex="-1">转发给好友 <a class="header-anchor" href="#转发给好友" aria-label="Permalink to &quot;转发给好友&quot;">​</a></h2><p>前提：需要添加 onShareAppMessage 方法</p><p>分享方式一：</p><p>通过按钮分享</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;button open-type=&quot;share&quot; /&gt;</span></span></code></pre></div><p>分享方式二：</p><p>页面右上角菜单的转发</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>onShareAppMessage(res) {</span></span>
<span class="line"><span>  // 通过按钮分享 res.from === &#39;button&#39;</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    title: &#39;看，这是我分享给你的&#39;,</span></span>
<span class="line"><span>    path: &#39;/pages/pageDetail/pageDetail?id=&#39;+ id, // 分享卡片打开的链接</span></span>
<span class="line"><span>    imageUrl: &#39;&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="分享到朋友圈" tabindex="-1">分享到朋友圈 <a class="header-anchor" href="#分享到朋友圈" aria-label="Permalink to &quot;分享到朋友圈&quot;">​</a></h2><p>前提：需要添加 onShareTimeline 方法</p><p>监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。</p><h2 id="vant-weapp-组件响应式" tabindex="-1">@vant/weapp 组件响应式 <a class="header-anchor" href="#vant-weapp-组件响应式" aria-label="Permalink to &quot;@vant/weapp 组件响应式&quot;">​</a></h2><p>@vant/weapp 组件库默认样式单位为 ‌px‌，而小程序开发推荐使用 ‌rpx‌ 实现自适应布局，为统一将组件库样式从 px 转换为 rpx：</p><p>安装依赖:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install gulp gulp-postcss postcss-px2units --save-dev</span></span></code></pre></div><p>项目根目录创建 gulpfile.js‌:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const gulp = require(&#39;gulp&#39;);</span></span>
<span class="line"><span>const postcss = require(&#39;gulp-postcss&#39;);</span></span>
<span class="line"><span>const pxtounits = require(&#39;postcss-px2units&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gulp.task(&#39;css&#39;, function () {</span></span>
<span class="line"><span>  return gulp.src([&#39;miniprogram_npm/@vant/weapp/**/*.wxss&#39;])</span></span>
<span class="line"><span>    .pipe(postcss([</span></span>
<span class="line"><span>      pxtounits({</span></span>
<span class="line"><span>        multiple: 2, // 换算比例：1px = 2rpx</span></span>
<span class="line"><span>        targetUnits: &#39;rpx&#39;  // 目标单位</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    ]))</span></span>
<span class="line"><span>    .pipe(gulp.dest(&#39;miniprogram_npm/@vant/weapp/&#39;));</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>在 package.json 的 scripts 中添加脚本:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;build&quot;: &quot;gulp css&quot;</span></span></code></pre></div><p>执行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run build</span></span></code></pre></div><p>可以看到 miniprogram_npm/@vant/weapp/ 目录下 .wxss 文件里的 px 已转为 rpx。</p><h2 id="webview" tabindex="-1">webview <a class="header-anchor" href="#webview" aria-label="Permalink to &quot;webview&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html" target="_blank" rel="noreferrer">webview</a>中的h5页⾯如何跳回⼩程序？</p><ul><li>开发管理 -&gt; 开发设置 -&gt; 业务域名 配置</li><li>h5引入<a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html" target="_blank" rel="noreferrer">http://res.wx.qq.com/open/js/jweixin-1.6.0.js</a></li><li>h5跳转 wx.miniProgram.navigateTo()</li></ul>`,52),l=[i];function t(o,c,r,d,h,g){return n(),s("div",null,l)}const m=a(e,[["render",t]]);export{b as __pageData,m as default};
