import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import {
  ElAlert,
  ElAside,
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElLink
} from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside,
  ElCheckbox,
  ElLink
]
export default function (app: App) {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
