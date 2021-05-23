<template lang="pug">
#spy
  #spy__shadow(ref="spy")
    ul(class="uk-nav uk-nav-default")
      li(v-for="spy in spies" :class="spy.cls"): a(:href="spy.href") {{ spy.label }}
</template>

<script>
export default {
  data () {
    return {
      spies: []
    }
  },
  mounted () {
    const $context = this.$parent.$refs.document
    const $ul = this.$refs.spy.querySelector('ul')

    this.setAnchorHeadings($context, 'h2, h3')

    this.extractHeadings($context, 'h2, h3').forEach(spy => {
      const $a = document.createElement('a')

      $a.textContent = spy.label
      $a.setAttribute('href', spy.href)
      $a.setAttribute('data-tag', spy.tag)

      const $li = document.createElement('li')
      $li.appendChild($a)

      $ul.appendChild($li)
    })

    UIkit.sticky('#spy > #spy__shadow', { offset: 35 })
    UIkit.scrollspyNav('#spy ul', { closest: 'li', offset: 35 })
  },
  methods: {
    setAnchorHeadings ($context, headings) {
      [...$context.querySelectorAll(headings)].forEach($heading => {
        const idAttr = encodeURIComponent($heading.textContent).replace(/[0-9-_.!~*'()\s]/g, '-')
        const $a = document.createElement('a')

        $a.setAttribute('href', '#' + idAttr)
        $a.textContent = $heading.textContent
        $heading.innerHTML = $a.outerHTML
        $heading.setAttribute('id', idAttr)
      })
    },
    extractHeadings ($context, headings) {
      return [...$context.querySelectorAll(headings)].reduce((spies, $heading) => {
        const $a = $heading.querySelector('a')
        spies.push({ href: $a.getAttribute('href'), label: $heading.textContent, tag: $heading.tagName.toLowerCase() })
        return spies
      }, [])
    }
  }
}
</script>

<style lang="stylus">
$WIDTH = 180px

#spy
  position absolute
  top 0
  width $WIDTH
  list-style none
  text-align left
  font-weight 400
  z-index 0
  margin-left calc(620px + 110px) !important
  ul
    border-left 1px dashed alpha(black, .2)
    box-sizing border-box
    top 50px
    width $WIDTH
    li
      padding-left 20px
      box-sizing border-box
      max-width $WIDTH
      a
        font-size .82rem
      &.uk-active
        a
          transition-duration .5s
          color alpha(black, .9)
          font-weight 500
  a[data-tag=h3]
    padding-left 15px
  @media screen and (max-width: 1200px)
    display none !important
</style>
