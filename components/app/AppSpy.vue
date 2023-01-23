<template lang="pug">
  #spy
    button(class="fixed right-0 top-28 bg-gray-500 w-8 h-8 flex justify-center items-center rounded xl:hidden" @click="show = ! show" v-if="! show")
      i(class="fas fa-tasks text-gray-50")
    div(:class="[show ? 'right-4' : '-right-52']" class="fixed p-4 right-4 w-48 top-16 bg-gray-500 rounded list-none text-left z-0 transition-all xl:w-40 xl:bg-transparent xl:backdrop-blur-0 xl:p-0 xl:absolute xl:top-0 xl:right-auto xl:ml-[calc(620px+110px)] xl:h-full xl:block xl:transition-none")
      ul(class="xl:sticky xl:top-9 xl:box-border")
        li(v-for="link of toc" :key="link.id" :class="{ 'pl-0': link.depth === 2, 'pl-4': link.depth === 3 }" class="my-2 box-border first:mt-0 last:mb-0")
          a(:href="`#${(link.id)}`" class="text-gray-100 break-all text-sm xl:hover:text-gray-50 [&.active]:text-gray-50") {{ link.text }}
</template>

<script>
export default {
  props: {
    toc: { type: Array, required: true }
  },
  data () {
    return {
      show: false,
      className: 'active',
      on: {
        headings: 'h2, h3',
        nav: '#spy ul',
        content: '#document > article',
        links: 'li > a'
      },
      offset: 128
    }
  },
  computed: {
    links () {
      return this.nav.querySelectorAll(this.on.links)
    },
    headings () {
      return this.content.querySelectorAll(this.on.headings)
    },
    nav () {
      return document.querySelector(this.on.nav)
    },
    content () {
      return document.querySelector(this.on.content)
    }
  },
  created () {
    this.$nuxt.$on('toc', () => { this.show = false })
  },
  mounted () {
    window.addEventListener('scroll', this.spy)
  },
  methods: {
    spy () {
      for (const $heading of this.headings) {
        if (this.in($heading)) {
          this.init()
          this.active($heading)
        }
      }

      const $heading = this.headings.item(0)

      if (this.out($heading)) {
        this.init()
      }
    },
    init () {
      for (const $link of this.links) {
        $link.classList.remove(this.className)
      }
    },
    active ($heading) {
      const $menuItem = this.nav.querySelector(`a[href="#${$heading.id}"]`)

      $menuItem.classList.add(this.className)
    },
    in ($heading) {
      return $heading.getBoundingClientRect().top < 0
    },
    out ($heading) {
      return $heading.getBoundingClientRect().top > 0
    }
  }
}
</script>
