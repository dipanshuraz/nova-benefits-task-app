<template>
  <div class="text-left w-50 mx-auto border border-light p-5 ">
    <p class="h4 mb-4">Company Details</p>

    <input
      type="text"
      id="companyName"
      name="companyName"
      class="form-control mb-4"
      placeholder="Company Name"
      v-model="companyName"
    />

    <input
      type="text"
      id="website"
      name="website"
      class="form-control mb-4"
      placeholder="Website"
      v-model="website"
    />

    <input
      type="number"
      id="numOfEmp"
      name="numOfEmp"
      class="form-control mb-4"
      placeholder="Number Of Employees"
      v-model="numOfEmp"
    />

    <div class="form-row mb-4">
      <div class="col">
        <select
          class="form-control"
          name="industry"
          id="industry"
          v-model="industry"
          aria-placeholder="Chose Industry"
        >
          <option value="Others">Choose Industry</option>
          <option value="Fashion">Fashion</option>
          <option value="Food">Food</option>
          <option value="Education">Education</option>
          <option value="Music">Music</option>
          <option value="Internet">Internet</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Sports">Sports</option>
          <option value="Transport">Transport</option>
          <option value="Finance">Finance</option>
          <option value="Software">Software</option>
        </select>
      </div>
      <div class="col">
        <select
          class="form-control"
          name="funding"
          id="funding"
          v-model="funding"
          aria-placeholder="Funding"
        >
          <option selected value="NA">Funding Stage</option>
          <option value="Self-funding">Self-funding</option>
          <option value="Seed-capital">Seed-capital</option>
          <option value="Venture">Venture</option>
          <option value="Series A">Series A</option>
          <option value="Series B">Series B</option>
          <option value="Series C">Series C</option>
          <option value="IPO">IPO</option>
        </select>
      </div>
    </div>
    <div class="my-2">
      Benefits :
      <input
        type="checkbox"
        id="benefits"
        name="benefits"
        class=""
        v-model="benefits"
      />
    </div>
    <div v-if="benefits" class="border p-4">
      Health Insurance :
      <input
        type="checkbox"
        id="healthInsurance"
        name="healthInsurance"
        class=""
        v-model="healthInsurance"
      />
      <br />
      Sum Insured :
      <input
        type="number"
        id="sumInsured"
        name="sumInsured"
        class="form-control"
        v-model="sumInsured"
      />
      <br />
      Family Covered :
      <input
        type="checkbox"
        id="familyCovered"
        name="familyCovered"
        class=""
        v-model="familyCovered"
      />
      <br />
      Parents Covered :
      <input
        type="checkbox"
        id="parentsCovered"
        name="parentsCovered"
        class=""
        v-model="parentsCovered"
      />
      <br />
      Maternity Covered :
      <input
        type="checkbox"
        id="maternityCovered"
        name="maternityCovered"
        class=""
        v-model="maternityCovered"
      />
    </div>
    <div class="my-3">
      Gym Membership :
      <input
        type="checkbox"
        id="gymMembership"
        name="gymMembership"
        class="my-2"
        v-model="gymMembership"
      />
      <br />
      Free Doctor on Call :
      <input
        type="checkbox"
        id="freeDocOnCall"
        name="freeDocOnCall"
        class="my-2"
        v-model="freeDocOnCall"
      />
      <br />
      Number of Paid Leaves :
      <input
        type="number"
        id="numOfPaidLeaves"
        name="numOfPaidLeaves"
        class="form-control"
        v-model="numOfPaidLeaves"
      />
      <br />
      Flexible Work Timings :
      <input
        type="checkbox"
        id="flexibleTimings"
        name="flexibleTimings"
        class="my-2"
        v-model="flexibleTimings"
      />
      <br />
      Remote Work Friendly :
      <input
        type="checkbox"
        id="remoteWorkFriendly"
        name="remoteWorkFriendly"
        class="my-2"
        v-model="remoteWorkFriendly"
      />
    </div>

    <buttons></buttons>
  </div>
</template>

<script>
import Buttons from './Buttons.vue';

export default {
  components: {
    Buttons,
  },
  computed: {
    companyName: {
      get() {
        return this.$store.state.company.companyName;
      },
      set(value) {
        this.$store.commit('setCompanyName', value);
      },
    },
    website: {
      get() {
        return this.$store.state.company.website;
      },
      set(value) {
        this.$store.commit('setWebsite', value);
      },
    },
    numOfEmp: {
      get() {
        return this.$store.state.company.numOfEmp;
      },
      set(value) {
        this.$store.commit('setNumOfEmp', value);
      },
    },
    industry: {
      get() {
        return this.$store.state.company.industry;
      },
      set(value) {
        this.$store.commit('setIndustry', value);
      },
    },
    funding: {
      get() {
        return this.$store.state.company.fundingStage;
      },
      set(value) {
        this.$store.commit('setFunding', value);
      },
    },
    benefits: {
      get() {
        return this.$store.state.company.benefits;
      },
      set(value) {
        this.$store.commit('setBenefits', value);
      },
    },
    healthInsurance: {
      get() {
        return this.$store.state.company.healthInsurance;
      },
      set(value) {
        this.$store.commit('setHealthInsurance', value);
      },
    },
    sumInsured: {
      get() {
        return this.$store.state.company.sumInsured;
      },
      set(value) {
        this.$store.commit('setSumInsured', value);
      },
    },
    familyCovered: {
      get() {
        return this.$store.state.company.familyCovered;
      },
      set(value) {
        this.$store.commit('setFamilyCovered', value);
      },
    },
    parentsCovered: {
      get() {
        return this.$store.state.company.parentsCovered;
      },
      set(value) {
        this.$store.commit('setParentsCovered', value);
      },
    },
    maternityCovered: {
      get() {
        return this.$store.state.company.maternityCovered;
      },
      set(value) {
        this.$store.commit('setMaternityCovered', value);
      },
    },
    gymMembership: {
      get() {
        return this.$store.state.company.gymMembership;
      },
      set(value) {
        this.$store.commit('setGymMembership', value);
      },
    },
    freeDocOnCall: {
      get() {
        return this.$store.state.company.freeDocOnCall;
      },
      set(value) {
        this.$store.commit('setFreeDocOnCall', value);
      },
    },
    numOfPaidLeaves: {
      get() {
        return this.$store.state.company.numOfPaidLeaves;
      },
      set(value) {
        this.$store.commit('setNumOfPaidLeaves', value);
      },
    },
    flexibleTimings: {
      get() {
        return this.$store.state.company.flexibleTimings;
      },
      set(value) {
        this.$store.commit('setFlexibleTimings', value);
      },
    },
    remoteWorkFriendly: {
      get() {
        return this.$store.state.company.remoteWorkFriendly;
      },
      set(value) {
        this.$store.commit('setRemoteWorkFriendly', value);
      },
    },
  },
};
</script>
