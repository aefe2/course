<template>
  <preloader></preloader>
  <button-to-top></button-to-top>
  <div class="btn-link-container">
    <my-button @click="$router.push('/add-binding')" class="create-patient" style="width: 250px;"><span>Добавить прикрепление</span></my-button>
  </div>
  <div v-show="bindings.length > 0" class="table-wrapper">
    <table class="table">
      <thead>
      <tr class="head-row">
        <th @click="sort('lastName')">Фамилия</th>
        <th @click="sort('firstName')">Имя</th>
        <th @click="sort('patronymic')">Отчество</th>
        <th @click="sort('cabinet')">Палата</th>
        <th @click="sort('date')">Дата</th>
      </tr>
      </thead>
      <tbody>
      <transition-group name="bindings-list">
        <tr v-for="binding in sortedBindings" :key="binding.id" @click="toControl(binding.id)">
          <td>{{ binding.patient.last_name }}</td>
          <td>{{ binding.patient.first_name }}</td>
          <td>{{ binding.patient.patronymic }}</td>
          <td>{{ binding.chamber.number }}</td>
          <td>{{ binding.date }}</td>
          <td :class="theme"><a @click="deleteBinding(binding.id)">X</a></td>
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
import Preloader from "@/components/Preloader.vue";
import ButtonToTop from "@/components/UI/ButtonToTop.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "Binding",
  components: {MyButton, ButtonToTop, Preloader},
  data() {
    return {
      bindings: [],
      currentSort: 'name',
      sortParam: 'asc'
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
    toControl(binding) {
      this.$router.push(`/control/${binding}`)
    },
    async deleteBinding(index) {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/delete_binding', {
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
      await this.fetchBindings()
    },
    sort: function (s) {
      if (s === this.currentSort) {
        this.sortParam = this.sortParam === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
    },
    async fetchBindings() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/bindings')
        this.bindings = response.data
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
    this.fetchBindings()
  },
  computed: {
    sortedBindings() {
      return this.bindings.sort((a, b) => {
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
.bindings-list-item {
  display: inline-block;
  margin-right: 10px;
}

.bindings-list-enter-active, .bindings-list-leave-active {
  transition: all .4s;
}

.bindings-list-enter, .bindings-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.bindings-list-move {
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

.table tbody tr td:nth-child(5) {
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