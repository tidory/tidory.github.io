export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tidory.com',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'format-detection', content: 'telephone=no' },
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
      { rel: 'preconnect', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: '//ka-f.fontawesome.com' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/gh/wan2land/d2coding/d2coding-ligature-full.css', media: 'print', onload: 'this.media="all"' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    },
    liveEdit: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
