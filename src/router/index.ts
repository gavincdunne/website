import { createRouter, createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
    beforeEnter: (to, from, next) => {
      // Ensure the component is loaded before entering
      next()
    }
  },
  {
    path: '/tech',
    name: 'Tech',
    component: () => import('../components/Tech.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/coaching',
    name: 'Coaching',
    component: () => import('../components/Coaching.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;