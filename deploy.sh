#!/usr/bin/env sh

# 执行命令 sh deploy.sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist


git init
git add -A
git commit -m 'sh deploy.sh'

# push 到 github 项目的 gh-pages 分支
git push -f https://github.com/org-xhh/xhh-blog.git master:gh-pages

cd -

git init
git add -A
git commit -m 'deploy'

# push 到 master
git push -f https://github.com/org-xhh/xhh-blog.git master:master