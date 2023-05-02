<template>
  <!--  <nav>-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <!--  <router-view/>-->
</template>

<script>

</script>

<style>
/*base styles*/
* {
  padding: 0;
  margin: 0;
  font-family: 'CosmorantRegular', serif;
  list-style: none;
  text-decoration: none;
}

@font-face {
  /*font-family: 'motorolaonscreenmedium';*/
  /*src: url('~@/assets/fonts/motorola-webfont.woff2') format('woff2'),*/
  /*url('~@/assets/fonts/motorola-webfont.woff') format('woff');*/
  font-family: 'CosmorantRegular';
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
