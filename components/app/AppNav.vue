<template lang="pug">
  #nav(:class="[show ? 'left-0' : '-left-56']" class="fixed box-border z-30 overflow-hidden bg-gray-300 top-0 w-56 h-full transition-all xl:left-0")
    div(class="overflow-hidden overflow-y-auto overflow-y-scroll h-full w-64 absolute")
      nuxt-link.logo(to="/" class="text-[0] block pl-8 pt-10 pb-16")
        | 홈
        img(src="~/assets/images/logo.png" alt="티스토리 로고" width="24" height="24")
      nav(class="list-none box-border w-56 pl-8 pb-8")
        ul(v-for="menuItem in menu" class="py-3 px-10 first:pt-8 last:pb-0 px-0 py-4 first:pt-0")
          li.category(class="font-semibold text-gray-50")
            | {{ menuItem.category }}
            ul(class="block py-0")
              li.item(v-for="item in menuItem.items" class="first:pt-5")
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
    @apply font-normal inline-block py-3;

    &.nuxt-link-active {
      @apply text-gray-50 font-medium
    }
  }
}
</style>
