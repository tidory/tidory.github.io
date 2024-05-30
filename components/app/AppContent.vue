<template lang="pug">
section(class='text-gray-50')
  h1(class='text-center font-medium text-3xl mb-8 xl:mb-14 xl:text-4xl') {{ article.title }}
  article
    nuxt-content(:document="article")
</template>

<script>
export default {
  props: {
    article: { type: Object, required: true }
  },
  head () {
    return {
      title: this.article.title
    }
  },
  created () {
    this.$store.commit('setArticle', this.article)
  }
}
</script>

<style>
article {
  h2,
  h3,
  h4 {
    @apply font-normal my-6 scroll-mt-16;
  }

  h2 {
    @apply text-xl;
  }

  h3 {
    @apply text-lg;
  }

  h4 {
    @apply text-base font-semibold;
  }

  p {
    @apply my-6 leading-loose;
  }

  ol,
  ul {
    @apply list-[initial] pl-5;

    li {
      @apply leading-7 py-2.5;

      p {
        @apply my-2;
      }
    }
  }

  b,
  strong {
    @apply text-blue font-medium;
  }

  a {
    @apply underline text-blue;
  }

  pre[class*="language-"] {
    @apply rounded-md border-0 bg-gray-300;
  }

  b,
  strong,
  p,
  blockquote {
    code {
      @apply rounded-md text-blue bg-gray-300 py-0.5 px-1.5 text-sm;
    }
  }

  blockquote {
    @apply border-l-2 border-solid leading-7 text-gray-100 text-left text-sm mt-6 pl-3;
  }
}
</style>
