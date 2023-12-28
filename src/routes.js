import HomeComponent from './components/HomeComponent.vue'
import SignupComponent from './components/SignupComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import AddComponent from './components/AddComponent.vue'
import UpdateComponent from './components/UpdateComponent.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name:'HomeComponent',
        component: HomeComponent,
        path: '/'
    },
    {
        name:'SignupComponent',
        component: SignupComponent,
        path: '/sign-up'
    },
    {
        name:'LoginComponent',
        component: LoginComponent,
        path: '/login'
    },
    {
        name:'AddComponent',
        component: AddComponent,
        path: '/add'
    },
    {
        name:'UpdateComponent',
        component: UpdateComponent,
        path: '/update/:id'
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router