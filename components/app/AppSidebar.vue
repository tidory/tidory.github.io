<template lang="pug">
  aside(class="sticky top-0 z-10")
    div(class="box-border w-full h-12 bg-gray-500 flex justify-between items-center text-gray-50 px-4 xl:hidden")
      div(class="cursor-pointer" v-on:click="show = ! show")
        i(class="fas fa-bars")
      div
        | {{ title }}
      nuxt-link.logo(to="/" class="text-[0]")
        | 홈
        img(src="~/assets/images/logo.png" alt="티스토리 로고" width="16" height="16")
    app-overlay(key="overlay" v-if="show")
    app-nav(key="nav" :show="show")
</template>

<script>
export default {
  data () {
    return {
      show: false,
      title: ''
    }
  },
  created () {
    this.$nuxt.$on('exit', () => { this.show = false })
    this.$nuxt.$on('load', (doc) => { this.title = doc.category + ' ― ' + doc.title })
  }
}
</script>
