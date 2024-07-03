export default {
  title: "园中桥", // 网站标题
  description: "记录我想记录的blog", // 网站描述
  base: '/xhh-blog/', //  部署时的路径 默认 /  可以使用二级地址 /blog/
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/xhh-blog/logo.ico', // 图片放在public文件夹下
      },
    ],
  ],
  lastUpdated: true, // 最后更新时间配置
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [ // 导航栏
      { text: '首页', link: '/' },
      {
        text: '前端三要素',
        items: [
          { text: "html", link: "/web/html/dom" },
          { text: "css", link: "/web/css/css单位和dpr" },
          { text: "javascript", link: "/web/js/caniuse" },
        ]
      },
      {
        text: '技术框架',
        items: [
          { text: "Vue", link: "/technology/vue/vue文档" },
          { text: "打包工具", link: "/technology/packaging-tool/webpack" },
          { text: "uni-app", link: "/technology/uni-app/uni-app文档" },
          { text: "微信小程序", link: "/technology/miniprogram/微信小程序开发使用" },
          { text: "React Native", link: "/technology/react-native/react-native文档" },
          { text: "Nuxt", link: "/technology/nuxt/nuxt文档" },
          { text: "组件库", link: "/technology/component-library/组件库" }
        ]
      },
      {
        text: 'node与包',
        items: [
          { text: "文档", link: "/nodejs/文档" },
          { text: "node版本管理", link: "/nodejs/node版本管理" },
          { text: "发布npm包", link: "/nodejs/发布npm包" },
          { text: "项目统一node版本", link: "/nodejs/项目统一node版本" },
          { text: "npm配置命令", link: "/nodejs/npm配置命令" },
          { text: "npm模块安装机制", link: "/nodejs/npm模块安装机制" },
          { text: "node模块化方案", link: "/nodejs/node模块化方案" },
          { text: "Babel", link: "/nodejs/babel" },
        ]
      },
      {
        text: '前端工具',
        items: [
          { text: "Git", link: "/tool/git/git常用命令" },
          { text: "SourceTree", link: "/tool/sourcetree/sourcetree" },
          { text: "Fiddler", link: "/tool/fiddler/fiddler使用" },
          { text: "whistle", link: "/tool/whistle/whistle使用" },
          { text: "VSCode", link: "/tool/vscode/vscode插件" },
        ]
      },
    ],
    sidebar: { // 侧边栏
      "/web/html/": {
        text: "html知识",
        items: [
          { text: "DOM", link: "/web/html/dom" },
          { text: "BOM", link: "/web/html/bom" },
          { text: "browser", link: "/web/html/browser" }
        ],
      },
      "/web/css/": {
        text: "css知识",
        items: [
          { text: "css单位和dpr", link: "/web/css/css单位和dpr" },
          { text: "css中width的小九九", link: "/web/css/css中width的小九九" },
          { text: "使用css3的var()函数", link: "/web/css/使用css3的var()函数" },
          { text: "应用深浅主题", link: "/web/css/应用深浅主题" }
        ],
      },
      "/web/js/": {
        text: "javascript知识",
        items: [
          { text: "Can I use", link: "/web/js/caniuse" },
          { text: "Ecma国际", link: "/web/js/ecma" },
          { text: "javascript循环方法", link: "/web/js/javascript循环方法" },
          { text: "Web Workers", link: "/web/js/web-workers" },
          { text: "0.1+0.2 !==0.3 ?", link: "/web/js/number-precision"},
          { text: "HTTP 缓存", link: "/web/js/http缓存"},
          { text: "前端埋点", link: "/web/js/前端埋点"}
        ],
      },
      "/technology/vue/": {
        text: "vue知识",
        items: [
          { text: "vue文档", link: "/technology/vue/vue文档" },
          { text: "nginx", link: "/technology/vue/nginx" },
          { text: "检测新版发布", link: "/technology/vue/检测新版发布"},
          { text: "vue指令 输入中文问题", link: "/technology/vue/vue指令输入中文问题"}
        ],
      },
      "/technology/packaging-tool/": {
        text: "打包工具",
        items: [
          { text: "webpack", link: "/technology/packaging-tool/webpack" },
          { text: "Vite", link: "/technology/packaging-tool/vite" },
          { text: "配置全局使用less变量", link: "/technology/packaging-tool/配置全局使用less变量" }
        ],
      },
      "/technology/uni-app/": {
        text: "uni-app知识",
        items: [
          { text: "uni-app文档", link: "/technology/uni-app/uni-app文档" },
        ],
      },
      "/technology/miniprogram/": {
        text: "微信小程序知识",
        items: [
          { text: "微信小程序开发使用", link: "/technology/miniprogram/微信小程序开发使用" },
          { text: "动态主题设置", link: "/technology/miniprogram/动态主题设置" },
        ],
      },
      "/technology/react-native/": {
        text: "react-native知识",
        items: [
          { text: "React Native 文档", link: "/technology/react-native/react-native文档" },
          { text: "React Native 使用", link: "/technology/react-native/react-native使用" },
        ],
      },
      "/technology/nuxt/": {
        text: "nuxt知识",
        items: [
          { text: "Nuxt.js 文档", link: "/technology/nuxt/nuxt文档" },
          { text: "本地启动标签页个数问题", link: "/technology/nuxt/本地启动标签页个数问题" },
          { text: "全局引入less变量", link: "/technology/nuxt/全局引入less变量" }
        ],
      },
      "/technology/component-library/": {
        text: "组件库",
        items: [
          { text: "组件库", link: "/technology/component-library/组件库" },
        ],
      },
      "/tool/git/": {
        text: "git知识",
        items: [
          { text: "git常用命令", link: "/tool/git/git常用命令" },
          { text: "precommit设置", link: "/tool/git/precommit设置" },
          { text: "git配置", link: "/tool/git/git配置" },
          { text: "git分支", link: "/tool/git/git分支" },
        ],
      },
      "/tool/sourcetree/": {
        text: "SourceTree知识",
        items: [
          { text: "SourceTree", link: "/tool/sourcetree/sourcetree" },
        ],
      },
      "/tool/fiddler/": {
        text: "Fiddler知识",
        items: [
          { text: "Fiddler使用", link: "/tool/fiddler/fiddler使用" },
        ],
      },
      "/tool/whistle/": {
        text: "whistle知识",
        items: [
          { text: "whistle使用", link: "/tool/whistle/whistle使用" },
        ],
      }, 
      "/tool/vscode/": {
        text: "vscode相关",
        items: [
          { text: "vscode插件", link: "/tool/vscode/vscode插件" },
        ],
      }, 
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    }
  }
}