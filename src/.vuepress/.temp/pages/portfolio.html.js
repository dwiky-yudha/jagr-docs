import comp from "D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/portfolio.html\",\"title\":\"Portfolio Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"Portfolio Home\",\"icon\":\"home\",\"name\":\"Conan Edogawa\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"Genius young detective\",\"Lan’s childhood sweetheart\",\"The biggest rival of the black organization\"],\"footer\":false,\"description\":\"Description This is a portfolio home page demo. To use this layout, you should set home: true and portfolio: true in the page front matter. For related configuration docs, pleas...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/portfolio.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"JAGR UIX Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Portfolio Home\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Description This is a portfolio home page demo. To use this layout, you should set home: true and portfolio: true in the page front matter. For related configuration docs, pleas...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Hope\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Portfolio Home\\\",\\\"description\\\":\\\"Description This is a portfolio home page demo. To use this layout, you should set home: true and portfolio: true in the page front matter. For related configuration docs, pleas...\\\"}\"]]},\"headers\":[{\"level\":2,\"title\":\"Description\",\"slug\":\"description\",\"link\":\"#description\",\"children\":[]}],\"readingTime\":{\"minutes\":0.25,\"words\":74},\"filePathRelative\":\"portfolio.md\",\"autoDesc\":true,\"excerpt\":\"<h2>Description</h2>\\n<p>This is a portfolio home page demo.</p>\\n<p>To use this layout, you should set <code>home: true</code> and <code>portfolio: true</code> in the page front matter.</p>\\n<p>For related configuration docs, please see <a href=\\\"https://theme-hope.vuejs.press/guide/blog/home.html#portfolio-style-homepage\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">portfolio homepage</a>.</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
