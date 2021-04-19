<template lang="pug">
app-page(:active="$store.state.menu.basic.getStarted.page" :title="$store.state.menu.basic.getStarted.label")
  header.header(slot="header")
    .index {{ $store.state.menu.basic.getStarted.page }}
    h1 {{ $store.state.menu.basic.getStarted.label }}
  main.text(slot="text")
    article.paragraph
      h2 Tidory CLI
      p #[b Tidory CLI] 는 티도리 프레임워크와 상호작용하기 위한 #[b CLI(Command Line Interface)] 환경에서 실행하는 #[b NPM(Node Package Manager)] 패키지입니다. 다음과 같은 명령을 사용하여 템플릿을 받아온 뒤, 프로젝트 구동을 위한 #[b NPM] 패키지들을 설치하십시오.
      highlight-code(lang='bash')
        | # Download tidory project template
        | npx create-tidory-app my-app
        | # Move into the folder
        | cd my-app
        | # Install NPM Packages
        | npm install
    article.paragraph
      h2 라이브(Live) 서버
      p 데모로 작성되어있는 앱을 어떻게 실행시키면 될까요? 간단하게 알아보도록 하겠습니다. #[b tidory start] 명령을 사용하면 #[b http://localhost:8080] 주소로 #[b webpack-dev-server] 를 실행시킬 수 있습니다. 프리뷰 서버는 #[b tidory preview] 로 시작할 수 있으며 #[b http://localhost:3000] 에서 시작합니다.
      h3 개발(Development) 서버
      p #[b 개발(Development)] 서버는 #[b 치환자가 동작하지 않은 모습 그대로]를 보여줍니다. 해석 이전에 스킨자체의 모습을 볼 때 주로 사용합니다. 또한 치환자를 직접넣기 전에 더미데이터로 디자인을 구성할 때 사용하는 것도 좋습니다.
      highlight-code(lang='bash')
        | # Development Server
        | npm start # tidory start
      h3 프리뷰(Preview) 서버
      p #[b 프리뷰(Preview)] 서버는 티스토리에 직접 요청을 보내고 #[b 치환자가 해석된 모습]을 렌더링합니다. 홈, 글, 카테고리 등 #[b 프리뷰 모드(Mode)]를 지정하여 티스토리 서버에 올라갔을 때의 모습을 볼 수 있습니다.
      p
        blockquote.blockquote-type-2 프리뷰 서버를 실행하려면 #[NuxtLink(:to="$store.state.menu.basic.configuration.href") 환경설정]에서 #[b ts_session, url, mode] 가 설정되어 있어야 합니다.
      highlight-code(lang='bash')
        | # Preview Server
        | npm run preview # tidory preview
    article.paragraph
      h2 빌드 및 배포
      p #[b 빌드 및 배포]는 기본적으로 #[b tidory build] 명령과 #[b tidory store] 가 있습니다. 빌드와 배포를 하는 방법에는 몇가지 있지만, 시작하기 단계에서는 자세한 설명없이 넘어가도록 하겠습니다. 자세한 내용은 #[NuxtLink(:to="$store.state.menu.basic.distribute.href") 빌드 및 배포] 문서를 참고해 주시기 바랍니다.
      p
        blockquote.blockquote-type-2 #[b 티도리 7.2.1] 버전부터 빌드를 실행하려면 #[NuxtLink(:to="$store.state.menu.basic.configuration.href") 환경설정]에서 #[b ts_session, url] 가 설정되어 있어야 합니다.
      highlight-code(lang='bash')
        | # Build
        | npm run build # tidory build
  footer.footer(slot="footer")
    .arrows
      .left: NuxtLink(:to="$store.state.menu.prologue.intro.href") #[i.fas.fa-angle-left] {{ $store.state.menu.prologue.intro.label }}
      .right: NuxtLink(:to="$store.state.menu.basic.directory.href") {{ $store.state.menu.basic.directory.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage
  }
}
</script>
