<template>
  <div class="analysis-page">
    <!-- 헤더 -->
    <div class="header">
      <h3>AI 학습 결과 분석</h3>
    </div>

    <!-- 사용자 전체 점수 -->
    <div class="score-section">
      <div class="score-header">
        <h4>성립 님의 점수</h4>
        <div class="score-summary">
          <p class="total-score">총 <span>{{ totalScore }}점</span></p>
        </div>
        <div class="score-details">
          <div class="score-box">
            <p>RC</p>
            <p class="score">{{ rcScore }}점</p>
          </div>
          <div class="divider">|</div>
          <div class="score-box">
            <p>LC</p>
            <p class="score">{{ lcScore }}점</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 전체 정답률 -->
    <div class="accuracy-rate-section">
      <p>전체 정답률: <span class="accuracy-rate">{{ totalAccuracyRate }}%</span></p>
    </div>

    <!-- 정답률 분석 -->
    <div class="radar-chart-section">
      <h3>정답률 분석</h3>
      <canvas id="radarChart" width="300" height="300"></canvas>
    </div>

    <!-- 오답률 강조 박스 -->
    <div class="highlight-box">
      <div class="highlight-left">
        <span class="highlight-icon">📄</span>
        <div class="highlight-texts">
          <div class="highlight-title">
            part.5에서 오답률이 가장 높아요.
          </div>
          <a href="#" class="highlight-link">part.5 공부법 알아보기</a>
        </div>
      </div>
      <div class="highlight-arrow">
        ➜
      </div>
    </div>

    <!-- 학습 컨설팅 -->
    <div class="consulting-section">
      <h3>학습 컨설팅</h3>
      <!-- Solution 1 -->
      <div class="solution-box">
        <h4>
          <span class="solution-label">Solution. 1</span>
        </h4>
        <p>Part.1 유형은 시간을 빨리 쓰고 정답율이 높은 편입니다. 잘 하고 있어요! 다른 취약한 파트에 시간을 더 투자해보는게 좋을 것 같아요!</p>
      </div>
      <!-- Solution 2 -->
      <div class="solution-box">
        <h4>
          <span class="solution-label">Solution. 2</span>
        </h4>
        <p>Part.2의 소요시간은 13m 15s로 합격자의 평균 소요시간보다 오래 걸려요! 10분 내 풀이를 연습해보세요!</p>
      </div>

      <!-- 최종 점수 박스 -->
      <div class="final-score">
        <span class="final-score-icon">🎓</span>
        <div class="final-score-texts">
          <p class="final-score-title">해당 권장 공부법으로 공부 시</p>
          <p class="predicted-score">
            <span class="score">{{ predictedScore }}점</span>
            <span class="small-text">예상</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Chart from "chart.js/auto";

