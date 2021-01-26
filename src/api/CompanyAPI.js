import axios from 'axios';

export default {
  getCompanies() {
    return axios.get('http://localhost:5000/api/v1/company').then((res) => {
      return res.data;
    });
  },
  addCompany(company, domain) {
    company.domain = domain;
    return axios
      .post('http://localhost:5000/api/v1/company', company)
      .then((res) => {
        return res.data;
      });
  },
  getCompany(id) {
    return axios
      .get(`http://localhost:5000/api/v1/company/${id}`)
      .then((res) => {
        return res.data;
      });
  },

  getTopCompany(industry) {
    return axios
      .get(`http://localhost:5000/api/v1/company/getTop/${industry}`)
      .then((res) => {
        return res.data;
      });
  },

  updateCompany(company) {
    return axios
      .put(`http://localhost:5000/api/v1/company/${company._id}`, company)
      .then((res) => {
        return res.data;
      });
  },

  deleteCompany(id) {
    return axios
      .delete(`http://localhost:5000/api/v1/company/${id}`)
      .then((res) => {
        return res.data;
      });
  },
};
