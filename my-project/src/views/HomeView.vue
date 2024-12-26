<template>
  <div class="home-view">
    <!-- 상단 환영 메시지 -->
    <div class="welcome-section">
      <h1>어서오세요 {{ userName }}님</h1>
      <p>오늘도 화이팅! 고득점 TOEIC 응원합니다!</p>
    </div>

    <!-- 주요 버튼 영역 -->
    <div class="button-grid">
      <div class="grid-item" @click="goToStudyRoom">
        <div class="icon study-icon"></div>
        <p>학습하러 가기</p>
      </div>
      <div class="grid-item" @click="goToTimer">
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

.welcome-section h1 {
  font-size: 18px;
  color: #333;
}

.welcome-section p {
  font-size: 14px;
  color: #666;
}

/* 버튼 그리드 */
.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2등분 */
  gap: 16px;
  width: 100%;
  max-width: 320px; /* 모바일 화면 크기에 맞춤 */
  justify-content: center; /* 중앙 정렬 */
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.grid-item:hover {
  background-color: #e6f7ff;
  transform: translateY(-3px);
}

.grid-item p {
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

/* 아이콘 스타일 */
.icon {
  width: 36px;
  height: 36px;
  background-size: contain;
  background-repeat: no-repeat;
}

.study-icon {
  /* background-image: url('/assets/icons/study.png'); 학습 아이콘 */
}

.timer-icon {
  /* background-image: url('/assets/icons/timer.png'); 타이머 아이콘 */
}

/* 학습 팁 섹션 */
.tips-section {
  width: 100%;
  max-width: 320px; /* 모바일 화면 크기에 맞춤 */
  margin-top: 16px;
}

.tips-section h2 {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
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

/* 반응형 디자인 */
@media screen and (max-width: 768px) {
  .grid-item {
    padding: 10px;
  }

  .icon {
    width: 28px;
    height: 28px;
  }

  .welcome-section h1 {
    font-size: 16px;
  }

  .welcome-section p {
    font-size: 12px;
  }
}
</style>
