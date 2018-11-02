<template lang="pug">
  footer#tidory-footer-wrapper
    div.logo
    small.copyright
      | Copyright (C) 2017 - 2018 <br /> 
      | Mansu Jeong &lt;pronist@naver.com&gt;. <br /> 
      | All rights reserved.
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
    box-sizing: border-box;
    div.logo {
      display: inline-block;
      text-align: center;
      background: url('~assets/images/logo.png');
      width: 29px;
      height: 29px;
      background-size: 29px 60px;
      background-position: 0 -29px;
    }
    small.copyright {
      color: white;
      font-size: 0.8em;
      display: block;
      font-weight: 300;
      margin-top: 8px;
      line-height: 1.8em;
    }
  }
</style>