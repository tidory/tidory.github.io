<template lang="pug">
footer#footer(role="footer")
  div.social
    a(href="https://github.com/tidory" target="_blank")
      i.fab.fa-github(style="font-size: 1.25em")
    a(href="https://www.npmjs.com/package/tidory" target="_blank")
      i.fab.fa-npm(style="font-size: 1.6em;position:relative;top:2px")
</template>

<script>
export default {
  /** empty */
}
</script>

<style lang="stylus">
@media all and (min-width: 1170px)
  #footer
    .social
      position fixed
      bottom 25px
      right 35px
      a
        transition-duration .8s
        margin-right 14px
        color rgba(0, 0, 0, .3)
        &:hover
          color rgba(0, 0, 0, .85)
        &:last-child
          margin-right 0
@media all and (max-width: 1170px)
  #footer
    display none
</style>
