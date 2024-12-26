<template>
  <div class="home-view">
    <h1>어서오세요 admin님</h1>
    <p>오늘도 화이팅! 고득점 TOEIC 응원합니다!  </p>
    <button @click="goToExam" class="exam-button">학습하러가기</button>
 
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToExam() {
      this.$router.push('/my-study-room');
    },
  },
};
</script>

<style scoped>
.home-view {
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
