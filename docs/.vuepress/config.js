module.exports = {
    title: 'MTRmod 知识中心',
    description: '由BC413运作的Minecraft Transit Railway知识中心',
    themeConfig: {
        nav: [
            { text: "回到主站", link: "https://www.bc413.com/" },
            { text: "Mod下载", link: "/download/" },
            { text: "Mod更新日志", link: "/" },
        ],
        repo: 'BC413/mtr',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'root',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: {
            '/foo/': [
                  '',
                'one',
                'two' 
            ],
            '/download/': [
                '',
                'three',
                'four'
             ],
            '/': [
                '',
                'contact',
                'about'
            ]
        },
    },
    plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    ],
}