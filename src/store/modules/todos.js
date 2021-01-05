import axios from 'axios';

const state = {
  todos : [
    {
      id : 1,
      title : "dfghjk"
    },
    {
      id : 2,
      title : "ertyuio"
    },
    {
      id : 3,
      title : "xcvbnm"
    }
  ] 
}

const getters = {
  allTodos : state => state.todos
}
const actions = {
  async fetchTodos ({ commit }) {
    console.log('object fetchtodos');
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(res.data,'res')
    commit('setTodos', res.data)
  }
}

const mutations = {
  setTodos : (state, todos) => state.todos = todos
}

export default {
  state, getters, actions, mutations
}
