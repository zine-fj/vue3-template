
import { createStore } from 'vuex'

import getters from './getters'
const modulesFiles = require.context('./modules', true, /\.js$/)
let modules = null

modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const store = createStore({
  modules: {
    ...modules
  },
  getters
})

export default store
