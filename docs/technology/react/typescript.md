# typescript学习

## 基本类型
```
let bool: boolean = false // 布尔值
let str: string = 'string text'; // 字符串
let num: number = 10; // 数值
let value: null = null; // null
let text: undefined = undefined; // undefined
function getName(name: string): void { // 空值
  console.log('My name is ' + name);
}
```

## 任意值
any
```
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```
只知道一部分数据的类型时：
```
let list: any[] = [1, true, "free"];
list[1] = 100;
```

## 联合类型
取值可以为多种类型中的一种
```
let result: number | string;

result = 10; // 可以是数字
result = "Hi"; // 可以是字符串
```


## 数组
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

## 元祖
元组是一种特殊的数据结构，允许将不同类型的值放在一个数组中，每个值都可以有自己的类型，每个位置上的类型必须与元组类型定义中对应的位置类型相匹配。
```
let tom: [string, number, boolean] = ['Tom', 25, true];
let isTrue: boolean = tom[2]; 
```

## 枚举
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

## 类型断言
```
const value:unknown = 'Hello World';
const s1:string = value as string;

const username = document.getElementById('username');
if (username) {
  (username as HTMLInputElement).value;
}
```

## 函数
```
function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);
```

## 接口
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

## 类
```
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('xiehui');
console.log(a.sayHi());
```

## 类型别名
类型别名用来给一个类型起个新名字
```
type Name = string;
```

## 字符串字面量类型
```
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'

// index.ts(7,47): error TS2345: Argument of type '"dblclick"' is not assignable to parameter of type 'EventNames'.
```

## 命名空间
使用namespace关键字来定义一个命名空间
```
namespace MyNamespace {
  export const name: string = "TypeScript";
  export function sayHello(): void {
    console.log(`Hello, ${name}!`);
  }
}

MyNamespace.sayHello(); // Hello, TypeScript!
```

## 泛型
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
函数参数是<font color=red>T</font>，返回值的类型也是<font color=red>T</font>。

```
identity<number>(10);
identity<string>("Hi");
```

传参 number 类型，返回值的类型也是 number。传参 string 类型，返回值的类型也是 string。


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
let goods = new Goods<string>("Hi");
console.log(goods.getValue()); // 输出：Hi
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
泛型约束 T extends HasLength 来限制泛型类型T必须满足HasLength接口的要求，即具有length属性。

#### 泛型接口
```
interface Transformer<T, U> {
  transform(input: T): U;
}
```
上面代码定义了一个泛型接口Transformer，它有两个类型参数T和U，用于定义输入类型和输出类型。
```
class typeTransformer implements Transformer<string, number> { // 类实现接口
  transform(input: string): number {
    return parseFloat(input);
  }
}
```
上面代码定义实现了Transformer接口的类。

使用：
```
let transformer = new typeTransformer()
console.log(transformer.transform("1.12")) // 输出：1.12
```

## 声明文件

声明文件必需以 .d.ts 为后缀。

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

tsconfig.json是TypeScript项目的配置文件，用于指定编译器的行为和项目的编译选项。

```
{
  "compilerOptions": {
    "target": "es5", // 目标语言的版本
    "lib": [ //  编译时引入的 ES 功能库，包括：es5 、es6、es7、dom 等
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true, // 允许编译器编译JS，JSX文件
    "checkJs": false, // 是否允许在JS文件中报错，通常与allowJS一起使用
    "skipLibCheck": true, // 跳过声明文件内的类型检查，加快编译速度
    "esModuleInterop": true, // 自动处理好 CommonJS 与 ES 模块之间的兼容性问题
    "allowSyntheticDefaultImports": true, // 是否允许从没有默认导出的模块中默认导入
    "strict": true, // 开启所有严格的类型检查
    "forceConsistentCasingInFileNames": true, // 是否强制代码中使用的模块文件名必须和文件系统中的文件名保持大小写一致
    "noFallthroughCasesInSwitch": true, // 是否检查switch语句中的case是否都有break语句或return语句
    "module": "esnext", // 指定编译后代码使用的模块系统
    "moduleResolution": "node", // 模块解析策略
    "resolveJsonModule": true, // 是否解析JSON模块
    "isolatedModules": true, // 将每个文件作为单独的模块来编译
    "noEmit": true, // 不会生成任何输出文件
    "jsx": "react-jsx" // 输出的js 文件，将 JSX 语法转换为经过优化的针对生产环境调用的 _jsx
  },
  "include": [ // 指定所要编译的文件列表
    "src"
  ],
  "exclude":["**/*.spec.ts"], // 从编译列表中去除指定文件
  "extends":"../tsconfig.base.json", // 继承另一个文件的配置
  "files":["a.ts","b.ts"], // 指定编译的文件列表
  "references": [] // 用于配置项目引用，管理 TypeScript 项目之间的依赖关系
}
```

