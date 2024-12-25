<template>
  <button @click="openNewWindow">입장하기</button>
</template>

<script>
import ListPage from './ListPage.vue';

export default {
  name: 'MainButton',
  methods: {
    openNewWindow() {
      const newWindow = window.open(
        '', // 새로운 창의 빈 URL
        '_blank',
        'width=800,height=600' // 창 크기 설정
      );

      if (newWindow) {
        // 새로운 창의 내용을 설정
        newWindow.document.write('<!DOCTYPE html><html><head><title>리스트</title></head><body><div id="app"></div></body></html>');
        newWindow.document.close();

        // 새로운 Vue 인스턴스 마운트
        newWindow.app = new newWindow.Function(`
          const { createApp } = Vue;
          const ListPage = ${JSON.stringify(ListPage)};
          createApp(ListPage).mount('#app');
        `);
      } else {
        alert('팝업 차단을 해제해주세요!');
      }
    },
  },
};
</script>

<style>
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
