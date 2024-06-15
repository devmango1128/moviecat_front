const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // Spring Boot 서버 주소
        changeOrigin: true,
        pathRewrite: { '^/api': '/' },
      }
    },
  },
});
