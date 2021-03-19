import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/suosmile/www/project/wheel/node_modules/@vuepress/theme-default/lib/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/suosmile/www/project/wheel/node_modules/@vuepress/theme-default/lib/layouts/Layout.vue")),
}
