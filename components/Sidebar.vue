<template lang="pug">
  mixin category(label, nav)
    div.item
      h2(v-on:click="sildeDown")= label
        img.rotate(src="~assets/images/na-arrow-down.png" class="arrow")
      ul
        li(v-for=`item in ${nav}`)
          a(v-bind:href="item.path") {{ item.label }}
  aside#sidebar(role="sidebar")
    h1#title DocumentsNavigation
    nav.menu(role="navigation")
      +category('프롤로그', '$store.state.docs.prologue')
      +category('아키텍쳐', '$store.state.docs.architecture')
      +category('템플릿', '$store.state.docs.template')
      +category('프레임워크', '$store.state.docs.framework')
      +category('빌드 및 배포', '$store.state.docs.distribution')
      +category('외부 패키지', '$store.state.docs.packages')
</template>

<script>
  import $ from "jquery"
  
  export default {
    methods: {
      sildeDown(e) {
        let $target = $(e.target),
            $ul = $target.next('ul'),
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
    #sidebar {
      float: left;
      width: 250px;
      border-right: 1px solid #f0f2f1;
      margin-bottom: 15px;
      box-sizing: border-box;
      h2 {
        padding: 15px 0;
        font-size: 1.0em;
        font-weight: 400;
        width: 190px;
        color: rgba(0,0,0,.7);
        border-bottom: 1px dashed rgba(0,0,0,.1);
        cursor: pointer;
      }
      .arrow {
        width: 10px;
        float: right;
        position: relative;
        top: 10px;
        transition-duration: 0.3s;
        transform: rotate(-180deg);
      }
      ul {
        padding-top: 5px;
        &.hidden {
          display: none;
        }
        > li {
          padding: 8px 0;
          padding-left: 20px;
          a {
            font-size: 0.95em;
            text-decoration: none;
            font-weight: 300;
            transition-duration: 0.3s;
            color: #ed5207;
            &:hover {
              color: #ed5207 !important;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 1170px) {
    #sidebar {
      display: none;
    }
  }
</style>