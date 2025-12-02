import{_ as n,c as s,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image.CarMp2X2.png",m=JSON.parse('{"title":"微前端qiankun 使用","description":"","frontmatter":{},"headers":[],"relativePath":"technology/microApp/微前端.md","filePath":"technology/microApp/微前端.md"}'),l={name:"technology/microApp/微前端.md"},i=p(`<h1 id="微前端qiankun-使用" tabindex="-1">微前端qiankun 使用 <a class="header-anchor" href="#微前端qiankun-使用" aria-label="Permalink to &quot;微前端qiankun 使用&quot;">​</a></h1><p>多框架集成、子应用并行运行、跨应用通信</p><h3 id="主应用注册微应用并启动" tabindex="-1">主应用注册微应用并启动 <a class="header-anchor" href="#主应用注册微应用并启动" aria-label="Permalink to &quot;主应用注册微应用并启动&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i qiankun -S</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { registerMicroApps, start } from &#39;qiankun&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registerMicroApps([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;vue-project&#39;, // 子应用名称</span></span>
<span class="line"><span>    entry: &#39;http://localhost:8101/&#39;, // 子应用入口</span></span>
<span class="line"><span>    container: &#39;#subAppContainer&#39;, // 放子应用的容器</span></span>
<span class="line"><span>    activeRule: &#39;/vue-project&#39;, // 激活子应用的路路由</span></span>
<span class="line"><span>    props: { // 传递给子应用的数据</span></span>
<span class="line"><span>      greeting: &#39;Hello from mainApp!&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;react-project&#39;,</span></span>
<span class="line"><span>    entry: &#39;http://localhost:8102/&#39;,</span></span>
<span class="line"><span>    container: &#39;#subAppContainer&#39;,</span></span>
<span class="line"><span>    activeRule: &#39;/react-project&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>start({</span></span>
<span class="line"><span>  sandbox: {</span></span>
<span class="line"><span>    experimentalStyleIsolation: true // 样式隔离</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="主应用设置跳转子应用的入口" tabindex="-1">主应用设置跳转子应用的入口 <a class="header-anchor" href="#主应用设置跳转子应用的入口" aria-label="Permalink to &quot;主应用设置跳转子应用的入口&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const routes = createBrowserRouter([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    element: &lt;LayoutPage /&gt;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;vue-project/?*&#39;, // 通配符匹配 /vue-project、 /vue-project/goodsDetail</span></span>
<span class="line"><span>        element: &lt;EmptyPage /&gt;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;react-project/?*&#39;,</span></span>
<span class="line"><span>        element: &lt;EmptyPage /&gt;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>])</span></span></code></pre></div><h3 id="主应用设置子应用挂载的容器" tabindex="-1">主应用设置子应用挂载的容器 <a class="header-anchor" href="#主应用设置子应用挂载的容器" aria-label="Permalink to &quot;主应用设置子应用挂载的容器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const EmptyPage = () =&gt; {</span></span>
<span class="line"><span>  return &lt;div id=&quot;subAppContainer&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default EmptyPage</span></span></code></pre></div><h3 id="vite-构建的子应用" tabindex="-1">vite 构建的子应用 <a class="header-anchor" href="#vite-构建的子应用" aria-label="Permalink to &quot;vite 构建的子应用&quot;">​</a></h3><p>qiankun 不支持 vite，需要使用插件 vite-plugin-qiankun</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i vite-plugin-qiankun -S</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import qiankun from &#39;vite-plugin-qiankun&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    vue(),</span></span>
<span class="line"><span>    qiankun(&#39;vue-project&#39;, { // 与主应用注册的name保持一致</span></span>
<span class="line"><span>      useDevMode: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  server: { // 本地启动</span></span>
<span class="line"><span>    port: 8101,</span></span>
<span class="line"><span>    origin: &quot;//localhost:8101&quot;, // 不加这个静态资源404</span></span>
<span class="line"><span>    headers: { &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39; }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    // react(),</span></span>
<span class="line"><span>    qiankun(&#39;react-project&#39;, {</span></span>
<span class="line"><span>      useDevMode: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  server: {</span></span>
<span class="line"><span>    port: 8102,</span></span>
<span class="line"><span>    headers: { &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39; }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="vue-子应用路由" tabindex="-1">vue 子应用路由 <a class="header-anchor" href="#vue-子应用路由" aria-label="Permalink to &quot;vue 子应用路由&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>  // 路由前缀</span></span>
<span class="line"><span>  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? &#39;/vue-project/&#39; : &#39;/&#39;),</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/&#39;,</span></span>
<span class="line"><span>      name: &#39;home&#39;,</span></span>
<span class="line"><span>      meta: {</span></span>
<span class="line"><span>        title: &#39;首页&#39;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      component: HomeView</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="react-子应用路由" tabindex="-1">react 子应用路由 <a class="header-anchor" href="#react-子应用路由" aria-label="Permalink to &quot;react 子应用路由&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const routes = createBrowserRouter([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    element: &lt;LayoutPage /&gt;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        index: true, // 默认打开</span></span>
<span class="line"><span>        // path: &#39;home&#39;,</span></span>
<span class="line"><span>        element: &lt;Home /&gt;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;article&#39;,</span></span>
<span class="line"><span>        element: &lt;Article /&gt;,</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            path: &#39;list&#39;,</span></span>
<span class="line"><span>            element: &lt;ArticleList /&gt;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          ...</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;*&#39;,</span></span>
<span class="line"><span>    element: &lt;NotFound /&gt;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>], { basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? &#39;/react-project&#39; : &#39;/&#39; }) // 路由前缀</span></span></code></pre></div><h3 id="vue-子应用-main-js-添加生命周期" tabindex="-1">vue 子应用 main.js 添加生命周期 <a class="header-anchor" href="#vue-子应用-main-js-添加生命周期" aria-label="Permalink to &quot;vue 子应用 main.js 添加生命周期&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { renderWithQiankun, qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let app = null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function render() {</span></span>
<span class="line"><span>  app = createApp(App)</span></span>
<span class="line"><span>  app.use(router)</span></span>
<span class="line"><span>  app.mount(&#39;#subApp&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!qiankunWindow.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  render()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>renderWithQiankun({</span></span>
<span class="line"><span>  mount(props) {</span></span>
<span class="line"><span>    console.log(&#39;props&#39;, props)</span></span>
<span class="line"><span>    render()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  update() {},</span></span>
<span class="line"><span>  bootstrap() {},</span></span>
<span class="line"><span>  unmount() {</span></span>
<span class="line"><span>    app.unmount()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="react-子应用-main-tsx-添加生命周期" tabindex="-1">react 子应用 main.tsx 添加生命周期 <a class="header-anchor" href="#react-子应用-main-tsx-添加生命周期" aria-label="Permalink to &quot;react 子应用 main.tsx 添加生命周期&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { renderWithQiankun, qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let root = null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function render() {</span></span>
<span class="line"><span>  root = createRoot(document.getElementById(&#39;root1&#39;)!)</span></span>
<span class="line"><span>  root.render(</span></span>
<span class="line"><span>    &lt;ConfigProvider locale={zhCN} </span></span>
<span class="line"><span>      theme={{</span></span>
<span class="line"><span>        token: {</span></span>
<span class="line"><span>          colorPrimary: &#39;#990ff5&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }}&gt;</span></span>
<span class="line"><span>      &lt;RouterProvider router={router}&gt;&lt;/RouterProvider&gt;</span></span>
<span class="line"><span>    &lt;/ConfigProvider&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!qiankunWindow.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  render()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>renderWithQiankun({</span></span>
<span class="line"><span>  mount(props) {</span></span>
<span class="line"><span>    render()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  update() {},</span></span>
<span class="line"><span>  bootstrap() {},</span></span>
<span class="line"><span>  unmount() {</span></span>
<span class="line"><span>    root.unmount()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="启动应用" tabindex="-1">启动应用 <a class="header-anchor" href="#启动应用" aria-label="Permalink to &quot;启动应用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;xhh-qiankun-project&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;private&quot;: true,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;npm-run-all --parallel dev:*&quot;,</span></span>
<span class="line"><span>    &quot;dev:main&quot;: &quot;npm run dev --workspace main-app&quot;,</span></span>
<span class="line"><span>    &quot;dev:vue&quot;: &quot;npm run dev --workspace vue-project&quot;,</span></span>
<span class="line"><span>    &quot;dev:react&quot;: &quot;npm run dev --workspace react-project&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;workspaces&quot;: [</span></span>
<span class="line"><span>    &quot;main-app&quot;,</span></span>
<span class="line"><span>    &quot;vue-project&quot;,</span></span>
<span class="line"><span>    &quot;react-project&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    &quot;npm-run-all&quot;: &quot;^4.1.5&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;cheerio&quot;: &quot;^1.0.0-rc.10&quot;,</span></span>
<span class="line"><span>    &quot;vite-plugin-qiankun&quot;: &quot;^1.0.15&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="主子应用通信" tabindex="-1">主子应用通信 <a class="header-anchor" href="#主子应用通信" aria-label="Permalink to &quot;主子应用通信&quot;">​</a></h3><h4 id="主应用" tabindex="-1">主应用 <a class="header-anchor" href="#主应用" aria-label="Permalink to &quot;主应用&quot;">​</a></h4><p>initGlobalState设置全局状态：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { initGlobalState, MicroAppStateActions } from &#39;qiankun&#39;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>const initialState = {}</span></span>
<span class="line"><span>const actions: MicroAppStateActions = initGlobalState(initialState)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>export default actions</span></span></code></pre></div><p>传递给子应用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import actions from &#39;@/utils/actions&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registerMicroApps([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;vue-project&#39;,</span></span>
<span class="line"><span>    entry: &#39;http://localhost:8101/&#39;,</span></span>
<span class="line"><span>    container: &#39;#subAppContainer&#39;,</span></span>
<span class="line"><span>    activeRule: &#39;/vue-project&#39;,</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>      actions</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>])</span></span></code></pre></div><p>主应用修改全局状态：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import actions from &#39;@/utils/actions&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function changeTheme(){</span></span>
<span class="line"><span>  if(theme === &#39;dark&#39;){</span></span>
<span class="line"><span>    setTheme(&#39;light&#39;)</span></span>
<span class="line"><span>    actions.setGlobalState({ theme: &#39;light&#39; })</span></span>
<span class="line"><span>  }else{</span></span>
<span class="line"><span>    setTheme(&#39;dark&#39;)</span></span>
<span class="line"><span>    actions.setGlobalState({ theme: &#39;dark&#39; })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="子应用" tabindex="-1">子应用 <a class="header-anchor" href="#子应用" aria-label="Permalink to &quot;子应用&quot;">​</a></h4><p>先配置一个空的 actions 实例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Actions {</span></span>
<span class="line"><span>  actions = { onGlobalStateChange: () =&gt; {}, setGlobalState: () =&gt; {} }</span></span>
<span class="line"><span>  setActions(actions) { this.actions = actions }</span></span>
<span class="line"><span>  onGlobalStateChange(...args) { return this.actions.onGlobalStateChange(...args) }</span></span>
<span class="line"><span>  setGlobalState(...args) { return this.actions.setGlobalState(...args) }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let actions = new Actions()</span></span>
<span class="line"><span>export default actions</span></span></code></pre></div><p>注入 actions:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>renderWithQiankun({</span></span>
<span class="line"><span>  mount(props) {</span></span>
<span class="line"><span>    actions.setActions(props.actions)</span></span>
<span class="line"><span>    render()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>监听全局状态：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>actions.onGlobalStateChange((state, prev) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;全局状态改变：&#39;, state, prev)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="效果图" tabindex="-1">效果图 <a class="header-anchor" href="#效果图" aria-label="Permalink to &quot;效果图&quot;">​</a></h3><p><img src="`+e+'" alt="alt text"></p><hr><p>参考文档</p><p><a href="https://qiankun.umijs.org/zh/api#initglobalstatestate" target="_blank" rel="noreferrer">https://qiankun.umijs.org/zh/api#initglobalstatestate</a></p>',44),t=[i];function c(o,r,u,d,h,g){return a(),s("div",null,t)}const b=n(l,[["render",c]]);export{m as __pageData,b as default};