export default {
  name: "AnalysisPage",
  data() {
    return {
      totalScore: 0,
      rcScore: 0,
      lcScore: 0,
      totalAccuracyRate: 0,
      predictedScore: 0,
      radarData: {
        labels: ["PART 1", "PART 2", "PART 3", "PART 4", "PART 5", "PART 6", "PART 7"],
        datasets: [
          {
            label: "토익 합격자 평균 정답률",
            data: [],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "사용자 평균 정답률",
            userRank: [],
            data: [],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      chartInstance: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://172.16.53.87:8080/api/score/upload'); // 백엔드 API 엔드포인트로 변경
        const data = response.data;

        // 데이터 할당
        this.totalScore = data.totalScore;
        this.rcScore = data.rcScore;
        this.lcScore = data.lcScore;
        this.totalAccuracyRate = data.totalAccuracyRate;
        this.predictedScore = data.predictedScore;

        // 레이더 차트 데이터 업데이트
        this.radarData.datasets[0].data = data.toeicAverageAccuracy;
        this.radarData.datasets[1].data = data.userAverageAccuracy;
        this.radarData.datasets[1].userRank = data.userRank;

        // 차트 렌더링
        this.renderChart();
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        // 사용자에게 에러 알림 등 추가 처리
      }
    },
    renderChart() {
      const ctx = document.getElementById("radarChart").getContext("2d");

      // 기존 차트가 있으면 파괴
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(ctx, {
        type: "radar",
        data: this.radarData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                font: {
                  size: 12,
                },
              },
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const dataset = context.dataset;
                  const label = context.chart.data.labels[context.dataIndex];
                  const userAccuracy = dataset.data[context.dataIndex];
                  const rank = dataset.userRank 
                    ? dataset.userRank[context.dataIndex] 
                    : null;

                  if (rank !== null && rank !== undefined) {
                    return `${label}: ${userAccuracy}% (상위 ${rank}%)`;
                  } else {
                    return `${label}: ${userAccuracy}%`;
                  }
                },
              },
            },
          },
          scales: {
            r: {
              angleLines: {
                color: "#ccc",
              },
              grid: {
                color: "#ddd",
              },
              ticks: {
                stepSize: 10,
                display: true,
                color: "#000",
              },
            },
          },
        },
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.analysis-page {
  font-family: "Arial", sans-serif;
  max-width: 500px;
  margin: 0 auto;
  color: #333;
  padding: 10px;
}

.header {
  text-align: center;
  margin-bottom: 10px;
}

.header h3 {
  font-size: 18px;
  font-weight: bold;
}

.score-section {
  text-align: center;
  background-color: #f6f6f6;
  border-radius: 10px;
  margin: 0 !important;
  padding: 0 !important;
}

.score-header {
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
}

.score-summary {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}

.total-score span {
  font-size: 22px;
  font-weight: bold;
  color: #52c41a;
  padding: 5px 15px;
  background-color: #e6ffed;
  border-radius: 20px;
}

.score-details {
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
  margin: 5px 0;
}

.score-box p {
  margin: 0;
}

.divider {
  font-size: 16px;
  color: #ccc;
}

.accuracy-rate-section {
  text-align: center;
  margin: 10px 0;
}

.accuracy-rate {
  font-size: 18px;
  font-weight: bold;
  color: #52c41a;
}

.radar-chart-section {
  text-align: center;
  margin: 10px 0;
}

/* ---- Part별 분석 섹션 삭제 ---- */

/* 오답률 강조 박스 */
.highlight-box {
  background-color: #ff8000;
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin: 20px 0;
  font-size: 15px;
  font-weight: bold;
}

.highlight-icon {
  font-size: 30px;
  margin-right: 10px;
}

.highlight-left {
  display: flex;
  align-items: flex-start;
}

.highlight-texts {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.highlight-title {
  color: black;
  font-weight: bold;
  margin-bottom: 5px;
}

.highlight-link {
  color: black;
  text-decoration: none;
  font-size: 14px;
}

.highlight-link:hover {
  text-decoration: none;
}

/* 오른쪽 화살표 */
.highlight-arrow {
  width: 30px;
  height: 30px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-size: 14px;
}

/* 학습 컨설팅 */
.consulting-section {
  margin-bottom: 20px;
}

.solution-box {
  background-color: #fff;
  border: 1px solid #e7f5dd;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 8px;
  line-height: 20px;
}

.solution-label {
  background-color: #d9f7be;
  color: #22aa22;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 15px;
  display: inline-block;
  font-size: 13px;
  margin-bottom: 1px;
}

/* 최종 점수 박스 */
.final-score {
  display: flex;
  align-items: center;
  background-color: #11e318;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  font-weight: bold;
}

.final-score-icon {
  font-size: 32px;
  margin-right: 12px;
}

.final-score-texts {
  display: flex;
  flex-direction: column;
}

.final-score-title {
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: normal;
}

.predicted-score {
  margin: 0;
  line-height: 1.2;
}

.predicted-score .score {
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
}

.predicted-score .small-text {
  font-size: 14px;
  font-weight: normal;
}
</style>
