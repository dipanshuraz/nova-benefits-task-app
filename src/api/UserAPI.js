import axios from 'axios'

export default {
  getUsers () {
    return axios.get('http://localhost:5000/api/v1/users')
    .then(res => {
      return res.data
    })
  },
  getPosts () {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      return res.data
    })
  }
}