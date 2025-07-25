import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"technology/react/react.md","filePath":"technology/react/react.md"}'),p={name:"technology/react/react.md"},t=e(`<ul><li><a href="https://zh-hans.react.dev/" target="_blank" rel="noreferrer">React</a></li></ul><ul><li><a href="https://reactrouter.com/en/main/start/overview" target="_blank" rel="noreferrer">React Router</a></li><li><a href="https://www.reduxjs.cn/" target="_blank" rel="noreferrer">Redux</a></li><li><a href="https://create-react-app.bootcss.com/" target="_blank" rel="noreferrer">Create React App</a></li></ul><ul><li><a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Next.js</a></li><li><a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">Tailwind CSS</a></li><li><a href="https://ant.design/docs/react/introduce-cn" target="_blank" rel="noreferrer">Ant Design</a></li></ul><ul><li><a href="https://www.tslang.cn/docs/handbook/basic-types.html" target="_blank" rel="noreferrer">TypeScript</a></li><li><a href="https://pro.ant.design/docs/getting-started" target="_blank" rel="noreferrer">antd-pro</a></li><li><a href="https://dvajs.com/guide" target="_blank" rel="noreferrer">dva</a></li><li><a href="https://umijs.org/" target="_blank" rel="noreferrer">Umi</a></li><li><a href="https://umijs.org/docs/max/introduce" target="_blank" rel="noreferrer">Umi Max</a></li></ul><blockquote><p>React 是一个用于构建用户界面（UI）的 JavaScript 库</p></blockquote><blockquote><p>创建应用</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx create-react-app my-app --template typescript</span></span></code></pre></div><p>or</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm create vite -- --template react-ts</span></span></code></pre></div><blockquote><p>Next.js 是一个流行的、基于 React 构建的轻量级框架，用于构建静态和服务器端渲染的应用程序。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npx create-next-app@latest</span></span></code></pre></div><h3 id="jsx" tabindex="-1">JSX <a class="header-anchor" href="#jsx" aria-label="Permalink to &quot;JSX&quot;">​</a></h3><p>JSX是Javascript和XML(HTML)的缩写，表示在JS代码中编写HTML模板结构。 是JS的语法扩展，浏览器本身不能识别，需要通过解析工具解析之后才能在浏览器中运行。</p><p>通过大括号{}识别JavaScript中的表达式。</p><p>注意：if语句，switch语句，变量声明属于语句，不是表达式，不能出现在{}中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 组件（函数）首字母必须大写</span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span>  let list = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id:1,</span></span>
<span class="line"><span>      title: &#39;标题一&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id: 2,</span></span>
<span class="line"><span>      title: &#39;标题二&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&quot;App&quot;&gt;</span></span>
<span class="line"><span>      &lt;ul&gt;</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          list.map((item) =&gt; {</span></span>
<span class="line"><span>            return &lt;li key={item.id}&gt;{item.title}&lt;/li&gt;</span></span>
<span class="line"><span>          })</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre></div><h3 id="动态类名" tabindex="-1">动态类名 <a class="header-anchor" href="#动态类名" aria-label="Permalink to &quot;动态类名&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div className={\`nav \${isActive &amp;&amp; &#39;active&#39;}\`}&gt;</span></span></code></pre></div><p>或使用 classnames 库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div className={classnames(&#39;nav&#39;, {active: isActive})}&gt;</span></span></code></pre></div><h3 id="事件绑定" tabindex="-1">事件绑定 <a class="header-anchor" href="#事件绑定" aria-label="Permalink to &quot;事件绑定&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function App() {</span></span>
<span class="line"><span>  function handleClick(e) {</span></span>
<span class="line"><span>    console.log(e.target.innerHTML)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const handleClickButton = (params1, e)=&gt; {</span></span>
<span class="line"><span>    console.log(&#39;click button：&#39;, params1, e)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&quot;App&quot;&gt;</span></span>
<span class="line"><span>      &lt;button onClick={handleClick}&gt;button&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button onClick={(e)=&gt;handleClickButton(&#39;Hi&#39;, e)}&gt;button&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre></div>`,22),l=[t];function i(c,r,o,d,h,u){return n(),s("div",null,l)}const v=a(p,[["render",i]]);export{b as __pageData,v as default};
