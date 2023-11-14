<template>
  <div class="table-wrapper">
    <table class="table" v-show="controls.length > 0">
      <thead>
      <tr class="head-row">
        <th @click="sort('palaceNum')">№ Палаты</th>
        <th @click="sort('lastName')">Фамилия</th>
        <th @click="sort('firstName')">Имя</th>
        <th @click="sort('patronymic')">Отчество</th>
        <th @click="sort('time')">Время</th>
        <th @click="sort('procedure')">Процедура</th>
        <th>Статус</th>
      </tr>
      </thead>
      <tbody>
      <transition-group name="controls-list">
        <tr v-for="(bindingData, index) in bindings" :key="index">
          <td>{{ bindingData.chamber.number }}</td>
          <td>{{ bindingData.patient.first_name }}</td>
          <td>{{ bindingData.patient.last_name }}</td>
          <td>{{ bindingData.patient.patronymic }}</td>
          <td v-for="(controlData, index) in controls" :key="index">{{ controlData.time }}</td>
          <td v-for="(controlData, index) in controls" :key="index">{{ controlData.treatment }}</td>
          <td v-for="(controlData, index) in controls" :key="index">{{ controlData.status }}</td>
          <td v-for="(controlData, index) in controls" :key="index" :class="theme"><a @click="deleteControl(controlData.id)">X</a></td>
        </tr>
      </transition-group>
      </tbody>
    </table>
  </div>
</template>

<script>
import MySelect from "@/components/UI/MySelect.vue";
import axios from "axios";
import {mapState} from "vuex";
import {useToast} from "vue-toastification";

export default {
  name: "Control",
  components: {MySelect},
  setup() {
    const toast = useToast()
    return {toast}
  },
  data() {
    return {
      binding_id: this.$route.params.id,
      controls: [],
      bindings: [],
      currentSort: 'name',
      sortParam: 'asc',
    }
  },
  methods: {
    async deleteControl(index) {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/delete_control', {
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
      await this.fetchControlTable()
    },
    async fetchControlTable() {
      try {
        const response = await axios.get(`http://localhost/CodingOnSideOfServer/api/control?id=${this.binding_id}`)
        this.controls = response.data.controls
        this.bindings = response.data.bindings
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    },
    sort: function (s) {
      if (s === this.currentSort) {
        this.sortParam = this.sortParam === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s;
    }
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  },
  mounted() {
    this.fetchControlTable()
  },
}
</script>

<style scoped>
.controls-list-item {
  display: inline-block;
  margin-right: 10px;
}

.controls-list-enter-active, .controls-list-leave-active {
  transition: all .4s;
}

.controls-list-enter, .controls-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.controls-list-move {
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

.table tbody tr td:nth-child(7) {
  border-radius: 0 8px 8px 0;
}
</style>