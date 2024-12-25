<template>
  <div id="app">
    <div class="main-container">
      <h1>Welcome to My Application</h1>
      <MainButton />
    </div>
  </div>
</template>

<script>
import MainButton from './components/MainButton.vue';

export default {
  name: 'App',
  components: {
    MainButton, // "입장하기" 버튼 컴포넌트
  },
};
</script>

<style>
.main-container {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
