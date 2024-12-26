<template>
  <div class="timer-view">
    <h2>Timer</h2>
    <p>120분 화이팅입니다!</p>
    <button @click="goToPassion" class="passion-button">열품타</button>
    <p class="info-text">혹시 열정을 같이 품나요?</p>

    <TimerCPT :initialTime="7200" ref="timer" />

    <!-- 버튼 그룹 -->
    <div class="button-grid">
      <button @click="startTimer" class="control-button">Start</button>
      <button @click="pauseTimer" class="control-button">Pause</button>
      <button @click="stopTimer" class="control-button">Stop</button>
      <button @click="initTimer" class="control-button">Init</button>
    </div>
  </div>
</template>

<script>
import TimerCPT from "@/components/TimerCPT.vue";

export default {
  name: "TimerView",
  components: {
    TimerCPT,
  },
  data() {
    return {
      timerStarted: false,
    };
  },
  methods: {
    startTimer() {
      this.timerStarted = true;
      this.$refs.timer.startTimer();
    },
    pauseTimer() {
      this.$refs.timer.stopTimer();
    },
    stopTimer() {
      this.$refs.timer.stopTimer();
      this.timerStarted = false; // 타이머 상태 초기화
    },
    initTimer() {
      this.$refs.timer.initTimer();
      this.timerStarted = false; // 타이머 상태 초기화
    },
    goToPassion() {
      this.$router.push("/passion");
    },
  },
};
</script>

<style scoped>
.timer-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  color: #FF9800;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

.info-text {
  margin-bottom: 20px;
  font-size: 16px;
  color: #666;
}

.passion-button {
  margin-top: 10px;
  padding: 15px 25px;
  font-size: 18px;
  color: white;
  background-color: orangered;
  border: none;
  cursor: pointer;
}

.passion-button:hover {
  background-color: #e64a19;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열로 정렬 */
  gap: 10px; /* 버튼 간 간격 */
  margin-top: 20px;
}

.control-button {
  padding: 15px 25px;
  font-size: 18px;
  color: white;
  background-color: #4caf50;
  border: none;
  cursor: pointer;
}

.control-button:hover {
  background-color: #45a049;
}
</style>
