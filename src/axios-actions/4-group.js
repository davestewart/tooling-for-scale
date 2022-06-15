import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

function request (action, params) {
  const [, method, path] = action
    .match(/(get|post) (.+)/i)

  const url = path
    .replace(/:(\w+)/g, (all, match) => params[match])

  return api
    .request({ method, url })
    .then(res => res.data)
}

// wrap multiple endpoints in dictionary
function create (api, actions) {
  return Object.keys(actions).reduce((endpoints, key) => {
    const action = actions[key]
    endpoints[key] = (params) => request(action, params)
    return endpoints
  }, {})
}

// create single object of endpoints
const todos = create (api, {
  all: 'GET /todos',
  one: 'GET /todos/:id',
  create: 'POST /todos',
})

const all = await todos.all()
const third = await todos.one({ id: 3 })

console.log({ all, third })
