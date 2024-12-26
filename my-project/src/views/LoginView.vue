<template>
  <div class="login-view">
    <h1>Login</h1>
    <p>TOEIC 수험생 여러분을 응원합니다</p>
    <LoginButton />
  </div>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue';

export default {
  name: 'LoginView',
  components: {
    LoginButton,
  },
};
</script>

<style scoped>
.login-view {
  text-align: center;
  margin-top: 50px;
}
</style>
