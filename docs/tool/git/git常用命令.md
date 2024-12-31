# [Git](https://git-scm.com/downloads) 

## git 简介

分布式版本控制系统，每个开发者都可以在本地完整地复制整个代码仓库，独立进行开发和版本控制。

## git常用命令

### 克隆代码库
git clone git@gitee.com:org-xhh/viteproject.git


### 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]


### 基于master新建分支
git checkout -b xhh-code


### 添加当前目录的所有文件到暂存区
git add .


### 提交暂存区到仓库区
git commit -m [message]


### 上传本地指定分支到远程仓库
git push [remote] [branch]


### 切换到指定分支，并更新工作区
git checkout develop


### 合并xhh-code分支到develop
git checkout develop

git merge xhh-code


### 忽略文件大小写
git config core.ignorecase true(false)


### 删除文件
git rm -r --cached [file]


### commit之后撤销
git reset --soft HEAD^


### 检查当前git 全局设置
git config --global -l


### 在master分支创建tag
git tag v1.1.0

git push origin v1.1.0

### 查看所有 tag
git tag

### 切换到某个tag
git checkout tags/v1.0.0

或

git checkout v1.0.0


---
### 参考文档

HBuilderX文档 - Git常用命令

https://hx.dcloud.net.cn/Tutorial/SourceControl/Git/README?id=git%e5%b8%b8%e7%94%a8%e5%91%bd%e4%bb%a4


