<template lang="pug">
  footer#footer(role="footer")
    div
      div(style="float: left")
        a#logo(href="/")
        .tit 티스토리 스킨 프레임워크, #[span(style="color: #FF5544") 티도리(Tidory)]
        .copyright 
            | 티도리(Tidory)에 대한 저작권은 개발자 
            a(href="https://github.com/pronist" style="text-decoration: underline;" target="_blank") 정만수
            | 에게 있습니다.
      div(style="float: right")
          Navigation
</template>

<script>
  import Navigation from './Footer/Navigation.vue';

  export default {
    components: {
      Navigation
    }
  }
</script>

<style lang="less">
  @media screen and (min-width: 1170px) {
    @padding: 80px;
    @paddingBottom: @padding - 10px;
    @PaddingTop: @paddingBottom - 15px;
    
    #footer {
      border-top: 1px solid rgba(0, 0, 0, .06);
      color: rgba(0, 0, 0, .7);
      font-size: .95em;
      clear: both;
      margin-top: 55px;
      padding: 0 60px;
      padding-bottom: @paddingBottom;
      padding-top: @PaddingTop;
      background-color: white;
      min-width: 1170px;
      box-sizing: border-box;
      font-size: 14px;
      > div {
        overflow: hidden;
        margin: 0 auto;
        text-align: left;
        font-size: 0.95em;
        width: 1170px;
      }
      .tit {
        margin-bottom: 3px;
      }
      #logo {
          background: url(/images/logo.png);
          width: 24px;
          height: 24px;
          background-size: 24px 24px;
          background-repeat: no-repeat;
          position: relative;
          top: 5px;
          display: inline-block;
          margin-bottom: 20px;
      }
      .copyright a {
        color: rgba(0, 0, 0, .7) !important;
      }
    }
  }
  @media screen and (max-width: 1170px) {
    #footer {
      display: none;
    }
  }
</style>