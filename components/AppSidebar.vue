<template lang="pug">
aside#aside
  .notice
    i(class="fas fa-volume-up")
    a.text(:href="$store.state.menu.meta.lecture.href" target='_blank' rel='noreferrer') 티도리 프레임워크 강좌가 제작되었습니다.
  ul.menu
    li(v-for="(item, index) in menu")
      a(:href="item.href" target='_blank' rel='noreferrer')
        | {{ item.label }}
        i(:class="item.class")
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { class: 'fas fa-book-open', href: this.$store.state.menu.meta.tistoryGuidebook.href, label: this.$store.state.menu.meta.tistoryGuidebook.label }
      ]
    }
  }
}
</script>

<style lang="stylus">
@media all and (min-width: 1200px)
  #aside
    .notice
      position absolute
      top 35px
      left 285px
      font-size .85rem
      font-weight 500
      i
        color rgba(0, 0, 0, .5)
        margin-right 10px
      a
        color rgba(0, 0, 0, .5)
        &:hover
          color rgba(0, 0, 0, .9)
    .menu
      overflow hidden
      list-style none
      position absolute
      top 35px
      right 35px
      li
        margin 0 10px
        float left
        font-size 0
        i
          font-size .9rem
          color rgba(0, 0, 0, .3)
          &:hover
            color rgba(0, 0, 0, .85)
        &:last-child
          margin-right 0
@media all and (max-width: 1200px)
  #aside
    display none
</style>
