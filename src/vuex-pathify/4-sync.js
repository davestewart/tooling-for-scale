import _ from 'lodash'

function get (path) {
  return function () {
    return _.get(this.$store, path.replace(/\//, '.'))
  }
}

function set (path) {
  return function (value) {
    this.$store.commit(path, value)
  }
}

function sync (path) {
  return {
    get: get(path),
    set: set(path),
  }
}

export default {
  computed: {
    user: sync('users/current'),
  }
}
