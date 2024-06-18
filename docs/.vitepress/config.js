export default {
    title: "园中桥", // 网站标题
    description: "记录我想记录的blog", // 网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /blog/
    head: [
        [
          'link',
          {
            rel: 'icon',
            href: '/logo.ico', // 图片放在public文件夹下
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
                { text: "html", link: "/web/html/html基础知识" },
                { text: "css", link: "/web/css/css基础知识" },
                { text: "javascript", link: "/web/js/javascript基础知识" },
              ]
            },
            {
              text: '工具',
              items: [
                { text: "Git", link: "/tool/git/git常用命令" },
                { text: "SourceTree", link: "/tool/sourcetree/sourcetree" },
                { text: "Fiddler", link: "/tool/fiddler/fiddler使用" },
                { text: "whistle", link: "/tool/whistle/whistle使用" },
              ]
            }
        ],
        sidebar: { // 侧边栏
            "/web/html/": {
              text: "html知识",
              items: [
                { text: "html基础知识", link: "/web/html/html基础知识" }
              ],
            },
            "/web/css/": {
              text: "css知识",
              items: [
                { text: "css基础知识", link: "/web/css/css基础知识" },
                { text: "css中width的小九九", link: "/web/css/css中width的小九九" },
              ],
            },
            "/web/js/": {
              text: "javascript知识",
              items: [
                { text: "javascript基础知识", link: "/web/js/javascript基础知识" },
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
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        }
    }
}