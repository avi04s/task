module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/task'
      : '/',

    transpileDependencies: [
      'vuetify'
    ]
}
