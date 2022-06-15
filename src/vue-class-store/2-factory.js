import _ from 'lodash'
import Vue from 'vue'

// more idiomatic way to make a model
function makeModel (data, computed) {
  return new Vue({
    data () {
      return _.cloneDeep(data)
    },
    computed
  })
}

const data = {
  value: 1
}
const computed = {
  double () {
    return this.value * 2
  }
}

const model = makeModel(data, computed)

console.log(model.double)
