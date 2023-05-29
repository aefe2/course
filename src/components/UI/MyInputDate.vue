<template>
  <input :value="modelValue" @input="updateInput" type="date" name="date" id="date">
</template>

<script>
export default {
  name: "MyInputDate",
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
#date {
  color: #FFFFFF;
  font-size: 16px;
  padding: 8px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
}

#date:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}
</style>