import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const g=JSON.parse('{"title":"模块化方案","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/模块化方案.md","filePath":"nodejs/模块化方案.md"}'),p={name:"nodejs/模块化方案.md"},l=e(`<h1 id="模块化方案" tabindex="-1">模块化方案 <a class="header-anchor" href="#模块化方案" aria-label="Permalink to &quot;模块化方案&quot;">​</a></h1><p>CommonJS 和 ESM 是 JavaScript 中两种不同的模块系统</p><h2 id="_1-commonjs" tabindex="-1">1. CommonJS <a class="header-anchor" href="#_1-commonjs" aria-label="Permalink to &quot;1. CommonJS&quot;">​</a></h2><p>require() 导入、module.exports 或 exports 导出</p><p>项目默认是 CommonJS 规范，指定文件后缀为 .cjs后，此文件会遵守CommonJS 规范。</p><h2 id="_2-es-module" tabindex="-1">2. ES Module <a class="header-anchor" href="#_2-es-module" aria-label="Permalink to &quot;2. ES Module&quot;">​</a></h2><p>（也被称为ES6 Module、ECMA Modules、ESM）</p><p>import 导入、export ( export default ) 导出。</p><p>文件扩展名:</p><ul><li>使用 .js + &quot;type&quot;: &quot;module&quot;</li><li>或使用 .mjs 扩展名</li></ul><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><h3 id="es-module-是值的引用-commonjs-是值的拷贝。" tabindex="-1">ES module 是值的引用，CommonJS 是值的拷贝。 <a class="header-anchor" href="#es-module-是值的引用-commonjs-是值的拷贝。" aria-label="Permalink to &quot;ES module 是值的引用，CommonJS 是值的拷贝。&quot;">​</a></h3><ul><li>‌ES module‌：导出的是值的引用。如果模块中修改了导出变量的值，那么所有导入这个变量的模块都会看到变化。这是因为 ES module(静态导入) 在<strong>编译时就确定了模块的依赖关系</strong>，并在运行时通过引用直接访问导出的值‌。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export let a = 10</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span> a = 11</span></span>
<span class="line"><span>}, 1000)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入模块</span></span>
<span class="line"><span>import { a } from &#39;./1.js&#39;</span></span>
<span class="line"><span>console.log(a) // 10</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(a) // 11</span></span>
<span class="line"><span>}, 1500)</span></span></code></pre></div><ul><li>‌CommonJS‌：导出的是值的拷贝（浅拷贝）。如果在CommonJS模块中修改了导出变量的值，这个变化不会反映到已经require了这个模块的其他模块中。这是因为 CommonJS(动态导入) 是在<strong>运行时加载</strong>的，每个require调用都会得到一个值的拷贝，修改这个拷贝不会影响原始值‌。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>exports.a = 10;</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>    a = 11</span></span>
<span class="line"><span>},1000)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入模块</span></span>
<span class="line"><span>let { a } = require(&#39;./1.js&#39;)</span></span>
<span class="line"><span>console.log(a) // 10</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(a) // 10</span></span>
<span class="line"><span>}, 1500)</span></span></code></pre></div><h3 id="执行时机" tabindex="-1">执行时机 <a class="header-anchor" href="#执行时机" aria-label="Permalink to &quot;执行时机&quot;">​</a></h3><ul><li><p>ES module</p><p>模块加载和执行是异步的；</p><p>模块的执行顺序取决于模块之间的依赖关系和浏览器的加载策略；</p><p>import 不会阻塞代码执行，浏览器会在后台加载模块；</p></li><li><p>‌CommonJS</p><p>模块加载和执行是同步的；</p><p>模块的执行顺序与它们在代码中出现的顺序是一致的；</p><p>require() 会阻塞代码执行，直到模块加载完成；</p></li></ul><h3 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-label="Permalink to &quot;兼容性&quot;">​</a></h3><ul><li><p>ES module</p><p>是 JavaScript 的标准模块系统；</p><p>现代浏览器都原生支持 ES 模块；Node.js 也支持</p></li><li><p>‌CommonJS</p><p>主要用于服务器端，Node.js使用</p></li></ul><h2 id="两种模块方案互相加载" tabindex="-1">两种模块方案互相加载 <a class="header-anchor" href="#两种模块方案互相加载" aria-label="Permalink to &quot;两种模块方案互相加载&quot;">​</a></h2><ul><li>CommonJS 加载 ESM</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const tm = await import(&#39;./index.mjs&#39;)</span></span></code></pre></div><ul><li>ESM 加载 CommonJS</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import tm from&#39;./index.cjs&#39;</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>import(&#39;./index.cjs&#39;).then((myModule)=&gt;{ // 动态导入，返回一个 Promise</span></span>
<span class="line"><span>    console.log(myModule);</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="esm-的-export" tabindex="-1">ESM 的 export <a class="header-anchor" href="#esm-的-export" aria-label="Permalink to &quot;ESM 的 export&quot;">​</a></h2><p>test1.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function fn1() {</span></span>
<span class="line"><span>  console.log(&#39;this is fn1&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export { fn1 }</span></span></code></pre></div><p>test2.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function fn2() {</span></span>
<span class="line"><span>  console.log(&#39;this is fn2&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default fn2</span></span></code></pre></div><p>index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { fn1 } from &#39;./test1.js&#39;</span></span>
<span class="line"><span>import test22 from &#39;./test2.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn1()</span></span>
<span class="line"><span>test22()</span></span></code></pre></div><p>从以上例子可以看出，export default 的最大问题在于它允许导入时随意命名；而使用具名导出时，导入的名称必须与导出的名称完全匹配，在静态分析上具有天然优势。</p><p>导入模块改名:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { fn1 as test11 } from &#39;./test1.js&#39;;</span></span>
<span class="line"><span>import { default as test22 } from &#39;./test2.js&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test11()</span></span>
<span class="line"><span>test22()</span></span></code></pre></div><h2 id="同时支持两种模块方式" tabindex="-1">同时支持两种模块方式 <a class="header-anchor" href="#同时支持两种模块方式" aria-label="Permalink to &quot;同时支持两种模块方式&quot;">​</a></h2><p>咱们开发npm包时，可能需要同时适配 CommonJS 和 ES Module：</p><ul><li>在package.json中使用 &quot;main&quot; 和 &quot;module&quot; 字段分别指定 CommonJS 和 ES Module的入口文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;main&quot;: &quot;lib/index.js&quot;,</span></span>
<span class="line"><span>    &quot;module&quot;: &quot;src/index.mjs&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>package.json中设置 exports 字段</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;exports&quot;：{ </span></span>
<span class="line"><span>    &quot;require&quot;: &quot;./index.js&quot;，</span></span>
<span class="line"><span>    &quot;import&quot;: &quot;./esm/index.js&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="全局变量获取" tabindex="-1">全局变量获取 <a class="header-anchor" href="#全局变量获取" aria-label="Permalink to &quot;全局变量获取&quot;">​</a></h2><p>ESM环境中，传统的 CommonJS 全局变量 __dirname 和 __filename 不再直接可用。 这是因为 ES Module 采用不同的模块解析策略，更加符合 ECMAScript 标准。</p><p>ESM 中获取__dirname、__filename：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { fileURLToPath } from &#39;node:url&#39;</span></span>
<span class="line"><span>import { dirname } from &#39;node:path&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const __filename = fileURLToPath(import.meta.url)</span></span>
<span class="line"><span>const __dirname = dirname(fileURLToPath(import.meta.url))</span></span></code></pre></div><ul><li>import.meta： 当前模块信息的对象</li><li>fileURLToPath()：将 URL 字符串转换为对应的本地文件系统路径</li><li>dirname()：接受一个文件路径作为参数，返回该路径的目录部分</li></ul><hr><p>规范文档：</p><p><a href="https://nodejs.cn/api/modules.html#modules_modules_commonjs_modules" target="_blank" rel="noreferrer">https://nodejs.cn/api/modules.html#modules_modules_commonjs_modules</a></p>`,49),t=[l];function o(i,c,d,r,u,m){return n(),a("div",null,t)}const b=s(p,[["render",o]]);export{g as __pageData,b as default};
