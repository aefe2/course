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
      <tr>
        <td>143</td>
        <td>А.Б.В.ы.</td>
        <td>8:00</td>
        <td>Укол в jop9</td>
        <td><input type="checkbox" name="status" id="status"></td>
      </tr>
      <tr>
        <td>143</td>
        <td>А.Б.В.ы.</td>
        <td>8:00</td>
        <td>Укол в jop9</td>
        <td><input type="checkbox" name="status" id=""></td>
      </tr>
      <tr>
        <td>143</td>
        <td>А.Б.В.ы.</td>
        <td>8:00</td>
        <td>Укол в jop9</td>
        <td><input type="checkbox" name="status" id=""></td>
      </tr>
      <tr>
        <td>143</td>
        <td>А.Б.В.ы.</td>
        <td>8:00</td>
        <td>Укол в jop9</td>
        <td><input type="checkbox" name="status" id=""></td>
      </tr>
      <tr>
        <td>143</td>
        <td>А.Б.В.ы.</td>
        <td>8:00</td>
        <td>Укол в jop9</td>
        <td><input type="checkbox" name="status" id=""></td>
      </tr>
      <tr>
        <td>143</td>
        <td>А.Б.В.ы.</td>
        <td>8:00</td>
        <td>Укол в jop9</td>
        <td><input type="checkbox" name="status" id=""></td>
      </tr>
      <tr>
        <td>143</td>
        <td>А.Б.В.ы.</td>
        <td>8:00</td>
        <td>Укол в jop9</td>
        <td><input type="checkbox" name="status" id=""></td>
      </tr>
      <tr>
        <td>143</td>
        <td>А.Б.В.ы.</td>
        <td>8:00</td>
        <td>Укол в jop9</td>
        <td><input type="checkbox" name="status" id=""></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Control"
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