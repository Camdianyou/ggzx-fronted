import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入国际化中文
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
createApp(App)
  // 安装element-plus插件
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app')
