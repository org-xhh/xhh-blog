import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/水平垂直居中.md","filePath":"web/css/水平垂直居中.md"}'),e={name:"web/css/水平垂直居中.md"},l=p(`<h2 id="水平居中" tabindex="-1">水平居中 <a class="header-anchor" href="#水平居中" aria-label="Permalink to &quot;水平居中&quot;">​</a></h2><h3 id="使用-flexbox-布局" tabindex="-1">使用 Flexbox 布局 <a class="header-anchor" href="#使用-flexbox-布局" aria-label="Permalink to &quot;使用 Flexbox 布局&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  /* 子元素内容 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="使用-margin-auto-方式居中" tabindex="-1">使用 margin:auto 方式居中 <a class="header-anchor" href="#使用-margin-auto-方式居中" aria-label="Permalink to &quot;使用 margin:auto 方式居中&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.child {</span></span>
<span class="line"><span>  margin: 0 auto;</span></span>
<span class="line"><span>  display: block;</span></span>
<span class="line"><span>  width: 50%;     /* 具体宽度 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="使用-text-align-针对inline或inline-block元素" tabindex="-1">使用 text-align，针对inline或inline-block元素 <a class="header-anchor" href="#使用-text-align-针对inline或inline-block元素" aria-label="Permalink to &quot;使用 text-align，针对inline或inline-block元素&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  display: inline-block;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="定位-transform" tabindex="-1">定位+transform <a class="header-anchor" href="#定位-transform" aria-label="Permalink to &quot;定位+transform&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  left: 50%;</span></span>
<span class="line"><span>  transform: translateX(-50%);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="定位-margin负值" tabindex="-1">定位+margin负值 <a class="header-anchor" href="#定位-margin负值" aria-label="Permalink to &quot;定位+margin负值&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.father {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  width: 300px;</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  border: 1px solid red;</span></span>
<span class="line"><span>  .son {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    top: 50%;</span></span>
<span class="line"><span>    left: 50%;</span></span>
<span class="line"><span>    margin-top: -50px; // 垂直居中</span></span>
<span class="line"><span>    margin-left: -50px; // 水平居中</span></span>
<span class="line"><span>    background-color: green</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="定位-calc" tabindex="-1">定位+calc <a class="header-anchor" href="#定位-calc" aria-label="Permalink to &quot;定位+calc&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.father {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  width: 300px;</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  border: 1px solid red;</span></span>
<span class="line"><span>  .son {</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    left: calc(50% - 50px); // 水平居中（操作符-左右必须有空格）</span></span>
<span class="line"><span>    top: calc(50% - 50px); // 垂直居中</span></span>
<span class="line"><span>    background-color: green;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="定位-margin" tabindex="-1">定位+margin <a class="header-anchor" href="#定位-margin" aria-label="Permalink to &quot;定位+margin&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.father {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  width: 300px;</span></span>
<span class="line"><span>  height: 300px;</span></span>
<span class="line"><span>  border: 1px solid red;</span></span>
<span class="line"><span>  .son {</span></span>
<span class="line"><span>    position: absolute; // 子元素水平垂直居中</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    right: 0;</span></span>
<span class="line"><span>    bottom: 0;</span></span>
<span class="line"><span>    margin: auto;</span></span>
<span class="line"><span>    background-color: green;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="垂直居中" tabindex="-1">垂直居中 <a class="header-anchor" href="#垂直居中" aria-label="Permalink to &quot;垂直居中&quot;">​</a></h2><h3 id="使用-flexbox-布局-1" tabindex="-1">使用 Flexbox 布局 <a class="header-anchor" href="#使用-flexbox-布局-1" aria-label="Permalink to &quot;使用 Flexbox 布局&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  align-items: center; /* 垂直居中 */</span></span>
<span class="line"><span>  justify-content: center; /* 水平居中 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  /* 子元素内容 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="使用绝对定位和transform" tabindex="-1">使用绝对定位和transform <a class="header-anchor" href="#使用绝对定位和transform" aria-label="Permalink to &quot;使用绝对定位和transform&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 50%;</span></span>
<span class="line"><span>  transform: translateY(-50%);</span></span>
<span class="line"><span>  /* 或者用下面的 transform 属性 */</span></span>
<span class="line"><span>  /* transform: translate(-50%, -50%); */</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="使用-line-height-适用于单行文本" tabindex="-1">使用 line-height (适用于单行文本) <a class="header-anchor" href="#使用-line-height-适用于单行文本" aria-label="Permalink to &quot;使用 line-height (适用于单行文本)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.parent {</span></span>
<span class="line"><span>  height: 100px; /* 需要设定高度 */</span></span>
<span class="line"><span>  line-height: 100px; /* 与父元素高度相同 */</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,22),i=[l];function t(c,o,r,h,d,b){return n(),s("div",null,i)}const m=a(e,[["render",t]]);export{u as __pageData,m as default};
