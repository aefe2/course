<template>
  <form-item @submit.prevent="addAppointment" class="appointment-form">
    <my-label for="patient">Пациент</my-label>
    <select v-model="patient_id" :class="theme" name="patient-select" id="patient">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="patient in patients" v-bind:value="patient.id">
        {{ patient.first_name + ' ' + patient.last_name + ' ' + patient.patronymic }}
      </option>
    </select>
    <my-label for="diagnos">Диагноз</my-label>
    <select v-model="diagnoses_id" :class="theme" name="diagnosis" id="diagnos">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="diagnosis in diagnoses" v-bind:value="diagnosis.id">{{ diagnosis.name }}</option>
    </select>
    <my-button @click="$router.push('/diagnosis-add')" class="diagnos-add"><span>Добавить диагноз</span></my-button>
    <my-label for="heal">Лечение</my-label>
    <select v-model="curie_id" :class="theme" name="heal" id="heal">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="heal in heals" v-bind:value="heal.id">{{ heal.description }}</option>
    </select>
    <my-button @click="$router.push('/heal-add')" class="heal-add"><span>Добавить лечение</span></my-button>
    <my-label for="doctor">Врач</my-label>
    <select v-model="user_id" :class="theme" name="doctor" id="doctor">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="doctor in doctors" v-bind:value="doctor.id">
        {{ doctor.first_name + ' ' + doctor.last_name + ' ' + doctor.patronymic }}
      </option>
    </select>
    <my-button type="submit">Отправить</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {mapState} from "vuex";
import {useToast} from "vue-toastification";
import axios from "axios";

export default {
  name: "PatientCards",
  components: {MyButton, MySelect, MyLabel, FormItem},
  data() {
    return {
      patients: [],
      diagnoses: [],
      heals: [],
      doctors: [],
      patient_id: '',
      diagnoses_id: '',
      curie_id: '',
      user_id: '',
      currentDateFormatted: ''
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    addAppointment() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/add_patient_card',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          patient_id: this.patient_id,
          cure_id: this.curie_id,
          diagnose_id: this.diagnoses_id,
          user_id: this.user_id,
          date: this.currentDateFormatted
        }
      })
          .then((response) => {
            if (response.data.message.indexOf('пусто')) {
              this.toast.error('Заполните все поля', {
                position: "top-right",
                timeout: 3500,
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
            } else {
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
            }
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
      this.patient_id = ''
      this.diagnoses_id = ''
      this.curie_id = ''
      this.user_id = ''
    },
    async getPatients() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/patients')
        this.patients = response.data
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
    async getDiagnoses() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/diagnoses')
        this.diagnoses = response.data
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
      }
    },
    async getHeals() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/curies')
        this.heals = response.data
      } catch (e) {
        console.log(e);
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
      }
    },
    async getDoctors() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/users')
        this.doctors = response.data
      } catch (e) {
        console.log(e);
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
      }
    }
  },
  mounted() {
    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');

    this.currentDateFormatted = `${year}-${month}-${day}`;

    this.getPatients()
    this.getDiagnoses()
    this.getHeals()
    this.getDoctors()
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
  color-scheme: dark;
}

.dark {
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  color: #e3e2e2;
}

.appointment-form {
  font-size: 18px;
  display: grid;
  grid-gap: 11px;
  justify-content: center;
  grid-template-columns: .2fr;
}

.appointment-form > label {
  color: #00A26D;
}

.appointment-form > button, input {
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
}

.appointment-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}

.appointment-form > select {
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
}

.btn:last-child {
  margin-top: 5px;
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

select {
  border-color: #79b7a3;
}

.appointment-form button {
  background-color: #00A26D;
  border: none;
  cursor: pointer;
}

.appointment-form button:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}

.diagnos-add span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.diagnos-add span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.diagnos-add:hover span {
  padding-right: 15px;
}

.diagnos-add:hover span:after {
  opacity: 1;
  right: 0;
}

/**/
.heal-add span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.heal-add span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.heal-add:hover span {
  padding-right: 15px;
}

.heal-add:hover span:after {
  opacity: 1;
  right: 0;
}
</style>