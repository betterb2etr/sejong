import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import ListPage from '@/components/ListPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/list',
    name: 'List',
    component: ListPage,
  },
  {
    path: '/create-project',
    name: 'CreateProject',
    component: () => import('@/views/CreateProject.vue'),
  },
  {
    path: '/open-project',
    name: 'OpenProject',
    component: () => import('@/views/OpenProject.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue'), // Settings 컴포넌트를 가리키지만, 내부적으로 이름은 SettingsPage로 변경됨
  },
];

const router = new VueRouter({
  mode: 'history', // 히스토리 모드
  base: process.env.BASE_URL,
  routes,
});

export default router;
