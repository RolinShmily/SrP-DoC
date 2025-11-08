// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

// 配置不蒜子计数器
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";

// 统计不蒜子统计组件
import WStatistics from "./components/WStatistics.vue"; //静态组件

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },

  // 在每次路由变化后重新获取不蒜子数据
    enhanceApp({ app, router }) {

      // 注册全局不蒜子统计组件：第一个参数是组件名（使用时用这个名字），第二个是组件实例
      app.component("WStatistics", WStatistics);

      if (inBrowser) {
        router.onAfterRouteChanged = () => {
          busuanzi.fetch();
        };
      }
    },

} satisfies Theme;
