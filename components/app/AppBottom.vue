<template lang="pug">
  #bottom(class='w-[calc(100%-230px)] px-5 box-border fixed right-0 bottom-5 text-base z-10 justify-between hidden xl:flex')
    div(class='flex items-center gap-x-2.5')
      a(v-for="community in communities" :href="community.path" target='_blank' rel='noreferrer' class="duration-100 last:mr-0")
        span(class='text-hidden') {{ community.title }}
        i(:class="community.class")
    div
      nuxt-link(to='#__tidory' class="bg-gray-300 text-gray-50 rounded-full border-0 cursor-pointer duration-100 w-9 h-9 text-center inline-block ml-3 hover:bg-gray-200")
        span(class='text-hidden') 제일 위로
        i(class='fa fa-chevron-up text-sm leading-9')
</template>

<script>
export default {
  data () {
    return {
      communities: [
        { title: 'NPM', path: 'https://www.npmjs.com/package/tidory', class: 'fab fa-npm text-2xl' },
        { title: 'Github', path: 'https://github.com/tidory', class: 'fab fa-github text-xl' }
      ]
    }
  }
}
</script>
