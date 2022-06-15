import _ from 'lodash'

function getOne (path) {
  return function () {
    return _.get(this.$store, path.replace(/\//, '.'))
  }
}

function setOne (path) {
  return function (value) {
    this.$store.commit(path, value)
  }
}

function syncOne (path) {
  return {
    get: getOne(path),
    set: setOne(path),
  }
}

function sync (input) {
  if (typeof input === 'string') {
    return syncOne(input)
  }
  return input.reduce((output, key) => {
    output[key] = syncOne(input[key])
    return output
  }, {})
}
export default {
  computed: sync({
    user: 'users/current',
    products: 'products',
  }),
}
