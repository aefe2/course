<template>
  <input :value="modelValue" @input="updateInput" type="time" name="time" id="time">
</template>

<script>
export default {
  name: "MyInputTime",
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
#time {
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
}

#time:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>