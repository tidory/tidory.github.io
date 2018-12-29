<template lang="pug">
  section#document(role="document")
    h1#title 티스토리 예제
    Page
      div#jumpMenu(slot="jumpMenu" role="jumpMenu")
        h1 티스토리 예제
        div.headers
          h2: a(href="#") 티스토리 예제
          h3: a(href="#views/Header.pug") views/Header.pug
          h3: a(href="#views/Header/BlogTitle.pug") views/Header/BlogTitle.pug
          h3: a(href="#views/Header/BlogMenu.pug") views/Header/BlogMenu.pug
          h2: a(href="#빌드된 템플릿") 빌드된 템플릿
          h3: a(href="#skin.html") skin.html
          h3: a(href="#style.css") style.css
        div#text(slot="text" role="text")
          article.box
            h2(id="티스토리 예제") 티스토리 예제
            div.paragraph
              | 예제에서 만들어볼 것은 <b>블로그 타이틀과 메뉴</b> 입니다. 치환자 및 티스토리에서 제공하는 예제는 <b><a href="https://www.tistory.com/guide/skin/step3#1-1">티스토리 스킨 가이드</a></b> 를 참고합니다.
            div.paragraph
              h3(id="views/Header.pug") views/Header.pug
              div.paragraph
                | <b>Header.pug</b> 템플릿은 <b>티스토리 스킨가이드</b> 에서 <b>Header</b> 부분을 담당하게 될 상위 템플릿입니다. <b>Header/BlogTitle</b>, <b>Header/BlogMenu</b> 두 개의 템플릿을 포함하고 있습니다.
              div.paragraph
                pre
                  code(class="language-pug")
                    | {{ header }}
              div.paragraph
                | <b>Header.pug</b> 템플릿은 <b>index.pug</b> 에 포함해야 합니다.
              div.paragraph
                pre
                  code(class="language-pug")
                    | {{ index }}
              h3(id="views/Header/BlogTitle.pug") views/Header/BlogTitle.pug
              div.paragraph
                | <b>blogTitle.pug</b> 템플릿은 <b>티스토리 스킨가이드</b> 에 나와있는 <b>블로그 메뉴</b> 항목에 따라 다음과 같이 작성합니다. 여기서 <b>[##_title_##]</b> 은 치환자입니다.
              div.paragraph
                pre
                  code(class="language-pug")
                    | {{ blogTitle }}
              h3(id="views/Header/BlogMenu.pug") views/Header/BlogMenu.pug
              div.paragraph
                | <b>BlogMenu.pug</b> 템플릿도 <b>티스토리 스킨가이드</b> 에 따라 다음과 같이 작성합니다. 여기서 <b>[##_blog_menu_##]</b> 는 치환자입니다.
              div.paragraph
                pre
                  code(class="language-pug")
                    | {{ blogMenu }}
          article.box
            h2(id="빌드된 템플릿") 빌드된 템플릿
            div.paragraph
              | 템플릿을 빌드하면 기본적으로 <b>skin.html</b>, <b>style.css</b> 등이 생성됩니다. 여기서는 자세히 다루지 않겠지만, <b><a href="/docs/distribution/mode">빌드 및 배포</a></b> 를 참고해주시기 바랍니다. 
            div.paragraph
              h3(id="skin.html") dist/skin.html
              div.paragraph
                | 작성한 템플릿을 <b>tidory dist</b> 를 통해 빌드하면 다음과 같이 <b>skin.html</b> 안에 템플릿이 생성됩니다. 코드의 순서는 <b>layout</b> 다음으로 <b>index.pug</b> 에서 포함한 순서를 그대로 따라갑니다.
              div.paragraph
                pre
                  code(class="language-html")
                    | {{ skin }}
            div.paragraph
              h3(id="style.css") dist/style.css
              div.paragraph
                | 마찬가지로 생산된 <b>style.css</b> 파일에는 다음과 같이 <b>scoped</b> 속성이 적용되지 않은 <b>style</b> 태그 내부의 코드가 입력되어지게 됩니다. 코드의 순서는 <b>layout</b> 다음으로 <b>index.pug</b> 에서 포함한 순서를 그대로 따라갑니다.
              div.paragraph
                pre
                  code(class="language-css")
                    | {{ css }}
              div.paragraph
                | * 빌드시 해당 파일의 <b>link</b> 태그가 <b>head</b> 의 맨 아래에 자동으로 추가됩니다.
              div.paragraph
                h4 주석
                div.paragraph
                  | CSS는 CleanCSS 모듈을 통해 처리됩니다. 주석을 처리하려면 <b>/*! ... */</b> 형태로 작성해야 합니다. 기존 주석 형태와 다른 점은 시작할 때 <b>/*</b> 가 아닌 <b>/*!</b> 이라는 것이죠.
</template>
<script>
  import Page from '~/components/Page.vue';

  export default {
    data: function() {
      return {
        index:`index.pug

//- container
block TIDORY
  //- template
  include views/Header`,
        header:`views/Header.pug

//- container
div#td-header-wrapper
  //- template
  include Header/BlogTitle
  include Header/BlogMenu`,
        index:`index.pug

extends ./layouts/default

block TIDORY
  include views/Header`,
        blogTitle:`views/Header/BlogTitle.pug

//- inline script
-
  let subTitle = "It's awesome framework for Tistory Skin"
//- container
div#td-blog-title
  //- style
  style.
    h1 > a {
      color: orange;
      text-decoration: none;
    }
  //- template
  h1 
    a(href="[##_blog_link_##]") 
      | [##_title_##]
  h2= subTitle`,
        blogMenu:`views/Header/BlogMenu.pug

//- container
div#td-blog-menu
  //- style
  style.
    #td-blog-menu {
      font-size: 0.9em;
      color: green;
      font-weight: bold;
    }
  //- template 
  | [##_blog_menu_##]`,
    
        skin:`index.html

<div id="__tidory">
  <div id="td-header-wrapper">
    <div id="td-blog-title">
      <h1>
        <a href="[##_blog_link_##]">[##_title_##]</a>
      </h1>
      <h2>It's awesome framework for Tistory Skin</h2>
    </div>
    <div id="td-blog-menu">
      [##_blog_menu_##]
    </div>
  </div>
</div>`,
        css:`style.css

h1 > a {
  color: orange;
  text-decoration: none
}
#td-blog-menu {
  font-size: .9em;
  color: green;
  font-weight: 700
}`,
      }
    },
    head() {
      return {
        title: "티스토리 예제 - 티도리(TIDORY)",
        meta: [
          { content: '티스토리 예제 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    },
    components: {
      Page
    },
  }
</script>