<template>
  <div class="home-view">
    <!-- 상단 환영 메시지 -->
    <div class="welcome-section">
      <div class="icon-container">
        <div class="icon user-icon"></div>
        <div class="text-container">
          <h1>어서오세요 {{ userName }}님</h1>
          <p>오늘도 화이팅! 고득점 TOEIC 응원합니다!</p>
        </div>
      </div>
    </div>

    <!-- 주요 버튼 영역 -->
    <div class="button-column">
      <div class="grid-item study-button" @click="goToStudyRoom">
        <div class="icon study-icon"></div>
        <p>학습하러 가기</p>
      </div>
      <div class="grid-item timer-button" @click="goToTimer">
        <div class="icon timer-icon"></div>
        <p>타이머</p>
      </div>
    </div>

    <!-- 학습 팁 섹션 -->
    <div class="tips-section">
      <h2>오늘의 학습 팁</h2>
      <div class="tip-card" v-for="(tip, index) in tips" :key="index">
        <h3>{{ tip.title }}</h3>
        <p>{{ tip.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      userName: 'admin',
      tips: [
        { title: '"키워드를 풀어라"', description: '리스닝 파트는 키워드를 캐치하는 훈련이 중요합니다!' },
        { title: '"시간 관리가 핵심"', description: '파트 5, 6에서는 제한된 시간 안에 문제를 풀어야 합니다.' },
      ],
    };
  },
  methods: {
    goToStudyRoom() {
      this.$router.push('/my-study-room');
    },
    goToTimer() {
      this.$router.push('/timer');
    },
  },
};
</script>

<style scoped>
/* 전체 홈화면 스타일 */
.home-view {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  text-align: center; /* 텍스트 중앙 정렬 */
  gap: 16px;
  padding: 16px;
  background-color: #f8f9fa;
  height: 100vh; /* 화면 전체 높이 */
  box-sizing: border-box;
  font-size: 14px; /* 모바일 친화적인 기본 폰트 크기 */
}

/* 환영 메시지 */
.welcome-section {
  text-align: center;
  margin-bottom: 20px;
}

.icon-container {
  display: flex;
  align-items: center; /* 아이콘과 텍스트 수평 정렬 */
  gap: 12px;
}

.user-icon {
  width: 80px; /* 아이콘 크기 증가 */
  height: 80px; /* 아이콘 높이 증가 */
  background-image: url('@/assets/farmer.png'); /* 사용자 아이콘 */
  background-size: contain;
  background-repeat: no-repeat;
}

.text-container {
  text-align: left;
}

.text-container h1 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.text-container p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 버튼 영역 */
.button-column {
  display: flex;
  flex-direction: column; /* 위아래 정렬 */
  gap: 24px; /* 버튼 간 간격 증가 */
  width: 100%;
  max-width: 320px; /* 모바일 화면 크기에 맞춤 */
  margin-bottom: 5px; /* 학습 팁 섹션과 간격 추가 */
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
  color: white;
  font-weight: bold;
}

.grid-item:hover {
  transform: translateY(-3px);
}

.study-button {
  background-color: #a5d6a7; /* 연두색 */
}

.study-button:hover {
  background-color: #81c784;
}

.timer-button {
  background-color: #ffa726; /* 주황색 */
}

.timer-button:hover {
  background-color: #fb8c00;
}

.grid-item p {
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

/* 학습 팁 섹션 */
.tips-section {
  width: 100%;
  max-width: 320px; /* 모바일 화면 크기에 맞춤 */
  margin-top: 15px; /* 버튼 영역과 분리 */
  margin-bottom: 15px;
}

.tips-section h2 {
  font-size: 16px;
  color: #333;
  margin-bottom: 18px;
}

.tip-card {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.tip-card h3 {
  font-size: 14px;
  color: #ffa940;
  margin-bottom: 5px;
}

.tip-card p {
  font-size: 12px;
  color: #666;
}
</style>
