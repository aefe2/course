<template>
  <button v-show="token" @click="navModule" :class="theme" class="menu-toggle">&#9776;</button>
  <transition-group name="nav">
    <div key="2" v-show="isNavOpen" :class="theme" id="sidenav" class="sidebar sidenav">
      <a key="4" class="closebtn" @click="navModule">&times;</a>
      <ul key="5" :class="theme" class="other-links">
        <li key="11" class="link-item">
          <router-link to="/">Расписание</router-link>
        </li>
        <li key="7" class="link-item">
          <router-link to="/control">Контроль</router-link>
        </li>
        <!--        <li key="8" class="link-item">-->
        <!--          <router-link to="/patient-history">История пациента</router-link>-->
        <!--        </li>-->
        <li key="9" class="link-item">
          <router-link to="/patients">Пациенты</router-link>
        </li>
        <li key="22" class="link-item">
          <router-link to="/heals">Просмотр лечений</router-link>
        </li>
        <li key="11" class="link-item">
          <router-link to="/diagnoses">Просмотр диагнозов</router-link>
        </li>
        <li key="25" class="link-item">
          <router-link to="/departments">Просмотр отделов</router-link>
        </li>
      </ul>
      <p :class="theme" key="12">Добавления</p>
      <ul key="13" class="add-links">
        <li key="10" class="link-item">
          <router-link to="/record-patient">Записать пациента</router-link>
        </li>
        <li key="14" class="link-item">
          <router-link to="/diagnosis-add">Добавить диагноз</router-link>
        </li>
        <li key="15" class="link-item">
          <router-link to="/heal-add">Добавить лечение</router-link>
        </li>
        <li key="17" class="link-item">
          <router-link to="/appointment">Добавить прием</router-link>
        </li>
        <li key="24" class="link-item">
          <router-link to="/add-department">Добавить отдел</router-link>
        </li>
        <li key="21" class="link-item">
          <router-link to="/patient-add">Добававить пациента</router-link>
        </li>
        <li key="22" @click="getItems" class="link-item">
          <router-link to="/add_timesheet">Добавить запись в расписание</router-link>
        </li>
        <li v-show="!token" key="19" class="link-item">
          <router-link to="/login">Вход</router-link>
        </li>
        <li v-show="token" key="23" class="link-item">
          <router-link to="/register">Зарегестрировать пользователя</router-link>
        </li>
        <li v-show="token" key="20" class="link-item">
          <router-link to="/logout">Выйти</router-link>
        </li>
      </ul>
      <img @click="$router.push('/')" style="cursor:pointer;" key="18" class="nav-bg" src="@/assets/img/diavolo.svg"
           alt="diavolo">
    </div>
  </transition-group>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "Nav-Item",
  computed: {
    ...mapState({
      token: state => state.tokenModule.token,
      isNavOpen: state => state.navModule.isNavOpen,
      theme: state => state.themeModule.theme
    })
  },
  methods: {
    ...mapMutations({
      navModule: "toggleNav"
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
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 60px;
  box-shadow: #00A26D 0.5px 0 2px;
}

.nav-bg {
  filter: opacity(50%);
  padding: 40px;
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