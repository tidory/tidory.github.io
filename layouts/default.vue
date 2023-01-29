<template lang="pug">
  #container
    app-top
    app-sidebar
    main(class="w-full box-border py-12 px-4 xl:w-[620px] xl:mx-auto xl:px-0 xl:pt-32 xl:pb-20")
      nuxt
    app-bottom
</template>

<style>
.text-hidden {
  @apply absolute w-px h-px -m-px overflow-hidden;
}
</style>
