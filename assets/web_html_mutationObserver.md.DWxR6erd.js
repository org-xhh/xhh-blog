import{_ as s,c as n,o as a,a3 as e}from"./chunks/framework.C5U8cnJv.js";const v=JSON.parse('{"title":"MutationObserver","description":"","frontmatter":{},"headers":[],"relativePath":"web/html/mutationObserver.md","filePath":"web/html/mutationObserver.md","lastUpdated":null}'),t={name:"web/html/mutationObserver.md"},p=e(`<h1 id="mutationobserver" tabindex="-1">MutationObserver <a class="header-anchor" href="#mutationobserver" aria-label="Permalink to &quot;MutationObserver&quot;">​</a></h1><p>MutationObserver 是一个可以监听 DOM 结构变化的接口。当 DOM 对象树发生变动时，MutationObserver 会得到通知。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 需要观察的节点</span></span>
<span class="line"><span>let targetNode = document.getElementById(&#39;root&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// observer配置项</span></span>
<span class="line"><span>let config = { attributes: true, childList: true, subtree: true }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 节点发生变化时需要执行的函数</span></span>
<span class="line"><span>let callback = function(mutationsList, observer) {</span></span>
<span class="line"><span>  for (let mutation of mutationsList) {</span></span>
<span class="line"><span>    if (mutation.type === &#39;childList&#39;) {</span></span>
<span class="line"><span>      console.log(&#39;子节点新增或删除&#39;)</span></span>
<span class="line"><span>    } else if (mutation.type === &#39;attributes&#39;) {</span></span>
<span class="line"><span>      console.log(mutation.attributeName + &#39;节点属性值变化&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建 observer</span></span>
<span class="line"><span>let observer = new MutationObserver(callback)</span></span>
<span class="line"><span>observer.observe(targetNode, config)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 停止 observer</span></span>
<span class="line"><span>// observer.disconnect()</span></span></code></pre></div>`,3),l=[p];function i(o,r,c,u,b,d){return a(),n("div",null,l)}const _=s(t,[["render",i]]);export{v as __pageData,_ as default};
