import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const p="/xhh-blog/assets/image-12.CwCkHEOH.png",b=JSON.parse('{"title":"eslint、prettier","description":"","frontmatter":{},"headers":[],"relativePath":"tool/vscode/代码格式化.md","filePath":"tool/vscode/代码格式化.md"}'),t={name:"tool/vscode/代码格式化.md"},i=e('<h1 id="eslint、prettier" tabindex="-1">eslint、prettier <a class="header-anchor" href="#eslint、prettier" aria-label="Permalink to &quot;eslint、prettier&quot;">​</a></h1><p>以 react19 项目为例</p><h2 id="安装模块" tabindex="-1">安装模块 <a class="header-anchor" href="#安装模块" aria-label="Permalink to &quot;安装模块&quot;">​</a></h2><p><img src="'+p+`" alt="alt text"></p><h2 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;prettier&quot;">​</a></h2><ol><li>vscode 安装 Prettier 插件</li><li>项目根目录新建 .prettierrc.js</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    endOfLine: &quot;lf&quot;, // 行结束符使用 Unix 格式</span></span>
<span class="line"><span>    semi: false,</span></span>
<span class="line"><span>    singleQuote: true,</span></span>
<span class="line"><span>    tabWidth: 2,</span></span>
<span class="line"><span>    useTabs: false,</span></span>
<span class="line"><span>    trailingComma: &quot;none&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>package.json 添加 script:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;format&quot;: &quot; prettier --write \\&quot;src/**/*.+(js|jsx|ts|tsx)\\&quot;&quot;</span></span></code></pre></div><p>执行命令 npm run format 自动修复</p><h2 id="eslint" tabindex="-1">eslint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;eslint&quot;">​</a></h2><ol><li>vscode 安装 ESLint 插件</li><li>项目根目录新建 .eslintrc.js</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>package.json 添加 script:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;lint&quot;: &quot;eslint --fix \\&quot;src/**/*.+(js|jsx|ts|tsx)\\&quot;&quot;</span></span></code></pre></div><p>执行命令 npm run lint 自动修复</p><ol start="4"><li>根目录新建 .vscode/settings:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>    &quot;source.fixAll.eslint&quot;: &quot;explicit&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>代码保存时，就会通过 eslint 和 prettier 自动格式化代码</p>`,19),l=[i];function o(c,r,d,u,h,m){return n(),a("div",null,l)}const v=s(t,[["render",o]]);export{b as __pageData,v as default};
