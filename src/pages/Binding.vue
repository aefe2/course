<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
      <tr class="head-row">
        <th>Фамилия</th>
        <th>Имя</th>
        <th>Отчество</th>
        <th>Палата</th>
        <th>Дата</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="binding in bindings" :key="binding.id">
        <td>{{ binding.last_name }}</td>
        <td>{{ binding.first_name }}</td>
        <td>{{ binding.patronymic }}</td>
        <td>{{ binding.number }}</td>
        <td>{{ binding.date }}</td>
        <td :class="theme"><a @click="deleteBinding(binding.id)">X</a></td>
<!--        <router-link :to="{name: 'Контроль', params: {id: binding.id}}">a</router-link>-->
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";
import {useToast} from "vue-toastification";

export default {
  name: "Binding",
  data() {
    return {
      bindings: []
    }
  },
  setup() {
    const toast = useToast()
    return {toast}
  },
  methods: {
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
    async fetchBindings() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/bindings')
        this.bindings = response.data
        console.log(response.data)
      } catch (e) {
        alert('error')
      }
    }
  },
  mounted() {
    this.fetchBindings()
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
}
</script>

<style scoped>
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