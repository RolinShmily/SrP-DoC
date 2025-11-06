import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SrP-DoC",
  description: "Some documentation for RoL1n",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "SrP-CFG_CS2", link: "/srpcfg-1" },
      { text: "SrP-Sakura_MC", link: "/ssmc-1" },
      { text: "Bilibili视频脚本", link: "/bilibili-1" },
    ],

    sidebar: [
      {
        text: "SrP-CFG_CS2",
        items: [
          { text: "前置说明", link: "/srpcfg-1" },
          { text: "下载地址", link: "/srpcfg-2" },
          { text: "使用指南", link: "/srpcfg-3" },
        ],
      },
      {
        text: "SrP-Sakura_MC",
        items: [
          { text: "前置说明", link: "/ssmc-1" },
          { text: "下载地址", link: "/ssmc-2" },
          { text: "使用指南", link: "/ssmc-3" },
        ],
      },
      {
        text: "Bilibili视频脚本",
        items: [
          { text: "CFG教学", link: "/bilibili-1" },
          { text: "MC纯净整合包", link: "/bilibili-2" },
          { text: "下一期", link: "/bilibili-3" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/RolinShmily/SrP-DoC" },
    ],
  },
});
