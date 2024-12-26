<template>
  <div class="timer">
    <p v-if="!timeExpired">남은 시간: {{ formattedTime }}</p>
    <p v-else class="expired">시간이 만료되었습니다!</p>
  </div>
</template>

<script>
export default {
  name: "TimerCPT",
  props: {
    initialTime: {
      type: Number,
      default: 7200, // 120분
    },
  },
  data() {
    return {
      timeLeft: this.initialTime,
      timer: null,
      timeExpired: false,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      return `${minutes}분 ${seconds}초`;
    },
  },
  methods: {
    startTimer() {
      if (this.timer) return; // 중복 실행 방지
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.stopTimer();
          this.timeExpired = true;
          this.$emit("time-up"); // 시간 초과 이벤트 발생
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  beforeDestroy() {
    this.stopTimer();
  },
};
</script>

<style scoped>
.timer {
  font-size: 18px;
  color: #333;
}

.expired {
  color: red;
  font-weight: bold;
}
</style>
