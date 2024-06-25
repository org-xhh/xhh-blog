import{_ as l,D as i,c as o,I as s,w as e,a3 as p,j as a,a as t,o as c}from"./chunks/framework.DrOZDLiO.js";const R=JSON.parse('{"title":"BOM","description":"","frontmatter":{},"headers":[],"relativePath":"web/html/bom.md","filePath":"web/html/bom.md","lastUpdated":1719219088000}'),r={name:"web/html/bom.md"},d=p('<h1 id="bom" tabindex="-1">BOM <a class="header-anchor" href="#bom" aria-label="Permalink to &quot;BOM&quot;">​</a></h1><p>全称是 Browser Object Model，浏览器对象模型，它提供了与浏览器交互的方法和接口。</p><p>BOM的核心对象是window对象</p><p>window：浏览器窗口对象</p><ul><li>document：文档对象 (document === window.document)</li><li>history：历史记录对象</li><li>location：地址栏对象</li><li>screen：屏幕对象</li><li>navigator：浏览器对象</li></ul><h2 id="window" tabindex="-1">window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;window&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Window</a></p><h2 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-label="Permalink to &quot;history&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/History</a></p><h2 id="location" tabindex="-1">location <a class="header-anchor" href="#location" aria-label="Permalink to &quot;location&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Location" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Location</a></p><h2 id="screen" tabindex="-1">screen <a class="header-anchor" href="#screen" aria-label="Permalink to &quot;screen&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Screen" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Screen</a></p><h2 id="navigator" tabindex="-1">navigator <a class="header-anchor" href="#navigator" aria-label="Permalink to &quot;navigator&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator</a></p><h4 id="navigator-mediadevices" tabindex="-1">Navigator.mediaDevices <a class="header-anchor" href="#navigator-mediadevices" aria-label="Permalink to &quot;Navigator.mediaDevices&quot;">​</a></h4>',16),h=a("p",null,"只读属性，返回一个 MediaDevices 对象，该对象可提供对相机和麦克风等媒体输入设备以及屏幕共享的连接访问。",-1),m=a("h4",{id:"mediarecorder",tabindex:"-1"},[t("MediaRecorder "),a("a",{class:"header-anchor",href:"#mediarecorder","aria-label":'Permalink to "MediaRecorder"'},"​")],-1),u=a("p",null,"MediaRecorder 是 MediaStream Recording API 提供的用来进行媒体轻松录制的接口，他需要通过调用 MediaRecorder() 构造方法进行实例化。",-1),v=p(`<ul><li>屏幕视频录制</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const button = document.getElementById(&#39;btn&#39;)</span></span>
<span class="line"><span>button.addEventListener(&#39;click&#39;, async () =&gt; {</span></span>
<span class="line"><span>    const stream = await navigator.mediaDevices.getDisplayMedia({</span></span>
<span class="line"><span>        video: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const mime = MediaRecorder.isTypeSupported(&#39;video/webm;codecs=h264&#39;)</span></span>
<span class="line"><span>        ? &#39;video/webm;codecs=h264&#39;</span></span>
<span class="line"><span>        : &#39;video/webm&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const mediaRecorder = new MediaRecorder(stream, { mimeType: mime })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const chunks = []</span></span>
<span class="line"><span>    mediaRecorder.addEventListener(&#39;dataavailable&#39;, function(e) {</span></span>
<span class="line"><span>        chunks.push(e.data)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    mediaRecorder.addEventListener(&#39;stop&#39;, () =&gt; {</span></span>
<span class="line"><span>        const blob = new Blob(chunks, { type: chunks[0].type })</span></span>
<span class="line"><span>        const url = URL.createObjectURL(blob)</span></span>
<span class="line"><span>        const a = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span>        a.href = url</span></span>
<span class="line"><span>        a.download = &#39;video.webm&#39;</span></span>
<span class="line"><span>        a.click()</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    mediaRecorder.start()</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li>录制音频并上传，实现广播功能</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (navigator.mediaDevices) {</span></span>
<span class="line"><span>    const constraints = { audio: true }</span></span>
<span class="line"><span>    that.recorderChunks = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    navigator.mediaDevices.getUserMedia(constraints)</span></span>
<span class="line"><span>      .then((stream) =&gt; {</span></span>
<span class="line"><span>        const mediaRecorder = new MediaRecorder(stream)</span></span>
<span class="line"><span>        that.mediaRecorder = mediaRecorder</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mediaRecorder.start()</span></span>
<span class="line"><span>        console.log(&#39;recorder started &#39;, mediaRecorder.state)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        mediaRecorder.ondataavailable = function(e) {</span></span>
<span class="line"><span>          that.recorderChunks.push(e.data)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .catch(function(err) {</span></span>
<span class="line"><span>        console.log(&#39;The following error occured: &#39; + err)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>that.mediaRecorder.stop()</span></span>
<span class="line"><span>console.log(&#39;recorder stopped &#39;, that.mediaRecorder.state)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>that.mediaRecorder.onstop = function(e) {</span></span>
<span class="line"><span>  console.log(&#39;data available after MediaRecorder.stop() called.&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // blob对象</span></span>
<span class="line"><span>  const blob = new Blob(that.recorderChunks, { &#39;type&#39;: &#39;audio/amr&#39; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  that.recorderChunks = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // file对象</span></span>
<span class="line"><span>  const file = new File([blob], &#39;audio.amr&#39;, { type: blob.type })</span></span>
<span class="line"><span>  // 上传音频</span></span>
<span class="line"><span>  that.upLoadAudio(file)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(&#39;recorder stopped&#39;)</span></span>
<span class="line"><span>  that.mediaRecorder = &#39;&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>调用摄像头并实现拍照功能</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function checkCamera() {</span></span>
<span class="line"><span>  const mediaDevice = window.navigator.mediaDevices;</span></span>
<span class="line"><span>  const devices = await mediaDevice.enumerateDevices();</span></span>
<span class="line"><span>  if (devices) {</span></span>
<span class="line"><span>    const stream = await mediaDevice.getUserMedia({</span></span>
<span class="line"><span>      audio: false,</span></span>
<span class="line"><span>      video: {</span></span>
<span class="line"><span>        width: 300,</span></span>
<span class="line"><span>        height: 300,</span></span>
<span class="line"><span>        // facingMode: { exact: &quot;environment&quot; }, //强制后置摄像头</span></span>
<span class="line"><span>        facingMode: &quot;user&quot;, //前置摄像头</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    if (!videoEl.value) return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    videoEl.value.srcObject = stream;</span></span>
<span class="line"><span>    videoEl.value.play();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function shoot() {</span></span>
<span class="line"><span>  if (!videoEl.value || !wrapper.value) return;</span></span>
<span class="line"><span>  const canvas = document.createElement(&quot;canvas&quot;);</span></span>
<span class="line"><span>  canvas.width = videoEl.value.videoWidth;</span></span>
<span class="line"><span>  canvas.height = videoEl.value.videoHeight;</span></span>
<span class="line"><span>  //拿到 canvas 上下文对象</span></span>
<span class="line"><span>  const ctx = canvas.getContext(&quot;2d&quot;);</span></span>
<span class="line"><span>  ctx?.drawImage(videoEl.value, 0, 0, canvas.width, canvas.height);</span></span>
<span class="line"><span>  wrapper.value.appendChild(canvas);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6);function b(g,_,f,w,k,C){const n=i("font");return c(),o("div",null,[d,s(n,{color:"gray"},{default:e(()=>[h]),_:1}),m,s(n,{color:"gray"},{default:e(()=>[u]),_:1}),v])}const P=l(r,[["render",b]]);export{R as __pageData,P as default};
