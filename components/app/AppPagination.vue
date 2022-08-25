<template lang="pug">
  #pagination(class='mt-12 overflow-hidden text-base')
    div(v-if="prev" class="float-left")
      nuxt-link(:to="{ params: { slug: prev.slug } }")
        i.fas.fa-angle-left(class='mr-2')
        | {{ prev.title }}
    div(v-if="next" class="float-right")
      nuxt-link(:to="{ params: { slug: next.slug } }")
        | {{ next.title }}
        i.fas.fa-angle-right(class='ml-2')
</template>

<script>
export default {
  props: {
    prev: { type: Object, default: () => null },
    next: { type: Object, default: () => null }
  }
}
</script>
