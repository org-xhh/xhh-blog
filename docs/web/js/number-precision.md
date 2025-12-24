### 浮点数的计算

加（ + ）
- 正常计算：0.1 + 0.2 = 0.3
- JavaScript 计算：0.1 + 0.2 = 0.30000000000000004

减（ - ）
- 正常计算：1 - 0.9 = 0.1
- JavaScript 计算：1 - 0.9 = 0.09999999999999998

乘（ * ）
- 正常计算：0.0532 * 100 = 5.32
- JavaScript 计算：0.0532 * 100 = 5.319999999999999

除（ / ）
- 正常计算：0.3 / 6 = 0.05
- JavaScript 计算：0.3 / 6 = 0.049999999999999996

### 原因分析

JavaScript中的浮点数计算不总是精确的，因为其采用**IEEE 754**标准，而这个标准**基于二进制**，不能精确地表示所有的十进制数字。0.1和0.2在二进制表示中是无限循环的，这就导致了精度问题。

### 解决方案

1.容差比较
```
function numberIsEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}

console.log(numberIsEqual(0.1 + 0.2, 0.3)) // true
```

2.使用 [decimal.js](https://github.com/ZhangMin1998/decimal.js) 或 [bignumber.js](https://github.com/ZhangMin1998/bignumber.js) 这样的库，这些库提供了处理大数和高精度的工具
```
import Decimal from 'decimal.js'

const num1 = new Decimal(0.1)
const num2 = new Decimal(0.2)
console.log(num1.plus(num2).toString()) // '0.3'
```

3.转换成整数处理

比如
```
function numberMultiply(arg1, arg2) {
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()

  m += s1.split('.')[1].length
  m += s2.split('.')[1].length

  return ((Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m))
}
```

4.toFixed 四舍五入
```
const result = parseFloat((0.1 + 0.2).toFixed(2))
console.log(result) // 0.3
```