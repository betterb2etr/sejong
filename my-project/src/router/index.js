import Vue from 'vue';
import VueRouter from 'vue-router';
import { appState } from '@/App.vue';

import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import GradeInputView from '@/views/GradeInputView.vue';
import GradeAnalysisView from '@/views/GradeAnalysisView.vue';
import TimerView from '@/views/TimerView.vue';
import AIFeedbackView from '@/views/AIFeedbackView.vue';
import SettingsView from '@/views/SettingsView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView, meta: { requiresAuth: true } },
  { path: '/grade-input', name: 'GradeInput', component: GradeInputView, meta: { requiresAuth: true } },
  { path: '/grade-analysis', name: 'GradeAnalysis', component: GradeAnalysisView, meta: { requiresAuth: true } },
  { path: '/timer', name: 'Timer', component: TimerView, meta: { requiresAuth: true } },
  { path: '/ai-feedback', name: 'AIFeedback', component: AIFeedbackView, meta: { requiresAuth: true } },
  { path: '/settings', name: 'Settings', component: SettingsView, meta: { requiresAuth: true } },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !appState.isLoggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router;
