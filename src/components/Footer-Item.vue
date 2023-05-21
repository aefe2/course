<template>
  <div :class="theme" class="footer" style="user-select: none">
    <img src="@/assets/img/umbrella.png" alt="Umbrella logo">
    <span>Umbrella Corporation</span>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Footer-Item",
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
}
</script>

<style scoped>
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

.dark {
  background-color: rgba(52, 52, 52, 1);
}

.light {
  background-color: #ECECECFF;
}

.footer {
  display: flex;
  margin-top: 40px;
  height: 45px;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.footer > span {
  animation: flow 8s ease-in-out infinite;
  background: linear-gradient(90deg, #02fca8, #b4b0b0);
  background-size: 900%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: .2em;
  text-transform: uppercase;
  filter: opacity(80%);
  color: #00A26D;
  font-weight: bold;
}

.footer > img {
  margin-right: 15px;
  width: 30px;
  height: 30px;
  filter: hue-rotate(160deg) opacity(50%);
}
</style>