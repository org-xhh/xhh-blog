
# npm

### 查看npm使用的镜像
npm config get registry


### 设置官方镜像源
npm config set registry https://registry.npmjs.org


### 执行npm淘宝镜像
配置镜像站

npm config set registry=https://registry.npmmirror.com

检查一下镜像站是否正常

npm config get registry

<small>使用哪个镜像，只需要 npm config set registry  对应的镜像网址 就可以了</small>


### 安装cnpm（不用修改镜像源，这种方式也可以用淘宝镜像下载模块cnpm i）
npm install -g cnpm --registry=https://registry.npmmirror.com

如果安装报错没权限啥的:

npm install -g cnpm@7.1.1 --registry=https://registry.npmmirror.com

采用cnpm 安装依赖会忽略 package-lock.json 


### 清空缓存
npm cache clean --force  


### nrm
nrm 是一个 npm 源管理器，可以快速地在 npm 源间切换。
