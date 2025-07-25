
# VSCode 插件

![alt text](image.png)

## i18n Ally 使用

1. 安装插件 i18n Ally

2. 项目 .vscode/settings.json 配置：
```
{
    "i18n-ally.localesPaths": [
        "src/language"
    ],
    "i18n-ally.keystyle": "nested",
    "i18n-ally.enabledParsers": ["json", "js"],
    "i18n-ally.displayLanguage": "zh" // 展示语言
}

```

![alt text](image-10.png)
![alt text](image-11.png)

中文会悬浮在源码变量上面，鼠标点上去会恢复成源码。

## 插件安装失败解决方案

安装Vue Language Features(Volar)时安装失败，解决方案如下：

点击手动下载(manual )，插件下载下来之后，

![alt text](image-1.png)

右击-添加到压缩文件，通过压缩文件打开.vsix文件。

打开extension文件夹，将package.json右击-复制文件到剪切板（在压缩文件中不能修改，所以要复制出去修改）

打开复制出去的package.json，找到vscode版本号，如下图：
![alt text](image-2.png)

将版本号改为自己vscode的版本号，保存后，打开压缩文件，点击左上角“添加”，覆盖压缩文件里面的package.json，
然后重新解压出来（Vue.volar-1.8.8.vsix）。

<small>vscode的版本号在 帮助→发行说明（help -> Show Release Notes）可以查看。</small>

插件 -> 更多 -> Install from VSIX:

![alt text](image-3.png)


![alt text](image-4.png)

插件就可以使用了。

## EditorConfig for VS Code
安装插件，新建 .editorconfig 的配置文件，为不同的编辑器定义代码样式规则。
```
# http://editorconfig.org

# 表示是最顶层的配置文件，发现值为true时，才会停止查找.editorconfig文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = tab # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = false # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

## Prettier - Code formatter
- 安装 VSCode 插件
- 安装 prettier
```
npm install prettier -D
```
- 新建 .prettierrc 
```
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 120,
  "semi": false, // 末尾加分号
  "singleQuote": true, // 是否单引号
  "trailingComma": "none" //最后一个元素后添加尾随逗号
}
```
- package.json 配置格式化代码
```
"format": "prettier --write ."
```

## 已安装插件
![alt text](image-6.png)
![alt text](image-7.png)