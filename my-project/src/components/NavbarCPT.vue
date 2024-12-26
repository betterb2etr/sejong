<template>
  <nav>
    <ul>
      <li><router-link to="/grade-input">점수 입력</router-link></li>
      <li><router-link to="/grade-analysis">점수 분석</router-link></li>
      <li><router-link to="/timer">Timer</router-link></li>
      <li><router-link to="/ai-feedback">AI Feedback</router-link></li>
      <li><router-link to="/settings">환경설정</router-link></li>
      <li><router-link to="/register-book">교재등록</router-link></li>
      <li><router-link to="/my-study-room">나의 학습장</router-link></li>
    </ul>
    <button class="logout-btn" @click="$emit('logout')">로그아웃</button>

  </nav>
</template>

<script>
export default {
  name: 'NavbarCPT',
};
</script>

<style scoped>
nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
nav ul li {
  display: inline-block;
}
.logout-btn {
  margin-left: auto;
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
