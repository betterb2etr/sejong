<script>
export default {
  methods: {
    startTimer() {
      if (this.timer) return;
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
          this.timer = null;
          this.$router.push('/exam-result'); // 시간 만료 시 결과창으로 이동
        }
      }, 1000);
    },
  },
};
</script>
