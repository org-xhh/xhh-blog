import{_ as p,D as e,c as l,j as s,a as t,I as i,w as c,a3 as n,o}from"./chunks/framework.C5U8cnJv.js";const r="/xhh-blog/assets/image.qmgrdZum.png",d="/xhh-blog/assets/image-1.D22_3lNN.png",h="/xhh-blog/assets/image-2.D5CwR_Bj.png",u="/xhh-blog/assets/image-3.BbHTqFBb.png",g="/xhh-blog/assets/image-4.CE8J0YRH.png",b="/xhh-blog/assets/image-5.BEToJ81Q.png",v="/xhh-blog/assets/network.CLzDhTBD.png",E=JSON.parse('{"title":"Electron","description":"","frontmatter":{},"headers":[],"relativePath":"technology/electron/electron.md","filePath":"technology/electron/electron.md"}'),m={name:"technology/electron/electron.md"},k=n(`<h1 id="electron" tabindex="-1"><a href="https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app#%E5%B0%86%E7%BD%91%E9%A1%B5%E8%A3%85%E8%BD%BD%E5%88%B0-browserwindow" target="_blank" rel="noreferrer">Electron</a> <a class="header-anchor" href="#electron" aria-label="Permalink to &quot;[Electron](https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app#%E5%B0%86%E7%BD%91%E9%A1%B5%E8%A3%85%E8%BD%BD%E5%88%B0-browserwindow)&quot;">​</a></h1><p>Electron 是一个使用 Web 技术（HTML、CSS、JavaScript）构建跨平台桌面应用的框架，基于 Chromium 渲染引擎和 Node.js 运行时。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install electron --save</span></span></code></pre></div><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h3><p>新建 main.js 主程序入口文件，输入内容</p><p><img src="`+r+`" alt="alt text"></p><h3 id="创建窗体" tabindex="-1">创建窗体 <a class="header-anchor" href="#创建窗体" aria-label="Permalink to &quot;创建窗体&quot;">​</a></h3><p>新建 index.html 文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><p>再次启动：</p><p><img src="`+d+`" alt="alt text"></p><h3 id="打开开发者工具" tabindex="-1">打开开发者工具 <a class="header-anchor" href="#打开开发者工具" aria-label="Permalink to &quot;打开开发者工具&quot;">​</a></h3><p>显示控制台，在 main.js 添加代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 或 ctrl+shift+i</span></span>
<span class="line"><span>win.webContents.openDevTools();</span></span></code></pre></div><h3 id="给页面添加按钮" tabindex="-1">给页面添加按钮 <a class="header-anchor" href="#给页面添加按钮" aria-label="Permalink to &quot;给页面添加按钮&quot;">​</a></h3><p>创建 index.js, 并在 index.html 中引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script src=&quot;index.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.onload = function () {</span></span>
<span class="line"><span>  document.getElementById(&quot;myBtn&quot;).addEventListener(&quot;click&quot;, () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;click me&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="主进程和渲染进程" tabindex="-1">主进程和渲染进程 <a class="header-anchor" href="#主进程和渲染进程" aria-label="Permalink to &quot;主进程和渲染进程&quot;">​</a></h3><p><strong>主进程 Main Process</strong></p><p>每个 Electron 应用都有一个单一的主进程，作为应用程序的入口点。主进程在 Node.js 环境中运行，这意味着它具有 require 模块和使用所有 Node.js API 的能力。</p><ul><li>窗口管理</li><li>应用程序生命周期</li><li>原生 API</li></ul><hr><p><strong>渲染器进程 Renderer Process</strong></p><p>每个 Electron 应用都会为每个打开的 BrowserWindow 生成一个单独的渲染器进程。渲染器负责 渲染 网页内容。</p><p>渲染器无权直接访问 require 或其他 Node.js API。</p><h3 id="上下文隔离" tabindex="-1">上下文隔离 <a class="header-anchor" href="#上下文隔离" aria-label="Permalink to &quot;上下文隔离&quot;">​</a></h3><p>安全封装方案，通过 预加载preload 脚本暴露有限 API 给渲染进程</p><table tabindex="0"><thead><tr><th>可用的 API</th><th>详细信息</th></tr></thead><tbody><tr><td>Electron 模块</td><td>渲染进程模块</td></tr><tr><td>Node.js 模块</td><td>events、timers、url</td></tr><tr><td>Polyfilled 的全局模块</td><td>Buffer、process、clearImmediate、setImmediate</td></tr></tbody></table><p><a href="https://www.electronjs.org/zh/docs/latest/tutorial/sandbox" target="_blank" rel="noreferrer">https://www.electronjs.org/zh/docs/latest/tutorial/sandbox</a></p><p>示例：</p><p>创建 preload.js 提供暴露的变量和方法:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const {contextBridge} = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>contextBridge.exposeInMainWorld(&#39;versions&#39;, {</span></span>
<span class="line"><span>  node: process.versions.node,</span></span>
<span class="line"><span>  chrome: process.versions.chrome,</span></span>
<span class="line"><span>  electron: process.versions.electron,</span></span>
<span class="line"><span>})</span></span>
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
<span class="line"><span>      // 这个设为 true 的话，preload 脚本将具有 Node.js 环境的所有能力</span></span>
<span class="line"><span>      nodeIntegration: false, // 控制渲染进程中是否启用 Node.js 集成</span></span>
<span class="line"><span>      contextIsolation: true, // 启用上下文隔离</span></span>
<span class="line"><span>      enableRemoteModule: false // 禁用 remote 模块以进一步提高安全性</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>index.js(渲染进程) 中调用暴露的变量和方法:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.versions.node</span></span>
<span class="line"><span></span></span>
<span class="line"><span>window.electronAPI.print()</span></span></code></pre></div><h3 id="进程间通信" tabindex="-1">进程间通信 <a class="header-anchor" href="#进程间通信" aria-label="Permalink to &quot;进程间通信&quot;">​</a></h3>`,44),q=s("strong",null,"ipc",-1),w=n(`<p>ipc 分别有 ipcMain 和 ipcRenderer，ipcMain 用于主进程，ipcRenderer 用于渲染进程</p><ul><li>模式 1</li></ul><p>渲染进程到主进程（单向），ipcRenderer.send 发送消息，ipcMain.on 接收消息</p><p>preload.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { contextBridge, ipcRenderer } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>contextBridge.exposeInMainWorld(</span></span>
<span class="line"><span>  &#39;electronAPI&#39;, {</span></span>
<span class="line"><span>    // print: (content) =&gt; console.log(&#39;content:&#39;, content)</span></span>
<span class="line"><span>    send: (channel, data) =&gt; {</span></span>
<span class="line"><span>      let validChannels = [&#39;toMain&#39;];</span></span>
<span class="line"><span>      if (validChannels.includes(channel)) {</span></span>
<span class="line"><span>        ipcRenderer.send(channel, data);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    receive: (channel, func) =&gt; {</span></span>
<span class="line"><span>      let validChannels = [&#39;fromMain&#39;];</span></span>
<span class="line"><span>      if (validChannels.includes(channel)) {</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>    let webContents = event.sender;</span></span>
<span class="line"><span>    // 经 channel 向渲染进程发送异步带参消息</span></span>
<span class="line"><span>    webContents.send(&#39;fromMain&#39;, &#39;Main has received&#39;);</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+h+`" alt="alt text"></p><ul><li>模式 2</li></ul><p>双向通信，使用 ipcRenderer.invoke 与 ipcMain.handle(有返回值)</p><p>preload.js 中添加：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>invoke: (channel, ...data) =&gt; {</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><p><img src="`+u+`" alt="alt text"></p><ul><li>模式 3</li></ul><p>主进程到渲染进程（单向），使用 win.webContents.send 发送消息，ipcRenderer.on 接收消息</p><p>preload.js 添加 ipcRenderer 监听事件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>receive: (channel, func) =&gt; {</span></span>
<span class="line"><span>  let validChannels = [&#39;fromMain&#39;, &#39;notify-message&#39;];</span></span>
<span class="line"><span>  if (validChannels.includes(channel)) {</span></span>
<span class="line"><span>    ipcRenderer.on(channel, (event, ...args) =&gt; func(...args));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>main.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 主进程发送消息</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>  win.webContents.send(&#39;notify-message&#39;, &#39;a&#39;, &#39;b&#39;);</span></span>
<span class="line"><span>}, 1000)</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.electronAPI.receive(&#39;notify-message&#39;, (...data) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;args:&#39;, ...data)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><img src="`+g+`" alt="alt text"></p><ul><li>模式 4</li></ul><p>渲染进程到渲染进程</p><p>1.将主进程作为渲染器之间的消息代理。这需要将消息从一个渲染器发送到主进程，然后主进程将消息转发到另一个渲染器。</p><p>2.<a href="https://www.electronjs.org/zh/docs/latest/tutorial/message-ports" target="_blank" rel="noreferrer">MessagePort</a></p><h3 id="打开系统-dialog" tabindex="-1">打开系统 dialog <a class="header-anchor" href="#打开系统-dialog" aria-label="Permalink to &quot;打开系统 dialog&quot;">​</a></h3><p>preload.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>showOpenDialog: (properties) =&gt; ipcRenderer.invoke(&#39;show-open-dialog&#39;, properties)</span></span></code></pre></div><p>main.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const { promisify } = require(&#39;util&#39;);</span></span>
<span class="line"><span>const readFileAsync = promisify(fs.readFile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ipcMain.handle(&#39;show-open-dialog&#39;, async (event, properties) =&gt; {</span></span>
<span class="line"><span>  const { canceled, filePaths } = await dialog.showOpenDialog({ properties })</span></span>
<span class="line"><span>  if (!canceled) {</span></span>
<span class="line"><span>    const content = await readFileAsync(filePaths[0], &#39;utf-8&#39;)</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      content,</span></span>
<span class="line"><span>      filePath: filePaths[0]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return &#39;canceled&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>document.getElementById(&quot;openFile&quot;).addEventListener(&quot;click&quot;, () =&gt; {</span></span>
<span class="line"><span>  window.electronAPI.showOpenDialog([&#39;openFile&#39;]).then(result =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;Selected file:&#39;, result)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><img src="`+b+`" alt="alt text"></p><h3 id="保存文件对话框" tabindex="-1">保存文件对话框 <a class="header-anchor" href="#保存文件对话框" aria-label="Permalink to &quot;保存文件对话框&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ipcMain.handle(&#39;show-save-dialog&#39;, async (event) =&gt; {</span></span>
<span class="line"><span>  let result = await dialog.showSaveDialog({</span></span>
<span class="line"><span>    title: &#39;保存文件&#39;, // 标题</span></span>
<span class="line"><span>    defaultPath: &#39;test.txt&#39;, // 默认保存的文件名</span></span>
<span class="line"><span>    buttonLabel: &quot;保存文件&quot; // 确认保存文件按钮</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  if(result.canceled) return &#39;取消保存&#39;;</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    await fs.promises.writeFile(result.filePath, &#39;hello world&#39;)</span></span>
<span class="line"><span>    return &#39;保存成功&#39;;</span></span>
<span class="line"><span>  } catch (error) {</span></span>
<span class="line"><span>    return error;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="消息对话框" tabindex="-1">消息对话框 <a class="header-anchor" href="#消息对话框" aria-label="Permalink to &quot;消息对话框&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dialog.showMessageBox({ </span></span>
<span class="line"><span>  type: &#39;info&#39;,</span></span>
<span class="line"><span>  title: &#39;提示&#39;,</span></span>
<span class="line"><span>  message: &#39;这是对话框&#39;,</span></span>
<span class="line"><span>  buttons: [&#39;确定&#39;, &#39;取消&#39;]</span></span>
<span class="line"><span>}).then(result =&gt; {</span></span>
<span class="line"><span>  console.log(result.response) // buttons 下标</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="创建菜单" tabindex="-1">创建菜单 <a class="header-anchor" href="#创建菜单" aria-label="Permalink to &quot;创建菜单&quot;">​</a></h3><p>新建 menu.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { Menu } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let menutap = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    label: &#39;角色&#39;,</span></span>
<span class="line"><span>    submenu: [</span></span>
<span class="line"><span>      { label: &#39;最小化&#39;, role: &#39;minimize&#39;, click: () =&gt; { console.log(&#39;点击了&#39;) }},</span></span>
<span class="line"><span>      { type: &#39;separator&#39; },</span></span>
<span class="line"><span>      { label: &#39;windows&#39;, type: &#39;submenu&#39;, role: &#39;windowMenu&#39; },</span></span>
<span class="line"><span>      { type: &#39;separator&#39; },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        label: &#39;打开&#39;,</span></span>
<span class="line"><span>        icon: &#39;&#39;,</span></span>
<span class="line"><span>        accelerator: &#39;ctrl + o&#39;, // 定义执行点击事件的快捷键</span></span>
<span class="line"><span>        click () {</span></span>
<span class="line"><span>          console.log(&#39;打开操作&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>// 创建一个menu</span></span>
<span class="line"><span>let menu = Menu.buildFromTemplate(menutap)</span></span>
<span class="line"><span>// 将菜单添加至app上</span></span>
<span class="line"><span>Menu.setApplicationMenu(menu)</span></span></code></pre></div><p>main.js 导入菜单：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const createWindow = () =&gt; {</span></span>
<span class="line"><span>  let win = new BrowserWindow({</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  require(&#39;./menu&#39;)</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加菜单项：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>...</span></span>
<span class="line"><span>require(&#39;./menu&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取当前应用程序菜单</span></span>
<span class="line"><span>let currentMenu = Menu.getApplicationMenu()</span></span>
<span class="line"><span>// 如果菜单不存在，就创建一个新菜单</span></span>
<span class="line"><span>if (!currentMenu) {</span></span>
<span class="line"><span>  currentMenu = new Menu()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 追加菜单</span></span>
<span class="line"><span>currentMenu.append(new MenuItem({</span></span>
<span class="line"><span>  label: &#39;打开控制台&#39;,</span></span>
<span class="line"><span>  accelerator: &#39;ctrl+shift+i&#39;, </span></span>
<span class="line"><span>  click () {</span></span>
<span class="line"><span>    win.webContents.openDevTools()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}))</span></span>
<span class="line"><span>// 设置应用程序菜单</span></span>
<span class="line"><span>Menu.setApplicationMenu(currentMenu)</span></span></code></pre></div><h3 id="右键菜单" tabindex="-1">右键菜单 <a class="header-anchor" href="#右键菜单" aria-label="Permalink to &quot;右键菜单&quot;">​</a></h3><p>preload.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>createContextMenu: (params) =&gt; ipcRenderer.send(&#39;create-context-menu&#39;)</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.addEventListener(&#39;contextmenu&#39;, (event) =&gt; {</span></span>
<span class="line"><span>  event.preventDefault(); // 阻止默认的浏览器上下文菜单</span></span>
<span class="line"><span>  window.electronAPI.createContextMenu()</span></span>
<span class="line"><span>}, false);</span></span></code></pre></div><p>main.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 监听</span></span>
<span class="line"><span>ipcMain.on(&#39;create-context-menu&#39;, (event, params) =&gt; {</span></span>
<span class="line"><span>  createContextMenu(win);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function createContextMenu(win) {</span></span>
<span class="line"><span>  const template = [</span></span>
<span class="line"><span>    { label: &#39;复制&#39;, role: &#39;copy&#39; },</span></span>
<span class="line"><span>    { label: &#39;粘贴&#39;, role: &#39;paste&#39;, enabled: false } // 根据需要启用或禁用</span></span>
<span class="line"><span>  ];</span></span>
<span class="line"><span>  const menu = Menu.buildFromTemplate(template);</span></span>
<span class="line"><span>  // 右键菜单</span></span>
<span class="line"><span>  menu.popup({ window: win });</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="子窗口向父窗口传递信息" tabindex="-1">子窗口向父窗口传递信息 <a class="header-anchor" href="#子窗口向父窗口传递信息" aria-label="Permalink to &quot;子窗口向父窗口传递信息&quot;">​</a></h3><p>主窗口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 打开electron子窗口</span></span>
<span class="line"><span>document.getElementById(&quot;openWin&quot;).addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span>  window.open(&#39;./subIndex.html&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>window.addEventListener(&#39;message&#39;, (e) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;index window received message:&#39;, e.data)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>子窗口：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.opener.postMessage(&#39;info~~~&#39;, &#39;*&#39;)</span></span></code></pre></div><h3 id="a标签通过浏览器打开链接" tabindex="-1">a标签通过浏览器打开链接 <a class="header-anchor" href="#a标签通过浏览器打开链接" aria-label="Permalink to &quot;a标签通过浏览器打开链接&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { shell } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let ahref = document.getElementById(&quot;ahref&quot;);</span></span>
<span class="line"><span>ahref.addEventListener(&#39;click&#39;, (e) =&gt; {</span></span>
<span class="line"><span>  e.preventDefault() // 阻止在窗口内打开</span></span>
<span class="line"><span>  shell.openExternal(ahref.href) // 使用shell在浏览器打开链接</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="注册全局快捷键" tabindex="-1">注册全局快捷键 <a class="header-anchor" href="#注册全局快捷键" aria-label="Permalink to &quot;注册全局快捷键&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { globalShortcut } = require(&#39;electron&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>globalShortcut.register(&#39;ctrl + f&#39;, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;this is ctrl + f&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>let isRegister = globalShortcut.isRegistered(&#39;ctrl + f&#39;)</span></span>
<span class="line"><span>console.log(&#39;isRegister:&#39;, isRegister)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.on(&#39;will-quit&#39;, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;will quit~&#39;)</span></span>
<span class="line"><span>  // 将要退出时时注销全局快捷键</span></span>
<span class="line"><span>  globalShortcut.unregisterAll()</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-label="Permalink to &quot;网络&quot;">​</a></h3><p><img src="`+v+`" alt="alt text"></p><h3 id="配置热更新" tabindex="-1">配置热更新 <a class="header-anchor" href="#配置热更新" aria-label="Permalink to &quot;配置热更新&quot;">​</a></h3><p>nodemon</p><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;start&quot;: &quot;nodemon --watch main.js --exec \\&quot;electron .\\&quot;&quot;,</span></span></code></pre></div><p>nodemon 监听 main.js 文件变化，然后执行命令 electron .</p><h3 id="打包应用" tabindex="-1">打包应用 <a class="header-anchor" href="#打包应用" aria-label="Permalink to &quot;打包应用&quot;">​</a></h3><p><a href="https://www.electronjs.org/zh/docs/latest/tutorial/%E6%89%93%E5%8C%85%E6%95%99%E7%A8%8B" target="_blank" rel="noreferrer">Electron Forge</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install --save-dev @electron-forge/cli</span></span>
<span class="line"><span>npx electron-forge import</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run make</span></span></code></pre></div>`,78);function x(y,C,f,_,P,j){const a=e("font");return o(),l("div",null,[k,s("p",null,[t("进程通信方式："),i(a,{size:"4"},{default:c(()=>[q]),_:1})]),w])}const B=p(m,[["render",x]]);export{E as __pageData,B as default};
