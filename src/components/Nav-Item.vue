<template>
  <button @click="toggle" class="menu-toggle">&#9776;</button>
  <transition-group name="nav">
    <div key="2" v-show="isActive" id="sidenav" class="sidebar sidenav">
      <a key="4" class="closebtn" @click="toggle">&times;</a>
      <ul key="5" class="other-links">
        <li key="7" class="link-item">
          <router-link to="/control">Контроль</router-link>
        </li>
        <li key="8" class="link-item">
          <router-link to="/history">История пациента</router-link>
        </li>
        <li key="9" class="link-item">
          <router-link to="/patients">Пациенты</router-link>
        </li>
        <li key="10" class="link-item">
          <router-link to="/record-patient">Записать пациента</router-link>
        </li>
        <li key="11" class="link-item">
          <router-link to="/">Расписание</router-link>
        </li>
      </ul>
      <p key="12">Добавления</p>
      <ul key="13" class="add-links">
        <li key="14" class="link-item">
          <router-link to="/diagnosis-add">Добавить диагноз</router-link>
        </li>
        <li key="15" class="link-item">
          <router-link to="/heal-add">Добавить лечение</router-link>
        </li>
        <li key="16" class="link-item">
          <router-link to="/add-doctor">Добавить врача</router-link>
        </li>
        <li key="17" class="link-item">
          <router-link to="/appointment">Добававить прием</router-link>
        </li>
      </ul>
      <img key="18" class="nav-bg" src="@/assets/img/diavolo.svg" alt="diavolo">
    </div>
  </transition-group>
</template>

<script>
import {store, mutations} from "@/store/navModule";

export default {
  name: "Nav-Item",
  computed: {
    isActive() {
      return store.isNavOpen
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav()
    }
  }
}
</script>

<style scoped>
.nav-leave-to /* .list-leave-active до версии 2.1.8 */
{
  transform: translateX(-100px);
  transition: .9s;
  opacity: 0;
}

.nav-enter-to {
  opacity: 1;
  transition: .4s;
}

.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #262626;
  padding-top: 60px;
}

.nav-bg {
  filter: opacity(50%);
  margin-top: 40px;
  padding: 20px;
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
</style>