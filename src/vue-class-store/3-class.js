class Model {
  value = 1
  get double () {
    return this.value * 2
  }
}

const store = new Model()

console.log(store.double)
