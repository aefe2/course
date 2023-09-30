<template>
  <button v-show="myCookies" @click="navModule" :class="theme" class="menu-toggle">&#9776;</button>
  <transition-group name="nav">
    <div key="2" v-show="isNavOpen" :class="theme" id="sidenav" class="sidebar sidenav">
      <a key="4" class="closebtn" @click="navModule">&times;</a>
      <ul key="5" :class="theme" class="other-links">
        <li key="26" class="link-item">
          <router-link to="/admin">Админ панель</router-link>
        </li>
        <li key="11" class="link-item">
          <router-link to="/">Расписание</router-link>
        </li>
        <li key="27" class="link-item">
          <router-link to="/reseptiones">Приемы</router-link>
        </li>
        <li key="29" class="link-item">
          <router-link to="/bindings">Прикрепления</router-link>
        </li>
        <li key="9" class="link-item">
          <router-link to="/patients">Пациенты</router-link>
        </li>
      </ul>
      <p :class="theme" key="12">Добавления</p>
      <ul key="13" class="add-links">
        <li key="10" class="link-item">
          <router-link to="/record-patient">Записать пациента</router-link>
        </li>
        <li key="30" class="link-item">
          <router-link to="/add-binding">Добавить прикрепление</router-link>
        </li>
        <li key="17" class="link-item">
          <router-link to="/patient-cards">Добавить запись в медкарту</router-link>
        </li>
        <li key="22" @click="getItems" class="link-item">
          <router-link to="/add_timesheet">Добавить запись в расписание</router-link>
        </li>
        <li v-show="!myCookies" key="19" class="link-item">
          <router-link to="/login">Вход</router-link>
        </li>
        <li v-show="myCookies" key="20" class="link-item">
          <router-link to="/logout">Выйти</router-link>
        </li>
      </ul>
      <img @click="$router.push('/')" style="cursor:pointer;" key="18" class="nav-bg" src="@/assets/img/diavolo.svg"
           alt="diavolo">
    </div>
  </transition-group>
</template>

<script>

import {mapMutations, mapState} from "vuex";

export default {
  name: "Nav-Item",
  computed: {
    ...mapState({
      myCookies: state => state.tokenModule.myCookies,
      isNavOpen: state => state.navModule.isNavOpen,
      theme: state => state.themeModule.theme
    })
  },
  methods: {
    ...mapMutations({
      navModule: "toggleNav",
      tokenModule: "tokenModule/getCookie"
    }),
  }
}
</script>

<style scoped>
.nav-enter-active {
  transition: all 0.3s ease-out;
}

.nav-leave-active {
  /*1, 0, 0.8, 1*/
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.nav-enter-from,
.nav-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.light a:hover {
  color: #000;
}

.light p {
  color: #2D2D2D;
}

.dark p {
  color: #b4b0b0;
}

.light {
  background-color: whitesmoke;
}

.dark {
  color: #00A26D;
  background-color: #2D2D2D;
}

.sidenav {
  height: 100%;
  width: 270px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 60px;
  box-shadow: #00A26D 0.5px 0 2px;
}

.nav-bg {
  filter: opacity(50%);
  padding: 30px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  font-size: 16px;
  color: #00A26D;
  display: block;
  transition: 0.3s;
}

a:hover {
  color: #f1f1f1;
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
}

.sidebar p:before {
  content: ' ';
  margin-right: 5px;
}

.menu-toggle {
  display: inline-block;
  position: absolute;
  cursor: pointer;
  font-size: 25px;
  padding: 10px 15px;
  border: none;
}
</style>