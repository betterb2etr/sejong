<template>
  <div>
    <h2>Timer</h2>
    <p>120분 화이팅입니다!</p>
    <TimerCPT />
  </div>
</template>

<script>
import TimerCPT from '@/components/TimerCPT.vue';

export default {
  name: 'TimerView',
  components: {
    TimerCPT,
  },
};
</script>

<style>
h2 {
  color: #FF9800;
}
</style>
