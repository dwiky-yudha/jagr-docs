import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Design System",
    icon: "pen-nib",
    prefix: "designsystem/",
    link: "designsystem/",
  },
  "/sop/",
  {
    text: "Vuepress Hope Guide",
    icon: "question",
    link: "https://theme-hope.vuejs.press/",
  },
]);
