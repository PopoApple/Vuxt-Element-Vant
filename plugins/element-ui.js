import Vue from 'vue'
import {
  Button,
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const components = [
  Button,
]

const Element = {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

Vue.use(Element, { locale })