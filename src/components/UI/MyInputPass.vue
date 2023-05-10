<template>
  <input type="password" class="input-pass">
</template>

<script>
export default {
  name: "MyInputPass"
}
</script>

<style scoped>
.input-pass {
  color: #FFFFFF;
  font-size: 16px;
  padding: 8px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
  margin-bottom: 20px;
}

.input-pass:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}
</style>