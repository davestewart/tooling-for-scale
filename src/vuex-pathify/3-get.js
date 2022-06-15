import _ from 'lodash'

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
