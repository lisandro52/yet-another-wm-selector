process.env.VUE_APP_VERSION = process.env.npm_package_version

module.exports = {
  // Set the base path for GitHub Pages deployment
  publicPath: process.env.NODE_ENV === 'production' ? '/yet-another-wm-selector/' : '/',
  
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/scss/baseline.scss";'
      }
    }
  }
};
