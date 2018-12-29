<template lang="pug">
  section#document(role="document")
    h1#title 환경 설정
    Page
      div#jumpMenu(slot="jumpMenu" role="jumpMenu")
        h1 환경 설정
        div.headers
          h2: a(href="#env") .env
      div#text(slot="text" role="text")
        article.box
          h2(id="env") .env
          div.paragraph
            | <b>env</b> 환경설정 파일은 템플릿 내부 또는 <b>webpack.entry.js</b> 에서 사용하는 상수 설정 파일입니다. 예를 들어 다음과 같이 <b>티스토리 API</b> 로그인을 위한 상수가 정의되어 있다고 가정해봅시다.
          div.paragraph      
            pre
              code(class="language-env")
                | {{ env }}
          div.paragraph
            | 이렇게 설정한 값은 <b>process.env</b> 객체에 할당되어 있습니다. 템플릿에서 꺼내쓰려면 다음과 같이 할 수 있습니다. 이 값은 퍼그 템플릿 뿐만 아니라 <b>컴포넌트(Component)</b> 에서도 사용할 수 있습니다.
          div.paragraph      
            pre
              code(class="language-pug")
                | {{ form }}
</template>
<script>
  import Page from '~/components/Page.vue';

  export default {
    data: function() {
      return {
        env: `.env

TISTORY_CLIENT_ID=dc08305218d22fb1af479b044d4707d0
TISTORY_CALLBACK=http://localhost:8080`,
      form: `*.pug
      
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
    },
    head() {
      return {
        title: "환경 설정 - 티도리(TIDORY)",
        meta: [
          { content: '환경 설정 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    },
    components: {
      Page
    },
  }
</script>