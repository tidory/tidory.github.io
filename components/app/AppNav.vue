<template lang="pug">
  #nav(:class="[show ? 'block' : 'hidden']" class="fixed box-border z-30 overflow-hidden bg-gray-300 w-full h-[90%] bottom-0 rounded-t-3xl xl:rounded-none xl:top-0 xl:w-64 xl:h-full xl:block")
    div(class="overflow-hidden overflow-y-auto w-full h-[90%] xl:overflow-y-scroll xl:h-full xl:w-80 xl:absolute")
      nuxt-link.logo(to="/" class="text-[0] hidden xl:block xl:pl-8 xl:pt-10 xl:pb-16")
        | 홈
        img(src="~/assets/images/logo.png" alt="티스토리 로고" width="24" height="24")
      nav(class="list-none box-border w-full xl:w-56 xl:pl-8 xl:pb-8")
        ul(v-for="menuItem in menu" class="py-3 px-10 first:pt-8 last:pb-0 xl:px-0 xl:py-4 xl:first:pt-0")
          li.category(class="font-semibold text-gray-50")
            | {{ menuItem.category }}
            ul(class="grid grid-cols-2 py-4 xl:block xl:py-0")
              li.item(v-for="item in menuItem.items" class="xl:first:pt-5")
                nuxt-link(:to="item.path" v-if="item.path.startsWith('/')")
                  | {{ item.title }}
                a(:href="item.path" target='_blank' rel='noreferrer' v-else)
                  | {{ item.title }}
</template>

<script>
export default {
  props: {
    show: { type: Boolean, required: true }
  },
  data () {
    return {
      docs: [],
      docsCategories: ['튜토리얼', '스케일링 업'],
      links: [
        {
          category: '티스토리 API',
          items: [
            { title: 'Open API', path: 'https://github.com/search?q=user%3Atistory-projects+tistory-api&type=public' },
            { title: 'Tistory Skin API', path: 'https://github.com/tidory/tistory-skin' }
          ]
        },
        {
          category: '메타',
          items: [
            { title: '패치노트', path: 'https://github.com/tidory/cli/blob/master/CHANGELOG.md' },
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
    /**
     * @returns {array<{category: string, items: object[]}>}
     */
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
#nav {
  .item > a {
    @apply font-normal py-2.5 inline-block xl:py-3;

    &.nuxt-link-active {
      @apply text-gray-50 font-medium
    }
  }
}
</style>
