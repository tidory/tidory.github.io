<template lang="pug">Document(:document="page")</template>

<script>
import Document from '~/components/document'

export default {
  components: {
    Document
  },
  async asyncData ({ $content }) {
    const page = await $content('docs/get-started').fetch()

    return {
      page
    }
  }
}
</script>
