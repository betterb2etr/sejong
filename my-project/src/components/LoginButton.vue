<template>
  <div class="login-button">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          v-model="password"
          required
        />
      </div>
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { appState } from '@/App.vue';

export default {
  name: 'LoginButton',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    handleLogin() {
      const validUsername = 'admin';
      const validPassword = '1234';

      if (this.username === validUsername && this.password === validPassword) {
        appState.isLoggedIn = true;
        this.$router.push('/home'); // 홈화면으로 이동
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    },
  },
};
</script>

<style scoped>
.login-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>
