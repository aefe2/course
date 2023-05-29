<template>
  <input :value="modelValue" @input="updateInput" type="password" class="input-pass">
</template>

<script>
export default {
  name: "MyInputPass",
  props: {
    modelValue: {
      modelValue: [String, Number]
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
.input-pass {
  color: #FFFFFF;
  font-size: 16px;
  padding: 5px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
}

.input-pass:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}
</style>