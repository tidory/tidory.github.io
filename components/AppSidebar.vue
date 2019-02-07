<template lang="pug">
aside#aside(role="sidebar")
  ul.menu
    li
      a(href="/patch-note") 패치노트
    li(v-for="(item, index) in menu")
      a(:href="item.href") {{ item.label }}
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { label: '티스토리 스킨 가이드', href: 'https://tistory.github.io/document-tistory-skin/'}
      ]
    }
  }
}
</script>

<style lang="stylus">
@media all and (min-width: 1170px)
  #aside
    position absolute
    right 50px
    top 35px
    .menu
      overflow hidden
      list-style none
      li
        margin 0 10px
        float left
        font-size .9em
@media all and (max-width: 1170px)
  #aside
    display none
</style>