import { createStore } from 'vuex';
// import axios from 'axios'
// import http from "../http-common";
import UserAPI from '../api/UserAPI'
import shop from '@/api/shop'

export default createStore({
   state : {
      products : [],
      user : {
         fullname: "",
         email: "",
      },
      company : {
         companyName: "",
         website: "",
         numOfEmp: "",
         industry: "",
         funding: "",
         benefits : false,
         healthInsurance :false,
         sumInsured : '', 
         familyCovered : false ,
         parentsCovered : false, 
         maternityCovered : false, 
         gymMembership : false,
         freeDocOnCall : false, 
         numOfPaidLeaves : '', 
         flexibleTimings : false ,
         remoteWorkFriendly : false ,
      },
      users : []
   },
   
   getters : { // computed property
      allPosts: (state) => state.posts,
      allUsers: (state) => state.users,
      user : state => id => {
         return state.users.find(user => user.id == id)
      }
   },


   actions : {
      // getUsers({ commit }) {
      //    axios.get('http://localhost:5000/api/v1/users')
      //    .then(response => {
      //       console.log(response.data,'response')
      //    commit('SET_USERS', response.data)
      //    })
      //    },
      // getPosts({ commit }) {
      //    axios.get('https://jsonplaceholder.typicode.com/posts')
      //    .then(response => {
      //    commit('SET_POSTS', response.data)
      //    })
      //    },
      GET_USERS({ commit }) {
         console.log('enter GET_USERS');
         return UserAPI.getUsers()
         .then(response => {
            console.log(response,'response GET_USERS')
            commit('SET_USERS', response.data)
            })
            .catch(err => console.log(err,'err'))
         },
         GET_POST({ commit }) {
            console.log('enter GET_POST');
            return UserAPI.getPosts()
            .then(response => {
               console.log(response,'response GET_POST')
               commit('SET_POSTS', response)
               })
               .catch(err => console.log(err,'err'))
            },
     
      // fetch products
      fetchProducts({commit}) {

         return new Promise((resolve) => {
            shop.getProducts(products => {
               console.log(products,'products store')
               commit("setProducts", products)
               resolve();
             })   
         })
      },
      fetchCompanies({commit}) {

         return new Promise((resolve) => {
            shop.getProducts(products => {
               console.log(products,'products store')
               commit("setProducts", products)
               resolve();
             })   
         })
      }
   },

   mutations : {
      SET_USERS(state, users) {
         state.users = users
         },
      SET_POSTS(state, posts) {
         console.log(posts,'posts');
         state.posts = posts
         },

      setProducts(state, products){
         console.log('mutatuon called',products);
         state.products = products;
      },

      setCompanies(state, companies){
         console.log('mutatuon called companies',companies);
         state.companies = companies;
      },

      setFullname(state, value) {
         console.log(value,'value')
         state.user.fullname = value
     },
     setEmail(state, value) {
         state.user.email = value
     },

     setCompanyName(state, value) {
      console.log('companyName mutatipon',value)
       state.company.companyName = value
   },
   setWebsite(state, value) {
      console.log('companyName mutatipon',value)
       state.company.website = value
   },
   setNumOfEmp(state, value) {
      console.log('companyName mutatipon',value)
       state.company.numOfEmp = value
   },
   setIndustry(state, value) {
      console.log('companyName mutatipon',value)
       state.company.industry = value
   },
   setFunding(state, value) {
      console.log('companyName mutatipon',value)
       state.company.funding = value
   },
     setBenefits(state, value) {
         state.company.benefits = value
     },
     setHealthInsurance(state, value) {
         state.company.healthInsurance = value
     },

     setSumInsured(state, value) {
         state.company.sumInsured = value
      },
      setFamilyCovered(state, value) {
         state.company.familyCovered = value
      },
      setParentsCovered(state, value) {
         state.company.parentsCovered = value
      },
      setMaternityCovered(state, value) {
         state.company.maternityCovered = value
      },
      setGymMembership(state, value) {
         state.company.gymMembership = value
      },
      setFreeDocOnCall(state, value) {
         state.company.freeDocOnCall = value
      },
      setNumOfPaidLeaves(state, value) {
         state.company.numOfPaidLeaves = value
      },
      setFlexibleTimings(state, value) {
         state.company.flexibleTimings = value
      },
      setRemoteWorkFriendly(state, value) {
         state.company.remoteWorkFriendly = value
      },
   }
 })
