const config = require('../../tsconfig.json')

const aliases = config.compilerOptions.paths //?

function makePaths (aliases) {
  return Object.keys(aliases).reduce((output, key) => {
    const alias = key.replace(/\/\*/, '')
    const path = aliases[key][0].replace(/\/\*/, '')
    output[alias] = path
    return output
  }, {})
}

makePaths(aliases) //?

