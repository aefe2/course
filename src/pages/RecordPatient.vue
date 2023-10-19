<template>
  <form-item class="record-patient-form" @submit.prevent="addRecord">
    <my-label for="choose-patient">Выбрать пациента</my-label>
    <select :class="theme" v-model="patient_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="patient in patients" v-bind:value="patient.id">{{
          patient.first_name[0] + '.' + patient.last_name[0] + '.' + patient.patronymic[0]
        }}
      </option>
    </select>
    <my-button @click="$router.push('/patient-add')" class="create-patient-btn"><span>Создать пациента</span>
    </my-button>
    <my-label for="chooce-cab">Выбрать кабинет</my-label>
    <select :class="theme" v-model="room_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="room in rooms" v-bind:value="room.id">{{ room.number }}</option>
    </select>
    <my-label>Дата</my-label>
    <my-input-date :class="theme" v-model="date"></my-input-date>
    <my-label>Время</my-label>
    <my-input-time :class="theme" v-model="time"></my-input-time>
    <my-button type="submit">Записать</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInputDate from "@/components/UI/MyInputDate.vue";
import MyInputTime from "@/components/UI/MyInputTime.vue";
import {mapState} from "vuex";
import {useToast} from "vue-toastification";
import axios from "axios";

export default {
  name: "RecordPatient",
  components: {MyInputTime, MyInputDate, MyButton, MySelect, MyLabel, FormItem},
  data() {
    return {
      patients: [],
      rooms: [],
      date: '',
      time: '',
      patient_id: '',
      room_id: ''
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    addBinding() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/add_reseptione',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          date: this.date,
          time: this.time,
          patient_id: this.patient_id,
          room_id: this.room_id,
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
      this.date = ''
      this.time = ''
      this.patient_id = ''
      this.room_id = ''
    },
    async getPatients() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/patients')
        this.patients = response.data
        console.log(response.data)
      } catch (e) {
        alert('error')
      }
    },
    async getRooms() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/rooms')
        this.rooms = response.data
        console.log(response.data)
      } catch (e) {
        alert('error')
      }
    }
  },
  mounted() {
    this.getPatients()
    this.getRooms()
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

.record-patient-form {
  font-size: 18px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: .2fr;
}

.record-patient-form > label {
  color: #00A26D;
}

.record-patient-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}


.record-patient-form > select {
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
}

.btn:last-child {
  color: #FFFFFF;
  padding: 8px;
  border-radius: 5px;
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

.create-patient-btn {
  color: #FFFFFF;
  padding: 8px;
  border-radius: 5px;
  background-color: #00A26D;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.create-patient-btn:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}

/**/
.create-patient-btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.create-patient-btn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.create-patient-btn:hover span {
  padding-right: 15px;
}

.create-patient-btn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>