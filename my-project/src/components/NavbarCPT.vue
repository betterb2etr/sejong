<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/timer">Timer</router-link></li>
      
      <li><router-link to="/register-book">교재등록</router-link></li>
      <li><router-link to="/home">홈</router-link></li>
      <li><router-link to="/my-study-room">나의 학습실</router-link></li>
    </ul>
    <button class="logout-btn" @click="$emit('logout')">로그아웃</button>
  </nav>
</template>

<script>
export default {
  name: "NavbarCPT",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  padding: 1rem;
  background-color: #f8f8f8;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem; /* 메뉴 간격 */
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline-block;
}

.logout-btn {
  margin-left: 2rem; /* 버튼과 메뉴 사이 간격 */
  background-color: greenyellow;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
