import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/html/图片.md","filePath":"web/html/图片.md"}'),t={name:"web/html/图片.md"},p=e(`<h2 id="图片加载模式" tabindex="-1">图片加载模式 <a class="header-anchor" href="#图片加载模式" aria-label="Permalink to &quot;图片加载模式&quot;">​</a></h2><table tabindex="0"><thead><tr><th>对比</th><th>no-cors 模式（默认，不设置 <code>crossorigin</code>）</th><th>cors 模式（<code>crossOrigin=&quot;anonymous&quot;</code>）</th><th>cors 模式（<code>crossOrigin=&quot;use-credentials&quot;</code>）</th></tr></thead><tbody><tr><td>触发方式</td><td><code>&lt;img&gt;</code> 标签不加属性、CSS <code>background-image</code></td><td><code>new Image()</code> / <code>&lt;img crossorigin=&quot;anonymous&quot;&gt;</code></td><td><code>new Image()</code> / <code>&lt;img crossorigin=&quot;use-credentials&quot;&gt;</code></td></tr><tr><td>请求行为</td><td>不携带 Origin，浏览器不校验 CORS 头</td><td>请求携带 Origin，<strong>不带 Cookie/认证凭据</strong>；强制校验服务端 CORS 响应头</td><td>请求携带 Origin，<strong>带上 Cookie、Authorization 等凭据</strong>；强制校验服务端 CORS 响应头</td></tr><tr><td>能否正常在页面渲染图片</td><td>✅ 可以</td><td>✅ 服务端返回合法 CORS 头才可以；否则直接加载失败</td><td>✅ 服务端必须配置 <code>Access-Control-Allow-Credentials: true</code>，且 <code>Access-Control-Allow-Origin</code> 不能为 <code>*</code>，必须写明确源，否则加载失败</td></tr><tr><td>绘制到 Canvas 后，能否调用<br> <code>toDataURL</code>等</td><td>❌ 画布标记为 tainted（污染），禁止读取像素和导出(drawImage 本身可以正常渲染)</td><td>✅ 校验通过后画布干净，可以读取像素、导出图片</td><td>✅ 校验通过后画布干净，可以读取像素、导出图片</td></tr><tr><td>浏览器缓存标记</td><td>opaque（不透明响应）</td><td>CORS 合法响应</td><td>CORS 凭据模式响应</td></tr><tr><td>缓存复用规则</td><td>opaque 缓存条目<strong>不能给 cors 模式请求复用</strong>（核心坑）</td><td>同是 cors anonymous 模式可以正常复用缓存</td><td>凭据模式缓存独立，不和 anonymous / no-cors 缓存互通</td></tr><tr><td>适用场景</td><td>单纯页面展示图片，不需要 canvas 读取像素</td><td>Canvas 合成、海报生成、读取图片像素、导出图片（绝大多数图片业务首选）</td><td>图片资源需要身份凭据（Cookie、登录态）才能访问；内网鉴权图片，极少用于公开OSS图片</td></tr></tbody></table><blockquote><p>补充说明：</p><ol><li>no-cors 模式下，JS 依然可以读取图片宽高 <code>img.width / img.height</code> 这类元信息；安全限制仅针对<strong>像素数据提取（getImageData / toDataURL）</strong>。</li><li><code>use-credentials</code> 属于CORS模式，校验通过画布不会污染，但CORS配置约束更强，公开无鉴权图片场景优先使用 <code>anonymous</code>。</li><li>核心坑：同一个图片URL，不要混合多种加载模式，会触发Chrome opaque 缓存隔离问题。</li><li>关键区分：no-cors 模式：图片看得见，能绘制画布，只是不能导出、读像素；anonymous / use-credentials（CORS模式）：校验失败直接拦截，图片都看不见。</li><li>fetch <code>mode: &#39;no-cors&#39;</code> 重点：请求能发出去、状态200，但是响应body是不透明的，JS拿不到二进制，<strong>不能转base64</strong>，无法用来处理图片。</li></ol></blockquote><p>✅ <strong>不受限制（no-cors 也能读）：图片元信息</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const img = new Image();</span></span>
<span class="line"><span>img.src = &quot;跨域无CORS图片地址&quot;;</span></span>
<span class="line"><span>img.onload = () =&gt; {</span></span>
<span class="line"><span>  console.log(img.width, img.height); // 宽高，正常读取</span></span>
<span class="line"><span>  console.log(img.naturalWidth, img.naturalHeight); // 原图尺寸，正常读取</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>这些信息是图片解码后浏览器暴露在 <code>HTMLImageElement</code> 对象上的基础属性，<strong>不需要访问像素原始数据</strong>。</p><p>❌ <strong>受限制（no-cors 画布污染，直接报错）：像素提取操作</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ctx.drawImage(img, 0, 0);</span></span>
<span class="line"><span>ctx.getImageData(0,0,10,10); // 读取像素 RGBA → 报错</span></span>
<span class="line"><span>canvas.toDataURL(); // 导出画布为base64 → 报错</span></span>
<span class="line"><span>canvas.toBlob(()=&gt;{}); // 导出blob → 报错</span></span></code></pre></div><blockquote><p>原因：一旦跨域图片以 no-cors 模式绘制进 canvas，画布被打上 <code>tainted（污染）</code> 标记。浏览器禁止把画布的像素内容往外泄露，防止隐私 / 资源窃取。</p></blockquote><hr><h3 id="缓存机制" tabindex="-1">缓存机制 <a class="header-anchor" href="#缓存机制" aria-label="Permalink to &quot;缓存机制&quot;">​</a></h3><blockquote><p>Chrome 浏览器规则：<strong>no-cors 拿到的 opaque 缓存响应，不能给后续 cors 模式的同 URL 请求复用，哪怕这个响应本身携带 CORS 头</strong></p></blockquote><p>JS读取图片信息报错，复现顺序：</p><ol><li>页面先通过普通 img /css 背景图（no-cors）加载图片 → 生成 <code>opaque</code> 缓存条目</li><li>JS 使用 <code>new Image()+crossOrigin=&quot;anonymous&quot;</code> 请求同一个图片地址</li><li>浏览器命中旧的 opaque 缓存，拒绝复用，直接抛出 CORS 报错</li><li>F12 勾选【禁用缓存】：不走缓存，重新向 OSS/BOS 发起 CORS 请求，校验通过，代码正常</li></ol><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ol><li>✅ 方案 1：请求拼接时间戳（快速修复，适合 Canvas 一次性合成场景）</li></ol><p>给 Canvas 使用的图片 URL 增加随机参数，强制绕过缓存：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const img = new Image();</span></span>
<span class="line"><span>// img.crossOrigin 必须在设置 src 之前赋值</span></span>
<span class="line"><span>img.crossOrigin = &#39;anonymous&#39;;</span></span>
<span class="line"><span>const imgUrl = &#39;https://su.bcebos.com/test/xxx.png&#39;;</span></span>
<span class="line"><span>img.src = \`\${imgUrl}\${imgUrl.includes(&#39;?&#39;)?&#39;&amp;&#39;:&#39;?&#39;}_t=\${Date.now()}\`;</span></span></code></pre></div><ol start="2"><li>✅ 方案 2：全站统一图片加载模式（前提：页面不存在 CSS 背景图引用该图片）</li></ol><p>页面所有<code>&lt;img&gt;</code>标签，全部增加 <code>crossorigin=&quot;anonymous&quot;</code>，所有同 URL 请求全部走 cors 模式，缓存条目统一为 CORS 响应，不会冲突</p><blockquote><p>限制：CSS <code>background-image</code> <strong>无法设置 crossorigin</strong>，只要用到背景图，该方案失效</p></blockquote><ol start="3"><li>✅ 方案 3：同源</li></ol><p>图片变成同源资源，完全规避 CORS + 缓存隔离问题</p><ol start="4"><li>✅ 方案 4：后端提前转 Base64 返回（适合小图如二维码）</li></ol><p>后端拉取远程图片，转 base64 字符串返回前端，<code>data:image</code>格式无网络请求，不存在跨域、缓存问题；缺点是体积增大，不适合大图。</p><h2 id="图片预加载" tabindex="-1">图片预加载 <a class="header-anchor" href="#图片预加载" aria-label="Permalink to &quot;图片预加载&quot;">​</a></h2><p>图片预加载是指在页面加载时提前加载图片，使其缓存在浏览器中，当用户需要查看图片时立即显示，不需要等待加载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let image = new Image();</span></span>
<span class="line"><span>image.src = &#39;image.jpg&#39;;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;link rel=&quot;preload&quot; href=&quot;image.jpg&quot; as=&quot;image&quot;&gt;</span></span></code></pre></div><h2 id="图片懒加载" tabindex="-1">图片懒加载 <a class="header-anchor" href="#图片懒加载" aria-label="Permalink to &quot;图片懒加载&quot;">​</a></h2><p>延迟加载图片，用户滚动到页面上特定位置时才加载图片。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img data-src=&quot;https://xxx.jpg&quot;&gt;</span></span></code></pre></div><h3 id="getboundingclientrect" tabindex="-1">getBoundingClientRect <a class="header-anchor" href="#getboundingclientrect" aria-label="Permalink to &quot;getBoundingClientRect&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const debounceLazyLoad = debounce(imgLoadFn, 100)</span></span>
<span class="line"><span>window.addEventListener(&#39;scroll&#39;, debounceLazyLoad)</span></span>
<span class="line"><span>window.addEventListener(&#39;resize&#39;, debounceLazyLoad)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="intersectionobserver-推荐" tabindex="-1">IntersectionObserver (推荐) <a class="header-anchor" href="#intersectionobserver-推荐" aria-label="Permalink to &quot;IntersectionObserver (推荐)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function query(selector) {</span></span>
<span class="line"><span>  return Array.from(document.querySelectorAll(selector))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let observer = new IntersectionObserver(function(entries) {</span></span>
<span class="line"><span>  entries.forEach(function(entry) {</span></span>
<span class="line"><span>    // intersectionRatio 图片可见比例 0-1</span></span>
<span class="line"><span>    if (entry.isIntersecting) { // 在视口</span></span>
<span class="line"><span>      let img = entry.target</span></span>
<span class="line"><span>      if (img.dataset.src) {</span></span>
<span class="line"><span>        // dataset.src 就是 获取 &quot;data-src&quot; 属性值</span></span>
<span class="line"><span>        img.src = img.dataset.src</span></span>
<span class="line"><span>        img.removeAttribute(&#39;data-src&#39;)</span></span>
<span class="line"><span>        // 图片已加载， 解除观察</span></span>
<span class="line"><span>        observer.unobserve(img)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        observer.unobserve(img)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}, { threshold: [0] }) // 元素刚进入视口的一瞬间触发；</span></span>
<span class="line"><span>// rootMargin: &#39;50px 0px&#39;  提前50px触发</span></span>
<span class="line"><span></span></span>
<span class="line"><span>query(&#39;img&#39;).forEach(function(item) {</span></span>
<span class="line"><span>  // 观察每个图片对象</span></span>
<span class="line"><span>  observer.observe(item)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="第三方插件-vue-的-vue-lazyload" tabindex="-1">第三方插件 vue 的 vue-lazyload <a class="header-anchor" href="#第三方插件-vue-的-vue-lazyload" aria-label="Permalink to &quot;第三方插件 vue 的 vue-lazyload&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
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
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><p>vue3 用 vue-lazyload-next、vue3-lazyload</p><h3 id="loading-lazy" tabindex="-1">loading=&quot;lazy&quot; <a class="header-anchor" href="#loading-lazy" aria-label="Permalink to &quot;loading=&quot;lazy&quot;&quot;">​</a></h3><p>loading 是 &lt;img&gt; 和 &lt;iframe&gt;&gt; 标签的新属性，在 &lt;img&gt; 标签上添加 loading=&quot;lazy&quot;，浏览器就会在图片滚动到视口附近时才开始加载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;image.jpg&quot; loading=&quot;lazy&quot; width=&quot;350&quot; height=&quot;220&quot; alt=&quot;图片&quot; /&gt;</span></span></code></pre></div>`,42),o=[p];function i(l,c,d,r,g,u){return n(),a("div",null,o)}const b=s(t,[["render",i]]);export{m as __pageData,b as default};
