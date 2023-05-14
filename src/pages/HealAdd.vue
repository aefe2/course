<template>
  <div class="form-container">
    <form-item class="heal-form">
      <my-label for="heal-name">Лечение</my-label>
      <my-input-text type="text" name="heal-name" id="heal-name"></my-input-text>
      <my-button type="submit">Добавить</my-button>
    </form-item>
  </div>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "HealAdd",
  components: {MyButton, MyInputText, MyLabel, FormItem}
}
</script>

<style scoped>
.heal-form {
  font-size: 18px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: .2fr;
}

.heal-form > label {
  color: #00A26D;
}

.heal-form > input {
  color: #FFFFFF;
  font-size: 16px;
  padding: 7px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
}

.heal-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}

.btn {
  background-color: #00A26D;
  border: none;
  font-size: 18px;
  width: 170px;
  cursor: pointer;
}

.btn:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}
</style>