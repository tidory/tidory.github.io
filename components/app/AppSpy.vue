<template lang="pug">
  #spy
    button(class="fixed right-0 top-28 bg-black/30 backdrop-blur-sm w-8 h-8 flex justify-center items-center rounded xl:hidden" @click="show=!show" v-if="!show")
      i(class="fas fa-tasks text-gray-50")
    div(:class="[show ? 'block' : 'hidden']" class="fixed p-4 right-4 top-24 bg-black/50 backdrop-blur-sm rounded list-none text-left z-0 xl:w-44 xl:bg-transparent xl:backdrop-blur-0 xl:p-0 xl:absolute xl:top-0 xl:right-auto xl:ml-[calc(620px+110px)] xl:h-full xl:block")
      ul(class="xl:sticky xl:top-9 xl:box-border")
        li(v-for="link of toc" :key="link.id" :class="{ 'pl-0': link.depth === 2, 'pl-4': link.depth === 3 }" class="my-2 box-border")
          a(:href="`#${(link.id)}`" class="text-gray-100 break-all text-sm xl:hover:text-gray-50") {{ link.text }}
</template>

<script>
export default {
  props: {
    toc: { type: Array, required: true }
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    this.$nuxt.$on('toc', () => { this.show = false })
  }
}
</script>
