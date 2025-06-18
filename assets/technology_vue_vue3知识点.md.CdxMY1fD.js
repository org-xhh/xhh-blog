import{_ as p,D as e,c as l,j as c,a,I as i,w as t,a3 as n,o}from"./chunks/framework.C5U8cnJv.js";const u="/xhh-blog/assets/image-3.C7Iq01n0.png",w=JSON.parse('{"title":"vue3","description":"","frontmatter":{},"headers":[],"relativePath":"technology/vue/vue3知识点.md","filePath":"technology/vue/vue3知识点.md"}'),h={name:"technology/vue/vue3知识点.md"},d=n(`<h1 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;vue3&quot;">​</a></h1><h2 id="torefs-toref" tabindex="-1">toRefs, toRef <a class="header-anchor" href="#torefs-toref" aria-label="Permalink to &quot;toRefs, toRef&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let person = reactive({</span></span>
<span class="line"><span>  name: &#39;张三&#39;,</span></span>
<span class="line"><span>  age: 19</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 解构出来的name不是响应式的，修改name不会触发person.name改变</span></span>
<span class="line"><span>let { name, age } = person</span></span>
<span class="line"><span>function changeName() {</span></span>
<span class="line"><span>  name += &#39;~&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let { name } = toRefs(person)</span></span>
<span class="line"><span>console.log(&#39;name---&#39;, name) // ObjectRefImpl</span></span>
<span class="line"><span>function changeName() {</span></span>
<span class="line"><span>  name.value += &#39;~&#39; // person.name 会改变</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// or</span></span>
<span class="line"><span>let name = toRef(person, &#39;name&#39;)</span></span>
<span class="line"><span>console.log(&#39;name---&#39;, name) // ObjectRefImpl</span></span>
<span class="line"><span>function changeName() {</span></span>
<span class="line"><span>  name.value += &#39;~&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let num1 = ref(0)</span></span>
<span class="line"><span>let num2 = ref(0)</span></span>
<span class="line"><span>// let sum = computed(() =&gt; {</span></span>
<span class="line"><span>//   return (parseFloat(num1.value) || 0) + (parseFloat(num2.value) || 0)</span></span>
<span class="line"><span>// })</span></span>
<span class="line"><span>// // computed 计算有缓存，只读</span></span>
<span class="line"><span>// function changeComputedValue() {</span></span>
<span class="line"><span>//   sum.value = 222 // computed value is readonly</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span>let sum = computed({</span></span>
<span class="line"><span>  get() {</span></span>
<span class="line"><span>    return (parseFloat(num1.value) || 0) + (parseFloat(num2.value) || 0)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set(val) {</span></span>
<span class="line"><span>    // console.log(&#39;value&#39;, val)</span></span>
<span class="line"><span>    const [n1, n2] = val.split(&#39;-&#39;)</span></span>
<span class="line"><span>    num1.value = n1</span></span>
<span class="line"><span>    num2.value = n2</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>function changeComputedValue() {</span></span>
<span class="line"><span>  sum.value = &#39;8-9&#39; // 触发 set 方法, num1,num2和sum都改变</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+u+`" alt="alt text"></p><h2 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h2><p>watch 可以监听：</p><ol><li>ref定义的数据</li><li>reactive定义的数据</li><li>函数返回一个值(getter函数)</li><li>一个包含上述内容的数组</li></ol><h3 id="ref定义的基本类型" tabindex="-1">ref定义的基本类型 <a class="header-anchor" href="#ref定义的基本类型" aria-label="Permalink to &quot;ref定义的基本类型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let val1 = ref(0)</span></span>
<span class="line"><span>const stopWatch = watch(val1, (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span>  console.log(newValue, oldValue)</span></span>
<span class="line"><span>  if (newValue &gt;= 10) {</span></span>
<span class="line"><span>    stopWatch() // 移除监听</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>function changeSum() {</span></span>
<span class="line"><span>  val1.value += 1</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="ref定义的对象类型" tabindex="-1">ref定义的对象类型 <a class="header-anchor" href="#ref定义的对象类型" aria-label="Permalink to &quot;ref定义的对象类型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let val2 = ref({</span></span>
<span class="line"><span>  name: 0</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// val2对象的地址值变化才能监听到；只改name监听不到</span></span>
<span class="line"><span>watch(val2, (newValue) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;监听val2变化&#39;, newValue)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>function changeVal2Name() {</span></span>
<span class="line"><span>  // val2.value.name += &#39;~&#39; // 监听不到</span></span>
<span class="line"><span>  val2.value = { name: 1 }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>优化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let val2 = ref({</span></span>
<span class="line"><span>  name: 0</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>watch(</span></span>
<span class="line"><span>  val2,</span></span>
<span class="line"><span>  (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span>    // val2.value.name += &#39;~&#39; =&gt; newValue, oldValue 都是新值，因为它们是同一个对象 (true)</span></span>
<span class="line"><span>    console.log(&#39;监听val2变化&#39;, newValue, oldValue, newValue === oldValue)</span></span>
<span class="line"><span>    // val2.value = { name: 1 } =&gt; newValue是新值，oldValue是旧值，不是一个对象了 (false)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  { deep: true } // 需要开启deep才能监听到ref定义的对象属性变化</span></span>
<span class="line"><span>  // immediate: true</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>function changeVal2Name() {</span></span>
<span class="line"><span>  val2.value.name += &#39;~&#39;</span></span>
<span class="line"><span>  // val2.value = { name: 1 }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="reactive定义的对象类型" tabindex="-1">reactive定义的对象类型 <a class="header-anchor" href="#reactive定义的对象类型" aria-label="Permalink to &quot;reactive定义的对象类型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let val3 = reactive({</span></span>
<span class="line"><span>  name: 0</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// reactive定义的对象类型监听时默认开启了深度监听deep，且无法关闭</span></span>
<span class="line"><span>watch(val3, (newValue) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;监听val3变化&#39;, newValue)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>function changeVal3Name() {</span></span>
<span class="line"><span>  // val3.name = 888</span></span>
<span class="line"><span>  Object.assign(val3, { name: 999 })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="一个函数返回一个值-getter函数" tabindex="-1">一个函数返回一个值(getter函数) <a class="header-anchor" href="#一个函数返回一个值-getter函数" aria-label="Permalink to &quot;一个函数返回一个值(getter函数)&quot;">​</a></h3><h4 id="监听响应式对象某个属性-且该属性是基本类型" tabindex="-1">监听响应式对象某个属性，且该属性是基本类型： <a class="header-anchor" href="#监听响应式对象某个属性-且该属性是基本类型" aria-label="Permalink to &quot;监听响应式对象某个属性，且该属性是基本类型：&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let val3 = reactive({</span></span>
<span class="line"><span>  name: 0,</span></span>
<span class="line"><span>  age: 18</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>watch(</span></span>
<span class="line"><span>  () =&gt; val3.name,</span></span>
<span class="line"><span>  (newValue) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;监听val3.name变化&#39;, newValue)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>function changeVal3Name() {</span></span>
<span class="line"><span>  val3.name = 888</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="监听响应式对象某个属性-且该属性是对象类型" tabindex="-1">监听响应式对象某个属性，且该属性是对象类型： <a class="header-anchor" href="#监听响应式对象某个属性-且该属性是对象类型" aria-label="Permalink to &quot;监听响应式对象某个属性，且该属性是对象类型：&quot;">​</a></h4><p>这种写法兼听不到对象整体改变：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let val3 = reactive({</span></span>
<span class="line"><span>  name: 0,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>  obj: {</span></span>
<span class="line"><span>    count: 1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>watch(val3.obj, (newValue) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;监听val3.obj变化&#39;, newValue)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>function changeVal3Name() {</span></span>
<span class="line"><span>  val3.obj.count = 2</span></span>
<span class="line"><span>  // val3.obj = { count: 3 } // 整体改变，这个监听obj监听不到</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这种写法监听不到属性改变：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let val3 = reactive({</span></span>
<span class="line"><span>  name: 0,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>  obj: {</span></span>
<span class="line"><span>    count: 1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>watch(</span></span>
<span class="line"><span>  () =&gt; val3.obj,</span></span>
<span class="line"><span>  (newValue) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;监听val3.obj变化&#39;, newValue)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>function changeVal3Name() {</span></span>
<span class="line"><span>  // val3.obj.count = 2 // 这个写法属性改变监听不到</span></span>
<span class="line"><span>  val3.obj = { count: 3 }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>优化：</p>`,27),r=n(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let val3 = reactive({</span></span>
<span class="line"><span>  name: 0,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>  obj: {</span></span>
<span class="line"><span>    count: 1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>watch(</span></span>
<span class="line"><span>  () =&gt; val3.obj,</span></span>
<span class="line"><span>  (newValue) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;监听val3.obj变化&#39;, newValue)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    deep: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>function changeVal3Name() {</span></span>
<span class="line"><span>  // val3.obj.count = 2 // 2种写法都能监听到</span></span>
<span class="line"><span>  val3.obj = { count: 3 }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="监听一个包含上述内容的数组" tabindex="-1">监听一个包含上述内容的数组 <a class="header-anchor" href="#监听一个包含上述内容的数组" aria-label="Permalink to &quot;监听一个包含上述内容的数组&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>watch(</span></span>
<span class="line"><span>  [val2, () =&gt; val3.obj],</span></span>
<span class="line"><span>  (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;监听&#39;, newValue, oldValue)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    deep: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="watcheffect" tabindex="-1">watchEffect <a class="header-anchor" href="#watcheffect" aria-label="Permalink to &quot;watchEffect&quot;">​</a></h2><p>watchEffect 响应式地追踪其依赖，并在依赖更改时重新执行该函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;一上来就执行一次watchEffect&#39;)</span></span>
<span class="line"><span>  // num1、num2 任何一个发生变化都会执行</span></span>
<span class="line"><span>  if (num1.value &gt;= 10 || num2.value &gt;= 10) {</span></span>
<span class="line"><span>    console.log(&#39;超过10&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre></div>`,6);function v(g,m,b,f,k,V){const s=e("font");return o(),l("div",null,[d,c("p",null,[a("就采用这种写法："),i(s,{color:"red"},{default:t(()=>[a("getter函数并且加上deep")]),_:1})]),r])}const C=p(h,[["render",v]]);export{w as __pageData,C as default};
