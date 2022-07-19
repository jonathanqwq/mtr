module.exports = {
    title: 'MTRmod 知识中心',
    description: '由BC413运作的Minecraft Transit Railway知识中心',
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    themeConfig: {
        nav: [
            { text: "主站", link: "https://www.bc413.com/" },
            { text: "教程", link: "/mod/tutorials/" },
            { text: "Mod",
                items: [
                    { text: "Mod下载", link: "/download/" },
                    { text: "Mod更新日志", link: "/mod/changelog/" },
                ],
            },
            { text: "关于",
                items: [
                    { text: '关于我们', link: "/info/about" },
                    { text: '使用条款', link: "/policies/tos" },
                    { text: '免责声明', link: "/policies/privacy" },
                    { text: '使用与转载规范', link: "/policies/repost" },
                    { text: '版权与许可', link: "/policies/licenses" },
                ],
            },
            { text: '捐赠', link: "https://www.yellowbud.net/docs/#/admin/help" },
            { text: "友链", link: "https://blog.niuboss123.com/links.html" },
        ],
        repo: 'BC413/mtr',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        displayAllHeaders: true,
        smoothScroll: true,
        lastUpdated: '最后更新时间',
    },
    plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    ],
}