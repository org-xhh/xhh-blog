import{_ as n,c as s,o as a,a3 as p}from"./chunks/framework.DrOZDLiO.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/vue指令输入中文问题.md","filePath":"technology/vue/vue指令输入中文问题.md","lastUpdated":1719219088000}'),e={name:"technology/vue/vue指令输入中文问题.md"},l=p(`<h3 id="vue-指令" tabindex="-1">vue 指令 <a class="header-anchor" href="#vue-指令" aria-label="Permalink to &quot;vue 指令&quot;">​</a></h3><p>v-integer0number：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 只能输入0和整数</span></span>
<span class="line"><span>function integer0NumberFn(el) {</span></span>
<span class="line"><span>  let value = (el &amp;&amp; el.value) || &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 整数，非数字替换为空</span></span>
<span class="line"><span>  value = value.replace(/[^\\d]+/g, &#39;&#39;)</span></span>
<span class="line"><span>  // 可以输入0，01替换为1</span></span>
<span class="line"><span>  value = value.replace(/^(0(\\d+))/, &#39;$2&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  el.value = value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 触发v-model的更新</span></span>
<span class="line"><span>  el.dispatchEvent(new Event(&#39;input&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Vue.$forceUpdata() // 慎用，虽然也能解决输入中文后双向绑定失效问题</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Vue.directive(&#39;integer0number&#39;, {</span></span>
<span class="line"><span>  bind(el, binding, vnode) {</span></span>
<span class="line"><span>    let inputEl =</span></span>
<span class="line"><span>      (el.getElementsByClassName(&#39;el-input__inner&#39;) &amp;&amp;</span></span>
<span class="line"><span>        el.getElementsByClassName(&#39;el-input__inner&#39;)[0]) ||</span></span>
<span class="line"><span>      {}</span></span>
<span class="line"><span>    // 解决输入中文后，检验就发生错误 的问题</span></span>
<span class="line"><span>    inputEl.addEventListener(&#39;compositionstart&#39;, () =&gt; {</span></span>
<span class="line"><span>      vnode.locking = true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    inputEl.addEventListener(&#39;compositionend&#39;, () =&gt; {</span></span>
<span class="line"><span>      vnode.locking = false</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    inputEl.addEventListener(</span></span>
<span class="line"><span>      &#39;keyup&#39;,</span></span>
<span class="line"><span>      () =&gt; {</span></span>
<span class="line"><span>        if (vnode.locking) {</span></span>
<span class="line"><span>          return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        integer0NumberFn(inputEl)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      false</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,3),i=[l];function t(c,o,u,r,d,_){return a(),s("div",null,i)}const g=n(e,[["render",t]]);export{m as __pageData,g as default};
