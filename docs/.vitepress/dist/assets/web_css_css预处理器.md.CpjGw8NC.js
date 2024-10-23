import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.C5U8cnJv.js";const b=JSON.parse('{"title":"CSS预处理器：SASS、SCSS、LESS、Stylus","description":"","frontmatter":{},"headers":[],"relativePath":"web/css/css预处理器.md","filePath":"web/css/css预处理器.md"}'),e={name:"web/css/css预处理器.md"},l=p(`<h1 id="css预处理器-sass、scss、less、stylus" tabindex="-1">CSS预处理器：SASS、SCSS、LESS、Stylus <a class="header-anchor" href="#css预处理器-sass、scss、less、stylus" aria-label="Permalink to &quot;CSS预处理器：SASS、SCSS、LESS、Stylus&quot;">​</a></h1><h2 id="sass" tabindex="-1">SASS <a class="header-anchor" href="#sass" aria-label="Permalink to &quot;SASS&quot;">​</a></h2><ol><li>变量：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$primary-color: #0055fe;</span></span>
<span class="line"><span>$base-font-size: 16px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>  background-color: $primary-color;</span></span>
<span class="line"><span>  font-size: $base-font-size;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>混合：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@mixin box-shadow($shadow) {</span></span>
<span class="line"><span>  -webkit-box-shadow: $shadow;</span></span>
<span class="line"><span>          box-shadow: $shadow;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.button {</span></span>
<span class="line"><span>  @include box-shadow(0 2px 4px rgba(0, 0, 0, 0.1));</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="scss" tabindex="-1">SCSS <a class="header-anchor" href="#scss" aria-label="Permalink to &quot;SCSS&quot;">​</a></h2><p>SCSS 是 SASS 语法的一种扩展，继承了SASS的所有高级特性。</p><h2 id="less" tabindex="-1">LESS <a class="header-anchor" href="#less" aria-label="Permalink to &quot;LESS&quot;">​</a></h2><ol><li>变量</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@primary-color: #0055fe;</span></span>
<span class="line"><span>@base-font-size: 16px;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>  background-color: @primary-color;</span></span>
<span class="line"><span>  font-size: @base-font-size;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用操作符</span></span>
<span class="line"><span>.container {</span></span>
<span class="line"><span>  padding: (@base-font-size * 1.5);</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="2"><li>混合</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// @radius：变量必须@开头</span></span>
<span class="line"><span>.border-radius(@radius) {</span></span>
<span class="line"><span>  border-radius: @radius;</span></span>
<span class="line"><span>  -moz-border-radius: @radius;</span></span>
<span class="line"><span>  -webkit-border-radius: @radius;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.button {</span></span>
<span class="line"><span>  .border-radius(5px);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="stylus" tabindex="-1">Stylus <a class="header-anchor" href="#stylus" aria-label="Permalink to &quot;Stylus&quot;">​</a></h2><p>Stylus的语法非常宽松，去除了许多不必要的符号，如分号和括号。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 简洁的变量定义和使用</span></span>
<span class="line"><span>primaryColor = #0055fe</span></span>
<span class="line"><span>baseFontSize = 16px</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body</span></span>
<span class="line"><span>  backgroundColor primaryColor</span></span>
<span class="line"><span>  fontSize baseFontSize</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 嵌套规则</span></span>
<span class="line"><span>.container</span></span>
<span class="line"><span>  width 100%</span></span>
<span class="line"><span>  .content</span></span>
<span class="line"><span>    padding 10px</span></span>
<span class="line"><span>    &amp;:hover</span></span>
<span class="line"><span>      backgroundColor darken(primaryColor, 10%)</span></span></code></pre></div>`,16),i=[l];function o(t,c,r,d,h,S){return n(),a("div",null,i)}const g=s(e,[["render",o]]);export{b as __pageData,g as default};
