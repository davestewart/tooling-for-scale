import Vue from 'vue'

// vue model encapsulates state and getters
const model = new Vue({
  data () {
    return {
      value: 1
    }
  },

  computed: {
    double () {
      return this.value * 2
    }
  }
})

console.log(model.double)
