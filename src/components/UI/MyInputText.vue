<template>
  <input :value="modelValue" type="text" @input="updateInput" class="input">
</template>

<script>
export default {
  name: "MyInputText",
  props: {
    modelValue: {
      modelValue: [String]
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  color: #FFFFFF;
  font-size: 16px;
  padding: 5px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
}

.input:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}
</style>