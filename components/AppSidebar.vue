<template lang="pug">
aside#aside(role="sidebar")
  div.notice
    i(class="fas fa-volume-up")
    a.text(href="https://www.inflearn.com/course/%ed%94%84%eb%a0%88%ec%9e%84%ec%9b%8c%ed%81%ac/" target="_blank") 초심자를 위한 강의가 제작되었습니다!
  ul.menu
    li(v-for="(item, index) in menu")
      a(:href="item.href" target="_blank"): i(:class="item.class")
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { class: 'fas fa-bell', href: this.$store.state.patchNote.href },
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
        &:last-child
          margin-right 0
@media all and (max-width: 1170px)
  #aside
    display none
</style>