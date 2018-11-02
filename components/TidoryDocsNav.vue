<template lang="pug">
  mixin _nav(label, nav, isSlide, isHidden)
    div.box(v-if=`${nav}`)
      h2(v-bind:class=`{ slide: ${isSlide}}` data-toggle=`${!isHidden}` v-on:click="sildeDown") #{ label }
        img(v-if=`${isSlide}` v-bind:class=`{ rotate: ${!isHidden} }` src="~assets/images/na-arrow-down.png" class="arrow")
      ul(v-bind:class=`{ slideMenu: ${isSlide}, hidden: ${isHidden} }`)
        li(v-for=`item in ${nav}`)
          a(v-bind:href="item.path") {{ item.label }}
  aside#tidory-docsNav-wrapper
    h1.section-title DocumentsNavigation
    nav.tidory-docNav-inner
      +_nav('프롤로그', '$store.state.docs.prologue', true, false)
      +_nav('아키텍쳐', '$store.state.docs.architecture', true, false)
      +_nav('템플릿', '$store.state.docs.template', true, false)
      +_nav('프레임워크', '$store.state.docs.framework', true, false)
      +_nav('빌드 및 배포', '$store.state.docs.distribution', true, false)
      +_nav('외부 패키지', '$store.state.docs.packages', true, false)
</template>
<script>
  import $ from "jquery"
  export default {
    name: 'tidory-docs-nav',
    data() {
      return {
        projectTemplate: []
      }
    },
    methods: {
      sildeDown(event) {
        let _self = $(event.target);
        let _toggle = _self.attr('data-toggle');
        if(_toggle == 'false') {
          _self.next('ul').slideDown(500);
          _self.attr('data-toggle','true');
          _self.find('img.arrow').css('transform', 'rotate(-180deg)')
        }
        else {
          _self.next('ul').slideUp(500);
          _self.attr('data-toggle','false');
          _self.find('img.arrow').css('transform', 'rotate(0)')
        }
      }
    }
  }
</script>
<style lang="less">
  @media all and (min-width: 1170px) {
    aside#tidory-docsNav-wrapper {
      float: left;
      width: 250px;
      border-right: 1px solid #f0f2f1;
      margin-bottom: 15px;
      h2 {
        padding: 15px 0;
        font-size: 1.0em;
        font-weight: 400;
        width: 190px;
        color: rgba(0,0,0,.7);
        border-bottom: 1px dashed rgba(0,0,0,.1);
        &.slide {
          cursor: pointer;
        }
      }
      img.arrow {
        width: 10px;
        float: right;
        position: relative;
        top: 10px;
        transition-duration: 0.3s;
        &.rotate {
          transform: rotate(-180deg);
        }
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
    aside#tidory-docsNav-wrapper {
      display: none;
    }
  }
</style>