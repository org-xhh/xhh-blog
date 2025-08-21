import{_ as a,c as n,o as s,a3 as e}from"./chunks/framework.C5U8cnJv.js";const h=JSON.parse('{"title":"Image 加载优化","description":"","frontmatter":{},"headers":[],"relativePath":"web/html/图片预加载和懒加载.md","filePath":"web/html/图片预加载和懒加载.md"}'),p={name:"web/html/图片预加载和懒加载.md"},t=e(`<h1 id="image-加载优化" tabindex="-1">Image 加载优化 <a class="header-anchor" href="#image-加载优化" aria-label="Permalink to &quot;Image 加载优化&quot;">​</a></h1><h2 id="图片预加载" tabindex="-1">图片预加载 <a class="header-anchor" href="#图片预加载" aria-label="Permalink to &quot;图片预加载&quot;">​</a></h2><p>图片预加载是指在页面加载时提前加载图片，使其缓存在浏览器中，当用户需要查看图片时立即显示，不需要等待加载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let image = new Image();</span></span>
<span class="line"><span>image.src = &#39;image.jpg&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.image {</span></span>
<span class="line"><span>  background-image: url(&#39;image.jpg&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;link rel=&quot;preload&quot; href=&quot;image.jpg&quot; as=&quot;image&quot;&gt;</span></span></code></pre></div><h2 id="图片懒加载" tabindex="-1">图片懒加载 <a class="header-anchor" href="#图片懒加载" aria-label="Permalink to &quot;图片懒加载&quot;">​</a></h2><p>延迟加载图片，用户滚动到页面上特定位置时才加载图片。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img data-src=&quot;https://xxx.jpg&quot;&gt;</span></span></code></pre></div><h3 id="getboundingclientrect" tabindex="-1">getBoundingClientRect <a class="header-anchor" href="#getboundingclientrect" aria-label="Permalink to &quot;getBoundingClientRect&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.addEventListener(&#39;scroll&#39;, function() {</span></span>
<span class="line"><span>  this.imgLoadFn()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>imgLoadFn() {</span></span>
<span class="line"><span>  let that = this</span></span>
<span class="line"><span>  let imgGroups = document.getElementsByTagName(&#39;img&#39;)</span></span>
<span class="line"><span>  let imgGroupLen = imgGroups &amp;&amp; imgGroups.length</span></span>
<span class="line"><span>  // 最后一张图片还没加载出来，说明需要懒加载</span></span>
<span class="line"><span>  if (imgGroupLen &amp;&amp; imgGroups[imgGroupLen - 1].getAttribute(&#39;data-src&#39;)) {</span></span>
<span class="line"><span>    for (let i = 0; i &lt; imgGroups.length; i++) {</span></span>
<span class="line"><span>      let imgItem = imgGroups[i] || {}</span></span>
<span class="line"><span>      if (imgItem.getAttribute(&#39;data-src&#39;)) {</span></span>
<span class="line"><span>        that.loadImg(imgItem)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>loadImg(el) {</span></span>
<span class="line"><span>  // 获取窗口高度</span></span>
<span class="line"><span>  let docHeight = document.documentElement.clientHeight</span></span>
<span class="line"><span>  let boundingClientRect = el.getBoundingClientRect()</span></span>
<span class="line"><span>  let bottom = boundingClientRect.bottom</span></span>
<span class="line"><span>  let top = boundingClientRect.top</span></span>
<span class="line"><span>  /* 当元素进入窗口时，才加载真实图片</span></span>
<span class="line"><span>    bottom： 元素的下边到窗口上边的距离</span></span>
<span class="line"><span>    top： 元素的上边到窗口上边的距离</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>  if (top &lt; docHeight &amp;&amp; bottom &gt; 0) {</span></span>
<span class="line"><span>    el.src = el.dataset.src</span></span>
<span class="line"><span>    el.removeAttribute(&#39;data-src&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // top &gt;= docHeight || bottom &lt;= 0 // 不可见</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="intersectionobserver" tabindex="-1">IntersectionObserver <a class="header-anchor" href="#intersectionobserver" aria-label="Permalink to &quot;IntersectionObserver&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function query(selector) {</span></span>
<span class="line"><span>  return Array.from(document.querySelectorAll(selector))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let observer = new IntersectionObserver(function(entries) {</span></span>
<span class="line"><span>  entries.forEach(function(entry) {</span></span>
<span class="line"><span>    let target = entry.target</span></span>
<span class="line"><span>    console.log(entry.intersectionRatio, entry.isIntersecting)</span></span>
<span class="line"><span>    // 有时isIntersecting可见，intersectionRatio却为0，修复一下</span></span>
<span class="line"><span>    if ((entry.intersectionRatio &gt; 0 &amp;&amp; entry.intersectionRatio &lt;= 1) ||</span></span>
<span class="line"><span>    (entry.intersectionRatio === 0 &amp;&amp; entry.isIntersecting)) {</span></span>
<span class="line"><span>      if (target.dataset.src) {</span></span>
<span class="line"><span>        // dataset.src 就是 获取 &quot;data-src&quot; 属性值</span></span>
<span class="line"><span>        target.src = target.dataset.src</span></span>
<span class="line"><span>        target.removeAttribute(&#39;data-src&#39;)</span></span>
<span class="line"><span>        // 图片已加载， 解除观察</span></span>
<span class="line"><span>        observer.unobserve(target)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        observer.unobserve(target)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}, { threshold: [0] }) // 默认</span></span>
<span class="line"><span></span></span>
<span class="line"><span>query(&#39;img&#39;).forEach(function(item) {</span></span>
<span class="line"><span>  // 观察每个图片对象</span></span>
<span class="line"><span>  observer.observe(item)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="第三方插件-vue-lazyload" tabindex="-1">第三方插件 vue-lazyload <a class="header-anchor" href="#第三方插件-vue-lazyload" aria-label="Permalink to &quot;第三方插件 vue-lazyload&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import VueLazyload from &#39;vue-lazyload&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(VueLazyload, {</span></span>
<span class="line"><span>  preLoad: 1.3,</span></span>
<span class="line"><span>  error: &#39;dist/error.png&#39;,</span></span>
<span class="line"><span>  loading: &#39;dist/loading.gif&#39;,</span></span>
<span class="line"><span>  attempt: 3 // 默认，尝试加载次数</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div v-for=&quot;(item, index) in imgList&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>  &lt;img v-lazy=&quot;item&quot;&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="loading-lazy" tabindex="-1">loading=&quot;lazy&quot; <a class="header-anchor" href="#loading-lazy" aria-label="Permalink to &quot;loading=&quot;lazy&quot;&quot;">​</a></h3><p>loading 是 &lt;img&gt; 和 &lt;iframe&gt;&gt; 标签的新属性，在 &lt;img&gt; 标签上添加 loading=&quot;lazy&quot;，浏览器就会在图片滚动到视口附近时才开始加载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;image.jpg&quot; loading=&quot;lazy&quot; width=&quot;350&quot; height=&quot;220&quot; alt=&quot;图片&quot;&gt;</span></span></code></pre></div>`,16),l=[t];function i(o,c,r,d,g,u){return s(),n("div",null,l)}const b=a(p,[["render",i]]);export{h as __pageData,b as default};
