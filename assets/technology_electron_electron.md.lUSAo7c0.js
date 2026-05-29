import{_ as e,D as p,c as l,j as s,a as t,I as i,w as c,a3 as n,o}from"./chunks/framework.C5U8cnJv.js";const d="/xhh-blog/assets/image.qmgrdZum.png",r="/xhh-blog/assets/image-1.D22_3lNN.png",h="/xhh-blog/assets/image-2.D5CwR_Bj.png",g="/xhh-blog/assets/image-3.BbHTqFBb.png",u="/xhh-blog/assets/image-4.CE8J0YRH.png",B=JSON.parse('{"title":"Electron","description":"","frontmatter":{},"headers":[],"relativePath":"technology/electron/electron.md","filePath":"technology/electron/electron.md"}'),b={name:"technology/electron/electron.md"},v=n(`<h1 id="electron" tabindex="-1"><a href="https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app#%E5%B0%86%E7%BD%91%E9%A1%B5%E8%A3%85%E8%BD%BD%E5%88%B0-browserwindow" target="_blank" rel="noreferrer">Electron</a> <a class="header-anchor" href="#electron" aria-label="Permalink to &quot;[Electron](https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app#%E5%B0%86%E7%BD%91%E9%A1%B5%E8%A3%85%E8%BD%BD%E5%88%B0-browserwindow)&quot;">​</a></h1><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install electron --save</span></span></code></pre></div><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;my-electron&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;description&quot;: &quot;electron&quot;,</span></span>
<span class="line"><span>  &quot;main&quot;: &quot;main.js&quot;,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;chcp 65001 &amp;&amp; electron .&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;author&quot;: &quot;xhh&quot;,</span></span>
<span class="line"><span>  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;electron&quot;: &quot;^32.3.3&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h3><p>新建 main.js 文件，输入内容</p><p><img src="`+d+`" alt="alt text"></p><h3 id="创建窗体" tabindex="-1">创建窗体 <a class="header-anchor" href="#创建窗体" aria-label="Permalink to &quot;创建窗体&quot;">​</a></h3><p>新建 index.html 文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP --&gt;</span></span>
<span class="line"><span>    &lt;meta</span></span>
<span class="line"><span>      http-equiv=&quot;Content-Security-Policy&quot;</span></span>
<span class="line"><span>      content=&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot;</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;meta</span></span>
<span class="line"><span>      http-equiv=&quot;X-Content-Security-Policy&quot;</span></span>
<span class="line"><span>      content=&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot;</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Hello from Electron renderer!&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Hello Electron&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;p&gt;👋&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>下面将该页面加载到 Electron 的 BrowserWindow 上，先修改 main.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { app, BrowserWindow } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>  const win = new BrowserWindow({</span></span>
<span class="line"><span>    width: 800,</span></span>
<span class="line"><span>    height: 600</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  win.loadFile(&#39;index.html&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 应用准备完成</span></span>
<span class="line"><span>// app.on(&#39;ready&#39;, ()=&gt;{</span></span>
<span class="line"><span>// })</span></span>
<span class="line"><span>// 或</span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>  createWindow()</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>再次启动：</p><p><img src="`+r+`" alt="alt text"></p><h3 id="打开开发者工具" tabindex="-1">打开开发者工具 <a class="header-anchor" href="#打开开发者工具" aria-label="Permalink to &quot;打开开发者工具&quot;">​</a></h3><p>显示控制台，在 main.js 添加代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>win.webContents.openDevTools();</span></span></code></pre></div><h3 id="给页面添加按钮" tabindex="-1">给页面添加按钮 <a class="header-anchor" href="#给页面添加按钮" aria-label="Permalink to &quot;给页面添加按钮&quot;">​</a></h3><p>创建 index.js, 并在 index.html 中引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script src=&quot;index.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.onload = function () {</span></span>
<span class="line"><span>  document.getElementById(&quot;myBtn&quot;).addEventListener(&quot;click&quot;, () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;click me&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="上下文隔离" tabindex="-1">上下文隔离 <a class="header-anchor" href="#上下文隔离" aria-label="Permalink to &quot;上下文隔离&quot;">​</a></h3><p>渲染进程通过 预加载preload暴露的api 执行electron的方法</p><p>创建 preload.js 提供暴露的方法:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const {contextBridge} = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>contextBridge.exposeInMainWorld(&#39;electronAPI&#39;, {</span></span>
<span class="line"><span>  print: (content) =&gt; console.log(&#39;content&#39;, content)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>main.js 中指定 preload:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const {join} = require(&quot;node:path&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>  // 每个打开的BrowserWindow称为渲染进程</span></span>
<span class="line"><span>  const win = new BrowserWindow({</span></span>
<span class="line"><span>    width: 800,</span></span>
<span class="line"><span>    height: 600,</span></span>
<span class="line"><span>    webPreferences: {</span></span>
<span class="line"><span>      preload: join(__dirname, &#39;preload.js&#39;), // 指定 preload 脚本的路径</span></span>
<span class="line"><span>      nodeIntegration: false, // 控制渲染进程中是否启用 Node.js 集成</span></span>
<span class="line"><span>      contextIsolation: true, // 启用上下文隔离</span></span>
<span class="line"><span>      enableRemoteModule: false // 禁用 remote 模块以进一步提高安全性</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>index.js 中调用暴露的API:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.electronAPI.print()</span></span></code></pre></div><h3 id="进程间通信" tabindex="-1">进程间通信 <a class="header-anchor" href="#进程间通信" aria-label="Permalink to &quot;进程间通信&quot;">​</a></h3>`,32),m=s("strong",null,"ipc",-1),k=n(`<p>ipc 分别有 ipcMain 和 ipcRenderer，ipcMain 用于主进程，ipcRenderer 用于渲染进程</p><ul><li>模式 1</li></ul><p>渲染进程到主进程（单向），ipcRenderer.send 发送消息，ipcMain.on 接收消息</p><p>preload.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { contextBridge, ipcRenderer } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>contextBridge.exposeInMainWorld(</span></span>
<span class="line"><span>  &#39;electronAPI&#39;, {</span></span>
<span class="line"><span>    // print: (content) =&gt; console.log(&#39;content:&#39;, content)</span></span>
<span class="line"><span>    send: (channel, data) =&gt; {</span></span>
<span class="line"><span>      // whitelist channels</span></span>
<span class="line"><span>      let validChannels = [&#39;toMain&#39;];</span></span>
<span class="line"><span>      if (validChannels.includes(channel)) {</span></span>
<span class="line"><span>        ipcRenderer.send(channel, data);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    receive: (channel, func) =&gt; {</span></span>
<span class="line"><span>      let validChannels = [&#39;fromMain&#39;];</span></span>
<span class="line"><span>      if (validChannels.includes(channel)) {</span></span>
<span class="line"><span>        // Deliberately strip event as it includes \`sender\` </span></span>
<span class="line"><span>        ipcRenderer.on(channel, (event, ...args) =&gt; func(...args));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.onload = function () {</span></span>
<span class="line"><span>  document.getElementById(&quot;myBtn&quot;).addEventListener(&quot;click&quot;, () =&gt; {</span></span>
<span class="line"><span>    window.electronAPI.send(&#39;toMain&#39;, &#39;this is child data&#39;); // 发送数据到主进程</span></span>
<span class="line"><span>    console.log(&#39;click me&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 监听主进程返回的数据</span></span>
<span class="line"><span>  window.electronAPI.receive(&#39;fromMain&#39;, (data) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;接收主进程数据：&#39;, data);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>main.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { app, ipcMain, BrowserWindow } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  // 监听渲染进程发送的消息</span></span>
<span class="line"><span>  ipcMain.on(&#39;toMain&#39;, (event, arg) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;接收渲染进程数据: &#39;, arg);</span></span>
<span class="line"><span>    event.sender.send(&#39;fromMain&#39;, &#39;Main has received&#39;);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+h+`" alt="alt text"></p><ul><li>模式 2</li></ul><p>渲染进程到主进程（双向），使用 ipcRenderer.invoke 与 ipcMain.handle(有返回值)</p><p>preload.js 中添加：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>invoke: (channel, ...data) =&gt; {</span></span>
<span class="line"><span>  let validChannels = [&#39;invoke-message&#39;];</span></span>
<span class="line"><span>  if (validChannels.includes(channel)) {</span></span>
<span class="line"><span>    return ipcRenderer.invoke(channel, ...data);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.electronAPI.invoke(&#39;invoke-message&#39;, &#39;aaa&#39;, &#39;bbb&#39;).then((result) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;invoke result: &#39;, result);</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>main.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 监听渲染进程发送的消息</span></span>
<span class="line"><span>ipcMain.handle(&#39;invoke-message&#39;, (event, arg1, arg2) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;event:&#39;, event);</span></span>
<span class="line"><span>  console.log(&#39;args: &#39;, arg1, arg2);</span></span>
<span class="line"><span>  return &#39;main result&#39;</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><img src="`+g+`" alt="alt text"></p><ul><li>模式 3</li></ul><p>主进程到渲染进程，使用 win.webContents.send 发送消息，ipcRenderer.on 接收消息</p><p>preload.js 添加 ipcRenderer 监听事件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>receive: (channel, func) =&gt; {</span></span>
<span class="line"><span>  let validChannels = [&#39;fromMain&#39;, &#39;notify-message&#39;];</span></span>
<span class="line"><span>  if (validChannels.includes(channel)) {</span></span>
<span class="line"><span>    ipcRenderer.on(channel, (event, ...args) =&gt; func(...args));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>main.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 主进程发送消息</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>  win.webContents.send(&#39;notify-message&#39;, &#39;a&#39;, &#39;b&#39;);</span></span>
<span class="line"><span>}, 1000)</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.electronAPI.receive(&#39;notify-message&#39;, (...data) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;args:&#39;, ...data)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><img src="`+u+`" alt="alt text"></p><ul><li>模式 4</li></ul><p>渲染进程到渲染进程</p><p>1.将主进程作为渲染器之间的消息代理。这需要将消息从一个渲染器发送到主进程，然后主进程将消息转发到另一个渲染器。</p><p>2.<a href="https://www.electronjs.org/zh/docs/latest/tutorial/message-ports" target="_blank" rel="noreferrer">MessagePort</a></p><h3 id="打包应用" tabindex="-1">打包应用 <a class="header-anchor" href="#打包应用" aria-label="Permalink to &quot;打包应用&quot;">​</a></h3><p><a href="https://www.electronjs.org/zh/docs/latest/tutorial/%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B" target="_blank" rel="noreferrer">Electron Forge</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install --save-dev @electron-forge/cli</span></span>
<span class="line"><span>npx electron-forge import</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run make</span></span></code></pre></div>`,36);function q(w,C,x,y,_,f){const a=p("font");return o(),l("div",null,[v,s("p",null,[t("进程通信方式："),i(a,{size:"4"},{default:c(()=>[m]),_:1})]),k])}const E=e(b,[["render",q]]);export{B as __pageData,E as default};
