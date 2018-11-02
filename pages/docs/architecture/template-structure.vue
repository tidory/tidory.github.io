<template lang="pug">
  section#tidory-architecture-wrapper
    h1.section-title 템플릿 구조
    article.categories
      h1 템플릿 구조
      div.categories
        h2: a(href="#템플릿 구조") 템플릿 구조
        h3: a(href="#app") app.pug
        h3: a(href="#layouts") layouts/*.pug
        h3: a(href="#index") index.pug
    article.box
      h2(id="템플릿 구조") 템플릿 구조
      div.paragraph
        img(src="~assets/images/st-layer.png" style="display:block;margin: 0 auto;" alt="템플릿 구조")
      div.paragraph
        h3(id="app") app.pug
        div.paragraph
          | <b>html</b> 의 기본적 구조가 선언되어 있는 템플릿입니다. <b>block TISTORY</b> 부분은 스킨의 몸통 부분입니다. <b>layouts/default.pug</b> 파일에서 설정됩니다.
        div.paragraph
          pre
            code(class="language-pug")
              | {{ app }}
      div.paragraph
        h3(id="layouts") layouts/*.png
        div.paragraph
          | <b>app.pug</b> 상속받아야 하며, 스킨의 입장에서 최상위에 있는 템플릿 파일로써 html 문서의 관점이 아닌, <b>스킨의 레이아웃</b> 만을 생각하고 작성되어야 합니다. 레이아웃 코드는 다음과 같습니다.
        div.paragraph
          pre
            code(class="language-pug")
              | {{ defaultIndex }}        
      div.paragraph
        h3(id="index") index.pug
        div.paragraph
          | <b>skin.html</b> 파일로 변환될 pug의 <b>메인 템플릿</b> 입니다. 기본적으로 <b>layouts/default.pug</b> 파일을 상속받으며, <b>block TIDORY</b> 부분은 <b>layouts/default.pug</b> 파일에서 찾을 수 있습니다. <b>views/*.png</b> 에 위치하는 템플릿 파일들을 여기서 포함시켜야 합니다.
        div.paragraph
          pre
            code(class="language-pug")
              | {{ index }}
</template>
<script>
  export default {
    data: function() {
      return {
        app: `app.pug

doctype html

html(lang="ko")
  head
    title [##_page_title_##]

    //- TISTORY RSS
    link(rel="alternate", type="application/rss+xml", 
       title="[##_title_##]", href="[##_rss_url_##]")
    //- meta
    meta(charset="utf-8")
    meta(name="viewport" content="user-scalable=no, 
       initial-scale=1.0, maximum-scale=1.0, 
       minimum-scale=1.0, width=device-width")

    <!--[if lt IE 9]>
    script(src="https://t1.daumcdn.net/tistory_admin/lib/jquery/jquery-1.12.4.min.js")
    <![endif]-->
    <!--[if gte IE 9]><!-->
    script(src="https://t1.daumcdn.net/tistory_admin/lib/jquery/jquery-3.2.1.min.js")
    <!--<![endif]-->

  body(id="[##_body_id_##]")
    //- TISTORY main content
    block TISTORY`,
        index: `index.pug

extends ./layouts/default

block TIDORY
  include views/Header/BlogTitle`,
        defaultIndex: `layouts/default.pug

extends ../app

block TISTORY
  s_t3
    div#__tidory
      block TIDORY`,
      }
    },
    head() {
      return {
        title: "템플릿 구조 - 티도리(TIDORY)",
        meta: [
          { content: '템플릿 구조 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    }
  }
</script>