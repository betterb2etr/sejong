<template>
  <div class="exam-view">
    <h1>시험 응시</h1>
    <TimerCPT :initialTime="7200" @time-up="timeUp" ref="timer" />
    <form @submit.prevent="submitExam" class="omr-form">
      <div v-for="n in 200" :key="n" class="question">
        <p>문제 {{ n }}</p>
        <div class="choices">
          <label v-for="i in 5" :key="i">
            <input
              type="radio"
              :name="'question-' + n"
              :value="i"
              v-model="answers[n - 1]"
            />
            {{ i }}
          </label>
        </div>
      </div>
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
.exam-view {
  text-align: center;
}

.omr-form {
  margin-top: 20px;
}

.question {
  margin-bottom: 15px;
}

.choices {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.submit-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
