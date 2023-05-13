<template>
  <div class="form-container">
    <form class="heal-form">
      <label for="heal-name">Лечение</label>
      <input type="text" name="heal-name" id="heal-name">
      <input type="submit" value="добавить">
    </form>
  </div>
</template>

<script>
export default {
  name: "HealAdd"
}
</script>

<style scoped>
.main {
  margin-top: 90px;
}

.heal-form {
  font-size: 18px;
  display: grid;
  justify-content: center;
  grid-template-columns: .2fr;
}

.heal-form > label {
  color: #00A26D;
}

.heal-form > input {
  color: #FFFFFF;
  font-size: 16px;
  padding: 8px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
}

.heal-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}

.heal-form > input:last-child {
  background-color: #00A26D;
  border: none;
  font-size: 18px;
  width: 170px;
  cursor: pointer;
}

.heal-form > input:last-child:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}

label {
  margin: 0 0 10px 0;
}

.heal-form input[type='button'] {
  margin: 10px 0 10px 0;
  background-color: #00A26D;
  border: none;
  cursor: pointer;
}

.heal-form input[type='button']:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}
</style>