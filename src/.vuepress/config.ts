import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-TW",
  title: "芋茶園 - YuChaYuan",
  description: "title",

  theme,

  head: [
    // ...

    // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],


  plugins: [
    searchPlugin({
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
