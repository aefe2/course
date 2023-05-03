<template>
  <div class="header-container">
    <div class="header">
      <h3 class="title">Авторизация</h3>
      <div class="switch-container">
        <svg width="27" height="27" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="18" cy="18.5" rx="18" ry="18.5" fill="#F9F9F9"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M32.625 21.4377C30.6048 23.5717 27.7802 24.8973 24.6544 24.8973C18.5132 24.8973 13.5348 19.7805 13.5348 13.4687C13.5348 9.17245 15.8414 5.42987 19.2512 3.47775C19.0839 3.47177 18.9158 3.46875 18.7471 3.46875C10.8786 3.46875 4.5 10.0246 4.5 18.1116C4.5 26.1986 10.8786 32.7544 18.7471 32.7544C25.5023 32.7544 31.1595 27.9223 32.625 21.4377Z"
                fill="#2D2D2D"/>
        </svg>
        <div class="switch-btn switch-on"></div>
      </div>
    </div>
  </div>
  <div class="main">
    <button onclick="openNav()" class="menu-toggle">&#9776;</button>
    <div id="mySidenav" class="sidebar sidenav">
      <a class="closebtn" onclick="closeNav()">&times;</a>
      <ul class="other-links">
        <li class="link-item"><a href="#">Контроль</a></li>
        <li class="link-item"><a href="#">История пациента</a></li>
        <li class="link-item"><a href="#">Пациенты</a></li>
        <li class="link-item"><a href="#">Записать пациента</a></li>
        <li class="link-item"><a href="#">Расписание</a></li>
      </ul>
      <p>Добавления</p>
      <ul class="add-links">
        <li class="link-item"><a href="#">Добавить диагноз</a></li>
        <li class="link-item"><a href="#">Добавить лечение</a></li>
        <li class="link-item"><a href="#">Добавить врача</a></li>
        <li class="link-item"><a href="#">Добававить прием</a></li>
      </ul>
    </div>
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

export default defineComponent({
  components: {FooterItem}
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

body {
  scroll-behavior: smooth;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #2D2D2D;
}

.title {
  color: #00A26D;
  text-align: center;
  font-size: 25px;
}

.header {
  display: flex;
  justify-content: center;
  margin-top: 21px;
  margin-bottom: 11px;
  text-align: right;
  align-items: center;
}

@keyframes flow {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

/*switch btn*/
.switch-container {
  position: absolute;
  right: 20px;
}

.switch-btn {
  display: inline-block;
  width: 60px; /* ширина */
  height: 30px; /* высота */
  border-radius: 20px; /* радиус скругления */
  background: #bfbfbf; /* цвет фона */
  z-index: 0;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms; /* анимация */
}

.switch-btn::after {
  content: "";
  height: 22px; /* высота кнопки */
  width: 22px; /* ширина кнопки */
  border-radius: 17px;
  background: #fff; /* цвет кнопки */
  top: 4px; /* положение кнопки по вертикали относительно основы */
  right: 4px; /* положение кнопки по горизонтали относительно основы */
  transition-duration: 300ms; /* анимация */
  position: absolute;
  z-index: 1;
}

.switch-on {
  background: #118c4e;
}

.switch-on::after {
  left: 32px;
}

/*footer*/
.footer {
  display: flex;
  background-color: rgba(52, 52, 52, 1);
  margin-top: 30px;
  height: 45px;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.footer > span {
  /*background-color: rgba(0, 162, 109, 0.49);*/
  /*transition-duration: .3s;*/
  animation: flow 8s ease-in-out infinite;
  /*background: linear-gradient(-60deg, #904e95, #904e95, #e73c7e, #ee7752);*/
  /*background: linear-gradient(-60deg, #904e95, #e73c7e, #ee7752);*/
  background: linear-gradient(90deg, #02fca8, #b4b0b0);
  background-size: 900%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: .2em;
  text-transform: uppercase;
  filter: opacity(80%);
  color: #00A26D;
  /*font-weight: bold;*/
}

.footer > img {
  margin-right: 15px;
  width: 30px;
  height: 30px;
  filter: hue-rotate(160deg) opacity(50%);
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

/**/
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #262626;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.nav-bg {
  filter: opacity(50%);
  /*transform: rotate(20deg);*/
  margin-top: 40px;
  padding: 20px;
  /*margin-left: 25px;*/
  /*width: 200px;*/
  /*height: 200px;*/
  /*z-index: 0;*/
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  font-size: 15px;
  color: #00A26D;
  display: block;
  transition: 0.3s;
  animation: ease-in;
}

.sidenav a:hover {
  color: #f1f1f1;
  border-bottom: 1px solid #00A26D;
}

.sidenav .closebtn {
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.sidebar p {
  padding: 8px 8px 8px 32px;
  font-weight: bold;
  color: #b4b0b0;
}

.sidebar p:before {
  content: ' ';
  margin-right: 5px;
}

.menu-toggle {
  display: inline-block;
  position: absolute;
  cursor: pointer;
  background-color: #262626;
  color: white;
  padding: 10px 15px;
  border: none;
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
