import{_ as a,c as s,o as e,a3 as n}from"./chunks/framework.DrOZDLiO.js";const g=JSON.parse('{"title":"javascript循环方法","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/javascript循环方法.md","filePath":"web/js/javascript循环方法.md","lastUpdated":1718789027000}'),p={name:"web/js/javascript循环方法.md"},l=n(`<h1 id="javascript循环方法" tabindex="-1">javascript循环方法 <a class="header-anchor" href="#javascript循环方法" aria-label="Permalink to &quot;javascript循环方法&quot;">​</a></h1><h2 id="foreach" tabindex="-1">forEach() <a class="header-anchor" href="#foreach" aria-label="Permalink to &quot;forEach()&quot;">​</a></h2><ul><li><p>通常用于数组的迭代</p></li><li><p>处理引用类型的数组，forEach会改变原数组</p></li><li><p>不能使用break，continue，循环中途是无法停止的，总是会将所有成员遍历完</p></li></ul><h2 id="map" tabindex="-1">map() <a class="header-anchor" href="#map" aria-label="Permalink to &quot;map()&quot;">​</a></h2><ul><li><p>返回一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果</p></li><li><p>支持链式调用</p></li><li><p>处理引用类型的数组，map会改变原数组</p></li><li><p>不能使用break，continue，循环中途是无法停止的，总是会将所有成员遍历完</p></li></ul><h2 id="for" tabindex="-1">for <a class="header-anchor" href="#for" aria-label="Permalink to &quot;for&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for (let i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>    console.log(i);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="for-in" tabindex="-1">for...in <a class="header-anchor" href="#for-in" aria-label="Permalink to &quot;for...in&quot;">​</a></h2><p>遍历<strong>对象</strong>的可枚举属性，迭代顺序是不确定的；</p><p>循环遍历对象时，会遍历对象的原型链，并且会包含从原型链继承的属性，可以使用 hasOwnProperty 方法来检查属性是否为对象自身的属性</p><p>可以与 break、continue 配合使用</p><h2 id="for-of" tabindex="-1">for...of <a class="header-anchor" href="#for-of" aria-label="Permalink to &quot;for...of&quot;">​</a></h2><p>用来遍历 数组、类数组对象、字符串、Map、Set 以及 Generator 对象，不能用于对象，迭代顺序是确定的；</p><p>可以与 break、continue 配合使用</p><h2 id="while" tabindex="-1">while <a class="header-anchor" href="#while" aria-label="Permalink to &quot;while&quot;">​</a></h2><p>在条件为真时执行循环</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let i = 0;</span></span>
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
<span class="line"><span>Object.values(obj) // [123, 456]</span></span></code></pre></div>`,46),t=[l];function i(o,c,r,h,d,u){return e(),s("div",null,t)}const v=a(p,[["render",i]]);export{g as __pageData,v as default};
