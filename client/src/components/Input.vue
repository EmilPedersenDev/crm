<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    :id="id"
    @input="onHandleInput($event.target.value)"
    :class="className || 'form-control'"
  />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "crm-input",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  methods: {
    onHandleInput(value: string) {
      this.$emit("input", value);
    },
  },
});
</script>

<style lang="scss" scoped>
input {
  // padding: 10px;
  // border: 1px solid #000;
  // background: transparent;
  // border-radius: 5px;
  // width: 100%;
}
</style>