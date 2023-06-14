<template>
  <div class="form-container">
    <form-item @submit.prevent="addReseptione" class="heal-form">
      <my-label>Пациент</my-label>
      <select :class="theme" v-model="patient_id">
        <option value="" disabled selected>Выберите...</option>
        <option v-for="patient in patients" v-bind:value="patient.id">{{
            patient.first_name[0] + '.' + patient.last_name[0] + '.' + patient.patronymic[0]
          }}
        </option>
      </select>
      <my-label>Расписание</my-label>
      <select :class="theme" v-model="timesheet_id">
        <option value="" disabled selected>Выберите...</option>
        <option v-for="timesheet in timesheets" v-bind:value="timesheet.id">
          {{ timesheet.date.replace(/-/g, '.') + ' - ' + timesheet.time.slice(0, 5) }}
        </option>
      </select>
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
  name: "AddReseptione",
  components: {MyButton, MyInputText, MyLabel, FormItem},
  data() {
    return {
      patient_id: '',
      timesheet_id: '',
      patients: [],
      timesheets: []
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/add_reseptione')
        this.patients = response.data.patients
        this.timesheets = response.data.timesheets
        console.log(response.data)
      } catch (e) {
        alert('error')
      }
    },
    addReseptione() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/add_reseptione',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          patient_id: this.patient_id,
          timesheet_id: this.timesheet_id,
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
            console.log(err);
          })
      this.timesheet_id = ''
      this.patient_id = ''
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

.heal-form > select {
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
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