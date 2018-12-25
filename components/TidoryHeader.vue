<template lang="pug">
  header#tidory-header-wrapper
    div.tidory-header-inner
      div.logo: a(href="/")
      TidoryNavDesktop
      TidoryNavMobile
</template>
<script>
  import $ from 'jquery';

  import TidoryNavDesktop from '~/components/TidoryNavDesktop.vue'
  import TidoryNavMobile from '~/components/TidoryNavMobile.vue'
  export default {
    name: 'tidory-header',
    mounted() {
      this.onScroll();
    },
    components: {
      TidoryNavDesktop,
      TidoryNavMobile
    },
    methods: {
      onScroll() {
        let lastScrollTop = 0;
        let
          $header = $('#tidory-header-wrapper')
        ;
        if($header.length) {
          $(window).scroll(function() {
            let 
              $scrollTop = $(window).scrollTop()
            ;
            if($scrollTop > lastScrollTop) {
              if($scrollTop > $header.height()) {
                $header.addClass('fixed');
              }
            }
            else {
              if($scrollTop < $header.height()) {
                $header.removeClass('fixed');
              }
              else {
                $header.addClass('fixed');
              }
            }
            lastScrollTop = $scrollTop;
          })
        }
        else {
          $header.addClass('fixed');
        }
      }
    }
  }
</script>
<style lang="less">
header#tidory-header-wrapper.fixed {
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  width: 100%;
  .tidory-header-inner {
    overflow: hidden;
  }
}
header#tidory-header-wrapper { 
  z-index: 9997;
  background-color: white;
  position: relative;
  .tidory-header-inner {
    overflow: hidden;
    box-sizing: border-box;
    div.logo {
      a {
        margin-right: 15px;
        float: left;
        position: relative;
        text-align: center;
        background: url('/images/logo.png');
        width: 24px;
        height: 24px;
      }
    }
  }
}
@media screen and (max-width: 1170px) {
  header#tidory-header-wrapper {
    width: 100%;
    top: 10px;
    .tidory-header-inner {
      padding: 0 15px;
      div.logo {
        a {
          top: 14px;
        }
      }
    }
  }
}
@media screen and (min-width: 1170px) {
  header#tidory-header-wrapper {
    position: relative;
    top: 30px;
    .tidory-header-inner {
      width: 1170px;
      margin: 0 auto;
      padding: 5px 0;
      div.logo {
        a {
          top: 17px;
        }
      }
    }
  }
}
</style>