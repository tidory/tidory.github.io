<template lang="pug">
  app-document(:document="article")
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const article = await $content('index').fetch()

    return {
      article
    }
  }
}
</script>
