import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router';
import mainHome from "@/pages/mainHome"
import store from "@/scripts/store"

const routes = [
    {path:"/", component: mainHome}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})
createApp(App).use(store).use(router).mount('#app')
