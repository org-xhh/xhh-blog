
## 0.5px 全边框
```
li {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 0;
    border: 1px solid #eee;
    border-radius: 16px;
    transform: scale(0.5, 0.5);
    transform-origin: 0 0;
    box-sizing: border-box;
  }
}
```

## 0.5px 下边框
```
li {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 1px;
    left: 0;
    bottom: 0;
    background-color: #eee;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}
```

## 三角形
```
.triangle {
  width: 0;
  height: 0;
  border-width: 15px;
  border-style: solid;
  border-top-color: red;
  border-left-color: green;
  border-right-color: yellow;
  border-bottom-color: blue;
}
```
![alt text](image-7.png)

补充：使用svg绘制三角形
```
<svg width="100" height="100">
  <polygon points="100,100 100,0 0,100" fill="darkolivegreen" />
</svg>
```