// 引入项目中全部的自定义全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
const allGlobalComponent = { SvgIcon }
// 对外暴露插件对象
export default {
  // 一定要叫install方法
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponent[key])
    })
  },
}
