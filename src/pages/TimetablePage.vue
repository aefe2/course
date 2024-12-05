<template>
  <preloader></preloader>
  <button-to-top></button-to-top>
  <div v-show="timetable.length > 0" class="table-wrapper">
    <search-item v-model="search"></search-item>
    <table class="table">
      <thead>
      <tr class="head-row">
        <th @click="sort('lastName')">Фамилия</th>
        <th @click="sort('firstName')">Имя</th>
        <th @click="sort('patronymic')">Отчество</th>
        <th @click="sort('cabinet')">Кабинет</th>
        <th @click="sort('date')">Дата</th>
        <th @click="sort('time')">Время</th>
      </tr>
      </thead>
      <tbody>
      <transition-group name="timetable-list">
        <tr v-for="item in filteredItems" :key="item.id">
          <td>{{ item.user.last_name }}</td>
          <td>{{ item.user.first_name }}</td>
          <td>{{ item.user.patronymic }}</td>
          <td>{{ item.room.number }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.time }}</td>
          <td :class="theme"><a @click="deleteTimesheet(item.id)">X</a></td>
        </tr>
      </transition-group>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";
import {useToast} from "vue-toastification";
import {data} from "autoprefixer";
import Preloader from "@/components/Preloader.vue";
import ButtonToTop from "@/components/UI/ButtonToTop.vue";
import SearchItem from "@/components/Search-item.vue";
import {apiUrl} from "@/config/apiConfig";

export default {
  name: "TimetablePage",
  components: {SearchItem, ButtonToTop, Preloader},
  data() {
    return {
      timetable: [],
      search: '',
      currentSort: 'name',
      sortParam: 'asc'
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    async deleteTimesheet(index) {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/delete_timesheet', {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          params: {
            id: index
          },
        })
      } catch (e) {
        console.log(e)
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
      await this.fetchTimetable()
    },
    sort: function (s) {
      if (s === this.currentSort) {
        this.sortParam = this.sortParam === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
    },
    async fetchTimetable() {
      try {
        const response = await axios.get(
            apiUrl
        )
        this.timetable = response.data
        console.log(response.data)
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
    }
  },
  mounted() {
    this.fetchTimetable()
  },
  computed: {
    filteredItems() {
      return this.sortedTimetable.filter(doctor => doctor.user.first_name.toLowerCase().includes(this.search.toLowerCase()));
    },
    sortedTimetable() {
      return this.timetable.sort((a, b) => {
        let modifier = 1
        if (this.sortParam === 'desc') modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
        if (a[this.currentSort] > b[this.currentSort]) return modifier
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
.timetable-list-item {
  display: inline-block;
  margin-right: 10px;
}

.timetable-list-enter-active, .timetable-list-leave-active {
  transition: all .4s;
}

.timetable-list-enter, .timetable-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.timetable-list-move {
  transition: transform .5s ease;
}

.dark {
  background-color: #2D2D2D;
}

.table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
}

.table-wrapper {
  display: grid;
  grid-template-columns: .5fr;
  justify-content: center;
  margin-bottom: 20px;
}

.table thead th {
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background-color: rgba(0, 162, 109, 1);
  font-size: 14px;
}

th {
  cursor: pointer;
}

.table thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}

.table thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}

.table tbody td {
  text-align: center;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}

.table tbody tr {
  background-color: #86cbb6;
}

.table tbody tr:hover {
  cursor: pointer;
  background-color: #79b7a3;
}

.table tbody tr:hover td {
  transition-duration: .2s;
}

/*.table tbody tr:nth-child(odd) {*/
/*    background-color: rgb(229, 224, 224);*/
/*}*/

.table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}

.table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}

.table tbody tr td:last-child {
  width: 5px;
  border-radius: 0 0 0 0;
  color: #b65e5e;
  user-select: none;
}

.table tbody tr td:nth-child(6) {
  border-radius: 0 8px 8px 0;
}

.btn-link-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.create-patient {
  color: #FFFFFF;
  text-decoration: none;
  background-color: #00A26D;
  font-size: 18px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
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
.create-patient:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
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