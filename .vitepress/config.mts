import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SrP-DoC",
  description: "Some documentation for RoL1n",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          { text: "前置说明", link: "/posts/SrP-CFG_CS2/srpcfg-1" },
          { text: "下载地址", link: "/posts/SrP-CFG_CS2/srpcfg-2" },
          { text: "使用指南", link: "/posts/SrP-CFG_CS2/srpcfg-3" },
        ],
      },
      {
        text: "SrP-Sakura_MC",
        items: [
          { text: "前置说明", link: "/posts/SrP-Sakura_MC/ssmc-1" },
          { text: "下载地址", link: "/posts/SrP-Sakura_MC/ssmc-2" },
          { text: "使用指南", link: "/posts/SrP-Sakura_MC/ssmc-3" },
        ],
      },
      {
        text: "Bilibili视频脚本",
        items: [
          { text: "CFG教学", link: "/posts/Bilibili/bilibili-1" },
          { text: "MC纯净整合包", link: "/posts/Bilibili/bilibili-2" },
          { text: "下一期", link: "/posts/Bilibili/bilibili-3" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/RolinShmily/SrP-DoC" },
    ],
  },
});
