<template lang="pug">
div(:class="[$store.getters.getShow ? 'left-0' : '-left-s']" class="fixed box-border z-30 overflow-hidden bg-gray-300 top-0 w-s h-full transition-all xl:left-0")
  div(class="overflow-hidden overflow-y-scroll h-full w-[calc(theme(spacing.s)+theme(spacing.8))] absolute")
    nuxt-link(to="/" class="block pl-8 mt-10 mb-16")
      span(class='text-hidden') 홈
      img(src="~/assets/images/logo.png" alt="티스토리 로고" width="24" height="24")
    nav(class="flex flex-col gap-y-8 list-none box-border w-s pl-8 pb-8")
      ul(v-for="menuItem in menu" class="flex flex-col gap-y-4 px-0")
        li(class="flex flex-col gap-y-8 text-gray-50")
          div(class='font-semibold') {{ menuItem.category }}
          ul(class="flex flex-col gap-y-6")
            li(v-for="item in menuItem.items")
              nuxt-link(:to="item.path" v-if="item.path.startsWith('/')")
                | {{ item.title }}
              a(:href="item.path" target='_blank' rel='noreferrer' v-else)
                | {{ item.title }}
</template>

<script>
export default {
  data () {
    return {
      docs: [],
      docsCategories: ['튜토리얼', '스케일링 업'],
      links: [
        {
          category: '티스토리 API',
          items: [
            { title: 'Tistory Skin API', path: 'https://github.com/tidory/skin' }
          ]
        },
        {
          category: '메타',
          items: [
            { title: '티스토리 스킨 가이드', path: 'https://tistory.github.io/document-tistory-skin' }
          ]
        }
      ]
    }
  },
  async fetch () {
    this.docs = await this.$content('docs')
      .only(['category', 'title', 'path'])
      .sortBy('index', 'asc')
      .fetch()
  },
  computed: {
    menu () {
      return [
        ...this.makeDocsMenu(),
        ...this.links
      ]
    }
  },
  methods: {
    makeDocsMenu () {
      return this.docsCategories.reduce((docs, category) => {
        const items = this.docs.filter(doc => doc.category === category)
        docs.push({ category, items })

        return docs
      }, [])
    }
  }
}
</script>

<style>
nav {
  a {
    @apply text-gray-100 hover:text-gray-50;

    &.nuxt-link-active {
      @apply text-gray-50;
    }
  }
}
</style>
