<template lang="pug">
app-page(:active="$store.state.menu.template.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.template.page }}
    h1 {{ $store.state.menu.template.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="문서 구조") 문서 구조
      p 템플릿은 크게 #[b app.pug, index.pug, views/*.pug] 로 구성되어 있습니다. 각각이 어떻게 연결되어있는지 살펴보죠!
      h3(id="app.pug") app.pug
      p #[b app.pug] 템플릿은 #[b HTML]의 기본구조가 정의되어있는 템플릿입니다. #[b head, body] 태그와 같이 구조에 해당되는 태그들이 app.pug 에 마크업되어 있습니다. #[b 문서]의 최상위 템플릿이므로 스킨과는 직접적인 연관이 없는 마크업을 넣는 것이 좋습니다.
      pre(data-label="app.pug")
        code.lang-pug {{ app }}
      h3(id="index.pug") index.pug
      p #[b index.pug] 템플릿은 티스토리 스킨의 헤더, 컨텐츠, 푸터, 사이드바와 같은 부가요소가 포함됩니다. #[b block TIDORY] 아래에 #[b include] 키워드를 사용하여 템플릿 파일을 포함시킵니다.
      pre(data-label="index.pug")
        code.lang-pug {{ index }}
    article.paragraph
      h2(id="env") .env
      p #[b .env] 환경설정 파일은 템플릿 내부 또는 #[b webpack.entry.js] 에서 사용하는 상수 설정 파일입니다. 예를 들어 티스토리에 API에 등록된 앱을 사용하기 위해 다음과 같이 #[b 티스토리 API] 로그인을 위한 상수가 정의되어 있다고 가정해봅시다.
      pre
        code.lang-none {{ env }}
      p 이제 이렇게 정의된 환경변수는 #[b 템플릿 내부]와 #[b 웹팩 설정], 그리고 #[b 컴포넌트]에서 사용할 수 있습니다. 환경변수는 #[b 컴파일타임]에 #[b process.env] 객체 아래에 정의됩니다. 다음과 같이 말이죠!
      pre
        code.lang-pug {{ form }}
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
      div.left: a(:href="$store.state.menu.directory.href") #[i.fas.fa-angle-left] {{ $store.state.menu.directory.label }}
      div.right: a(:href="$store.state.menu.example.href") {{ $store.state.menu.example.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
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
    s_t3
      div#__tidory
        block TIDORY`,
      index: `extends app

block TIDORY
  //- template
  include views/HelloWorld`,
      env: `TISTORY_CLIENT_ID=dc08305218d22fb1af479b044d4707d0
TISTORY_CALLBACK=http://localhost:8080`,
      form: `form(method="GET" action="https://www.tistory.com/oauth/authorize/")
  input(type="hidden" 
        name="client_id" 
        value=\`\${process.env.TISTORY_CLIENT_ID}\`)
  input(type="hidden" 
        name="redirect_uri" 
        value=\`\${process.env.TISTORY_CALLBACK}\`)
  input(type="hidden" name="response_type" value="token")
  button(type="submit") 로그인`
    }
  }
}
</script>