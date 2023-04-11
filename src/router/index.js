import { createRouter, createWebHistory } from 'vue-router'

import Category from '@/views/Category.vue'
import Combo from '@/views/Combo.vue'
import Drink from '@/views/Drink.vue'
import Employe from '@/views/Employe.vue'
import Login from '@/views/Login.vue'
import Orders from '@/views/Orders.vue'
import Stats from '@/views/Stats.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'           
    },
    {
      path: '/index',
      redirect: '/employe',
      children: [
        {
          path: '/category',
          name: 'category',
          component: Category
        },
        {
          path: '/combo',
          name: 'combo',
          component: Combo
        },
        {
          path: '/drink',
          name: 'drink',
          component: Drink
        },
        {
          path: '/employe',
          name: 'employe',
          component: Employe
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/orders',
          name: 'orders',
          component: Orders
        },
        {
          path: '/stats',
          name: 'stats',
          component: Stats
        },
      ]           
    },
  ]
})

export default router

