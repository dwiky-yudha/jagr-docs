export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"JAGR UIX Docs","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"Disabling layout and features","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"Encryption Article","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"Layout","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown Enhance","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"Page Config","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"Features demo","i":"laptop-code"} }],
  ["/designsystem/", { loader: () => import(/* webpackChunkName: "designsystem_index.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/designsystem/index.html.js"), meta: {"t":"Design System","i":"pen-nib"} }],
  ["/sop/holingky.html", { loader: () => import(/* webpackChunkName: "sop_holingky.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/sop/holingky.html.js"), meta: {"t":"Holingky","i":"paintbrush","O":1} }],
  ["/sop/", { loader: () => import(/* webpackChunkName: "sop_index.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/sop/index.html.js"), meta: {"t":"SOP","i":"book-bookmark"} }],
  ["/designsystem/Ewarga/ds.html", { loader: () => import(/* webpackChunkName: "designsystem_Ewarga_ds.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/designsystem/Ewarga/ds.html.js"), meta: {"t":"Intro"} }],
  ["/designsystem/Ewarga/", { loader: () => import(/* webpackChunkName: "designsystem_Ewarga_index.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/designsystem/Ewarga/index.html.js"), meta: {"t":"eWarga"} }],
  ["/designsystem/Asvri/", { loader: () => import(/* webpackChunkName: "designsystem_Asvri_index.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/designsystem/Asvri/index.html.js"), meta: {"t":"ASVRI"} }],
  ["/designsystem/Posgram/", { loader: () => import(/* webpackChunkName: "designsystem_Posgram_index.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/designsystem/Posgram/index.html.js"), meta: {"t":"Posgram"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/BELAJAR/Program (App)/jagr-uix-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
