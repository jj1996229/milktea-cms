import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/views/Index.vue'
import Category from '@/views/Category.vue'
import Combo from '@/views/Combo.vue'
import Drink from '@/views/Drink.vue'
import Employee from '@/views/Employee.vue'
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
      name: 'index',
      component: Index,
      children: [
        {
          path: 'employee',
          name: 'employee',
          component: Employee
        },
        {
          path: 'category',
          name: 'category',
          component: Category
        },
        {
          path: 'combo',
          name: 'combo',
          component: Combo
        },
        {
          path: 'drink',
          name: 'drink',
          component: Drink
        },
        {
          path: 'orders',
          name: 'orders',
          component: Orders
        },
        {
          path: 'stats',
          name: 'stats',
          component: Stats
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router

