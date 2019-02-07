<template lang="pug">
aside#aside(role="sidebar")
  ul.menu
    li(v-for="item in $store.state.sidebar")
      a(:href="item.href"): i(:class="item.class")
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
        i
          transition-duration .8s 
          color rgba(0, 0, 0, .3)
          &:hover
            color rgba(0, 0, 0, .85)
@media all and (max-width: 1170px)
  #aside
    display none
</style>