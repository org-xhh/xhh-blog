import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-14.BoS3fAT8.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/qrcode.md","filePath":"nodejs/qrcode.md"}'),l={name:"nodejs/qrcode.md"},t=p(`<h2 id="qrcodejs2-生成中间带logo的二维码" tabindex="-1"><a href="https://www.npmjs.com/package/qrcodejs2" target="_blank" rel="noreferrer">qrcodejs2</a> 生成中间带logo的二维码 <a class="header-anchor" href="#qrcodejs2-生成中间带logo的二维码" aria-label="Permalink to &quot;[qrcodejs2](https://www.npmjs.com/package/qrcodejs2) 生成中间带logo的二维码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i qrcodejs2 --save-dev</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div ref=&quot;qrCodeUrl&quot; /&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * @description 生成二维码</span></span>
<span class="line"><span> * @param {string} url 链接</span></span>
<span class="line"><span> * @param {number} w 二维码宽度</span></span>
<span class="line"><span> * @param {number} h 二维码高度</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>createQrcode(url, w = 80, h = 80) {</span></span>
<span class="line"><span>  let container = this.$refs.qrCodeUrl</span></span>
<span class="line"><span>  container.innerHTML = &#39;&#39;</span></span>
<span class="line"><span>  this.qrcode = new QRCode(container, {</span></span>
<span class="line"><span>    text: url,</span></span>
<span class="line"><span>    width: w, // 二维码宽度</span></span>
<span class="line"><span>    height: h, // 二维码高度</span></span>
<span class="line"><span>    colorDark: &#39;#000&#39;,</span></span>
<span class="line"><span>    colorLight: &#39;#fff&#39;,</span></span>
<span class="line"><span>    correctLevel: QRCode.CorrectLevel.H</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 二维码中间logo图片</span></span>
<span class="line"><span>  let logo = new Image()</span></span>
<span class="line"><span>  logo.crossOrigin = &#39;Anonymous&#39;</span></span>
<span class="line"><span>  logo.src = require(&#39;@/assets/common/code_logo.png&#39;)</span></span>
<span class="line"><span>  logo.onload = () =&gt; {</span></span>
<span class="line"><span>    let qrImg = this.qrcode._el.getElementsByTagName(&#39;img&#39;)[0]</span></span>
<span class="line"><span>    let canvas = this.qrcode._el.getElementsByTagName(&#39;canvas&#39;)[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    canvas.style.display = &#39;inline-block&#39;</span></span>
<span class="line"><span>    // canvas.style.display = &#39;none&#39; // 这个隐藏，显示图片浏览器可识别保存</span></span>
<span class="line"><span>    let ctx = canvas.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // logo白色背景</span></span>
<span class="line"><span>    let rectScale = 0.26</span></span>
<span class="line"><span>    let rectWidth = w * rectScale</span></span>
<span class="line"><span>    let rectHeight = rectWidth</span></span>
<span class="line"><span>    let rectPosition = (w - rectWidth) / 2</span></span>
<span class="line"><span>    ctx.beginPath()</span></span>
<span class="line"><span>    ctx.fillStyle = &#39;#fff&#39;</span></span>
<span class="line"><span>    ctx.rect(rectPosition, rectPosition, rectWidth, rectHeight)</span></span>
<span class="line"><span>    ctx.fill()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let logoScale = 0.2</span></span>
<span class="line"><span>    let logoWidth = w * logoScale</span></span>
<span class="line"><span>    let logoHeight = logoWidth</span></span>
<span class="line"><span>    // 中间位置</span></span>
<span class="line"><span>    let logoPosition = (w - logoWidth) / 2</span></span>
<span class="line"><span>    ctx.drawImage(logo, logoPosition, logoPosition, logoWidth, logoHeight)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 二维码图片url地址</span></span>
<span class="line"><span>    qrImg.src = canvas.toDataURL() // canvas.toDataURL(&#39;image/png&#39;)</span></span>
<span class="line"><span>    qrImg.style.display = &#39;none&#39;</span></span>
<span class="line"><span>    // qrImg.style.display = &#39;block&#39; // 显示图片浏览器长按可识别保存</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="canvas-和-qrcode-1-生成带背景图和文字的二维码" tabindex="-1">canvas 和 qrcode@1 生成带背景图和文字的二维码 <a class="header-anchor" href="#canvas-和-qrcode-1-生成带背景图和文字的二维码" aria-label="Permalink to &quot;canvas 和 qrcode@1 生成带背景图和文字的二维码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;footer&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;footer-content&quot;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;footer&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;img :src=&quot;imgUrl&quot; alt=&quot;&quot; /&gt;</span></span>
<span class="line"><span>      &lt;canvas id=&quot;canvas&quot; width=&quot;150&quot; height=&quot;150&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/footer&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import QRCode from &#39;qrcode&#39;</span></span>
<span class="line"><span>import { ref, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let imgUrl = ref(&#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  generateQRCode()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>async function generateQRCode() {</span></span>
<span class="line"><span>  const canvas = document.getElementById(&#39;canvas&#39;)</span></span>
<span class="line"><span>  const context = canvas.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span>  // 清空画布</span></span>
<span class="line"><span>  context.clearRect(0, 0, canvas.width, canvas.height)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const image = new Image()</span></span>
<span class="line"><span>  image.src = new URL(&#39;../assets/images/imgs/img(5).jpg&#39;, import.meta.url).href</span></span>
<span class="line"><span>  image.crossOrigin = &#39;Anonymous&#39;</span></span>
<span class="line"><span>  // 等待图片加载完成</span></span>
<span class="line"><span>  await new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>    image.onload = resolve</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  // 绘制图片</span></span>
<span class="line"><span>  context.drawImage(image, 0, 0, canvas.width, canvas.height)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 生成二维码</span></span>
<span class="line"><span>  const qrUrl = &#39;https://org-xhh.github.io/xhh-blog/&#39;</span></span>
<span class="line"><span>  const qrCodeDataUrl = await QRCode.toDataURL(qrUrl)</span></span>
<span class="line"><span>  const qrCodeImage = new Image()</span></span>
<span class="line"><span>  qrCodeImage.src = qrCodeDataUrl</span></span>
<span class="line"><span>  // 等待二维码图片加载完成</span></span>
<span class="line"><span>  await new Promise((resolve) =&gt; {</span></span>
<span class="line"><span>    qrCodeImage.onload = resolve</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  // 绘制二维码图片 x,y,w,h</span></span>
<span class="line"><span>  context.drawImage(qrCodeImage, 35, 50, 80, 80)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 绘制文字</span></span>
<span class="line"><span>  context.fillStyle = &#39;red&#39;</span></span>
<span class="line"><span>  context.font = &#39;16px Arial&#39;</span></span>
<span class="line"><span>  let txt = &#39;welcome&#39;</span></span>
<span class="line"><span>  // 让文字居中</span></span>
<span class="line"><span>  let txtLeftDis = (150 - context.measureText(txt).width) / 2</span></span>
<span class="line"><span>  context.fillText(txt, txtLeftDis, 25)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // canvas生成img图片，手机端可以长按保存</span></span>
<span class="line"><span>  imgUrl.value = canvas.toDataURL()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;less&quot;&gt;</span></span>
<span class="line"><span>.footer-content {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#canvas {</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 50px;</span></span>
<span class="line"><span>  right: 150px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><p><img src="`+e+'" alt="alt text"></p>',7),i=[t];function c(o,r,g,d,h,m){return a(),n("div",null,i)}const q=s(l,[["render",c]]);export{v as __pageData,q as default};
