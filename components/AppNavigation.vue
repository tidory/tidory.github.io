<template lang="pug">
nav#nav(role="navigation")
  div.shadow
    a.logo(href="/"): img(src="~assets/images/logo.png")
    ul.menu
      li.item(v-for="item in $store.state.menu" :class="{ active: item.page == $store.state.active }")
        div.index {{ item.page }}
        div.label 
          a(:href="item.href") {{ item.label }}
</template>

<script>
export default {
  /** emtpy */
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
        padding-bottom 25px
        .item
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
            transition-duration unset
          &.active
            font-weight 500
            .index
              color #ed5207
            .label > a
              color rgba(0, 0, 0, .85)
@media all and (max-width: 1170px)
  #nav
    display none
</style>
