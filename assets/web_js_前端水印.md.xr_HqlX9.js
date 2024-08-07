import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const m=JSON.parse('{"title":"前端水印","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/前端水印.md","filePath":"web/js/前端水印.md"}'),e={name:"web/js/前端水印.md"},l=p(`<h1 id="前端水印" tabindex="-1">前端水印 <a class="header-anchor" href="#前端水印" aria-label="Permalink to &quot;前端水印&quot;">​</a></h1><p>调用水印页面：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;Watermark text=&quot;版权所有&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;啊哈哈哈哈哈哈哈哈&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/Watermark&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import Watermark from &#39;@/components/Watermark.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>水印组件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;watermark-container&quot; ref=&quot;parentRef&quot;&gt;</span></span>
<span class="line"><span>    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, watchEffect, onMounted, onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import useWatermarkBg from &#39;../utils/useWatermarkBg&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const props = defineProps({</span></span>
<span class="line"><span>  text: {</span></span>
<span class="line"><span>    // 传入水印的文本</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    required: true,</span></span>
<span class="line"><span>    default: &#39;watermark&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  fontSize: {</span></span>
<span class="line"><span>    // 字体的大小</span></span>
<span class="line"><span>    type: Number,</span></span>
<span class="line"><span>    default: 40</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  gap: {</span></span>
<span class="line"><span>    // 水印重复的间隔</span></span>
<span class="line"><span>    type: Number,</span></span>
<span class="line"><span>    default: 20</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const bg = useWatermarkBg(props)</span></span>
<span class="line"><span>const parentRef = ref(null)</span></span>
<span class="line"><span>const flag = ref(0) // 声明一个依赖</span></span>
<span class="line"><span>let div</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  flag.value // 将依赖放在 watchEffect 里</span></span>
<span class="line"><span>  if (!parentRef.value) {</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (div) {</span></span>
<span class="line"><span>    div.remove()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const { base64, styleSize } = bg.value</span></span>
<span class="line"><span>  div = document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span>  div.style.backgroundImage = \`url(\${base64})\`</span></span>
<span class="line"><span>  div.style.backgroundSize = \`\${styleSize}px \${styleSize}px\`</span></span>
<span class="line"><span>  div.style.backgroundRepeat = &#39;repeat&#39;</span></span>
<span class="line"><span>  div.style.zIndex = 9999</span></span>
<span class="line"><span>  div.style.position = &#39;absolute&#39;</span></span>
<span class="line"><span>  div.style.inset = 0</span></span>
<span class="line"><span>  parentRef.value.appendChild(div)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>let ob</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  ob = new MutationObserver((records) =&gt; {</span></span>
<span class="line"><span>    for (const record of records) {</span></span>
<span class="line"><span>      for (const dom of record.removedNodes) {</span></span>
<span class="line"><span>        if (dom === div) {</span></span>
<span class="line"><span>          flag.value++ // 删除节点的时候更新依赖</span></span>
<span class="line"><span>          return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (record.target === div) {</span></span>
<span class="line"><span>        flag.value++ // 修改属性的时候更新依赖</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  ob.observe(parentRef.value, {</span></span>
<span class="line"><span>    childList: true,</span></span>
<span class="line"><span>    attributes: true,</span></span>
<span class="line"><span>    subtree: true</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onUnmounted(() =&gt; {</span></span>
<span class="line"><span>  ob &amp;&amp; ob.disconnect()</span></span>
<span class="line"><span>  div = null</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>useWatermarkBg.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { computed } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function useWatermarkBg(props) {</span></span>
<span class="line"><span>  return computed(() =&gt; {</span></span>
<span class="line"><span>    // 创建一个 canvas</span></span>
<span class="line"><span>    const canvas = document.createElement(&#39;canvas&#39;)</span></span>
<span class="line"><span>    const devicePixelRatio = window.devicePixelRatio || 1</span></span>
<span class="line"><span>    // 设置字体大小</span></span>
<span class="line"><span>    const fontSize = props.fontSize * devicePixelRatio</span></span>
<span class="line"><span>    const font = fontSize + &#39;px&#39;</span></span>
<span class="line"><span>    const ctx = canvas.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span>    // 获取文字宽度</span></span>
<span class="line"><span>    ctx.font = font</span></span>
<span class="line"><span>    const { width } = ctx.measureText(props.text)</span></span>
<span class="line"><span>    const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio</span></span>
<span class="line"><span>    canvas.width = canvasSize</span></span>
<span class="line"><span>    canvas.height = canvasSize</span></span>
<span class="line"><span>    ctx.translate(canvas.width / 2, canvas.height / 2)</span></span>
<span class="line"><span>    // 旋转 45 度让文字变倾斜</span></span>
<span class="line"><span>    ctx.rotate((Math.PI / 180) * -45)</span></span>
<span class="line"><span>    ctx.fillStyle = &#39;rgba(0, 0, 0, 0.3)&#39;</span></span>
<span class="line"><span>    ctx.font = font</span></span>
<span class="line"><span>    ctx.textAlign = &#39;center&#39;</span></span>
<span class="line"><span>    ctx.textBaseline = &#39;middle&#39;</span></span>
<span class="line"><span>    // 将文字画出来</span></span>
<span class="line"><span>    ctx.fillText(props.text, 0, 0)</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      base64: canvas.toDataURL(),</span></span>
<span class="line"><span>      size: canvasSize,</span></span>
<span class="line"><span>      styleSize: canvasSize / devicePixelRatio</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7),t=[l];function i(c,o,r,d,u,v){return a(),n("div",null,t)}const f=s(e,[["render",i]]);export{m as __pageData,f as default};
