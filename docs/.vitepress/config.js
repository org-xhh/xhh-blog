export default {
    title: "园中桥", // 网站标题
    description: "记录我想记录的blog", // 网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    head: [
        [
          'link',
          {
            rel: 'icon',
            href: '/logo.ico', // 图片放在public文件夹下
          },
        ],
    ],
    themeConfig: {
        nav: [ // 导航栏
            { text: '首页', link: '/' },
            {
              text: '前端三要素',
              items: [
                { text: "html", link: "/web/html/" },
                { text: "css", link: "/web/css/css基础知识" },
                { text: "javascript", link: "/web/js/" },
              ]
            }
        ],
        sidebar: { // 侧边栏
            "/web/css/": {
              text: "css知识",
              items: [
                { text: "css基础知识", link: "/web/css/css基础知识" },
                { text: "css中width的小九九", link: "/web/css/css中width的小九九" },
              ],
            }
        },
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        }
    }
}