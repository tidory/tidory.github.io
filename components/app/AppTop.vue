<template lang="pug">
  #top
    .notice
      i(class="fas fa-volume-up")
      a.text(
        href="https://www.inflearn.com/course/%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/#"
        target='_blank'
        rel='noreferrer'
      )
        | 티도리 프레임워크 강좌가 제작되었습니다.
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
    color var(--top-icon-color)
    &:hover
      color var(--top-icon-hover-color)
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

@media (prefers-color-scheme: light)
  :root
    --top-icon-color rgba(0, 0, 0, .5)
    --top-icon-hover-color rgba(0, 0, 0, .9)
@media (prefers-color-scheme: dark)
  :root
    --top-icon-color rgba(255, 255, 255, .85)
    --top-icon-hover-color white
</style>
