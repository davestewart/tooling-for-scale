import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const action = 'GET /posts/:id'

function request (action, params) {
  // method and path
  const [, method, path] = action
    .match(/(get|post) (.+)/i)

  // url + placeholder
  const url = path
    .replace(/:(\w+)/g, (all, match) => params[match])

  // request
  return api
    .request({ method, url })
    .then(res => res.data)
}

const data = await request(action, { id: 10 })

console.log(data)
