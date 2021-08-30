<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navigation from "./components/Navigation.vue";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "App",
  components: {
    navigation: Navigation,
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  created() {
    if (this.isAuthenticated) {
      this.getUser();
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
});
</script>

<style lang="scss">
</style>
