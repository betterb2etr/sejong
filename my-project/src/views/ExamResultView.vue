<template>
    <div class="exam-result-view">
      <h1>시험 결과</h1>
      <p>점수: {{ score }}</p>
      <button @click="goHome" class="home-button">HOME</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExamResultView',
    data() {
      return {
        score: 950, // 점수는 샘플값으로 설정
      };
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .exam-result-view {
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
  