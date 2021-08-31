<template>
  <div class="contacts content">
    <h1>Contacts</h1>
    <h2>Add Contact</h2>
    <form @submit="submit">
      <crm-input v-model="model.name" placeholder="Name..." id="name" />
      <crm-input v-model="model.email" placeholder="email..." id="email" />
      <crm-input
        v-model="model.personalNumber"
        placeholder="PersonalNumber..."
        id="personalNumber"
      />
      <crm-input v-model="model.phone" placeholder="Phone..." id="phone" />

      <crm-button type="submit"> Add Contact </crm-button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import api from "../service/api";
import { Contacts } from "../service/interfaces";
export default Vue.extend({
  name: "contacts",
  data() {
    return {
      model: <Contacts>{},
    };
  },
  methods: {
    async submit() {
      try {
        await api.post("/contact", this.model);
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