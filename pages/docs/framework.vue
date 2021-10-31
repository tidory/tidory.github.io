<template lang="pug">Document(:document="page")</template>

<script>
import Document from '~/components/document'

export default {
  components: {
    Document
  },
  async asyncData ({ $content }) {
    const page = await $content('docs/framework').fetch()

    return {
      page
    }
  }
}
</script>
