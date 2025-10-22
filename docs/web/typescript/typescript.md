# typescript

TypeScript 是 JavaScript 的一个超集，扩展了 JavaScript 的语法。

TypeScript 是静态编译语言，在 编译期间 进行类型检查，可以在编辑器中发现大部分类型错误。

## TS 数据类型

### number、string、boolean
```
let num: number = 10;
let str: string = 'string text';
let bool: boolean = false
```
### null、undefined
```
let value: null = null;
let text: undefined = undefined;
```
### void
```
function getName(name: string): void { // 空值
  console.log('My name is ' + name);
}
```
### any 
任意值 any 处理不确定的数据结构，禁用类型检查，可能导致错误难以捕获，不建议使用。

```
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

只知道一部分数据的类型时：

```
let list: any[] = [1, true, "free"];
list[1] = 100;
```

### unknown
| 特性	| any	| unknown |
| -----------   | ------------ | ----------- |
| 编译时 | 如果类型错误，编译通过运行报错 | 如果类型错误，编译就报错 |
| 访问属性/方法 |	无限制访问 | 必须先进行类型守卫 |
| 运算操作 |	无限制 | 必须先进行类型检查 |
| 可赋值性 | 可赋值给任何类型 | 仅可赋值给 unknown 或 any |

### never
抛出异常或根本就不会有返回值的函数表达式或箭头函数的返回类型。


### 数组

```
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

数组泛型：

```
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

用接口表示数组：

```
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

### 元祖

元组是一种特殊的数据结构，允许将不同类型的值放在一个数组中，每个值都可以有自己的类型，每个位置上的类型必须与元组类型定义中对应的位置类型相匹配。

```
let tom: [string, number, boolean] = ['Tom', 25, true];
let isTrue: boolean = tom[2];

tom[0] = 1 // 报错，Type 'number' is not assignable to type 'string'
```

可选元素：

```
let optionalTuple: [string, number?] = ['Tom']
optionalTuple = ['Bob', 30]
```

元组可以使用剩余元素（rest elements）来表示可变长度的部分：

```
let restTuple: [string, ...number[]] = ['Tom', 1, 2, 3]
```

### 枚举

枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
```
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true

console.log(Days[0] === "Sun"); // true

```

手动赋值

```
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
// 未手动赋值的枚举项会接着上一个枚举项递增
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```

使用场景：

```
enum Direction {
  Up: 1,
  Top: 2,
  Left: 3,
  Right: 4
}
function handleDirectionFn(direction: Direction) {
  if (direction === Direction.Up) { /* ... */ }
}
```

### object 
Object 和 object 的区别：

- Object 是原型链上的Object类型，所有数据类型都会指向 Object

- object 表示的是对象类型，只允许引用数据类型

{} 和 Object 的效果相同，相当于 new Object()
```
let a:Object = {
  name:'tom',
  age: 18,
}

let b:object = {}

let c:{} = {
  name:'tom',
  age: 18,
}
```


<!-- 
### 字面量

Literal 字面量 类型允许将变量的值限制为特定的字面量值（如具体的字符串、数字或布尔值）。

```
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'

// index.ts(7,47): error TS2345: Argument of type '"dblclick"' is not assignable to parameter of type 'EventNames'.
``` 
-->


### 联合类型

union 联合 取值可以为多种类型中的一种

```
let result: number | string;

result = 10; // 可以是数字
result = "Hi"; // 可以是字符串
```

## 类型断言

as 强制编译器推断类型

```
const value:unknown = 'Hello World';
const s1:string = value as string;

const username = document.getElementById('username');
if (username) {
  (username as HTMLInputElement).value;
}
```

## 接口

描述对象的形状
```
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
};
```

上面的例子定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样就约束了 tom 的形状必须和接口 Person 一致。

可选属性：

```
interface Person {
  name: string;
  age?: number;
}
```

```
interface Address {
  city: string;
  zipCode: string;
}

interface User {
  id: number;
  name: string;
  address: Address; // 数组可以存放自定义类型
}

let users: User[] = [
  { id: 1, name: 'Xhh', address: { city: 'XuZhou', zipCode: '10005' } },
  { id: 2, name: 'Lb', address: { city: 'PeiXian', zipCode: '10006' } }
]
```

只读属性：
```
interface TestObj  {
  readonly propName: number
}
```

继承：
```
interface Circle extends TestObj { 
  xxx: string
}
```

