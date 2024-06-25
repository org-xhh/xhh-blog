import{_ as a,c as s,o as p,a3 as e}from"./chunks/framework.DrOZDLiO.js";const n="/assets/image-4.DjFPNL7z.png",x=JSON.parse('{"title":"CSS 单位 和 dpr","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/css单位和dpr.md","filePath":"web/css/css单位和dpr.md","lastUpdated":1718789027000}'),t={name:"web/css/css单位和dpr.md"},i=e('<h1 id="css-单位-和-dpr" tabindex="-1">CSS 单位 和 dpr <a class="header-anchor" href="#css-单位-和-dpr" aria-label="Permalink to &quot;CSS 单位 和 dpr&quot;">​</a></h1><h2 id="css-单位有哪些" tabindex="-1">CSS 单位有哪些 <a class="header-anchor" href="#css-单位有哪些" aria-label="Permalink to &quot;CSS 单位有哪些&quot;">​</a></h2><ul><li>px</li></ul><p>绝对长度单位，像素（在屏幕上显示的最小单位）</p><ul><li>rpx</li></ul><p>微信小程序 和 uni-app 中使用，用于解决屏幕自适应，规定屏幕宽度为750px，则px和rpx的计算公式为：</p><p>px =（750/设备的逻辑像素）* rpx</p><ul><li>em</li></ul><p>相对长度单位，基准点为父节点字体的大小，如果自身定义了font-size则按自身来计算</p><ul><li>rem</li></ul><p>相对长度单位，相对于根元素的字体大小</p><ul><li>vh</li></ul><p>（Viewport Height）</p><p>相对长度单位，相对于当前浏览器窗口的可视区域，1vh相当于浏览器可视区域高度的1%，100vh即100%</p><ul><li>vw</li></ul><p>（Viewport Width）</p><p>相对长度单位，相对于当前浏览器窗口的可视区域，1vw相当于浏览器可视区域宽度的1%，100vw即100%</p><ul><li>vmin</li></ul><p>视口宽度和高度中较小的那个百分比</p><p>例如，如果视口的宽度为1000px，高度为800px，那么1vmin就等于8px（即800px的0.1）</p><ul><li>vmax</li></ul><p>视口宽度和高度中较大的那个百分比</p><p>例如，如果视口的宽度为1000px，高度为800px，那么1vmax就等于10px（即1000px的0.1）</p><ul><li>%</li></ul><p>百分比，相对于父元素</p><ul><li>ch</li></ul><p>相对长度单位。一般是 1ch = 1个0 = 一个英文字母</p><h2 id="css-像素" tabindex="-1">CSS 像素 <a class="header-anchor" href="#css-像素" aria-label="Permalink to &quot;CSS 像素&quot;">​</a></h2><p><strong>CSS像素</strong>可称为<strong>逻辑像素</strong>(logical pixel)，也可以称为<strong>设备独立像素</strong>cc(dip: device independent pixel)。</p><p>设备像素也叫物理像素，设备分辨率描述的就是这个显示器的宽和高分别是多少个设备像素。</p><p>物理像素 = 逻辑像素 * dpr（dpr跟设备有关）</p><table tabindex="0"><thead><tr><th>逻辑分辨率 Point</th><th>缩放因子</th><th>设备分辨率 Pixel</th></tr></thead><tbody><tr><td>320*480</td><td>@1x</td><td>320*480</td></tr><tr><td>320*480</td><td>@2x</td><td>640*960</td></tr></tbody></table><h2 id="设备像素比dpr" tabindex="-1">设备像素比dpr <a class="header-anchor" href="#设备像素比dpr" aria-label="Permalink to &quot;设备像素比dpr&quot;">​</a></h2><p><strong>dpr</strong>: device pixel ratio</p><p>dpr = 同一方向上的物理像素 / CSS像素 (缩放比是1的情况)，同一方向就是指的横向比或者纵向比。</p><p><img src="'+n+`" alt="alt text"></p><p>我们以一个方向为例，比如横向</p><p>标清屏：dpr = 2 / 2 = 1</p><p>高清屏：dpr = 4 / 2 = 2</p><p>dpr = 2 表示1个css像素用 2 * 2 个设备像素来绘制</p><p><strong>dpr=1的就是标清屏，dpr&gt;1的就是高清屏</strong></p><p>dpr越大，1 CSS像素表示的物理像素点越多，显示越清晰。</p><h2 id="dpr使用" tabindex="-1">dpr使用 <a class="header-anchor" href="#dpr使用" aria-label="Permalink to &quot;dpr使用&quot;">​</a></h2><ul><li>js获取</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.devicePixelRatio</span></span></code></pre></div><ul><li>媒体查询</li></ul><p>在 dpr=2 的屏幕上展示两倍图 (@2x)，在 dpr=3 的屏幕上展示三倍图 (@3x)。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.avatar {</span></span>
<span class="line"><span>    background-image: url(&#39;~@/assets/image/img.png&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@media only screen and(-webkit-min-device-pixel-ratio:2){</span></span>
<span class="line"><span>    .avatar {</span></span>
<span class="line"><span>        background-image: url(&#39;~@/assets/image/img@2x.png&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>@media only screen and(-webkit-min-device-pixel-ratio:3){</span></span>
<span class="line"><span>    .avatar {</span></span>
<span class="line"><span>        background-image: url(&#39;~@/assets/image/img@3x.png&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>srcset</li></ul><p>img标签的srcset属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;/assets/image/img.png&quot; srcset=&quot;/assets/image/img@2x.png 2x, /assets/image/img@3x.png 3x&quot; /&gt;</span></span></code></pre></div>`,51),l=[i];function r(d,c,o,h,u,g){return p(),s("div",null,l)}const b=a(t,[["render",r]]);export{x as __pageData,b as default};
