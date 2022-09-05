<template lang="pug">
  #document(class='relative')
    app-spy(:toc="document.toc")
    article(class='text-gray-50' @click="$nuxt.$emit('toc')")
      h1(class='text-center mb-12 font-medium text-4xl')
        | {{ document.title }}
      nuxt-content(:document="document")
    app-pagination(:prev="prev" :next="next")
</template>

<script>
export default {
  props: {
    document: { type: Object, required: true },
    prev: { type: Object, default: () => null },
    next: { type: Object, default: () => null }
  },
  head () {
    return {
      title: this.document.title
    }
  },
  computed: {
    title () {
      return this.document.category + ' ― ' + this.document.title
    }
  },
  created () {
    this.$nuxt.$emit('load', this.title)
  }
}
</script>

<style>
#document {
  article {
    h2,
    h3,
    h4 {
      @apply font-normal my-6
    }

    h2 {
      @apply text-xl;
      .icon.icon-link {
        @apply bg-[url('~/assets/images/icon-hashtag.png')] bg-[length:20px_20px] inline-block w-5 h-5 mr-1.5 relative top-0.5
      }
    }

    h3 {
      @apply text-lg
    }

    h4 {
      @apply text-base font-semibold
    }

    p {
      @apply my-6 leading-7;
      a {
        @apply underline
      }
    }

    ol,
    ul {
      @apply list-[initial] pl-5;
      li {
        @apply leading-7 py-2.5;
        p {
          @apply my-2
        }
      }
    }

    strong,
    b {
      @apply text-blue font-medium
    }

    a {
      @apply decoration-0 text-blue
    }

    pre[class*="language-"] {
      @apply rounded-sm border-0 bg-gray-300
    }

    b,
    strong,
    p,
    blockquote {
      code {
        @apply rounded-sm text-gray-50 bg-gray-300 py-0.5 px-2 text-sm
      }
    }

    blockquote {
      @apply border-l-2 border-solid leading-7 text-gray-100 text-left text-sm mt-6 pl-3
    }
  }
}
</style>
