<template lang="pug">
  aside#spy(class="absolute top-0 list-none text-left z-0 ml-[calc(620px+110px)] h-full hidden xl:block")
    ul(class="sticky top-9 box-border w-44")
      li(v-for="link of toc" :key="link.id" :class="{ 'pl-5': link.depth === 2, 'pl-9': link.depth === 3 }" class="pl-5 my-2 box-border max-w-44")
        a(:href="`#${(link.id)}`" class="text-sm") {{ link.text }}
</template>

<script>
export default {
  props: {
    toc: { type: Array, required: true }
  }
}
</script>
