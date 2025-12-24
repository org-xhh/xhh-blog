import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image.BLmP7i3R.png",v=JSON.parse('{"title":"微前端qiankun 使用","description":"","frontmatter":{},"headers":[],"relativePath":"technology/microApp/微前端.md","filePath":"technology/microApp/微前端.md"}'),l={name:"technology/microApp/微前端.md"},i=p(`<h1 id="微前端qiankun-使用" tabindex="-1">微前端qiankun 使用 <a class="header-anchor" href="#微前端qiankun-使用" aria-label="Permalink to &quot;微前端qiankun 使用&quot;">​</a></h1><p>多框架集成、子应用并行运行、跨应用通信</p><h3 id="主应用注册微应用并启动" tabindex="-1">主应用注册微应用并启动 <a class="header-anchor" href="#主应用注册微应用并启动" aria-label="Permalink to &quot;主应用注册微应用并启动&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i qiankun -S</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { registerMicroApps, start } from &#39;qiankun&#39;</span></span>
<span class="line"><span>import type { MicroAppStateActions } from &#39;qiankun&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface SharedProps {</span></span>
<span class="line"><span>  token?: string;</span></span>
<span class="line"><span>  actions?: MicroAppStateActions;</span></span>
<span class="line"><span>  shareMainApp?: typeof sharedComponent;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const apps = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;vue3-project&#39;, // 子应用名称</span></span>
<span class="line"><span>    entry: &#39;http://localhost:8101/&#39;, // 子应用入口</span></span>
<span class="line"><span>    container: &#39;#subAppContainer&#39;, // 放子应用的容器</span></span>
<span class="line"><span>    activeRule: &#39;/vue3-project&#39;, // 激活子应用的路路由</span></span>
<span class="line"><span>    props: { // 传递给子应用的数据</span></span>
<span class="line"><span>      token: &#39;abcd23456&#39;,</span></span>
<span class="line"><span>      actions</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;react18-project&#39;,</span></span>
<span class="line"><span>    entry: &#39;http://localhost:8102/&#39;,</span></span>
<span class="line"><span>    container: &#39;#subAppContainer&#39;,</span></span>
<span class="line"><span>    activeRule: &#39;/react18-project&#39;,</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>      shareMainApp: sharedComponent</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;umi-project&#39;,</span></span>
<span class="line"><span>    entry: &#39;http://localhost:8103/&#39;,</span></span>
<span class="line"><span>    container: &#39;#subAppContainer&#39;,</span></span>
<span class="line"><span>    activeRule: &#39;/umi-project&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>registerMicroApps&lt;SharedProps&gt;(apps, {</span></span>
<span class="line"><span>  beforeLoad: [async app =&gt; console.log(&#39;before load&#39;, app.name)],</span></span>
<span class="line"><span>  beforeMount: [async app =&gt; console.log(&#39;before mount&#39;, app.name)],</span></span>
<span class="line"><span>  afterMount: [async app =&gt; console.log(&#39;after mount&#39;, app.name)]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>start({</span></span>
<span class="line"><span>  // prefetch: true, // 开启预加载，在浏览器空闲时，预先加载其他子应用的资源</span></span>
<span class="line"><span>  // prefetch: &#39;all&#39;, // 预加载所有子应用</span></span>
<span class="line"><span>  // prefetch: [&#39;vue3-project&#39;, &#39;umi-project&#39;], // 只预加载指定的应用</span></span>
<span class="line"><span>  // prefetch: (apps) =&gt; apps.filter(app =&gt; app.name !== &#39;test-app&#39;),</span></span>
<span class="line"><span>  sandbox: {</span></span>
<span class="line"><span>    // strictStyleIsolation: false,  // CSS 严格隔离，每个子应用被包裹在 Shadow DOM 中，样式完全隔离</span></span>
<span class="line"><span>    experimentalStyleIsolation: true // CSS 实验性隔离，Scoped CSS，qiankun 会给子应用的所有样式添加特殊前缀</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="主应用设置跳转子应用的入口" tabindex="-1">主应用设置跳转子应用的入口 <a class="header-anchor" href="#主应用设置跳转子应用的入口" aria-label="Permalink to &quot;主应用设置跳转子应用的入口&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const routes = createBrowserRouter([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    element: &lt;LayoutPage /&gt;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        index: true, // 默认打开</span></span>
<span class="line"><span>        element: &lt;Home /&gt;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;vue3-project/?/*&#39;, // 通配符匹配 /vue3-project、 /vue3-project/goodsDetail</span></span>
<span class="line"><span>        element: &lt;EmptyPage /&gt;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;react18-project/?/*&#39;,</span></span>
<span class="line"><span>        element: &lt;EmptyPage /&gt;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;umi-project/?/*&#39;,</span></span>
<span class="line"><span>        element: &lt;EmptyPage /&gt;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>])</span></span></code></pre></div><h3 id="主应用设置子应用挂载的容器" tabindex="-1">主应用设置子应用挂载的容器 <a class="header-anchor" href="#主应用设置子应用挂载的容器" aria-label="Permalink to &quot;主应用设置子应用挂载的容器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const EmptyPage = () =&gt; {</span></span>
<span class="line"><span>  return &lt;div id=&quot;subAppContainer&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default EmptyPage</span></span></code></pre></div><h3 id="vite-构建的子应用-vue3、-react18" tabindex="-1">vite 构建的子应用(vue3、 react18) <a class="header-anchor" href="#vite-构建的子应用-vue3、-react18" aria-label="Permalink to &quot;vite 构建的子应用(vue3、 react18)&quot;">​</a></h3><p>qiankun 不支持 vite，需要使用插件 vite-plugin-qiankun</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i vite-plugin-qiankun -S</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import qiankun from &#39;vite-plugin-qiankun&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    vue(),</span></span>
<span class="line"><span>    qiankun(&#39;vue3-project&#39;, { // 与主应用注册的name保持一致</span></span>
<span class="line"><span>      useDevMode: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  server: { // 本地启动</span></span>
<span class="line"><span>    port: 8101,</span></span>
<span class="line"><span>    cors: true,</span></span>
<span class="line"><span>    origin: &quot;//localhost:8101&quot;, // 不加这个静态资源404</span></span>
<span class="line"><span>    headers: { </span></span>
<span class="line"><span>      &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39; </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    // react(),</span></span>
<span class="line"><span>    qiankun(&#39;react18-project&#39;, {</span></span>
<span class="line"><span>      useDevMode: true</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  server: {</span></span>
<span class="line"><span>    port: 8102,</span></span>
<span class="line"><span>    headers: { &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39; }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="vue3-vite-子应用路由" tabindex="-1">vue3+vite 子应用路由 <a class="header-anchor" href="#vue3-vite-子应用路由" aria-label="Permalink to &quot;vue3+vite 子应用路由&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>  // 路由前缀</span></span>
<span class="line"><span>  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? &#39;/vue3-project/&#39; : &#39;/&#39;),</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><h3 id="react18-vite-子应用路由" tabindex="-1">react18+vite 子应用路由 <a class="header-anchor" href="#react18-vite-子应用路由" aria-label="Permalink to &quot;react18+vite 子应用路由&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const routes = createBrowserRouter([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    element: &lt;LayoutPage /&gt;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        index: true,</span></span>
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
<span class="line"><span>], { basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? &#39;/react18-project&#39; : &#39;/&#39; }) // 路由前缀</span></span></code></pre></div><h3 id="vue3-vite-子应用-main-js-添加生命周期" tabindex="-1">vue3+vite 子应用 main.js 添加生命周期 <a class="header-anchor" href="#vue3-vite-子应用-main-js-添加生命周期" aria-label="Permalink to &quot;vue3+vite 子应用 main.js 添加生命周期&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { renderWithQiankun, qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
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
<span class="line"><span>    localStorage.setItem(&#39;xhhToken&#39;, props.token)</span></span>
<span class="line"><span>    render()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  update() {},</span></span>
<span class="line"><span>  bootstrap() {},</span></span>
<span class="line"><span>  unmount() {</span></span>
<span class="line"><span>    app.unmount()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="react18-vite-子应用-main-tsx-添加生命周期" tabindex="-1">react18+vite 子应用 main.tsx 添加生命周期 <a class="header-anchor" href="#react18-vite-子应用-main-tsx-添加生命周期" aria-label="Permalink to &quot;react18+vite 子应用 main.tsx 添加生命周期&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { renderWithQiankun, qiankunWindow } from &#39;vite-plugin-qiankun/dist/helper&#39;</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><h3 id="umi-子应用配置" tabindex="-1">umi 子应用配置 <a class="header-anchor" href="#umi-子应用配置" aria-label="Permalink to &quot;umi 子应用配置&quot;">​</a></h3><p>.env文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PORT=8103</span></span></code></pre></div><p>config/config.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineConfig } from &quot;umi&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// webpack相关的配置</span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  base: &#39;/umi-project&#39;,</span></span>
<span class="line"><span>  plugins: [&#39;@umijs/plugins/dist/qiankun&#39;],</span></span>
<span class="line"><span>  qiankun: {</span></span>
<span class="line"><span>    slave: {}</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>src/app.ts:</p><p>暴漏qiankun生命周期</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export const qiankun = {</span></span>
<span class="line"><span>  async bootstrap() {</span></span>
<span class="line"><span>    console.log(&#39;umi app ------ bootstrap&#39;)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  async mount(props: any) {</span></span>
<span class="line"><span>    console.log(&#39;umi app ------ mount&#39;)</span></span>
<span class="line"><span>    console.log(props)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  async unmount() {</span></span>
<span class="line"><span>    console.log(&#39;umi app ------ unmount&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="react19-webpack5-子应用配置" tabindex="-1">react19+webpack5 子应用配置 <a class="header-anchor" href="#react19-webpack5-子应用配置" aria-label="Permalink to &quot;react19+webpack5 子应用配置&quot;">​</a></h3><p>.env文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BROWSER=none</span></span>
<span class="line"><span>PORT=8104</span></span></code></pre></div><p>或者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    port: 8104</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  webpack: {</span></span>
<span class="line"><span>    alias: {</span></span>
<span class="line"><span>      &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    configure: (webpackConfig, { env, paths }) =&gt; {</span></span>
<span class="line"><span>      webpackConfig.output.library = &quot;webpack-react&quot;;</span></span>
<span class="line"><span>      webpackConfig.output.libraryTarget = &quot;umd&quot;;</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>      return webpackConfig;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>路由前缀：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const router = createBrowserRouter([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    element: &lt;Demo /&gt;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;*&#39;,</span></span>
<span class="line"><span>    element: &lt;div&gt;404&lt;/div&gt;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>], { basename: window.__POWERED_BY_QIANKUN__ ? &#39;/create-react19-app&#39; : &#39;/&#39; })</span></span></code></pre></div><p>webpack配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>webpackConfig.output.library = &quot;webpack-react&quot;</span></span>
<span class="line"><span>webpackConfig.output.libraryTarget = &quot;umd&quot;</span></span></code></pre></div><p>public-path.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  // 动态设置 publicPath，防止资源加载出错</span></span>
<span class="line"><span>  // eslint-disable-next-line no-undef</span></span>
<span class="line"><span>  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加生命周期：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import &#39;./public-path.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let root = null</span></span>
<span class="line"><span>function render() {</span></span>
<span class="line"><span>  root = ReactDOM.createRoot(document.getElementById(&#39;root&#39;))</span></span>
<span class="line"><span>  root.render(</span></span>
<span class="line"><span>    &lt;Provider store={store}&gt;</span></span>
<span class="line"><span>      &lt;RouterProvider router={routerConfig} /&gt;</span></span>
<span class="line"><span>    &lt;/Provider&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 判断是否在qiankun环境下</span></span>
<span class="line"><span>if (!window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  render({})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在微应用初始化的时候调用一次，下次重新进入微应用时会直接进入 mount</span></span>
<span class="line"><span>export async function bootstrap() {</span></span>
<span class="line"><span>  console.log(&quot;react19 app --- bootstrap&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function mount(props) {</span></span>
<span class="line"><span>  console.log(&quot;react19 app --- mount&quot;)</span></span>
<span class="line"><span>  render(props)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function unmount(props) {</span></span>
<span class="line"><span>  console.log(&quot;react19 app --- unmount&quot;)</span></span>
<span class="line"><span>  root?.unmount()</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="vue2-webpack3-子应用配置" tabindex="-1">vue2+webpack3 子应用配置 <a class="header-anchor" href="#vue2-webpack3-子应用配置" aria-label="Permalink to &quot;vue2+webpack3 子应用配置&quot;">​</a></h3><p>设置端口号：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>devServer: {</span></span>
<span class="line"><span>  port: 8105,</span></span>
<span class="line"><span>  headers: {</span></span>
<span class="line"><span>    &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39; // 子应用允许跨域</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>路由前缀：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default new Router({</span></span>
<span class="line"><span>  base: window.__POWERED_BY_QIANKUN__ ? &#39;/vue2-project&#39; : &#39;/&#39;,</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>webpack配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>output: {</span></span>
<span class="line"><span>    library: &#39;vue2-project&#39;,</span></span>
<span class="line"><span>    libraryTarget: &#39;umd&#39;,</span></span>
<span class="line"><span>    jsonpFunction: \`webpackJsonp_vue2\`,</span></span>
<span class="line"><span>    publicPath: &#39;http://localhost:8105/&#39; // 设置这个就不需要引入 public-path.js 了</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>public-path.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  // eslint-disable-next-line camelcase, no-undef</span></span>
<span class="line"><span>  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__</span></span>
<span class="line"><span>  // __webpack_public_path__ 值是：http://localhost:8105/</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加生命周期：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>...</span></span>
<span class="line"><span>import &#39;./public-path.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let instance = null</span></span>
<span class="line"><span>function render () {</span></span>
<span class="line"><span>  instance = new Vue({</span></span>
<span class="line"><span>    el: &#39;#app&#39;,</span></span>
<span class="line"><span>    router,</span></span>
<span class="line"><span>    store,</span></span>
<span class="line"><span>    components: { App },</span></span>
<span class="line"><span>    template: &#39;&lt;App/&gt;&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 是否从qiankun主应用进入</span></span>
<span class="line"><span>if (!window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  render({})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function bootstrap () {</span></span>
<span class="line"><span>  console.log(&#39;vue2 --- bootstrap&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function mount (props) {</span></span>
<span class="line"><span>  console.log(&#39;vue2 --- mount&#39;)</span></span>
<span class="line"><span>  render(props)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function unmount (props) {</span></span>
<span class="line"><span>  console.log(&#39;vue2 --- unmount&#39;)</span></span>
<span class="line"><span>  instance.$destroy()</span></span>
<span class="line"><span>  instance = null</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="dva-子应用配置" tabindex="-1">dva 子应用配置 <a class="header-anchor" href="#dva-子应用配置" aria-label="Permalink to &quot;dva 子应用配置&quot;">​</a></h3><p>设置端口号：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>scripts&quot;: {</span></span>
<span class="line"><span>  &quot;dev&quot;: &quot;cross-env BROWSER=none PORT=8107 SOCKET_SERVER=none roadhog server&quot;,</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>},</span></span></code></pre></div><p>路由前缀：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import createHistory from &#39;history/createBrowserHistory&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function render() {</span></span>
<span class="line"><span>  app = dva({</span></span>
<span class="line"><span>    history: createHistory({ // history路由模式</span></span>
<span class="line"><span>      basename: window.__POWERED_BY_QIANKUN__ ? &#39;/dva-project/&#39; : &#39;/&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>新建 webpack.config.js：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = (webpackConfig, env) =&gt; {</span></span>
<span class="line"><span>  webpackConfig.output.library = &quot;dva-project&quot;;</span></span>
<span class="line"><span>  webpackConfig.output.libraryTarget = &quot;umd&quot;;</span></span>
<span class="line"><span>  webpackConfig.output.jsonpFunction = &quot;webpackJsonp_dva&quot;;</span></span>
<span class="line"><span>  return webpackConfig</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>public-path.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  // eslint-disable-next-line camelcase, no-undef</span></span>
<span class="line"><span>  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加生命周期：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import dva from &#39;dva&#39;;</span></span>
<span class="line"><span>import createHistory from &#39;history/createBrowserHistory&#39;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>import &#39;./public-path.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let app = null</span></span>
<span class="line"><span>function render() {</span></span>
<span class="line"><span>  app = dva({</span></span>
<span class="line"><span>    history: createHistory({</span></span>
<span class="line"><span>      basename: window.__POWERED_BY_QIANKUN__ ? &#39;/dva-project/&#39; : &#39;/&#39;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  window.dvaApp = app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  app.start(&#39;#rootdva&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  render({})</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function bootstrap() {</span></span>
<span class="line"><span>  console.log(&#39;dva--- bootstraped&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function mount(props) {</span></span>
<span class="line"><span>  console.log(&#39;dva--- mount&#39;)</span></span>
<span class="line"><span>  render(props)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function unmount() {</span></span>
<span class="line"><span>  console.log(&#39;dva--- unmount&#39;)</span></span>
<span class="line"><span>  app = null</span></span>
<span class="line"><span>  window.dvaApp = null</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="子应用跳到其他应用" tabindex="-1">子应用跳到其他应用 <a class="header-anchor" href="#子应用跳到其他应用" aria-label="Permalink to &quot;子应用跳到其他应用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 跳到其他子应用</span></span>
<span class="line"><span>window.history.pushState({}, &#39;&#39;, &#39;/react18-project/article/list&#39;)</span></span>
<span class="line"><span>// 跳到主应用</span></span>
<span class="line"><span>window.history.pushState({}, &#39;&#39;, &#39;/&#39;);</span></span></code></pre></div><h3 id="启动应用" tabindex="-1">启动应用 <a class="header-anchor" href="#启动应用" aria-label="Permalink to &quot;启动应用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;xhh-qiankun-project&quot;,</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span>  &quot;private&quot;: true,</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;npm-run-all --parallel dev:*&quot;,</span></span>
<span class="line"><span>    &quot;dev:main&quot;: &quot;npm run dev --workspace main-app&quot;,</span></span>
<span class="line"><span>    &quot;dev:vue&quot;: &quot;npm run dev --workspace vue3-project&quot;,</span></span>
<span class="line"><span>    &quot;dev:react&quot;: &quot;npm run dev --workspace react18-project&quot;,</span></span>
<span class="line"><span>    &quot;dev:umi&quot;: &quot;npm run dev --workspace umi-project&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;workspaces&quot;: [</span></span>
<span class="line"><span>    &quot;main-app&quot;,</span></span>
<span class="line"><span>    &quot;vue3-project&quot;,</span></span>
<span class="line"><span>    &quot;react18-project&quot;,</span></span>
<span class="line"><span>    &quot;umi-project&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    &quot;npm-run-all&quot;: &quot;^4.1.5&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;cheerio&quot;: &quot;^1.0.0-rc.10&quot;,</span></span>
<span class="line"><span>    &quot;vite-plugin-qiankun&quot;: &quot;^1.0.15&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="共享组件" tabindex="-1">共享组件 <a class="header-anchor" href="#共享组件" aria-label="Permalink to &quot;共享组件&quot;">​</a></h3><h4 id="主应用组件" tabindex="-1">主应用组件 <a class="header-anchor" href="#主应用组件" aria-label="Permalink to &quot;主应用组件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import CommonComp from &#39;@/components/CommonComp&#39;</span></span>
<span class="line"><span>const sharedComponent = {</span></span>
<span class="line"><span>  CommonComp</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registerMicroApps([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;react18-project&#39;,</span></span>
<span class="line"><span>    entry: &#39;http://localhost:8102/&#39;,</span></span>
<span class="line"><span>    container: &#39;#subAppContainer&#39;,</span></span>
<span class="line"><span>    activeRule: &#39;/react18-project&#39;,</span></span>
<span class="line"><span>    props: {</span></span>
<span class="line"><span>      shareMainApp: sharedComponent</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>])</span></span></code></pre></div><h4 id="子应用设置共享组件" tabindex="-1">子应用设置共享组件 <a class="header-anchor" href="#子应用设置共享组件" aria-label="Permalink to &quot;子应用设置共享组件&quot;">​</a></h4><p>utils/shareMainComp.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let shareMainComponent = {}</span></span>
<span class="line"><span>interface ShareMainComponentResult {</span></span>
<span class="line"><span>  CommonComp: React.ComponentType;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export const getShareMainComponent = () =&gt; {</span></span>
<span class="line"><span>  return shareMainComponent as ShareMainComponentResult</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const setShareMainComponent = (currShareMainApp) =&gt; {</span></span>
<span class="line"><span>  for (const key in currShareMainApp) {</span></span>
<span class="line"><span>    if (Object.prototype.hasOwnProperty.call(currShareMainApp, key)) {</span></span>
<span class="line"><span>      shareMainComponent[key] = currShareMainApp[key]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { setShareMainComponent } from &#39;@/utils/shareMainComp&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>renderWithQiankun({</span></span>
<span class="line"><span>  mount(props) {</span></span>
<span class="line"><span>    setShareMainComponent(props.shareMainApp)</span></span>
<span class="line"><span>    render()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>子应用使用组件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { getShareMainComponent } from &#39;@/utils/shareMainComp&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Home() {</span></span>
<span class="line"><span>  usePageTitle(&#39;首页&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const { CommonComp } = getShareMainComponent()</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;CommonComp /&gt;</span></span></code></pre></div><h3 id="主子应用通信" tabindex="-1">主子应用通信 <a class="header-anchor" href="#主子应用通信" aria-label="Permalink to &quot;主子应用通信&quot;">​</a></h3><hr><h4 id="_1-initglobalstate" tabindex="-1">1. initGlobalState <a class="header-anchor" href="#_1-initglobalstate" aria-label="Permalink to &quot;1. initGlobalState&quot;">​</a></h4><h5 id="主应用" tabindex="-1">主应用 <a class="header-anchor" href="#主应用" aria-label="Permalink to &quot;主应用&quot;">​</a></h5><p>initGlobalState设置全局状态：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { initGlobalState, MicroAppStateActions } from &#39;qiankun&#39;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>const initialState = {}</span></span>
<span class="line"><span>const actions: MicroAppStateActions = initGlobalState(initialState)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>export default actions</span></span></code></pre></div><p>传递给子应用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import actions from &#39;@/utils/actions&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registerMicroApps([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;vue3-project&#39;,</span></span>
<span class="line"><span>    entry: &#39;http://localhost:8101/&#39;,</span></span>
<span class="line"><span>    container: &#39;#subAppContainer&#39;,</span></span>
<span class="line"><span>    activeRule: &#39;/vue3-project&#39;,</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h5 id="子应用" tabindex="-1">子应用 <a class="header-anchor" href="#子应用" aria-label="Permalink to &quot;子应用&quot;">​</a></h5><p>先配置一个空的 actions 实例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Actions {</span></span>
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
<span class="line"><span>  unmount(props) {</span></span>
<span class="line"><span>    // 取消监听，避免内存泄露</span></span>
<span class="line"><span>    props.actions.offGlobalStateChange()</span></span>
<span class="line"><span>    app.unmount()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>监听全局状态：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>actions.onGlobalStateChange((state, prev) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;全局状态改变：&#39;, state, prev)</span></span>
<span class="line"><span>}, true) // 第二个参数设为true, 初始化时立即触发一次</span></span></code></pre></div><hr><h4 id="_2-自定义事件通信" tabindex="-1">2. 自定义事件通信 <a class="header-anchor" href="#_2-自定义事件通信" aria-label="Permalink to &quot;2. 自定义事件通信&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 应用1 发送事件</span></span>
<span class="line"><span>window.dispatchEvent(new CustomEvent(&#39;app-message&#39;, {</span></span>
<span class="line"><span>  detail: { msg: &#39;message from App A&#39; }</span></span>
<span class="line"><span>}))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 应用2 接收事件</span></span>
<span class="line"><span>window.addEventListener(&#39;app-message&#39;, (e) =&gt; {</span></span>
<span class="line"><span>  console.log(e.detail.msg)</span></span>
<span class="line"><span>})</span></span></code></pre></div><hr><h4 id="_3-props" tabindex="-1">3. props <a class="header-anchor" href="#_3-props" aria-label="Permalink to &quot;3. props&quot;">​</a></h4><hr><h4 id="_4-storage" tabindex="-1">4. storage <a class="header-anchor" href="#_4-storage" aria-label="Permalink to &quot;4. storage&quot;">​</a></h4><h3 id="效果图" tabindex="-1">效果图 <a class="header-anchor" href="#效果图" aria-label="Permalink to &quot;效果图&quot;">​</a></h3><p><img src="`+e+'" alt="alt text"></p><hr><p>参考文档</p><p><a href="https://qiankun.umijs.org/zh/api#initglobalstatestate" target="_blank" rel="noreferrer">https://qiankun.umijs.org/zh/api#initglobalstatestate</a></p>',107),t=[i];function c(o,r,u,d,h,g){return a(),n("div",null,t)}const m=s(l,[["render",c]]);export{v as __pageData,m as default};
