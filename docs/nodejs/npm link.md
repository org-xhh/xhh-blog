# npm link

### 为什么要用npm link

库包在开发过程中不适合发布到线上进行调试（过程繁琐且会导致版本号膨胀）

### npm link工作原理
可以帮助我们模拟包安装后的状态，npm link 会在系统中做一个快捷方式映射，让本地的包就好像 install 过一样，可以直接使用。修改库包代码时，调用方项目里的node_modules里的插件代码会实时更新。

### 同一目录下使用
```
npm link ../module1
```

### 不同目录下使用
在库包目录：
```
npm link
```

在调用方项目：
```
npm link @web-xhh/web-components
```

### 删除 npm link 链接
```
npm unlink @web-xhh/web-components
```