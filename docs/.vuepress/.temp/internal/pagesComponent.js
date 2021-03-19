import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"/Users/suosmile/www/project/wheel/docs/.vuepress/.temp/pages/README.vue")),
  "/basic/": defineAsyncComponent(() => import(/* webpackChunkName: "v-7664c5fa" */"/Users/suosmile/www/project/wheel/docs/.vuepress/.temp/pages/basic/README.vue")),
  "/basic/ajax.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-cc719402" */"/Users/suosmile/www/project/wheel/docs/.vuepress/.temp/pages/basic/ajax.vue")),
  "/basic/apply.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-30e5c7a5" */"/Users/suosmile/www/project/wheel/docs/.vuepress/.temp/pages/basic/apply.vue")),
  "/basic/bind.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-53ba8e02" */"/Users/suosmile/www/project/wheel/docs/.vuepress/.temp/pages/basic/bind.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"/Users/suosmile/www/project/wheel/docs/.vuepress/.temp/pages/404.html.vue")),
}
