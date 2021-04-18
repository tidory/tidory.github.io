module.exports = {
  /**
   * Plugins
   */
  plugins: [
    '~/plugins/highlight.client.js',
  ],
  /**
   * Headers of the page
   */
  head: {
    title: '티스토리 스킨 프레임워크, 티도리(TIDORY)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '오직 티스토리 스킨만을 위한 프레임워크' },
      { name: 'author', content: '정상우' },
      { name: 'keywords', content: '티스토리, 티스토리 스킨, 티스토리 스킨 제작, 티스토리 프레임워크, 티도리, TISTORY, TIDORY' },
      { content: '/images/og.png', property: 'og:image' },
      { content: '오직 티스토리 스킨만을 위한 프레임워크', property: 'og:description' },
      { content: 'https://tidory.com', property: 'og:url' },
      { content: 'TIDORY', property: 'og:site_name' },
      { content: '티스토리 스킨 프레임워크, 티도리(TIDORY)', property: 'og:title' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/images/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/180x180.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/76x76.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/120x152.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/152x152.png' },
      { rel: 'canonical', href: 'https://tidory.com/' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/earlyaccess/notosanskr.css' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/uikit@3.4.0/dist/css/uikit.min.css' }
    ]
  },

  /**
   * Build configuration
   */
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
