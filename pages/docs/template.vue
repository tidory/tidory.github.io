<template lang="pug">
app-page(:active="$store.state.menu.basic.template.page" :title="$store.state.menu.basic.template.label")
  header.header(slot="header")
    .index {{ $store.state.menu.basic.template.page }}
    h1 {{ $store.state.menu.basic.template.label }}
  main.text(slot="text")
    article.paragraph
      h2 문서 구조
      p 티도리 프레임워크에서 템플릿은 #[a(href="https://pugjs.org/api/getting-started.html" target="_blank") 퍼그(Pug)]를 사용합니다. #[b 퍼그]는 HTML 파트별로 나누고 코드의 길이를 줄여주는 효과적인 템플릿 엔진입니다. #[b 티도리 프로젝트 템플릿]에서는 크게 #[b app.pug, index.pug, views/*.pug] 로 구성되어 있습니다. 각각이 어떻게 연결되어있는지 살펴보죠!
      h3 app.pug
      p #[b app.pug] 템플릿은 #[b 문서]의 기본구조가 정의되어있는 템플릿입니다. #[code head, body] 태그와 같이 구조에 해당되는 태그들이 마크업되어 있습니다. #[b 문서]의 최상위 템플릿이므로 스킨과는 직접적인 연관이 없는 마크업을 넣는 것이 좋습니다.
      pre: code(class='less')
        | {{ app }}
      h3 index.pug
      p #[b index.pug] 템플릿은 티스토리 스킨의 헤더, 컨텐츠, 푸터, 사이드바와 같은 부가요소가 포함됩니다. #[code block TIDORY] 아래에 #[code include] 키워드를 사용하여 템플릿 파일을 포함시킵니다.
      pre: code(class='less')
        | {{ index }}
    article.paragraph
      h2 코드 분할
      p 우리가 템플릿을 분리해야하는 가장 중요한 이유는 #[b 재활용]입니다. 템플릿 하나에는 #[b 스타일, 마크업, 스크립트]가 통째로 들어가기 때문에 다른 스킨을 제작할 때 포함시키기만 하면 다시 작성하지 않아도 됩니다.
      h3
      p 자, 이제 우리가 다음과 같은 구조로 템플릿을 분리해 놓았다고 생각해봅시다. 이렇게 1차적으로 크게 분리된 것이 #[b 부모 템플릿]입니다. 이제 각 영역에 속할 #[b 자식 템플릿]을 만들어봐야 합니다.
      p
        blockquote.blockquote-type-3
          pre.
            ├── views/
            │     ├── Header.pug
            │     ├── Content.pug
            │     ├── Sidebar.pug
            │     └── Footer.pug
      p 이렇게 나뉘어 있는 것을 조금 더 세부적으로 분리해보겠습니다. 자식 템플릿의 위치는 절대적인 것은 아니나, 부모 템플릿의 이름과 똑같은 폴더 아래에 놓는 것을 원칙으로 합니다.
      p
        blockquote.blockquote-type-3
          pre.
            ├── views/
            │     ├── Header.pug
            │     ├── Header
            │           ├── BlogTitle.pug
            │           └── BlogMenu.pug
            │     ├── Content.pug
            │     ├── Content
            │           └── Entry.pug
            │     ├── Sidebar.pug
            │     └── Footer.pug
  footer.footer(slot="footer")
    .arrows
      .left: a(:href="$store.state.menu.basic.directory.href") #[i.fas.fa-angle-left] {{ $store.state.menu.basic.directory.label }}
      .right: a(:href="$store.state.menu.basic.example.href") {{ $store.state.menu.basic.example.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage
  },
  data () {
    return {
      app: `doctype html

html(lang="ko")
  head
    meta(charset="utf-8")
    meta(name="viewport" content="width=device-width, initial-scale=1")

    title [##_page_title_##]

  body(id="[##_body_id_##]")
    block TIDORY`,
      index: `extends app

block TIDORY
  s_t3
    div#__tidory
      include views/HelloWorld`
    }
  }
}
</script>
