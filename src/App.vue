<template>
  <header-item></header-item>
  <nav-item></nav-item>
  <div class="main">
    <router-view></router-view>
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
