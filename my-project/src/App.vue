<template>
  <div id="app">
    <router-view /> <!-- 라우터에서 현재 활성화된 컴포넌트를 렌더링 -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
}
</style>
