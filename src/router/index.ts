import { createRouter, createWebHistory } from 'vue-router'
import AuthView from "@/views/AuthView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: AuthView
    },
    {
      path: '/app',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/app/collection',
      name: 'MyCollection',
      component: () => import('../views/MyCollectionView.vue')
    },
    {
      path: '/app/cards',
      name: 'Cards',
      component: () => import('../views/CardsView.vue')
    }
  ]
})

export default router;
