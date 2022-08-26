<template lang="pug">
  aside#sidebar(class="fixed w-64 h-full box-border z-10 overflow-hidden bg-gray-300 hidden xl:block")
    div(class="overflow-x-hidden overflow-y-scroll h-full w-80 absolute z-10")
      nuxt-link.logo(to="/" class="absolute left-12 top-9 text-[0]")
        | 홈
        img(src="~/assets/images/logo.png" alt="티스토리 로고" width="24" height="24")
      nav(class="absolute top-28 left-12 list-none box-border pb-12")
        ul(v-for="menuItem in menu")
          li.category(class="font-semibold text-gray-50 py-6")  {{ menuItem.category }}
          li.item(v-for="item in menuItem.items" class="py-3 font-normal text-base")
            .title
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
#sidebar {
  .nuxt-link-active {
    @apply text-gray-50 font-medium
  }
}
</style>
