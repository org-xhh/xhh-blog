import{_ as n,c as a,o as s,a3 as p}from"./chunks/framework.C5U8cnJv.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/htmlcanvas2.md","filePath":"nodejs/htmlcanvas2.md"}'),e={name:"nodejs/htmlcanvas2.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const canvas = await html2canvas(node, {</span></span>
<span class="line"><span>    useCORS: true,         // 允许跨域图片</span></span>
<span class="line"><span>    allowTaint: true,      // 允许污染画布</span></span>
<span class="line"><span>    scale: 2,              // 提升清晰度，解决高分屏模糊问题</span></span>
<span class="line"><span>    backgroundColor: null, // 保持透明背景</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 忽略页面中的 script 和 iframe 标签，防止阻塞或异常</span></span>
<span class="line"><span>    ignoreElements: (element) =&gt; {</span></span>
<span class="line"><span>        const tag = element.tagName?.toUpperCase();</span></span>
<span class="line"><span>        return tag === &#39;SCRIPT&#39; || tag === &#39;IFRAME&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const dataUrl = canvas.toDataURL(&#39;image/png&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const link = document.createElement(&#39;a&#39;);</span></span>
<span class="line"><span>link.download = \`页面截图_\${Date.now()}.png\`;</span></span>
<span class="line"><span>link.href = dataUrl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.body.appendChild(link);</span></span>
<span class="line"><span>link.click();</span></span>
<span class="line"><span>document.body.removeChild(link);</span></span></code></pre></div>`,1),t=[l];function c(i,o,d,r,_,m){return s(),a("div",null,t)}const g=n(e,[["render",c]]);export{u as __pageData,g as default};
