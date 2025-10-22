import{_ as p,D as e,c as l,j as i,a as s,I as t,w as o,a3 as a,o as c}from"./chunks/framework.C5U8cnJv.js";const h="/xhh-blog/assets/image-5.sBQXjcS3.png",r="/xhh-blog/assets/image-6.ClQsNQg4.png",T=JSON.parse('{"title":"This","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/this.md","filePath":"web/js/this.md"}'),d={name:"web/js/this.md"},u=a('<h1 id="this" tabindex="-1">This <a class="header-anchor" href="#this" aria-label="Permalink to &quot;This&quot;">​</a></h1><h2 id="什么是-this" tabindex="-1">什么是 this? <a class="header-anchor" href="#什么是-this" aria-label="Permalink to &quot;什么是 this?&quot;">​</a></h2><ul><li>一个关键字，一个特殊的对象引用</li><li>运行时绑定，在函数被调用时确定</li></ul><h2 id="默认绑定" tabindex="-1">默认绑定 <a class="header-anchor" href="#默认绑定" aria-label="Permalink to &quot;默认绑定&quot;">​</a></h2><ul><li>非严格模式：全局对象（window）</li><li>严格模式：undefined</li></ul><p><img src="'+h+`" alt="alt text"></p><h2 id="隐式绑定" tabindex="-1">隐式绑定 <a class="header-anchor" href="#隐式绑定" aria-label="Permalink to &quot;隐式绑定&quot;">​</a></h2><p>场景：函数作为对象的一个方法被调用</p><p>指向：调用该方法的对象本身</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>    name: &#39;Lily&#39;,</span></span>
<span class="line"><span>    sayHi: function() {</span></span>
<span class="line"><span>        console.log(\`Hello, \${this.name}\`)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// this 指向 obj</span></span>
<span class="line"><span>obj.sayHi()   // Hello, Lily</span></span></code></pre></div><h2 id="隐式丢失" tabindex="-1">隐式丢失 <a class="header-anchor" href="#隐式丢失" aria-label="Permalink to &quot;隐式丢失&quot;">​</a></h2><p>场景：将对象方法赋值给一个新变量后独立调用</p><p>结果：this指向丢失，触发了默认绑定</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>    name: &#39;Lily&#39;,</span></span>
<span class="line"><span>    sayHi: function() {</span></span>
<span class="line"><span>        console.log(\`Hello, \${this.name}\`)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const hiFn = obj.sayHi</span></span>
<span class="line"><span>hiFn()</span></span></code></pre></div><p>非严格模式：Hello,      (this 指向全局变量)</p>`,15),g=a('<h2 id="显示绑定" tabindex="-1">显示绑定 <a class="header-anchor" href="#显示绑定" aria-label="Permalink to &quot;显示绑定&quot;">​</a></h2><ul><li>call <ul><li>.call(thisArg, arg1, arg2, ...)</li><li>立即调用函数</li><li>this 指向 thisArg</li><li>参数逐个传递</li></ul></li><li>apply <ul><li>.apply(thisArg, [arg1, arg2, ...])</li><li>立即调用函数</li><li>this 指向 thisArg</li><li>参数传递一个数组</li></ul></li><li>bind <ul><li>.bind(thisArg)</li><li>不立即调用</li><li>返回一个this被永久绑定的新函数</li><li>也称“硬绑定”</li></ul></li></ul><p><img src="'+r+`" alt="alt text"></p><h2 id="手写-apply" tabindex="-1">手写 apply <a class="header-anchor" href="#手写-apply" aria-label="Permalink to &quot;手写 apply&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Function.prototype.myApply = function(context, argsArray) {</span></span>
<span class="line"><span>  if (context === null || context === undefined) {</span></span>
<span class="line"><span>    context = globalThis // 浏览器环境是window，Node环境是global</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // 将非对象类型转换为对象，确保可以添加属性</span></span>
<span class="line"><span>    context = Object(context)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 生成唯一属性名，避免覆盖context原有属性</span></span>
<span class="line"><span>  const fnKey = Symbol(&#39;fn&#39;)</span></span>
<span class="line"><span>  context[fnKey] = this</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  const args = Array.isArray(argsArray) ? argsArray : []</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // context[fnKey]调用context对象的fnKey函数，此时this就是context对象</span></span>
<span class="line"><span>  const result = context[fnKey](...args)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 避免污染原对象</span></span>
<span class="line"><span>  delete context[fnKey]</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return result</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function greet(age, sex) {</span></span>
<span class="line"><span>  return \`greet: \${this.name}, \${age}, \${sex}\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const person = { name: &#39;Amy&#39; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(greet.myApply(person, [&#39;15&#39;, &#39;男&#39;])) // 输出: greet: Amy, 15, 男</span></span></code></pre></div><h2 id="new-绑定" tabindex="-1">new 绑定 <a class="header-anchor" href="#new-绑定" aria-label="Permalink to &quot;new 绑定&quot;">​</a></h2><p>场景：使用 new 关键字调用函数(构造函数)</p><p>指向：this 指向一个全新的空对象</p><h3 id="new-关键字做了什么" tabindex="-1">new 关键字做了什么？ <a class="header-anchor" href="#new-关键字做了什么" aria-label="Permalink to &quot;new 关键字做了什么？&quot;">​</a></h3><ol><li>创建一个全新的空对象</li><li>新对象的原型链接到构造函数的 prototype 属性</li><li>新对象被绑定为函数调用的 this</li><li>隐式返回 this (若函数无其他返回)</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Person(name) {</span></span>
<span class="line"><span>    // 1. this = {}</span></span>
<span class="line"><span>    this.name = name</span></span>
<span class="line"><span>    // 2. return this</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const user = new Person(&#39;Lily&#39;)</span></span>
<span class="line"><span>console.log(user.name)   // Lily</span></span></code></pre></div><p>在 Person 调用中，this 指向 user</p><h2 id="箭头函数" tabindex="-1">箭头函数 <a class="header-anchor" href="#箭头函数" aria-label="Permalink to &quot;箭头函数&quot;">​</a></h2><ul><li>箭头函数没有自己的 this</li><li>this 绑定在创建时确定，而不是在调用时确定</li><li>一旦绑定，不可被 call/apply/bind 修改</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>    name: &#39;Lily&#39;,</span></span>
<span class="line"><span>    // 定义时，这里的 this 是全局对象</span></span>
<span class="line"><span>    sayHi: () =&gt; {</span></span>
<span class="line"><span>        console.log(\`Hello, \${this.name}\`)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.sayHi() // Hello,</span></span></code></pre></div><h2 id="绑定规则优先级" tabindex="-1">绑定规则优先级 <a class="header-anchor" href="#绑定规则优先级" aria-label="Permalink to &quot;绑定规则优先级&quot;">​</a></h2><p>new &gt; 显示 &gt; 隐式 &gt; 默认</p><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const myTimer = {</span></span>
<span class="line"><span>    count: 0,</span></span>
<span class="line"><span>    start() {</span></span>
<span class="line"><span>        setTimeout(function() {</span></span>
<span class="line"><span>            // 这里的 this 指向 谁？</span></span>
<span class="line"><span>            console.log(++this.count)</span></span>
<span class="line"><span>        }, 1000)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>myTimer.start()</span></span></code></pre></div><p>setTimeout 的回调函数被独立调用，丢失了 myTimer 的上下文，触发了默认绑定，this 指向全局。</p><p>解决方式1：bind(this)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>setTimeout(function() {</span></span>
<span class="line"><span>    console.log(++this.count)</span></span>
<span class="line"><span>}.bind(this), 1000)</span></span></code></pre></div><p>解决方式2：箭头函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(++this.count)</span></span>
<span class="line"><span>}, 1000)</span></span></code></pre></div>`,24);function b(m,y,_,x,v,f){const n=e("font");return c(),l("div",null,[u,i("p",null,[s("严格模式："),t(n,{color:"red"},{default:o(()=>[s("Uncaught TypeError: Cannot read properties of undefined (reading 'name')")]),_:1})]),g])}const q=p(d,[["render",b]]);export{T as __pageData,q as default};
