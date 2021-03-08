module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nomadasxcuba/'
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Nómadas por Cuba',
    },
  },
  transpileDependencies: [
    'vuetify',
  ]
}
