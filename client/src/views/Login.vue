<template>
  <div class="login">
    <div class="login__card-wrapper">
      <form @submit.prevent="submit">
        <div class="login__header">
          <img src="@/assets/avatar.svg" alt="avatar" />
          <h1>Login</h1>
        </div>
        <div class="login__body">
          <div class="form-group">
            <label for="email">Email</label>
            <crm-input
              id="email"
              placeholder="Email..."
              v-model="model.email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <crm-input
              id="password"
              placeholder="Password..."
              v-model="model.password"
            />
          </div>
          <div class="login__btn-wrapper">
            <crm-button type="submit"> Submit </crm-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapMutations } from "vuex";
import { Login as LoginType } from "../service/interfaces";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      model: <LoginType>{},
    };
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["setToken"]),
    async submit() {
      try {
        await this.login(this.model);
        this.$router.push("/home").catch((err) => {
          console.error(err);
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login__card-wrapper {
    width: 100%;
    max-width: 400px;
    box-shadow: 0px 6px 10px 1px rgba($color: #000000, $alpha: 0.4);
    border-radius: 5px;
    .login__header {
      background: linear-gradient(0deg, #389466, #42b883);
      display: flex;
      border-radius: 5px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px 0px;
      color: #fff;
      img {
        width: 100px;
        height: auto;
      }
    }

    .login__body {
      padding: 20px;
      .form-group {
        margin-top: 30px;
      }
      .login__btn-wrapper {
        margin-top: 30px;
        text-align: center;
      }
    }
  }
}
</style>

