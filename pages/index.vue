<template lang="pug">
div
  app-content(:article="article")
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
