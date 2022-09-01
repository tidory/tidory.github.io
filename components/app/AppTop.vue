<template lang="pug">
  #top(class="hidden xl:block")
    .notice(class="absolute top-9 left-72 text-sm text-normal")
      i(class="fas fa-volume-up mr-2.5")
      a.text(
        href="https://pronist.tistory.com/5"
        target='_blank'
        rel='noreferrer'
      )
        | hELLO 티스토리 스킨을 소개합니다.
    ul.menu(class="overflow-hidden list-none absolute top-9 right-9")
      li(v-for="icon in icons" class="mx-2.5 float-left text-[0] last:mr-0")
        a(:href="icon.href" target='_blank' rel='noreferrer')
          | {{ icon.title }}
          i(:class="icon.class" class="text-sm")
</template>

<script>
export default {
  data () {
    return {
      icons: [
        { class: 'fas fa-book-open', href: 'https://tistory.github.io/document-tistory-skin/', title: '티스토리 스킨 가이드' }
      ]
    }
  }
}
</script>
