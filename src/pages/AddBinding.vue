<template>
  <form-item class="add-patient-form" @submit.prevent="addBinding">
    <my-label>Палата</my-label>
    <select :class="theme" v-model="chamber_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="chamber in chambers" v-bind:value="chamber.id">{{ chamber.number }}</option>
    </select>
    <my-label>Пациент</my-label>
    <select :class="theme" v-model="patient_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="patient in patients" v-bind:value="patient.id">{{
          patient.first_name[0] + '.' + patient.last_name[0] + '.' + patient.patronymic[0]
        }}
      </option>
    </select>
    <my-label>Дата</my-label>
    <my-input-date :class="theme" v-model="date"></my-input-date>
    <my-label>Время</my-label>
    <my-input-time :class="theme" v-model="time"></my-input-time>
    <my-button type="submit">Создать</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyInputDate from "@/components/UI/MyInputDate.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {mapState} from "vuex";
import MySelect from "@/components/UI/MySelect.vue";
import MyInputTime from "@/components/UI/MyInputTime.vue";
import axios from "axios";
import {useToast} from "vue-toastification";

export default {
  name: "AddBinding",
  components: {MyInputTime, MySelect, MyButton, MyInputDate, MyInputText, MyLabel, FormItem},
  data() {
    return {
      patients: [],
      chambers: [],
      date: '',
      time: '',
      patient_id: '',
      chamber_id: ''
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/add_binding')
        this.patients = response.data.patients
        this.chambers = response.data.chambers
        console.log(response.data)
      } catch (e) {
        alert('error')
      }
    },
    addBinding() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/add_binding',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          date: this.date,
          time: this.time,
          patient_id: this.patient_id,
          chamber_id: this.chamber_id,
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
      this.chamber_id = ''
    }
  },
  mounted() {
    this.getItems()
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme,
    }),
  }
}
</script>

<style scoped>
.add-patient-form > select {
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