import{_ as s,c as n,o as e,a3 as a}from"./chunks/framework.C5U8cnJv.js";const g=JSON.parse('{"title":"代码规范与格式化","description":"","frontmatter":{},"headers":[],"relativePath":"tool/vscode/ESLint+Prettier代码规范配置.md","filePath":"tool/vscode/ESLint+Prettier代码规范配置.md"}'),t={name:"tool/vscode/ESLint+Prettier代码规范配置.md"},p=a(`<h1 id="代码规范与格式化" tabindex="-1">代码规范与格式化 <a class="header-anchor" href="#代码规范与格式化" aria-label="Permalink to &quot;代码规范与格式化&quot;">​</a></h1><h2 id="prettier-格式化工具" tabindex="-1">Prettier（格式化工具） <a class="header-anchor" href="#prettier-格式化工具" aria-label="Permalink to &quot;Prettier（格式化工具）&quot;">​</a></h2><ol><li>vscode 安装 Prettier 插件(配置 <code>.prettierrc.js</code> + <code>.vscode/settings.json</code>)</li><li>项目安装 prettier 包(命令行脚本 <code>prettier --write</code>)</li><li>项目根目录新建 .prettierrc.js</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    endOfLine: &quot;lf&quot;, // 行结束符使用 Unix 格式</span></span>
<span class="line"><span>    semi: false,</span></span>
<span class="line"><span>    singleQuote: true,</span></span>
<span class="line"><span>    tabWidth: 2,</span></span>
<span class="line"><span>    useTabs: false,</span></span>
<span class="line"><span>    trailingComma: &quot;none&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li>package.json 添加 script:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;format&quot;: &quot;prettier --write \\&quot;src/**/*.+(js|jsx|ts|tsx|vue)\\&quot;&quot;</span></span></code></pre></div><p>执行命令 npm run format 自动修复代码格式</p><ol start="5"><li>根目录.vscode/settings.json:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 全局默认格式化器</span></span>
<span class="line"><span>&quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span>// 格式化交给 prettier</span></span>
<span class="line"><span>&quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span>// 优先使用项目内的 prettier 包版本，保证编辑器和命令行格式化结果一致</span></span>
<span class="line"><span>&quot;prettier.useLocalVersion&quot;: true</span></span></code></pre></div><h2 id="eslint-lint-校验工具" tabindex="-1">ESLint（Lint 校验工具） <a class="header-anchor" href="#eslint-lint-校验工具" aria-label="Permalink to &quot;ESLint（Lint 校验工具）&quot;">​</a></h2><ol><li>vscode 安装 ESLint 插件</li><li>项目安装 eslint 模块</li></ol><ul><li><code>plugin:react/recommended</code> → <code>eslint-plugin-react</code></li><li><code>plugin:@typescript-eslint/recommended</code> → <code>@typescript-eslint/parser</code>、<code>@typescript-eslint/eslint-plugin</code></li><li><code>plugin:prettier/recommended</code> → <code>eslint-plugin-prettier</code>、<code>eslint-config-prettier</code></li><li><code>react-refresh/only-export-components</code> → <code>eslint-plugin-react-refresh</code></li></ul><ol start="3"><li>项目根目录新建 .eslintrc.js</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
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
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    // 只保留【代码质量、逻辑类规则】，格式化规则用 .prettierrc.js</span></span>
<span class="line"><span>    &#39;prefer-const&#39;: 0, // 0 代表 off（关闭）、1 代表 warn（警告）</span></span>
<span class="line"><span>    &#39;no-var&#39;: 2, // 2 代表 error（报错）</span></span>
<span class="line"><span>    &#39;@typescript-eslint/no-unused-expressions&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;@typescript-eslint/no-explicit-any&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;react-refresh/only-export-components&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;@typescript-eslint/no-this-alias&#39;: &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;react-hooks/exhaustive-deps&#39;: &#39;off&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li>package.json 添加 script:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;lint&quot;: &quot;eslint --fix \\&quot;src/**/*.+(js|jsx|ts|tsx)\\&quot;&quot;</span></span></code></pre></div><p>执行 <code>npm run lint</code>：自动修复可修复的 eslint 代码问题；无法修复的错误直接抛出。</p><ol start="5"><li>根目录.vscode/settings:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>    &quot;source.fixAll.eslint&quot;: &quot;explicit&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>eslint.format.enable：让 eslint 插件<strong>提供格式化能力</strong>；（这里不要开启，格式化由 prettier 处理）</p><p>editor.codeActionsOnSave：保存时执行eslint自动修复代码质量问题</p><h3 id="如果项目是vue项目-额外要改" tabindex="-1">如果项目是Vue项目，额外要改 <a class="header-anchor" href="#如果项目是vue项目-额外要改" aria-label="Permalink to &quot;如果项目是Vue项目，额外要改&quot;">​</a></h3><ol><li>安装：<code>npm i -D eslint-plugin-vue</code></li><li>extends增加：<code>plugin:vue/vue3-recommended</code>（vue3）</li><li>parser 改成 <code>vue-eslint-parser</code></li><li>lint脚本后缀加上 <code>vue</code></li><li>plugins增加 <code>vue</code></li></ol><h2 id="eslint-和-prettier-冲突处理" tabindex="-1">ESLint 和 Prettier 冲突处理 <a class="header-anchor" href="#eslint-和-prettier-冲突处理" aria-label="Permalink to &quot;ESLint 和 Prettier 冲突处理&quot;">​</a></h2><ol><li>使用第三方包处理（推荐）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>eslint-config-prettier</span></span>
<span class="line"><span>eslint-plugin-prettier</span></span>
<span class="line"><span>prettier</span></span></code></pre></div><blockquote><p><code>plugin:prettier/recommended</code>（放在 extends 数组最后）：格式化交给 prettier，eslint只做代码质量校验，等价于：</p><ol><li>开启 <code>eslint-config-prettier</code>：关闭 ESLint 里面和 Prettier 冲突的格式化规则</li><li>开启 <code>eslint-plugin-prettier</code>：把 Prettier 的格式化结果当成 ESLint 的一条 rule（prettier 规则），校验不通过就报 eslint 错误，并且可以被 <code>--fix</code> 修复</li></ol></blockquote><blockquote><p>编辑器这边：配置 <code>&quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</code>，开启 <code>editor.formatOnSave</code>，指定默认格式化器为 Prettier；也可以单独给 js/ts/vue 等文件类型单独指定 formatter，优先级更高。</p></blockquote><p>eslint配置文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  extends: [&#39;eslint:recommended&#39;, &#39;plugin:prettier/recommended&#39;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>eslint 作为格式化器</li></ol><p>.vscode/settings.json:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  // 格式化器能力（右键【格式化文档】）</span></span>
<span class="line"><span>  &quot;eslint.format.enable&quot;: true,</span></span>
<span class="line"><span>  // 全局默认格式化器改成 eslint</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;dbaeumer.vscode-eslint&quot;,</span></span>
<span class="line"><span>  &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 单独给js/ts/jsx指定，防止其他插件抢占</span></span>
<span class="line"><span>  &quot;[javascript]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;dbaeumer.vscode-eslint&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[javascriptreact]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;dbaeumer.vscode-eslint&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[typescript]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;dbaeumer.vscode-eslint&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[typescriptreact]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;dbaeumer.vscode-eslint&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // lint修复</span></span>
<span class="line"><span>  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>    &quot;source.fixAll.eslint&quot;: &quot;explicit&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>而且 .eslintrc 里<strong>不能有 <code>plugin:prettier/recommended</code></strong>，要自己维护所有格式化 rules（就是 semi、quotes、indent 这些）。</p><hr><p>参考文档：</p><p><a href="https://www.tkcnn.com/eslint/rules.html" target="_blank" rel="noreferrer">https://www.tkcnn.com/eslint/rules.html</a></p><p><a href="https://prettier.io/docs/options" target="_blank" rel="noreferrer">https://prettier.io/docs/options</a></p>`,38),i=[p];function l(o,c,r,d,u,h){return e(),n("div",null,i)}const q=s(t,[["render",l]]);export{g as __pageData,q as default};
