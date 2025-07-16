# javascript循环方法

## forEach()

- 处理引用类型的数组，forEach会改变原数组

- 不能使用break，continue

- throw new Error('跳出 forEach 循环')

- return 语句会终止本次迭代，但循环会继续执行

- 同步迭代器，循环内部写 await 也不会等待其执行

## map()

- 支持链式调用

- 处理引用类型的数组，map会改变原数组

- 不能使用break，continue

- return 返回值

## for
```
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```
break：退出整个循环；

return：在函数中使用，退出函数并终止循环；

continue：跳过当前循环，继续下一次循环

## for...in

遍历**对象**的可枚举属性，迭代顺序是不确定的；

循环遍历对象时，会遍历对象的原型链，并且会包含从原型链继承的属性，可以使用 hasOwnProperty 方法来检查属性是否为对象自身的属性

可以与 break、continue 配合使用

## for...of

用来遍历 **数组、类数组对象、字符串、Map、Set 以及 Generator 对象**，不能用于普通对象(普通对象默认没有Iterator接口)，迭代顺序是确定的；

可以与 break、continue 配合使用。

部署了 Symbol.iterator 属性的数据结构，就具有 iterator 接口，可以用 for...of 循环遍历成员。

```
判断某个对象是否可迭代：
const isIterable = obj => obj != null && typeof obj[Symbol.iterator] === 'function'
```

给普通对象部署遍历器生成方法：
```
let obj = {
  a: 11,
  b: 22,
  c: 33,
  [Symbol.iterator]: function () {
    let index = 0
    let keys = Object.keys(obj) // a b c
    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index++]
          return {value: this[key], done: false}
        } else {
          return {value: undefined, done: true}
        }   
      }
    }
  }
}
for (value of obj) {
  console.log(value) // 11 22 33
}
```

## while
在条件为真时执行循环
```
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

## do...while
至少执行一次，然后在条件为真时继续循环
```
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
```

## filter()
返回一个新数组，其包含通过所提供函数实现的测试的所有元素
```
const evenNumbers = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```
循环中途是无法停止的，总是会将所有成员遍历完

## reduce()
对数组中的所有元素调用callback函数，并将它们累加成一个值（从左到右）
```
const sum = [1, 2, 3, 4, 5].reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

## reduceRight()
从右到左

## some()
只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false
```
let arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true
```

## every()
所有成员的返回值都是true，整个every方法才返回true，否则返回false
```
let arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false
```

## Object.keys()
遍历对象的属性
```
let obj = {
  value1: 123,
  value2: 456
};
Object.keys(obj) // ['value1', 'value2']
```
只返回可枚举的属性

## Object.getOwnPropertyNames()
遍历对象的属性
```
let a = ['Hello', 'World'];
Object.keys(a) // ['0', '1']
Object.getOwnPropertyNames(a) // ['0', '1', 'length']
```
能返回不可枚举的属性


## Object.values()
遍历对象的属性值
```
let obj = {
  value1: 123,
  value2: 456
};
Object.values(obj) // [123, 456]
```

## Object.entries()
遍历对象的键值对
```
let obj = {
  value1: 123,
  value2: 456
};
Object.entries(obj) 

输出：
[
    [
        "value1",
        123
    ],
    [
        "value2",
        456
    ]
]
```




