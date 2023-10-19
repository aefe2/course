<template>
  <form-item @submit="logout" class="login-form">
    <my-button type="submit">Выйти</my-button>
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
  methods: {
    async logout() {
      const response = await axios.get('http://localhost/CodingOnSideOfServer/api/logout')
      console.log(response)
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
    },
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