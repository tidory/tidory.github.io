<template lang="pug">
app-page(:active="$store.state.menu.basic.directory.page" :title="$store.state.menu.basic.directory.label")
  header.header(slot="header")
    .index {{ $store.state.menu.basic.directory.page }}
    h1 {{ $store.state.menu.basic.directory.label }}
  main.text(slot="text")
    article.paragraph
      p
        .blockquote-type-3
          pre.
            ├── assets/
            │     └── app.js
            ├── docs/
            │     ├── index.xml
            │     ├── preview256.jpg
            │     ├── preview560.jpg
            │     └── preview1600.jpg
            ├── images/
            ├── views/
            ├── .env
            ├── app.pug
            ├── index.pug
            └── tidory.config.js
      h2 tidory/tidory
      p #[b 티도리 프로젝트 템플릿]인 #[a(href="https://github.com/tidory/tidory" target='_blank' rel='noreferrer') tidory/tidory] 의 레포지토리에 대한 내용입니다. 티도리 프레임워크는 정해진 디렉토리 구조가 있으므로 이를 따를 필요가 있습니다.
      h3 assets/*
      p 해당 디렉토리에는 #[b app.js] 에 포함될 파일 뿐만 아니라, 다른 소스에서 포함되는 #[b styl, less] 와 같은 확장 템플릿 파일 및 퍼그 템플릿에 인라인으로 포함되는 파일, 자바스크립트 플러그인, #[b 컴포넌트(Components)]도 여기에 위치합니다.
      h3 docs/*
      p 티스토리 스킨 업로드에 필요한 파일이 위치하고 있습니다. #[b index.xml, preview256.jpg, preview560.jpg, preview1600.jpg], 빌드하면 #[b dist] 폴더로 이동합니다.
      h3 images/*
      p 보통 프레임워크에서 정적파일의 폴더이름은 #[b static] 으로 처리 될 수 있습니다만, 티스토리에서는 #[b images] 폴더로 모든 #[b 정적파일]을 관리합니다.
      h3 views/*.pug
      p #[b pug 템플릿 파일]이 위치할 폴더입니다. 보통 #[b index.pug] 파일의 #[b block TIDORY] 부분에서 템플릿파일을 포함시킵니다. 소스구조는 분활해서 구성하는 것이 원칙입니다. #[a(:href="$store.state.menu.basic.template.href+'#문서 구조'") 문서 구조] 부분을 참고하세요.
  footer.footer(slot="footer")
    .arrows
      .left: a(:href="$store.state.menu.basic.getStarted.href") #[i.fas.fa-angle-left] {{ $store.state.menu.basic.getStarted.label }}
      .right: a(:href="$store.state.menu.basic.template.href") {{ $store.state.menu.basic.template.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage
  }
}
</script>
