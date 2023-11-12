<template>
  <div class="header-container">
    <div class="header">
<!--      <div class="container">-->
<!--        <span class="notif" v-show="!token">Вы не вошли в систему</span>-->
<!--        <my-button class="a" @click="$router.push('/login')">Войти</my-button>-->
<!--      </div>-->
      <h3 class="title">{{ $route.name }}</h3>
      <div class="switch-container">
        <transition-group name="icon" mode="in-out">
          <svg v-if="nightMode" :key="1" width="27" height="27" viewBox="0 0 36 37" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <ellipse :key="2" cx="18" cy="18.5" rx="18" ry="18.5" fill="#F9F9F9"/>
            <path :key="3" fill-rule="evenodd" clip-rule="evenodd"
                  d="M32.625 21.4377C30.6048 23.5717 27.7802 24.8973 24.6544 24.8973C18.5132 24.8973 13.5348 19.7805 13.5348 13.4687C13.5348 9.17245 15.8414 5.42987 19.2512 3.47775C19.0839 3.47177 18.9158 3.46875 18.7471 3.46875C10.8786 3.46875 4.5 10.0246 4.5 18.1116C4.5 26.1986 10.8786 32.7544 18.7471 32.7544C25.5023 32.7544 31.1595 27.9223 32.625 21.4377Z"
                  fill="#2D2D2D"/>
          </svg>
          <svg v-if="!nightMode" :key="4" width="27" height="27" viewBox="0 0 36 37" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <ellipse :key="5" cx="18" cy="18.5" rx="18" ry="18.5" fill="#2D2D2D"/>
            <path :key="6"
                  d="M17.5 7L19.0477 12.7238L23.25 8.54071L21.7285 14.2715L27.4593 12.75L23.2762 16.9523L29 18.5L23.2762 20.0477L27.4593 24.25L21.7285 22.7285L23.25 28.4593L19.0477 24.2762L17.5 30L15.9523 24.2762L11.75 28.4593L13.2715 22.7285L7.54071 24.25L11.7238 20.0477L6 18.5L11.7238 16.9523L7.54071 12.75L13.2715 14.2715L11.75 8.54071L15.9523 12.7238L17.5 7Z"
                  fill="white"/>
          </svg>
        </transition-group>
        <div @click="themeModule" class="switch-btn" :class="{'switch-on': nightMode}"></div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapMutations, mapState} from "vuex";
import MyButton from "@/components/UI/MyButton.vue";
import SearchItem from "@/components/Search-item.vue";

export default {
  name: "Header-Item",
  components: {SearchItem, MyButton},
  computed: {
    ...mapState({
      token: state => state.tokenModule.token,
      nightMode: state => state.themeModule.nightMode,
      theme: state => state.themeModule.theme
    })
  },
  methods: {
    ...mapMutations({
      themeModule: "themeModule/toggleSwitch"
    })
  }
}
</script>

<style scoped>
.icon-enter-active,
.icon-leave-active {
  transition: all .7s ease-out;
}

.icon-enter-from {
  opacity: 0;
  transform: scale(1);
}

.icon-leave-to {
  opacity: 0;
  transform: scale(0);
}

.container {
  display: flex;
  position: absolute;
  left: 40px;
  flex-direction: column;
  align-items: flex-start;
}

.notif {
  margin-bottom: 10px;
  color: #b65e5e;
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
  box-shadow: inset #2D2D2D 0 0 2px;
}

.switch-btn::after {
  content: "";
  height: 22px; /* высота кнопки */
  width: 22px; /* ширина кнопки */
  border-radius: 17px;
  background: #fff; /* цвет кнопки */
  top: 4px; /* положение кнопки по вертикали относительно основы */
  right: 32px; /* положение кнопки по горизонтали относительно основы */
  transition-duration: 300ms; /* анимация */
  position: absolute;
  z-index: 1;

}

.switch-on {
  background: #118c4e;
}

.switch-on::after {
  transform: translateX(27px);
}

svg {
  position: absolute;
  right: 69px;
  top: 1.5px;
  margin-bottom: 1px;
}
</style>