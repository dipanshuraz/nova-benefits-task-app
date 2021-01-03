import { createStore } from "vuex";
import todos from './modules/todos'

const state = {
   count : 0
}

const mutations = {
   increment(state){
      state.count++;
   },
   decrement(state){
      state.count--;
   }
}

export default createStore({
   state, 
   todos,
   mutations,
   modules: {
      todos
    }
})