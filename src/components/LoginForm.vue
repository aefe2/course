<template>
  <form class="form" @submit.prevent>
    <my-label for="login">Логин</my-label>
    <my-input-text id="login"></my-input-text>
    <my-label for="password">Пароль</my-label>
    <my-input-pass id="password"></my-input-pass>
    <my-button>Войти</my-button>
  </form>
</template>

<script>
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyInputPass from "@/components/UI/MyInputPass.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "Login-Form",
  components: {MyButton, MyInputPass, MyInputText, MyLabel},
}
</script>

<style scoped>
.form {
  font-size: 18px;
  display: grid;
  justify-content: center;
  grid-template-columns: .2fr;
}
</style>