import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAtCAYAAAAN1C2uAAABZklEQVRoBe3aUQ7CMAgGYI62o/XGJl6gOqNm0XV/2x+YrTzwREjkC8ytqVwu1xxRNpDAKeOsNgEENiiAAuh4hdAjJiYoJigmyPQ1RW3F0iI5i3MkMcVR/ZuXJNkVKUnOeTAgN6QnzpBA5kgbnGGBzJA+cIYGUkfawRkeSA2pgDMFEI10gDMNUDcSwJkKqBmpAmc6oGqkSpwpgSBSA860QEWkRpypgb6QOnCmB3ojdeL8BZAsKaeUHl/ma8OtgY5M2bzaedA6Dc1xx3kdIfUisQCo/jygDQ6DhBpk8+cA7eD0IrEAqN4f6ACnBwk1yOZ9gSpwWpFYAFTvB9SA04KEGmTzPkAdOLVILACqtwcicGqQUINs3hZIAQchsQCo3g5IEecICTXI5m2ADHBKSCwAqtcHMsTZQ0INsnldIAecTyQWANXrATnibJFQg2xeDYj9Ib9aH0BxwyxumJleoooVixWLFTNdsRsGhkQ4WcqNXwAAAABJRU5ErkJggg==",x=JSON.parse('{"title":"Style","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/css样式集锦.md","filePath":"web/css/css样式集锦.md"}'),l={name:"web/css/css样式集锦.md"},i=p(`<h1 id="style" tabindex="-1">Style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;Style&quot;">​</a></h1><h3 id="_0-5px-全边框" tabindex="-1">0.5px 全边框 <a class="header-anchor" href="#_0-5px-全边框" aria-label="Permalink to &quot;0.5px 全边框&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>li {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  &amp;::after {</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 200%;</span></span>
<span class="line"><span>    height: 200%;</span></span>
<span class="line"><span>    top: 0;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    border: 1px solid #eee;</span></span>
<span class="line"><span>    border-radius: 16px;</span></span>
<span class="line"><span>    transform: scale(0.5, 0.5);</span></span>
<span class="line"><span>    transform-origin: 0 0;</span></span>
<span class="line"><span>    box-sizing: border-box;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_0-5px-下边框" tabindex="-1">0.5px 下边框 <a class="header-anchor" href="#_0-5px-下边框" aria-label="Permalink to &quot;0.5px 下边框&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>li {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  &amp;::after {</span></span>
<span class="line"><span>    content: &#39;&#39;;</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    width: 200%;</span></span>
<span class="line"><span>    height: 1px;</span></span>
<span class="line"><span>    left: 0;</span></span>
<span class="line"><span>    bottom: 0;</span></span>
<span class="line"><span>    background-color: #eee;</span></span>
<span class="line"><span>    transform: scale(0.5);</span></span>
<span class="line"><span>    transform-origin: 0 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="三角形" tabindex="-1">三角形 <a class="header-anchor" href="#三角形" aria-label="Permalink to &quot;三角形&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.triangle {</span></span>
<span class="line"><span>  width: 0;</span></span>
<span class="line"><span>  height: 0;</span></span>
<span class="line"><span>  border-width: 15px;</span></span>
<span class="line"><span>  border-style: solid;</span></span>
<span class="line"><span>  border-top-color: red;</span></span>
<span class="line"><span>  border-left-color: green;</span></span>
<span class="line"><span>  border-right-color: yellow;</span></span>
<span class="line"><span>  border-bottom-color: blue;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+e+`" alt="alt text"></p><p>补充：使用svg绘制三角形</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;svg width=&quot;100&quot; height=&quot;100&quot;&gt;</span></span>
<span class="line"><span>  &lt;polygon points=&quot;100,100 100,0 0,100&quot; fill=&quot;darkolivegreen&quot; /&gt;</span></span>
<span class="line"><span>&lt;/svg&gt;</span></span></code></pre></div><h3 id="滚动条" tabindex="-1">滚动条 <a class="header-anchor" href="#滚动条" aria-label="Permalink to &quot;滚动条&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* Webkit浏览器滚动条样式 */</span></span>
<span class="line"><span>.common-scrollbar::-webkit-scrollbar {</span></span>
<span class="line"><span>  width: 8px; /* 滚动条宽度 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.common-scrollbar::-webkit-scrollbar-track {</span></span>
<span class="line"><span>  background: #f1f1f1; /* 轨道 */</span></span>
<span class="line"><span>  border-radius: 4px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.common-scrollbar::-webkit-scrollbar-thumb {</span></span>
<span class="line"><span>  background: #c1c1c1; /* 滑块 */</span></span>
<span class="line"><span>  border-radius: 4px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.common-scrollbar::-webkit-scrollbar-thumb:hover {</span></span>
<span class="line"><span>  background: #a8a8a8; /* 悬停时滑块颜色 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="文字渐变" tabindex="-1">文字渐变 <a class="header-anchor" href="#文字渐变" aria-label="Permalink to &quot;文字渐变&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.gradient-text {</span></span>
<span class="line"><span>  background: linear-gradient(45deg, #ff6b6b, purple);</span></span>
<span class="line"><span>  background-clip: text;</span></span>
<span class="line"><span>  -webkit-background-clip: text; /* 背景裁剪到文字 */</span></span>
<span class="line"><span>  -webkit-text-fill-color: transparent; /* 文字透明 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="文字阴影" tabindex="-1">文字阴影 <a class="header-anchor" href="#文字阴影" aria-label="Permalink to &quot;文字阴影&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>text-shadow: 1px 1px 0 #FF3B2F, </span></span>
<span class="line"><span>            2px 2px 0 purple, </span></span>
<span class="line"><span>            3px 3px 5px rgba(0, 0, 0, 0.6); /* 多层阴影 */</span></span></code></pre></div><h3 id="文字溢出省略" tabindex="-1">文字溢出省略 <a class="header-anchor" href="#文字溢出省略" aria-label="Permalink to &quot;文字溢出省略&quot;">​</a></h3><p>需要固定宽度</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.text-ellipsis {</span></span>
<span class="line"><span>  white-space: nowrap; </span></span>
<span class="line"><span>  overflow: hidden; </span></span>
<span class="line"><span>  text-overflow: ellipsis;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.text-ellipsis3 {</span></span>
<span class="line"><span>  display: -webkit-box;</span></span>
<span class="line"><span>  -webkit-line-clamp: 3; /* 显示3行 */</span></span>
<span class="line"><span>  -webkit-box-orient: vertical;</span></span>
<span class="line"><span>  overflow: hidden;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="悬浮阴影动画" tabindex="-1">悬浮阴影动画 <a class="header-anchor" href="#悬浮阴影动画" aria-label="Permalink to &quot;悬浮阴影动画&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.navbar {</span></span>
<span class="line"><span>  background: #fff;</span></span>
<span class="line"><span>  border-radius: 8px;</span></span>
<span class="line"><span>  padding: 16px;</span></span>
<span class="line"><span>  transition: all 0.3s ease;</span></span>
<span class="line"><span>  box-shadow: 0 4px 6px -1px #00000014, 0 2px 4px -2px #0000000f;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.navbar:hover {</span></span>
<span class="line"><span>  transform: translateY(-6px) scale(1.02);</span></span>
<span class="line"><span>  box-shadow: 0 20px 25px -5px #00000026, 0 8px 10px -6px #0000001a;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,21),t=[i];function c(o,r,d,h,b,g){return n(),a("div",null,t)}const k=s(l,[["render",c]]);export{x as __pageData,k as default};
