<template>
  <div class="exam-view">
    <h1>응시하기</h1>
    <!-- 타이머 컴포넌트 -->
    <TimerCPT :initialTime="7200" @time-up="timeUp" ref="timer" />

    <!-- OMR 마킹 폼 -->
    <form @submit.prevent="submitExam" class="omr-form">
      <div v-for="n in 200" :key="n" class="question">
        <div class="question-row">
          <!-- 문제 번호 -->
          <p class="question-number">문제 {{ n }}</p>

          <!-- 마킹 칸 -->
          <div class="choices">
            <label v-for="i in 5" :key="i" class="choice-label">
              <input
                type="radio"
                :name="'question-' + n"
                :value="i"
                v-model="answers[n - 1]"
              />
              <span>{{ i }}</span>
            </label>
          </div>
        </div>
      </div>
      <!-- 제출 버튼 -->
      <button type="submit" class="submit-button">제출하기</button>
    </form>
  </div>
</template>

<script>
import TimerCPT from "@/components/TimerCPT.vue";

export default {
  name: "ExamView",
  components: {
    TimerCPT,
  },
  data() {
    return {
      answers: Array(200).fill(null),
    };
  },
  methods: {
    submitExam() {
      this.$refs.timer.stopTimer(); // 타이머 정지
      this.$router.push("/exam-result");
    },
    timeUp() {
      // 타이머가 종료되었을 때
      this.submitExam();
    },
  },
  mounted() {
    this.$refs.timer.startTimer(); // 타이머 시작
  },
};
</script>

<style scoped>
/* 전체 레이아웃 */
.exam-view {
  display: flex;
  flex-direction: column;
  align-items: center; /* 네비게이션바와 OMR 폼 모두 가로 중앙 정렬 */
  text-align: center;
  padding: 20px;
  max-width: 500px; /* 화면 너비 제한 */
  margin: 0 auto; /* 중앙 정렬 */
}

/* OMR 폼 */
.omr-form {
  margin-top: 20px;
  width: 100%;
}

.question {
  margin-bottom: 20px; /* 문제와 문제 간 간격 */
}

.question-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px; /* 문제 번호와 마킹 칸 간 간격 */
  border: 1px solid #e0e0e0;
  padding: 10px;
  border-radius: 8px;
}

.question-number {
  font-weight: bold;
  font-size: 16px;
  color: #333;
  flex: 1; /* 문제 번호 크기 조정 */
  text-align: left; /* 왼쪽 정렬 */
}

.choices {
  display: flex;
  gap: 16px; /* 마킹 칸 간격 넓히기 */
  flex: 2; /* 마킹 칸 더 넓게 배치 */
  justify-content: center;
}

.choice-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer; /* 선택 가능 마우스 포인터 */
}

input[type="radio"] {
  margin-bottom: 5px;
  width: 20px;
  height: 20px; /* 클릭 영역을 넓혀서 모바일 터치 지원 */
}

.submit-button {
  margin-top: 30px;
  padding: 12px 25px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
