<template>
  <form-item class="add-patient-form" @submit.prevent="patientAdd">
    <my-label>Фамилия</my-label>
    <my-input-text :class="theme" v-model.trim="last_name"></my-input-text>
    <my-label>Имя</my-label>
    <my-input-text :class="theme" v-model.trim="first_name"></my-input-text>
    <my-label>Отчество</my-label>
    <my-input-text :class="theme" v-model.trim="patronymic"></my-input-text>
    <my-label>Дата рождения</my-label>
    <my-input-date :class="theme" v-model="birthday"></my-input-date>
    <my-label>Снилс</my-label>
    <my-input-text :class="theme" :maxlength="limit" v-model.number="snils_code"></my-input-text>
    <my-button type="submit">Создать</my-button>
  </form-item>
</template>

<script>
import {defineComponent} from "vue";
import FormItem from "@/components/Form-Item.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInputDate from "@/components/UI/MyInputDate.vue";
import {mapState} from "vuex";
import axios from "axios";
import {useToast} from "vue-toastification";

export default defineComponent({
  components: {MyInputDate, MyButton, MyLabel, MyInputText, FormItem},
  data() {
    return {
      limit: 6,
      first_name: '',
      last_name: '',
      patronymic: '',
      birthday: '',
      snils_code: ''
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    patientAdd() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/add_patient',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          first_name: this.first_name,
          last_name: this.last_name,
          patronymic: this.patronymic,
          birthday: this.birthday,
          snils_code: this.snils_code,
        }
      })
          .then((response) => {
            this.toast.success(`Успех`, {
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
          .catch((err) => {
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
      this.last_name = '';
      this.patronymic = '';
      this.birthday = '';
      this.snils_code = '';
    }
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
})
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

.add-patient-form {
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