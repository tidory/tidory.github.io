<template lang="pug">
  section#document(role="document")
    h1#title 디렉토리
    Page
      div#jumpMenu(slot="jumpMenu" role="jumpMenu")
        h1 디렉토리
        div.headers
          h3: a(href="#assets") assets
          h3: a(href="#docs") docs
          h3: a(href="#images") images
          h3: a(href="#layouts") layouts
          h3: a(href="#views") views
      div#text(slot="text" role="text")
        article.box
          div.paragraph
            div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
              pre.
                ├── assets/
                ├── docs/
                │     ├── index.xml
                │     ├── preview256.jpg
                │     ├── preview560.jpg
                │     └── preview1600.jpg
                ├── images/
                ├── layouts/
                │     └── default.pug
                ├── views/
                ├── .env
                ├── app.pug
                ├── index.pug
                ├── webpack.base.conf.js
                └── webpack.entry.js
          div.paragraph
            h3(id="assets") assets/*
            div.paragraph
              | 해당 디렉토리에는 <b>webpack.entry.js</b> 에 포함될 파일 뿐만 아니라, 다른 소스에서 포함되는 <b>styl</b>, <b>less</b> 와 같은 확장 템플릿 파일 및 퍼그 템플릿에 인라인으로 포함되는 파일, <b>자바스크립트 플러그인</b>, 스캐폴딩에 사용될 <b>컴포넌트(Components)</b> 도 여기에 위치합니다.
          div.paragraph
            h3(id="docs") docs/*
            div.paragraph
              | 티스토리 스킨 업로드에 필요한 파일이 위치하고 있습니다. <b>index.xml</b>, <b>preview256.jpg</b>, <b>preview560.jpg</b>, <b>preview1600.jpg</b>, <b>빌드 및 배포</b> 시 <b>dist</b> 폴더로 이동합니다.
            div.paragraph
              | * Ref.&nbsp;<a href="http://www.tistory.com/guide/skin/step5" target="_blank" class="tx-link">http://www.tistory.com/guide/skin/step5</a>
          div.paragraph
            h3(id="images") images/*
            div.paragraph
              | 보통 프레임워크에서 정적파일의 폴더이름은 <b>static</b> 으로 처리 될 수 있습니다만, 티스토리에서는 <b>images</b> 폴더로 모든 <b>정적파일</b> 을 관리합니다.
          div.paragraph
            h3(id="layouts") layouts/*.pug
            div.paragraph
              | 레이아웃 파일이 들어갈 수 있습니다. <b>default.pug</b> 파일이 기본적으로 생성되어 있으며, 이는 <b>index.pug</b> 에서 기본 레이아웃으로 사용됩니다. 기본적으로 레이아웃 파일은 <b>app.pug</b> 파일을 상속받아 사용합니다.
          div.paragraph
            h3(id="views") views/*.pug
            div.paragraph
              | <b>pug</b> 템플릿 파일이 위치할 폴더입니다. 보통 <b>index.pug</b> 파일의 <b>block TIDORY</b> 부분에서 템플릿파일을 포함시킵니다. 소스구조는 분활해서 구성하는 것이 원칙입니다. <b><a href="/docs/template/split">템플릿 분리</a></b> 부분을 참고하세요. 
</template>

<script>
  import Page from '~/components/Page.vue';

  export default {
    head() {
      return {
        title: "디렉토리 - 티도리(TIDORY)",
        meta: [
          { content: '디렉토리 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    },
    components: {
      Page
    }
  }
</script>