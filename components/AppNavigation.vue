<template lang="pug">
nav#nav
  .shadow
    a.logo(href="/")
      | 홈
      img(src="/images/logo.png" alt="티스토리 로고" width="24" height="24")
    .menu
      ul.box(v-for="menuItem in menu")
        li.classified {{ menuItem.label }}
        li.item(v-for="item in menuItem.items" :class=`{
          active: item.page == $store.state.active,
        }`)
          .index {{ item.page }}
          .label
            a(:href="item.href") {{ item.label }}
      ul.box(v-for="menuItem in metaLink")
        li.classified {{ menuItem.label }}
        li.item.notDocs(v-for="item in menuItem.items")
          .label
            a(:href="item.href" target='_blank' rel='noreferrer') {{ item.label }}
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { label: '프롤로그', items: this.$store.state.menu.prologue },
        { label: '튜토리얼', items: this.$store.state.menu.basic },
        { label: '스케일링 업', items: this.$store.state.menu.advanced }
      ],
      metaLink: [
        { label: '티스토리 API', items: this.$store.state.menu.libraries },
        { label: '메타', items: this.$store.state.menu.meta }
      ]
    }
  }
}
</script>

<style lang="stylus">
@media all and (min-width: 1200px)
  #nav
    position fixed
    width 260px
    height 100%
    border-right 1px solid rgba(0, 0, 0, .1)
    box-sizing border-box
    z-index 9999
    overflow hidden
    > .shadow
      overflow-x hidden
      overflow-y scroll
      height 100%
      width 300px
      position absolute
      z-index 9998
      .logo
        position absolute
        left 50px
        top 35px
        font-size 0 !important
      .menu
        position absolute
        top 110px
        left 50px
        box-sizing border-box
        list-style none
        padding-bottom 45px
        font-size .96em
        .classified
          font-weight 600
          color rgba(0, 0, 0, .9)
          padding 15px 0
        .item
          padding 20px 0
          font-weight 400
          &.notDocs
            padding 10px 0
            font-size .95em
          &:first-child
            padding-top 0
          .index
            margin-bottom 10px
            color rgba(0, 0, 0, .3)
          .label > a
            color rgba(0, 0, 0, .3)
            transition-duration unset
          &.active
            font-weight 500
            .index
              color #f0506e
            .label > a
              color rgba(0, 0, 0, .85)
          a
            text-decoration none
@media all and (max-width: 1200px)
  #nav
    display none
</style>
