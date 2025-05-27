import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-5.zUnF4RJr.png",l="/xhh-blog/assets/image-6.2ng3isjr.png",t="/xhh-blog/assets/image-7.CD_S0Jyy.png",i="/xhh-blog/assets/image-8.DP_Jzih2.png",c="/xhh-blog/assets/image-9.CtYvJOCw.png",o="/xhh-blog/assets/image-10.1f4-DZ7L.png",r="/xhh-blog/assets/image-11.DdNMxSUT.png",d="/xhh-blog/assets/image-12.DUIKQkCJ.png",u="/xhh-blog/assets/image-13.BnBCKeBs.png",R=JSON.parse('{"title":"dva","description":"","frontmatter":{},"headers":[],"relativePath":"technology/react/dva.md","filePath":"technology/react/dva.md"}'),h={name:"technology/react/dva.md"},g=p('<h1 id="dva" tabindex="-1">dva <a class="header-anchor" href="#dva" aria-label="Permalink to &quot;dva&quot;">​</a></h1><p>内置了 redux、redux-saga、react-redux、react-router-dom 等 <img src="'+e+`" alt="alt text"></p><h2 id="全局安装-dva-cli" tabindex="-1">全局安装 dva-cli <a class="header-anchor" href="#全局安装-dva-cli" aria-label="Permalink to &quot;全局安装 dva-cli&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install dva-cli -g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dva -v</span></span></code></pre></div><h2 id="新建项目" tabindex="-1">新建项目 <a class="header-anchor" href="#新建项目" aria-label="Permalink to &quot;新建项目&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dva new myproject</span></span></code></pre></div><h2 id="配置支持-antd" tabindex="-1">配置支持 antd <a class="header-anchor" href="#配置支持-antd" aria-label="Permalink to &quot;配置支持 antd&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i antd@4 antd-icons babel-plugin-import@1</span></span></code></pre></div><p>手动配置 antd 按需导入</p><p>.webpackrc.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  extraBabelPlugins: [</span></span>
<span class="line"><span>    // antd手动按需导入</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &quot;import&quot;,</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        libraryName: &quot;antd&quot;,</span></span>
<span class="line"><span>        libraryDirectory: &quot;es&quot;,</span></span>
<span class="line"><span>        style: &quot;css&quot;,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>引入 antd 组件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { DatePicker } from &quot;antd&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onChange = (date, dateString) =&gt; {</span></span>
<span class="line"><span>    console.log(date, dateString);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;DatePicker onChange={onChange} /&gt;</span></span></code></pre></div><p>汉化：</p><p>src/router.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { ConfigProvider } from &#39;antd&#39;;</span></span>
<span class="line"><span>import zhCN from &#39;antd/es/locale/zh_CN&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function RouterConfig({ history }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;ConfigProvider locale={zhCN}&gt;</span></span>
<span class="line"><span>       &lt;Router history={history}&gt;</span></span>
<span class="line"><span>        &lt;Switch&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;/&quot; exact component={IndexPage} /&gt;</span></span>
<span class="line"><span>        &lt;/Switch&gt;</span></span>
<span class="line"><span>      &lt;/Router&gt;</span></span>
<span class="line"><span>    &lt;/ConfigProvider&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><a href="https://4x.ant.design/docs/react/i18n-cn" target="_blank" rel="noreferrer">https://4x.ant.design/docs/react/i18n-cn</a></p><h2 id="配置-less" tabindex="-1">配置 less <a class="header-anchor" href="#配置-less" aria-label="Permalink to &quot;配置 less&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i less@4 less-loader@8</span></span></code></pre></div><h2 id="配置-css-模块化" tabindex="-1">配置 css 模块化 <a class="header-anchor" href="#配置-css-模块化" aria-label="Permalink to &quot;配置 css 模块化&quot;">​</a></h2><p>.webpackrc.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// disableCSSModules: true, // 关闭 css 模块化</span></span>
<span class="line"><span>disableCSSSourceMap: true, // 禁用 css的sourcemap生成</span></span></code></pre></div><p><a href="https://github.com/sorrycc/roadhog/blob/master/README_zh-cn.md" target="_blank" rel="noreferrer">https://github.com/sorrycc/roadhog/blob/master/README_zh-cn.md</a></p><h2 id="配置代理" tabindex="-1">配置代理 <a class="header-anchor" href="#配置代理" aria-label="Permalink to &quot;配置代理&quot;">​</a></h2><p>.webpackrc.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>proxy: {</span></span>
<span class="line"><span>    &quot;/api&quot;: {</span></span>
<span class="line"><span>      target: &quot;https://new-api&quot;,</span></span>
<span class="line"><span>      changeOrigin: true,</span></span>
<span class="line"><span>      ws: true,</span></span>
<span class="line"><span>      pathRewrite: { &quot;/api&quot;: &quot;&quot; },</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="配置移动端适配" tabindex="-1">配置移动端适配 <a class="header-anchor" href="#配置移动端适配" aria-label="Permalink to &quot;配置移动端适配&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i lib-flexible@0 postcss-pxtorem@5 babel-plugin-styled-components-px2rem@1 styled-components@5</span></span></code></pre></div><p>src/router.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import &#39;lib-flexible&#39;</span></span></code></pre></div><p>.webpackrc.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import px2rem from &quot;postcss-pxtorem&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extraPostCSSPlugins: [ // css文件 px 转 rem</span></span>
<span class="line"><span>    px2rem({</span></span>
<span class="line"><span>      rootValue: 75,</span></span>
<span class="line"><span>      propList: [&quot;*&quot;],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>],</span></span>
<span class="line"><span>extraBabelPlugins: [</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &quot;styled-components-px2rem&quot;, // styled-components px 转 rem</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;rootValue&quot;: 75</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>css文件 px 转 rem：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.box {</span></span>
<span class="line"><span>  width: 100px;</span></span>
<span class="line"><span>  height: 100px;</span></span>
<span class="line"><span>  background-color: aliceblue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div className={styles.box}&gt;&lt;/div&gt;</span></span></code></pre></div><p>styled-components px 转 rem:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import styled from &quot;styled-components&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Ok = styled.div\`</span></span>
<span class="line"><span>    width:100px;</span></span>
<span class="line"><span>    height:100px;</span></span>
<span class="line"><span>    background-color: green;</span></span>
<span class="line"><span>\`;</span></span>
<span class="line"><span>function IndexPage() {</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Ok&gt;&lt;/Ok&gt;</span></span></code></pre></div><p><img src="`+l+`" alt="alt text"></p><h2 id="es6和css3兼容处理" tabindex="-1">ES6和CSS3兼容处理 <a class="header-anchor" href="#es6和css3兼容处理" aria-label="Permalink to &quot;ES6和CSS3兼容处理&quot;">​</a></h2><p>roadhog 脚手架默认支持ES6和CSS3。处理时依赖设置的浏览器兼容列表。但是有些语法（如装饰器语法），还需要我们安装单独的babel插件处理。</p><ul><li>ES6: babel-loader、babel-preset-react-app</li><li>CSS3: postcss-loader、autoprefixer</li></ul><p>.webpackrc.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>env: { // 浏览器兼容列表</span></span>
<span class="line"><span>    development: {</span></span>
<span class="line"><span>      extraBabelPlugins: [&quot;dva-hmr&quot;],</span></span>
<span class="line"><span>      browserslist: [</span></span>
<span class="line"><span>        &quot;last 1 chrome version&quot;,</span></span>
<span class="line"><span>        &quot;last 1 firefox version&quot;,</span></span>
<span class="line"><span>        &quot;last 1 safari version&quot;,</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    production: {</span></span>
<span class="line"><span>      extraBabelPlugins: [&quot;transform-remove-console&quot;],</span></span>
<span class="line"><span>      browserslist: [</span></span>
<span class="line"><span>        &quot;&gt; 0.2%&quot;,</span></span>
<span class="line"><span>        &quot;not dead&quot;,</span></span>
<span class="line"><span>        &quot;not ie &lt;= 8&quot;</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i @babel/polyfill@7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;@babel/polyfill&#39;</span></span></code></pre></div><h2 id="配置-public-index-ejs" tabindex="-1">配置 public/index.ejs <a class="header-anchor" href="#配置-public-index-ejs" aria-label="Permalink to &quot;配置 public/index.ejs&quot;">​</a></h2><p>把 public/index.html 改成 public/index.ejs，就可以把手动引入的 index.css、index.js 去掉。 同时需要修改 .webpackrc.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hash: true, // 打包的文件带有 hash 值，避免缓存</span></span>
<span class="line"><span>html: {</span></span>
<span class="line"><span>    template: &#39;./public/index.ejs&#39;</span></span>
<span class="line"><span>},</span></span></code></pre></div><h2 id="基于cross-env设置环境变量" tabindex="-1">基于cross-env设置环境变量 <a class="header-anchor" href="#基于cross-env设置环境变量" aria-label="Permalink to &quot;基于cross-env设置环境变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i cross-env@7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;start&quot;: &quot;cross-env HOST=127.0.0.1 PORT=3009 roadhog server&quot;,</span></span></code></pre></div><p><a href="http://127.0.0.1:3009/#/" target="_blank" rel="noreferrer">http://127.0.0.1:3009/#/</a></p><h2 id="配置路由模式" tabindex="-1">配置路由模式 <a class="header-anchor" href="#配置路由模式" aria-label="Permalink to &quot;配置路由模式&quot;">​</a></h2><p>路由默认是 hash 模式，如果改为history模式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i history@4</span></span></code></pre></div><p>src/index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import createHistory from &#39;history/createBrowserHistory&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = dva({</span></span>
<span class="line"><span>    history: createHistory() // history路由模式</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="配置一级路由和二级路由" tabindex="-1">配置一级路由和二级路由 <a class="header-anchor" href="#配置一级路由和二级路由" aria-label="Permalink to &quot;配置一级路由和二级路由&quot;">​</a></h2><p>一级路由：</p><p>src/router.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { Router, Route, Switch, Redirect } from &#39;dva/router&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Vote from &#39;./routes/Vote&#39;;</span></span>
<span class="line"><span>import User from &#39;./routes/User&#39;</span></span>
<span class="line"><span>import Count from &#39;./routes/Count&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function RouterConfig({ history }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;ConfigProvider locale={zhCN}&gt;</span></span>
<span class="line"><span>       &lt;Router history={history}&gt;</span></span>
<span class="line"><span>        &lt;Switch&gt;</span></span>
<span class="line"><span>          {/* exact 表示精确匹配 */}</span></span>
<span class="line"><span>          &lt;Route path=&quot;/&quot; exact component={Vote} /&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;/count&quot; component={Count} /&gt;</span></span>
<span class="line"><span>          {/* user 不能加 exact，因为有子页面 /user/Order */}</span></span>
<span class="line"><span>          &lt;Route path=&quot;/user&quot; component={User} /&gt;</span></span>
<span class="line"><span>          {/* 以上路由匹配不到重定向到首页 */}</span></span>
<span class="line"><span>          &lt;Redirect from=&quot;*&quot; to=&quot;/&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/Switch&gt;</span></span>
<span class="line"><span>      &lt;/Router&gt;</span></span>
<span class="line"><span>    &lt;/ConfigProvider&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>二级路由：</p><p>src/routes/User.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &#39;react&#39;;</span></span>
<span class="line"><span>import styled from &#39;styled-components&#39;</span></span>
<span class="line"><span>import { NavLink, Switch, Route, Redirect } from &quot;dva/router&quot;;</span></span>
<span class="line"><span>import Order from &#39;./user/Order&#39;</span></span>
<span class="line"><span>import Profile from &#39;./user/Profile&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const UserBox = styled.div\`</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>       width: 300px;</span></span>
<span class="line"><span>        a {</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            color: #000;</span></span>
<span class="line"><span>            line-height: 60px;</span></span>
<span class="line"><span>            font-size: 22px;</span></span>
<span class="line"><span>            &amp;.active {</span></span>
<span class="line"><span>                color: red</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function User(props) {</span></span>
<span class="line"><span>    return (&lt;UserBox&gt;</span></span>
<span class="line"><span>        &lt;div className=&#39;box&#39;&gt;</span></span>
<span class="line"><span>            &lt;NavLink to=&#39;/user/order&#39;&gt;去 /user/order 页面&lt;/NavLink&gt;</span></span>
<span class="line"><span>            &lt;NavLink to=&#39;/user/profile&#39;&gt;去 /user/profile 页面&lt;/NavLink&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div className=&#39;content&#39;&gt;</span></span>
<span class="line"><span>            &lt;Switch&gt;</span></span>
<span class="line"><span>                &lt;Redirect from=&#39;/user&#39; exact to=&#39;/user/order&#39; /&gt;</span></span>
<span class="line"><span>                &lt;Route path=&#39;/user/order&#39; component={Order} /&gt;</span></span>
<span class="line"><span>                &lt;Route path=&#39;/user/profile&#39; component={Profile} /&gt;</span></span>
<span class="line"><span>            &lt;/Switch&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/UserBox&gt;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default User</span></span></code></pre></div><p><img src="`+t+`" alt="alt text"></p><h2 id="配置路由懒加载" tabindex="-1">配置路由懒加载 <a class="header-anchor" href="#配置路由懒加载" aria-label="Permalink to &quot;配置路由懒加载&quot;">​</a></h2><p>src/router.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import dynamic from &#39;dva/dynamic&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function RouterConfig({ history, app }) {</span></span>
<span class="line"><span>  const LazyCount = dynamic({</span></span>
<span class="line"><span>    app,</span></span>
<span class="line"><span>    models: () =&gt; [import(/* webpackChunkName:&#39;count-model&#39; */&#39;./models/count&#39;)], // model 懒加载</span></span>
<span class="line"><span>    component: () =&gt; import(/* webpackChunkName:&#39;count-router&#39; */&#39;./routes/Count&#39;), // 路由懒加载</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  const LazyUser = dynamic({</span></span>
<span class="line"><span>    app,</span></span>
<span class="line"><span>    component: () =&gt; import(/* webpackChunkName:&#39;user&#39; */&#39;./routes/User&#39;), // 路由懒加载</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;ConfigProvider locale={zhCN}&gt;</span></span>
<span class="line"><span>       &lt;Router history={history}&gt;</span></span>
<span class="line"><span>        &lt;Switch&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;/&quot; exact component={Vote} /&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;/count&quot; component={LazyCount} /&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;/user&quot; component={LazyUser} /&gt;</span></span>
<span class="line"><span>        &lt;/Switch&gt;</span></span>
<span class="line"><span>      &lt;/Router&gt;</span></span>
<span class="line"><span>    &lt;/ConfigProvider&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default RouterConfig;</span></span></code></pre></div><p><img src="`+i+'" alt="alt text"><img src="'+c+`" alt="alt text"></p><p>二级路由懒加载：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import dynamic from &#39;dva/dynamic&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const LazyOrder = dynamic({</span></span>
<span class="line"><span>    app: window.app,</span></span>
<span class="line"><span>    modles: () =&gt; [],</span></span>
<span class="line"><span>    component: () =&gt; import(/* webpackChunkName:&#39;order&#39; */&#39;./user/Order&#39;)</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const LazyProfile = dynamic({</span></span>
<span class="line"><span>    app: window.app,</span></span>
<span class="line"><span>    modles: () =&gt; [],</span></span>
<span class="line"><span>    component: () =&gt; import(/* webpackChunkName:&#39;profile&#39; */&#39;./user/Profile&#39;)</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function User(props) {</span></span>
<span class="line"><span>    return (&lt;UserBox&gt;</span></span>
<span class="line"><span>        &lt;div className=&#39;box&#39;&gt;</span></span>
<span class="line"><span>            &lt;NavLink to=&#39;/user/order&#39;&gt;去 /user/order 页面&lt;/NavLink&gt;</span></span>
<span class="line"><span>            &lt;NavLink to=&#39;/user/profile&#39;&gt;去 /user/profile 页面&lt;/NavLink&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div className=&#39;content&#39;&gt;</span></span>
<span class="line"><span>            &lt;Switch&gt;</span></span>
<span class="line"><span>                &lt;Redirect from=&#39;/user&#39; exact to=&#39;/user/order&#39; /&gt;</span></span>
<span class="line"><span>                &lt;Route path=&#39;/user/order&#39; component={LazyOrder} /&gt;</span></span>
<span class="line"><span>                &lt;Route path=&#39;/user/profile&#39; component={LazyProfile} /&gt;</span></span>
<span class="line"><span>            &lt;/Switch&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/UserBox&gt;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default User</span></span></code></pre></div><p><img src="`+o+`" alt="alt text"></p><h2 id="根据路由表生成路由规则" tabindex="-1">根据路由表生成路由规则 <a class="header-anchor" href="#根据路由表生成路由规则" aria-label="Permalink to &quot;根据路由表生成路由规则&quot;">​</a></h2><p>src/routerRoutes.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vote from &#39;./routes/Vote&#39;</span></span>
<span class="line"><span>import dynamic from &#39;dva/dynamic&#39;</span></span>
<span class="line"><span>// 路由懒加载</span></span>
<span class="line"><span>function lazy(component, models) {</span></span>
<span class="line"><span>  if (models === &#39;undefined&#39;) models = ()=&gt;[]</span></span>
<span class="line"><span>  return dynamic({</span></span>
<span class="line"><span>    app: window.app,</span></span>
<span class="line"><span>    models,</span></span>
<span class="line"><span>    component</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    component: Vote,</span></span>
<span class="line"><span>    exact: true,</span></span>
<span class="line"><span>    meta: {</span></span>
<span class="line"><span>      title: &#39;首页&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/count&#39;,</span></span>
<span class="line"><span>    component: lazy( // 组件懒加载、model懒加载</span></span>
<span class="line"><span>      () =&gt; import(/* webpackChunkName:&#39;count-router&#39; */ &#39;./routes/Count&#39;),</span></span>
<span class="line"><span>      () =&gt; [import(/* webpackChunkName:&#39;count-model&#39; */ &#39;./models/count&#39;)]</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>    meta: {</span></span>
<span class="line"><span>      title: &#39;计数器&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/user&#39;,</span></span>
<span class="line"><span>    component: lazy(</span></span>
<span class="line"><span>      () =&gt; import(/* webpackChunkName:&#39;user&#39; */ &#39;./routes/User&#39;),</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>    meta: {</span></span>
<span class="line"><span>      title: &#39;个人中心&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;/user&#39;, // 重定向</span></span>
<span class="line"><span>        exact: true,</span></span>
<span class="line"><span>        redirect: &#39;/user/order&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;/user/order&#39;,</span></span>
<span class="line"><span>        component: lazy(</span></span>
<span class="line"><span>          () =&gt; import(/* webpackChunkName:&#39;order&#39; */ &#39;./routes/user/Order&#39;),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        meta: {</span></span>
<span class="line"><span>          title: &#39;我的订单&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;/user/profile&#39;,</span></span>
<span class="line"><span>        component: lazy(</span></span>
<span class="line"><span>          () =&gt; import(/* webpackChunkName:&#39;profile&#39; */ &#39;./routes/user/Profile&#39;),</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>        meta: {</span></span>
<span class="line"><span>          title: &#39;我的信息&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;*&#39;,</span></span>
<span class="line"><span>    redirect: &#39;/&#39; // 以上路由匹配不到重定向到首页</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default routes</span></span></code></pre></div><p>src/router.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &#39;react&#39;;</span></span>
<span class="line"><span>import { Router, Route, Switch, Redirect } from &#39;dva/router&#39;;</span></span>
<span class="line"><span>import routes from &#39;./routerRoutes&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// antd 汉化</span></span>
<span class="line"><span>import { ConfigProvider } from &#39;antd&#39;;</span></span>
<span class="line"><span>import zhCN from &#39;antd/es/locale/zh_CN&#39;;</span></span>
<span class="line"><span>import &#39;lib-flexible&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Element = function Element(props) {</span></span>
<span class="line"><span>  let { component:Component, history, location, match } = props</span></span>
<span class="line"><span>  // 登录状态校验 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let config = {history, location, match}</span></span>
<span class="line"><span>  return &lt;Component {...config}/&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 一级路由规则</span></span>
<span class="line"><span>const createRoute = (routes) =&gt; {</span></span>
<span class="line"><span>  return &lt;Switch&gt;</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      routes.map((item, index) =&gt; {</span></span>
<span class="line"><span>        let { path, exact, component, meta, redirect } = item</span></span>
<span class="line"><span>        let config = {}</span></span>
<span class="line"><span>        if (redirect) {</span></span>
<span class="line"><span>          // 重定向</span></span>
<span class="line"><span>          config = {</span></span>
<span class="line"><span>            from: path,</span></span>
<span class="line"><span>            to: redirect</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          if (exact) {</span></span>
<span class="line"><span>            config.exact = exact</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          return &lt;Redirect key={index} {...config}/&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 正常路由规则</span></span>
<span class="line"><span>        config = {</span></span>
<span class="line"><span>          path</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (exact) {</span></span>
<span class="line"><span>          config.exact = exact</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return &lt;Route key={index} {...config} render={props=&gt;{</span></span>
<span class="line"><span>          // 修改页面标题</span></span>
<span class="line"><span>          let title = meta &amp;&amp; meta.title || &#39;dva project&#39;</span></span>
<span class="line"><span>          document.title = title</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 渲染组件</span></span>
<span class="line"><span>          return &lt;Element {...props} {...item}/&gt;</span></span>
<span class="line"><span>        }}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &lt;/Switch&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// console.log(&#39;createRoute&#39;, createRoute(routes))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function RouterConfig({ history, app }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;ConfigProvider locale={zhCN}&gt;</span></span>
<span class="line"><span>       &lt;Router history={history}&gt;</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          createRoute(routes)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &lt;/Router&gt;</span></span>
<span class="line"><span>    &lt;/ConfigProvider&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 二级路由规则</span></span>
<span class="line"><span>export const LevelTwoRouterConfig = function LevelTwoRouterConfig({path}) {</span></span>
<span class="line"><span>  let result = routes.find(item =&gt; item.path === path)</span></span>
<span class="line"><span>  let children = result &amp;&amp; result.children</span></span>
<span class="line"><span>  if (!children) return null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return createRoute(children)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default RouterConfig;</span></span></code></pre></div><p>src/routes/User.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &#39;react&#39;;</span></span>
<span class="line"><span>import styled from &#39;styled-components&#39;</span></span>
<span class="line"><span>import { NavLink } from &quot;dva/router&quot;;</span></span>
<span class="line"><span>import { LevelTwoRouterConfig } from &#39;../router&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const UserBox = styled.div\`</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    .box {</span></span>
<span class="line"><span>       width: 300px;</span></span>
<span class="line"><span>        a {</span></span>
<span class="line"><span>            display: block;</span></span>
<span class="line"><span>            color: #000;</span></span>
<span class="line"><span>            line-height: 60px;</span></span>
<span class="line"><span>            font-size: 22px;</span></span>
<span class="line"><span>            &amp;.active {</span></span>
<span class="line"><span>                color: red</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function User(props) {</span></span>
<span class="line"><span>    return (&lt;UserBox&gt;</span></span>
<span class="line"><span>        &lt;div className=&#39;box&#39;&gt;</span></span>
<span class="line"><span>            &lt;NavLink to=&#39;/user/order&#39;&gt;去 /user/order 页面&lt;/NavLink&gt;</span></span>
<span class="line"><span>            &lt;NavLink to=&#39;/user/profile&#39;&gt;去 /user/profile 页面&lt;/NavLink&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div className=&#39;content&#39;&gt;</span></span>
<span class="line"><span>            {/* 二级路由规则 */}</span></span>
<span class="line"><span>            &lt;LevelTwoRouterConfig path=&quot;/user&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/UserBox&gt;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default User</span></span></code></pre></div><h2 id="路由跳转及传参" tabindex="-1">路由跳转及传参 <a class="header-anchor" href="#路由跳转及传参" aria-label="Permalink to &quot;路由跳转及传参&quot;">​</a></h2><p>src/routes/user/Order.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { Button } from &#39;antd&#39;</span></span>
<span class="line"><span>import { Link } from &#39;dva/router&#39;</span></span>
<span class="line"><span>function Order(props) {</span></span>
<span class="line"><span>  // 路由级别组件</span></span>
<span class="line"><span>  console.log(&#39;props&#39;, props)</span></span>
<span class="line"><span>  let { history } = props</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>          &lt;h1&gt;Order&lt;/h1&gt;</span></span>
<span class="line"><span>          {/* 声明式导航 */}</span></span>
<span class="line"><span>          &lt;Link to={{</span></span>
<span class="line"><span>              pathname: &#39;/user/profile&#39;,</span></span>
<span class="line"><span>              search: &#39;?name=xhh&amp;age=20&#39;</span></span>
<span class="line"><span>          }}&gt;to profile&lt;/Link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          {/* 点击按钮跳转，叫编程式导航 */}</span></span>
<span class="line"><span>          &lt;Button type=&quot;primary&quot; onClick={()=&gt; {</span></span>
<span class="line"><span>              history.push({</span></span>
<span class="line"><span>                pathname: &#39;/user/profile&#39;,</span></span>
<span class="line"><span>                search: &#39;?name=xhh&amp;age=21&#39;</span></span>
<span class="line"><span>              })</span></span>
<span class="line"><span>          }}&gt;to profile(url传参)&lt;/Button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          &lt;Button type=&quot;primary&quot; onClick={()=&gt; {</span></span>
<span class="line"><span>              history.push({</span></span>
<span class="line"><span>                pathname: &#39;/user/profile&#39;,</span></span>
<span class="line"><span>                state: { // 隐式传参，url中不会显示，刷新页面时参数就没有了，一般不用</span></span>
<span class="line"><span>                  name: &#39;xhh&#39;,</span></span>
<span class="line"><span>                  age: 22</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>              })</span></span>
<span class="line"><span>          }}&gt;to profile(隐式传参)&lt;/Button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          &lt;Button type=&quot;primary&quot; onClick={()=&gt; {</span></span>
<span class="line"><span>              history.push(&#39;/user/profile/xhh/23&#39;)</span></span>
<span class="line"><span>          }}&gt;to profile(动态路由)&lt;/Button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default Order</span></span></code></pre></div><p>src/routes/user/Profile.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Demo from &#39;./Demo&#39;</span></span>
<span class="line"><span>function Profile(props) {</span></span>
<span class="line"><span>    let { location, match } = props</span></span>
<span class="line"><span>        // search ?传递的参数</span></span>
<span class="line"><span>        // state  隐式传参</span></span>
<span class="line"><span>        // pathname</span></span>
<span class="line"><span>    console.log(&#39;location&#39;, location)</span></span>
<span class="line"><span>    console.log(&#39;动态参数&#39;, match.params)</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;h1&gt;Profile&lt;/h1&gt;</span></span>
<span class="line"><span>            &lt;Demo /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default Profile</span></span></code></pre></div><p>src/routes/user/Demo.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { withRouter } from &quot;dva/router&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 非路由级别组件，没有参与路由的配置，props没有location等字段</span></span>
<span class="line"><span>// withRouter 是高阶组件，这样设置props就有了location等字段</span></span>
<span class="line"><span>function Demo(props) {</span></span>
<span class="line"><span>    console.log(&#39;demo中的props&#39;, props)</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;h1&gt;Demo&lt;/h1&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default withRouter(Demo)</span></span></code></pre></div><h2 id="react-router-redux" tabindex="-1">react-router-redux <a class="header-anchor" href="#react-router-redux" aria-label="Permalink to &quot;react-router-redux&quot;">​</a></h2><p>routerRedux是react-router-redux中提供的对象，这个对象包含路由跳转的方法：</p><ul><li>go</li><li>goBack</li><li>goForward</li><li>push</li><li>replace</li><li>...</li></ul><p>相比 props.history ，routerRedux不仅可以在组件中实现跳转，还可以在 redux 操作中实现路由跳转。它本身就是redux和router的结合操作。</p><ul><li>在 redux 中使用 <ul><li>yield put(routerRedux.push(...))</li></ul></li><li>在组件中使用 <ul><li>dispatch(routerRedux.push(...))</li><li>基于dispatch派发才会跳转，执行 routerRedux.push(...) 返回的是一个 action 对象</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { Button } from &#39;antd&#39;</span></span>
<span class="line"><span>import { routerRedux } from &#39;dva/router&#39;</span></span>
<span class="line"><span>import { connect } from &#39;dva&#39;</span></span>
<span class="line"><span>// connect高阶组件: props里面就有了dispatch</span></span>
<span class="line"><span>function Order(props) {</span></span>
<span class="line"><span>  let { dispatch } = props</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>          &lt;div&gt;</span></span>
<span class="line"><span>            {/* 在组件中使用，routerRedux.push()返回一个action对象 */}</span></span>
<span class="line"><span>            &lt;Button type=&quot;primary&quot; onClick={()=&gt; {</span></span>
<span class="line"><span>                dispatch(</span></span>
<span class="line"><span>                  routerRedux.push(&#39;/user/profile/xhh/23&#39;)</span></span>
<span class="line"><span>                )</span></span>
<span class="line"><span>            }}&gt;to profile(dispatch)&lt;/Button&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default connect()(Order)</span></span></code></pre></div><h2 id="dva中的models" tabindex="-1">dva中的models <a class="header-anchor" href="#dva中的models" aria-label="Permalink to &quot;dva中的models&quot;">​</a></h2><h3 id="注册model" tabindex="-1">注册model <a class="header-anchor" href="#注册model" aria-label="Permalink to &quot;注册model&quot;">​</a></h3><p>初始化就加载：</p><p>src/index.js：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import voteModel from &#39;./models/vote&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = dva({</span></span>
<span class="line"><span>  initialState: {</span></span>
<span class="line"><span>    count: { // model不能使用懒加载，count加载要改为 app.model(countModel) 才生效（优先级比model里设置的状态高）</span></span>
<span class="line"><span>      num: 20</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.model(voteModel)</span></span></code></pre></div><p>model懒加载：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  path: &#39;/count&#39;,</span></span>
<span class="line"><span>  component: lazy( // 组件懒加载、model懒加载</span></span>
<span class="line"><span>    () =&gt; import(/* webpackChunkName:&#39;count-router&#39; */ &#39;./routes/Count&#39;),</span></span>
<span class="line"><span>    () =&gt; [import(/* webpackChunkName:&#39;count-model&#39; */ &#39;./models/count&#39;)]</span></span>
<span class="line"><span>  ),</span></span>
<span class="line"><span>  meta: {</span></span>
<span class="line"><span>    title: &#39;计数器&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>},</span></span></code></pre></div><h3 id="model-使用实例" tabindex="-1">model 使用实例 <a class="header-anchor" href="#model-使用实例" aria-label="Permalink to &quot;model 使用实例&quot;">​</a></h3><p>src/models/count.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const delay = (interval=1000) =&gt; {</span></span>
<span class="line"><span>  return new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      resolve()</span></span>
<span class="line"><span>    }, interval)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  namespace: &#39;count&#39;, // 模块名</span></span>
<span class="line"><span>  state: { // 状态</span></span>
<span class="line"><span>    num: 100</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  subscriptions: { // 订阅方法</span></span>
<span class="line"><span>    setup({ dispatch, history }) { // model设置了懒加载，访问到该页面才会执行</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  reducers: { // 同步修改状态的方法 </span></span>
<span class="line"><span>    // state: 本模块状态</span></span>
<span class="line"><span>    // action: 包含 type 和 payload</span></span>
<span class="line"><span>    increment(state, { payload = 1 }) {</span></span>
<span class="line"><span>      // state = {...state} // copy一份</span></span>
<span class="line"><span>      // state.num = payload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // // 更新 state</span></span>
<span class="line"><span>      // return state</span></span>
<span class="line"><span>      // 或</span></span>
<span class="line"><span>      return {...state, num: state.num + payload}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      /*</span></span>
<span class="line"><span>        不要直接修改 state，不生效，因为 redux 会进行浅比较</span></span>
<span class="line"><span>        state.num += payload</span></span>
<span class="line"><span>        return state</span></span>
<span class="line"><span>      */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  effects: { // 异步修改状态的方法</span></span>
<span class="line"><span>    incrementAsync: [</span></span>
<span class="line"><span>      function* ({payload}, {call, put, select}) {</span></span>
<span class="line"><span>        yield call(delay, 2000)</span></span>
<span class="line"><span>        yield put({</span></span>
<span class="line"><span>          type: &#39;increment&#39;, </span></span>
<span class="line"><span>          payload</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        return &#39;返回值haha&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      // 第二项指定监听器的类型</span></span>
<span class="line"><span>      // {type: &#39;throttle&#39;, ms: 500}</span></span>
<span class="line"><span>      { type: &#39;takeLatest&#39; } // 多次点击只有最有一次生效（防抖）</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    // *incrementAsync({payload}, {call, put, select}) { // 没有防抖</span></span>
<span class="line"><span>    //   // let state = yield select() // 获取所有 model 状态</span></span>
<span class="line"><span>    //   let state = yield select(state =&gt; state.count) // 只获取 count 状态</span></span>
<span class="line"><span>    //   yield call(delay, 2000)</span></span>
<span class="line"><span>    //   yield put({</span></span>
<span class="line"><span>    //     type: &#39;increment&#39;,</span></span>
<span class="line"><span>    //     payload</span></span>
<span class="line"><span>    //   })</span></span>
<span class="line"><span>    // }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>src/routes/user/Count.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { connect } from &quot;dva&quot;;</span></span>
<span class="line"><span>function Count({num, dispatch}) {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div style={{padding: &#39;20px&#39;}}&gt;</span></span>
<span class="line"><span>            &lt;h1&gt;Count&lt;/h1&gt;</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                &lt;span&gt;{num}&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span>                    console.log(dispatch({type: &#39;count/increment&#39;, payload: 1})) // 返回值是 action</span></span>
<span class="line"><span>                }}&gt;同步 add num&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span>                    // 异步派发 返回值是 Promise</span></span>
<span class="line"><span>                    console.log(dispatch({type: &#39;count/incrementAsync&#39;, payload: 5}).then((value) =&gt; {</span></span>
<span class="line"><span>                        console.log(&#39;value&#39;, value) // 返回值haha</span></span>
<span class="line"><span>                    }))</span></span>
<span class="line"><span>                }}&gt;异步 add num&lt;/button&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// state =&gt; state.count 把仓库中count模块中的状态，映射到组件的props</span></span>
<span class="line"><span>// connect第二个参数，一般不写</span></span>
<span class="line"><span>export default connect(state =&gt; state.count)(Count)</span></span></code></pre></div><p><img src="`+r+`" alt="alt text"></p><h3 id="subscriptions" tabindex="-1">subscriptions <a class="header-anchor" href="#subscriptions" aria-label="Permalink to &quot;subscriptions&quot;">​</a></h3><p>src/models/vote.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>const delay = (interval=1000) =&gt; {</span></span>
<span class="line"><span>  return new Promise(resolve =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      resolve()</span></span>
<span class="line"><span>    }, interval)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  namespace: &#39;vote&#39;, // 模块名，获取状态和进行派发的标识</span></span>
<span class="line"><span>  state: { // 状态</span></span>
<span class="line"><span>    supNum: 10,</span></span>
<span class="line"><span>    oppNum: 100</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  subscriptions: { // 订阅方法，页面一加载或刷新就会执行(路由切换不执行)</span></span>
<span class="line"><span>    setup({ dispatch, history }) { // 订阅方法</span></span>
<span class="line"><span>      // 监听路由切换(这样加载和路由切换时都会执行): supNum 11 12 ...</span></span>
<span class="line"><span>      history.listen(({ pathname }) =&gt; {</span></span>
<span class="line"><span>        if (pathname === &#39;/&#39;) {</span></span>
<span class="line"><span>          dispatch({type: &#39;support&#39;})</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // setup({ dispatch, history }) { // 订阅方法</span></span>
<span class="line"><span>    //   // 监听路由切换(这样加载和路由切换时都会执行): supNum 11 12 ...</span></span>
<span class="line"><span>    //   let unlisten = history.listen(async ({ pathname }) =&gt; {</span></span>
<span class="line"><span>    //     if (pathname === &#39;/&#39;) {</span></span>
<span class="line"><span>    //       await delay(2000)</span></span>
<span class="line"><span>    //       dispatch({type: &#39;support&#39;})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //       // 移除监听器</span></span>
<span class="line"><span>    //       unlisten();</span></span>
<span class="line"><span>    //     }</span></span>
<span class="line"><span>    //   })</span></span>
<span class="line"><span>    // }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  reducers: { // 同步修改状态的方法（类似 vuex mutation）</span></span>
<span class="line"><span>    support(state) {</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        ...state,</span></span>
<span class="line"><span>        supNum: state.supNum + 1</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    oppose(state) {</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        ...state,</span></span>
<span class="line"><span>        oppNum: state.oppNum + 1</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  effects: { // 异步修改状态的方法（类似 vuex action）</span></span>
<span class="line"><span>    *supportAsync(_, {call, put}) {</span></span>
<span class="line"><span>      yield call(delay, 2000)</span></span>
<span class="line"><span>      yield put({</span></span>
<span class="line"><span>        type: &#39;support&#39;</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    opposeAsync: [</span></span>
<span class="line"><span>      function* (_, {call, put}) {</span></span>
<span class="line"><span>        yield call(delay, 2000)</span></span>
<span class="line"><span>        yield put({</span></span>
<span class="line"><span>          type: &#39;oppose&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {type: &#39;takeLatest&#39;}</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>src/routes/Vote.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>import { connect } from &quot;dva&quot;;</span></span>
<span class="line"><span>function Vote({supNum, oppNum, dispatch}) {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;h1&gt;Vote&lt;/h1&gt;</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                &lt;p&gt;支持：{ supNum }&lt;/p&gt;</span></span>
<span class="line"><span>                &lt;p&gt;反对：{ oppNum }&lt;/p&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span>                    dispatch({type: &#39;vote/support&#39;});</span></span>
<span class="line"><span>                }}&gt;同步支持&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span>                    dispatch({type: &#39;vote/oppose&#39;});</span></span>
<span class="line"><span>                }}&gt;同步反对&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span>                    dispatch({type: &#39;vote/supportAsync&#39;});</span></span>
<span class="line"><span>                }}&gt;异步支持&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span>                    dispatch({type: &#39;vote/opposeAsync&#39;});</span></span>
<span class="line"><span>                }}&gt;异步反对&lt;/button&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default connect(state =&gt; state.vote)(Vote)</span></span></code></pre></div><p><img src="`+d+`" alt="alt text"></p><h2 id="dva-loading-插件" tabindex="-1">dva-loading 插件 <a class="header-anchor" href="#dva-loading-插件" aria-label="Permalink to &quot;dva-loading 插件&quot;">​</a></h2><p>src/index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import createLoading from &#39;dva-loading&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(createLoading()); // 全局state中就有 loading 状态了</span></span></code></pre></div><p>src/routes/Count.jsx:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { connect } from &quot;dva&quot;;</span></span>
<span class="line"><span>import { Button } from &#39;antd&#39;</span></span>
<span class="line"><span>function Count({num, loading, dispatch}) {</span></span>
<span class="line"><span>    // 和异步操作关联</span></span>
<span class="line"><span>    loading = loading.effects[&#39;count/incrementAsync&#39;]</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                &lt;Button type=&quot;primary&quot; loading={loading} onClick={() =&gt; {</span></span>
<span class="line"><span>                    console.log(dispatch({type: &#39;count/incrementAsync&#39;, payload: 5}).then((value) =&gt; {</span></span>
<span class="line"><span>                        console.log(&#39;value&#39;, value) // 返回值haha</span></span>
<span class="line"><span>                    }))</span></span>
<span class="line"><span>                }}&gt;异步 add num&lt;/Button&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default connect(state =&gt; {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        ...state.count,</span></span>
<span class="line"><span>        loading: state.loading</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})(Count)</span></span></code></pre></div><p>点击“异步 add num”按钮，按钮上会出现loading，异步操作(2s)后，loading消失，同时打印value。</p><h2 id="redux-logger-中间件" tabindex="-1">redux-logger 中间件 <a class="header-anchor" href="#redux-logger-中间件" aria-label="Permalink to &quot;redux-logger 中间件&quot;">​</a></h2><p>src/index.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import createLogger from &#39;redux-logger&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = dva({</span></span>
<span class="line"><span>    onAction: createLogger() // 调试 redux</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>派发时打印的日志： <img src="`+u+'" alt="alt text"></p>',118),m=[g];function v(b,y,x,k,f,C){return a(),n("div",null,m)}const P=s(h,[["render",v]]);export{R as __pageData,P as default};
