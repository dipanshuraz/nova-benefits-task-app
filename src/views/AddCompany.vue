<template>
  <div class="container">
    <div class="w-50 mx-auto">
       <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
     
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
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
    
      this.$store.dispatch("fetchProducts")
  }
 
}
</script>
