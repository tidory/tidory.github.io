<template lang="pug">
  #spy
    button(class="fixed right-0 top-20 bg-gray-500 w-8 h-8 flex justify-center items-center rounded xl:hidden" @click="show = ! show" v-if="! show")
      span(class="text-hidden") 목차
      i(class="fas fa-tasks text-gray-50")
    div(:class="[show ? 'right-4' : '-right-52']" class="fixed p-4 right-4 w-48 top-20 bg-gray-500 rounded list-none text-left z-0 transition-all xl:w-40 xl:bg-transparent xl:backdrop-blur-0 xl:p-0 xl:absolute xl:top-0 xl:right-auto xl:ml-[calc(620px+110px)] xl:h-full xl:block xl:transition-none")
      button(
        @click='show = ! show'
        class='absolute text-base top-2 right-4 text-h-500 dark:text-h-200 2xl:hidden')
        span(class="text-hidden") 목차 닫기
        i(class="fa-solid fa-xmark")
      ul(class="xl:sticky xl:top-9 xl:box-border" ref="nav")
        li(v-for="link of toc" :key="link.id" :class="{ 'pl-0': link.depth === 2, 'pl-4': link.depth === 3 }" class="my-2 box-border first:mt-0 last:mb-0")
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
  }
}
</script>
