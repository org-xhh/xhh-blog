import{_ as l,D as i,c as t,I as n,w as e,a3 as p,j as a,a as o,o as c}from"./chunks/framework.C5U8cnJv.js";const y=JSON.parse('{"title":"JavaScript Browser 对象","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/browser.md","filePath":"web/js/browser.md"}'),r={name:"web/js/browser.md"},d=p('<h1 id="javascript-browser-对象" tabindex="-1">JavaScript Browser 对象 <a class="header-anchor" href="#javascript-browser-对象" aria-label="Permalink to &quot;JavaScript Browser 对象&quot;">​</a></h1><p>BOM 全称是 Browser Object Model，浏览器对象模型，它提供了与浏览器交互的方法和接口。</p><p>BOM的核心对象是window对象</p><p>window：浏览器窗口对象</p><ul><li>document：文档对象 (document === window.document)</li><li>history：历史记录对象</li><li>location：地址栏对象</li><li>screen：屏幕对象</li><li>navigator：浏览器对象</li></ul><h2 id="window" tabindex="-1">window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;window&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Window</a></p><h2 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-label="Permalink to &quot;history&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/History</a></p><h2 id="location" tabindex="-1">location <a class="header-anchor" href="#location" aria-label="Permalink to &quot;location&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Location" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Location</a></p><h2 id="screen" tabindex="-1">screen <a class="header-anchor" href="#screen" aria-label="Permalink to &quot;screen&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Screen" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Screen</a></p><h2 id="navigator" tabindex="-1">navigator <a class="header-anchor" href="#navigator" aria-label="Permalink to &quot;navigator&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator</a></p><h4 id="navigator-useragent" tabindex="-1">navigator.userAgent <a class="header-anchor" href="#navigator-useragent" aria-label="Permalink to &quot;navigator.userAgent&quot;">​</a></h4><p>判断用户设备</p><h4 id="navigator-mediadevices" tabindex="-1">Navigator.mediaDevices <a class="header-anchor" href="#navigator-mediadevices" aria-label="Permalink to &quot;Navigator.mediaDevices&quot;">​</a></h4>',18),h=a("p",null,"只读属性，返回一个 MediaDevices 对象，该对象可提供对相机和麦克风等媒体输入设备以及屏幕共享的连接访问。",-1),u=a("h4",{id:"mediarecorder",tabindex:"-1"},[o("MediaRecorder "),a("a",{class:"header-anchor",href:"#mediarecorder","aria-label":'Permalink to "MediaRecorder"'},"​")],-1),v=a("p",null,"MediaRecorder 是 MediaStream Recording API 提供的用来进行媒体轻松录制的接口，他需要通过调用 MediaRecorder() 构造方法进行实例化。",-1),m=p(`<ul><li>屏幕视频录制</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const button = document.getElementById(&#39;btn&#39;)</span></span>
<span class="line"><span>button.addEventListener(&#39;click&#39;, async () =&gt; {</span></span>
<span class="line"><span>    const stream = await navigator.mediaDevices.getDisplayMedia({</span></span>
<span class="line"><span>        video: true, // 必选，捕获视频</span></span>
<span class="line"><span>        audio: true // 可选，捕获该屏幕播放的音频</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const mime = MediaRecorder.isTypeSupported(&#39;video/webm;codecs=h264&#39;)</span></span>
<span class="line"><span>        ? &#39;video/webm;codecs=h264&#39; // video/webm; codecs=vp9</span></span>
<span class="line"><span>        : &#39;video/webm&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const mediaRecorder = new MediaRecorder(stream, { mimeType: mime })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let chunks = []</span></span>
<span class="line"><span>    mediaRecorder.addEventListener(&#39;dataavailable&#39;, function(e) {</span></span>
<span class="line"><span>      if (e.data.size &gt; 0) {</span></span>
<span class="line"><span>        chunks.push(e.data)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    mediaRecorder.addEventListener(&#39;stop&#39;, () =&gt; {</span></span>
<span class="line"><span>        const blob = new Blob(chunks, { type: chunks[0].type }) // { type: &#39;video/webm&#39; }</span></span>
<span class="line"><span>        const url = URL.createObjectURL(blob)</span></span>
<span class="line"><span>        const a = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span>        a.href = url</span></span>
<span class="line"><span>        a.download = &#39;video.webm&#39;</span></span>
<span class="line"><span>        // a.click()</span></span>
<span class="line"><span>        a.textContent = &#39;下载录屏&#39;</span></span>
<span class="line"><span>        document.body.appendChild(a)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        URL.revokeObjectURL(url) // 避免内存泄漏</span></span>
<span class="line"><span>        chunks = [] // 清空数据</span></span>
<span class="line"><span>        stream.getTracks().forEach(track =&gt; track.stop()) // 确保停止媒体流，关闭摄像头或屏幕共享的指示灯。</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    mediaRecorder.start()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 当用户手动停止屏幕共享时</span></span>
<span class="line"><span>    stream.getVideoTracks()[0].onended = () =&gt; {</span></span>
<span class="line"><span>      if (mediaRecorder &amp;&amp; mediaRecorder.state !== &#39;inactive&#39;) {</span></span>
<span class="line"><span>        mediaRecorder.stop();</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
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
<span class="line"><span>  const mediaDevice = window.navigator.mediaDevices</span></span>
<span class="line"><span>  const devices = await mediaDevice.enumerateDevices()</span></span>
<span class="line"><span>  if (devices) {</span></span>
<span class="line"><span>    const stream = await mediaDevice.getUserMedia({</span></span>
<span class="line"><span>      audio: false,</span></span>
<span class="line"><span>      video: {</span></span>
<span class="line"><span>        width: 300,</span></span>
<span class="line"><span>        height: 300,</span></span>
<span class="line"><span>        // facingMode: { exact: &quot;environment&quot; }, // 强制后置摄像头</span></span>
<span class="line"><span>        facingMode: &quot;user&quot; // 前置摄像头</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    if (!videoEl.value) return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    videoEl.value.srcObject = stream</span></span>
<span class="line"><span>    videoEl.value.play()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function shoot() {</span></span>
<span class="line"><span>  if (!videoEl.value || !wrapDom.value) return</span></span>
<span class="line"><span>  const canvas = document.createElement(&quot;canvas&quot;)</span></span>
<span class="line"><span>  canvas.width = videoEl.value.videoWidth</span></span>
<span class="line"><span>  canvas.height = videoEl.value.videoHeight</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const ctx = canvas.getContext(&quot;2d&quot;)</span></span>
<span class="line"><span>  ctx?.drawImage(videoEl.value, 0, 0, canvas.width, canvas.height)</span></span>
<span class="line"><span>  wrapDom.value.appendChild(canvas)</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6);function b(g,w,_,f,k,R){const s=i("font");return c(),t("div",null,[d,n(s,{color:"gray"},{default:e(()=>[h]),_:1}),u,n(s,{color:"gray"},{default:e(()=>[v]),_:1}),m])}const P=l(r,[["render",b]]);export{y as __pageData,P as default};
