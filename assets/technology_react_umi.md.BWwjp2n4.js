import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-14.C47NMDQ6.png",l="/xhh-blog/assets/image-15.DrnwqH8h.png",t="/xhh-blog/assets/image-16.DLU93G3j.png",i="/xhh-blog/assets/image-17.Da8AvDHi.png",o="/xhh-blog/assets/image-18.CzRv1yKi.png",x=JSON.parse('{"title":"umi","description":"","frontmatter":{},"headers":[],"relativePath":"technology/react/umi.md","filePath":"technology/react/umi.md"}'),c={name:"technology/react/umi.md"},r=p('<h1 id="umi" tabindex="-1">umi <a class="header-anchor" href="#umi" aria-label="Permalink to &quot;umi&quot;">​</a></h1><h2 id="新建项目" tabindex="-1">新建项目 <a class="header-anchor" href="#新建项目" aria-label="Permalink to &quot;新建项目&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm dlx create-umi@latest</span></span></code></pre></div><p><img src="'+e+`" alt="alt text"></p><h2 id="安装必要模块" tabindex="-1">安装必要模块 <a class="header-anchor" href="#安装必要模块" aria-label="Permalink to &quot;安装必要模块&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pnpm i antd qs styled-components @umijs/plugins</span></span></code></pre></div><h2 id="配置环境变量" tabindex="-1">配置环境变量 <a class="header-anchor" href="#配置环境变量" aria-label="Permalink to &quot;配置环境变量&quot;">​</a></h2><h3 id="方式一" tabindex="-1">方式一 <a class="header-anchor" href="#方式一" aria-label="Permalink to &quot;方式一&quot;">​</a></h3><p>创建 .env 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HOST=127.0.0.1</span></span>
<span class="line"><span>PORT=3000</span></span></code></pre></div><h3 id="方式二" tabindex="-1">方式二 <a class="header-anchor" href="#方式二" aria-label="Permalink to &quot;方式二&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;dev&quot;: &quot;cross-env PORT=3333 HOST=127.0.0.1 umi dev&quot;</span></span></code></pre></div><h2 id="路由配置" tabindex="-1">路由配置 <a class="header-anchor" href="#路由配置" aria-label="Permalink to &quot;路由配置&quot;">​</a></h2><h3 id="约定式路由" tabindex="-1">约定式路由 <a class="header-anchor" href="#约定式路由" aria-label="Permalink to &quot;约定式路由&quot;">​</a></h3><p><img src="`+l+`" alt="alt text"></p><h3 id="配置式路由" tabindex="-1">配置式路由 <a class="header-anchor" href="#配置式路由" aria-label="Permalink to &quot;配置式路由&quot;">​</a></h3><p>config/routes.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const routes = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    component: &#39;index&#39; // 自动去pages目录下查找，也可以指定目录</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/count&#39;,</span></span>
<span class="line"><span>    component: &#39;count&#39;,</span></span>
<span class="line"><span>    title: &#39;计数器&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/user&#39;,</span></span>
<span class="line"><span>    component: &#39;user&#39;,</span></span>
<span class="line"><span>    title: &#39;个人中心&#39;,</span></span>
<span class="line"><span>    routes: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;/user&#39;,</span></span>
<span class="line"><span>        redirect: &#39;/user/order&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;/user/order&#39;,</span></span>
<span class="line"><span>        component: &#39;user/order&#39;,</span></span>
<span class="line"><span>        title: &#39;我的订单&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;/user/profile&#39;,</span></span>
<span class="line"><span>        component: &#39;user/profile&#39;,</span></span>
<span class="line"><span>        title: &#39;个人资料&#39;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;*&#39;,</span></span>
<span class="line"><span>    component: &#39;404&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default routes</span></span></code></pre></div><p>config/config.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineConfig } from &quot;umi&quot;;</span></span>
<span class="line"><span>import routes from &#39;./routes&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// webpack相关的配置</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  npmClient: &#39;pnpm&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 配置式路由</span></span>
<span class="line"><span>  routes</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="路由跳转传参" tabindex="-1">路由跳转传参 <a class="header-anchor" href="#路由跳转传参" aria-label="Permalink to &quot;路由跳转传参&quot;">​</a></h2><h3 id="获取动态参数" tabindex="-1">获取动态参数 <a class="header-anchor" href="#获取动态参数" aria-label="Permalink to &quot;获取动态参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;/count/:name/:age&#39;,</span></span>
<span class="line"><span>  component: &#39;count&#39;,</span></span>
<span class="line"><span>  title: &#39;计数器&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useParams, withRouter } from &quot;umi&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Count = (props) =&gt; {</span></span>
<span class="line"><span>  let params = useParams()</span></span>
<span class="line"><span>  console.log(params)</span></span>
<span class="line"><span>  // or</span></span>
<span class="line"><span>  console.log(props.params)</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;p&gt;count&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default withRouter(Count);</span></span></code></pre></div><h3 id="usenavigate跳转并传参" tabindex="-1">useNavigate跳转并传参 <a class="header-anchor" href="#usenavigate跳转并传参" aria-label="Permalink to &quot;useNavigate跳转并传参&quot;">​</a></h3><p>useNavigate是v6版本中的hook</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useNavigate } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>const navigate = useNavigate()</span></span></code></pre></div><ul><li>navigate(&#39;/abc&#39;) // push跳转</li><li>navigate(-1)</li><li>navigate(1)</li><li>navigate(&#39;/abc&#39;, { replace: true, state: { a: 1} })</li><li>navigate(pathname: &#39;/abc&#39;, search: &#39;?a=1&amp;b=2&#39;)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useNavigate, Navigate } from &#39;umi&#39;;</span></span>
<span class="line"><span>import { Button } from &#39;antd&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Order = () =&gt; {</span></span>
<span class="line"><span>  const navigate = useNavigate();</span></span>
<span class="line"><span>  const fn =()=&gt; {</span></span>
<span class="line"><span>    navigate({</span></span>
<span class="line"><span>      pathname: &#39;/user/profile&#39;,</span></span>
<span class="line"><span>      search: &#39;name=xh&amp;age=19&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;p&gt;order&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;Button type=&quot;primary&quot; onClick={() =&gt; {</span></span>
<span class="line"><span>        fn()</span></span>
<span class="line"><span>      }}&gt;</span></span>
<span class="line"><span>        去 profile</span></span>
<span class="line"><span>      &lt;/Button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>export default Order;</span></span></code></pre></div><p>在目标组件获取参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { withRouter, createSearchParams, useSearchParams } from &quot;umi&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Profile = (props) =&gt; {</span></span>
<span class="line"><span>  // let usp = new URLSearchParams(props.location.search) // 原生</span></span>
<span class="line"><span>  // or</span></span>
<span class="line"><span>  // let usp = createSearchParams(props.location.search)</span></span>
<span class="line"><span>  // or</span></span>
<span class="line"><span>  let [usp] = useSearchParams()</span></span>
<span class="line"><span>  console.log(usp.get(&#39;name&#39;))</span></span>
<span class="line"><span>  console.log(usp.get(&#39;age&#39;))</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;p&gt;profile&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default withRouter(Profile);</span></span></code></pre></div><h3 id="隐式传参" tabindex="-1">隐式传参 <a class="header-anchor" href="#隐式传参" aria-label="Permalink to &quot;隐式传参&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fn1 =()=&gt; {</span></span>
<span class="line"><span>  navigate(&#39;/user/profile&#39;, {</span></span>
<span class="line"><span>    state: { name: &#39;xhh&#39;, age: 20 } // 隐式传参</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { withRouter, useLocation } from &quot;umi&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Profile = (props) =&gt; {</span></span>
<span class="line"><span>  console.log(props.location.state) // v6 获取隐式传参（页面刷新依旧存在）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const location = useLocation()</span></span>
<span class="line"><span>  console.log(&#39;location.state&#39;, location.state) // 页面刷新依旧存在</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default withRouter(Profile);</span></span></code></pre></div><h3 id="history-跳转并传参" tabindex="-1">history 跳转并传参 <a class="header-anchor" href="#history-跳转并传参" aria-label="Permalink to &quot;history 跳转并传参&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {  history } from &#39;umi&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>history.push({</span></span>
<span class="line"><span>  pathname: &#39;/user/profile&#39;,</span></span>
<span class="line"><span>  search: &#39;?name=xxh&amp;age=23&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 隐式传参</span></span>
<span class="line"><span>history.push(&#39;/user/profile&#39;, {</span></span>
<span class="line"><span>  name: &#39;xhh&#39;,</span></span>
<span class="line"><span>  age: 23</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>如果在 config.ts 中设置 historyWithQuery: {}，则可以使用 query 传参</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>history.push({</span></span>
<span class="line"><span>  pathname: &#39;/user/profile&#39;,</span></span>
<span class="line"><span>  query: {</span></span>
<span class="line"><span>    name: &#39;xxh&#39;,</span></span>
<span class="line"><span>    age: 22</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="webpack-配置" tabindex="-1">webpack 配置 <a class="header-anchor" href="#webpack-配置" aria-label="Permalink to &quot;webpack 配置&quot;">​</a></h2><h3 id="devtool" tabindex="-1">devtool <a class="header-anchor" href="#devtool" aria-label="Permalink to &quot;devtool&quot;">​</a></h3><p>dev环境默认开启时： <img src="`+t+'" alt="alt text"></p><p>config/config.ts文件中 关闭 devtool 时:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>devtool: false</span></span></code></pre></div><p><img src="'+i+'" alt="alt text"></p><h3 id="hash" tabindex="-1">hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;hash&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hash: true</span></span></code></pre></div><p><img src="'+o+'" alt="alt text"></p><h3 id="图片转-base64" tabindex="-1">图片转 base64 <a class="header-anchor" href="#图片转-base64" aria-label="Permalink to &quot;图片转 base64&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>inlineLimit: 4 * 1024 // 默认 10000</span></span></code></pre></div><p>小于这个值，打包成 base64</p><p>...</p><hr><p><a href="https://umijs.org/docs/api/config" target="_blank" rel="noreferrer">https://umijs.org/docs/api/config</a></p>',53),h=[r];function d(u,g,m,b,v,k){return n(),s("div",null,h)}const y=a(c,[["render",d]]);export{x as __pageData,y as default};
