<template>
  <button
    class="btn btn-outline-primary"
    :type="type"
    @click="onHandleClick"
    :id="id"
  >
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
    type: {
      type: String,
      default: "button",
      validator: (value) => {
        return ["button", "submit", "reset"].includes(value);
      },
    },
  },
  methods: {
    onHandleClick(e: any) {
      if (this.type === "submit" || this.type === "reset") return;
      this.$emit("click", e);
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