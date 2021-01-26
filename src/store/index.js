import { createStore } from 'vuex';
import UserAPI from '../api/UserAPI';
import CompanyAPI from '../api/CompanyAPI';

// function getClosest(num, ar) {
//   console.log(num, ' num num num numOfEmp ');
//   console.log(ar[0].numOfEmp, ' ar[0].numOfEmp ');

//   if (num < ar[0].numOfEmp ? ar[0].numOfEmp : 0) {
//     return ar[0].numOfEmp;
//   } else if (
//     num > ar[ar.length - 1].numOfEmp ? ar[ar.length - 1].numOfEmp : 0
//   ) {
//     return ar[ar.length - 1].numOfEmp;
//   } else {
//     return ar.sort((a, b) => Math.abs(a - num) - Math.abs(b - num)).slice(0, 3);
//   }
// }

function getClosest(num, ar) {
  if (num < ar[0].numOfEmp) {
    return ar[0];
  } else if (num > ar[ar.length - 1].numOfEmp) {
    return ar[ar.length - 1];
  } else {
    return ar
      .sort((a, b) => Math.abs(a.numOfEmp - num) - Math.abs(b.numOfEmp - num))
      .slice(0, 3);
  }
}

export default createStore({
  state: {
    products: [],
    user: {
      fullname: '',
      email: '',
    },
    company: {
      companyName: '',
      website: '',
      numOfEmp: 0,
      industry: 'Others',
      fundingStage: 'NA',
      benefits: false,
      healthInsurance: false,
      sumInsured: 0,
      familyCovered: false,
      parentsCovered: false,
      maternityCovered: false,
      gymMembership: false,
      freeDocOnCall: false,
      numOfPaidLeaves: 0,
      flexibleTimings: false,
      remoteWorkFriendly: false,
    },
    currentUser : {},
    users: [],
    companies: [],
    viewCompany: {},
    notifications: [],
    topCompanies: [],
  },

  getters: {
    allPosts: (state) => state.posts,
    companies: (state) => state.companies,
  },

  actions: {
    showAlert() {
      console.log('object');
      this.$swal('Hello Vue world!!!');
    },
    ADD_USER({ commit }) {

      let self = this;
      this.$swal.fire({
        title: "Processing Request...",
        text: "Please wait",
        onBeforeOpen() {
          self.$swal.showLoading(); //Adds built in loader animation during modal open
        },
        onAfterClose() {
          self.$swal.hideLoading(); //might not be necessary
        },
        allowOutsideClick: false, //makes modal behave captively
        allowEscapeKey: false,
        allowEnterKey: false
      });

      return UserAPI.addUser(this.state.user)
        .then((res) => {
          console.log(res,'res');
          commit('CLEAR_USER');
          if(res.data) {
            this.$swal.update({
              title: "Finished",
              html: `Response data: ${res.data}`
            });
            this.$swal.hideLoading(); //Disables
            commit('SET_CURRENT_USER',res.data)
          }
        })
        .catch((err) => console.log(err, 'err'));
    },
    ADD_COMPANY({ commit }) {
      console.log(this.state.currentUser.email,'currentUser');
      return CompanyAPI.addCompany(this.state.company,this.state.currentUser.email)
        .then(() => {
          commit('CLEAR_COMPANY');
        })
        .catch((err) => console.log(err, 'err'));
    },

    CLEAR_DATA({ commit }) {
      commit('CLEAR_USER');
      commit('CLEAR_COMPANY');
    },

    GET_COMPANIES({ commit }) {
      return CompanyAPI.getCompanies()
        .then((response) => {
          commit('SET_COMPANIES', response.data);
        })
        .catch((err) => console.log(err, 'err'));
    },

    GET_COMPANY({ commit }, id) {
      return CompanyAPI.getCompany(id)
        .then((response) => {
          commit('VIEW_COMPANY_DATA', response.data);
        })
        .catch((err) => console.log(err, 'err'));
    },

    DELETE_COMPANY({ commit }, id) {
      return CompanyAPI.deleteCompany(id)
        .then((response) => {
          commit('CLEAR_COMPANY', response.data);
        })
        .catch((err) => console.log(err, 'err'));
    },

    UPDATE_COMPANY({ commit }) {
      return CompanyAPI.updateCompany(this.state.company)
        .then((response) => {
          commit('CLEAR_COMPANY', response.data);
        })
        .catch((err) => console.log(err, 'err'));
    },

    GET_TOP_COMPANY({ commit }, data) {
      console.log(
        getClosest(
          data.numOfEmp,
          this.state.companies.filter((comp) => comp.industry == data.industry)
        ),
        'get closests'
      );

      commit('SET_TOP_COMPANY', 'data');
    },

    GET_POST({ commit }) {
      return UserAPI.getPosts()
        .then((response) => {
          commit('SET_POSTS', response);
        })
        .catch((err) => console.log(err, 'err'));
    },

    EDIT_COMPANY({ commit }, id) {
      return new Promise((resolve) => {
        CompanyAPI.getCompany(id)
          .then((response) => {
            commit('SET_COMPANY', response.data);
            resolve();
          })
          .catch((err) => console.log(err, 'err'));
      });
    },

    addNotification({ commit }, notification) {
      commit('PUSH_NOTIFICATION', notification);
    },

    removeNotification({ commit }, id) {
      commit('REMOVE_NOTIFICATION', id);
    },
  },

  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
      });
    },

    REMOVE_NOTIFICATION(state, id) {
      state.notifications = state.notifications.filter((notification) => {
        return notification.id != id;
      });
    },

    CLEAR_USER(state) {
      state.user.fullname = '';
      state.user.email = '';
    },

    CLEAR_COMPANY(state) {
      state.company.companyName = '';
      state.company.website = '';
      state.company.numOfEmp = 0;
      state.company.industry = 'Others';
      state.company.fundingStage = 'NA';
      state.company.benefits = false;
      state.company.healthInsurance = false;
      state.company.sumInsured = 0;
      state.company.familyCovered = false;
      state.company.parentsCovered = false;
      state.company.maternityCovered = false;
      state.company.gymMembership = false;
      state.company.freeDocOnCall = false;
      state.company.numOfPaidLeaves = 0;
      state.company.flexibleTimings = false;
      state.company.remoteWorkFriendly = false;
    },

    SET_COMPANIES(state, companies) {
      state.companies = companies;
    },
    SET_TOP_COMPANY(state, companies) {
      state.topCompanies = companies;
    },

    SET_COMPANY(state, company) {
      state.company = company;
    },

    VIEW_COMPANY_DATA(state, company) {
      state.viewCompany = company;
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },

    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },

    setProducts(state, products) {
      state.products = products;
    },

    setFullname(state, value) {
      state.user.fullname = value;
    },
    setEmail(state, value) {
      state.user.email = value;
    },

    setCompanyName(state, value) {
      state.company.companyName = value;
    },
    setWebsite(state, value) {
      state.company.website = value;
    },
    setNumOfEmp(state, value) {
      state.company.numOfEmp = value;
    },
    setIndustry(state, value) {
      state.company.industry = value;
    },
    setFunding(state, value) {
      state.company.fundingStage = value;
    },
    setBenefits(state, value) {
      state.company.benefits = value;
    },
    setHealthInsurance(state, value) {
      state.company.healthInsurance = value;
    },

    setSumInsured(state, value) {
      state.company.sumInsured = value;
    },
    setFamilyCovered(state, value) {
      state.company.familyCovered = value;
    },
    setParentsCovered(state, value) {
      state.company.parentsCovered = value;
    },
    setMaternityCovered(state, value) {
      state.company.maternityCovered = value;
    },
    setGymMembership(state, value) {
      state.company.gymMembership = value;
    },
    setFreeDocOnCall(state, value) {
      state.company.freeDocOnCall = value;
    },
    setNumOfPaidLeaves(state, value) {
      state.company.numOfPaidLeaves = value;
    },
    setFlexibleTimings(state, value) {
      state.company.flexibleTimings = value;
    },
    setRemoteWorkFriendly(state, value) {
      state.company.remoteWorkFriendly = value;
    },
  },
});
