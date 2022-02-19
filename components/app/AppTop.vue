<template lang="pug">
  #top
    .notice
      i(class="fas fa-volume-up")
      a.text(
        href="https://pronist.tistory.com/5"
        target='_blank'
        rel='noreferrer'
      )
        | hELLO 티스토리 스킨을 소개합니다.
    ul.menu
      li(v-for="icon in icons")
        a(:href="icon.href" target='_blank' rel='noreferrer')
          | {{ icon.title }}
          i(:class="icon.class")
</template>

<script>
export default {
  data () {
    return {
      icons: [
        { class: 'fas fa-book-open', href: 'https://tistory.github.io/document-tistory-skin/', title: '티스토리 스킨 가이드' }
      ]
    }
  }
}
</script>

<style lang="stylus">
#top
  i, a
    color var(--color-blur)
    &:hover
      color var(--color)
  .notice
    position absolute
    top 35px
    left 285px
    font-size .85rem
    font-weight 500
    i
      margin-right 10px
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
      &:last-child
        margin-right 0
@media all and (max-width: 1200px)
  #top
    display none
</style>
