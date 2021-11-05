<template lang="pug">
  document(
    :document="article"
  )
</template>

<script>
import Document from '~/components/document'

export default {
  components: {
    Document
  },
  async asyncData ({ $content }) {
    const article = await $content('index').fetch()

    return {
      article
    }
  }
}
</script>
