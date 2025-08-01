import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const g=JSON.parse('{"title":"javascript循环方法","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/javascript循环方法.md","filePath":"web/js/javascript循环方法.md"}'),p={name:"web/js/javascript循环方法.md"},l=e(`<h1 id="javascript循环方法" tabindex="-1">javascript循环方法 <a class="header-anchor" href="#javascript循环方法" aria-label="Permalink to &quot;javascript循环方法&quot;">​</a></h1><h2 id="foreach" tabindex="-1">forEach() <a class="header-anchor" href="#foreach" aria-label="Permalink to &quot;forEach()&quot;">​</a></h2><ul><li><p>处理引用类型的数组，forEach会改变原数组</p></li><li><p>不能使用break，continue</p></li><li><p>throw new Error(&#39;跳出 forEach 循环&#39;)</p></li><li><p>return 语句会终止本次迭代，但循环会继续执行</p></li><li><p>同步迭代器，循环内部写 await 也不会等待其执行</p></li></ul><h2 id="map" tabindex="-1">map() <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map()&quot;">​</a></h2><ul><li><p>支持链式调用</p></li><li><p>处理引用类型的数组，map会改变原数组</p></li><li><p>不能使用break，continue</p></li><li><p>return 返回值</p></li></ul><h2 id="for" tabindex="-1">for <a class="header-anchor" href="#for" aria-label="Permalink to &quot;for&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for (let i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>  console.log(i);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>break：退出整个循环；</p><p>return：在函数中使用，退出函数并终止循环；</p><p>continue：跳过当前循环，继续下一次循环</p><h2 id="for-in" tabindex="-1">for...in <a class="header-anchor" href="#for-in" aria-label="Permalink to &quot;for...in&quot;">​</a></h2><p>遍历<strong>对象</strong>的可枚举属性，迭代顺序是不确定的；</p><p>循环遍历对象时，会遍历对象的原型链，并且会包含从原型链继承的属性，可以使用 hasOwnProperty 方法来检查属性是否为对象自身的属性</p><p>可以与 break、continue 配合使用</p><h2 id="for-of" tabindex="-1">for...of <a class="header-anchor" href="#for-of" aria-label="Permalink to &quot;for...of&quot;">​</a></h2><p>用来遍历 <strong>数组、类数组对象、字符串、Map、Set 以及 Generator 对象</strong>，不能用于普通对象(普通对象默认没有Iterator接口)，迭代顺序是确定的；</p><p>可以与 break、continue 配合使用。</p><p>部署了 Symbol.iterator 属性的数据结构，就具有 iterator 接口，可以用 for...of 循环遍历成员。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>判断某个对象是否可迭代：</span></span>
<span class="line"><span>const isIterable = obj =&gt; obj != null &amp;&amp; typeof obj[Symbol.iterator] === &#39;function&#39;</span></span></code></pre></div><p>给普通对象部署遍历器生成方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  a: 11,</span></span>
<span class="line"><span>  b: 22,</span></span>
<span class="line"><span>  c: 33,</span></span>
<span class="line"><span>  [Symbol.iterator]: function () {</span></span>
<span class="line"><span>    let index = 0</span></span>
<span class="line"><span>    let keys = Object.keys(obj) // a b c</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      next: () =&gt; {</span></span>
<span class="line"><span>        if (index &lt; keys.length) {</span></span>
<span class="line"><span>          const key = keys[index++]</span></span>
<span class="line"><span>          return {value: this[key], done: false}</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          return {value: undefined, done: true}</span></span>
<span class="line"><span>        }   </span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>for (value of obj) {</span></span>
<span class="line"><span>  console.log(value) // 11 22 33</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="while" tabindex="-1">while <a class="header-anchor" href="#while" aria-label="Permalink to &quot;while&quot;">​</a></h2><p>在条件为真时执行循环</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let i = 0;</span></span>
<span class="line"><span>while (i &lt; 10) {</span></span>
<span class="line"><span>    console.log(i);</span></span>
<span class="line"><span>    i++;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="do-while" tabindex="-1">do...while <a class="header-anchor" href="#do-while" aria-label="Permalink to &quot;do...while&quot;">​</a></h2><p>至少执行一次，然后在条件为真时继续循环</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let i = 0;</span></span>
<span class="line"><span>do {</span></span>
<span class="line"><span>    console.log(i);</span></span>
<span class="line"><span>    i++;</span></span>
<span class="line"><span>} while (i &lt; 10);</span></span></code></pre></div><h2 id="filter" tabindex="-1">filter() <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;filter()&quot;">​</a></h2><p>返回一个新数组，其包含通过所提供函数实现的测试的所有元素</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const evenNumbers = [1, 2, 3, 4, 5].filter(num =&gt; num % 2 === 0);</span></span>
<span class="line"><span>console.log(evenNumbers); // [2, 4]</span></span></code></pre></div><p>循环中途是无法停止的，总是会将所有成员遍历完</p><h2 id="reduce" tabindex="-1">reduce() <a class="header-anchor" href="#reduce" aria-label="Permalink to &quot;reduce()&quot;">​</a></h2><p>对数组中的所有元素调用callback函数，并将它们累加成一个值（从左到右）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const sum = [1, 2, 3, 4, 5].reduce((total, num) =&gt; total + num, 0);</span></span>
<span class="line"><span>console.log(sum); // 15</span></span></code></pre></div><h2 id="reduceright" tabindex="-1">reduceRight() <a class="header-anchor" href="#reduceright" aria-label="Permalink to &quot;reduceRight()&quot;">​</a></h2><p>从右到左</p><h2 id="some" tabindex="-1">some() <a class="header-anchor" href="#some" aria-label="Permalink to &quot;some()&quot;">​</a></h2><p>只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>arr.some(function (elem, index, arr) {</span></span>
<span class="line"><span>  return elem &gt;= 3;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>// true</span></span></code></pre></div><h2 id="every" tabindex="-1">every() <a class="header-anchor" href="#every" aria-label="Permalink to &quot;every()&quot;">​</a></h2><p>所有成员的返回值都是true，整个every方法才返回true，否则返回false</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let arr = [1, 2, 3, 4, 5];</span></span>
<span class="line"><span>arr.every(function (elem, index, arr) {</span></span>
<span class="line"><span>  return elem &gt;= 3;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>// false</span></span></code></pre></div><h2 id="object-keys" tabindex="-1">Object.keys() <a class="header-anchor" href="#object-keys" aria-label="Permalink to &quot;Object.keys()&quot;">​</a></h2><p>遍历对象的属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  value1: 123,</span></span>
<span class="line"><span>  value2: 456</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>Object.keys(obj) // [&#39;value1&#39;, &#39;value2&#39;]</span></span></code></pre></div><p>只返回可枚举的属性</p><h2 id="object-getownpropertynames" tabindex="-1">Object.getOwnPropertyNames() <a class="header-anchor" href="#object-getownpropertynames" aria-label="Permalink to &quot;Object.getOwnPropertyNames()&quot;">​</a></h2><p>遍历对象的属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a = [&#39;Hello&#39;, &#39;World&#39;];</span></span>
<span class="line"><span>Object.keys(a) // [&#39;0&#39;, &#39;1&#39;]</span></span>
<span class="line"><span>Object.getOwnPropertyNames(a) // [&#39;0&#39;, &#39;1&#39;, &#39;length&#39;]</span></span></code></pre></div><p>能返回不可枚举的属性</p><h2 id="object-values" tabindex="-1">Object.values() <a class="header-anchor" href="#object-values" aria-label="Permalink to &quot;Object.values()&quot;">​</a></h2><p>遍历对象的属性值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  value1: 123,</span></span>
<span class="line"><span>  value2: 456</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>Object.values(obj) // [123, 456]</span></span></code></pre></div><h2 id="object-entries" tabindex="-1">Object.entries() <a class="header-anchor" href="#object-entries" aria-label="Permalink to &quot;Object.entries()&quot;">​</a></h2><p>遍历对象的键值对</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>  value1: 123,</span></span>
<span class="line"><span>  value2: 456</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>Object.entries(obj) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &quot;value1&quot;,</span></span>
<span class="line"><span>        123</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        &quot;value2&quot;,</span></span>
<span class="line"><span>        456</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,56),i=[l];function t(o,c,r,h,d,u){return n(),s("div",null,i)}const v=a(p,[["render",t]]);export{g as __pageData,v as default};