重名接口，属性合并：
```
interface TestObj {
  width: number
}
interface TestObj {
  height: number
}

const obj: TestObj = {
  width: 375;
  height: 667;
}
```

## 函数

```
function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);
```
接口描述函数：
```
interface ISum {
  (x:number,y:number):number
}
const sum:ISum = (x, y) => {
  return x + y
}
```

## 类型别名

类型别名用来给一个类型起个新名字

```
type Name = string;
let name: Name = 'Tom'
```

```
const initData = { count: 0 }
type State = typeof initData
const reducer = (state: State) => {
  return state
}
```

```
type Person = {
  name: string;
  age: number;
  sayHi: () => void;
}
let person: Person = {
  name: 'Tom',
  age: 25,
  sayHi: () => console.log('Hi')
}
```

## 交叉类型

```
interface A {
  a(): void;
}
interface B {
  b(): void;
}

// 表示同时具备 A 和 B 的特性
type C = A & B;
```

## 类

```
class Animal {
  name: string = 'lucky'; // 默认值
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `Hello, name is ${this.name}`;
  }
}

let a: Animal = new Animal('dog');
console.log(a.sayHi());
```

## 命名空间

使用 namespace 关键字来定义一个命名空间，可以防止命名冲突。

greet.ts：

```
namespace MyNamespace {
  export const name: string = "TypeScript";
  export function sayHello(): void {
    console.log(`Hello, ${name}!`);
  }
}
```

app.ts:

```
<reference path="greet.ts" />
MyNamespace.sayHello(); // Hello, TypeScript!
```

## 泛型

泛型（Generics）是允许同一个函数接受不同类型参数的一种模板；

泛型类似一个类型占位符，不直接指定具体的类型，使用尖括号 &lt;T&gt; 来表示。

举例：

```
function identity<T>(value: T): T {
  return value;
}
```

<font color=red>&lt;T&gt; </font> 表示这是一个泛型函数；
<br/>
<font color=red>T</font> 是一个类型参数，可以是任何类型；
<br/>
函数参数是<font color=red>T</font>，返回值的类型也是<font color=red>T</font>；传参 number 类型，那返回值的类型也是 number。

#### 泛型类

```
class Goods<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}
```

泛型参数 &lt;T&gt;，在类的定义中引入类型变量来表示未知的类型。

举例：

```
let goods = new Goods<string>('Hi');
console.log(goods.getValue()); // 输出：'Hi'
```

接口搭配泛型，应用在 class 上

```
interface people {
  name: string;
  age: number;
}

class People<T extends people> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
  sayHi() {
    return `Hello, my Name is ${this.data.name}, my age is ${this.data.age}`;
  }
}

let personName = new People<people>({ name: "xh", age: 18 });
console.log(personName.sayHi())
```

#### 泛型约束

```
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(obj: T): number {
  return obj.length;
}

let str = "Hi";
console.log(getLength(str)); // 输出 2

let obj = null;
console.log(getLength(obj)); // 报错 Argument of type 'null' is not assignable to parameter of type 'HasLength'.
```

泛型约束 T extends HasLength 来限制泛型类型 T 必须满足 HasLength 接口的要求，即具有 length 属性。

#### 泛型接口

```
interface Transformer<T, U> {
  transform(input: T): U;
}
```

上面代码定义了一个泛型接口 Transformer，它有两个类型参数 T 和 U，用于定义输入类型和输出类型。

```
class typeTransformer implements Transformer<string, number> { // 类实现接口
  transform(input: string): number {
    return parseFloat(input);
  }
}
```

上面代码定义实现了 Transformer 接口的类。

使用：

```
let transformer = new typeTransformer()
console.log(transformer.transform("1.12")) // 输出：1.12
```

## is 类型守卫

is 关键字一般用于函数返回值类型中，判断参数是否属于某一类型，并根据结果返回对应的布尔类型。
语法：prop is type

```
function isString(s: unknown): boolean {
  return typeof s === 'string'
}
function toUpperCase(x: unknown) {
  if(isString(x)) {
    x.toUpperCase() // Error, x is of type 'unknown'
  }
}
```

改造后：

```
function isString(s: unknown): s is string {
  return typeof s === 'string'
}
```

## 内置的工具类型

比如 Capitalize &lt;T&gt; 将字符串类型 T 的首字母转换为大写。

```
type T = 'hi'
type Result = Capitalize<T> // 'Hi'
```

## 声明文件

