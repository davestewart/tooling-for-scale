// get/set computed to centralise functionality
export default {
  computed: {
    user: {
      get () {
        return this.$store.state.users.current
      },
      set (value) {
        this.$store.commit('users/current', value)
      },
    }
  }
}
