import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-3.BHtTrN9o.png",t="/xhh-blog/assets/image-2.Dm5GzZK0.png",b=JSON.parse('{"title":"SWC","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/babel/swc.md","filePath":"nodejs/babel/swc.md"}'),c={name:"nodejs/babel/swc.md"},l=p(`<h1 id="swc" tabindex="-1"><a href="https://swc.rs/docs/usage/core" target="_blank" rel="noreferrer">SWC</a> <a class="header-anchor" href="#swc" aria-label="Permalink to &quot;[SWC](https://swc.rs/docs/usage/core)&quot;">​</a></h1><p>swc既可用于编译，也可用于打包。底层使用编译型语言，比babel快。</p><h3 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i @swc/core</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import swc from &#39;@swc/core&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const res = swc.transformFileSync(&#39;./app.jsx&#39;, {</span></span>
<span class="line"><span>  jsc: {</span></span>
<span class="line"><span>    target: &#39;es5&#39;,</span></span>
<span class="line"><span>    parser: {</span></span>
<span class="line"><span>      syntax: &#39;ecmascript&#39;,</span></span>
<span class="line"><span>      jsx: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(res.code)</span></span></code></pre></div><h3 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h3><p>新建 spack.config.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const { config } = require(&quot;@swc/core/spack&quot;);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>module.exports = config({</span></span>
<span class="line"><span>  entry: {</span></span>
<span class="line"><span>    web: __dirname + &quot;./test.js&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  output: {</span></span>
<span class="line"><span>    path: __dirname + &quot;/dist&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>安装 @swc/cli</p><p>注意：这时 package.json 不能加 type: &quot;module&quot;。 <img src="`+e+'" alt="alt text"></p><p>执行 npx spack <img src="'+t+'" alt="alt text"></p><p>生成dist目录，里面是转换成es5打包后的代码。</p>',12),i=[l];function o(r,d,h,u,g,_){return n(),a("div",null,i)}const k=s(c,[["render",o]]);export{b as __pageData,k as default};
