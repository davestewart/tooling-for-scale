// @see https://github.com/davestewart/vue-class-store/blob/master/src/index.ts

import * as Vue from 'vue'

type C = { new (...args: any[]): {} }
type R = Record<any, any>

function makeOptions (model: R) {
  const prototype = Object.getPrototypeOf(model)
  const members = Object.getOwnPropertyDescriptors(prototype)
  return {
    data () {
      return Object.keys(model).reduce((output, key) => {
        output[key] = model[key]
        return output
      }, {})
    },

    computed: Object.keys(members).reduce((output, key) => {
      const member = members[key]
      if (member.get) {
        output[key] = member.get
      }
      return output
    }, {})
  }
}

function Store<T extends C> (constructor: T): T {
  function construct (...args: any[]) {
    const instance = new (constructor as any)(...args)
    const options = makeOptions(instance)
    // @ts-ignore
    const store = new Vue(options)
    return (store as unknown) as T  }
  return (construct as unknown) as T
}

@Store
class Model {
  value = 1

  constructor (value = 10) {
    this.value = value
  }

  get double () {
    return this.value * 2
  }
}

const store = new Model()

console.log(store.double)
