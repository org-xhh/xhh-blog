import{_ as n,c as a,o as s,a3 as p}from"./chunks/framework.C5U8cnJv.js";const e="/xhh-blog/assets/image-2.S_Gfkx0P.png",b=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/i18n.md","filePath":"technology/vue/i18n.md"}'),l={name:"technology/vue/i18n.md"},i=p('<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h1><h3 id="_1-npm-i-vue-i18n-8-save" tabindex="-1">1. npm i vue-i18n@8 --save <a class="header-anchor" href="#_1-npm-i-vue-i18n-8-save" aria-label="Permalink to &quot;1. npm i vue-i18n@8 --save&quot;">​</a></h3><h3 id="_2-配置多语言" tabindex="-1">2. 配置多语言 <a class="header-anchor" href="#_2-配置多语言" aria-label="Permalink to &quot;2. 配置多语言&quot;">​</a></h3><p><img src="'+e+`" alt="alt text"></p><h3 id="_3-创建-i18n-实例" tabindex="-1">3. 创建 i18n 实例 <a class="header-anchor" href="#_3-创建-i18n-实例" aria-label="Permalink to &quot;3. 创建 i18n 实例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import VueI18n from &#39;vue-i18n&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import enLocale from &#39;element-ui/lib/locale/lang/en&#39;</span></span>
<span class="line"><span>import zhLocale from &#39;element-ui/lib/locale/lang/zh-CN&#39;</span></span>
<span class="line"><span>// import ElementLocale from &#39;element-ui/lib/locale&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 语言包</span></span>
<span class="line"><span>import zh from &#39;./zh&#39;</span></span>
<span class="line"><span>import en from &#39;./en&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(VueI18n)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const messages = {</span></span>
<span class="line"><span>  zh: {</span></span>
<span class="line"><span>    ...zh,</span></span>
<span class="line"><span>    ...zhLocale</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  en: {</span></span>
<span class="line"><span>    ...en,</span></span>
<span class="line"><span>    ...enLocale</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const i18n = new VueI18n({</span></span>
<span class="line"><span>  messages,</span></span>
<span class="line"><span>  locale: localStorage[&#39;internationLang&#39;] || &#39;zh&#39; // navigator.language</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ElementLocale.i18n((key, value) =&gt; i18n.t(key, value)) // element-ui 组件配置多语言切换</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default i18n</span></span></code></pre></div><h3 id="_4-引入" tabindex="-1">4. 引入 <a class="header-anchor" href="#_4-引入" aria-label="Permalink to &quot;4. 引入&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import i18n from &#39;./language&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>import ElementUI from &#39;element-ui&#39;</span></span>
<span class="line"><span>import &#39;element-ui/lib/theme-chalk/index.css&#39;</span></span>
<span class="line"><span>import zhLocale from &#39;element-ui/lib/locale/lang/zh-CN&#39; // lang i18n</span></span>
<span class="line"><span>Vue.use(ElementUI, {</span></span>
<span class="line"><span>  zhLocale,</span></span>
<span class="line"><span>  i18n: (key, value) =&gt; i18n.t(key, value) // 加上这句，支持乌尔都语</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>  el: &#39;#app&#39;,</span></span>
<span class="line"><span>  router,</span></span>
<span class="line"><span>  store,</span></span>
<span class="line"><span>  i18n,</span></span>
<span class="line"><span>  render: h =&gt; h(App)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="_5-切换语言" tabindex="-1">5. 切换语言 <a class="header-anchor" href="#_5-切换语言" aria-label="Permalink to &quot;5. 切换语言&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;translateLang(&#39;zh&#39;)&quot;&gt;切换为中文&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;translateLang(&#39;en&#39;)&quot;&gt;切换为英文&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;span&gt;{{ $t(&#39;common.lang&#39;) }}&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>translateLang(lang) {</span></span>
<span class="line"><span>    this.$i18n.locale = lang</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-使用" tabindex="-1">6. 使用 <a class="header-anchor" href="#_6-使用" aria-label="Permalink to &quot;6. 使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;span&gt;{{ $t(&#39;common.lang&#39;) }}&lt;/span&gt;</span></span></code></pre></div><p>在 js文件 中使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import i18n from &#39;../language&#39;</span></span>
<span class="line"><span>i18n.t(&#39;common.lang&#39;)</span></span></code></pre></div><hr><p>参考文档： <a href="https://element.eleme.cn/#/zh-CN/component/i18n" target="_blank" rel="noreferrer">https://element.eleme.cn/#/zh-CN/component/i18n</a></p>`,16),t=[i];function c(o,r,h,u,d,m){return s(),a("div",null,t)}const v=n(l,[["render",c]]);export{b as __pageData,v as default};
