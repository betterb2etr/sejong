<template>
    <div class="my-study-room">
      <h2>나의 학습장</h2>
      <ul v-if="books.length">
        <li v-for="(book, index) in books" :key="index">교재 ISBN: {{ book }}</li>
      </ul>
      <p v-else>등록된 교재가 없습니다.</p>
      <button @click="goHome" class="home-button">HOME</button>
    </div>
  </template>
  
  <script>
  import { appState } from '@/App.vue';
  
  export default {
    name: 'MyStudyRoomView',
    computed: {
      books() {
        return appState.registeredBooks;
      },
    },
    methods: {
      goHome() {
        this.$router.push('/home'); // 홈화면으로 이동
      },
    },
  };
  </script>
  
  <style scoped>
  .my-study-room {
    text-align: center;
    margin-top: 20px;
  }
  
  .home-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2196f3;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .home-button:hover {
    background-color: #1976d2;
  }
  </style>
  