声明文件必需以 .d.ts 为后缀，用于描述已有 JavaScript 代码库的类型信息。

假如使用第三方库 jQuery，一种常见的方式是在 html 中通过 script 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。

通常这样获取一个 id 是 foo 的元素：

```
$('#foo');
// or
jQuery('#foo');
```

但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么

```
jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.
```

这时需要使用 declare var 来定义它的类型：

```
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```

#### 三斜线指令

- 书写一个全局变量的声明文件:

types/jquery-plugin/index.d.ts:

```
/// <reference types="jquery" />

declare function foo(options: JQuery.AjaxSettings): string;
```

src/index.ts:

```
foo({});
```

- 依赖一个全局变量的声明文件:

types/node-plugin/index.d.ts:

```
/// <reference types="node" />

export function foo(p: NodeJS.Process): string;
```

src/index.ts:

```
import { foo } from 'node-plugin';

foo(global.process);
```

## 内置对象

ECMAScript 的内置对象

Boolean、Error、Date、RegExp 等

```
let r: RegExp = /[a-z]/;
```

DOM 和 BOM 的内置对象

Document、HTMLElement、Event、NodeList 等

## 装饰器

装饰器模式是一种允许动态地往一个对象上添加自定义行为，而又不影响该对象所属的类的其他实例的一种设计模式。

装饰器用法： @函数；

#### 类装饰器

类装饰器在类声明之前被声明，可以用来修改或添加类的属性和方法。

```
// param: @decorator() 函数里的传参
function decorator(param?: string): ClassDecorator {
  return (target: any) => {
    target.say = function () {
      console.log("say Hi");
    };
    target.run = function () {
      console.log("is running");
    };
  };
}

@decorator()
class Animal {
  static say: Function;
  static run: Function;
  constructor() {}
}

Animal.say(); // say Hi
Animal.run(); // is running
```

## tsconfig.json

tsconfig.json 是 TypeScript 项目的配置文件，指定不同的选项来告诉编译器如何编译当前项目。

```
{
  "compilerOptions": {
    "target": "esnext", // 设置编译后的 JavaScript 目标版本，比如"ES5"、"ES6"等
    "lib": [ // 指定编译时包含的内置库，默认根据 target 自动选择
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": false, // 允许编译器编译JS、JSX文件，默认 false
    "checkJs": false, // 是否检查js代码是否符合语法规范，默认 false
    "removeComments": false, // 是否移除注释，默认 false
    "skipLibCheck": true, // 跳过声明文件内的类型检查，加快编译速度
    "esModuleInterop": true, // 自动处理好 CommonJS 与 ES 模块之间的兼容性问题
    "strict": false, // 开启所有严格的类型检查，默认 false
    "alwaysStrict": false, // 编译后的文件是否开启严格模式，默认 false
    "noImplicitAny": false, // 不允许具有隐式any类型的表达式和声明，默认 false(允许)
    "noImplicitThis": false, // 不允许隐式的this，默认 false(允许)
    "forceConsistentCasingInFileNames": true, // 是否强制代码中使用的模块文件名必须和文件系统中的文件名保持大小写一致
    "noFallthroughCasesInSwitch": true, // 是否检查switch语句中的case是否都有break语句或return语句
    "resolveJsonModule": true, // 是否解析JSON模块
    "isolatedModules": true, // 将每个文件作为单独的模块来编译
    "noEmitOnError": true, // 错误时不生成输出文件
    "sourceMap": false, // 是否生成sourceMap，默认 false
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "noEmit": true, // 默认值为 false（生成输出文件），设置为 true 时仅执行类型检查不生成任何输出文件
    "allowImportingTsExtensions": true,
    "jsx": "react-jsx", // 在.tsx文件中支持 JSX
    "module": "esnext", // 指定生成的代码所使用的模块系统，如"CommonJS"、"ES6"等。
    "moduleResolution": "node", // 模块解析策略
    "allowSyntheticDefaultImports": true
  },
  "include": [ // 指定所要编译的文件列表
    "src/**/*"
  ],
  "exclude":[ // 从编译列表中去除指定文件
    "**/*.spec.ts",
    "node_modules",
    "**/node_modules/*"
  ],
  "extends":"../tsconfig.base.json", // 继承另一个文件的配置
  "files":["a.ts","b.ts"], // 指定编译的文件列表
  "references": [] // 用于配置项目引用，管理 TypeScript 项目之间的依赖关系
}
```

http://tslang.cn/play/index.html
