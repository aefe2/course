<template>
  <preloader></preloader>
  <button-to-top></button-to-top>
  <div class="btn-link-container">
    <my-button @click="$router.push('/patient-add')" class="create-patient"><span>Создать пациента</span></my-button>
  </div>
  <div v-show="patients.length > 0" class="table-wrapper">
    <table class="table">
      <thead>
      <tr class="head-row">
        <th @click="sort('lastName')">Фамилия</th>
        <th @click="sort('firstName')">Имя</th>
        <th @click="sort('patronymic')">Отчество</th>
        <th @click="sort('date')">Дата рождения</th>
        <th @click="sort('snils')">Снилс</th>
      </tr>
      </thead>
      <tbody>
      <transition-group name="patients-list">
        <tr v-for="patient in sortedPatients" :key="patient.id">
          <td>{{ patient.first_name }}</td>
          <td>{{ patient.last_name }}</td>
          <td>{{ patient.patronymic }}</td>
          <td>{{ patient.birthday }}</td>
          <td>{{ patient.snils_code }}</td>
          <td :class="theme"><a @click="deletePatient(patient.id)">X</a></td>
        </tr>
      </transition-group>
      </tbody>
    </table>
  </div>
</template>

<script>
import ButtonToTop from "@/components/UI/ButtonToTop.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import {mapActions, mapState} from "vuex";
import {useToast} from "vue-toastification";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "Patients",
  components: {Preloader, MyButton, ButtonToTop},
  data() {
    return {
      patients: [],
      currentSort: 'name',
      sortParam: 'asc'
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    async deletePatient(index) {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/delete_patient', {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          params: {
            id: index
          },
        })
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
        console.log(index)
        console.log(response)
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
      await this.fetchPatientsTable()
    },
    sort: function (s) {
      if (s === this.currentSort) {
        this.sortParam = this.sortParam === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
    },
    toHistory(patient) {
      this.$router.push('/patient-history')
      this.updateMyArray(patient)
    },
    ...mapActions({
      updateMyArray: "patientModule/updateMyArray"
    }),
    async fetchPatientsTable() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/patients')
        this.patients = response.data
        console.log(response.data);
      } catch (e) {
        console.log(e);
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
    }
  },
  mounted() {
    this.fetchPatientsTable()
  },
  computed: {
    sortedPatients() {
      return this.patients.sort((a, b) => {
        let modifier = 1
        if (this.sortParam === 'desc') modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier
        return 0
      })
    },
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
}
</script>

<style scoped>
.patients-list-item {
  display: inline-block;
  margin-right: 10px;
}

.patients-list-enter-active, .patients-list-leave-active {
  transition: all .4s;
}

.patients-list-enter, .patients-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.patients-list-move {
  transition: transform .5s ease;
}

.table {
  width: 100%;
  margin-bottom: 20px;
}

.table-wrapper {
  display: grid;
  grid-template-columns: .5fr;
  justify-content: center;
  margin-bottom: 20px;
}

.table tbody tr td:last-child {
  width: 5px;
  border-radius: 0 0 0 0;
  color: #b65e5e;
  user-select: none;
}

.table thead th {
  font-weight: bold;
  text-align: center;
  padding: 10px 15px;
  background-color: rgba(0, 162, 109, 1);
  font-size: 14px;
}

.table thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}

.table thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}

.table tbody tr td:nth-child(5) {
  border-radius: 0 8px 8px 0;
}

.table tbody tr td:nth-child(6) {
  border-radius: 0 0 0 0;
}


.table tbody td {
  text-align: center;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}

.table tbody tr {
  background-color: #86cbb6;
}

/*.table tbody tr:nth-child(odd) {*/
/*    background-color: rgb(229, 224, 224);*/
/*}*/

.table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}


.btn-link-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.table tbody tr:hover {
  cursor: pointer;
  background-color: #79b7a3;
}

.table tbody tr:hover td {
  transition-duration: .2s;
}

.create-patient {
  width: 200px;
  color: #FFFFFF;
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  cursor: pointer;
  background-color: #00A26D;
  border: none;
}

/*.link:hover {*/
/*    !*background-color: rgba(0, 162, 109, 0.49);*!*/
/*    !*transition-duration: .3s;*!*/
/*    animation: flow 10s ease-in-out infinite;*/
/*    background: linear-gradient(-60deg, #904e95, #904e95, #e73c7e, #ee7752);*/
/*    !*background: linear-gradient(-60deg, #904e95, #e73c7e, #ee7752);*!*/
/*    background-size: 300%;*/
/*    -webkit-background-clip: text;*/
/*    background-clip: text;*/
/*    -webkit-text-fill-color: transparent;*/
/*}*/
.link:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}

.header {
  display: flex;
}

.create-patient span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.create-patient span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.create-patient:hover span {
  padding-right: 15px;
}

.create-patient:hover span:after {
  opacity: 1;
  right: 0;
}

</style>