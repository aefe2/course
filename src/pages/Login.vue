<template>
  <form-item @submit="signIn" class="login-form">
    <my-label>Логин</my-label>
    <my-input-text :class="theme" v-model.trim="login" name="login"></my-input-text>
    <my-label>Пароль</my-label>
    <my-input-pass :class="theme" v-model.trim="password" name="password"></my-input-pass>
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
import {mapMutations, mapState} from "vuex";
import {useToast} from "vue-toastification";

export default {
  name: "Login",
  components: {MyButton, MyInputPass, MyInputText, MyLabel, FormItem},
  data() {
    return {
      login: '',
      password: '',
      token: ''
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  computed: {
    ...mapState({
      myCookies: state => state.tokenModule.myCookies,
      theme: state => state.themeModule.theme
    })
  },
  methods: {
    ...mapMutations({
      navModule: "toggleNav",
      tokenModule: "tokenModule/getCookie",
    }),
    roleName(role) {
      if (role === 1) return 'admin'
      if (role === 2) return 'worker'
      if (role === 3) return 'receptionDoctor'
      if (role === 4) return 'healDoctor'
    },
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
            this.tokenModule()
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userRole', this.roleName(response.data.user.role))
            this.$router.push({name: 'Расписание'})
          })
          .catch((err) => {
            console.log(err);
          })
    },
  },
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