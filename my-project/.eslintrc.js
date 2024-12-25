module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false, // Babel 설정 파일 없어도 동작 가능
    },
    rules: {
      // 여기에 프로젝트 규칙 추가 가능
    },
  };
  