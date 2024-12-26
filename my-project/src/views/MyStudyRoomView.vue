<template>
    <div class="my-study-room">
      <h2>나의 학습실</h2>
    
      <ul v-if="books.length">
        <li v-for="(book, index) in books" :key="index">교재 ISBN: {{ book }}</li>
      </ul>
      <p v-else>등록된 교재가 없습니다.</p>
     
      <button @click="goToExam" class="exam-button">응시하러가기</button>
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
      goToExam() {
      this.$router.push('/exam');
      },
    },
  };
  </script>
  
  <style scoped>
  .my-study-room {
    text-align: center;
    margin-top: 20px;
  }
  
  .exam-button {
  padding: 15px 30px;
  font-size: 38px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.exam-button:hover {
  background-color: #45a049;
}

  
  </style>
