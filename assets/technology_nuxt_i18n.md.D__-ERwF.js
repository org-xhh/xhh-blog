import{_ as t,D as i,c,I as p,w as e,j as n,a,a3 as l,o}from"./chunks/framework.C5U8cnJv.js";const r="/xhh-blog/assets/image-3.CUkrqTj3.png",h="/xhh-blog/assets/image-4.ACIXXG8I.png",u="/xhh-blog/assets/image-5.CRQnfm6p.png",z=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[],"relativePath":"technology/nuxt/i18n.md","filePath":"technology/nuxt/i18n.md"}'),d={name:"technology/nuxt/i18n.md"},g=n("h1",{id:"国际化",tabindex:"-1"},[a("国际化 "),n("a",{class:"header-anchor",href:"#国际化","aria-label":'Permalink to "国际化"'},"​")],-1),m=n("hr",null,null,-1),b=l('<h3 id="_1-npm-i-nuxtjs-i18n-7-save" tabindex="-1">1. npm i @nuxtjs/i18n@7 --save <a class="header-anchor" href="#_1-npm-i-nuxtjs-i18n-7-save" aria-label="Permalink to &quot;1. npm i @nuxtjs/i18n@7 --save&quot;">​</a></h3><p>nuxt2 对应 @nuxtjs/i18n@7</p><h3 id="_2-配置多语言" tabindex="-1">2. 配置多语言 <a class="header-anchor" href="#_2-配置多语言" aria-label="Permalink to &quot;2. 配置多语言&quot;">​</a></h3><p><img src="'+r+`" alt="alt text"></p><h3 id="_3-创建-i18n-实例" tabindex="-1">3. 创建 i18n 实例 <a class="header-anchor" href="#_3-创建-i18n-实例" aria-label="Permalink to &quot;3. 创建 i18n 实例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import enLocale from &#39;element-ui/lib/locale/lang/en&#39;</span></span>
<span class="line"><span>import zhLocale from &#39;element-ui/lib/locale/lang/zh-CN&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import zh from &#39;./zh&#39;</span></span>
<span class="line"><span>import en from &#39;./en&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const i18n = {</span></span>
<span class="line"><span>  locales: [&#39;en&#39;, &#39;zh&#39;],</span></span>
<span class="line"><span>  strategy: &#39;no_prefix&#39;, // 不使用语言前缀</span></span>
<span class="line"><span>  // defaultLocale: &#39;zh&#39;, // 默认获取navigator.language的值</span></span>
<span class="line"><span>  vueI18n: {</span></span>
<span class="line"><span>    // fallbackLocale: &#39;en&#39;, // 回退策略</span></span>
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
<span class="line"><span>export default i18n</span></span></code></pre></div><p>如果手动删除cookie(i18n_redirected)，那默认语言会取浏览器设置的。 <img src="`+h+`" alt="alt text"></p><h3 id="_4-nuxt-config-js-i18n-配置" tabindex="-1">4. nuxt.config.js i18n 配置 <a class="header-anchor" href="#_4-nuxt-config-js-i18n-配置" aria-label="Permalink to &quot;4. nuxt.config.js i18n 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import i18n from &#39;../../src/language&#39;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-切换语言" tabindex="-1">6. 切换语言 <a class="header-anchor" href="#_6-切换语言" aria-label="Permalink to &quot;6. 切换语言&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;button @click=&quot;translateLang(&#39;zh&#39;)&quot;&gt;切换为中文&lt;/button&gt;</span></span>
<span class="line"><span>&lt;button @click=&quot;translateLang(&#39;en&#39;)&quot;&gt;切换为英文&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>translateLang(lang) {</span></span>
<span class="line"><span>  this.$i18n.setLocale(lang)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_7-使用" tabindex="-1">7. 使用 <a class="header-anchor" href="#_7-使用" aria-label="Permalink to &quot;7. 使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;span&gt;{{ $t(&#39;common.lang&#39;) }}&lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\${this.$t(&#39;common.orderPrice&#39;)}</span></span></code></pre></div><p>在 js文件中 中使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.$nuxt.$t(&#39;common.lang&#39;)</span></span></code></pre></div><hr>`,18),v=l('<h3 id="_1-npm-i-nuxtjs-i18n-7-save-1" tabindex="-1">1. npm i @nuxtjs/i18n@7 --save <a class="header-anchor" href="#_1-npm-i-nuxtjs-i18n-7-save-1" aria-label="Permalink to &quot;1. npm i @nuxtjs/i18n@7 --save&quot;">​</a></h3><p>nuxt2 对应 @nuxtjs/i18n@7</p><h3 id="_2-配置多语言-1" tabindex="-1">2. 配置多语言 <a class="header-anchor" href="#_2-配置多语言-1" aria-label="Permalink to &quot;2. 配置多语言&quot;">​</a></h3><p><img src="'+u+`" alt="alt text"></p><h3 id="_3-创建-i18n-实例-1" tabindex="-1">3. 创建 i18n 实例 <a class="header-anchor" href="#_3-创建-i18n-实例-1" aria-label="Permalink to &quot;3. 创建 i18n 实例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import zh from &#39;./zh&#39;</span></span>
<span class="line"><span>import en from &#39;./en&#39;</span></span>
<span class="line"><span>import ur from &#39;./ur&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 默认语言取navigator.language的值，匹配不到是en</span></span>
<span class="line"><span>const i18n = {</span></span>
<span class="line"><span>  locales: [&#39;en&#39;, &#39;zh&#39;, &#39;ur&#39;],</span></span>
<span class="line"><span>  strategy: &#39;no_prefix&#39;, // 不使用语言前缀</span></span>
<span class="line"><span>  vueI18n: {</span></span>
<span class="line"><span>    messages: {</span></span>
<span class="line"><span>      zh,</span></span>
<span class="line"><span>      en,</span></span>
<span class="line"><span>      ur</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  detectBrowserLanguage: {</span></span>
<span class="line"><span>    cookieKey: &#39;test-h5-i18n&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default i18n</span></span></code></pre></div><h3 id="_4-nuxt-config-js-i18n-配置-1" tabindex="-1">4. nuxt.config.js i18n 配置 <a class="header-anchor" href="#_4-nuxt-config-js-i18n-配置-1" aria-label="Permalink to &quot;4. nuxt.config.js i18n 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import i18n from &#39;../../src/language&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>modules: [</span></span>
<span class="line"><span>    &#39;@nuxtjs/axios&#39;,</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>      &#39;@nuxtjs/i18n&#39;,</span></span>
<span class="line"><span>      i18n</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span></code></pre></div><h3 id="_5-vant-组件配置多语言切换" tabindex="-1">5. vant 组件配置多语言切换 <a class="header-anchor" href="#_5-vant-组件配置多语言切换" aria-label="Permalink to &quot;5. vant 组件配置多语言切换&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import Vant from &#39;vant&#39;</span></span>
<span class="line"><span>import &#39;vant/lib/index.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件库多语言</span></span>
<span class="line"><span>import { Locale } from &#39;vant&#39;</span></span>
<span class="line"><span>import enUS from &#39;vant/es/locale/lang/en-US&#39;</span></span>
<span class="line"><span>import zhCN from &#39;vant/es/locale/lang/zh-CN&#39;</span></span>
<span class="line"><span>import Ur from &#39;../language/ur-lang&#39;</span></span>
<span class="line"><span>function locales(lang) {</span></span>
<span class="line"><span>  let language = lang || navigator.language</span></span>
<span class="line"><span>  if (language === &#39;zh&#39; || language === &#39;zh-CN&#39;) {</span></span>
<span class="line"><span>    Locale.use(&#39;zh&#39;, zhCN)</span></span>
<span class="line"><span>  } else if (language === &#39;ur&#39;) {</span></span>
<span class="line"><span>    Locale.use(&#39;ur&#39;, Ur)</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    Locale.use(&#39;en&#39;, enUS)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 保证业务和组件库默认语言统一</span></span>
<span class="line"><span>locales(getCookie(&#39;test-h5-i18n&#39;) || navigator.language) // 初始化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getCookie(name) {</span></span>
<span class="line"><span>  let matches = document.cookie.match(new RegExp(</span></span>
<span class="line"><span>    &#39;(?:^|; )&#39; + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, &#39;\\\\$1&#39;) + &#39;=([^;]*)&#39;</span></span>
<span class="line"><span>  ))</span></span>
<span class="line"><span>  return matches ? decodeURIComponent(matches[1]) : undefined</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(Vant)</span></span>
<span class="line"><span>Vue.prototype.$Locale = locales</span></span></code></pre></div><h3 id="_6-切换语言-1" tabindex="-1">6. 切换语言 <a class="header-anchor" href="#_6-切换语言-1" aria-label="Permalink to &quot;6. 切换语言&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>button @click=&quot;translateLang(&#39;zh&#39;)&quot;&gt;切换为中文&lt;/button&gt;</span></span>
<span class="line"><span>&lt;button @click=&quot;translateLang(&#39;en&#39;)&quot;&gt;切换为英文&lt;/button&gt;</span></span>
<span class="line"><span>&lt;button @click=&quot;translateLang(&#39;ur&#39;)&quot;&gt;切换为乌尔都语&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>translateLang(lang) {</span></span>
<span class="line"><span>  this.$i18n.setLocale(lang) // 业务</span></span>
<span class="line"><span>  this.$Locale(lang) // vant组件库</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_7-使用-1" tabindex="-1">7. 使用 <a class="header-anchor" href="#_7-使用-1" aria-label="Permalink to &quot;7. 使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;span&gt;{{ $t(&#39;common.lang&#39;) }}&lt;/span&gt;</span></span></code></pre></div><p>在 js文件中 中使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export function testUtil() {</span></span>
<span class="line"><span>  return window.$nuxt.$t(&#39;common.lang&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { testUtil } from &#39;@/utils/index&#39;</span></span>
<span class="line"><span>methods: {</span></span>
<span class="line"><span>  testUtil: testUtil // 不要把方法赋值给变量，会失去响应式</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;{{ testUtil() }}&lt;/div&gt;</span></span></code></pre></div><hr><p>参考文档： <a href="https://i18n.nuxtjs.org/docs/getting-started" target="_blank" rel="noreferrer">https://i18n.nuxtjs.org/docs/getting-started</a></p>`,18);function _(x,f,k,C,q,y){const s=i("font");return o(),c("div",null,[g,m,p(s,{size:"4"},{default:e(()=>[a("和element-ui组件库配合使用：")]),_:1}),b,p(s,{size:"4"},{default:e(()=>[a("和vant组件库配合使用：")]),_:1}),v])}const L=t(d,[["render",_]]);export{z as __pageData,L as default};
