import{_ as l,D as i,c as o,I as n,w as p,a as s,a3 as e,j as t,o as c}from"./chunks/framework.C5U8cnJv.js";const C=JSON.parse('{"title":"typescript","description":"","frontmatter":{},"headers":[],"relativePath":"web/typescript/typescript.md","filePath":"web/typescript/typescript.md"}'),d={name:"web/typescript/typescript.md"},r=e(`<h1 id="typescript" tabindex="-1">typescript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;typescript&quot;">​</a></h1><p>TypeScript 是 JavaScript 的一个超集，扩展了 JavaScript 的语法。</p><p>TypeScript 是静态编译语言，在 编译期间 进行类型检查，可以在编辑器中发现大部分类型错误。</p><h2 id="ts-数据类型" tabindex="-1">TS 数据类型 <a class="header-anchor" href="#ts-数据类型" aria-label="Permalink to &quot;TS 数据类型&quot;">​</a></h2><h3 id="number、string、boolean" tabindex="-1">number、string、boolean <a class="header-anchor" href="#number、string、boolean" aria-label="Permalink to &quot;number、string、boolean&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let num: number = 10;</span></span>
<span class="line"><span>let str: string = &#39;string text&#39;;</span></span>
<span class="line"><span>let bool: boolean = false</span></span></code></pre></div><h3 id="null、undefined" tabindex="-1">null、undefined <a class="header-anchor" href="#null、undefined" aria-label="Permalink to &quot;null、undefined&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let value: null = null;</span></span>
<span class="line"><span>let text: undefined = undefined;</span></span></code></pre></div><h3 id="void" tabindex="-1">void <a class="header-anchor" href="#void" aria-label="Permalink to &quot;void&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function getName(name: string): void { // 空值</span></span>
<span class="line"><span>  console.log(&#39;My name is &#39; + name);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="any" tabindex="-1">any <a class="header-anchor" href="#any" aria-label="Permalink to &quot;any&quot;">​</a></h3><p>任意值 any 处理不确定的数据结构，禁用类型检查，可能导致错误难以捕获，不建议使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let myFavoriteNumber: any = &#39;seven&#39;;</span></span>
<span class="line"><span>myFavoriteNumber = 7;</span></span></code></pre></div><p>只知道一部分数据的类型时：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let list: any[] = [1, true, &quot;free&quot;];</span></span>
<span class="line"><span>list[1] = 100;</span></span></code></pre></div><h3 id="unknown" tabindex="-1">unknown <a class="header-anchor" href="#unknown" aria-label="Permalink to &quot;unknown&quot;">​</a></h3><table tabindex="0"><thead><tr><th>特性</th><th>any</th><th>unknown</th></tr></thead><tbody><tr><td>编译时</td><td>如果类型错误，编译通过运行报错</td><td>如果类型错误，编译就报错</td></tr><tr><td>访问属性/方法</td><td>无限制访问</td><td>必须先进行类型守卫</td></tr><tr><td>运算操作</td><td>无限制</td><td>必须先进行类型检查</td></tr><tr><td>可赋值性</td><td>可赋值给任何类型</td><td>仅可赋值给 unknown 或 any</td></tr></tbody></table><h3 id="never" tabindex="-1">never <a class="header-anchor" href="#never" aria-label="Permalink to &quot;never&quot;">​</a></h3><p>抛出异常或根本就不会有返回值的函数表达式或箭头函数的返回类型。</p><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let fibonacci: number[] = [1, 1, 2, 3, 5];</span></span></code></pre></div><p>数组泛型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let fibonacci: Array&lt;number&gt; = [1, 1, 2, 3, 5];</span></span></code></pre></div><p>用接口表示数组：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface NumberArray {</span></span>
<span class="line"><span>  [index: number]: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let fibonacci: NumberArray = [1, 1, 2, 3, 5];</span></span></code></pre></div><h3 id="元祖" tabindex="-1">元祖 <a class="header-anchor" href="#元祖" aria-label="Permalink to &quot;元祖&quot;">​</a></h3><p>元组是一种特殊的数据结构，允许将不同类型的值放在一个数组中，每个值都可以有自己的类型，每个位置上的类型必须与元组类型定义中对应的位置类型相匹配。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let tom: [string, number, boolean] = [&#39;Tom&#39;, 25, true];</span></span>
<span class="line"><span>let isTrue: boolean = tom[2];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tom[0] = 1 // 报错，Type &#39;number&#39; is not assignable to type &#39;string&#39;</span></span></code></pre></div><p>可选元素：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let optionalTuple: [string, number?] = [&#39;Tom&#39;]</span></span>
<span class="line"><span>optionalTuple = [&#39;Bob&#39;, 30]</span></span></code></pre></div><p>元组可以使用剩余元素（rest elements）来表示可变长度的部分：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let restTuple: [string, ...number[]] = [&#39;Tom&#39;, 1, 2, 3]</span></span></code></pre></div><h3 id="枚举" tabindex="-1">枚举 <a class="header-anchor" href="#枚举" aria-label="Permalink to &quot;枚举&quot;">​</a></h3><p>枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Days[&quot;Sun&quot;] === 0); // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Days[0] === &quot;Sun&quot;); // true</span></span></code></pre></div><p>手动赋值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Days[&quot;Sun&quot;] === 7); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Mon&quot;] === 1); // true</span></span>
<span class="line"><span>// 未手动赋值的枚举项会接着上一个枚举项递增</span></span>
<span class="line"><span>console.log(Days[&quot;Tue&quot;] === 2); // true</span></span>
<span class="line"><span>console.log(Days[&quot;Sat&quot;] === 6); // true</span></span></code></pre></div><p>使用场景：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>enum Direction {</span></span>
<span class="line"><span>  Up: 1,</span></span>
<span class="line"><span>  Top: 2,</span></span>
<span class="line"><span>  Left: 3,</span></span>
<span class="line"><span>  Right: 4</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function handleDirectionFn(direction: Direction) {</span></span>
<span class="line"><span>  if (direction === Direction.Up) { /* ... */ }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="object" tabindex="-1">object <a class="header-anchor" href="#object" aria-label="Permalink to &quot;object&quot;">​</a></h3><p>Object 和 object 的区别：</p><ul><li><p>Object 是原型链上的Object类型，所有数据类型都会指向 Object</p></li><li><p>object 表示的是对象类型，只允许引用数据类型</p></li></ul><p>{} 和 Object 的效果相同，相当于 new Object()</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let a:Object = {</span></span>
<span class="line"><span>  name:&#39;tom&#39;,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let b:object = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let c:{} = {</span></span>
<span class="line"><span>  name:&#39;tom&#39;,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="联合类型" tabindex="-1">联合类型 <a class="header-anchor" href="#联合类型" aria-label="Permalink to &quot;联合类型&quot;">​</a></h3><p>union 联合 取值可以为多种类型中的一种</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let result: number | string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>result = 10; // 可以是数字</span></span>
<span class="line"><span>result = &quot;Hi&quot;; // 可以是字符串</span></span></code></pre></div><h2 id="类型断言" tabindex="-1">类型断言 <a class="header-anchor" href="#类型断言" aria-label="Permalink to &quot;类型断言&quot;">​</a></h2><p>as 强制编译器推断类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const value:unknown = &#39;Hello World&#39;;</span></span>
<span class="line"><span>const s1:string = value as string;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const username = document.getElementById(&#39;username&#39;);</span></span>
<span class="line"><span>if (username) {</span></span>
<span class="line"><span>  (username as HTMLInputElement).value;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-label="Permalink to &quot;接口&quot;">​</a></h2><p>描述对象的形状</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let tom: Person = {</span></span>
<span class="line"><span>  name: &#39;Tom&#39;,</span></span>
<span class="line"><span>  age: 25</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>上面的例子定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样就约束了 tom 的形状必须和接口 Person 一致。</p><p>可选属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface Person {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  age?: number;</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface Address {</span></span>
<span class="line"><span>  city: string;</span></span>
<span class="line"><span>  zipCode: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>  id: number;</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  address: Address; // 数组可以存放自定义类型</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let users: User[] = [</span></span>
<span class="line"><span>  { id: 1, name: &#39;Xhh&#39;, address: { city: &#39;XuZhou&#39;, zipCode: &#39;10005&#39; } },</span></span>
<span class="line"><span>  { id: 2, name: &#39;Lb&#39;, address: { city: &#39;PeiXian&#39;, zipCode: &#39;10006&#39; } }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>只读属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface TestObj  {</span></span>
<span class="line"><span>  readonly propName: number</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>继承：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface Circle extends TestObj { </span></span>
<span class="line"><span>  xxx: string</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>重名接口，属性合并：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface TestObj {</span></span>
<span class="line"><span>  width: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface TestObj {</span></span>
<span class="line"><span>  height: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj: TestObj = {</span></span>
<span class="line"><span>  width: 375;</span></span>
<span class="line"><span>  height: 667;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function sum(x: number, y: number): number {</span></span>
<span class="line"><span>  return x + y;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>sum(1, 2);</span></span></code></pre></div><p>接口描述函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface ISum {</span></span>
<span class="line"><span>  (x:number,y:number):number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const sum:ISum = (x, y) =&gt; {</span></span>
<span class="line"><span>  return x + y</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="类型别名" tabindex="-1">类型别名 <a class="header-anchor" href="#类型别名" aria-label="Permalink to &quot;类型别名&quot;">​</a></h2><p>类型别名用来给一个类型起个新名字</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type Name = string;</span></span>
<span class="line"><span>let name: Name = &#39;Tom&#39;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const initData = { count: 0 }</span></span>
<span class="line"><span>type State = typeof initData</span></span>
<span class="line"><span>const reducer = (state: State) =&gt; {</span></span>
<span class="line"><span>  return state</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type Person = {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span>  sayHi: () =&gt; void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let person: Person = {</span></span>
<span class="line"><span>  name: &#39;Tom&#39;,</span></span>
<span class="line"><span>  age: 25,</span></span>
<span class="line"><span>  sayHi: () =&gt; console.log(&#39;Hi&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="交叉类型" tabindex="-1">交叉类型 <a class="header-anchor" href="#交叉类型" aria-label="Permalink to &quot;交叉类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface A {</span></span>
<span class="line"><span>  a(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface B {</span></span>
<span class="line"><span>  b(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 表示同时具备 A 和 B 的特性</span></span>
<span class="line"><span>type C = A &amp; B;</span></span></code></pre></div><h2 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Animal {</span></span>
<span class="line"><span>  name: string = &#39;lucky&#39;; // 默认值</span></span>
<span class="line"><span>  constructor(name: string) {</span></span>
<span class="line"><span>    this.name = name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  sayHi(): string {</span></span>
<span class="line"><span>    return \`Hello, name is \${this.name}\`;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let a: Animal = new Animal(&#39;dog&#39;);</span></span>
<span class="line"><span>console.log(a.sayHi());</span></span></code></pre></div><h2 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h2><p>使用 namespace 关键字来定义一个命名空间，可以防止命名冲突。</p><p>greet.ts：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>namespace MyNamespace {</span></span>
<span class="line"><span>  export const name: string = &quot;TypeScript&quot;;</span></span>
<span class="line"><span>  export function sayHello(): void {</span></span>
<span class="line"><span>    console.log(\`Hello, \${name}!\`);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>app.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;reference path=&quot;greet.ts&quot; /&gt;</span></span>
<span class="line"><span>MyNamespace.sayHello(); // Hello, TypeScript!</span></span></code></pre></div><h2 id="泛型" tabindex="-1">泛型 <a class="header-anchor" href="#泛型" aria-label="Permalink to &quot;泛型&quot;">​</a></h2><p>泛型（Generics）是允许同一个函数接受不同类型参数的一种模板；</p><p>泛型类似一个类型占位符，不直接指定具体的类型，使用尖括号 &lt;T&gt; 来表示。</p><p>举例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function identity&lt;T&gt;(value: T): T {</span></span>
<span class="line"><span>  return value;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,87),u=t("br",null,null,-1),h=t("br",null,null,-1),g=e(`<h4 id="泛型类" tabindex="-1">泛型类 <a class="header-anchor" href="#泛型类" aria-label="Permalink to &quot;泛型类&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Goods&lt;T&gt; {</span></span>
<span class="line"><span>  private value: T;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(value: T) {</span></span>
<span class="line"><span>    this.value = value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  getValue(): T {</span></span>
<span class="line"><span>    return this.value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>泛型参数 &lt;T&gt;，在类的定义中引入类型变量来表示未知的类型。</p><p>举例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let goods = new Goods&lt;string&gt;(&#39;Hi&#39;);</span></span>
<span class="line"><span>console.log(goods.getValue()); // 输出：&#39;Hi&#39;</span></span></code></pre></div><p>接口搭配泛型，应用在 class 上</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface people {</span></span>
<span class="line"><span>  name: string;</span></span>
<span class="line"><span>  age: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class People&lt;T extends people&gt; {</span></span>
<span class="line"><span>  data: T;</span></span>
<span class="line"><span>  constructor(data: T) {</span></span>
<span class="line"><span>    this.data = data;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  sayHi() {</span></span>
<span class="line"><span>    return \`Hello, my Name is \${this.data.name}, my age is \${this.data.age}\`;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let personName = new People&lt;people&gt;({ name: &quot;xh&quot;, age: 18 });</span></span>
<span class="line"><span>console.log(personName.sayHi())</span></span></code></pre></div><h4 id="泛型约束" tabindex="-1">泛型约束 <a class="header-anchor" href="#泛型约束" aria-label="Permalink to &quot;泛型约束&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface HasLength {</span></span>
<span class="line"><span>  length: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getLength&lt;T extends HasLength&gt;(obj: T): number {</span></span>
<span class="line"><span>  return obj.length;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let str = &quot;Hi&quot;;</span></span>
<span class="line"><span>console.log(getLength(str)); // 输出 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let obj = null;</span></span>
<span class="line"><span>console.log(getLength(obj)); // 报错 Argument of type &#39;null&#39; is not assignable to parameter of type &#39;HasLength&#39;.</span></span></code></pre></div><p>泛型约束 T extends HasLength 来限制泛型类型 T 必须满足 HasLength 接口的要求，即具有 length 属性。</p><h4 id="泛型接口" tabindex="-1">泛型接口 <a class="header-anchor" href="#泛型接口" aria-label="Permalink to &quot;泛型接口&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface Transformer&lt;T, U&gt; {</span></span>
<span class="line"><span>  transform(input: T): U;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面代码定义了一个泛型接口 Transformer，它有两个类型参数 T 和 U，用于定义输入类型和输出类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class typeTransformer implements Transformer&lt;string, number&gt; { // 类实现接口</span></span>
<span class="line"><span>  transform(input: string): number {</span></span>
<span class="line"><span>    return parseFloat(input);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面代码定义实现了 Transformer 接口的类。</p><p>使用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let transformer = new typeTransformer()</span></span>
<span class="line"><span>console.log(transformer.transform(&quot;1.12&quot;)) // 输出：1.12</span></span></code></pre></div><h2 id="is-类型守卫" tabindex="-1">is 类型守卫 <a class="header-anchor" href="#is-类型守卫" aria-label="Permalink to &quot;is 类型守卫&quot;">​</a></h2><p>is 关键字一般用于函数返回值类型中，判断参数是否属于某一类型，并根据结果返回对应的布尔类型。 语法：prop is type</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function isString(s: unknown): boolean {</span></span>
<span class="line"><span>  return typeof s === &#39;string&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function toUpperCase(x: unknown) {</span></span>
<span class="line"><span>  if(isString(x)) {</span></span>
<span class="line"><span>    x.toUpperCase() // Error, x is of type &#39;unknown&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>改造后：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function isString(s: unknown): s is string {</span></span>
<span class="line"><span>  return typeof s === &#39;string&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="内置的工具类型" tabindex="-1">内置的工具类型 <a class="header-anchor" href="#内置的工具类型" aria-label="Permalink to &quot;内置的工具类型&quot;">​</a></h2><p>比如 Capitalize &lt;T&gt; 将字符串类型 T 的首字母转换为大写。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type T = &#39;hi&#39;</span></span>
<span class="line"><span>type Result = Capitalize&lt;T&gt; // &#39;Hi&#39;</span></span></code></pre></div><h2 id="声明文件" tabindex="-1">声明文件 <a class="header-anchor" href="#声明文件" aria-label="Permalink to &quot;声明文件&quot;">​</a></h2><p>声明文件必需以 .d.ts 为后缀，用于描述已有 JavaScript 代码库的类型信息。</p><p>假如使用第三方库 jQuery，一种常见的方式是在 html 中通过 script 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。</p><p>通常这样获取一个 id 是 foo 的元素：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$(&#39;#foo&#39;);</span></span>
<span class="line"><span>// or</span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span></code></pre></div><p>但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jQuery(&#39;#foo&#39;);</span></span>
<span class="line"><span>// ERROR: Cannot find name &#39;jQuery&#39;.</span></span></code></pre></div><p>这时需要使用 declare var 来定义它的类型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>declare var jQuery: (selector: string) =&gt; any;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jQuery(&#39;#foo&#39;);</span></span></code></pre></div><h4 id="三斜线指令" tabindex="-1">三斜线指令 <a class="header-anchor" href="#三斜线指令" aria-label="Permalink to &quot;三斜线指令&quot;">​</a></h4><ul><li>书写一个全局变量的声明文件:</li></ul><p>types/jquery-plugin/index.d.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/// &lt;reference types=&quot;jquery&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>declare function foo(options: JQuery.AjaxSettings): string;</span></span></code></pre></div><p>src/index.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>foo({});</span></span></code></pre></div><ul><li>依赖一个全局变量的声明文件:</li></ul><p>types/node-plugin/index.d.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/// &lt;reference types=&quot;node&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function foo(p: NodeJS.Process): string;</span></span></code></pre></div><p>src/index.ts:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { foo } from &#39;node-plugin&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo(global.process);</span></span></code></pre></div><h2 id="内置对象" tabindex="-1">内置对象 <a class="header-anchor" href="#内置对象" aria-label="Permalink to &quot;内置对象&quot;">​</a></h2><p>ECMAScript 的内置对象</p><p>Boolean、Error、Date、RegExp 等</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let r: RegExp = /[a-z]/;</span></span></code></pre></div><p>DOM 和 BOM 的内置对象</p><p>Document、HTMLElement、Event、NodeList 等</p><h2 id="装饰器" tabindex="-1">装饰器 <a class="header-anchor" href="#装饰器" aria-label="Permalink to &quot;装饰器&quot;">​</a></h2><p>装饰器模式是一种允许动态地往一个对象上添加自定义行为，而又不影响该对象所属的类的其他实例的一种设计模式。</p><p>装饰器用法： @函数；</p><h4 id="类装饰器" tabindex="-1">类装饰器 <a class="header-anchor" href="#类装饰器" aria-label="Permalink to &quot;类装饰器&quot;">​</a></h4><p>类装饰器在类声明之前被声明，可以用来修改或添加类的属性和方法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// param: @decorator() 函数里的传参</span></span>
<span class="line"><span>function decorator(param?: string): ClassDecorator {</span></span>
<span class="line"><span>  return (target: any) =&gt; {</span></span>
<span class="line"><span>    target.say = function () {</span></span>
<span class="line"><span>      console.log(&quot;say Hi&quot;);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    target.run = function () {</span></span>
<span class="line"><span>      console.log(&quot;is running&quot;);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@decorator()</span></span>
<span class="line"><span>class Animal {</span></span>
<span class="line"><span>  static say: Function;</span></span>
<span class="line"><span>  static run: Function;</span></span>
<span class="line"><span>  constructor() {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Animal.say(); // say Hi</span></span>
<span class="line"><span>Animal.run(); // is running</span></span></code></pre></div><h2 id="tsconfig-json" tabindex="-1">tsconfig.json <a class="header-anchor" href="#tsconfig-json" aria-label="Permalink to &quot;tsconfig.json&quot;">​</a></h2><p>tsconfig.json 是 TypeScript 项目的配置文件，指定不同的选项来告诉编译器如何编译当前项目。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>    &quot;target&quot;: &quot;esnext&quot;, // 设置编译后的 JavaScript 目标版本，比如&quot;ES5&quot;、&quot;ES6&quot;等</span></span>
<span class="line"><span>    &quot;lib&quot;: [ // 指定编译时包含的内置库，默认根据 target 自动选择</span></span>
<span class="line"><span>      &quot;dom&quot;,</span></span>
<span class="line"><span>      &quot;dom.iterable&quot;,</span></span>
<span class="line"><span>      &quot;esnext&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;allowJs&quot;: false, // 允许编译器编译JS、JSX文件，默认 false</span></span>
<span class="line"><span>    &quot;checkJs&quot;: false, // 是否检查js代码是否符合语法规范，默认 false</span></span>
<span class="line"><span>    &quot;removeComments&quot;: false, // 是否移除注释，默认 false</span></span>
<span class="line"><span>    &quot;skipLibCheck&quot;: true, // 跳过声明文件内的类型检查，加快编译速度</span></span>
<span class="line"><span>    &quot;esModuleInterop&quot;: true, // 自动处理好 CommonJS 与 ES 模块之间的兼容性问题</span></span>
<span class="line"><span>    &quot;strict&quot;: false, // 开启所有严格的类型检查，默认 false</span></span>
<span class="line"><span>    &quot;alwaysStrict&quot;: false, // 编译后的文件是否开启严格模式，默认 false</span></span>
<span class="line"><span>    &quot;noImplicitAny&quot;: false, // 不允许具有隐式any类型的表达式和声明，默认 false(允许)</span></span>
<span class="line"><span>    &quot;noImplicitThis&quot;: false, // 不允许隐式的this，默认 false(允许)</span></span>
<span class="line"><span>    &quot;forceConsistentCasingInFileNames&quot;: true, // 是否强制代码中使用的模块文件名必须和文件系统中的文件名保持大小写一致</span></span>
<span class="line"><span>    &quot;noFallthroughCasesInSwitch&quot;: true, // 是否检查switch语句中的case是否都有break语句或return语句</span></span>
<span class="line"><span>    &quot;resolveJsonModule&quot;: true, // 是否解析JSON模块</span></span>
<span class="line"><span>    &quot;isolatedModules&quot;: true, // 将每个文件作为单独的模块来编译</span></span>
<span class="line"><span>    &quot;noEmitOnError&quot;: true, // 错误时不生成输出文件</span></span>
<span class="line"><span>    &quot;sourceMap&quot;: false, // 是否生成sourceMap，默认 false</span></span>
<span class="line"><span>    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span>    &quot;paths&quot;: {</span></span>
<span class="line"><span>      &quot;@/*&quot;: [&quot;src/*&quot;]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;noEmit&quot;: true, // 默认值为 false（生成输出文件），设置为 true 时仅执行类型检查不生成任何输出文件</span></span>
<span class="line"><span>    &quot;allowImportingTsExtensions&quot;: true,</span></span>
<span class="line"><span>    &quot;jsx&quot;: &quot;react-jsx&quot;, // 在.tsx文件中支持 JSX</span></span>
<span class="line"><span>    &quot;module&quot;: &quot;esnext&quot;, // 指定生成的代码所使用的模块系统，如&quot;CommonJS&quot;、&quot;ES6&quot;等。</span></span>
<span class="line"><span>    &quot;moduleResolution&quot;: &quot;node&quot;, // 模块解析策略</span></span>
<span class="line"><span>    &quot;allowSyntheticDefaultImports&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;include&quot;: [ // 指定所要编译的文件列表</span></span>
<span class="line"><span>    &quot;src/**/*&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;exclude&quot;:[ // 从编译列表中去除指定文件</span></span>
<span class="line"><span>    &quot;**/*.spec.ts&quot;,</span></span>
<span class="line"><span>    &quot;node_modules&quot;,</span></span>
<span class="line"><span>    &quot;**/node_modules/*&quot;</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;extends&quot;:&quot;../tsconfig.base.json&quot;, // 继承另一个文件的配置</span></span>
<span class="line"><span>  &quot;files&quot;:[&quot;a.ts&quot;,&quot;b.ts&quot;], // 指定编译的文件列表</span></span>
<span class="line"><span>  &quot;references&quot;: [] // 用于配置项目引用，管理 TypeScript 项目之间的依赖关系</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><a href="http://tslang.cn/play/index.html" target="_blank" rel="noreferrer">http://tslang.cn/play/index.html</a></p>`,61);function b(m,v,y,k,q,f){const a=i("font");return c(),o("div",null,[r,n(a,{color:"red"},{default:p(()=>[s("<T> ")]),_:1}),s(" 表示这是一个泛型函数；"),u,n(a,{color:"red"},{default:p(()=>[s("T")]),_:1}),s(" 是一个类型参数，可以是任何类型； "),h,s(" 函数参数是"),n(a,{color:"red"},{default:p(()=>[s("T")]),_:1}),s("，返回值的类型也是"),n(a,{color:"red"},{default:p(()=>[s("T")]),_:1}),s("；传参 number 类型，那返回值的类型也是 number。 "),g])}const T=l(d,[["render",b]]);export{C as __pageData,T as default};
