import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import ActivityView from '../views/ActivityView.vue'
import SocialView from '../views/SocialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/social',
      name: 'social',
      component: () => import('../views/SocialView.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminView,
    },
    {
      path: '/activity',
      name: 'activity',
      component: ActivityView,
  },
  ]
})

export default router
