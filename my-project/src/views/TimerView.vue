<template>
  <div class="timer-view">
    <h2>Timer</h2>
    <p>120분 화이팅입니다!</p>
    <button  @click="goToPassion" class="passion-button">열품타</button>
    <p>혹시 열정을 같이 품나요?</p>
    
    <TimerCPT :initialTime="7200" ref="timer"/>
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
    goToPassion() {
      this.$router.push('/exam');
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
  margin-bottom: 30px;
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
.start-button {
  margin-top: 20px;
  padding: 15px 25px;
  font-size: 18px;
  color: white;
  background-color: #4caf50;
  border: none;
  cursor: pointer;
}
.passion-button:hover {
  background-color: #45a049;
}
.start-button:hover {
  background-color: #45a049;
}
</style>
