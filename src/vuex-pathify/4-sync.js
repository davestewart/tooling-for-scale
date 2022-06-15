import _ from 'lodash'

// getter helper
function get (path) {
  return function () {
    return _.get(this.$store, path.replace(/\//, '.'))
  }
}

// setter helper
function set (path) {
  return function (value) {
    this.$store.commit(path, value)
  }
}

// get and set helper
function sync (path) {
  return {
    get: get(path),
    set: set(path),
  }
}

// single property implementation
export default {
  computed: {
    user: sync('users/current'),
  }
}
