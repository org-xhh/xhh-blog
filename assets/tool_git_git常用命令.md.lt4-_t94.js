import{_ as a,c as e,o as t,a3 as o}from"./chunks/framework.C5U8cnJv.js";const u=JSON.parse('{"title":"git常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"tool/git/git常用命令.md","filePath":"tool/git/git常用命令.md","lastUpdated":1718767703000}'),r={name:"tool/git/git常用命令.md"},i=o('<h1 id="git常用命令" tabindex="-1">git常用命令 <a class="header-anchor" href="#git常用命令" aria-label="Permalink to &quot;git常用命令&quot;">​</a></h1><h3 id="克隆代码库" tabindex="-1">克隆代码库 <a class="header-anchor" href="#克隆代码库" aria-label="Permalink to &quot;克隆代码库&quot;">​</a></h3><p>git clone <a href="mailto:git@gitee.com" target="_blank" rel="noreferrer">git@gitee.com</a>:org-xhh/viteproject.git</p><h3 id="取回远程仓库的变化-并与本地分支合并" tabindex="-1">取回远程仓库的变化，并与本地分支合并 <a class="header-anchor" href="#取回远程仓库的变化-并与本地分支合并" aria-label="Permalink to &quot;取回远程仓库的变化，并与本地分支合并&quot;">​</a></h3><p>git pull [remote] [branch]</p><h3 id="基于master新建分支" tabindex="-1">基于master新建分支 <a class="header-anchor" href="#基于master新建分支" aria-label="Permalink to &quot;基于master新建分支&quot;">​</a></h3><p>git checkout -b xhh-code</p><h3 id="添加当前目录的所有文件到暂存区" tabindex="-1">添加当前目录的所有文件到暂存区 <a class="header-anchor" href="#添加当前目录的所有文件到暂存区" aria-label="Permalink to &quot;添加当前目录的所有文件到暂存区&quot;">​</a></h3><p>git add .</p><h3 id="提交暂存区到仓库区" tabindex="-1">提交暂存区到仓库区 <a class="header-anchor" href="#提交暂存区到仓库区" aria-label="Permalink to &quot;提交暂存区到仓库区&quot;">​</a></h3><p>git commit -m [message]</p><h3 id="上传本地指定分支到远程仓库" tabindex="-1">上传本地指定分支到远程仓库 <a class="header-anchor" href="#上传本地指定分支到远程仓库" aria-label="Permalink to &quot;上传本地指定分支到远程仓库&quot;">​</a></h3><p>git push [remote] [branch]</p><h3 id="切换到指定分支-并更新工作区" tabindex="-1">切换到指定分支，并更新工作区 <a class="header-anchor" href="#切换到指定分支-并更新工作区" aria-label="Permalink to &quot;切换到指定分支，并更新工作区&quot;">​</a></h3><p>git checkout develop</p><h3 id="合并xhh-code分支到develop" tabindex="-1">合并xhh-code分支到develop <a class="header-anchor" href="#合并xhh-code分支到develop" aria-label="Permalink to &quot;合并xhh-code分支到develop&quot;">​</a></h3><p>git checkout develop git merge xhh-code</p><h3 id="忽略文件大小写" tabindex="-1">忽略文件大小写 <a class="header-anchor" href="#忽略文件大小写" aria-label="Permalink to &quot;忽略文件大小写&quot;">​</a></h3><p>git config core.ignorecase true(false)</p><h3 id="删除文件" tabindex="-1">删除文件 <a class="header-anchor" href="#删除文件" aria-label="Permalink to &quot;删除文件&quot;">​</a></h3><p>git rm -r --cached [file]</p><h3 id="commit之后撤销" tabindex="-1">commit之后撤销 <a class="header-anchor" href="#commit之后撤销" aria-label="Permalink to &quot;commit之后撤销&quot;">​</a></h3><p>git reset --soft HEAD^</p><h3 id="检查当前git-全局设置" tabindex="-1">检查当前git 全局设置 <a class="header-anchor" href="#检查当前git-全局设置" aria-label="Permalink to &quot;检查当前git 全局设置&quot;">​</a></h3><p>git config --global -l</p><hr><h3 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h3><p>HBuilderX文档 - Git常用命令</p><p><a href="https://hx.dcloud.net.cn/Tutorial/SourceControl/Git/README?id=git%e5%b8%b8%e7%94%a8%e5%91%bd%e4%bb%a4" target="_blank" rel="noreferrer">https://hx.dcloud.net.cn/Tutorial/SourceControl/Git/README?id=git常用命令</a></p>',29),h=[i];function l(c,d,n,s,p,g){return t(),e("div",null,h)}const b=a(r,[["render",l]]);export{u as __pageData,b as default};
