<template>
  <select>
<!--    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>-->
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>