<template lang="pug">
  section#document(role="document")
    h1#title 프레임워크 아키텍쳐
    Page
      div#jumpMenu(slot="jumpMenu" role="jumpMenu")
        h1 프레임워크 아키텍쳐
        div.headers
          h2: a(href="#프레임워크 아키텍쳐") 프레임워크 아키텍쳐
          h3: a(href="#소스 합치기") 소스 합치기
          h3: a(href="#웹팩 빌드") 번들링 및 파일 분리
          h3: a(href="#메타데이터") 메타데이터
          h3: a(href="#배포 준비완료") 배포 준비완료
      div#text(slot="text" role="text")
        article.box
          h2(id="프레임워크 아키텍쳐") 프레임워크 아키텍쳐
          div.paragraph
            img(src="~assets/images/st-architecture.png" style="display:block;margin: 0 auto;" alt="프레임워크 아키텍쳐")
          div.paragraph
            h3(id="소스 합치기") 소스 합치기
            div.paragraph
              | html 문서가 선언된 <b>app.pug</b> 를 최상위 문서로 취급하여 <b>layouts/*.pug</b> 템플릿과 스킨의 메인 템플릿인 <b>index.pug</b>, 그리고 각 기능별로 분리된 <b>views/*.pug</b> 템플릿을 합치는 것으로 <b>skin.html</b> 문서를 만듭니다.
          div.paragraph
            h3(id="번들링 및 파일 분리") 번들링 및 파일 분리
            div.paragraph
              | <b>webpack.base.conf.js</b> 설정에 따라 웹팩으로 빌드하고 <b>webpack.entry.js</b> 에 포함된 파일을 번들링하여 <b>app.js</b> 파일을 생성합니다. 또한 스타일 및 스크립트 태그에 쓰인 <b>scoped</b> 속성에 따라 <b>style.css</b> 와 <b>script.js</b> 파일로 분리합니다.
          div.paragraph
            h3(id="메타데이터") 메타데이터
            div.paragraph
              | <b>메타데이터</b> 는 티스토리 스킨을 등록하기 위해 부가적으로 등록하는 문서들로써 스킨 미리보기파일인 <b>*.jpg</b> 파일과 라이센스, 버전을 명시한 <b>index.xml</b> 이 주 파일이며, 템플릿이 합쳐진 이후에 복사되어 이동됩니다.
          div.paragraph
            h3(id="배포 준비완료") 배포 준비완료
            div.paragraph
              | 빌드 및 복사가 끝나게 되면 사용자에게 배포 할 준비가 끝납니다. 배포가 끝난 뒤 생성되는 파일에 대해서는 <b><a href="/docs/distribution/directory">배포 디렉토리</a></b> 를 참고합니다.
</template>

<script>
  import Page from '~/components/Page.vue';

  export default {
    head() {
      return {
        title: "프레임워크 아키텍쳐 - 티도리(TIDORY)",
        meta: [
          { content: '프레임워크 아키텍쳐 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    },
    components: {
      Page
    }
  }
</script>