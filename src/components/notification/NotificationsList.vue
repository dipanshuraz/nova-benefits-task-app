<template>
  <div class="notifications-list">
    <notification-message
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage";

export default {
  components: {
    NotificationMessage
  },
  computed: {
      notifications() {
      return this.$store.state.notifications;
    },
  } 
  
};
</script>

<style>
.notifications-list {
  position: fixed;
  top : 0;
  right: 0;
  margin-right: 30px;
  width: 320px;
}
.close ,
button :focus, 
button :active {
    outline: none;   
}
</style>