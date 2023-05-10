<template>
  <header-item></header-item>
  <div class="main">
    <nav-item></nav-item>
    <button-to-top></button-to-top>
    <div class="btn-link-container">
      <my-button>Создать пациента</my-button>
    </div>
    <div class="table-wrapper">
      <table class="table">
        <thead>
        <tr class="head-row">
          <th>ФИО врача</th>
          <th>Кабинет</th>
          <th>Время</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        <tr>
          <td>143</td>
          <td>А.Б.В.ы.</td>
          <td>Укол в jop9</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <footer-item></footer-item>
</template>

<script>

import {defineComponent} from "vue";
import FooterItem from "@/components/Footer-Item.vue";
import HeaderItem from "@/components/Header-Item.vue";
import NavItem from "@/components/Nav-Item.vue";
import MyButton from "@/components/UI/MyButton.vue";
import ButtonToTop from "@/components/UI/ButtonToTop.vue";

export default defineComponent({
  components: {ButtonToTop, MyButton, NavItem, HeaderItem, FooterItem}
})
</script>

<style scoped>
/*.login-form > input[type='text'], select, input[type='password'] {*/
/*  margin-bottom: 20px;*/
/*}*/

/*.login-form > select {*/
/*  background-color: rgba(45, 45, 45, 1);*/
/*  border-color: #FFFFFF;*/
/*  color: #FFF;*/
/*  font-size: 16px;*/
/*  border-radius: 5px;*/
/*  padding: 5px;*/
/*}*/

/*.main {*/
/*  margin-top: 100px;*/
/*}*/
.btn-link-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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

.table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}

.table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}

/*.table tbody tr td:last-child {*/
/*  width: 5px;*/
/*  background-color: #2D2D2D;*/
/*  border-radius: 0 0 0 0;*/
/*  color: #b65e5e;*/
/*}*/

.table tbody tr td:nth-child(3) {
  border-radius: 0 8px 8px 0;
}
</style>

<style>
/*base styles*/
* {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', serif;
  list-style: none;
  text-decoration: none;
}

/*@font-face {*/
/*  font-family: 'Avalon';*/
/*  src: url("~@/assets/fonts/motorola.ttf") format('woff2');*/
/*  font-weight: normal;*/
/*  font-style: normal;*/
/*}*/

#app {
  scroll-behavior: smooth;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #2D2D2D;
}

.main {
  margin-top: 50px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: darkgrey;
}

::-webkit-scrollbar-thumb {
  background-color: #00A26D;
  border-radius: 10px;
}

input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
</style>
