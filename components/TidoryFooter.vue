<template lang="pug">
  footer#tidory-footer-wrapper
    div.logo
    div.tit 티스토리 스킨 프레임워크, #[span(style="text-decoration: underline;") 티도리(Tidory)]
    small.copyright
      | 티도리(Tidory)에 대한 저작권은 개발자 
      a(href="https://github.com/pronist" style="text-decoration: underline;" target="_blank") 정만수
      | 에게 있습니다.
</template>
<script>
  export default {
    name: 'tidory-footer'
  }
</script>
<style lang="less">
  footer#tidory-footer-wrapper {
    text-align: center;
    width: 100%;
    background: #282c2f;
    padding: 20px 0;
    padding-bottom: 40px;
    padding-top: 25px;
    box-sizing: border-box;
    color: white;
    div.logo {
      display: inline-block;
      text-align: center;
      background: url('~assets/images/logo.png');
      width: 29px;
      height: 29px;
      background-size: 29px 60px;
      background-position: 0 -29px;
      margin-bottom: 10px;
    }
    div.tit {
      font-size: 0.8em;
    }
    small.copyright {
      color: white;
      font-size: 0.8em;
      display: block;
      font-weight: 400;
      line-height: 1.8em;
      a {
        color: white;
      }
    }
  }
</style>