<template>
  <div class="container">
    <div class="card text-left p-5 m-5 border-0 shadow-sm" v-if="company">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">{{ company.companyName }}</h5>
        <router-link
          class="btn btn-outline-success"
          :to="`/edit/${company._id}`"
          >EDIT</router-link
        >
      </div>

      <p class="card-text m-0 ">Industry : {{ company.industry }}</p>
      <p class="card-text m-0 ">Funding : {{ company.fundingStage }}</p>
      <p class="card-text m-0 ">
        Employees : {{ company.numOfEmp ? company.numOfEmp : 0 }}
      </p>
      <hr />

      <h5 class="card-text m-0 ">Benefits</h5>
      <br />
      <div class="w-50">
        <table>
          <tr>
            <td>
              <p class="card-text m-0 ">
                Health Insurance
                {{
                  company.benefits && company.benefits.healthInsurance ? '' : ''
                }}
              </p>
            </td>
            <td>
              <div v-if="company.healthInsurance">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p class="card-text m-0 ">Sum Insured</p>
            </td>
            <td>
              {{ company.sumInsured ? company.sumInsured : 0 }}
            </td>
          </tr>
          <tr>
            <td>
              <p class="card-text m-0 ">Family Covered</p>
            </td>
            <td>
              <div v-if="company.familyCovered">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p class="card-text m-0 ">Parents Covered</p>
            </td>
            <td>
              <div v-if="company.parentsCovered">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p class="card-text m-0 ">Maternity Covered</p>
            </td>
            <td>
              <div v-if="company.maternityCovered">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <p class="card-text m-0 ">Gym Membership</p>
            </td>
            <td>
              <div v-if="company.gymMembership">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p class="card-text m-0 ">Free doctor-on-call</p>
            </td>
            <td>
              <div v-if="company.freeDocOnCall">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p class="card-text m-0 ">Number of Paid Leaves</p>
            </td>
            <td>
              {{ company.numOfPaidLeaves ? company.numOfPaidLeaves : 0 }}
            </td>
          </tr>
          <tr>
            <td>
              <p class="card-text m-0 ">Flexible work timings</p>
            </td>
            <td>
              <div v-if="company.flexibleTimings">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p class="card-text m-0 ">Remote Work friendly</p>
            </td>
            <td>
              <div v-if="company.remoteWorkFriendly">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div
      class="row p-5 m-5 rounded justify-content-center"
      style="background-color: #0365e7;
background-image: linear-gradient(46deg, #0365e7 0%, #3eabf7 100%);
"
    >
      <div class="w-100 card-deck p-4 text-left">
        <div
          class="card col-12 col-md-4 border-0 shadow-sm"
          style="border-radius : 8px"
        >
          <div class="card-body ">
            <h5 class="card-title">Company Name :</h5>
            <p class="card-text m-0 ">Industry :</p>
            <p class="card-text m-0 ">Employees :</p>
            <hr />
            <p class="card-text m-0 ">Benefits</p>
            <br />
            <p class="card-text m-0 ">Health Insurance</p>
            <p class="card-text m-0 ">Sum Insured</p>
            <p class="card-text m-0 ">Family Covered</p>
            <p class="card-text m-0 ">Maternity Covered</p>
            <br />
            <p class="card-text m-0 ">Gym Membership</p>
            <p class="card-text m-0 ">Free doctor-on-call</p>

            <p class="card-text m-0 ">Free doctor-on-call</p>
            <p class="card-text m-0 ">Flexible work timings</p>
            <p class="card-text m-0 ">Flexible work timings</p>

            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
          </div>
        </div>
        <div
          class="card col-12 col-md-4 border-0 shadow-sm"
          style="border-radius : 8px"
        >
          <div class="card-body ">
            <h5 class="card-title">Company Name :</h5>
            <p class="card-text m-0 ">Industry :</p>
            <p class="card-text m-0 ">Employees :</p>
            <hr />
            <p class="card-text m-0 ">Benefits</p>
            <br />
            <p class="card-text m-0 ">Health Insurance</p>
            <p class="card-text m-0 ">Sum Insured</p>
            <p class="card-text m-0 ">Family Covered</p>
            <p class="card-text m-0 ">Maternity Covered</p>
            <br />
            <p class="card-text m-0 ">Gym Membership</p>
            <p class="card-text m-0 ">Free doctor-on-call</p>

            <p class="card-text m-0 ">Free doctor-on-call</p>
            <p class="card-text m-0 ">Flexible work timings</p>
            <p class="card-text m-0 ">Flexible work timings</p>
          </div>
        </div>
        <div
          class="card col-12 col-md-4 border-0 shadow-sm"
          style="border-radius : 8px"
        >
          <div class="card-body ">
            <h5 class="card-title">Company Name :</h5>
            <p class="card-text m-0 ">Industry :</p>
            <p class="card-text m-0 ">Employees :</p>
            <hr />
            <p class="card-text m-0 ">Benefits</p>
            <br />
            <p class="card-text m-0 ">Health Insurance</p>
            <p class="card-text m-0 ">Sum Insured</p>
            <p class="card-text m-0 ">Family Covered</p>
            <p class="card-text m-0 ">Maternity Covered</p>
            <br />
            <p class="card-text m-0 ">Gym Membership</p>
            <p class="card-text m-0 ">Free doctor-on-call</p>

            <p class="card-text m-0 ">Free doctor-on-call</p>
            <p class="card-text m-0 ">Flexible work timings</p>
            <p class="card-text m-0 ">Flexible work timings</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view Details',

  computed: {
    company() {
      return this.$store.state.viewCompany;
    },
    topCompanies() {
      return this.$store.state.topCompanies;
    },
  },
  created() {
    this.$store.dispatch('GET_COMPANIES');
    this.$store.dispatch('GET_COMPANY', this.$route.params.id);
  },
  updated() {
    this.$store.dispatch('GET_TOP_COMPANY', {
      numOfEmp: this.$store.state.viewCompany.numOfEmp,
      industry: this.$store.state.viewCompany.industry,
    });
  },
};
</script>
