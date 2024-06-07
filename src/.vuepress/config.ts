import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  head: [
    ["link",{rel: "preconnect", href: "https://fonts.googleapis.com"}],
    ["link",{rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""}],
    ["link",{rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"}]
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "JAGR UIX Docs",
      description: "A docs demo for vuepress-theme-hope",
    },
  },
  plugins: [
    searchProPlugin({
      autoSuggestions: false,
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
