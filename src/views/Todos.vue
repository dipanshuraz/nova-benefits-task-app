<template>
  <div class="">
    <h3>Todos</h3>
    <div class="" v-for="todo in allTodos" :key="todo.id">
      <p>{{todo.id}}</p>
      <p>{{todo.title}}</p>
    </div>
  </div>  
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'
export default {
  name : "Todos",
  methods : {
    ...mapActions(['fetchTodos'])
  },
  computed : mapGetters(['allTodos']),
  created () {
    this.fetchTodos();
  }
}
</script>

<style>

</style>