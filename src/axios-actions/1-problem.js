import axios from 'axios'

// vuex store has api paths spread out over multiple actions
export default {
  state () {
    return {
      users: []
    }
  },

  actions: {
    all ({ commit }) {
      return Api.get('users').then(res => {
        commit('users', res.data)
        return res.data
      })
    },

    get (context, id) {
      return Api.get(`users${id}`)
    },

    add ({ commit }, data) {
      return Api.post('users', data).then(res => {
        commit('users', [...state.users, res.data])
        return res.data
      })
    },

    remove ({ state, commit }, id) {
      return Api.delete(`users${id}`).then(res => {
        commit('users', state.users.filter(user => user.id !== id))
        return res.data
      })
    }
  },

  mutations: {
    users (state, users) {
      state.users = [...users]
    }
  }
}

const Api = axios.create({
  baseURL: '',
})
