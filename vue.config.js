module.exports = {
  configureWebpack:{
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '-',
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '~@/styles/index.scss';`
      }
    }
  }
}