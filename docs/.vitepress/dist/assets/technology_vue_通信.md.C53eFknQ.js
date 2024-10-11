import{_ as l,D as o,c as i,j as s,I as e,w as t,a as n,a3 as p,o as c}from"./chunks/framework.C5U8cnJv.js";const Ts=JSON.parse('{"title":"通信","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/通信.md","filePath":"technology/vue/通信.md"}'),r={name:"technology/vue/通信.md"},d=s("h1",{id:"通信",tabindex:"-1"},[n("通信 "),s("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1),_=s("h2",{id:"vue3",tabindex:"-1"},[n("vue3 "),s("a",{class:"header-anchor",href:"#vue3","aria-label":'Permalink to "vue3"'},"​")],-1),h={id:"父子通信",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#父子通信","aria-label":'Permalink to "<font color=red>父子通信</font>"'},"​",-1),g=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>defineProps</span></span>
<span class="line"><span>defineEmits</span></span></code></pre></div>`,1),f={id:"defineexpose",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#defineexpose","aria-label":'Permalink to "<font color=red>defineExpose</font>"'},"​",-1),v=p(`<p>defineExpose 暴露出去的属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>子组件：</span></span>
<span class="line"><span>const list = ref([&#39;html&#39;,&#39;css&#39;])</span></span>
<span class="line"><span>defineExpose({list})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>父组件：</span></span>
<span class="line"><span>&lt;child ref=&quot;childRef&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const childRef = ref(null)</span></span>
<span class="line"><span>onMounted(()=&gt;{</span></span>
<span class="line"><span>    console.log(childRef.value.list)</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,2),m={id:"跨级组件通信",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#跨级组件通信","aria-label":'Permalink to "<font color=red>跨级组件通信</font>"'},"​",-1),x=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>provide  用于提供可以被后代组件注入的值。 </span></span>
<span class="line"><span>inject   注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值</span></span></code></pre></div>`,1),k={id:"attrs",tabindex:"-1"},S=s("a",{class:"header-anchor",href:"#attrs","aria-label":'Permalink to "<font color=red>attrs</font>"'},"​",-1),C=p(`<p>包含父作用域里除 class 和 style 除外的非 props 属性集合</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useAttrs } from &quot;vue&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const attrs = useAttrs()</span></span>
<span class="line"><span>console.log(attrs)</span></span></code></pre></div>`,2),P={id:"pinia",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#pinia","aria-label":'Permalink to "<font color=red>pinia</font>"'},"​",-1),q=p(`<p>状态管理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineStore } from &#39;pinia&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useCounterStore = defineStore(&#39;counter&#39;, {</span></span>
<span class="line"><span>  state: () =&gt; {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      count: 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 也可以定义为</span></span>
<span class="line"><span>  // state: () =&gt; ({ count: 0 })</span></span>
<span class="line"><span>  getters: {</span></span>
<span class="line"><span>    double: (state) =&gt; state.count * 2</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  actions: {</span></span>
<span class="line"><span>    increment() {</span></span>
<span class="line"><span>      this.count++</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { useCounterStore } from &#39;@/store/counter&#39;</span></span>
<span class="line"><span>const counter = useCounterStore()</span></span>
<span class="line"><span>counter.$patch({</span></span>
<span class="line"><span>  count: counter.count + 1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 或</span></span>
<span class="line"><span>// counter.$patch((state) =&gt; {</span></span>
<span class="line"><span>//   state.count = counter.count + 1</span></span>
<span class="line"><span>// })</span></span>
<span class="line"><span>// counter.increment()</span></span></code></pre></div>`,2),$={id:"localstorage、sessionstorage",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#localstorage、sessionstorage","aria-label":'Permalink to "<font color=red>localStorage、sessionStorage</font>"'},"​",-1),V=s("p",null,"都遵循同源策略：只有在相同的协议、域名和端口下，数据才能被访问。",-1),I=s("ul",null,[s("li",null,"sessionStorage:")],-1),E=s("p",null,"sessionStorage的会话在刷新当前tab时依然存在；新建tab时获取不到；",-1),N=s("p",null,"通过window.open新建tab后可以在新建会话时复制上一个会话，之后两个sessionStorage彼此独立。",-1),R=s("ul",null,[s("li",null,"localStorage")],-1),D=s("p",null,"数据持久存储，除非主动删除，否则数据不会过期，关闭浏览器窗口或标签页后数据依然存在；",-1),j=s("p",null,"同一浏览器同源网页共享数据。",-1),w={id:"app-config-globalproperties",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#app-config-globalproperties","aria-label":'Permalink to "<font color=red>app.config.globalProperties</font>"'},"​",-1),M=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span>app.config.globalProperties.msg = &#39;test&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { getCurrentInstance } from &quot;vue&quot;</span></span>
<span class="line"><span>const { proxy } = getCurrentInstance() // 使用proxy，类似于vue2的this</span></span>
<span class="line"><span>console.log(proxy.msg) // test</span></span></code></pre></div><h2 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h2>`,2),J={id:"父子通信-1",tabindex:"-1"},O=s("a",{class:"header-anchor",href:"#父子通信-1","aria-label":'Permalink to "<font color=red>父子通信</font>"'},"​",-1),z=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>props</span></span>
<span class="line"><span>$emit()</span></span></code></pre></div>`,1),F={id:"ref",tabindex:"-1"},G=s("a",{class:"header-anchor",href:"#ref","aria-label":'Permalink to "<font color=red>ref</font>"'},"​",-1),H=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;child ref=&quot;child&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const child = this.$refs.child</span></span>
<span class="line"><span>child.someMethod(&quot;调用子组件的方法&quot;)</span></span></code></pre></div>`,1),K={id:"attrs-listeners",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#attrs-listeners","aria-label":'Permalink to "<font color=red>$attrs / $listeners</font>"'},"​",-1),Q=p(`<p>$attrs：包含父作用域里除 class 和 style 除外的非 props 属性集合。通过 this.$attrs 获取父作用域中所有符合条件的属性集合，然后还要继续传给子组件内部的其他组件，就可以通过 v-bind=&quot;$attrs&quot;</p><p>$listeners：包含父作用域里 .native 除外的监听事件集合。如果还要继续传给子组件内部的其他组件，就可以通过 v-on=&quot;$linteners&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 父组件</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;child :name=&quot;name&quot; title=&quot;123&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span>&lt;/template</span></span>
<span class="line"><span>export default{</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            name: &quot;xhh&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子组件</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    // 继续传给孙组件</span></span>
<span class="line"><span>    &lt;sun-child v-bind=&quot;$attrs&quot;&gt;&lt;/sun-child&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>export default{</span></span>
<span class="line"><span>    props: [&quot;name&quot;], // 这里可以接收，也可以不接收</span></span>
<span class="line"><span>    mounted(){</span></span>
<span class="line"><span>        // 如果props接收了 name 就是 { title: 123 }，否则就是{ name: &quot;xhh&quot;, title: 123 }</span></span>
<span class="line"><span>        console.log(this.$attrs)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3),U={id:"children-parent",tabindex:"-1"},W=s("a",{class:"header-anchor",href:"#children-parent","aria-label":'Permalink to "<font color=red>$children / $parent</font>"'},"​",-1),X={id:"provide-inject",tabindex:"-1"},Y=s("a",{class:"header-anchor",href:"#provide-inject","aria-label":'Permalink to "<font color=red>provide / inject</font>"'},"​",-1),Z={id:"中央事件总线-eventbus",tabindex:"-1"},ss=s("a",{class:"header-anchor",href:"#中央事件总线-eventbus","aria-label":'Permalink to "<font color=red>中央事件总线 EventBus</font>"'},"​",-1),ns=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vue.prototype.$bus = new Vue()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$bus.$emit()</span></span>
<span class="line"><span>$bus.$on()</span></span>
<span class="line"><span>$bus.$off()</span></span></code></pre></div>`,1),as={id:"root",tabindex:"-1"},es=s("a",{class:"header-anchor",href:"#root","aria-label":'Permalink to "<font color=red>$root</font>"'},"​",-1),ts={id:"vuex",tabindex:"-1"},ps=s("a",{class:"header-anchor",href:"#vuex","aria-label":'Permalink to "<font color=red>Vuex</font>"'},"​",-1),ls=s("p",null,"状态管理",-1),os={id:"slot",tabindex:"-1"},is=s("a",{class:"header-anchor",href:"#slot","aria-label":'Permalink to "<font color=red>slot</font>"'},"​",-1),cs=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 子组件</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;slot :user=&quot;user&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>export default{</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            user: { </span></span>
<span class="line"><span>                name: &quot;xhh&quot; </span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 父组件</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;child v-slot=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>            {{ slotProps.user.name }}</span></span>
<span class="line"><span>        &lt;/child&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div>`,1),rs={id:"localstorage、sessionstorage-1",tabindex:"-1"},ds=s("a",{class:"header-anchor",href:"#localstorage、sessionstorage-1","aria-label":'Permalink to "<font color=red>localStorage、sessionStorage</font>"'},"​",-1);function _s(hs,us,gs,fs,bs,vs){const a=o("font");return c(),i("div",null,[d,_,s("h3",h,[e(a,{color:"red"},{default:t(()=>[n("父子通信")]),_:1}),n(),u]),g,s("h3",f,[e(a,{color:"red"},{default:t(()=>[n("defineExpose")]),_:1}),n(),b]),v,s("h3",m,[e(a,{color:"red"},{default:t(()=>[n("跨级组件通信")]),_:1}),n(),T]),x,s("h3",k,[e(a,{color:"red"},{default:t(()=>[n("attrs")]),_:1}),n(),S]),C,s("h3",P,[e(a,{color:"red"},{default:t(()=>[n("pinia")]),_:1}),n(),A]),q,s("h3",$,[e(a,{color:"red"},{default:t(()=>[n("localStorage、sessionStorage")]),_:1}),n(),y]),V,I,E,N,R,D,j,s("h3",w,[e(a,{color:"red"},{default:t(()=>[n("app.config.globalProperties")]),_:1}),n(),B]),M,s("h3",J,[e(a,{color:"red"},{default:t(()=>[n("父子通信")]),_:1}),n(),O]),z,s("h3",F,[e(a,{color:"red"},{default:t(()=>[n("ref")]),_:1}),n(),G]),H,s("h3",K,[e(a,{color:"red"},{default:t(()=>[n("$attrs / $listeners")]),_:1}),n(),L]),Q,s("h3",U,[e(a,{color:"red"},{default:t(()=>[n("$children / $parent")]),_:1}),n(),W]),s("h3",X,[e(a,{color:"red"},{default:t(()=>[n("provide / inject")]),_:1}),n(),Y]),s("h3",Z,[e(a,{color:"red"},{default:t(()=>[n("中央事件总线 EventBus")]),_:1}),n(),ss]),ns,s("h3",as,[e(a,{color:"red"},{default:t(()=>[n("$root")]),_:1}),n(),es]),s("h3",ts,[e(a,{color:"red"},{default:t(()=>[n("Vuex")]),_:1}),n(),ps]),ls,s("h3",os,[e(a,{color:"red"},{default:t(()=>[n("slot")]),_:1}),n(),is]),cs,s("h3",rs,[e(a,{color:"red"},{default:t(()=>[n("localStorage、sessionStorage")]),_:1}),n(),ds])])}const xs=l(r,[["render",_s]]);export{Ts as __pageData,xs as default};
