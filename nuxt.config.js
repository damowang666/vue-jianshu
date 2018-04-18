module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '简书',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'author',
        content: '王昌祖'
      },
      {
        hid: 'description',
        name: 'description',
        content: '我自己的简书'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css','~/assets/css/animate.css',"~/assets/css/normalize.css","~/assets/css/font-awesome.css"],
  /*
   ** Add axios globally
   */
  build: {
    vendor: ['axios'],
    /*
     ** Run ESLINT on save
     */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}