<template>
  <div class="container">
    <div class="">
    VIEW PAGE
    </div>
    <!-- <button class="btn btn-outline-success" @click='increment()'>Submit You Company</button> -->
    <!-- <button class="btn btn-outline-success" @click="decrement()">Show all Companies</button> -->
  </div>
</template>

<script>


export default {
  name: 'Add Company',
  computed : {
    products () {
      return this.$store.state.products 
    }
  },
  created(){
    console.log('sbs pehle kon')
      this.$store.dispatch("fetchProducts")
  }
 
}
</script>
