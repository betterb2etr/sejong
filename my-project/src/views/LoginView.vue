<template>
    <div class="login-container">
      <h2>로그인</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">아이디</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">비밀번호</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // 간단한 로그인 로직
        if (this.username === 'admin' && this.password === '1234') {
          alert('로그인 성공!');
          this.$router.push('/list'); // 기능 열거 페이지로 이동
        } else {
          alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
      },
    },
  };
  </script>
  
  <style>
  .login-container {
    text-align: center;
    margin-top: 50px;
  }
  
  form {
    display: inline-block;
    text-align: left;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input {
    width: 200px;
    padding: 5px;
    font-size: 14px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  