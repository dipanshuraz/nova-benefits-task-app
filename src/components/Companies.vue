<template>
  <div class="container">
    <div class="">
      <table class="table table-sm table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Company Name</th>
      <th scope="col">Location</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    {{users}}
    <!-- <tr v-for='(user , index) in users' :key='user.id'>
      
      <td>{{index}}</td>
      <td>{{user.username}}</td>
      <td>{{user.address.street}}</td>
      <td><router-link  :to="`/view-details/${user.id}`" >View</router-link></td>
    </tr> -->
  </tbody>
</table>

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
    },
     users() {
    return this.$store.state.users
    }
  },
  created(){
    console.log('sbs pehle kon')
      this.$store.dispatch("fetchProducts")
       this.$store.dispatch("GET_USERS");
  }
 
}
</script>
