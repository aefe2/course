<template>
  <form-item @submit.stop="signUp" class="login-form">
    <my-label>Фамилия</my-label>
    <my-input-text :class="theme" v-model.trim="last_name" name="login"></my-input-text>
    <my-label>Имя</my-label>
    <my-input-text :class="theme" v-model.trim="first_name" name="login"></my-input-text>
    <my-label>Отчество</my-label>
    <my-input-text :class="theme" v-model.trim="patronymic" name="login"></my-input-text>
    <my-label>Профессия</my-label>
    <select :class="theme" v-model="profession_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="profession in professions" v-bind:value="profession.id">{{ profession.name }}</option>
    </select>
    <my-label>Специализация</my-label>
    <select :class="theme" v-model="specialization_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="specialization in specializations" v-bind:value="specialization.id">{{ specialization.name }}
      </option>
    </select>
    <my-label>Роль</my-label>
    <select :class="theme" v-model.number="role">
      <option value="" disabled selected>Выберите...</option>
      <option value="1">Администратор</option>
      <option value="0">Работник</option>
    </select>
    <my-label>Логин</my-label>
    <my-input-text :class="theme" v-model.trim="login" name="login"></my-input-text>
    <my-label>Пароль</my-label>
    <my-input-pass :class="theme" v-model.trim="password" name="password"></my-input-pass>
    <my-button type="submit">Создать</my-button>
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
import {useToast} from "vue-toastification";

export default {
  name: "Login",
  components: {MyButton, MyInputPass, MyInputText, MyLabel, FormItem},
  data() {
    return {
      first_name: '',
      login: '',
      password: '',
      last_name: '',
      patronymic: '',
      profession_id: '',
      specialization_id: '',
      role: '',
      professions: [],
      specializations: []
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/user_registration')
        this.professions = response.data.professions
        this.specializations = response.data.specializations
      } catch (e) {
        this.toast.error('Ошибка', {
          position: "top-right",
          timeout: 1500,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.62,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        })
      }
    },
    signUp() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/user_registration',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          first_name: this.first_name,
          login: this.login,
          password: this.password,
          last_name: this.last_name,
          patronymic: this.patronymic,
          profession_id: this.profession_id,
          specialization_id: this.specialization_id,
          role: this.role,
        }
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        this.toast.error('Ошибка', {
          position: "top-right",
          timeout: 1500,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.62,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        })
      })
      this.first_name = '';
      this.login = '';
      this.password = '';
      this.last_name = '';
      this.patronymic = '';
      this.profession_id = '';
      this.specialization_id = '';
      this.role = '';
    }
  },
  mounted() {
    this.getItems()
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

.login-form > select {
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
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