import Vue from 'vue'

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
