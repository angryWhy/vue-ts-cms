import registerElement from './register-element'
import { App } from 'vue'

export function register(app: App) {
  registerElement(app)
}
