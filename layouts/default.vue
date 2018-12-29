<template lang="pug">
  div#container
    AppHeader
    main#main(role="main")
      AppSidebar
      nuxt
    AppFooter
</template>
<script>
  import AppHeader from '~/components/Header.vue'
  import AppSidebar from '~/components/Sidebar.vue'
  import AppFooter from '~/components/Footer.vue'

	export default {
		components: {
      AppHeader,
      AppSidebar,
      AppFooter
    }
  }
</script>
<style lang="less">
  /** Global */
  * {
    margin: 0;
    padding: 0;
  }
  /** Framework */
  #container {
    font-family: 'Noto Sans KR', sans-serif;
    height: inherit;
    color: rgba(0,0,0, 0.8);
    li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: gray;
      font-weight: 300;
      transition-duration: 0.3s;
    }
    a:hover {
      color: black;
    }
    pre {
      margin: 0;
      font-size:0.85em;
      font-weight: 300;
    }
    b, strong {
      background-color: #f8f8f8;
      color: #ed5207;
      font-weight: 400;
      padding: 0px 5px;
      border-radius: 5px;
      font-size: 0.85em;
      display: inline-block;
      height: 23px;
      line-height: 23px;
    }
    #title {
      width: 1px;
      height: 1px;
      overflow: hidden;
      margin: -1px;
      text-indent: -9999px;
    }
    .txc-textbox, a {
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
    }
  }
  @media all and (min-width: 1170px) {
    #main {
      width: 1170px;
      margin: 0 auto;
      margin-top: 75px;
      margin-bottom: 25px;
      overflow: hidden;
    }
  }
  @media all and (max-width: 1170px) {
    #main {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      margin: 25px auto;
      margin-top: 0px;
      overflow: hidden;
    }
  }
</style>
