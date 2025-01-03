import Vue from 'vue';
import VueRouter from 'vue-router';
import { appState } from '@/App.vue';

import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';

import TimerView from '@/views/TimerView.vue';
import SettingsView from '@/views/SettingsView.vue';
import RegisterBookView from '@/views/RegisterBookView.vue';
import MyStudyRoomView from '@/views/MyStudyRoomView.vue';
import ExamView from '@/views/ExamView.vue';
import ExamResultView from '@/views/ExamResultView.vue';
import PassionView from "@/views/PassionView.vue"; 

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/home', name: 'Home', component: HomeView, meta: { requiresAuth: true } },
  { path: '/exam', name: 'Exam', component: ExamView, meta: { requiresAuth: true } },
  { path: '/exam-result', name: 'ExamResult', component: ExamResultView, meta: { requiresAuth: true } },
  { path: '/timer', name: 'Timer', component: TimerView, meta: { requiresAuth: true } },
  { path: '/settings', name: 'Settings', component: SettingsView, meta: { requiresAuth: true } },
  { path: '/register-book', name: 'RegisterBook', component: RegisterBookView, meta: { requiresAuth: true } },
  { path: '/my-study-room', name: 'MyStudyRoom', component: MyStudyRoomView, meta: { requiresAuth: true } },
  { path: "/passion", name: "Passion", component: PassionView, meta: { requiresAuth: true }  }, // 새로운 경로 추가
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !appState.isLoggedIn) {
    next('/'); // 로그인 화면으로 이동
  } else {
    next();
  }
});

export default router;
