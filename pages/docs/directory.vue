<template lang="pug">
AppPage
  header.header(role="header" slot="header")
    div.index 03
    h1 디렉토리
  main.text(slot="text" role="text")
    article.paragraph  
      p
        div.blockquote-type-3
          pre.
            ├── assets/
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
            ├── webpack.base.conf.js
            └── webpack.entry.js
      h3(id="assets") assets/*
      p 해당 디렉토리에는 #[b webpack.entry.js] 에 포함될 파일 뿐만 아니라, 다른 소스에서 포함되는 #[b styl, less] 와 같은 확장 템플릿 파일 및 퍼그 템플릿에 인라인으로 포함되는 파일, 자바스크립트 플러그인, #[b 컴포넌트(Components)]도 여기에 위치합니다.
      h3(id="docs") docs/*
      p 티스토리 스킨 업로드에 필요한 파일이 위치하고 있습니다. #[b index.xml, preview256.jpg, preview560.jpg, preview1600.jpg], 빌드하면 #[b dist] 폴더로 이동합니다.
      h3(id="images") images/*
      p 보통 프레임워크에서 정적파일의 폴더이름은 #[b static] 으로 처리 될 수 있습니다만, 티스토리에서는 #[b images] 폴더로 모든 정적파일 을 관리합니다.
      h3(id="views") views/*.pug
      p #[b pug 템플릿 파일]이 위치할 폴더입니다. 보통 #[b index.pug] 파일의 #[b block TIDORY] 부분에서 템플릿파일을 포함시킵니다. 소스구조는 분활해서 구성하는 것이 원칙입니다. #[a(href="/docs/template#문서 구조") 문서 구조] 부분을 참고하세요. 
      h3(id="env") .env
      p #[b .env] 환경설정 파일은 템플릿 내부 또는 #[b webpack.entry.js] 에서 사용하는 상수 설정 파일입니다. 예를 들어 티스토리에 API에 등록된 앱을 사용하기 위해 다음과 같이 #[b 티스토리 API] 로그인을 위한 상수가 정의되어 있다고 가정해봅시다.
      p
        pre
          code.lang-none {{ env }}
      p 이제 이렇게 정의된 환경변수는 #[b 템플릿 내부]와 #[b 웹팩 설정], 그리고 #[b 컴포넌트]에서 사용할 수 있습니다. 환경변수는 #[b 컴파일타임]에 #[b process.env] 객체 아래에 정의됩니다. 다음과 같이 말이죠!
      p
        pre
          code.lang-pug {{ form }}
      h3(id="webpack.base.conf.js") webpack.base.conf.js
      p #[b 웹팩(Wepback)]의 베이스 설정을 위한 파일입니다. #[b 뷰와 리액트] 사용을 위한 설정과 컴포넌트에서 에셋을 불러오기 위한 #[b PUBLIC_PATH] 설정을 주의해서 살펴보시기 바랍니다. 웹팩에 대한 지식이 없다면 건들지 않고 개발해도 무방합니다. 
      h3(id="webpack.entry.js") webpack.entry.js
      p #[b 웹팩(Webpack)]의 시작점이 되는 파일입니다. #[b 뷰와 리액트] 프레임워크가 이곳에서 포함됩니다. 그 외에 필요하다면 부가 패키지들을 포함시킬 수도 있습니다. #[b NPM(Node Package Manager)]이 가진 레포지토리 풀은 방대합니다.

  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: nuxt-link(to="/docs/get-started") #[i.fas.fa-angle-left] 시작하기 
      div.right: nuxt-link(to="/docs/template/") 템플릿 #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  mounted() {
    this.$store.commit('activeMenu', 2);
  },
  components: {
    AppPage
  },
  data() {
    return {
      env: `TISTORY_CLIENT_ID=dc08305218d22fb1af479b044d4707d0
TISTORY_CALLBACK=http://localhost:8080`,
      form: `
form(method="GET" action="https://www.tistory.com/oauth/authorize/")
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