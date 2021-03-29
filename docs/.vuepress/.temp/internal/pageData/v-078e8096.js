export const data = {
  "key": "v-078e8096",
  "path": "/framework/hmr.html",
  "title": "简单实现 Vite 热更新",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "framework/hmr.md",
  "git": {
    "updatedTime": 1616666422000,
    "contributors": [
      {
        "name": "shaosuo",
        "email": "suoyuesmile@163.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData(data)
}

if (import.meta.hot) {
  import.meta.hot.accept()
  __VUE_HMR_RUNTIME__.updatePageData(data)
}
