<template lang="pug">
#top
  .notice
    i(class="fas fa-volume-up")
    a.text(href="https://www.inflearn.com/course/%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/#" target='_blank' rel='noreferrer') 티도리 프레임워크 강좌가 제작되었습니다.
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
@media all and (min-width: 1200px)
  #top
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
  #top
    display none
</style>

<style lang="stylus">
#container[data-theme="1"]
  #top
    i, a
      color rgba(255, 255, 255, .85)
      &:hover
        color white
</style>
