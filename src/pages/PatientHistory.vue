<template>
  <div class="table-wrapper">
    <h3 class="patient-abcs">{{patientObj.first_name}}</h3>
    <table class="table">
      <thead>
      <tr class="head-row">
        <th>Диагноз</th>
        <th>Описание</th>
        <th>Лечение</th>
        <th>Дата лечения</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in patient_cards" :key="item.id">
        <td>{{ item.diagnose.name }}</td>
        <td>{{ item.diagnose.description }}</td>
        <td>{{ item.cure.description }}</td>
        <td>{{ item.date }}</td>
        <!--        <td><input type="checkbox" name="status"></td>-->
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "PatientHistory",
  data() {
    return {
      patient_id: this.$route.params.id,
      patients: [],
      patient_cards: [],
      patientObj: {}
    }
  },
  computed: {
    arrToObj() {
      this.patientObj = Object.assign({}, this.patients)
      console.log(this.patientObj)
    }
  },
  methods: {
    async fetchPatientsTable() {
      try {
        const response = await axios.get(`http://localhost/CodingOnSideOfServer/api/patient_card?id=${this.patient_id}`)
        this.patients = response.data.patients
        this.patient_cards = response.data.patient_cards
      } catch (e) {
        console.log(e);
        alert('Error')
      }
      this.arrToObj
    }
  },
  mounted() {
    this.fetchPatientsTable()
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

.table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}

.btn-link-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

/*.table tbody tr:hover {*/
/*    cursor: pointer;*/
/*    background-color: #79b7a3;*/
/*}*/

/*.table tbody tr:hover td {*/
/*    transition-duration: .2s;*/
/*}*/

/*.link {*/
/*    color: #FFFFFF;*/
/*    text-decoration: none;*/
/*    background-color: #00A26D;*/
/*    font-size: 18px;*/
/*    padding: 8px;*/
/*    border-radius: 5px;*/
/*    cursor: pointer;*/
/*}*/

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
/*.link:hover {*/
/*    background-color: rgba(0, 162, 109, 0.49);*/
/*    transition-duration: .3s;*/
/*}*/

.patient-abcs {
  color: #00A26D;
  margin-bottom: 10px;
  text-align: center;
}
</style>