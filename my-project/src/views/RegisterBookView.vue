<template>
    <div class="register-book">
      <h2>교재등록</h2>
      <form @submit.prevent="registerBook">
        <label for="isbn">ISBN 입력:</label>
        <input type="text" id="isbn" v-model="isbn" placeholder="ISBN 입력" required />
        <button type="submit">등록</button>
      </form>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import { appState } from '@/App.vue';
  
  export default {
    name: 'RegisterBookView',
    data() {
      return {
        isbn: '',
        message: '',
      };
    },
    methods: {
      registerBook() {
        const validISBN = '9781234567890'; // 정해진 ISBN
        if (this.isbn === validISBN) {
          appState.registeredBooks.push(this.isbn);
          this.message = '등록되었습니다!';
          this.isbn = '';
        } else {
          this.message = '유효하지 않은 ISBN입니다.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-book {
    text-align: center;
    margin-top: 20px;
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  .message {
    margin-top: 20px;
    font-size: 16px;
    color: green;
  }
  </style>
  