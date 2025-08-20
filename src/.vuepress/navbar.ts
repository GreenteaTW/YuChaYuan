import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/aboutus/",
  "/demo/",
  {
    text: "Wynncraft攻略",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "我們的Discord",
    icon: "book",
    link: "https://discord.gg/JmzqS9Sw3v",
  },
]);
