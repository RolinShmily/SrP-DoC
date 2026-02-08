import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SrP-DoC",
  description: "Some documentation for RoL1n",
  head: [["link", { rel: "icon", href: "/vitepress-logo-mini.png" }]],
  // 不蒜子统计组件
  theme: "./theme/index.ts",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/vitepress-logo-mini.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "SrP-CFG_CS2", link: "/posts/SrP-CFG_CS2/srpcfg-1" },
      { text: "SrP-Sakura_MC", link: "/posts/SrP-Sakura_MC/ssmc-1" },
      { text: "GuitarTAB", link: "/posts/GuitarTAB/srpg-1" },
      { text: "Bilibili视频脚本", link: "/posts/Bilibili/bilibili-1" },
    ],

    sidebar: [
      {
        text: "SrP-CFG_CS2",
        items: [
          { text: "项目说明", link: "/posts/SrP-CFG_CS2/srpcfg-1" },
          { text: "下载地址", link: "/posts/SrP-CFG_CS2/srpcfg-2" },
          { text: "使用指南", link: "/posts/SrP-CFG_CS2/srpcfg-3" },
          { text: "更新日志", link: "/posts/SrP-CFG_CS2/srpcfg-4" },
        ],
      },
      {
        text: "SrP-Sakura_MC",
        items: [
          { text: "文档说明", link: "/posts/SrP-Sakura_MC/ssmc-1" },
          { text: "客户端辅助整合包", link: "/posts/SrP-Sakura_MC/ssmc-2" },
        ],
      },
      {
        text: "GuitarTAB",
        items: [
          { text: "文档说明", link: "/posts/GuitarTAB/srpg-1" },
          { text: "下载地址", link: "/posts/GuitarTAB/srpg-2" },
        ],
      },
      {
        text: "Bilibili视频脚本",
        items: [
          { text: "SrP-CFG | EP01", link: "/posts/Bilibili/bilibili-1" },
          { text: "SrP-CFG | EP02", link: "/posts/Bilibili/bilibili-2" },
          { text: "SrP-CFG | EP02", link: "/posts/Bilibili/bilibili-3" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/RolinShmily/SrP-DoC" },
      { icon: "bilibili", link: "https://space.bilibili.com/422744280" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224 24c0-13.3 10.7-24 24-24 145.8 0 264 118.2 264 264 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-119.3-96.7-216-216-216-13.3 0-24-10.7-24-24zM80 96c26.5 0 48 21.5 48 48l0 224c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16 79.5 0 144 64.5 144 144S255.5 512 176 512 32 447.5 32 368l0-224c0-26.5 21.5-48 48-48zm168 0c92.8 0 168 75.2 168 168 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3-53.7-120-120-120-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>',
        },
        link: "https://blog.srprolin.top",
      },
    ],
  },
});
