# 使用css3的var()函数

var(): CSS 函数可以插入一个自定义属性

### 使用 :root 伪类使变量全局可用
```
:root {
    --theme-color: #f00;
}
```
或在节点上：
```
<div :style="{'--theme-color': '#f00'}">
    Hello
</div>
```

### 页面中使用
```
.demo {
    color: var(--theme-color);
}
```

### 使用js动态改变全局样式
```
document.documentElement.style.setProperty('--theme-color': otherColor)
```