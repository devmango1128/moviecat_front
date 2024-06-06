const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: { '^/': '' },
      }
    },
    clientLogLevel: 'silent'
  }
});