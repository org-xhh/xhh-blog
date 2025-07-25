# CSS预处理器：SASS、SCSS、LESS、Stylus

## SASS

1. 变量：
```
$primary-color: #0055fe;
$base-font-size: 16px;

body {
  background-color: $primary-color;
  font-size: $base-font-size;
}
```
2. 混合：
```
@mixin box-shadow($shadow) {
  -webkit-box-shadow: $shadow;
          box-shadow: $shadow;
}

.button {
  @include box-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

```

## SCSS
SCSS 是 SASS 语法的一种扩展，继承了SASS的所有高级特性。

后缀名为 .scss, 支持一些原生CSS不支持的高级语法，比如变量使用，嵌套语法等。

## LESS

1. 变量
```
@primary-color: #0055fe;
@base-font-size: 16px;

body {
  background-color: @primary-color;
  font-size: @base-font-size;
}

// 使用操作符
.container {
  padding: (@base-font-size * 1.5);
}
```
2. 混合
```
// @radius：变量必须@开头
.border-radius(@radius) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}

.button {
  .border-radius(5px);
}
```

3. 嵌套选择器
```
.list {
  > li {
    .desc {
      color: #666;
    }
  }
}
```

## Stylus

Stylus的语法非常宽松，去除了许多不必要的符号，如分号和括号。
```
// 简洁的变量定义和使用
primaryColor = #0055fe
baseFontSize = 16px

body
  backgroundColor primaryColor
  fontSize baseFontSize

// 嵌套规则
.container
  width 100%
  .content
    padding 10px
    &:hover
      backgroundColor darken(primaryColor, 10%)

```