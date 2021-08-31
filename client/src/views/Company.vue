<template>
  <div class="company content">
    <h1>Company</h1>
    <h2>Add Company</h2>
    <form @submit="submit">
      <crm-input v-model="model.name" placeholder="Name..." id="name" />
      <crm-input v-model="model.price" placeholder="Price..." id="price" />

      <crm-button type="submit"> Add Contact </crm-button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import api from "../service/api";
import { Company } from "../service/interfaces";
export default Vue.extend({
  name: "company",
  data() {
    return {
      model: <Company>{},
    };
  },
  methods: {
    async submit() {
      try {
        await api.post("/company", this.model);
      } catch (err) {
        console.error(err);
      }
    },
  },
  computed: {},
});
</script>

<style lang="scss" scoped>
</style>