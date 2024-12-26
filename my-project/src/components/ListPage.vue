<template>
  <div class="list-container">
    <h2>사용자 작업 리스트</h2>
    <ul>
     <li v-for="(item, index) in tasks" :key="index">
        <router-link :to="item.link">{{ item.name }}</router-link>
     </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListPage',
  data() {
    return {
      tasks: [
        { name: '작업 1: 새 프로젝트 생성', link: '/create-project' },
        { name: '작업 2: 기존 프로젝트 열기', link: '/open-project' },
        { name: '작업 3: 환경 설정', link: '/settings' },
      ],

    };
  },
};
</script>

<style>
.list-container {
  padding: 20px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: #007BFF;
}

a:hover {
  text-decoration: underline;
}
</style>
