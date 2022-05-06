import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import { ElButton, ElTabPane, ElTabs } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components = [ElButton, ElTabs, ElTabPane]
export default function (app: App) {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
