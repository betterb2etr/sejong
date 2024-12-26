import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '@/views/LoginView.vue'; // 새로 생성된 로그인 화면
import ListPage from '@/components/ListPage.vue'; // 기존 기능 열거 페이지

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView, // 기본 경로를 로그인 화면으로 설정
  },
  {
    path: '/list',
    name: 'List',
    component: ListPage, // 기능 열거 페이지
  },
];

const router = new VueRouter({
  mode: 'history', // 히스토리 모드
  base: process.env.BASE_URL,
  routes,
});

export default router;
