import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.DrOZDLiO.js";const t="/assets/image.CTPZ8IC7.png",i="/assets/image-1.DpFAkaP1.png",l="/assets/image-2.CWqIrBpi.png",e="/assets/image-3.D3lo2RTS.png",x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/css中width的小九九.md","filePath":"web/css/css中width的小九九.md","lastUpdated":1718682295000}'),c={name:"web/css/css中width的小九九.md"},d=p(`<h3 id="一、width话题引入" tabindex="-1">一、width话题引入 <a class="header-anchor" href="#一、width话题引入" aria-label="Permalink to &quot;一、width话题引入&quot;">​</a></h3><p>width属性定义元素内容区的宽度，在内容区外面可以增加内边距、边框和外边距。那分别设置 width:auto、width:100% 有什么区别呢？设置box-sizing: border-box对元素宽度有什么影响？</p><h3 id="二、代码demo" tabindex="-1">二、代码demo <a class="header-anchor" href="#二、代码demo" aria-label="Permalink to &quot;二、代码demo&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;css中width的小九九&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;style&gt;</span></span>
<span class="line"><span>    .parent {</span></span>
<span class="line"><span>      width: 500px;</span></span>
<span class="line"><span>      height: 560px;</span></span>
<span class="line"><span>      background-color: #fff;</span></span>
<span class="line"><span>      border: 10px solid #eee;</span></span>
<span class="line"><span>      padding: 20px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    .child {</span></span>
<span class="line"><span>      background-color: #ccc;</span></span>
<span class="line"><span>      border: 10px solid #eee;</span></span>
<span class="line"><span>      margin: 20px;</span></span>
<span class="line"><span>      padding: 1px;</span></span>
<span class="line"><span>      height: 100px;</span></span>
<span class="line"><span>      text-align: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .child2 {</span></span>
<span class="line"><span>      width: auto;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .child3 {</span></span>
<span class="line"><span>      width: 100%;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .child4 {</span></span>
<span class="line"><span>      width: 100%;</span></span>
<span class="line"><span>      box-sizing: border-box;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>      parent</span></span>
<span class="line"><span>      &lt;div class=&quot;child child1&quot;&gt;child1: default&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;child child2&quot;&gt;child2: width:auto&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;child child3&quot;&gt;child3: width:100%&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;child child4&quot;&gt;child4: width:100% 并且 box-sizing:border-box&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p><img src="`+t+'" alt="alt text"></p><h3 id="三、分析" tabindex="-1">三、分析 <a class="header-anchor" href="#三、分析" aria-label="Permalink to &quot;三、分析&quot;">​</a></h3><p>1.child1：宽度默认auto，和child2一致</p><p>2.child2：设置width:auto</p><p><img src="'+i+'" alt="alt text"></p><p>最终宽度：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>500(父元素宽度) - 20(子元素margin)∗2 - 10(子元素border)∗2 - 1(子元素padding)∗2 = 438</span></span></code></pre></div><p>3.child3：设置width:100%</p><p><img src="'+l+`" alt="alt text"> 最终宽度：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>500(父元素宽度)</span></span></code></pre></div><p>4.child4：</p><p>设置width:100%; box-sizing: border-box;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>box-sizing：border-box;</span></span>
<span class="line"><span>盒子width = 内容的宽度 + padding + border</span></span>
<span class="line"><span>盒子height = 内容的高度 + padding + border</span></span>
<span class="line"><span></span></span>
<span class="line"><span>box-sizing：content-box;</span></span>
<span class="line"><span>盒子width = 内容的宽度</span></span>
<span class="line"><span>盒子height = 内容的高度</span></span></code></pre></div><p><img src="`+e+'" alt="alt text"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>最终宽度：500 - 1(子元素padding)∗2 - 10(子元素border)∗2 = 478</span></span></code></pre></div><h3 id="四、结论" tabindex="-1">四、结论 <a class="header-anchor" href="#四、结论" aria-label="Permalink to &quot;四、结论&quot;">​</a></h3><ul><li>width:auto 是子元素的 content + padding + border + margin 撑满父元素的 content。</li><li>width:100% 是子元素的 content 撑满父元素的 content。</li><li>在开发中尽量选择设置 width: auto，避免子元素设置 padding、border、margin等导致子元素溢出父元素。</li><li>在开发中可以选择在根元素设置 box-sizing:border-box</li></ul>',21),o=[d];function h(r,g,b,u,m,_){return n(),a("div",null,o)}const w=s(c,[["render",h]]);export{x as __pageData,w as default};
