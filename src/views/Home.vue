<template>
  <div class="home d-flex w-25 mx-auto justify-content-around">
    <router-link  class="btn btn-outline-success" to="/first-step/">Submit Company</router-link>
    <router-link  class="btn btn-outline-success" to="/show-companies/">Show Companies</router-link>
    <!-- <button class="btn btn-outline-success" @click="decrement()">Show all Companies</button> -->
   
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState } from 'vuex'
// import { computed } from 'vue'

// import shop from '@/api/shop'
// import store from '@/store/index'

export default {
  name: 'Home',
  computed : {
     products() {
      return this.$store.getters.allProducts;
    },
     gettersusers() {
    return this.$store.getters.allUsers
    },
    users() {
    return this.$store.state.users
    }
  },
  // computed : mapState ('allPosts'),
  created(){
      this.$store.dispatch("GET_POST");
    console.log('sbs pehle kon')
      this.$store.dispatch("fetchProducts")
  },
  mounted() {
    this.$store.dispatch("GET_USERS");
  }

}
</script>
