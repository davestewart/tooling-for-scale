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
