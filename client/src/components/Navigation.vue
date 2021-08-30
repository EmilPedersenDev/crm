<template>
  <nav>
    <img src="@/assets/logo.png" alt="logo" />
    <ul>
      <li v-if="isAuthenticated">
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="isAuthenticated">
        <router-link to="/about">About</router-link>
      </li>
      <li v-if="isAuthenticated">
        <router-link to="/account">Account</router-link>
      </li>
      <li>
        <crm-button v-if="!isAuthenticated" @click="loginUser">
          Login</crm-button
        >
        <crm-button v-else @click="logoutUser"> Logout</crm-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "navigation",

  methods: {
    ...mapActions(["logout"]),
    loginUser() {
      console.log("login");
    },
    async logoutUser() {
      await this.logout();
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 80px;
  margin-top: 82px;
  margin-left: 20px;
  height: 100%;
  background: linear-gradient(0deg, #389466, #42b883);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  border-radius: 5px;
  img {
    width: 40px;
    height: 40px;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      margin: 10px 0px;
    }
  }
}
</style>