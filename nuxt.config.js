import pkg from './package'
import webpack from 'webpack'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
   css: [
     '@/assets/scss/app.scss'
   ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/filters.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  /**
   * Style Resources
   * Make scss includes global
   */
  styleResources: {
    scss: [
      '~assets/scss/_config.scss',
      '~assets/scss/tools/_grid.scss',
      '~assets/scss/tools/_backgrounds.scss',
      '~assets/scss/tools/_interactions.scss'
    ]
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }
    },

    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      }),
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
