import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const action = 'GET /todos'

const [, method, url] = action
  .match(/(get|post|patch|delete) (.+)/i)

const data = await api
  .request({ method, url })
  .then(res => res.data)

console.log(data) //?
