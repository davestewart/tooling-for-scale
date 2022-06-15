import _ from 'lodash'

// helper function to more easily create computed properties
function get (path) {
  return function () {
    return _.get(this.$store, path)
  }
}

export default {
  computed: {
    user:  get('users.current'),
  }
}
