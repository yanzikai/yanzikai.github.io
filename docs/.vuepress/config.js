module.exports = {
  // 回到顶部
  plugins: ['@vuepress/back-to-top'],
  // 代码片段显示行号
  // markdown: {
  //   lineNumbers: true
  // },
  // 网站标题
  title: "前端默认文档",
  // 网站描述 <meta>
  description: "大前端规范文档，请仔细阅读",
  //
  themeConfig: {
    // 网站logo
    logo: "/logo.png",
    // 网站导航
    nav: [
      { text: "指导", link: "/guide/" },
      { text: "个人", link: "/self/" },
      { text: "markdown", link: "/markdown/" },
      { text: "项目", link: "/project/" },
      {
        text: "列表",
        items: [
          { text: "列表1", link: "/guide/guide1/" },
          { text: "列表2", link: "/self/" },
          { text: "列表3", link: "/project/project2" },
        ],
      },
      { text: "百度", link: "https://www.baidu.com" },
    ],
    sidebar: {
      "/guide/": ["", "guide1", ["guide2", "自定义的标题"]],
      "/markdown/": [""],
      "/self/": ["", "self1", ["self2", "自定义的标题"]],
      "/project/": ["","p1","p2","p3","p4"],
    },
  },
};
