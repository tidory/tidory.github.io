<template lang="pug">
div(class='flex justify-end mt-12')
  nuxt-link(v-if="prev" :to="{ params: { slug: prev.slug } }" class="grow text-gray-100")
    i(class='mr-2 fas fa-angle-left')
    | {{ prev.title }}
  nuxt-link(v-if="next" :to="{ params: { slug: next.slug } }" class="text-gray-100")
    | {{ next.title }}
    i(class='ml-2 fas fa-angle-right')
</template>

<script>
export default {
  props: {
    prev: { type: Object, default: () => null },
    next: { type: Object, default: () => null }
  }
}
</script>
