<template>
  <div class="timer-view">
    <h2>Timer</h2>
    <p>120분 화이팅입니다!</p>
    <TimerCPT :initialTime="7200" ref="timer" />
    <button v-if="!timerStarted" @click="startTimer" class="start-button">시작</button>
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
      this.$refs.timer.startTimer(); // 타이머 시작
    },
  },
};
</script>

<style scoped>
.timer-view {
  text-align: center;
  margin-top: 20px;
}

h2 {
  color: #FF9800;
}

.start-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.start-button:hover {
  background-color: #45a049;
}
</style>
