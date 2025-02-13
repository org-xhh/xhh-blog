import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const b=JSON.parse('{"title":"大屏布局","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/大屏实现方案.md","filePath":"web/js/大屏实现方案.md"}'),e={name:"web/js/大屏实现方案.md"},l=p(`<h1 id="大屏布局" tabindex="-1">大屏布局 <a class="header-anchor" href="#大屏布局" aria-label="Permalink to &quot;大屏布局&quot;">​</a></h1><p>一、宽高保持 16:9，面板居中显示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div ref=&quot;commonPageRef&quot; style=&quot;height:100%;margin:0 auto&quot; :style=&quot;[{&#39;width&#39;: pageWidth + &#39;px&#39;}]&quot;&gt;</span></span>
<span class="line"><span>内容</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.pageSizeFn()</span></span>
<span class="line"><span>window.addEventListener(&#39;resize&#39;, () =&gt; {</span></span>
<span class="line"><span>    this.pageSizeFn()</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pageSizeFn() {</span></span>
<span class="line"><span>    if (this.$refs.commonPageRef) {</span></span>
<span class="line"><span>        this.pageWidth = this.$refs.commonPageRef.offsetHeight * 16 / 9</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        let heightVal = document.documentElement.clientHeight || window.innerHeight</span></span>
<span class="line"><span>        this.pageWidth = heightVal * 16 / 9</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>二、使用缩放 scale</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div v-bind:style=&quot;styleObject&quot; class=&quot;scale-ele&quot;&gt;</span></span>
<span class="line"><span>    内容</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>import debounce from &quot;lodash/debounce&quot;</span></span>
<span class="line"><span>import { computed, reactive } from &quot;vue&quot;</span></span>
<span class="line"><span>let sizeObj = reactive({</span></span>
<span class="line"><span>    width: 1920,</span></span>
<span class="line"><span>    height: 1080,</span></span>
<span class="line"><span>    scaleX: null,</span></span>
<span class="line"><span>    scaleY: null,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>    getScale()</span></span>
<span class="line"><span>    window.addEventListener(&quot;resize&quot;, setScale)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const getScale = () =&gt; {</span></span>
<span class="line"><span>    // 分别计算X轴和Y轴的缩放比例，撑满屏幕</span></span>
<span class="line"><span>    sizeObj.scaleX = window.innerWidth / sizeObj.width // 可以多加逻辑判断是否需要保持16:9</span></span>
<span class="line"><span>    sizeObj.scaleY = window.innerHeight / sizeObj.height</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const setScale = debounce(() =&gt; {</span></span>
<span class="line"><span>    getScale()</span></span>
<span class="line"><span>}, 500)</span></span>
<span class="line"><span>let styleObject = computed(() =&gt; {</span></span>
<span class="line"><span>    let obj = {</span></span>
<span class="line"><span>        transform: \`scale(\${sizeObj.scaleX},\${sizeObj.scaleY})\`,</span></span>
<span class="line"><span>        WebkitTransform: \`scale(\${sizeObj.scaleX},\${sizeObj.scaleY})\`,</span></span>
<span class="line"><span>        width: sizeObj.width + &quot;px&quot;,</span></span>
<span class="line"><span>        height: sizeObj.height + &quot;px&quot;,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    return obj</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>onUnmounted(() =&gt; {</span></span>
<span class="line"><span>    window.removeEventListener(&quot;resize&quot;, setScale)</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>.scale-ele {</span></span>
<span class="line"><span>    transform-origin: 0 0;</span></span>
<span class="line"><span>    transition: 0.3s;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5),i=[l];function t(c,o,d,r,h,u){return a(),n("div",null,i)}const m=s(e,[["render",t]]);export{b as __pageData,m as default};
