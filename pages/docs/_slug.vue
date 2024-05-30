<template lang="pug">
div
  app-content(:article="article")
  app-pagination(:prev="prev" :next="next")
</template>

<script>
export default {
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
