import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAtCAYAAAAN1C2uAAABZklEQVRoBe3aUQ7CMAgGYI62o/XGJl6gOqNm0XV/2x+YrTzwREjkC8ytqVwu1xxRNpDAKeOsNgEENiiAAuh4hdAjJiYoJigmyPQ1RW3F0iI5i3MkMcVR/ZuXJNkVKUnOeTAgN6QnzpBA5kgbnGGBzJA+cIYGUkfawRkeSA2pgDMFEI10gDMNUDcSwJkKqBmpAmc6oGqkSpwpgSBSA860QEWkRpypgb6QOnCmB3ojdeL8BZAsKaeUHl/ma8OtgY5M2bzaedA6Dc1xx3kdIfUisQCo/jygDQ6DhBpk8+cA7eD0IrEAqN4f6ACnBwk1yOZ9gSpwWpFYAFTvB9SA04KEGmTzPkAdOLVILACqtwcicGqQUINs3hZIAQchsQCo3g5IEecICTXI5m2ADHBKSCwAqtcHMsTZQ0INsnldIAecTyQWANXrATnibJFQg2xeDYj9Ib9aH0BxwyxumJleoooVixWLFTNdsRsGhkQ4WcqNXwAAAABJRU5ErkJggg==",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/css样式集锦.md","filePath":"web/css/css样式集锦.md"}'),l={name:"web/css/css样式集锦.md"},i=p(`<h2 id="_0-5px-全边框" tabindex="-1">0.5px 全边框 <a class="header-anchor" href="#_0-5px-全边框" aria-label="Permalink to &quot;0.5px 全边框&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>li {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h2 id="_0-5px-下边框" tabindex="-1">0.5px 下边框 <a class="header-anchor" href="#_0-5px-下边框" aria-label="Permalink to &quot;0.5px 下边框&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>li {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h2 id="三角形" tabindex="-1">三角形 <a class="header-anchor" href="#三角形" aria-label="Permalink to &quot;三角形&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.triangle {</span></span>
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
<span class="line"><span>&lt;/svg&gt;</span></span></code></pre></div>`,9),t=[i];function o(c,r,d,h,g,b){return n(),a("div",null,t)}const m=s(l,[["render",o]]);export{u as __pageData,m as default};
