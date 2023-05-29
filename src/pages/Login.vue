<template>
  <form-item @submit.prevent="signIn" class="login-form">
    <my-label>Логин</my-label>
    <my-input-text v-model="email" required></my-input-text>
    <my-label>Пароль</my-label>
    <my-input-pass v-model="password" required></my-input-pass>
    <my-button type="submit">Войти</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyInputPass from "@/components/UI/MyInputPass.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {MyButton, MyInputPass, MyInputText, MyLabel, FormItem},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      const userData = {
        email: this.email,
        password: this.password
      }
      axios({
        method: 'post',
        url: 'https://reqres.in/api/login',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        data: userData
      })
          .then((response) => {
            localStorage.setItem('token', response.data.token);
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err);
          })
    }
  }
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