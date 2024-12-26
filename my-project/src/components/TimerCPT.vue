<template>
    <div class="timer">
      <h2>Timer</h2>
      <p>{{ timeLeft }} seconds left</p>
      <button @click="startTimer">Start</button>
      <button @click="resetTimer">Reset</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TimerCPT',
    data() {
      return {
        timeLeft: 60,
        timer: null,
      };
    },
    methods: {
      startTimer() {
        if (this.timer) return;
        this.timer = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--;
          } else {
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      },
      resetTimer() {
        clearInterval(this.timer);
        this.timer = null;
        this.timeLeft = 60;
      },
    },
  };
  </script>
  
  <style scoped>
  .timer {
    text-align: center;
  }
  </style>
  