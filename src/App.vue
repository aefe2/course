<template>
  <header-item></header-item>
  <div class="main">
    <nav-item></nav-item>
    <form class="login-form">
      <label for="login">Логин</label>
      <input type="text" id="login">
      <label for="password">Пароль</label>
      <input type="password" id="password">
      <input type="submit" value="войти">
    </form>
  </div>
  <footer-item></footer-item>
</template>

<script>

import {defineComponent} from "vue";
import FooterItem from "@/components/Footer-Item.vue";
import HeaderItem from "@/components/Header-Item.vue";
import NavItem from "@/components/Nav-Item.vue";

export default defineComponent({
  components: {NavItem, HeaderItem, FooterItem}
})
</script>

<style scoped>
.login-form {
  font-size: 18px;
  display: grid;
  justify-content: center;
  grid-template-columns: .2fr;
}

.login-form > label {
  color: #00A26D;
  margin-bottom: 7px;
}

.login-form > input {
  color: #FFFFFF;
  font-size: 16px;
  padding: 8px;
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  border-radius: 5px;
}

.login-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}

.login-form > input[type='text'], select, input[type='password'] {
  margin-bottom: 20px;
}

.login-form > select {
  background-color: rgba(45, 45, 45, 1);
  border-color: #FFFFFF;
  color: #FFF;
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
}

.login-form > input:last-child {
  background-color: #00A26D;
  border: none;
  font-size: 18px;
  width: 170px;
  cursor: pointer;
}

.login-form > input:last-child:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}

.main {
  margin-top: 100px;
}

/*.login-form {*/
/*    margin: auto;*/
/*}*/
</style>

<style>
/*base styles*/
* {
  padding: 0;
  margin: 0;
  font-family: 'Avalon', serif;
  list-style: none;
  text-decoration: none;
}

@font-face {
  font-family: 'Avalon';
  src: url("~@/assets/fonts/CormorantInfant-Regular.ttf") format('woff2');
  font-weight: normal;
  font-style: normal;
}

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

#btn-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background: none;
  color: #FFFFFF;
  cursor: pointer;
  padding: 15px;
  width: 25px;
  height: 25px;
  filter: invert(1) opacity(70%) hue-rotate(160deg);
}
</style>
