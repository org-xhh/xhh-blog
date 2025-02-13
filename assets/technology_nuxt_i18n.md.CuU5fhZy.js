import{_ as n,c as a,o as s,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-3.CUkrqTj3.png",l="/xhh-blog/assets/image-4.ACIXXG8I.png",b=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[],"relativePath":"technology/nuxt/i18n.md","filePath":"technology/nuxt/i18n.md"}'),t={name:"technology/nuxt/i18n.md"},i=p('<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h1><h3 id="_1-npm-i-nuxtjs-i18n-7-save" tabindex="-1">1. npm i @nuxtjs/i18n@7 --save <a class="header-anchor" href="#_1-npm-i-nuxtjs-i18n-7-save" aria-label="Permalink to &quot;1. npm i @nuxtjs/i18n@7 --save&quot;">​</a></h3><p>nuxt2 对应 @nuxtjs/i18n@7</p><h3 id="_2-配置多语言" tabindex="-1">2. 配置多语言 <a class="header-anchor" href="#_2-配置多语言" aria-label="Permalink to &quot;2. 配置多语言&quot;">​</a></h3><p><img src="'+e+`" alt="alt text"></p><h3 id="_3-创建-i18n-实例" tabindex="-1">3. 创建 i18n 实例 <a class="header-anchor" href="#_3-创建-i18n-实例" aria-label="Permalink to &quot;3. 创建 i18n 实例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import enLocale from &#39;element-ui/lib/locale/lang/en&#39;</span></span>
<span class="line"><span>import zhLocale from &#39;element-ui/lib/locale/lang/zh-CN&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import zh from &#39;./zh&#39;</span></span>
<span class="line"><span>import en from &#39;./en&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const i18n = {</span></span>
<span class="line"><span>  locales: [&#39;en&#39;, &#39;zh&#39;],</span></span>
<span class="line"><span>  strategy: &#39;no_prefix&#39;, // 不使用语言前缀</span></span>
<span class="line"><span>  defaultLocale: &#39;zh&#39;,</span></span>
<span class="line"><span>  vueI18n: {</span></span>
<span class="line"><span>    fallbackLocale: &#39;en&#39;, // 回退策略</span></span>
<span class="line"><span>    messages: {</span></span>
<span class="line"><span>      zh: {</span></span>
<span class="line"><span>        ...zh,</span></span>
<span class="line"><span>        ...zhLocale</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      en: {</span></span>
<span class="line"><span>        ...en,</span></span>
<span class="line"><span>        ...enLocale</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // detectBrowserLanguage: {</span></span>
<span class="line"><span>    // useCookie: true // 默认存cookie：i18n_redirected,例如zh</span></span>
<span class="line"><span>  // }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default i18n</span></span></code></pre></div><p>如果手动删除cookie(i18n_redirected)，那默认语言会取浏览器设置的。 <img src="`+l+`" alt="alt text"></p><h3 id="_4-nuxt-config-js-i18n-配置" tabindex="-1">4. nuxt.config.js i18n 配置 <a class="header-anchor" href="#_4-nuxt-config-js-i18n-配置" aria-label="Permalink to &quot;4. nuxt.config.js i18n 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import i18n from &#39;../../src/language&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>modules: [</span></span>
<span class="line"><span>    &#39;@nuxtjs/axios&#39;,</span></span>
<span class="line"><span>    &#39;@nuxtjs/style-resources&#39;,</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &#39;@nuxtjs/i18n&#39;,</span></span>
<span class="line"><span>      i18n</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span></code></pre></div><h3 id="_5-element-ui-组件配置多语言切换" tabindex="-1">5. element-ui 组件配置多语言切换 <a class="header-anchor" href="#_5-element-ui-组件配置多语言切换" aria-label="Permalink to &quot;5. element-ui 组件配置多语言切换&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import Element from &#39;element-ui&#39;</span></span>
<span class="line"><span>import locale from &#39;element-ui/lib/locale/lang/zh-CN&#39; // 默认</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default ({</span></span>
<span class="line"><span>  app</span></span>
<span class="line"><span>}) =&gt; {</span></span>
<span class="line"><span>  Vue.use(Element, {</span></span>
<span class="line"><span>    locale,</span></span>
<span class="line"><span>    i18n: (key, value) =&gt; app.i18n.t(key, value)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-切换语言" tabindex="-1">6. 切换语言 <a class="header-anchor" href="#_6-切换语言" aria-label="Permalink to &quot;6. 切换语言&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;span&gt;{{ $t(&#39;common.lang&#39;) }}&lt;/span&gt;</span></span>
<span class="line"><span>&lt;button @click=&quot;translateLang(&#39;zh&#39;)&quot;&gt;切换为中文&lt;/button&gt;</span></span>
<span class="line"><span>&lt;button @click=&quot;translateLang(&#39;en&#39;)&quot;&gt;切换为英文&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>translateLang(lang) {</span></span>
<span class="line"><span>    this.$i18n.setLocale(lang)</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><p>参考文档： <a href="https://i18n.nuxtjs.org/docs/getting-started" target="_blank" rel="noreferrer">https://i18n.nuxtjs.org/docs/getting-started</a></p>`,16),c=[i];function o(r,h,u,d,g,m){return s(),a("div",null,c)}const x=n(t,[["render",o]]);export{b as __pageData,x as default};
