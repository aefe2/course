import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios, {options} from "axios";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
app.provide('$axios', axios)
app.use(Toast).use(store).use(router).mount('#app')

