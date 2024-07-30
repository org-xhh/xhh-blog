import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image.BmoZXRph.png",m=JSON.parse('{"title":"检测项目是否有新版发布","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/检测新版发布.md","filePath":"technology/vue/检测新版发布.md"}'),l={name:"technology/vue/检测新版发布.md"},i=p(`<h1 id="检测项目是否有新版发布" tabindex="-1">检测项目是否有新版发布 <a class="header-anchor" href="#检测项目是否有新版发布" aria-label="Permalink to &quot;检测项目是否有新版发布&quot;">​</a></h1><p>在Vue项目中，判断是否发布新包通常涉及到比较项目的某个版本号与服务器上的版本号是否一致，如果不一致就刷新页面更新为最新发布的代码。</p><h2 id="vue2-检测新包" tabindex="-1">vue2 检测新包 <a class="header-anchor" href="#vue2-检测新包" aria-label="Permalink to &quot;vue2 检测新包&quot;">​</a></h2><p>package.json:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    build&quot;: &quot;node ./src/utils/version/dynamicVersion.js &amp;&amp; vue-cli-service build&quot;,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>src/utils/version/dynamicVersion.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let versionPath = path.resolve(__dirname, &#39;../../../public/version.json&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let versionData = {}</span></span>
<span class="line"><span>versionData.version = new Date().getTime()</span></span>
<span class="line"><span>// 写入</span></span>
<span class="line"><span>fs.writeFile(versionPath, JSON.stringify(versionData, null, &#39;\\t&#39;), err =&gt; {</span></span>
<span class="line"><span>  err &amp;&amp; console.log(&#39;记录打包&#39;, err)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>在router.beforeEach时检测：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let VERSION_NAME</span></span>
<span class="line"><span>let url = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VERSION_NAME = &#39;test-version&#39;</span></span>
<span class="line"><span>url = \`//\${window.location.host}/version.json\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>axios.get(url + \`?t=\${new Date().getTime()}\`).then(res =&gt; {</span></span>
<span class="line"><span>  if (res.status === 200) {</span></span>
<span class="line"><span>    let vueVersion = res.data.version</span></span>
<span class="line"><span>    let localVueVersion = localStorage.getItem(VERSION_NAME)</span></span>
<span class="line"><span>    localStorage.setItem(VERSION_NAME, vueVersion)</span></span>
<span class="line"><span>    if (localVueVersion &amp;&amp; localVueVersion + &#39;&#39; !== &#39;undefined&#39; &amp;&amp; localVueVersion + &#39;&#39; !== vueVersion + &#39;&#39;) {</span></span>
<span class="line"><span>      // alert(&#39;检测到新版本，请点击确认刷新页面哦&#39;)</span></span>
<span class="line"><span>      window.location.reload(true)</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="vue3-vite-检测新包" tabindex="-1">vue3+vite 检测新包 <a class="header-anchor" href="#vue3-vite-检测新包" aria-label="Permalink to &quot;vue3+vite 检测新包&quot;">​</a></h2><p>vite.config.js:</p><p><img src="`+e+`" alt="alt text"></p><p>src/plugins/refreshVersion.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import path from &#39;path&#39;</span></span>
<span class="line"><span>import fs from &#39;fs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const writeVersion = async (versionFile, content) =&gt; {</span></span>
<span class="line"><span>  fs.writeFile(versionFile, content, (err) =&gt; {</span></span>
<span class="line"><span>    if (err) throw err</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default (options) =&gt; {</span></span>
<span class="line"><span>  // version.json 存储在public目录下</span></span>
<span class="line"><span>  let configPath</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    name: &#39;refreshVersion&#39;,</span></span>
<span class="line"><span>    configResolved(resolvedConfig) {</span></span>
<span class="line"><span>      // version.json路径  ../xhh-project/public</span></span>
<span class="line"><span>      // console.log(&#39;运行环境&#39;, resolvedConfig.mode)</span></span>
<span class="line"><span>      configPath = resolvedConfig.publicDir</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    async buildStart() {</span></span>
<span class="line"><span>      // path.sep \\</span></span>
<span class="line"><span>      const file = configPath + path.sep + &#39;version.json&#39;</span></span>
<span class="line"><span>      const content = JSON.stringify({ version: options.version })</span></span>
<span class="line"><span>      // version.json已存在，修改</span></span>
<span class="line"><span>      if (fs.existsSync(configPath)) {</span></span>
<span class="line"><span>        writeVersion(file, content)</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 创建</span></span>
<span class="line"><span>        fs.mkdir(configPath, (err) =&gt; {</span></span>
<span class="line"><span>          if (err) throw err</span></span>
<span class="line"><span>          writeVersion(file, content)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>src/permission.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>router.beforeEach(async (to, from, next) =&gt; {</span></span>
<span class="line"><span>  // 是否上传了新版本</span></span>
<span class="line"><span>  await versionIsUpdate()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>const versionIsUpdate = async () =&gt; {</span></span>
<span class="line"><span>  if (process.env.NODE_ENV === &#39;production&#39;) {</span></span>
<span class="line"><span>    const response = await axios.get(\`//\${window.location.host}/version.json\`)</span></span>
<span class="line"><span>    // console.log(&#39;版本比较&#39;, __PROJECT_VERSION__, response.version)</span></span>
<span class="line"><span>    // 发布新版，页面刷新前__PROJECT_VERSION__是上个版本的version，response.version是最新打包的version</span></span>
<span class="line"><span>    if (__PROJECT_VERSION__ !== response.version) {</span></span>
<span class="line"><span>      console.log(&#39;检测到有新版本&#39;)</span></span>
<span class="line"><span>      setTimeout(() =&gt; {</span></span>
<span class="line"><span>        window.location.reload()</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,16),t=[i];function o(c,r,d,h,u,v){return a(),n("div",null,t)}const f=s(l,[["render",o]]);export{m as __pageData,f as default};
