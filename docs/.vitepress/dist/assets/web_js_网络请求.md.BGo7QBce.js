import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const g=JSON.parse('{"title":"前端发送网络请求","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/网络请求.md","filePath":"web/js/网络请求.md"}'),e={name:"web/js/网络请求.md"},l=p(`<h1 id="前端发送网络请求" tabindex="-1">前端发送网络请求 <a class="header-anchor" href="#前端发送网络请求" aria-label="Permalink to &quot;前端发送网络请求&quot;">​</a></h1><h2 id="axios" tabindex="-1">axios <a class="header-anchor" href="#axios" aria-label="Permalink to &quot;axios&quot;">​</a></h2><h3 id="取消请求" tabindex="-1">取消请求 <a class="header-anchor" href="#取消请求" aria-label="Permalink to &quot;取消请求&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 第一种方式</span></span>
<span class="line"><span>const CancelToken = axios.CancelToken</span></span>
<span class="line"><span>const source = CancelToken.source()</span></span>
<span class="line"><span>axios.get(&#39;xxx&#39;, {</span></span>
<span class="line"><span> cancelToken: source.token</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 取消请求(请求原因可选)</span></span>
<span class="line"><span>source.cancel(&#39;主动取消请求&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第二种方式</span></span>
<span class="line"><span>const CancelToken = axios.CancelToken</span></span>
<span class="line"><span>let cancel</span></span>
<span class="line"><span>axios.get(&#39;xxxx&#39;, {</span></span>
<span class="line"><span>   cancelToken: new CancelToken(function executor(c) {</span></span>
<span class="line"><span>   cancel = c</span></span>
<span class="line"><span> })</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>cancel(&#39;取消接口避免重复调用&#39;)</span></span></code></pre></div><h2 id="fetch" tabindex="-1">fetch <a class="header-anchor" href="#fetch" aria-label="Permalink to &quot;fetch&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fetch(&#39;https://www.test.com/&#39;, {</span></span>
<span class="line"><span>  method: &#39;GET&#39;,</span></span>
<span class="line"><span>  headers: {</span></span>
<span class="line"><span>    &#39;Content-Type&#39;: &#39;application/json&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.then(response =&gt; {</span></span>
<span class="line"><span>  if (response.ok) {</span></span>
<span class="line"><span>    return response.json()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  throw new Error(&#39;Network response was not ok.&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.then(data =&gt; console.log(data))</span></span>
<span class="line"><span>.catch(error =&gt; console.error(error))</span></span></code></pre></div><h2 id="xhr" tabindex="-1">XHR <a class="header-anchor" href="#xhr" aria-label="Permalink to &quot;XHR&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 封装一个ajax请求</span></span>
<span class="line"><span>function ajax(options) {</span></span>
<span class="line"><span>  // 创建XMLHttpRequest对象</span></span>
<span class="line"><span>  const xhr = new XMLHttpRequest()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  options = options || {}</span></span>
<span class="line"><span>  options.type = (options.type || &#39;GET&#39;).toUpperCase()</span></span>
<span class="line"><span>  options.dataType = options.dataType || &#39;json&#39;</span></span>
<span class="line"><span>  const params = options.data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 发送请求</span></span>
<span class="line"><span>  if (options.type === &#39;GET&#39;) {</span></span>
<span class="line"><span>    xhr.open(&#39;GET&#39;, options.url + &#39;?&#39; + params, true)</span></span>
<span class="line"><span>    xhr.send(null)</span></span>
<span class="line"><span>  } else if (options.type === &#39;POST&#39;) {</span></span>
<span class="line"><span>    xhr.open(&#39;POST&#39;, options.url, true)</span></span>
<span class="line"><span>    xhr.send(params)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 接收请求</span></span>
<span class="line"><span>  xhr.onreadystatechange = function () {</span></span>
<span class="line"><span>    if (xhr.readyState === 4) {</span></span>
<span class="line"><span>      let status = xhr.status</span></span>
<span class="line"><span>      if (status &gt;= 200 &amp;&amp; status &lt; 300) {</span></span>
<span class="line"><span>        options.success &amp;&amp; options.success(xhr.responseText, xhr.responseXML)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        options.fail &amp;&amp; options.fail(status)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ajax({</span></span>
<span class="line"><span>  type: &#39;post&#39;,</span></span>
<span class="line"><span>  dataType: &#39;json&#39;,</span></span>
<span class="line"><span>  data: {},</span></span>
<span class="line"><span>  url: &#39;https://xxxx&#39;,</span></span>
<span class="line"><span>  success: function(text,xml) { </span></span>
<span class="line"><span>    console.log(text)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  fail: function(status) { </span></span>
<span class="line"><span>    console.log(status)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="promise" tabindex="-1">promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;promise&quot;">​</a></h2><p>Promise就是为了解决回调地狱而产生的，将回调函数的嵌套，改成链式调用。</p><ul><li><p>状态</p><p>pending 进行中</p><p>fulfilled 已完成</p><p>rejected 已失败</p></li><li><p>实例方法</p><p>then()</p><p>catch()</p><p>finally()</p></li><li><p>构造函数方法 Promise.all</p></li><li><p>构造函数方法 Promise.race</p></li></ul><h2 id="async-await" tabindex="-1">async/await <a class="header-anchor" href="#async-await" aria-label="Permalink to &quot;async/await&quot;">​</a></h2><p>async 使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const asyncReadFile = async function () {</span></span>
<span class="line"><span> const f1 = await readFile(&#39;/etc/file1&#39;);</span></span>
<span class="line"><span> const f2 = await readFile(&#39;/etc/file2&#39;);</span></span>
<span class="line"><span> console.log(f1.toString());</span></span>
<span class="line"><span> console.log(f2.toString());</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="generator" tabindex="-1">Generator <a class="header-anchor" href="#generator" aria-label="Permalink to &quot;Generator&quot;">​</a></h2><p>yield 表达式可以暂停函数执行，next方法用于恢复函数执行，这使得 Generator 函数非常适合将异步任务同步化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function* helloWorldGenerator() {</span></span>
<span class="line"><span> yield &#39;hello&#39;;</span></span>
<span class="line"><span> yield &#39;world&#39;;</span></span>
<span class="line"><span> return &#39;ending&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var hw = helloWorldGenerator()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hw.next()</span></span>
<span class="line"><span>// { value: &#39;hello&#39;, done: false }</span></span>
<span class="line"><span>hw.next()</span></span>
<span class="line"><span>// { value: &#39;world&#39;, done: false }</span></span>
<span class="line"><span>hw.next()</span></span>
<span class="line"><span>// { value: &#39;ending&#39;, done: true }</span></span>
<span class="line"><span>hw.next()</span></span>
<span class="line"><span>// { value: undefined, done: true</span></span></code></pre></div>`,19),i=[l];function t(c,o,r,d,h,u){return a(),n("div",null,i)}const b=s(e,[["render",t]]);export{g as __pageData,b as default};
