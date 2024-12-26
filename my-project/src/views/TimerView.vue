<template>
  <div class="timer-view">
    <h2>Timer</h2>
    <p>120분 화이팅입니다!</p>
    <TimerCPT :initialTime="7200" ref="timer" />
  </div>
</template>

<script>
import TimerCPT from "@/components/TimerCPT.vue";

export default {
  name: "TimerView",
  components: {
    TimerCPT,
  },
  mounted() {
    this.$refs.timer.startTimer(); // 타이머 시작
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
</style>
