<template>
  <form-item @submit.stop="signIn" class="login-form">
    <my-label>Логин</my-label>
    <my-input-text :class="theme" v-model="login" name="login"></my-input-text>
    <my-label>Пароль</my-label>
    <my-input-pass :class="theme" v-model="password" name="password"></my-input-pass>
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
import {mapState} from "vuex";

export default {
  name: "Login",
  components: {MyButton, MyInputPass, MyInputText, MyLabel, FormItem},
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/login',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          login: this.login,
          password: this.password
        }
      })
          .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user.role)
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err);
          })
      // this.login = '';
      // this.password = '';
    }
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
}
</script>

<style scoped>
.light {
  border: 1px solid #2D2D2D;
  background: #F9F9F9;
  color: #2D2D2D;
}

.dark {
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  color: #e3e2e2;
}

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