import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "芋茶園 - YuChaYuan",
  description: "title",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
