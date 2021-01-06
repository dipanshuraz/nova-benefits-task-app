import axios from 'axios'

export default {
  getUsers () {
    return axios.get('http://localhost:5000/api/v1/users')
    .then(res => {
      return res.data
    })
  },
  addUser (user) {
    console.log(user,'api hit add user 2')
    return axios.post('http://localhost:5000/api/v1/users', user)
    .then(res => {
      console.log('res se pehel');
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