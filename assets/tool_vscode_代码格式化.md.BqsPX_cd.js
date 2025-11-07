import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const t="/xhh-blog/assets/image-12.CwCkHEOH.png",v=JSON.parse('{"title":"eslint、prettier","description":"","frontmatter":{},"headers":[],"relativePath":"tool/vscode/代码格式化.md","filePath":"tool/vscode/代码格式化.md"}'),p={name:"tool/vscode/代码格式化.md"},i=e(`<h1 id="eslint、prettier" tabindex="-1">eslint、prettier <a class="header-anchor" href="#eslint、prettier" aria-label="Permalink to &quot;eslint、prettier&quot;">​</a></h1><h2 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;prettier&quot;">​</a></h2><ol><li>vscode 安装 Prettier 插件</li><li>项目根目录新建 .prettierrc.js</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    endOfLine: &quot;lf&quot;, // 行结束符使用 Unix 格式</span></span>
<span class="line"><span>    semi: false,</span></span>
<span class="line"><span>    singleQuote: true,</span></span>
<span class="line"><span>    tabWidth: 2,</span></span>
<span class="line"><span>    useTabs: false,</span></span>
<span class="line"><span>    trailingComma: &quot;none&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>package.json 添加 script:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;format&quot;: &quot; prettier --write \\&quot;src/**/*.+(js|jsx|ts|tsx)\\&quot;&quot;</span></span></code></pre></div><p>执行命令 npm run format 自动修复</p><ol start="4"><li>根目录.vscode/settings:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span>&quot;editor.formatOnSave&quot;: true</span></span></code></pre></div><h2 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;eslint&quot;">​</a></h2><ol><li>vscode 安装 ESLint 插件</li><li>项目安装 eslint 模块</li><li>项目根目录新建 .eslintrc.js</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  env: {</span></span>
<span class="line"><span>    browser: true,</span></span>
<span class="line"><span>    es2021: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  extends: [</span></span>
<span class="line"><span>    &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span>    &#39;plugin:react/recommended&#39;,</span></span>
<span class="line"><span>    &#39;plugin:@typescript-eslint/recommended&#39;,</span></span>
<span class="line"><span>    &#39;plugin:prettier/recommended&#39;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  parser: &#39;@typescript-eslint/parser&#39;,</span></span>
<span class="line"><span>  parserOptions: {</span></span>
<span class="line"><span>    ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span>    sourceType: &#39;module&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [&#39;react&#39;, &#39;@typescript-eslint&#39;],</span></span>
<span class="line"><span>  rules: {}</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li>package.json 添加 script:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;lint&quot;: &quot;eslint --fix \\&quot;src/**/*.+(js|jsx|ts|tsx)\\&quot;&quot;</span></span></code></pre></div><p>执行命令 npm run lint 自动修复</p><ol start="5"><li>根目录.vscode/settings:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;eslint.format.enable&quot;: true,</span></span>
<span class="line"><span>  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>    &quot;source.fixAll.eslint&quot;: &quot;explicit&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>eslint.format.enable：开启eslint格式化功能，文件内右击选择Format Document With 即可看到eslint选项。</p><p>editor.codeActionsOnSave：代码保存时，就会通过 eslint 自动格式化代码</p><h2 id="eslint-和-prettier-冲突处理" tabindex="-1">eslint 和 prettier 冲突处理 <a class="header-anchor" href="#eslint-和-prettier-冲突处理" aria-label="Permalink to &quot;eslint 和 prettier 冲突处理&quot;">​</a></h2><ol><li>使用第三方包处理</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>eslint-config-prettier</span></span>
<span class="line"><span>eslint-plugin-prettier</span></span>
<span class="line"><span>prettier</span></span></code></pre></div><p>eslint配置文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  extends: [&#39;eslint:recommended&#39;, &#39;plugin:prettier/recommended&#39;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这样配置，ESLint格式化时就会忽略跟Prettier冲突的格式规则，交由Prettier进行格式化。</p><ol start="2"><li>使用二者中的一个进行代码格式化</li></ol><p>针对 js、ts、jsx 关闭(Prettier)文件保存自动格式化功能，让eslint处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;[javascript]&quot;: { </span></span>
<span class="line"><span>  &quot;editor.formatOnSave&quot;: false </span></span>
<span class="line"><span>}, </span></span>
<span class="line"><span>&quot;[javascriptreact]&quot;: {</span></span>
<span class="line"><span>  &quot;editor.formatOnSave&quot;: false</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>&quot;[typescript]&quot;: {</span></span>
<span class="line"><span>  &quot;editor.formatOnSave&quot;: false</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="安装模块" tabindex="-1">安装模块 <a class="header-anchor" href="#安装模块" aria-label="Permalink to &quot;安装模块&quot;">​</a></h2><p><img src="`+t+'" alt="alt text"></p>',30),l=[i];function o(c,r,d,u,h,g){return n(),a("div",null,l)}const b=s(p,[["render",o]]);export{v as __pageData,b as default};
