<template lang="pug">
AppPage
  header.header(role="header" slot="header")
    div.index 04
    h1 템플릿
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="문서 구조") 문서 구조
      p 템플릿은 크게 #[b app.pug, layouts/*.pug, index.pug, views/*.pug] 로 구성되어 있습니다. 각각이 어떻게 연결되어있는지 살펴보죠!
      h3(id="app.pug") app.pug
      p #[b app.pug] 템플릿은 #[b HTML]의 기본구조가 정의되어있는 템플릿입니다. #[b head, body] 태그와 같이 구조에 해당되는 태그들이 app.pug 에 마크업되어 있습니다. #[b HTML 문서]의 최상위 템플릿이므로 스킨과는 직접적인 연관이 없는 마크업을 넣는 것이 좋습니다.
      p
        pre(data-label="app.pug")
          code.lang-pug {{ app }}
      h3(id="layouts/*.pug") layouts/*.pug
      p 레이아웃 파일은 티스토리 치환자인 #[b &lt;s_t3&gt;] 가 들어가는 #[b 티스토리 스킨]의 최상위 템플릿입니다. 필요에 따라 레이아웃을 변경할 수 있도록 구성할 수 있으며 레이아웃에 정의된 템플릿은 #[b app.pug] 를 상속해야 하고 #[b block TIDORY] 를 가지고 있어야합니다.
      P 
        pre(data-label="layouts/*.pug")
          code.lang-pug {{ layout }}
      h3(id="index.pug") index.pug
      p #[b index.pug] 템플릿은 티스토리 스킨의 헤더, 컨텐츠, 푸터, 사이드바와 같은 부가요소가 포함됩니다. #[b block TIDORY] 아래에 #[b include] 키워드를 사용하여 템플릿 파일을 포함시킵니다.
      p 
        pre(data-label="index.pug")
          code.lang-pug {{ index }}
      article.paragraph
        h2(id="코드 분할") 코드 분할
        p 우리가 템플릿을 분리해야하는 가장 중요한 이유는 #[b 재활용] 입니다. 템플릿 하나에는 #[b 스타일, 마크업, 스크립트]가 통째로 들어가기 때문에 다른 스킨을 제작할 때 포함시키기만 하면 다시 작성하지 않아도 됩니다.
        h3(id="부모와 자식 템플릿")
        p 자, 이제 우리가 다음과 같은 구조로 템플릿을 분리해 놓았다고 생각해봅시다. 이렇게 1차적으로 크게 분리된 것이 #[b 부모 템플릿]입니다. 이제 각 영역에 속할 #[b 자식 템플릿]을 만들어봐야 합니다.
        p
          blockquote.blockquote-type-3
            pre.
              ├── views/
              │     ├── Header.pug
              │     ├── Content.pug
              │     ├── Sidebar.pug
              │     └── Footer.pug
        p 이렇게 나뉘어 있는 것을 #[b 티스토리 스킨 가이드]를 참고하여 분리해보겠습니다. 자식 템플릿 의 위치는 절대적인 것은 아니나, 부모 템플릿의 이름과 똑같은 폴더 아래에 놓는 것을 원칙으로 합니다.
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
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: nuxt-link(to="/docs/directory/") #[i.fas.fa-angle-left] 디렉토리
      div.right: nuxt-link(to="/docs/example/") 티스토리 예제 #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  mounted() {
    this.$store.commit('activeMenu', 3);
  },
  components: {
    AppPage
  },
  data() {
    return {
      app: `doctype html

html(lang="ko")
  head
    title [##_page_title_##]

    //- TISTORY RSS
    link(rel="alternate", type="application/rss+xml", 
      title="[##_title_##]", 
      href="[##_rss_url_##]")

    //- meta
    meta(charset="utf-8")
    meta(name="viewport", content="user-scalable=no, 
      initial-scale=1.0, 
      maximum-scale=1.0, 
      minimum-scale=1.0, 
      width=device-width")
    
    //- scripts
    <!--[if lt IE 9]>
    script(src="//code.jquery.com/jquery-1.12.4.min.js")
    <![endif]-->
    <!--[if gte IE 9]><!-->
    script(src="//code.jquery.com/jquery-3.3.1.min.js")
    <!--<![endif]-->
    script(src="https://unpkg.com/tistory")
    
  body(id="[##_body_id_##]")
    block TISTORY`,
      layout: `extends ../app

block TISTORY
  s_t3
    div#__tidory
      //- template
      block TIDORY`,
      index: `extends ./layouts/default

block TIDORY
  //- template
  include views/HelloWorld`
    }
  }
}
</script>