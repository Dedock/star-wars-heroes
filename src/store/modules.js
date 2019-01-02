import _camelCase from 'lodash.camelcase'

/**
 * Look for all .js files in modules dir and register them as a namespaced module
 */
const requireModule = require.context('./modules', false, /\.js$/)
const modules = {}
requireModule.keys().forEach(fileName => {
  // Don't register index as a module
  const moduleName = _camelCase(fileName.replace(/(\.\/|\.js)/g, ''))
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName)
  }
})

export default modules
