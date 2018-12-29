<template lang="pug">
  section#document(role="document")
    h1#title 리소스
    Page   
      div#jumpMenu(slot="jumpMenu" role="jumpMenu")
        h1 리소스
        div.headers
          h2: a(href="#style.css, script.js") style.css, script.js
          h2: a(href="#scoped") scoped
          h2: a(href="#정적파일") 정적파일
      div#text(slot="text" role="text")
        article.box
          h2(id="style.css, script.js") style.css, script.js
          div.paragraph
            | 템플릿에 <b>style</b> 과 <b>script</b> 태그사용시 빌드 및 배포시 <b>css</b> 의 경우 티스토리 스타일 시트인 <b>style.css</b> 로 분리되고 <b>script</b> 는 <b>images/script.js</b> 파일로 분리됩니다. 따라서 하나의 템플릿에 스타일과 스크립트 태그를 한 자리에 배치할 수 있습니다.
          div.paragraph      
            pre
              code(class="language-pug")
                | {{ divide }}
        article.box
          h2(id="scoped") scoped
          div.paragraph
            | <b>style</b> 및 <b>script</b> 태그가 분리되지 않고, <b>skin.html</b> 상에 남게하려면 다음과 같이 태그에 <b>scoped</b> 속성을 부여하면 됩니다.
          div.paragraph      
            pre
              code(class="language-pug")
                | {{ scoped }}
        article.box
          h2(id="정적파일") 정적파일
          div.paragraph
            | <b>skin.html</b> 에 존재하는 마크업에서 파일을 포함하고, 티스토리 스킨에 적용시키고 나면, 티스토리 내부에서 포함 파일의 경로를 변경시켜버립니다. 템플릿에서 다음과 같이 포함하는 경우, 티스토리 스킨 내부에서는 <b>CDN(Content Delivery Network)</b> 방식으로 변경합니다. 
          div.paragraph      
            pre
              code(class="language-pug")
                | {{ static }}
</template>

<script>
  import Page from '~/components/Page.vue';
  
  export default {
    data: function() {
      return {
        divide: `*.pug

//- container
div#app
  //- style.css
  style.
    h1 {
      color: #ed5207;
    }
  //- markup
  h1 Tistory skin framework, Tidory
  //- script.js
  script.
    console.log('Hello, world');`,
      scoped: `*.pug
      
//- container
div#app
  //- style
  style(scoped).
    h1 {
      color: #ed5207;
    }
  //- markup
  h1 Tistory skin framework, Tidory
  //- script
  script(scoped).
    console.log('Hello, world');`,
    static: `*.pug

//- https://tistory2.daumcdn.net/tistory/2710108/skin/images/favicon.png
img(src="./images/favicon.png")`,
      }
    },
    head() {
      return {
        title: "리소스 - 티도리(TIDORY)",
        meta: [
          { content: '리소스 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    },
    components: {
      Page
    },
  }
</script>