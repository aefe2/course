<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="logo">
        <img src="@/assets/img/diavolo.svg" alt="diavolo">
      </div>
      <p :class="theme">Загрузка</p>
      <div class="loader-container">
        <div :class="theme" class="loader-2"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Preloader",
  data() {
    return {
      show: true
    }
  },
  mounted() {
    if (Boolean(this.show)) this.showToggle()
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false
      }, 700)
    }
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 9999;
}

.logo {
  width: 7.5rem;
  height: 7.5rem;
  background-repeat: no-repeat;
}

.loader-container {
  width: 50px;
  height: 50px;
  display: inline-block;
}

p {
  font-size: 30px;
  color: #00A26D;
}

.loader-2 {
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  position: relative;
  -webkit-animation: loader-2 0.9s 0.35s ease alternate infinite;
  animation: loader-2 0.9s 0.35s ease alternate infinite;
  margin: -20px auto 0;
}

.loader-2:after,
.loader-2:before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: loader-2 0.9s ease alternate infinite;
  -webkit-animation: loader-2 0.9s ease alternate infinite;
}

.loader-2:before {
  left: -20px;
  animation-delay: 0.2s;
}

.loader-2:after {
  right: -20px;
  animation-delay: 0.5s;
}

@keyframes loader-2 {
  0% {
    box-shadow: 0 15px 0 -15px #00A26D;
  }
  100% {
    box-shadow: 0 15px 0 #00A26D;
  }
}
</style>