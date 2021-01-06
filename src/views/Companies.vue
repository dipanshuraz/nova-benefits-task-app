<template>
  <div class="container">
    <div class="row">
      <table class="table table-sm table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Company Name</th>
      <th scope="col">Employees</th>
      <th scope="col">Funding</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for='(company , index) in companies' :key='company._id'>
      <td>{{index}}</td>
      <td>{{company.companyName}}</td>
      <td>{{company.industry}}</td>
      <td>{{company.fundingStage}}</td>
      <td><router-link  :to="`/view-details/${company._id}`" >View</router-link></td>
    </tr>
  </tbody>
</table>

    </div>
 
    <!-- <button class="btn btn-outline-success" @click='increment()'>Submit You Company</button> -->
    <!-- <button class="btn btn-outline-success" @click="decrement()">Show all Companies</button> -->
  </div>
</template>

<script>


export default {
  name: 'View Companies',
  computed : {
    products () {
      return this.$store.state.products 
    },
     companies() {
      return this.$store.state.companies
    }
  },
  created(){
    console.log('sbs pehle kon')
      this.$store.dispatch("fetchProducts")
       this.$store.dispatch("GET_COMPANIES");
  }
 
}
</script>
