import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const u=JSON.parse('{"title":"javaScript设计模式","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/javaScript设计模式.md","filePath":"web/js/javaScript设计模式.md"}'),p={name:"web/js/javaScript设计模式.md"},t=e(`<h1 id="javascript设计模式" tabindex="-1">javaScript设计模式 <a class="header-anchor" href="#javascript设计模式" aria-label="Permalink to &quot;javaScript设计模式&quot;">​</a></h1><h2 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h2><p>单例模式确保某个类只有一个实例。</p><p>在 Vue 中，全局的 Vue 构造函数本身就是一个单例对象，通常只会创建一个 Vue 实例，用于管理应用的生命周期和全局配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const app = new Vue({</span></span>
<span class="line"><span>  data: {</span></span>
<span class="line"><span>    text: &#39;Hello, Vue&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="观察者模式" tabindex="-1">观察者模式 <a class="header-anchor" href="#观察者模式" aria-label="Permalink to &quot;观察者模式&quot;">​</a></h2><p>观察者模式是软件设计模式中的一种，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态发生变化时，会通知所有观察者对象，使它们能够自动更新自己。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Subject {</span></span>
<span class="line"><span>     constructor() {</span></span>
<span class="line"><span>         this.observers = []</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     addObserver(observer) {</span></span>
<span class="line"><span>         this.observers.push(observer)</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     removeObserver(observer) {</span></span>
<span class="line"><span>         this.observers = this.observers.filter((obs) =&gt; obs !== observer)</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     notify(data) {</span></span>
<span class="line"><span>         this.observers.forEach((observer) =&gt; observer.updated(data))</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Observer {</span></span>
<span class="line"><span>     constructor(name) {</span></span>
<span class="line"><span>         this.name = name</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>     updated(data) {</span></span>
<span class="line"><span>         console.log(this.name + &#39; 收到通知：&#39; + data)</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const subject = new Subject()</span></span>
<span class="line"><span>const observer1 = new Observer(&#39;观察者1&#39;)</span></span>
<span class="line"><span>const observer2 = new Observer(&#39;观察者2&#39;)</span></span>
<span class="line"><span>subject.addObserver(observer1)</span></span>
<span class="line"><span>subject.addObserver(observer2)</span></span>
<span class="line"><span>subject.notify(&#39;更新&#39;) // 观察者1 收到通知：更新   观察者2 收到通知：更新</span></span>
<span class="line"><span>subject.removeObserver(observer1)</span></span>
<span class="line"><span>subject.notify(&#39;再次更新&#39;) // 观察者2 收到通知：再次更新</span></span></code></pre></div>`,8),l=[t];function c(r,i,o,d,b,v){return n(),a("div",null,l)}const _=s(p,[["render",c]]);export{u as __pageData,_ as default};
