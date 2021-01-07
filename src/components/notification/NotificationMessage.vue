<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show my-4"
    style="background : #CCCCCC"
    role="alert"
  >
    <button
      @click="removeNotification(notification.id)"
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    {{ notification.message }}
  </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  props: ['notification'],
  data() {
    return {
      timeout: null,
    };
  },

  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },

  // created() {
  //   console.log('created')
  //   this.timeout = setTimeout(() => this.removeNotification(this.notification.id), 5000);
  //   // this.timeout = setTimeout(() => {
  //     // console.log(this.notification.id,'this.notification.id')
  //     // this.$store.dispatch("removeNotification", this.notification.id)

  //     // this.removeNotification(this.notification.id);
  //   // }, 1000);
  // },

  methods: {
    removeNotification(id) {
      console.log(id, 'id');
      this.$store.dispatch('removeNotification', id);
    },
  },
};
</script>
