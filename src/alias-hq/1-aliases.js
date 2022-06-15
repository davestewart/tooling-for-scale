const Path = require('path')

const config = require('../../tsconfig.json')

const base = config.compilerOptions.baseUrl || ''
const aliases = config.compilerOptions.paths

// convert aliases to paths
function makePaths (aliases) {
  return Object.keys(aliases).reduce((output, key) => {
    const alias = key.replace(/\/\*/, '')
    const path = aliases[key][0].replace(/\/\*/, '')
    output[alias] = Path.join(base, path)
    return output
  }, {})
}

const paths = makePaths(aliases)

console.log(paths)
