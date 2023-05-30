import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

const app = createApp(App)
app.provide('$axios', axios)
// const token = localStorage.getItem('token')
// if (token) {
//
// }
app.use(store).use(router).mount('#app')

