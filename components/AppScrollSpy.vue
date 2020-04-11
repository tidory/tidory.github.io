<template lang="pug">
  aside#spy
    ul(class="uk-nav uk-nav-default")
      li(v-for="spy in spies" :class="spy.cls"): a(:href="spy.href") {{ spy.label }}
</template>

<script>
export default {
  props: ['context'],
  data () {
    return {
      spies: []
    }
  },
  beforeMount () {
    $(this.context).find('h2').get().forEach(h2 => {
      this.set(h2, 'h2')
      $(h2).nextUntil('h2', 'h3').get().forEach(h3 => this.set(h3, 'h3'))
    })
  },
  mounted () {
    UIkit.scrollspyNav('#spy', { closest: 'li', offset: 0 })
  },
  methods: {
    set (h, cls) {
      const $h = $(h)
      const anchor = encodeURIComponent($h.text())
      $h.attr('id', anchor)
      this.spies.push({ href: '#' + anchor, label: $h.text(), cls })
    }
  }
}
</script>

<style lang="stylus">
  #spy
    position relative
    right -720px
    @media screen and (max-width: 1200px)
      display none
    ul
      list-style none
      text-align left
      position fixed
      width 200px
      font-weight 500
      .uk-active
        a
          transition-duration .5s
          color black
      .h3
        padding-left 15px
</style>
