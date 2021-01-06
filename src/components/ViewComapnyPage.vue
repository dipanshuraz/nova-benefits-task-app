<template>
  <div class="container">
    <button class="btn btn-outline-success" @click='increment()'>EDIT </button>
    <div class="">
    VIEW PAGE {{ $route.params.id}}
    </div>
    <div v-if="user" class="">
      <p>{{user.username}}</p>
      <p>{{user.address.street}}</p>
      <p>{{user.role}}</p>
    </div>
    <!-- <button class="btn btn-outline-success" @click='increment()'>Submit You Company</button> -->
    <!-- <button class="btn btn-outline-success" @click="decrement()">Show all Companies</button> -->
  </div>
</template>

<script>


export default {
  name: 'Add Company',
  computed : {
     user() {
      return this.$store.getters.user(parseInt(this.$route.params.id))
      }
  },
  created(){
    console.log('sbs pehle kon')
      this.$store.dispatch("fetchProducts")
  }
 
}
</script>
