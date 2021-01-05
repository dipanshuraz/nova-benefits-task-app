// import { createStore } from "vuex";
// import todos from './modules/todos'

// const state = {
//    count : 0
// }

// const mutations = {
//    increment(state){
//       state.count++;
//    },
//    decrement(state){
//       state.count--;
//    }
// }

// export default createStore({
//    state, 
//    todos,
//    mutations,
//    modules: {
//       todos
//     }
// })

import { createStore } from 'vuex';
import shop from '@/api/shop'

// import Vuex from 'vuex'
// import Vue from 'vue'
// import todos from './modules/todos'

// Load Vuex
// Vue.use(Vuex)

// Create Store
export default createStore({
   state : {
      products : [],
      fullname: "",
      email: "",
      company : "",
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
   
   getters : { // computed property
      productsCount(){
         // ...
      }
   },

   actions : {
      
      // fetch products
      fetchProducts({commit}) {

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
      setProducts(state, products){
         console.log('mutatuon called',products);
         state.products = products;
      },
      setFullname(state, value) {
         console.log(value,'value')
         state.fullname = value
     },
     setEmail(state, value) {
         state.email = value
     },
     setCompany(state, value) {
        console.log('value mutatipon',value)
         state.company = value
     },
     setCompanyName(state, value) {
      console.log('companyName mutatipon',value)
       state.companyName = value
   },
   setWebsite(state, value) {
      console.log('companyName mutatipon',value)
       state.website = value
   },
   setNumOfEmp(state, value) {
      console.log('companyName mutatipon',value)
       state.numOfEmp = value
   },
   setIndustry(state, value) {
      console.log('companyName mutatipon',value)
       state.industry = value
   },
   setFunding(state, value) {
      console.log('companyName mutatipon',value)
       state.funding = value
   },
     setBenefits(state, value) {
         state.benefits = value
     },
     setHealthInsurance(state, value) {
         state.healthInsurance = value
     },

     setSumInsured(state, value) {
         state.sumInsured = value
      },
      setFamilyCovered(state, value) {
         state.familyCovered = value
      },
      setParentsCovered(state, value) {
         state.parentsCovered = value
      },
      setMaternityCovered(state, value) {
         state.maternityCovered = value
      },
      setGymMembership(state, value) {
         state.gymMembership = value
      },
      setFreeDocOnCall(state, value) {
         state.freeDocOnCall = value
      },
      setNumOfPaidLeaves(state, value) {
         state.numOfPaidLeaves = value
      },
      setFlexibleTimings(state, value) {
         state.flexibleTimings = value
      },
      setRemoteWorkFriendly(state, value) {
         state.remoteWorkFriendly = value
      },
   }
 })
