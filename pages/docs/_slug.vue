<template lang="pug">
  document(
    :document="article"
    :next="next"
    :prev="prev"
  )
</template>

<script>
import Document from '~/components/document'

export default {
  components: {
    Document
  },
  async asyncData ({ $content, params }) {
    const article = await $content('docs', params.slug).fetch()

    const [prev, next] = await $content('docs')
      .only(['title', 'slug'])
      .sortBy('index', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  }
}
</script>
