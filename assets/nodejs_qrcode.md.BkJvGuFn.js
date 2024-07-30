import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const u=JSON.parse('{"title":"qrcodejs2 生成中间带logo的二维码","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/qrcode.md","filePath":"nodejs/qrcode.md"}'),e={name:"nodejs/qrcode.md"},l=p(`<h1 id="qrcodejs2-生成中间带logo的二维码" tabindex="-1">qrcodejs2 生成中间带logo的二维码 <a class="header-anchor" href="#qrcodejs2-生成中间带logo的二维码" aria-label="Permalink to &quot;qrcodejs2 生成中间带logo的二维码&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i qrcodejs2 --save-dev</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div ref=&quot;qrCodeUrl&quot; /&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
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
<span class="line"><span>    canvas.style.display = &#39;inline-block&#39;</span></span>
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
<span class="line"><span>    qrImg.src = canvas.toDataURL()</span></span>
<span class="line"><span>    qrImg.style.display = &#39;none&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4),t=[l];function o(i,c,r,d,g,h){return a(),n("div",null,t)}const _=s(e,[["render",o]]);export{u as __pageData,_ as default};
