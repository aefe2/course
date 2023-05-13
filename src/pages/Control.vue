<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
      <tr class="head-row">
        <th>№ Палаты</th>
        <th>ФИО</th>
        <th>Время</th>
        <th>Процедура</th>
        <th><label for="status">Статус</label></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="patient in patients" :key="patient.id">
        <td>{{ patient.palaceNum }}</td>
        <td>{{ patient.lastName[0] }}.{{ patient.firstName[0] }}.{{ patient.patronymic[0] }}</td>
        <td>{{ patient.time }}</td>
        <td>{{ patient.procedure }}</td>
        <td><input type="checkbox" name="status"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {
      patients: [
        {id: 1, palaceNum: 1, lastName: 'Asddas', firstName: 'Cxzczx', patronymic: 'Zxc', time: 12.30, procedure: 'Aasdad'},
        {id: 2, palaceNum: 123, lastName: 'Asddas', firstName: 'Cxzczx', patronymic: 'Zxc', time: 12.30, procedure: 'Aassd'},
        {id: 3, palaceNum: 2, lastName: 'Asddas', firstName: 'Cxzczx', patronymic: 'Zxc', time: 12.30, procedure: 'sAasd'},
        {id: 4, palaceNum: 3123, lastName: 'Asddas', firstName: 'Cxzczx', patronymic: 'Zxc', time: 12.30, procedure: 'Aadsd'},
        {id: 5, palaceNum: 12, lastName: 'Asddas', firstName: 'Cxzczx', patronymic: 'Zxc', time: 12.30, procedure: 'Aasds'},
        {id: 6, palaceNum: 11, lastName: 'Asddas', firstName: 'Cxzczx', patronymic: 'Zxc', time: 12.30, procedure: 'Aaxsd'},
        {id: 7, palaceNum: 134, lastName: 'Asddas', firstName: 'Cxzczx', patronymic: 'Zxc', time: 12.30, procedure: 'Aazxsd'},
        {id: 8, palaceNum: 111, lastName: 'Asddas', firstName: 'Cxzczx', patronymic: 'Zxc', time: 12.30, procedure: 'Agasd'},
      ]
    }
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