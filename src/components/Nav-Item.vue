<template>
  <button onclick="openNav()" class="menu-toggle">&#9776;</button>
  <div id="sidenav" class="sidebar sidenav">
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
    <img class="nav-bg" src="@/assets/img/diavolo.svg" alt="diavolo">
  </div>
</template>

<script>
export default {
  name: "Nav-Item",
  methods: {
    openNav() {

    },
    closeNav() {
    }
  }
}
</script>

<style scoped>
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
  font-size: 16px;
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
</style>