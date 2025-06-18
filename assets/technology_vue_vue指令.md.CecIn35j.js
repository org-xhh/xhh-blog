import{_ as n,c as s,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const h=JSON.parse('{"title":"vue 指令","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/vue指令.md","filePath":"technology/vue/vue指令.md"}'),e={name:"technology/vue/vue指令.md"},l=p(`<h1 id="vue-指令" tabindex="-1">vue 指令 <a class="header-anchor" href="#vue-指令" aria-label="Permalink to &quot;vue 指令&quot;">​</a></h1><h3 id="只能输入0和整数-输入中文问题" tabindex="-1">只能输入0和整数(输入中文问题) <a class="header-anchor" href="#只能输入0和整数-输入中文问题" aria-label="Permalink to &quot;只能输入0和整数(输入中文问题)&quot;">​</a></h3><p>v-integer0number：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function integer0NumberFn(el) {</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><h3 id="输入金额保持两位小数" tabindex="-1">输入金额保持两位小数 <a class="header-anchor" href="#输入金额保持两位小数" aria-label="Permalink to &quot;输入金额保持两位小数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 2位小数</span></span>
<span class="line"><span>function twoDecimalfn(el) {</span></span>
<span class="line"><span>  let value = (el &amp;&amp; el.value) || &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  value = value.replace(/[^\\d.]/g, &#39;&#39;)</span></span>
<span class="line"><span>  value = value.replace(/\\.{2,}/g, &#39;.&#39;)</span></span>
<span class="line"><span>  value = value.replace(/^\\./g, &#39;0.&#39;)</span></span>
<span class="line"><span>  value = value.replace(/^\\d*\\.\\d*\\./g, value.substring(0, value.length - 1))</span></span>
<span class="line"><span>  value = value.replace(/^0[^\\.]+/g, &#39;0&#39;)</span></span>
<span class="line"><span>  value = value.replace(/^(\\d+)\\.(\\d\\d).*$/, &#39;$1.$2&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  el.value = value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 触发v-model的更新</span></span>
<span class="line"><span>  el.dispatchEvent(new Event(&#39;input&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Vue.$forceUpdata() // 慎用，虽然也能解决输入中文后双向绑定失效问题</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Vue.directive(&#39;twodecimal&#39;, {</span></span>
<span class="line"><span>  bind(el, binding, vnode) {</span></span>
<span class="line"><span>    let inputEl =</span></span>
<span class="line"><span>      (el.getElementsByClassName(&#39;el-input__inner&#39;) &amp;&amp;</span></span>
<span class="line"><span>        el.getElementsByClassName(&#39;el-input__inner&#39;)[0]) ||</span></span>
<span class="line"><span>      {}</span></span>
<span class="line"><span>    // 解决中文输入双向绑定失效问题</span></span>
<span class="line"><span>    inputEl.addEventListener(&#39;compositionstart&#39;, () =&gt; {</span></span>
<span class="line"><span>      vnode.locking = true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    inputEl.addEventListener(&#39;compositionend&#39;, () =&gt; {</span></span>
<span class="line"><span>      vnode.locking = false</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    inputEl.addEventListener(</span></span>
<span class="line"><span>      &#39;keyup&#39;,</span></span>
<span class="line"><span>      () =&gt; {</span></span>
<span class="line"><span>        if (vnode.locking) {</span></span>
<span class="line"><span>          return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        twoDecimalfn(inputEl)</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      false</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="输入金额显示千分位" tabindex="-1">输入金额显示千分位 <a class="header-anchor" href="#输入金额显示千分位" aria-label="Permalink to &quot;输入金额显示千分位&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vue.directive(&#39;inputThousands&#39;, {</span></span>
<span class="line"><span>  inserted(el, binding) {</span></span>
<span class="line"><span>    const input = el.querySelector(&#39;input&#39;) || el</span></span>
<span class="line"><span>    input.addEventListener(&#39;input&#39;, formatThousand)</span></span>
<span class="line"><span>    input.addEventListener(&#39;blur&#39;, formatThousand)</span></span>
<span class="line"><span>    input.addEventListener(&#39;focus&#39;, removeFormat)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function formatThousand(e) {</span></span>
<span class="line"><span>      let value = e.target.value.replace(/,/g, &#39;&#39;)</span></span>
<span class="line"><span>      if (!value) return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 输入框显示保留两位小数（但是v-model绑定的value没被限制）</span></span>
<span class="line"><span>      if (value.indexOf(&#39;.&#39;) &gt; -1) {</span></span>
<span class="line"><span>        const arr = value.split(&#39;.&#39;)</span></span>
<span class="line"><span>        value = arr[0] + &#39;.&#39; + arr[1].substring(0, 2)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 千分位格式化</span></span>
<span class="line"><span>      const parts = value.toString().split(&#39;.&#39;)</span></span>
<span class="line"><span>      parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, &#39;,&#39;)</span></span>
<span class="line"><span>      e.target.value = parts.join(&#39;.&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function removeFormat(e) {</span></span>
<span class="line"><span>      e.target.value = e.target.value.replace(/,/g, &#39;&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;el-input v-twodecimal v-inputThousands ...</span></span></code></pre></div>`,8),i=[l];function t(c,u,o,r,d,v){return a(),s("div",null,i)}const m=n(e,[["render",t]]);export{h as __pageData,m as default};
