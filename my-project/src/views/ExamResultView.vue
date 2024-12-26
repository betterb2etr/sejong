<template>
  <div class="analysis-page">
    <!-- 학습 결과 입력 -->
    <div class="input-section">
      <h2>{{ userName }} 님, 학습 결과를 입력해주세요!</h2>
      <button @click="goToInputPage" class="input-button">학습 결과 입력하기</button>
    </div>

    <!-- 사용자 전체 점수 -->
    <div class="score-section">
      <h3>사용자 전체 점수</h3>
      <p class="total-score">총 {{ totalScore }}점</p>
      <div class="score-details">
        <div class="score-box">
          <p>RC</p>
          <p class="score">{{ rcScore }}점</p>
        </div>
        <div class="score-box">
          <p>LC</p>
          <p class="score">{{ lcScore }}점</p>
        </div>
      </div>
    </div>

    <!-- 사용자 전체 오답률 -->
    <div class="wrong-rate-section">
      <h3>사용자 전체 오답률</h3>
      <div class="circle-container">
        <svg class="progress-ring" width="120" height="120">
          <circle
            class="progress-ring__background"
            cx="60"
            cy="60"
            r="50"
            fill="transparent"
          />
          <circle
            class="progress-ring__circle"
            cx="60"
            cy="60"
            r="50"
            fill="transparent"
            stroke-dasharray="314"
            :stroke-dashoffset="314 - (314 * wrongRate) / 100"
          />
        </svg>
        <p class="circle-text">{{ wrongRate }}%</p>
      </div>
      <p class="encouragement">아직 괜찮아요, 조금 더 노력해봐요!</p>
    </div>

    <!-- Part 별 오답률 -->
    <div class="part-analysis-section">
      <h3>Part 별 오답률</h3>
      <div class="part-grid">
        <div class="part-card" v-for="(part, index) in parts" :key="index">
          <h4>{{ part.name }}</h4>
          <p>전체 이용자의 상위 {{ part.rank }}%에 해당합니다.</p>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: part.accuracy + '%' }"></div>
          </div>
          <p class="accuracy">{{ part.accuracy }}%</p>
        </div>
      </div>
    </div>

    <!-- 학습 컨설팅 -->
    <div class="consulting-section">
      <h3>학습 컨설팅</h3>
      <div class="solution" v-for="(solution, index) in solutions" :key="index">
        <h4>Solution {{ index + 1 }}</h4>
        <p>{{ solution }}</p>
      </div>
      <div class="final-score">
        <p>해당 컨설팅 방법으로 공부 시</p>
        <p class="predicted-score">{{ predictedScore }}점 예상</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnalysisPage",
  data() {
    return {
      userName: "성림",
      totalScore: 700,
      rcScore: 350,
      lcScore: 350,
      wrongRate: 40,
      parts: [
        { name: "Part 1", rank: 12, accuracy: 80 },
        { name: "Part 2", rank: 12, accuracy: 75 },
        { name: "Part 3", rank: 12, accuracy: 90 },
        { name: "Part 4", rank: 12, accuracy: 60 },
        { name: "Part 5", rank: 12, accuracy: 85 },
        { name: "Part 6", rank: 12, accuracy: 70 },
        { name: "Part 7", rank: 12, accuracy: 65 },
      ],
      solutions: [
        "파트 1의 풀이 시간을 줄이고 다른 파트에 시간을 더 투자해보세요!",
        "파트 2의 정확도를 높이기 위해 20분 내 풀이 연습을 해보세요!",
      ],
      predictedScore: 810,
    };
  },
  methods: {
    goToInputPage() {
      alert("학습 결과 입력 페이지로 이동합니다!");
    },
  },
};
</script>

<style scoped>
/* 전체 페이지 스타일 */
.analysis-page {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 학습 결과 입력 */
.input-section {
  text-align: center;
  background-color: #ffe7ba;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.input-button {
  background-color: #ffa940;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.input-button:hover {
  background-color: #d48806;
}

/* 점수 섹션 */
.score-section {
  text-align: center;
  color: #1c201a;
}

.total-score {
  font-size: 20px;
  font-weight: bold;
  color: #52c41a;
}

.score-details {
  display: flex;
  justify-content: space-between;
  color: #70a5db;
}

.score-box {
  color: #4f82db;
  text-align: center;
  flex: 1;
}

.score-box .score {
  font-size: 18px;
  font-weight: bold;
}

/* 사용자 전체 오답률 */
.wrong-rate-section {
  text-align: center;
}

.circle-container {
  position: relative;
  width: 120px;
  height: 90px;
  padding : 20px;
  margin: 0 auto;
  color : rgb(70, 172, 186);
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring__background {
  stroke: #e8e8e8;
  stroke-width: 10;
}

.progress-ring__circle {
  stroke: #FF830F;
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.6s ease;
}

.circle-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.encouragement {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

/* Part 분석 섹션 */
.part-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3등분 */
  gap: 10px;
}

.part-card {
  background-color: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}

.progress-bar {
  background-color: #e8e8e8;
  border-radius: 5px;
  height: 8px;
}

.progress-fill {
  height: 8px;
  background-color: #ffa940;
  border-radius: 5px;
}

/* 학습 컨설팅 */
.consulting-section {
  margin-top: 20px;
}

.solution {
  background-color: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

.final-score {
  text-align: center;
  background-color: #e6f7ff;
  padding: 10px;
  border-radius: 10px;
}

.predicted-score {
  font-size: 20px;
  font-weight: bold;
  color: #203c97;
}

/* 반응형: 화면 크기에 맞게 그리드 열 수 조정 */
@media (max-width: 768px) {
  .part-grid {
    grid-template-columns: repeat(2, 1fr); /* 2등분 */
  }
}

@media (max-width: 500px) {
  .part-grid {
    grid-template-columns: 1fr; /* 1등분 */
  }
}
</style>
