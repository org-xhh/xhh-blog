import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const b=JSON.parse('{"title":"动态主题设置","description":"","frontmatter":{},"headers":[],"relativePath":"technology/miniprogram/动态主题设置.md","filePath":"technology/miniprogram/动态主题设置.md","lastUpdated":1719825776000}'),e={name:"technology/miniprogram/动态主题设置.md"},l=p(`<h1 id="动态主题设置" tabindex="-1">动态主题设置 <a class="header-anchor" href="#动态主题设置" aria-label="Permalink to &quot;动态主题设置&quot;">​</a></h1><h2 id="设置全局样式" tabindex="-1">设置全局样式 <a class="header-anchor" href="#设置全局样式" aria-label="Permalink to &quot;设置全局样式&quot;">​</a></h2><p>app.wxss:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>page {</span></span>
<span class="line"><span>  --theme-color: #910893;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>页面样式使用(**.wxss)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.order-detail {</span></span>
<span class="line"><span>  color: var(--theme-color);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="动态主题设置-1" tabindex="-1">动态主题设置 <a class="header-anchor" href="#动态主题设置-1" aria-label="Permalink to &quot;动态主题设置&quot;">​</a></h2><p>app.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>App({</span></span>
<span class="line"><span>  globalData: {</span></span>
<span class="line"><span>    themeColor: &#39;--themeColorVal: red&#39;,</span></span>
<span class="line"><span>    bgColor: &#39;green&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>页面引入globalData(**.js)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Page({</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h2 id="动态引入图片" tabindex="-1">动态引入图片 <a class="header-anchor" href="#动态引入图片" aria-label="Permalink to &quot;动态引入图片&quot;">​</a></h2><p>app.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>App({</span></span>
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
<span class="line"><span>&lt;image webp=&quot;{{true}}&quot; wx:else src=&quot;{{orderImgObj.phone2x}}&quot; /&gt;</span></span></code></pre></div>`,22),t=[l];function i(o,c,d,h,r,g){return n(),s("div",null,t)}const m=a(e,[["render",i]]);export{b as __pageData,m as default};
