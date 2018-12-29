<template lang="pug">
  header#header(role="header")
    div
      a#logo(href="/")
      Desktop
      Mobile
</template>

<script>
  import $ from 'jquery';

  import Desktop from './Header/Desktop.vue'
  import Mobile from './Header/Mobile.vue'

  export default {
    beforeMount() {
      let lastScrollTop = 0,
          $header = $('#header')
      ;
      $(window).scroll(function() {
        let $scrollTop = $(window).scrollTop();
        if($scrollTop > lastScrollTop) {
          if($scrollTop > $header.height()) {
            $header.addClass('fixed');
          }
        }
        else {
          $scrollTop < $header.height()
            ? $header.removeClass('fixed')
            : $header.addClass('fixed')
          ;
        }
        lastScrollTop = $scrollTop;
      })
    },
    components: {
      Desktop,
      Mobile
    }
  }
</script>

<style lang="less">
  #header.fixed {
    position: fixed;
    top: 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    width: 100%;
    > div {
      overflow: hidden;
    }
  }
  #header { 
    z-index: 9997;
    background-color: white;
    position: relative;
    > div {
      overflow: hidden;
      box-sizing: border-box;
      #logo {
        margin-right: 15px;
        float: left;
        position: relative;
        text-align: center;
        background: url('/images/logo.png');
        width: 24px;
        height: 24px;
        display: block;
      }
    }
  }
  @media screen and (max-width: 1170px) {
    #header {
      width: 100%;
      top: 10px;
      > div {
        padding: 0 15px;
        #logo {
          top: 14px;
        }
      }
    }
  }
  @media screen and (min-width: 1170px) {
    #header {
      position: relative;
      top: 30px;
      > div {
        width: 1170px;
        margin: 0 auto;
        padding: 5px 0;
        #logo {
          top: 17px;
        }
      }
    }
  }
</style>