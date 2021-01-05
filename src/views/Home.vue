<template>
  <div class="home d-flex w-25 mx-auto justify-content-around">
    <router-link  class="btn btn-outline-success" to="/first-step/">Submit Company</router-link>
    <router-link  class="btn btn-outline-success" to="/show-companies/">Show Companies</router-link>
    <!-- <button class="btn btn-outline-success" @click="decrement()">Show all Companies</button> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
// import { computed } from 'vue'

// import shop from '@/api/shop'
// import store from '@/store/index'

export default {
  name: 'Home',
  // computed : {
  //   products () {
  //     return this.$store.state.products 
  //   }
  // },
  computed : mapState ('products'),
  created(){
    console.log('sbs pehle kon')
      this.$store.dispatch("fetchProducts")
  }
 
  // setup() {
  //   const store = useStore();
  //   const count = computed(() => store.state.count)

  //   function increment() {
  //     store.commit('increment')
  //   }
  //   function decrement() {
  //     store.commit('decrement')
  //   }
    
  //   return { count, increment, decrement}

  // }
}
</script>
