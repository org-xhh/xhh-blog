## 相关文档

- [uni-app](https://uniapp.dcloud.net.cn/)
- [uni-app x](https://doc.dcloud.net.cn/uni-app-x/)
- [HbuilderX](https://www.dcloud.io/hbuilderx.html)
- [开发者后台](https://dev.dcloud.net.cn/pages/app/list)

## 新建项目
![alt text](image-7.png)

### uni-app 和 uni-app X 区别：
- **uni-app（老版）**

App 端：WebView(.vue)/Weex(.nvue) 渲染，JS 代码跑在 V8/JSC 引擎，靠**JSBridge**和原生通信，属于 Web 套壳 App； 页面文件：`.vue`，Vue2/Vue3 都支持；

- **uni-app X（新版）**

App 端：**UVue 原生渲染**，无 JS 引擎，逻辑用**UTS 强类型语言**直接编译成 Kotlin（Android）、Swift（iOS）、ArkTS（鸿蒙），真正原生 App； 页面文件：`.uvue`后缀，仅兼容Vue3； 禁用 plus.xxx，全部 uni.xxx；

---

| 判断点 | 传统 uni-app（老版） | uni-app X |
|--------|----------------------|-----------|
| manifest.json | 无 `uni-app-x` 字段 | 顶层有 `"uni-app-x":{}` |
| 文件后缀 | `.vue`、可能有`.nvue` | `.uvue`，无nvue；脚本会出现 `<script lang="uts">` |
| plus API | App端大量使用`plus.xxx` | 完全禁用plus |
| 条件编译 | `#ifdef APP-PLUS` 注释宏 | 运行时平台判断 `uni.getSystemInfoSync()` |
| 页面语法 | Vue2/Vue3双支持，文字可不套text | 仅Vue3 setup，文字必须`<text>`包裹 |
| 原生调用 | plus模块 / 5+Runtime | UTSAndroid/UTSiOS 直接调系统 |
| 新建页面 | 默认新建 `.vue`，可选`.nvue` | 默认新建 `.uvue` |


### 新建 uni-app 项目和 5+App 项目区别：

- 技术栈‌：uni-app 强制使用 ‌Vue.js；5+App 使用传统 ‌HTML+CSS+JS‌ (.html 入口)。
- API 调用‌：uni-app 主用 uni.xxx 通用 API（底层兼容 5+）；5+App 直接调用 plus.xxx 原生 API。
- 跨端能力‌：uni-app 一套代码编译至 ‌iOS/Android/H5/多端小程序‌；5+App ‌仅能打包为 App‌。


## 项目构建配置

`manifest.json`

![alt text](image-10.png)

## 插件

1.菜单 => 工具 => 插件安装

安装的是【HBuilderX 编辑器本身】的插件，作用于整个软件，所有项目生效


2.插件市场

![alt text](image-11.png)

会导入到 uni_modules 中

## 运行

### 运行到浏览器

运行 - 运行到浏览器

### 运行到微信小程序

运行 - 运行到小程序模拟器 - 微信开发者工具

### 运行到Android模拟器

1. 下载Android Studio

2. 创建模拟器 (Virtual Device Manager)，运行模拟器

![alt text](image-3.png)

3. HBuilderX - 运行 - 运行到手机或模拟器 - 运行到Android App基座（先安装App真机运行插件，才有这个选项）

![alt text](image-2.png)

### 运行到Android真机

https://uniapp.dcloud.net.cn/tutorial/run/run-app.html

制作自定义调试基座 => 运行到Android App基座

### 运行到iOS模拟器

https://uniapp.dcloud.net.cn/tutorial/run/installSimulator.html#ios

### 运行到iOS真机

1. 安装itunes连接真机

2. 制作自定义基座

运行 - 运行到手机或模拟器 - 制作自定义调试基座 - 选择iOS(ipa包)

![alt text](image-5.png)

3. HBuilderX - 运行 - 运行到手机或模拟器 - 运行到iOS App基座

![alt text](image-4.png)

选中上一步骤生成的基座。


## 发行

### 发布为h5

发行 - 网站-PC Web或 手机 H5
打包文件目录：unpackage\dist\build\web


### 发布微信小程序
1. 配置微信开发者工具路径（工具-设置）

    ![alt text](image-1.png)
2. 微信小程序开启服务端口

    ![alt text](image.png)
3. (HBuilderX)mainfest.json -> 微信小程序配置 -> 填写AppId
4. (HBuilderX)发行 - 小程序-微信
5. 微信开发者工具 “上传”

### Android云打包

<!-- 
Android平台签名证书(.keystore)生成指南：
https://ask.dcloud.net.cn/article/35777 
-->

发行 => 原生App云打包

使用云端证书：

![alt text](image-6.png)

使用自有证书(DCLOUD开发者后台)：

![alt text](image-8.png)

### iOS云打包
申请ios证书教程：https://ask.dcloud.net.cn/article/152

![alt text](image-9.png)


Apple开发者后台(证书、描述文件、设备 UDID 管理): https://developer.apple.com/account/

苹果上架后台：https://appstoreconnect.apple.com/

<!--
掘金教程参考：

https://juejin.cn/post/7392535991973511219?searchId=20260811112141318A43FE6558DCBCB2C8

https://juejin.cn/post/7426916970661281802?searchId=202608261705422EBAF93C97C87C285713
-->
