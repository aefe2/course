<template>
  <form-item class="add-patient-form" @submit.prevent="addTimesheet">
    <my-label>Кабинет</my-label>
    <select :class="theme" v-model="room_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="room in rooms" v-bind:value="room.id">{{ room.number }}</option>
    </select>
    <my-label>Доктор</my-label>
    <select :class="theme" v-model="user_id">
      <option value="" disabled selected>Выберите...</option>
      <option v-for="doctor in doctors" v-bind:value="doctor.id">{{
          doctor.first_name[0] + '.' + doctor.last_name[0] + '.' + doctor.patronymic[0]
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
  name: "AddTimesheet",
  components: {MyInputTime, MySelect, MyButton, MyInputDate, MyInputText, MyLabel, FormItem},
  data() {
    return {
      room_id: '',
      user_id: '',
      date: '',
      time: '',
      doctors: [],
      rooms: []
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get('http://192.168.13.72/CodingOnSideOfServer/api/add_timesheet')
        this.doctors = response.data.doctors
        this.rooms = response.data.rooms
        console.log(response.data)
      } catch (e) {
        alert('error')
      }
    },
    addTimesheet() {
      axios({
        method: 'post',
        url: 'http://192.168.13.72/CodingOnSideOfServer/api/add_timesheet',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          room_id: this.room_id,
          user_id: this.user_id,
          date: this.date,
          time: this.time,
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
      this.room_id = '';
      this.user_id = '';
      this.date = '';
      this.time = '';
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