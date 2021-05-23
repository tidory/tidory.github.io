<template lang="pug">
app-page(:active="$store.state.menu.basic.example.page" :title="$store.state.menu.basic.example.label")
  header.header(slot="header")
    .index {{ $store.state.menu.basic.example.page }}
    h1 {{ $store.state.menu.basic.example.label }}
  main.text(slot="text")
    article.paragraph
      h2 템플릿 작성
      p 티스토리 예제로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 #[b 블로그의 제목과 메뉴]를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다.
      p
        blockquote.blockquote-type-3
          pre.
            ├── views/
            │     ├── Header.pug
            │     ├── Header
            │           ├── Navigation.pug
            │           └── Title.pug
            └── index.pug
      h3 index.pug
      p 현재 #[b views/Header.pug] 파일이 포함되어 있습니다. 해당 템플릿은 #[b 부모 템플릿]이 됩니다. #[code style] 태그는 빌드하면 #[b style.css] 파일로, #[code script] 태그를 사용하면 #[b images/script.js] 파일로 분리됩니다.
      highlight-code(lang='less')
        | {{ index }}
      h3 views/Header.pug
      p 이번에는 #[b Header/Title.pug] 과 #[b Header/Navigation.pug] 를 포함하고 있습니다. 각각 #[b 블로그 제목] 과 #[b 블로그 메뉴]입니다. 이 둘은 #[b 자식 템플릿]입니다.
      highlight-code(lang='less')
        | {{ header }}
      p 만약 #[b 스킨 옵션]을 구현해야 할 때처럼, 분리가 되면 안 되는 상황이라면 어떨까요? #[code style, script] 태그에 #[code scoped] 속성을 부여하면 해당 태그는 #[b style.css, images/script.js] 로 분리되지 않습니다. 그 말은 즉, #[b skin.html] 에 남는다는 이야기가 됩니다.
      h3 views/Header/Title.pug
      highlight-code(lang='less')
        | {{ blogTitle }}
      h3 views/Header/Navigation.pug
      highlight-code(lang='less')
        | {{ blogMenu }}
      p 마크업에 보이지 않는 #[code li, a] 태그에 스타일을 준 이유는 무엇일까요? #[b 티스토리 스킨 치환자]인 #[b 메뉴 치환자]는 티스토리 스킨에 적용되면 #[code li, a] 태그를 포함하기 때문입니다.
    article.paragraph
      h2 프로덕션 코드
      p 우리가 만든 스킨을 이제 #[b 사용자에게 배포]하거나 #[b 자신의 블로그에 적용]하기 위해 #[a(:href="$store.state.menu.basic.distribute.href") 빌드 및 배포]를 하면 다음과 같은 코드로 나뉘어집니다.
      h3 skin.html
      highlight-code(lang='html')
        | {{ skin }}
      h3 style.css
      highlight-code(lang='css')
        | {{ style }}
  footer.footer(slot="footer")
    .arrows
      .left: a(:href="$store.state.menu.basic.template.href") #[i.fas.fa-angle-left] {{ $store.state.menu.basic.template.label }}
      .right: a(:href="$store.state.menu.basic.configuration.href") {{ $store.state.menu.basic.configuration.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage
  },
  data () {
    return {
      index: `extends app

block TIDORY
  s_t3
    div#__tidory
      include views/Header

  style.
    #__tidory {
      height: 100vh;
      align-items: center;
      display: flex;
      justify-content: center;
      text-align: center;
    }`,
      header: `header
  include Header/Title
  include Header/Navigation`,
      blogTitle: 'h1 [##_title_##]',
      blogMenu: 'nav [##_blog_menu_##]',
      skin: `<div id="__tidory">
  <header>
    <h1>[##_title_##]</h1>
    <nav>[##_blog_menu_##]</nav>
  </header>
</div>`,
      style: `
#__tidory {
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center
}`
    }
  }
}
</script>
