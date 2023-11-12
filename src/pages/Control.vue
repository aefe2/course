<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
      <tr class="head-row">
        <th @click="sort('palaceNum')">№ Палаты</th>
        <th @click="sort('lastName')">Фамилия</th>
        <th @click="sort('firstName')">Имя</th>
        <th @click="sort('patronymic')">Отчество</th>
        <th @click="sort('time')">Время</th>
        <th @click="sort('procedure')">Процедура</th>
        <th><label for="status">Статус</label></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="patient in sortedPatients" :key="patient.id">
        <td>{{ patient.palaceNum }}</td>
        <td>{{ patient.lastName }}</td>
        <td>{{ patient.firstName }}</td>
        <td>{{ patient.patronymic }}</td>
        <td>{{ patient.time }}</td>
        <td>{{ patient.procedure }}</td>
        <td><input type="checkbox" name="status"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MySelect from "@/components/UI/MySelect.vue";
import axios from "axios";

export default {
  name: "Control",
  components: {MySelect},
  data() {
    return {
      binding_id: this.$route.params.id,
      patients: [],
      currentSort: 'name',
      sortParam: 'asc'
    }
  },
  methods: {
    async fetchControlTable() {
      try {
        const response = await axios.get(`http://localhost/CodingOnSideOfServer/api/control/?id=${this.binding_id}`)
        this.patients = response.data
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
    // sortedPatients() {
    //   return this.patients.sort((a, b) => {
    //     let modifier = 1
    //     if (this.sortParam === 'desc') modifier = -1;
    //     if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
    //     if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier
    //     return 0
    //   })
    // }
  },
  mounted() {
    this.fetchControlTable()
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
}

.table-wrapper {
  display: grid;
  grid-template-columns: .7fr;
  justify-content: center;
  margin-bottom: 20px;
}

.table thead th {
  cursor: pointer;
  user-select: none;
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

.table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}

.table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}
</style>