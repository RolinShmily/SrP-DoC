import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SrP-DoC",
  description: "Some documentation for RoL1n",
    head: [
        ['link', {rel:'icon', href:'/vitepress-logo-mini.png'}]
    ],
  themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
    logo:"/vitepress-logo-mini.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "SrP-CFG_CS2", link: "/posts/SrP-CFG_CS2/srpcfg-1" },
      { text: "SrP-Sakura_MC", link: "/posts/SrP-Sakura_MC/ssmc-1" },
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
        items: [{ text: "文档说明", link: "/posts/SrP-Sakura_MC/ssmc-1" }],
      },
      {
        text: "Bilibili视频脚本",
        items: [
          { text: "CFG教学", link: "/posts/Bilibili/bilibili-1" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/RolinShmily/SrP-DoC" },
      { icon: "bilibili", link: "https://space.bilibili.com/422744280" },
    ],
  },
});
