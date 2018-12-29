<template lang="pug">
  mixin category(nav, label)
    li
      div(v-on:click="sildeDown")
        a(href="#")= label
        div.arrow
      ul.subMenu
        li(v-for=`item in ${nav}`)
          a(v-bind:href="item.path") {{ item.label }}
  nav#mobile(role="navigation")
    h1#title TidoryResponsiveNavigation
    div.mask
    div.open
      i.fas.fa-bars(v-on:click="openMenu")
    div.menu
      div
        div.close(v-on:click="closeMenu")
        ul
          +category("$store.state.docs.prologue", "프롤로그")
          +category("$store.state.docs.architecture", "아키텍쳐")
          +category("$store.state.docs.template", "템플릿")
          +category("$store.state.docs.framework", "프레임워크")
          +category("$store.state.docs.distribution", "빌드 및 배포")
          +category("$store.state.docs.packages", "외부 패키지")
          +category("$store.state.community", "커뮤니티")
</template>

<script>
  import $ from "jquery"
  
  export default {
    methods: {
      openMenu(e) {
        let $open = $(e.target).parent(),
            $mask = $open.prev()
        ;
        $open.next().css('left', '0');
        $mask.css('position', 'fixed');
        $mask.fadeTo(500, 0.8);
      },
      closeMenu(e) {
        let $menu = $('.menu'),
            $mask = $('.mask')
        ;
        $menu.css('left', '-240px');
        $mask.fadeTo(500, 0, function() {
          $mask.css('position', 'relative');
        });
      },
      sildeDown(e) {
        let $target = $(e.target),
            $ul = $target.next('.subMenu'),
            $arrow = $target.find('.arrow')
        ;
        if($ul.is(":visible")) {
          $ul.slideUp(500);
          $arrow.css('transform', 'rotate(0)');
        }
        else {
          $ul.slideDown(500);
          $arrow.css('transform', 'rotate(-180deg)');
        }
      }
    }
  }
</script>

<style lang="less">
  @media all and (min-width: 1170px) {
    .mask, #mobile {
      display: none;
    }
  }
  @media all and (max-width: 1170px) {
    #mobile {
      .mask {
        background-color:black;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 9997;
        top: 0;
      }
      .open {
        float: right;
        line-height: 50px;
        > i {
          display: inline-block;
          cursor: pointer;
          width: 16px;
          height: 16px;
          position: relative;
          top: 2px;
        }
      }
      .menu {
        position: fixed;
        background-color: white;
        left: -240px;
        width: 240px;
        top: 0;
        height: 100%;
        z-index: 9999;
        transition-duration: 0.4s;
        overflow: hidden;
        > div {
          overflow-x: hidden;
          overflow-y: scroll;
          height: 100%;
          width: 300px;
          position: absolute;
          z-index: 9996;
          .close {
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
          > ul {
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
            li > div {
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
              cursor: pointer;
              overflow: hidden;
              background-color: white;
              border-top: 1px solid #ececec;
              line-height: 45px;
              &:last-of-type {
                border-top: 1px solid #ececec;
                border-bottom: 1px solid #ececec;
              }
              .subMenu {
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
  }
</style>