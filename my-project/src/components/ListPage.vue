<template>
  <div class="list-container">
    <h2>사용자 작업 리스트</h2>
    <ul>
      <li v-for="(item, index) in tasks" :key="index">
        <a :href="item.link" target="_blank">{{ item.name }}</a>
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
        { name: '작업 1: 새 프로젝트 생성', link: '#' },
        { name: '작업 2: 기존 프로젝트 열기', link: '#' },
        { name: '작업 3: 환경 설정', link: '#' },
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
