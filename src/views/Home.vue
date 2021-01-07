<template>
  <div class="home d-flex w-25 mx-auto justify-content-around">
    <router-link
      @click="this.$store.dispatch('CLEAR_DATA')"
      class="btn btn-outline-success"
      to="/first-step/"
      >Submit Company</router-link
    >
    <router-link class="btn btn-outline-success" to="/show-companies/"
      >Show Companies</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
