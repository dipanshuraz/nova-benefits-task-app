<template>
  <div class="container">
    
   
    <div class="card text-left p-5 m-5 border-0 shadow-sm" v-if="company">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">{{company.companyName}} </h5><button class="btn btn-outline-success" @click='increment()'>EDIT </button>
      </div>
      
      <p class="card-text m-0 ">Industry : {{company.industry}} </p>
      <p class="card-text m-0 ">Employees : {{company.fundingStage}}</p>
      <hr>
      <h5 class="card-text m-0 ">Benefits</h5>
      <br>
      <p class="card-text m-0 ">Health Insurance {{company.benefits && company.benefits.healthInsurance ? '' : ''}}</p>
      <div v-if="company.benefits.healthInsurance">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <p class="card-text m-0 ">Sum Insured </p>
        <div v-if="company.benefits.sumInsured">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <p class="card-text m-0 ">Family Covered</p>
         <div v-if="company.benefits.familyCovered">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>

       <p class="card-text m-0 ">Parents Covered</p>
         <div v-if="company.benefits.parentsCovered">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>

      <p class="card-text m-0 ">Maternity Covered</p>
        <div v-if="company.benefits.maternityCovered">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>

      <br>
      <p class="card-text m-0 ">Gym Membership</p>
        <div v-if="company.benefits.gymMembership">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>

      <p class="card-text m-0 ">Free doctor-on-call</p>
        <div v-if="company.benefits.freeDocOnCall">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>

      <p class="card-text m-0 ">Number of Paid Leaves</p>
        <div v-if="company.benefits.numOfPaidLeaves">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>

      <p class="card-text m-0 ">Flexible work timings</p>
        <div v-if="company.benefits.flexibleTimings">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>

      <p class="card-text m-0 ">Remote Work friendly</p>
        <div v-if="company.benefits.remoteWorkFriendly">
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div v-else>
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>


    </div>

       <div class="row p-5 m-5 rounded justify-content-center" style="background-color: #0365e7;
background-image: linear-gradient(46deg, #0365e7 0%, #3eabf7 100%);
">
      <div class="w-100 card-deck p-4 text-left">
<div class="card col-12 col-md-4 border-0 shadow-sm" style="border-radius : 8px">
            <div class="card-body ">
              <h5 class="card-title">Company Name : </h5>
              <p class="card-text m-0 ">Industry : </p>
              <p class="card-text m-0 ">Employees : </p>
              <hr>
              <p class="card-text m-0 ">Benefits</p>
              <br>
              <p class="card-text m-0 ">Health Insurance</p>
              <p class="card-text m-0 ">Sum Insured</p>
              <p class="card-text m-0 ">Family Covered</p>
              <p class="card-text m-0 ">Maternity Covered</p>
              <br>
              <p class="card-text m-0 ">Gym Membership</p>
              <p class="card-text m-0 ">Free doctor-on-call</p>

              <p class="card-text m-0 ">Free doctor-on-call</p>
              <p class="card-text m-0 ">Flexible work timings</p>
              <p class="card-text m-0 ">Flexible work timings</p>
            
              
              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
            </div>
          </div>
          <div class="card col-12 col-md-4 border-0 shadow-sm" style="border-radius : 8px">
            <div class="card-body ">
              <h5 class="card-title">Company Name : </h5>
              <p class="card-text m-0 ">Industry : </p>
              <p class="card-text m-0 ">Employees : </p>
              <hr>
              <p class="card-text m-0 ">Benefits</p>
              <br>
              <p class="card-text m-0 ">Health Insurance</p>
              <p class="card-text m-0 ">Sum Insured</p>
              <p class="card-text m-0 ">Family Covered</p>
              <p class="card-text m-0 ">Maternity Covered</p>
              <br>
              <p class="card-text m-0 ">Gym Membership</p>
              <p class="card-text m-0 ">Free doctor-on-call</p>

              <p class="card-text m-0 ">Free doctor-on-call</p>
              <p class="card-text m-0 ">Flexible work timings</p>
              <p class="card-text m-0 ">Flexible work timings</p>
            
              
              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
            </div>
          </div>
          <div class="card col-12 col-md-4 border-0 shadow-sm" style="border-radius : 8px">
            <div class="card-body ">
              <h5 class="card-title">Company Name : </h5>
              <p class="card-text m-0 ">Industry : </p>
              <p class="card-text m-0 ">Employees : </p>
              <hr>
              <p class="card-text m-0 ">Benefits</p>
              <br>
              <p class="card-text m-0 ">Health Insurance</p>
              <p class="card-text m-0 ">Sum Insured</p>
              <p class="card-text m-0 ">Family Covered</p>
              <p class="card-text m-0 ">Maternity Covered</p>
              <br>
              <p class="card-text m-0 ">Gym Membership</p>
              <p class="card-text m-0 ">Free doctor-on-call</p>

              <p class="card-text m-0 ">Free doctor-on-call</p>
              <p class="card-text m-0 ">Flexible work timings</p>
              <p class="card-text m-0 ">Flexible work timings</p>
            
              
              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
            </div>
          </div>
        </div>
    </div>


    <!-- <button class="btn btn-outline-success" @click='increment()'>Submit You Company</button> -->
    <!-- <button class="btn btn-outline-success" @click="decrement()">Show all Companies</button> -->
  </div>
</template>

<script>


export default {
  name: 'view Details',
  computed : {
     company() {
      return this.$store.state.viewCompany
      }
      
  },
  created(){
    console.log('GET COMPANY')
      this.$store.dispatch("GET_COMPANY", this.$route.params.id)
  }
 
}
</script>
