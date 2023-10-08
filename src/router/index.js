import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('../views/ViewDetail.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/collects',
      name: 'collects',
      component: () => import('../views/UserCollects.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminHome.vue'),
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('../views/AdminList.vue'),
        },
        {
          path: 'edit',
          name: 'edit',
          component: () => import('../views/AdminEdit.vue'),
        },
        {
          path: 'addnew',
          name: 'addnew',
          component: () => import('../views/AdminAddNew.vue'),
        },
      ],
    },
  ],
});

export default router;
