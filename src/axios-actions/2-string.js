import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const action = 'GET /todos'

// simple regex match to get method and path
const [, method, url] = action
  .match(/(get|post|patch|delete) (.+)/i)

// make a request
const data = await api
  .request({ method, url })
  .then(res => res.data)

console.log(data) //?
