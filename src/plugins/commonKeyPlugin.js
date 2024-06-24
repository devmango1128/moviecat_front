export default {
  install(app, options) {
    app.config.globalProperties.$movieKey = options.movieKey;
  }
}