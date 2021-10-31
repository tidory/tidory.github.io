<template lang="pug">
#spy
  ul
    li(
      v-for="link of toc"
      :key="link.id"
      :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
    )
      a(:href="`#${(link.id)}`") {{ link.text }}
</template>

<script>
export default {
  props: {
    toc: {
      type: Array, required: true
    }
  }
}
</script>

<style lang="stylus">
$WIDTH = 180px

#spy
  position sticky
  top 35px
  ul
    border-left 1px dashed rgba(0, 0, 0, .2)
    box-sizing border-box
    width $WIDTH
    li
      padding-left 20px
      margin 8px 0
      box-sizing border-box
      max-width $WIDTH
      a
        font-size .82rem
      &.toc3
        padding-left 35px
@media screen and (max-width: 1200px)
  #spy
    display none !important
</style>

<style lang="stylus">
#container[data-theme="1"]
  #spy
    ul
      border-color rgba(255, 255, 255, .5)
      li
        a
          color rgba(255, 255, 255, .8)
</style>
