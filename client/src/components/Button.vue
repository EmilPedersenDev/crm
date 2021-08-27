<template>
  <button class="btn btn-outline-primary" @click="onHandleClick" :id="id">
    <slot>Click</slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "crm-button",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    onHandleClick() {
      this.$emit("click");
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  padding: 10px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
}
</style>