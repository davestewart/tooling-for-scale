// standard vuex setup with computed to get and method to set
export default {
  computed: {
    user () {
      return this.$store.state.users.current
    },

    methods: {
      setUser (value) {
        this.$store.commit('users/current', value)
      }
    }
  }
}
