import axios from 'axios'

export default {
  getCompanies () {
    console.log('get companies ');
    return axios.get('http://localhost:5000/api/v1/company')
    .then(res => {
      return res.data
    })
  },
  addCompany (company) {
    console.log(company,'api hit company add kr do ab ')
    return axios.post('http://localhost:5000/api/v1/company', company)
    .then(res => {
      return res.data
    })
  },
  getCompany (id) {
    console.log('get getCompany',id);
    return axios.get(`http://localhost:5000/api/v1/company/${id}`)
    .then(res => {
      return res.data
    })
  }
}