# React Native 初体验

### 搭建开发环境
（目标平台 Windows Android）


### 1. Node 版本

Node 版本 跟 React Native 版本有关

- 在环境变量PATH上新增：D:\node\node-v14.15.0-win-x64;

- （Node版本低时）新增环境变量：NODE_SKIP_PLATFORM_CHECK：1

### 2. 下载jdk： https://www.oracle.com/java/technologies/downloads/#java11-windows

（1）新增环境变量： 

```
JAVA_HOME：D:\rn\jdk\jdk-11.0.15+10
```

（2）在环境变量PATH上新增：

```
%JAVA_HOME%\bin;
```

（3）新建CLASSPATH环境变量：

```
.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar
```

检查是否配置成功： 在控制台输入 java -version


### 3. 下载 Android Studio
https://developer.android.google.cn/studio/

### 4. 配置 ANDROID_SDK_ROOT 环境变量

（1）新增环境变量：

```
ANDROID_SDK_ROOT：D:\rn\Android\Sdk 
```

（2）在环境变量PATH上新增：

```
%ANDROID_SDK_ROOT%\platform-tools;%ANDROID_SDK_ROOT%\tools;%ANDROID_SDK_ROOT%\emulator;%ANDROID_SDK_ROOT%\tools\bin
```

### 5. 创建新项目
```
npx react-native init rnProject
cd rnProject
yarn react-native run-android
```

### 6. 使用Android Studio打开 rnProject/Android，创建模拟器，点击执行按钮


### 7. adb

adb devices 
连接好的设备列表


### 8. 在模拟器上显示 Reload和dev settings等 窗口
在模拟器上双击R进行Reload

adb shell 命令：
```
adb shell input keyevent 82
```

选择Debug server host & port for device，输入本机ip地址及端口

---

### 遇到的问题

1.Unable to load script.Make sure you're either running a metro server（ run 'react-native start' ） or that your bundle 'index.android.bundle' is packaged correctly for release.

解决方式：修改项目目录/android/app/build.gradle，在project.ext.react新增bundleInDebug: true

2.Android Studio启动时报错 Emulator: emulator: ERROR: OpenGLES emulation failed to initialize.

解决方式：换一个模拟器，修改 “Emulated Performance” 为 “Software graphics”，比如使用 “Pixel XL”。
