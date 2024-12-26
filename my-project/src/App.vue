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
      this.$router.push('/');
    },
  },
};
</script>

<style>
/* 글로벌 스타일 */
</style>
