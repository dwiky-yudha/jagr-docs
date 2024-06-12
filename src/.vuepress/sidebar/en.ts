import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "SOP",
      icon: "book-bookmark",
      prefix: "sop/",
      link: "sop/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    },
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
      collapsible:true,
    },
  ],
  "/sop/": "structure",
  "/designsystem/": "structure",
});
