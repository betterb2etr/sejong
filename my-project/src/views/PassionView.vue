<template>
    <div class="passion-view">
       <img src="@/assets/passiontimer.png" alt="열품타 이미지" class="passion-image" />  
    </div>
  </template>
  
  <script>
  export default {
    name: "PassionView",
  };
  </script>
  
  <style scoped>
  .passion-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* 화면 전체를 채우도록 설정 */
    background-color: #f8f9fa; /* 배경색 설정 */
  }
  
  .passion-image {
    max-width: 100%; /* 이미지가 화면 너비의 80%를 넘지 않도록 설정 */
    
  }
  </style>
  
