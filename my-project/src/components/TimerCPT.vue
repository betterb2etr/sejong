<template>
  <div class="flip-timer">
    <div class="flip-box">
      <span class="flip-number">{{ minutes }}</span>
      <span class="flip-label">분</span>
    </div>
    <div class="flip-box">
      <span class="flip-number">{{ seconds }}</span>
      <span class="flip-label">초</span>
    </div>
    <p v-if="timeExpired" class="expired">시간이 만료되었습니다!</p>
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
    minutes() {
      return Math.floor(this.timeLeft / 60);
    },
    seconds() {
      return this.timeLeft % 60;
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
.flip-timer {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
}

.flip-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 120px;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.flip-number {
  font-size: 56px;
  font-weight: bold;
  color: #333;
}

.flip-label {
  font-size: 16px;
  font-weight: bold;
  color: #666;
  margin-top: 10px;
}

.expired {
  color: red;
  font-weight: bold;
  margin-top: 20px;
}
</style>
