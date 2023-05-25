<template>
  <div :class="theme" class="content">
    <header-item></header-item>
    <nav-item></nav-item>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer-item></footer-item>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import FooterItem from "@/components/Footer-Item.vue";
import HeaderItem from "@/components/Header-Item.vue";
import NavItem from "@/components/Nav-Item.vue";
import {mapState} from "vuex";

export default defineComponent({
  components: {NavItem, HeaderItem, FooterItem},
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme,
    })
  },
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', serif;
  list-style: none;
  text-decoration: none;
}

.light {
  background-color: whitesmoke;
}

.dark {
  background-color: #2D2D2D;
}

/*:root {*/
/*  --dark-background-c: #2D2D2D;*/
/*  --light-background-c: whitesmoke;*/
/*}*/

/*@font-face {*/
/*  font-family: 'Avalon';*/
/*  src: url("~@/assets/fonts/motorola.ttf") format('woff2');*/
/*  font-weight: normal;*/
/*  font-style: normal;*/
/*}*/

.content {
  scroll-behavior: smooth;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.main {
  margin-top: 25px;
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
