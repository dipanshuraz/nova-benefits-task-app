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
          <tr v-for="(company, index) in companies" :key="company._id">
            <td>{{ index }}</td>
            <td>{{ company.companyName }}</td>
            <td>{{ company.industry }}</td>
            <td>{{ company.fundingStage }}</td>
            <td>
              <router-link :to="`/view-details/${company._id}`"
                >View</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'View Companies',
  computed: {
    companies() {
      return this.$store.state.companies;
    },
  },

  created() {
    this.$store.dispatch('GET_COMPANIES');
  },
};
</script>
