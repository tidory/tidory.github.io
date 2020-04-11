<template lang="pug">
app-page(:active="$store.state.menu.prologue.intro.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.prologue.intro.page }}
    h1 {{ $store.state.menu.prologue.intro.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2 티스토리 스킨 제작 프레임워크
      p #[b 티도리 프레임워크]는 티스토리 스킨을 제작하기 위한 전용 프레임워크입니다. 티스토리 스킨을 개발하기 위해 #[b 프레임워크]까지 배워야 할까요? 우리가 기본적으로 티스토리 스킨을 개발할 때는 #[b 개발단계], #[b 테스트 단계], #[b 스킨적용 및 배포 단계]의 3단계를 거치게됩니다. 프레임워크는 각 단계에서 발생하는 여러가지 불편사항을 해결하기 위해 개발됩니다. 단계별로 발생하는 문제와 프레임워크에서의 해결 방법을 알아보겠습니다.
      h3 디자인과 코드 작성
      blockquote.blockquote-type-1
        ol(type="1")
          li
            | 다양한 기능을 제공하는 #[b 확장 HTML, CSS 템플릿 엔진]은 수동으로 컴파일해서 사용해야 하며, #[b skin.html, style.css] 에 티스토리 스킨에서 사용할 #[b 모든 기능(Header, Content, Sidebar, Footer 등)]을 모두 몰아넣어 작성해야합니다.
            p
              a(:href="$store.state.menu.basic.template.href") 템플릿 - 템플릿과 코드 분할
          li
            | #[b SPA(Single Page Application) 프레임워크]와 #[b npm] 사용에 제약이 많습니다.
            p
              a(:href="$store.state.menu.advanced.framework.href") 프레임워크 - 뷰 & 리액트
          li
            | #[b 템플릿과 컴포넌트]를 따로 분리하여 필요할 때 #[b 재활용]하거나 #[b 다른 사람이 작성한 코드]를 포함시키기 어렵습니다.
            p
              a(:href="$store.state.menu.advanced.package.href") 패키지 - 템플릿과 컴포넌트 재활용
      h3 테스트
      blockquote.blockquote-type-1
        ol(type="1")
          li
            | 적용된 스킨의 모습을 확인하려면 #[b 스킨편집]에 들어가서 코드를 복사 붙여넣기 하고, #[b 정적 리소스 파일(.js, .png 등)]을 업로드 해야합니다. 소스코드에 #[b 변경사항]이 있을 경우에는 파일을 다시 업로드 해야합니다.
            p
              a(:href="$store.state.menu.basic.getStarted.href") 시작하기 - 개발 서버와 프리뷰 서버
      h3 빌드 및 배포
      blockquote.blockquote-type-1
        ol(type="1")
          li
            | 스킨을 적용하려면 #[b 스킨편집]에 직접 들어가서 코드를 복사 붙여넣기하고 파일을 업로드해야하거나 #[b 스킨저장소]에 수동으로 업로드해야 합니다.
            p
              a(:href="$store.state.menu.basic.distribute.href") 빌드 및 배포 - 자동화
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.right: a(:href="$store.state.menu.basic.getStarted.href") {{ $store.state.menu.basic.getStarted.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage
  }
}
</script>
