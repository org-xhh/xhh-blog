# 统一前端项目的Node版本和包管理器

## 锁定项目 Node 版本

通过在 package.json 中指定 engines 字段，可限定项目使用的 node 版本。下面配置仅允许用户使用 14 或者 16的版本。更多的配置可以参考

https://www.npmjs.cn/files/package.json/

package.json 
```
"engines": {
   "node": "14.x || 16.x"
}
```
配置之后会发现，该字段只对 yarn 生效；

那如何对 npm 也生效呢？在项目根目录下的 .npmrc 文件中增加如下配置

.npmrc
```
engine-strict = true
```

以上配置完成后，执行 npm install，不匹配的 Node.js 版本将直接退出。


## 锁定包管理器

利用 only-allow 工具包，npm scripts 快速实现锁定。

- 步骤一：在项目中安装 npm install only-allow -D

- 步骤二：在 package.json 文件配置 scripts.preinstall，允许输入的值有：

only-allow npm、only-allow pnpm、only-allow yarn

package.json
```
"scripts": {
    "preinstall": "only-allow npm",
    ...
}
```

以上配置完成后，可以使用 （yarn、pnpm） 试试，直接报错退出。
