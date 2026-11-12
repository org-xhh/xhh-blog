import{_ as s,c as a,o as n,a3 as t}from"./chunks/framework.C5U8cnJv.js";const m=JSON.parse('{"title":"precommit 代码提交检查","description":"","frontmatter":{},"headers":[],"relativePath":"tool/gitsvn/precommit设置.md","filePath":"tool/gitsvn/precommit设置.md"}'),p={name:"tool/gitsvn/precommit设置.md"},e=t(`<h1 id="precommit-代码提交检查" tabindex="-1">precommit 代码提交检查 <a class="header-anchor" href="#precommit-代码提交检查" aria-label="Permalink to &quot;precommit 代码提交检查&quot;">​</a></h1><h3 id="老-husky-v1-方案" tabindex="-1">老 husky v1 方案 <a class="header-anchor" href="#老-husky-v1-方案" aria-label="Permalink to &quot;老 husky v1 方案&quot;">​</a></h3><p>1.安装模块(--save-dev)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;husky&quot;: &quot;^1.3.1&quot;</span></span>
<span class="line"><span>&quot;lint-staged&quot;: &quot;^12.3.4&quot;</span></span></code></pre></div><p>2.package.json 配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;husky&quot;: {</span></span>
<span class="line"><span>  &quot;hooks&quot;: {</span></span>
<span class="line"><span>     &quot;pre-commit&quot;: &quot;lint-staged&quot;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span> &quot;lint-staged&quot;: {</span></span>
<span class="line"><span>    &quot;src/**/*.{js,vue}&quot;: [</span></span>
<span class="line"><span>      &quot;prettier --write&quot;,</span></span>
<span class="line"><span>      &quot;eslint --fix&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>3.添加要提交的代码进暂存区，进行git commit操作，会依次执行 prettier --write和eslint --fix，代码格式如果有问题无法提交成功</p><p>如果想要越过检查，添加 --no-verify</p><p>备注：如果项目根目录自动生成.eslintcache缓存文件，想要去掉的话，查看是否有 &quot;eslint --cache --fix&quot; 配置，去掉--cache即可</p><h3 id="husky-v8-v9-lint-staged-主流" tabindex="-1">husky v8/v9 + lint-staged 主流 <a class="header-anchor" href="#husky-v8-v9-lint-staged-主流" aria-label="Permalink to &quot;husky v8/v9 + lint-staged 主流&quot;">​</a></h3><p><a href="https://typicode.github.io/husky/" target="_blank" rel="noreferrer">husky</a></p><ol><li>安装</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i -D husky lint-staged prettier eslint</span></span></code></pre></div><ol start="2"><li>package.json</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;prepare&quot;: &quot;husky install&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span>    &quot;src/**/*.{js,vue}&quot;: [</span></span>
<span class="line"><span>      &quot;prettier --write&quot;,</span></span>
<span class="line"><span>      &quot;eslint --fix&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>执行顺序：先 prettier 格式化，再 eslint 自动修复</li><li>lint-staged 只会处理<strong>本次 git 暂存区的文件</strong>，不会全量扫描整个项目，速度更快</li><li>lint-staged 修复完成后，会自动把修改后的文件重新 add 进暂存区</li></ul><ol start="3"><li>初始化 + 添加钩子</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 执行 prepare 脚本，初始化 husky，生成 .husky 目录</span></span>
<span class="line"><span>npm run prepare</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加 pre-commit 钩子，提交时执行 lint-staged</span></span>
<span class="line"><span>npx husky add .husky/pre-commit &quot;npx lint-staged&quot;</span></span></code></pre></div>`,18),i=[e];function l(o,c,u,r,d,h){return n(),a("div",null,i)}const q=s(p,[["render",l]]);export{m as __pageData,q as default};
