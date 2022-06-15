import Vue from 'vue'

// this runs only under webpack
const req = require.context('./modules', true, /\.(vue|js)$/i)
req.keys().forEach(key => {
  const name = key.split('/').pop().match(/\w+/).shift()
  if (name !== 'index') {
    Vue.component(name, req(key).default)
  }
})
