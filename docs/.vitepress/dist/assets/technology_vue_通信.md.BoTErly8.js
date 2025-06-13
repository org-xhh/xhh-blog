import{_ as l,D as o,c as i,j as s,I as e,w as p,a,a3 as t,o as c}from"./chunks/framework.C5U8cnJv.js";const Ts=JSON.parse('{"title":"通信","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/通信.md","filePath":"technology/vue/通信.md"}'),r={name:"technology/vue/通信.md"},d=s("h1",{id:"通信",tabindex:"-1"},[a("通信 "),s("a",{class:"header-anchor",href:"#通信","aria-label":'Permalink to "通信"'},"​")],-1),h=s("h2",{id:"vue3",tabindex:"-1"},[a("vue3 "),s("a",{class:"header-anchor",href:"#vue3","aria-label":'Permalink to "vue3"'},"​")],-1),_={id:"父子通信",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#父子通信","aria-label":'Permalink to "<font color=red>父子通信</font>"'},"​",-1),g=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>defineProps</span></span>
<span class="line"><span>defineEmits</span></span></code></pre></div>`,1),b={id:"defineexpose",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#defineexpose","aria-label":'Permalink to "<font color=red>defineExpose</font>"'},"​",-1),v=t(`<p>父组件通过 ref 获取子组件实例，调用子组件defineExpose暴露的方法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>子组件：</span></span>
<span class="line"><span>const list = ref([&#39;html&#39;,&#39;css&#39;])</span></span>
<span class="line"><span>defineExpose({list})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>父组件：</span></span>
<span class="line"><span>&lt;child ref=&quot;childRef&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const childRef = ref(null)</span></span>
<span class="line"><span>onMounted(()=&gt;{</span></span>
<span class="line"><span>    console.log(childRef.value.list)</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,2),m={id:"跨级组件通信",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#跨级组件通信","aria-label":'Permalink to "<font color=red>跨级组件通信</font>"'},"​",-1),C=t(`<p>provide 用于提供可以被后代组件注入的值。</p><p>inject 注入一个由祖先组件或整个应用 (通过 app.provide()) 提供的值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app.provide(&#39;globalUserType&#39;, 1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { inject } from &#39;vue&#39;</span></span>
<span class="line"><span>let userType = ref(inject(&#39;globalUserType&#39;))</span></span></code></pre></div><p>为注入值设置默认值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>inject(&#39;varNum&#39;, &#39;defaultValue&#39;);</span></span></code></pre></div>`,5),k={id:"attrs",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#attrs","aria-label":'Permalink to "<font color=red>attrs</font>"'},"​",-1),P=t(`<p>属性透传</p><p>包含父作用域里除 class 和 style 除外的非 props 属性集合</p><p>在js中使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useAttrs } from &quot;vue&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const attrs = useAttrs()</span></span>
<span class="line"><span>console.log(attrs)</span></span></code></pre></div><p>在template中使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{{ $attrs }}</span></span></code></pre></div><p>多层透传，当前组件的子组件subComp就能获取到$attrs：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;subComp v-bind=&quot;$attrs&quot; /&gt;</span></span></code></pre></div>`,8),S={id:"pinia",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#pinia","aria-label":'Permalink to "<font color=red>pinia</font>"'},"​",-1),y=t(`<p>状态管理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { defineStore } from &#39;pinia&#39;</span></span>
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
<span class="line"><span>// counter.increment()</span></span></code></pre></div>`,2),q={id:"事件总线-mitt",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#事件总线-mitt","aria-label":'Permalink to "<font color=red>事件总线（Mitt）</font>"'},"​",-1),I=t(`<p>适用于无直接关系的组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install mitt</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// eventBus.js</span></span>
<span class="line"><span>import mitt from &#39;mitt&#39;;</span></span>
<span class="line"><span>export default mitt();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件A 发送消息</span></span>
<span class="line"><span>import bus from &#39;../utils/eventBus&#39;;</span></span>
<span class="line"><span>bus.emit(&#39;bus-message&#39;, { username: &#39;xhh&#39; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 组件B 监听消息</span></span>
<span class="line"><span>import bus from &#39;../utils/eventBus&#39;;</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  bus.on(&#39;bus-message&#39;, (data) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;接收消息:&#39;, data);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>onUnmounted(() =&gt; {</span></span>
<span class="line"><span>  bus.off(&#39;bus-message&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div>`,2),$={id:"localstorage、sessionstorage",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#localstorage、sessionstorage","aria-label":'Permalink to "<font color=red>localStorage、sessionStorage</font>"'},"​",-1),N=t(`<p>都遵循同源策略：只有在相同的协议、域名和端口下，数据才能被访问。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>window.addEventListener(&#39;storage&#39;, function(e) {</span></span>
<span class="line"><span>    console.log(&#39;监听storage变化:&#39;, e.key, e.newValue, e.oldValue)</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,2),R={id:"app-config-globalproperties",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#app-config-globalproperties","aria-label":'Permalink to "<font color=red>app.config.globalProperties</font>"'},"​",-1),B=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span>app.config.globalProperties.msg = &#39;test&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { getCurrentInstance } from &quot;vue&quot;</span></span>
<span class="line"><span>const { proxy } = getCurrentInstance() // 使用proxy，类似于vue2的this</span></span>
<span class="line"><span>console.log(proxy.msg) // test</span></span></code></pre></div>`,1),j={id:"broadcastchannel-api",tabindex:"-1"},M=s("a",{class:"header-anchor",href:"#broadcastchannel-api","aria-label":'Permalink to "<font color=red>BroadcastChannel API</font>"'},"​",-1),w=t(`<p>‌BroadcastChannel API‌ 是 HTML5 引入的一个 Web API，允许同一源（同一域名、协议和端口）下的多个浏览器窗口、标签页、iframe 或服务工作线程之间进行消息传递。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const sendMessage = () =&gt; {</span></span>
<span class="line"><span>  // 创建 BroadcastChannel 实例</span></span>
<span class="line"><span>  const channel = new BroadcastChannel(&quot;channelName&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 发送消息</span></span>
<span class="line"><span>  channel.postMessage(&quot;origin Message&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 接收消息</span></span>
<span class="line"><span>const channel = new BroadcastChannel(&quot;channelName&quot;)</span></span>
<span class="line"><span>channel.onmessage = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(&quot;收到的消息:&quot;, event.data)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="vue2" tabindex="-1">vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;vue2&quot;">​</a></h2>`,3),U={id:"父子通信-1",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#父子通信-1","aria-label":'Permalink to "<font color=red>父子通信</font>"'},"​",-1),H=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>props</span></span>
<span class="line"><span>$emit()</span></span></code></pre></div>`,1),J={id:"ref",tabindex:"-1"},O=s("a",{class:"header-anchor",href:"#ref","aria-label":'Permalink to "<font color=red>ref</font>"'},"​",-1),W=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;child ref=&quot;child&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const child = this.$refs.child</span></span>
<span class="line"><span>child.someMethod(&quot;调用子组件的方法&quot;)</span></span></code></pre></div>`,1),z={id:"attrs-listeners",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#attrs-listeners","aria-label":'Permalink to "<font color=red>$attrs / $listeners</font>"'},"​",-1),G=t(`<p>$attrs：包含父作用域里除 class 和 style 除外的非 props 属性集合。通过 this.$attrs 获取父作用域中所有符合条件的属性集合，然后还要继续传给子组件内部的其他组件，就可以通过 v-bind=&quot;$attrs&quot;</p><p>$listeners：包含父作用域里 .native 除外的监听事件集合。如果还要继续传给子组件内部的其他组件，就可以通过 v-on=&quot;$linteners&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 父组件</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,3),K={id:"children-parent",tabindex:"-1"},Q=s("a",{class:"header-anchor",href:"#children-parent","aria-label":'Permalink to "<font color=red>$children / $parent</font>"'},"​",-1),X={id:"provide-inject",tabindex:"-1"},Y=s("a",{class:"header-anchor",href:"#provide-inject","aria-label":'Permalink to "<font color=red>provide / inject</font>"'},"​",-1),Z={id:"中央事件总线-eventbus",tabindex:"-1"},ss=s("a",{class:"header-anchor",href:"#中央事件总线-eventbus","aria-label":'Permalink to "<font color=red>中央事件总线 EventBus</font>"'},"​",-1),as=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vue.prototype.$bus = new Vue()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$bus.$emit()</span></span>
<span class="line"><span>$bus.$on()</span></span>
<span class="line"><span>$bus.$off()</span></span></code></pre></div>`,1),ns={id:"root",tabindex:"-1"},es=s("a",{class:"header-anchor",href:"#root","aria-label":'Permalink to "<font color=red>$root</font>"'},"​",-1),ps={id:"vuex",tabindex:"-1"},ts=s("a",{class:"header-anchor",href:"#vuex","aria-label":'Permalink to "<font color=red>Vuex</font>"'},"​",-1),ls=s("p",null,"状态管理",-1),os={id:"slot",tabindex:"-1"},is=s("a",{class:"header-anchor",href:"#slot","aria-label":'Permalink to "<font color=red>slot</font>"'},"​",-1),cs=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 子组件</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;slot :user=&quot;user&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>export default{</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>            user: {</span></span>
<span class="line"><span>                name: &quot;xhh&quot;</span></span>
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
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div>`,1),rs={id:"localstorage、sessionstorage-1",tabindex:"-1"},ds=s("a",{class:"header-anchor",href:"#localstorage、sessionstorage-1","aria-label":'Permalink to "<font color=red>localStorage、sessionStorage</font>"'},"​",-1);function hs(_s,us,gs,bs,fs,vs){const n=o("font");return c(),i("div",null,[d,h,s("h3",_,[e(n,{color:"red"},{default:p(()=>[a("父子通信")]),_:1}),a(),u]),g,s("h3",b,[e(n,{color:"red"},{default:p(()=>[a("defineExpose")]),_:1}),a(),f]),v,s("h3",m,[e(n,{color:"red"},{default:p(()=>[a("跨级组件通信")]),_:1}),a(),T]),C,s("h3",k,[e(n,{color:"red"},{default:p(()=>[a("attrs")]),_:1}),a(),x]),P,s("h3",S,[e(n,{color:"red"},{default:p(()=>[a("pinia")]),_:1}),a(),A]),y,s("h3",q,[e(n,{color:"red"},{default:p(()=>[a("事件总线（Mitt）")]),_:1}),a(),V]),I,s("h3",$,[e(n,{color:"red"},{default:p(()=>[a("localStorage、sessionStorage")]),_:1}),a(),E]),N,s("h3",R,[e(n,{color:"red"},{default:p(()=>[a("app.config.globalProperties")]),_:1}),a(),D]),B,s("h3",j,[e(n,{color:"red"},{default:p(()=>[a("BroadcastChannel API")]),_:1}),a(),M]),w,s("h3",U,[e(n,{color:"red"},{default:p(()=>[a("父子通信")]),_:1}),a(),L]),H,s("h3",J,[e(n,{color:"red"},{default:p(()=>[a("ref")]),_:1}),a(),O]),W,s("h3",z,[e(n,{color:"red"},{default:p(()=>[a("$attrs / $listeners")]),_:1}),a(),F]),G,s("h3",K,[e(n,{color:"red"},{default:p(()=>[a("$children / $parent")]),_:1}),a(),Q]),s("h3",X,[e(n,{color:"red"},{default:p(()=>[a("provide / inject")]),_:1}),a(),Y]),s("h3",Z,[e(n,{color:"red"},{default:p(()=>[a("中央事件总线 EventBus")]),_:1}),a(),ss]),as,s("h3",ns,[e(n,{color:"red"},{default:p(()=>[a("$root")]),_:1}),a(),es]),s("h3",ps,[e(n,{color:"red"},{default:p(()=>[a("Vuex")]),_:1}),a(),ts]),ls,s("h3",os,[e(n,{color:"red"},{default:p(()=>[a("slot")]),_:1}),a(),is]),cs,s("h3",rs,[e(n,{color:"red"},{default:p(()=>[a("localStorage、sessionStorage")]),_:1}),a(),ds])])}const Cs=l(r,[["render",hs]]);export{Ts as __pageData,Cs as default};
