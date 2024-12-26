<template>
  <div class="home-view">
    <h1>홈 화면</h1>
    <p>환영합니다! TOEIC 응시를 준비하세요.</p>
    <button @click="goToExam" class="exam-button">응시하러가기</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToExam() {
      this.$router.push('/exam');
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
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.exam-button:hover {
  background-color: #45a049;
}
</style>
