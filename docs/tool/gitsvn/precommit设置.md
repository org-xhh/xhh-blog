# precommit 代码提交检查

### git提交代码 precommit设置 强制代码格式化

1.安装模块(--save-dev)
```
"husky": "^1.3.1"
"lint-staged": "^12.3.4"
```


2.package.json 配置
```
"husky": {
  "hooks": {
     "pre-commit": "lint-staged"
   }
 },
 "lint-staged": {
    "src/**/*.{js,vue}": [
      "prettier --write",
      "eslint --fix"
    ]
 }
 ```


3.添加要提交的代码进暂存区，进行git commit操作，会依次执行 prettier --write和eslint --fix，代码格式如果有问题无法提交成功

如果想要越过检查，添加 --no-verify

备注：如果项目根目录自动生成.eslintcache缓存文件，想要去掉的话，查看是否有 "eslint --cache --fix" 配置，去掉--cache即可



### vue3项目上述方法未生效，解决方案：
1.package.json

scripts添加命令：
```
"prepare": "husky install" 
```
(npm install 之后自动执行)

2.在.husky文件夹下新增pre-commit文件，内容：
```
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
npm run format
```

提交代码时，husky 会自动执行 .husky/pre-commit 文件中的脚本，如果脚本执行失败（比如 eslint 检查不通过），提交会被中断。
