import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router';
import mainHome from "@/pages/mainHome"
import store from "@/scripts/store"
import axios from "axios";

// 로컬 api url
// axios.defaults.baseURL = "http://localhost:8080";

// 배포 api url
axios.defaults.baseURL = "http://52.78.142.214:8080";

const routes = [
    {path:"/", component: mainHome}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})
createApp(App).use(store).use(router).mount('#app')
