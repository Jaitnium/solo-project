// allows all of the latest css features to be used in any browser
module.exports = {
    plugins: {
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    },
  }