const Path = require('path')

const config = require('../../tsconfig.json')

const base = config.compilerOptions.baseUrl || ''
const aliases = config.compilerOptions.paths

const clean = (text) => text.replace(/\/\*/, '')

const drivers = {
  // make paths becomes the base driver (webpack format)
  webpack (aliases) {
    return Object.keys(aliases).reduce((output, key) => {
      const alias = clean(key)
      const path = clean(aliases[key][0])
      output[alias] = Path.join(base, path)
      return output
    }, {})
  },

  // another driver, return absolute paths
  other (aliases) {
    aliases = this.webpack(aliases)
    return Object.keys(aliases).reduce((output, key) => {
      output[key] = Path.resolve(aliases[key])
      return output
    }, {})
  },
}

// main function
function getAliases (name) {
  return drivers[name](aliases)
}

getAliases('other') //?
