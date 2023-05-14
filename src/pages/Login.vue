<template>
  <form-item class="login-form">
    <my-label for="login">Логин</my-label>
    <my-input-text id="login"></my-input-text>
    <my-label for="password">Пароль</my-label>
    <my-input-pass id="password"></my-input-pass>
    <my-button>Войти</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyInputPass from "@/components/UI/MyInputPass.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "Login",
  components: {MyButton, MyInputPass, MyInputText, MyLabel, FormItem}
}
</script>

<style scoped>
.login-form {
  font-size: 18px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: .2fr;
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