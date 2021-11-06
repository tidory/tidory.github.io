<template lang="pug">
  #pagination
    .prev(v-if="prev")
      nuxt-link(:to="{ params: { slug: prev.slug } }")
        i.fas.fa-angle-left
        | {{ prev.title }}
    .next(v-if="next")
      nuxt-link(:to="{ params: { slug: next.slug } }")
        | {{ next.title }}
        i.fas.fa-angle-right
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="stylus">
#pagination
  margin-top 50px
  overflow hidden
  a
    text-decoration none !important
    color var(--pagination-anchor-color)
  .prev
    float left
    i
      margin-right 8px
  .next
    float right
    i
      margin-left 8px

@media (prefers-color-scheme: light)
  :root
    --pagination-anchor-color rgba(0, 0, 0, .85)
@media (prefers-color-scheme: dark)
  :root
    --pagination-anchor-color white
</style>
