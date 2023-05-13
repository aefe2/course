<template>
  <input type="time" name="time" id="time">
</template>

<script>
export default {
  name: "MyInputTime"
}
</script>

<style scoped>
#time {
  color: #FFFFFF;
  font-size: 16px;
  padding: 8px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
}

#time:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}
</style>