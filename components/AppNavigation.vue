<template lang="pug">
nav#nav(role="navigation")
  div.shadow
    nuxt-link.logo(to="/"): img(src="~assets/images/logo.png")
    ul.menu
      li(v-for="(item, index) in menu" :class="{ active: index == $store.state.active }")
        div.index {{ "0" + parseInt(index+1) }}
        div.label 
          nuxt-link(:to="item.href") {{ item.label }}
    div.social
      a(href="https://github.com/pronist/tidory-starter-template")
        i.fab.fa-github(style="font-size: 1.3em")
      a(href="https://www.npmjs.com/package/tidory")
        i.fab.fa-npm(style="font-size: 1.6em;position:relative;top:2px")
</template>

<script>
export default {
  data() {
		return {
      menu: [
        { label: '티도리 프레임워크', href: '/'},
        { label: '시작하기', href: '/docs/get-started'},
        { label: '디렉토리', href: '/docs/directory'},
        { label: '템플릿', href: '/docs/template'},
        { label: '티스토리 예제', href: '/docs/example'},
        { label: '프레임워크', href: '/docs/framework'},
        { label: '빌드 및 배포', href: '/docs/distribute'},
      ],
		}
	}
}
</script>

<style lang="stylus">
@media all and (min-width: 1170px)
  #nav
    position fixed
    width 250px
    height 100%
    border-right 1px solid rgba(0, 0, 0, .06)
    box-sizing border-box
    z-index: 9999;
    overflow hidden
    padding-bottom 25px
    > .shadow
      overflow-x: hidden;
      overflow-y: scroll;
      height: 100%;
      width: 280px;
      position: absolute;
      z-index: 9998;
      .logo
        position absolute
        left 50px
        top 35px
      .menu
        position absolute
        top 125px
        left 50px
        box-sizing border-box
        list-style none
        li
          padding 20px 0
          font-weight 400
          &:first-child
            padding-top 0
          &:last-child
            padding-bottom 0
          .index
            margin-bottom 10px
            color rgba(0, 0, 0, .3)
          .label > a
            color rgba(0, 0, 0, .3)
            transition-duration .5s
          &.active
            font-weight 500
            .index
              color #ed5207
            .label > a
              color rgba(0, 0, 0, .85)
      .social
        position absolute
        top 850px
        left 50px
        padding-bottom 25px
        a
          transition-duration .8s
          margin-right 12px
          color rgba(0, 0, 0, .3)
          &:hover
            color rgba(0, 0, 0, .85)
@media all and (max-width: 1170px)
  #nav
    display none
</style>
