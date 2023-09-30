<template>
  <div class="form-container">
    <form-item @submit.prevent="addHeal" class="heal-form">
      <my-label for="heal-name">Лечение</my-label>
      <my-input-text :class="theme" v-model="description"></my-input-text>
      <my-button type="submit">Добавить</my-button>
    </form-item>
  </div>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {mapState} from "vuex";
import axios from "axios";
import {useToast} from "vue-toastification";

export default {
  name: "HealAdd",
  components: {MyButton, MyInputText, MyLabel, FormItem},
  data() {
    return {
      description: ''
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    addHeal() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/add_cure',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          description: this.description
        }
      })
          .then(() => {
            this.toast.success('Успех!', {
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
          .catch(() => {
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
      this.description = ''
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

.heal-form {
  font-size: 18px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: .2fr;
}

.heal-form > label {
  color: #00A26D;
}

.heal-form > input {
  font-size: 16px;
  padding: 7px;
  border-radius: 5px;
}

.heal-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
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