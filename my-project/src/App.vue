<template>
  <div id="app">
    <NavbarCPT v-if="isLoggedIn" @logout="handleLogout" />
    <router-view />
  </div>
</template>

<script>
import NavbarCPT from '@/components/NavbarCPT.vue';
import { reactive } from 'vue';

export const appState = reactive({
  isLoggedIn: false,
  registeredBooks: [], // 등록된 교재 목록
});

export default {
  name: 'App',
  components: {
    NavbarCPT,
  },
  computed: {
    isLoggedIn() {
      return appState.isLoggedIn;
    },
  },
  methods: {
    handleLogout() {
      appState.isLoggedIn = false;
      appState.registeredBooks = [];
      this.$router.push('/');
    },
  },
};
</script>

<style>
/* 글로벌 스타일 */
</style>
