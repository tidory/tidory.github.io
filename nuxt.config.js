module.exports = {
  css: [
    '~assets/css/nomalize.css',
	  '~assets/css/prism.css'
  ],
  plugins: [
	  '~plugins/prism'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: '티스토리 스킨 프레임워크, 티도리(TIDORY)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '오직 티스토리 스킨만을 위한 프레임워크'},
      { name: 'author', content: '정만수'},
      { name: 'keywords', content: '티스토리, 티스토리 스킨, 티스토리 스킨 제작, 티스토리 프레임워크, 티도리, TISTORY, TIDORY'},
      { content: '//tidory.com/images/og-card-512.png', property: 'og:image' },
      { content: '오직 티스토리 스킨만을 위한 프레임워크', property: 'og:description' },
      { content: 'https://tidory.com', property: 'og:url' },
      { content: 'TIDORY', property: 'og:site_name' },
      { content: '티스토리 스킨 프레임워크, 티도리(TIDORY)', property: 'og:title' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '//tidory.com/favicon.png' },
      { rel: 'apple-touch-icon', href: '//tidory.com/images/favicon-180.png' },
      { rel: 'apple-touch-icon', sizes: "76x76", href: '//tidory.com/images/favicon-76.png' },
      { rel: 'apple-touch-icon', sizes: "120x120", href: '//tidory.com/images/favicon-120.png' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: '//tidory.com/images/favicon-152.png' },
      { rel: 'canonical', href: 'https://tidory.com/' },
      { rel: 'alternate', type: 'application/rss+xml', href: 'https://tidory.com/rss'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosanskr.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: 'https://tidory.com/'
  }
}
