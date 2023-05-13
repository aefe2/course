<template>
  <div class="form-container">
    <form-item class="diagnos-form">
      <my-label for="diagnos-name">Название диагноза</my-label>
      <my-input-text type="text" name="diagnos-name" id="diagnos-name"></my-input-text>
      <my-button type="submit">Добавить</my-button>
    </form-item>
  </div>
</template>

<script>
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyButton from "@/components/UI/MyButton.vue";
import FormItem from "@/components/Form-Item.vue";

export default {
  name: "DiagnosisAdd",
  components: {FormItem, MyButton, MyInputText, MyLabel}
}
</script>

<style scoped>
.diagnos-form {
  font-size: 18px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: .2fr;
}

.diagnos-form > label {
  color: #00A26D;
}

.diagnos-form > input {
  color: #FFFFFF;
  font-size: 16px;
  padding: 7px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
}

.diagnos-form > input[type='text']:focus {
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

.btn {
  background-color: #00A26D;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}
</style>