<template lang="pug">
aside#aside(role="sidebar")
  div.notice
    i(class="fas fa-volume-up")
    a.text(:href="$store.state.patchNote.href") 티도리 7.0 이 업데이트 되었습니다.
  ul.menu
    li(v-for="(item, index) in menu")
      a(:href="item.href"): i(:class="item.class")

</template>

<script>
export default {
  data() {
    return {
      menu: [
        { class: 'fas fa-book-open', href: 'https://tistory.github.io/document-tistory-skin/' }
      ]
    }
  }
}
</script>

<style lang="stylus">
@media all and (min-width: 1170px)
  #aside
    .notice
      position absolute
      top 35px
      left 285px
      font-size .85em
      i
        color rgba(0, 0, 0, .5)
        margin-right 10px
      a
        color rgba(0, 0, 0, .5)
        &:hover
          color rgba(0, 0, 0, .85)
    .menu
      overflow hidden
      list-style none
      position absolute
      top 35px
      right 35px
      li
        margin 0 10px
        float left
        font-size .9em
        i
          transition-duration .8s 
          color rgba(0, 0, 0, .3)
          &:hover
            color rgba(0, 0, 0, .85)
@media all and (max-width: 1170px)
  #aside
    display none
</style>