<template>
  <form-item>
    <my-label for="first-name">Имя</my-label>
    <my-input-text id="first-name"></my-input-text>
    <my-label for="last-name">Фамилия</my-label>
    <my-input-text id="last-name"></my-input-text>
    <my-label for="patronymic">Отчество</my-label>
    <my-input-text id="patronymic"></my-input-text>
    <my-label for="role">Роль</my-label>
    <my-select id="role"></my-select>
    <my-label for="specialization">Специализация</my-label>
    <my-select id="specialization"></my-select>
    <my-label for="post">Должность</my-label>
    <my-select id="post"></my-select>
    <my-label for="password">Пароль</my-label>
    <my-input-pass id="password"></my-input-pass>
    <my-button>Добавить</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInputPass from "@/components/UI/MyInputPass.vue";
import MyButton from "@/components/UI/MyButton.vue";
import HeaderItem from "@/App.vue";

export default {
  name: "AddDoctor",
  components: {HeaderItem, MyButton, MyInputPass, MySelect, MyInputText, MyLabel, FormItem},
  
}
</script>

<style scoped>
.add-doctor-form {
  font-size: 18px;
  display: grid;
  justify-content: center;
  grid-template-columns: .2fr;
}

.add-doctor-form > my-label {
  color: #00A26D;
  margin-top: 10px;
}

.add-doctor-form > my-input-pass, my-input-text {
  color: #FFFFFF;
  font-size: 16px;
  padding: 5px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
}

.add-doctor-form > my-input-text:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}

.add-doctor-form > my-input-text, my-input-pass, my-select {
  margin-top: 10px;
}

.add-doctor-form > my-select {
  background-color: rgba(45, 45, 45, 1);
  border-color: #FFFFFF;
  color: #FFF;
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
}

.add-doctor-form > my-button {
  background-color: #00A26D;
  border: none;
  font-size: 18px;
  width: 170px;
  cursor: pointer;
  margin-top: 10px;
}

.add-doctor-form > my-button:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}

.main {
  margin-top: 25px;
}
</style>