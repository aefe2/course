<!--submit btn-->
<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.btn {
  background-color: #00A26D;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #FFFFFF;
  padding: 5px;
  border-radius: 5px;
}

.btn:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}
</style>