// 通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import { constRoute } from './router'

// 对RouteRecordRaw类型进行扩展
export type AddRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

let router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: constRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
