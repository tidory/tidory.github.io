<template lang="pug">
aside(class="w-full fixed top-0 right-0 z-10 xl:hidden")
  div(class="box-border w-full h-12 bg-gray-500/70 backdrop-blur flex justify-between items-center text-gray-50 px-4")
    div(class="cursor-pointer" @click="$store.commit('toggleShow')")
      i(class="fas fa-bars")
    div {{ $store.getters.getArticle.title }}
    nuxt-link(to="/")
      span(class="text-hidden") 홈
      img(src="~/assets/images/logo.png" alt="티스토리 로고" width="16" height="16")
</template>
