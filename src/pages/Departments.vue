<template>
  <button-to-top></button-to-top>
  <div class="btn-link-container">
    <my-button @click="$router.push('/add-department')" class="create-patient"><span>Добавить отдел</span></my-button>
  </div>
  <div class="table-wrapper">
    <table class="table">
      <thead>
      <tr class="head-row">
        <th>Описание</th>
      </tr>
      </thead>
      <tbody>
      <!--      @click="toHistory(patient)"-->
      <tr v-for="department in departments" :key="department.id">
        <td>{{ department.name }}</td>
        <td :class="theme"><a @click="deleteHeal(department.id)">X</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ButtonToTop from "@/components/UI/ButtonToTop.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import {mapActions, mapState} from "vuex";

export default {
  name: "Patients",
  components: {MyButton, ButtonToTop},
  data() {
    return {
      departments: []
    }
  },
  methods: {
    async deleteHeal(index) {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/delete_department', {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          params: {
            id: index
          },
        })
        console.log(index)
        console.log(response)
      } catch (e) {
        alert('error')
      }
      location.reload();
    },
    async fetchHeals() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/departments')
        this.departments = response.data
        console.log(response.data);
      } catch (e) {
        console.log(e);
        alert('Error')
      }
    }
  },
  mounted() {
    this.fetchHeals()
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
}
</script>

<style scoped>
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

.table thead tr th {
  border-radius: 8px 8px 8px 8px;
}

.table tbody tr td:nth-child(1) {
  border-radius: 8px 8px 8px 8px;
}

.table tbody tr td:nth-child(2) {
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

.table tbody tr td {
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