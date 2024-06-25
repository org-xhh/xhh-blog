import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const b=JSON.parse('{"title":"Web Workers","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/web-workers.md","filePath":"web/js/web-workers.md","lastUpdated":1718875125000}'),p={name:"web/js/web-workers.md"},l=e(`<h1 id="web-workers" tabindex="-1">Web Workers <a class="header-anchor" href="#web-workers" aria-label="Permalink to &quot;Web Workers&quot;">​</a></h1><p>Web Worker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。</p><p>在 worker 内，不能直接操作 DOM 节点，也不能使用 window 对象的默认方法和属性。</p><p>self 对象是在 Web Workers 中引入的一个全局对象，用于表示当前执行上下文的全局范围。</p><h2 id="worker-特性检测" tabindex="-1">worker 特性检测 <a class="header-anchor" href="#worker-特性检测" aria-label="Permalink to &quot;worker 特性检测&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (window.Worker) {</span></span>
<span class="line"><span>  // …</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="创建-worker" tabindex="-1">创建 worker <a class="header-anchor" href="#创建-worker" aria-label="Permalink to &quot;创建 worker&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const myWorker = new Worker(&quot;worker.js&quot;)</span></span></code></pre></div><h2 id="消息的接收和发送" tabindex="-1">消息的接收和发送 <a class="header-anchor" href="#消息的接收和发送" aria-label="Permalink to &quot;消息的接收和发送&quot;">​</a></h2><p>可以通过 postMessage() 方法和 onmessage 事件处理函数触发 worker 的方法</p><h2 id="终止-worker" tabindex="-1">终止 worker <a class="header-anchor" href="#终止-worker" aria-label="Permalink to &quot;终止 worker&quot;">​</a></h2><p>myWorker.terminate()</p><h2 id="demo" tabindex="-1">demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;demo&quot;">​</a></h2><p>使用 Web Workers 检测页面是否长时间未操作</p><p>main.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let timeCount = 0 // 页面失效弹框只提醒一次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const myWorker = new Worker(&#39;/worker.js&#39;)</span></span>
<span class="line"><span>// 向worker.js线程发送消息，开始</span></span>
<span class="line"><span>onTimeStart()</span></span>
<span class="line"><span>myWorker.addEventListener(&#39;message&#39;, (e) =&gt; {</span></span>
<span class="line"><span>  // 从worker.js接收消息</span></span>
<span class="line"><span>  console.log(e.data)</span></span>
<span class="line"><span>  // N分钟内未操作提示页面失效</span></span>
<span class="line"><span>  if (e.data.sum &gt;= 30) {</span></span>
<span class="line"><span>    onTimeEnd() // worker.js 停止向主线程发送消息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let tipTxt = &#39;当前页面长时间未操作&#39;</span></span>
<span class="line"><span>    // 停留在当前页面失效</span></span>
<span class="line"><span>    if (document.visibilityState === &#39;visible&#39;) {</span></span>
<span class="line"><span>      console.log(tipTxt)</span></span>
<span class="line"><span>      timeCount = 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 切换回当前页面，发现失效</span></span>
<span class="line"><span>    document.addEventListener(&#39;visibilitychange&#39;, function () {</span></span>
<span class="line"><span>      if (document.visibilityState == &#39;visible&#39; &amp;&amp; timeCount == 0) {</span></span>
<span class="line"><span>        console.log(tipTxt)</span></span>
<span class="line"><span>        timeCount = 1</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>function onTimeStart() {</span></span>
<span class="line"><span>  myWorker.postMessage(&#39;start&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function onTimeEnd() {</span></span>
<span class="line"><span>  myWorker.postMessage(&#39;end&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>worker.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 切换页面 setInterval会停止计时，web worker不会</span></span>
<span class="line"><span>let timer = null</span></span>
<span class="line"><span>self.addEventListener(&#39;message&#39;, (e) =&gt; {</span></span>
<span class="line"><span>  console.log(e.data) // 接收主线程发送的消息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let sum = 0</span></span>
<span class="line"><span>  let msg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (e.data === &#39;start&#39;) {</span></span>
<span class="line"><span>    timer = setInterval(() =&gt; {</span></span>
<span class="line"><span>      sum += 1</span></span>
<span class="line"><span>      msg = { sum }</span></span>
<span class="line"><span>      self.postMessage(msg)</span></span>
<span class="line"><span>    }, 1000)</span></span>
<span class="line"><span>  } else if (e.data === &#39;end&#39;) {</span></span>
<span class="line"><span>    clearInterval(timer)</span></span>
<span class="line"><span>    timer = null</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers</a></p>`,20),i=[l];function t(r,o,c,d,h,k){return n(),a("div",null,i)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};
