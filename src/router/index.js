import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';

const routes/*: Array<RouteRecordRaw>*/ = [
  {
    path: '',
    redirect: '/main',
  },
  {
    name: 'Main',
    path: '/main',
    component: () => import ('../views/Main.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import ('../views/Home.vue'),
      },
      {
        name: 'Orders',
        path: 'orders',
        component: () => import('../views/Orders.vue'),
      },
      {
        name: 'Product',
        path: 'product/:id',
        component: () => import ('../views/Product.vue'),
      },
    ]
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import ('../views/Login.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
