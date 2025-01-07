import{_ as l,D as o,c as i,j as s,I as e,w as p,a,a3 as t,o as c}from"./chunks/framework.C5U8cnJv.js";const us=JSON.parse('{"title":"通信","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/通信.md","filePath":"technology/vue/通信.md"}'),r={name:"technology/vue/通信.md"},d=s("h1",{id:"通信",tabindex:"-1"},[a("通信 "),s("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1),_=s("h2",{id:"vue3",tabindex:"-1"},[a("vue3 "),s("a",{class:"header-anchor",href:"#vue3","aria-label":'Permalink to "vue3"'},"​")],-1),h={id:"父子通信",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#父子通信","aria-label":'Permalink to "<font color=red>父子通信</font>"'},"​",-1),g=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>defineProps</span></span>
<span class="line"><span>defineEmits</span></span></code></pre></div>`,1),f={id:"defineexpose",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#defineexpose","aria-label":'Permalink to "<font color=red>defineExpose</font>"'},"​",-1),v=t(`<p>defineExpose 暴露出去的属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>子组件：</span></span>
<span class="line"><span>const list = ref([&#39;html&#39;,&#39;css&#39;])</span></span>
<span class="line"><span>defineExpose({list})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>父组件：</span></span>
<span class="line"><span>&lt;child ref=&quot;childRef&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const childRef = ref(null)</span></span>
<span class="line"><span>onMounted(()=&gt;{</span></span>
<span class="line"><span>    console.log(childRef.value.list)</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,2),m={id:"跨级组件通信",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#跨级组件通信","aria-label":'Permalink to "<font color=red>跨级组件通信</font>"'},"​",-1),k=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>provide  用于提供可以被后代组件注入的值。 </span></span>
<span class="line"><span>inject   注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值</span></span></code></pre></div>`,1),x={id:"attrs",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#attrs","aria-label":'Permalink to "<font color=red>attrs</font>"'},"​",-1),S=t(`<p>包含父作用域里除 class 和 style 除外的非 props 属性集合</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useAttrs } from &quot;vue&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const attrs = useAttrs()</span></span>
<span class="line"><span>console.log(attrs)</span></span></code></pre></div>`,2),P={id:"pinia",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#pinia","aria-label":'Permalink to "<font color=red>pinia</font>"'},"​",-1),q=t(`<p>状态管理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineStore } from &#39;pinia&#39;</span></span>
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
<span class="line"><span>// counter.increment()</span></span></code></pre></div>`,2),y={id:"localstorage、sessionstorage",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#localstorage、sessionstorage","aria-label":'Permalink to "<font color=red>localStorage、sessionStorage</font>"'},"​",-1),$=t(`<p>都遵循同源策略：只有在相同的协议、域名和端口下，数据才能被访问。</p><ul><li>sessionStorage:</li></ul><p>sessionStorage的会话在刷新当前tab时依然存在；新建tab时获取不到；</p><p>通过window.open新建tab后可以在新建会话时复制上一个会话，之后两个sessionStorage彼此独立。</p><ul><li>localStorage</li></ul><p>数据持久存储，除非主动删除，否则数据不会过期，关闭浏览器窗口或标签页后数据依然存在；</p><p>同一浏览器同源网页共享数据。</p><p>补充：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.addEventListener(&#39;storage&#39;, function(e) {</span></span>
<span class="line"><span>    console.log(&#39;监听storage变化:&#39;, e.key, e.newValue, e.oldValue)</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,9),I={id:"app-config-globalproperties",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#app-config-globalproperties","aria-label":'Permalink to "<font color=red>app.config.globalProperties</font>"'},"​",-1),N=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span>app.config.globalProperties.msg = &#39;test&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { getCurrentInstance } from &quot;vue&quot;</span></span>
<span class="line"><span>const { proxy } = getCurrentInstance() // 使用proxy，类似于vue2的this</span></span>
<span class="line"><span>console.log(proxy.msg) // test</span></span></code></pre></div><h2 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h2>`,2),R={id:"父子通信-1",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#父子通信-1","aria-label":'Permalink to "<font color=red>父子通信</font>"'},"​",-1),w=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>props</span></span>
<span class="line"><span>$emit()</span></span></code></pre></div>`,1),j={id:"ref",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#ref","aria-label":'Permalink to "<font color=red>ref</font>"'},"​",-1),M=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;child ref=&quot;child&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const child = this.$refs.child</span></span>
<span class="line"><span>child.someMethod(&quot;调用子组件的方法&quot;)</span></span></code></pre></div>`,1),J={id:"attrs-listeners",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#attrs-listeners","aria-label":'Permalink to "<font color=red>$attrs / $listeners</font>"'},"​",-1),O=t(`<p>$attrs：包含父作用域里除 class 和 style 除外的非 props 属性集合。通过 this.$attrs 获取父作用域中所有符合条件的属性集合，然后还要继续传给子组件内部的其他组件，就可以通过 v-bind=&quot;$attrs&quot;</p><p>$listeners：包含父作用域里 .native 除外的监听事件集合。如果还要继续传给子组件内部的其他组件，就可以通过 v-on=&quot;$linteners&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 父组件</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,3),z={id:"children-parent",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#children-parent","aria-label":'Permalink to "<font color=red>$children / $parent</font>"'},"​",-1),G={id:"provide-inject",tabindex:"-1"},H=s("a",{class:"header-anchor",href:"#provide-inject","aria-label":'Permalink to "<font color=red>provide / inject</font>"'},"​",-1),K={id:"中央事件总线-eventbus",tabindex:"-1"},Q=s("a",{class:"header-anchor",href:"#中央事件总线-eventbus","aria-label":'Permalink to "<font color=red>中央事件总线 EventBus</font>"'},"​",-1),U=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vue.prototype.$bus = new Vue()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$bus.$emit()</span></span>
<span class="line"><span>$bus.$on()</span></span>
<span class="line"><span>$bus.$off()</span></span></code></pre></div>`,1),W={id:"root",tabindex:"-1"},X=s("a",{class:"header-anchor",href:"#root","aria-label":'Permalink to "<font color=red>$root</font>"'},"​",-1),Y={id:"vuex",tabindex:"-1"},Z=s("a",{class:"header-anchor",href:"#vuex","aria-label":'Permalink to "<font color=red>Vuex</font>"'},"​",-1),ss=s("p",null,"状态管理",-1),as={id:"slot",tabindex:"-1"},ns=s("a",{class:"header-anchor",href:"#slot","aria-label":'Permalink to "<font color=red>slot</font>"'},"​",-1),es=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 子组件</span></span>
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
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div>`,1),ps={id:"localstorage、sessionstorage-1",tabindex:"-1"},ts=s("a",{class:"header-anchor",href:"#localstorage、sessionstorage-1","aria-label":'Permalink to "<font color=red>localStorage、sessionStorage</font>"'},"​",-1);function ls(os,is,cs,rs,ds,_s){const n=o("font");return c(),i("div",null,[d,_,s("h3",h,[e(n,{color:"red"},{default:p(()=>[a("父子通信")]),_:1}),a(),u]),g,s("h3",f,[e(n,{color:"red"},{default:p(()=>[a("defineExpose")]),_:1}),a(),b]),v,s("h3",m,[e(n,{color:"red"},{default:p(()=>[a("跨级组件通信")]),_:1}),a(),T]),k,s("h3",x,[e(n,{color:"red"},{default:p(()=>[a("attrs")]),_:1}),a(),C]),S,s("h3",P,[e(n,{color:"red"},{default:p(()=>[a("pinia")]),_:1}),a(),A]),q,s("h3",y,[e(n,{color:"red"},{default:p(()=>[a("localStorage、sessionStorage")]),_:1}),a(),V]),$,s("h3",I,[e(n,{color:"red"},{default:p(()=>[a("app.config.globalProperties")]),_:1}),a(),E]),N,s("h3",R,[e(n,{color:"red"},{default:p(()=>[a("父子通信")]),_:1}),a(),D]),w,s("h3",j,[e(n,{color:"red"},{default:p(()=>[a("ref")]),_:1}),a(),B]),M,s("h3",J,[e(n,{color:"red"},{default:p(()=>[a("$attrs / $listeners")]),_:1}),a(),L]),O,s("h3",z,[e(n,{color:"red"},{default:p(()=>[a("$children / $parent")]),_:1}),a(),F]),s("h3",G,[e(n,{color:"red"},{default:p(()=>[a("provide / inject")]),_:1}),a(),H]),s("h3",K,[e(n,{color:"red"},{default:p(()=>[a("中央事件总线 EventBus")]),_:1}),a(),Q]),U,s("h3",W,[e(n,{color:"red"},{default:p(()=>[a("$root")]),_:1}),a(),X]),s("h3",Y,[e(n,{color:"red"},{default:p(()=>[a("Vuex")]),_:1}),a(),Z]),ss,s("h3",as,[e(n,{color:"red"},{default:p(()=>[a("slot")]),_:1}),a(),ns]),es,s("h3",ps,[e(n,{color:"red"},{default:p(()=>[a("localStorage、sessionStorage")]),_:1}),a(),ts])])}const gs=l(r,[["render",ls]]);export{us as __pageData,gs as default};
