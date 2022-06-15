// noinspection UnnecessaryLocalVariableJS

const Path = require('path')

const config = require('../../tsconfig.json')

const aliases = config.compilerOptions.paths

const clean = (text) => text.replace(/\/\*/, '')

const drivers = {
  webpack (aliases) {
    return Object.keys(aliases).reduce((output, key) => {
      const alias = clean(key)
      const path = clean(aliases[key][0])
      output[alias] = path
      return output
    }, {})
  },

  test (aliases) {
    return Object.keys(aliases).reduce((output, key) => {
      const alias = clean(key)
      const path = clean(aliases[key][0])
      output[alias] = path.toUpperCase()
      return output
    }, {})
  },
}

function getAliases (name) {
  return drivers[name](aliases)
}

getAliases('test') //?

