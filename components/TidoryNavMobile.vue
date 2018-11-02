<template lang="pug">
  mixin _nav(nav, label, path)
    li.has-sub-nav
      div.li-info(data-toggle="false" v-on:click="sildeDown")
        a(href="#")= label
        div.arrow
      ul.sub-nav
        li(v-for=`item in ${nav}`)
          a(v-bind:href="item.path") {{ item.label }}
  nav#tidory-nav-wrapper
    h1.section-title TidoryResponsiveNavigation
    div.mask
    div.nav-open-btn
      div(v-on:click.self="openMenu")
        div.line(v-for="line in [1, 2, 3]")
    div.nav
      div.nav-inner
        div.nav-close-btn(v-on:click="closeMenu")
        ul.nav2
          +_nav("$store.state.docs.prologue", "프롤로그")
          +_nav("$store.state.docs.architecture", "아키텍쳐")
          +_nav("$store.state.docs.template", "템플릿")
          +_nav("$store.state.docs.framework", "프레임워크")
          +_nav("$store.state.docs.distribution", "빌드 및 배포")
          +_nav("$store.state.docs.packages", "외부 패키지")
          +_nav("$store.state.community", "커뮤니티")
</template>
<script>
  import $ from "jquery"
  export default {
    name: 'tidory-res-header',
    methods: {
      openMenu(event) {
        let _self = $(event.target).parent();
        _self.next().css('left', '0')
        _self.prev().css('position', 'fixed')
        _self.prev().fadeTo(500, 0.8);
      },
      closeMenu(event) {
        $('div.nav').css('left', '-240px')
        $('div.mask').fadeTo(500, 0, function() {
          $('div.mask').css('position', 'relative')
        });
      },
      sildeDown(event) {
        let _self = $(event.target);
        let _toggle = _self.attr('data-toggle');
        if(_toggle == 'false') {
          _self.next('ul').slideDown(500);
          _self.attr('data-toggle','true');
          _self.find('.arrow').css('transform', 'rotate(-180deg)')
        }
        else {
          _self.next('ul').slideUp(500);
          _self.attr('data-toggle','false');
          _self.find('.arrow').css('transform', 'rotate(0)')
        }
      }
    }
  }
</script>
<style lang="less">
@media all and (min-width: 1170px) {
  div.mask,
  nav#tidory-nav-wrapper {
    display: none;
  }
}
@media all and (max-width: 1170px) {
  nav#tidory-nav-wrapper {
    div.mask {
      background-color:black;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 9997;
      top: 0;
    }
    div.nav-open-btn {
      float: right;
      line-height: 50px;
      > div {
        display: inline-block;
        cursor: pointer;
        width: 16px;
        height: 16px;
        position: relative;
        top: 2px;
        div.line {
          &:nth-child(odd) {
            margin: 0;
          }
          background-color: black;
          height: 2px;
          width: 16px;
          margin: 4px 0;
        }
      }
    }
    div.nav {
      position: fixed;
      background-color: white;
      left: -240px;
      width: 240px;
      top: 0;
      height: 100%;
      z-index: 9999;
      transition-duration: 0.4s;
      overflow: hidden;
      div.nav-close-btn {
        position: absolute;
        top: 20px;
        left: 25px;
        z-index: 9997;
        width: 9px;
        height: 15px;

        background: url('~assets/images/arrows.png');
              
        background-position: 0px 0px;
        background-size: 25px 15px;
        background-repeat: no-repeat;
        cursor: pointer;
      }
      div.nav-inner {
        overflow-x: hidden;
        overflow-y: scroll;
        height: 100%;
        width: 300px;
        position: absolute;
        z-index: 9996
      }
      ul.nav2 {
        width: 240px;
        margin-top: 85px;
        z-index: 9999;
        a {
          padding-left: 25px;
          font-size: 0.9em;
          font-weight: 300 !important;
          color: rgba(0,0,0, 0.8);
          &:hover {
            color: #ed5207 !important;
          }
        }
        div.li-info {
          overflow: hidden;
          a {
            float: left;
            & + .arrow {
              position: relative;
              width: 14px;
              height: 9px;
              
              float: right;
              top: 19px;
              right: 25px;
              transition-duration: 0.3s;

              background: url('~assets/images/arrows.png');
              
              background-position: -8px 0px;
              background-size: 20px 12px;
              background-repeat: no-repeat;
              cursor: pointer;
            } 
          }
        }
        > li {
          overflow: hidden;
          background-color: white;
          border-top: 1px solid #ececec;
          line-height: 45px;
          &:last-of-type {
            border-top: 1px solid #ececec;
            border-bottom: 1px solid #ececec;
          }
          ul.sub-nav {
            border-top: 1px solid #ececec;
            display: none;
            > li { 
              background-color: #fdfdfd;
              a {
                padding-left: 45px;
                width: 240px;
                height: 100%;
                display: inline-block;
                box-sizing: border-box;
              }
            }
          }
        }
      }
    }
  }
}
</style>