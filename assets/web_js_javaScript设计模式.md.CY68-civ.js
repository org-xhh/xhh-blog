import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.C5U8cnJv.js";const _=JSON.parse('{"title":"javaScript设计模式","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/javaScript设计模式.md","filePath":"web/js/javaScript设计模式.md"}'),p={name:"web/js/javaScript设计模式.md"},r=e(`<h1 id="javascript设计模式" tabindex="-1">javaScript设计模式 <a class="header-anchor" href="#javascript设计模式" aria-label="Permalink to &quot;javaScript设计模式&quot;">​</a></h1><h2 id="观察着模式" tabindex="-1">观察着模式 <a class="header-anchor" href="#观察着模式" aria-label="Permalink to &quot;观察着模式&quot;">​</a></h2><p>观察者模式是软件设计模式中的一种，它定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态发生变化时，会通知所有观察者对象，使它们能够自动更新自己。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Subject {</span></span>
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
<span class="line"><span>subject.notify(&#39;再次更新&#39;) // 观察者2 收到通知：再次更新</span></span></code></pre></div>`,4),t=[r];function l(c,i,o,b,d,v){return n(),a("div",null,t)}const u=s(p,[["render",l]]);export{_ as __pageData,u as default};
