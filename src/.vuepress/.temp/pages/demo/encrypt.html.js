import comp from "D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/demo/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/demo/encrypt.html\",\"title\":\"Encryption Article\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"Guide\"],\"tag\":[\"encryption\"],\"feed\":false,\"seo\":false,\"gitInclude\":[],\"head\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"demo/encrypt.md\",\"excerpt\":\"\\n<p>The actual article content.</p>\\n<p>Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text.</p>\\n<p>Paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text.</p>\"}")
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
