<template>
  <div class="home-view">
    <div class="grid-page">
      <div class="grid-item grid-top">상단</div>
      <div class="grid-item grid-middle">let's go examination</div>
      <div class="grid-item grid-bottom">timer</div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'SettingsPage',
  };
  </script>


<style scoped>
/* 메인 페이지 그리드 레이아웃 */
.grid-page {
  display: grid;
  grid-template-rows: 3fr 1fr 1fr; /* 행 크기 비율 */
  width: 100%;
  height: 50vh;
}

/* 공통 그리드 아이템 스타일 */
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: white;
}

/* 색상 지정 */
.grid-top {
  background-color:white; /* 상단 색상 */
}

.grid-middle {
  background-color: #8BC34A; /* 중간 색상 */
}

.grid-bottom {
  background-color: #03A9F4; /* 하단 색상 */
}
</style>