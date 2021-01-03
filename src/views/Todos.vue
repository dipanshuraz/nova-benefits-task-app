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
import { mapGetters } from 'vuex'
export default {
  name : "Todos",
  computed : mapGetters(['allTodos'])
}
</script>

<style>

</style>