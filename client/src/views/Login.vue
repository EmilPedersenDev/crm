<template>
  <div class="login">
    <div class="login__card-wrapper">
      <div class="login__header">
        <img src="@/assets/avatar.svg" alt="avatar" />
        <h1>Login</h1>
      </div>
      <div class="login__body">
        <div class="form-group">
          <label for="ssn">Social Number</label>
          <crm-input id="ssn" placeholder="YYYYMMDDXXXX" />
        </div>
        <div class="login__btn-wrapper">
          <crm-button> Submit </crm-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Login",
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

