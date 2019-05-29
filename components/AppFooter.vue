<template lang="pug">
footer#footer(role="footer")
  div.social
    a(v-for="(item, index) in menu" :href="item.href" target="_blank")
      i(:class="item.class")
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { class: 'fab fa-github', href: this.$store.state.menu.community.github.href },
        { class: 'fab fa-npm', href: this.$store.state.menu.community.npm.href }
      ]
    }
  }
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
        i
          &.fa-github
            font-size 1.25em
          &.fa-npm
            font-size 1.6em
            position relative
            top:2px
@media all and (max-width: 1170px)
  #footer
    display none
</style>
