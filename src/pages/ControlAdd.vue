<template>
  <form-item class="add-control-form" @submit.prevent="addControl">
    <my-label>Прикрепление</my-label>
    <select :class="theme" v-model="binding_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="binding in bindings" v-bind:value="binding.id">{{ binding.id }}</option>
    </select>
    <my-label>Лечение</my-label>
    <my-input-text v-model="treatment" :class="theme"></my-input-text>
    <my-label>Время</my-label>
    <my-input-time :class="theme" v-model="time"></my-input-time>
    <my-button type="submit">Создать</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputDate from "@/components/UI/MyInputDate.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInputTime from "@/components/UI/MyInputTime.vue";
import {useToast} from "vue-toastification";
import {mapState} from "vuex";
import axios from "axios";
import MyInputText from "@/components/UI/MyInputText.vue";

export default {
  name: "ControlAdd",
  components: {MyInputText, MyInputTime, MyButton, MyInputDate, MyLabel, FormItem},
  data() {
    return {
      bindings: [],
      binding_id: '',
      treatment: '',
      time: ''
    }
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/add_control')
        this.bindings = response.data.bindings
        console.log(response)
      } catch (e) {
        this.toast.error('Ошибка!', {
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
        console.log(e);
      }
    },
    addControl() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/add_control',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          binding_id: this.binding_id,
          time: this.time,
          treatment: this.treatment,
        }
      })
          .then((response) => {
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
            console.log(response);
          })
          .catch((err) => {
            this.toast.error('Ошибка!', {
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
            console.log(err);
          })
      this.time = ''
      this.binding_id = ''
      this.treatment = ''
    }
  },
  mounted() {
    this.getItems()
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme,
    }),
  },
  setup() {
    const toast = useToast()
    return {toast}
  }
}
</script>

<style scoped>
.add-control-form > select {
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
}

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

.add-control-form {
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