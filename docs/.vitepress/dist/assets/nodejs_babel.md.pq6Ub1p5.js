import{_ as t,D as i,c as o,I as n,w as p,a as s,j as a,a3 as l,o as c}from"./chunks/framework.C5U8cnJv.js";const N=JSON.parse('{"title":"Babel","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/babel.md","filePath":"nodejs/babel.md","lastUpdated":null}'),r={name:"nodejs/babel.md"},b=a("h1",{id:"babel",tabindex:"-1"},[a("a",{href:"https://babeljs.io/docs/babel-preset-env",target:"_blank",rel:"noreferrer"},"Babel"),s(),a("a",{class:"header-anchor",href:"#babel","aria-label":'Permalink to "[Babel](https://babeljs.io/docs/babel-preset-env)"'},"​")],-1),d=a("blockquote",null,[a("p",null,"官网解释：Babel是一个工具链，主要用于将采用ECMAScript 2015+语法编写的代码转换为向后兼容的 JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中。")],-1),u=l(`<h2 id="babel-core" tabindex="-1">@babel/core <a class="header-anchor" href="#babel-core" aria-label="Permalink to &quot;@babel/core&quot;">​</a></h2><p>是 Babel 实现编译的核心，平常说的 Babel 6（babel-core）、Babel 7 指的就是 @babel/core 的版本。</p><h2 id="presets" tabindex="-1">Presets <a class="header-anchor" href="#presets" aria-label="Permalink to &quot;Presets&quot;">​</a></h2><table tabindex="0"><thead><tr><th>预设</th><th>说明</th></tr></thead><tbody><tr><td>@babel/preset-env</td><td>编译 ES2015+ 语法</td></tr><tr><td>@babel/preset-typescript</td><td>编译 Typescript 语法</td></tr><tr><td>@babel/preset-react</td><td>编译 React 语法</td></tr><tr><td>@babel/preset-flow</td><td>编译 Flow 语法</td></tr></tbody></table><p>安装一个预设，相当于安装了一系列的插件，通过预设可以减少开发者的配置。</p><h2 id="babel-preset-env" tabindex="-1">@babel/preset-env <a class="header-anchor" href="#babel-preset-env" aria-label="Permalink to &quot;@babel/preset-env&quot;">​</a></h2><p>.babelrc 或 babelrc.js 或 babel.config.js:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>presets: [</span></span>
<span class="line"><span> &quot;@babel/preset-env&quot;,</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>只包含编译<strong>stage4</strong>的预设</p>`,9),h=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>presets: [</span></span>
<span class="line"><span>  // @babel/preset-env 只转换语法，不要提供 polyfill</span></span>
<span class="line"><span>  [</span></span>
<span class="line"><span>    &quot;@babel/preset-env&quot;, </span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      useBuiltIns: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>],</span></span></code></pre></div><h4 id="如何查看当前-babel-preset-env-包含了哪些预设呢" tabindex="-1">如何查看当前 @babel/preset-env 包含了哪些预设呢？ <a class="header-anchor" href="#如何查看当前-babel-preset-env-包含了哪些预设呢" aria-label="Permalink to &quot;如何查看当前 @babel/preset-env 包含了哪些预设呢？&quot;">​</a></h4>`,2),_=l(`<h2 id="vue-babel-preset-app" tabindex="-1">@vue/babel-preset-app <a class="header-anchor" href="#vue-babel-preset-app" aria-label="Permalink to &quot;@vue/babel-preset-app&quot;">​</a></h2><p>如果用 Vue，presets 一般是 @vue/app，这个是把在 @babel/preset-env 包含的 plugins 上又加了很多自己定义的 plugins。</p><p>默认的 Vue cli 项目会使用 @vue/babel-preset-app，默认配置了@babel/plugin-transform-runtime。</p><blockquote><p>package.json 文件里的 browserslist 字段 (或单独的 .browserslistrc 文件)，用来指定项目的目标浏览器。这个值会被 @babel/preset-env 和 autoprefixer 用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  presets: [</span></span>
<span class="line"><span>    &#39;@vue/app&#39;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,5),g=a("h2",{id:"babel-插件和预设执行顺序",tabindex:"-1"},[s("Babel 插件和预设执行顺序 "),a("a",{class:"header-anchor",href:"#babel-插件和预设执行顺序","aria-label":'Permalink to "Babel 插件和预设执行顺序"'},"​")],-1),v=a("ul",null,[a("li",null,[a("p",null,"插件 plugins 比预设 presets 先执行")]),a("li",null,[a("p",null,"插件 数组从前向后执行")]),a("li",null,[a("p",null,"预设 数组从后向前执行")])],-1),m=a("h2",{id:"es2020-语法配置demo",tabindex:"-1"},[s("ES2020 语法配置demo "),a("a",{class:"header-anchor",href:"#es2020-语法配置demo","aria-label":'Permalink to "ES2020 语法配置demo"'},"​")],-1),f=a("strong",null,"?.",-1),k=l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let obj = {}</span></span>
<span class="line"><span>obj?.foo?.xxx</span></span></code></pre></div>`,1),x=a("strong",null,"?.",-1),y=a("li",null,"获取项目中 @vue/babel-preset-app 版本，以此获取其依赖项 @babel/preset-env 版本",-1),C=a("li",null,"根据 @babel/preset-env 版本，确定是否包含 ES2020 特性",-1),T=a("li",null,"如果已包含，则项目中配置该预设就可以使用",-1),S=a("li",null,[s("如果不包含，则需要安装对应 "),a("a",{href:"https://babeljs.io/docs/plugins-list",target:"_blank",rel:"noreferrer"},"plugin")],-1),q=l(`<p>安装插件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install @babel/plugin-proposal-optional-chaining --save-dev</span></span></code></pre></div><p><strong>babel.config.js</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  presets: [</span></span>
<span class="line"><span>    &#39;@vue/app&#39;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    &#39;@babel/plugin-proposal-optional-chaining&#39;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>template 模板中支持</p><p><strong>vue.config.js</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chainWebpack: (config) =&gt; {</span></span>
<span class="line"><span>  config.module</span></span>
<span class="line"><span>    .rule(&#39;vue&#39;)</span></span>
<span class="line"><span>    .use(&#39;vue-loader&#39;)</span></span>
<span class="line"><span>    .tap(options =&gt; {</span></span>
<span class="line"><span>      options.compiler = require(&#39;vue-template-babel-compiler&#39;)</span></span>
<span class="line"><span>      return options</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="polyfill" tabindex="-1">polyfill <a class="header-anchor" href="#polyfill" aria-label="Permalink to &quot;polyfill&quot;">​</a></h2><p>ES6+ API 的方法与实现的集合叫做 polyfill，也就是经常说的&quot;垫片&quot;</p><h2 id="webpack中使用babel" tabindex="-1">webpack中使用babel <a class="header-anchor" href="#webpack中使用babel" aria-label="Permalink to &quot;webpack中使用babel&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module: {</span></span>
<span class="line"><span>  rules: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      test: /\\.js$/,</span></span>
<span class="line"><span>      exclude: /node_modules/,</span></span>
<span class="line"><span>      use: {</span></span>
<span class="line"><span>        loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span>        options: {</span></span>
<span class="line"><span>          presets: [&#39;@babel/preset-env&#39;], // 只进行语法转换</span></span>
<span class="line"><span>          plugins: [</span></span>
<span class="line"><span>            [</span></span>
<span class="line"><span>              // 将core-js交给transform-runtime处理 API，解决全局污染，避免重复定义</span></span>
<span class="line"><span>              &quot;@babel/plugin-transform-runtime&quot;</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                &quot;corejs&quot;: 3 // 推荐版本， 注意要安装@babel/runtime-corejs3</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因为我们用了 exclude: /node_modules/，可能会造成某个第三方依赖出现兼容性问题，解决办法就是在 vue.config.js 设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>transpileDependencies: [</span></span>
<span class="line"><span>  &#39;module-name&#39;</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,13);function P(A,j,B,I,V,E){const e=i("font");return c(),o("div",null,[b,d,n(e,{color:"#7A297B"},{default:p(()=>[s("编译ES6+最新语法，实现旧版本浏览器不支持的ES6+的API。")]),_:1}),u,n(e,{color:"#085820"},{default:p(()=>[s("@babel/preset-env 的 useBuiltIns 选项默认值是 false。")]),_:1}),s("这意味着使用这个 Babel 插件预设时，"),n(e,{color:"#085820"},{default:p(()=>[s("不会自动插入 polyfill。")]),_:1}),s("如果想要让 Babel 自动包含所需的 polyfill，需要显式地设置 useBuiltIns 选项（entry、usage）。"),h,n(e,{color:"#B21016"},{default:p(()=>[s("@babel/preset-env --> package.json --> dependencies 里面")]),_:1}),_,n(e,{color:"gray",size:"2"},{default:p(()=>[s("@vue/app 实际对应的是 @vue/babel-preset-app")]),_:1}),g,v,m,a("p",null,[s("以 "),n(e,{color:"#44000A"},{default:p(()=>[s("可选链操作符 "),f]),_:1}),s(" 为例：")]),k,a("ul",null,[a("li",null,[s("确定 "),n(e,{color:"#44000A"},{default:p(()=>[x]),_:1}),s(" 是 ES2020 新增特性")]),y,C,T,S]),q])}const D=t(r,[["render",P]]);export{N as __pageData,D as default};
