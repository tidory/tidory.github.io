<template lang="pug">
  #bottom(class='w-[calc(100%-260px)] px-5 box-border fixed right-0 bottom-5 text-base z-10 justify-between hidden xl:flex')
    div
      a(v-for="community in communities" :href="community.path" target='_blank' rel='noreferrer' class="duration-100 mr-2.5 text-[0] last:mr-0")
        | {{ community.title }}
        i(:class="community.class")
    div
      a(href='#__nuxt' class="bg-gray-300 text-gray-50 rounded-full border-0 cursor-pointer duration-100 w-9 h-9 text-center text-[0] inline-block ml-3 hover:bg-gray-200")
        | 제일 위로
        i(class='fa fa-chevron-up text-sm leading-9')
</template>

<script>
export default {
  data () {
    return {
      communities: [
        { title: 'NPM', path: 'https://www.npmjs.com/package/tidory', class: 'fab fa-npm' },
        { title: 'Github', path: 'https://github.com/tidory', class: 'fab fa-github' }
      ]
    }
  }
}
</script>

<style>
#bottom {
  i {
    &.fa-github {
      @apply text-xl
    }

    &.fa-npm {
      @apply text-2xl relative top-0.5
    }
  }
}
</style>
