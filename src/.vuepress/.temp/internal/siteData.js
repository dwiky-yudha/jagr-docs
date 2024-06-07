export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.googleapis.com\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\",\"crossorigin\":\"\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"JAGR UIX Docs\",\"description\":\"A docs demo for vuepress-theme-hope\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
