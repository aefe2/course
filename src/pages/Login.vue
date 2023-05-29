<template>
  <form-item @submit.prevent="login" class="login-form">
    <my-label for="login">Логин</my-label>
    <my-input-text v-model="username" id="login"></my-input-text>
    <my-label for="password">Пароль</my-label>
    <my-input-pass v-model="password" id="password"></my-input-pass>
    <my-button type="submit">Войти</my-button>
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
  components: {MyButton, MyInputPass, MyInputText, MyLabel, FormItem},
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // login() {
    //   const userData = {
    //     username: this.username,
    //     password: this.password
    //   }
    //   this.$store.dispatch(AUTH_REQUEST, userData)
    //       .then(this.$router.push('/'))
    //       .catch(err => console.log(err))
    // }
    async login() {
      const response = await fetch('api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: {login: this.username, password: this.password}
      })
      const data = await response.json()
      if (data.success) {
        // Store user session data
        localStorage.setItem('user', JSON.stringify(data.user))
        // Redirect to home page
        this.$router.push('/')
      } else {
        alert('Invalid username or password')
      }
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