<template>
  <div class="account content">
    <h1>Account</h1>
    <p>{{ fullName }}</p>
    <p>{{ user.personalNumber }}</p>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "account",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ user: "getUser" }),
    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>