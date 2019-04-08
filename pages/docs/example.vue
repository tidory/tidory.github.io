<template lang="pug">
app-page(:active="$store.state.menu.example.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.example.page }}
    h1 {{ $store.state.menu.example.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="템플릿 작성") 템플릿 작성
      p 티스토리 예제로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 #[b 블로그의 제목과 메뉴]를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다.
      p
        blockquote.blockquote-type-3
          pre.
            ├── views/
            │     ├── Header.pug
            │     ├── Header
            │           ├── BlogTitle.pug
            │           └── BlogMenu.pug
            └── index.pug
      h3(id="index") index.pug
      p 현재 #[b views/Header] 파일이 포함되어 있습니다. 여기서 #[b views/Header] 템플릿은 #[b 부모 템플릿]이 됩니다.
      pre(data-label="index.pug")
        code.lang-pug {{ index }}
      h3(id="header") views/header.pug
      p 이번에는 #[b Header/BlogTitle] 과 #[b Header/BlogMenu] 를 포함하고 있습니다. 각각 #[b 블로그 제목] 과 #[b 블로그 메뉴]입니다. 이 둘은 #[b 자식 템플릿]입니다.
      pre(data-label="views/Header.pug")
        code.lang-pug {{ header }}
      h3(id="blogTitle") views/Header/blogTitle.pug
      p #[b 블로그 제목]의 #[b h1] 태그 내부에는 #[b style] 태그가 쓰인 것을 알 수 있습니다. 여기서 #[b style] 태그는 빌드하면 #[b style.css] 파일로, #[b script] 태그를 사용하면 #[b images/script.js] 파일로 분리됩니다!
      pre(data-label="views/Header/BlogTitle.pug")
        code.lang-pug {{ blogTitle }}
      h3(id="blogMenu") views/Header/blogMenu.pug
      p #[b 블로그 메뉴]의 #[b style, script] 태그에 #[b scoped] 옵션이 쓰인 것을 볼 수 있습니다. 이 옵션을 쓰면, 해당 태그가 각각 파일로 분리되지 않고 제자리에 남게됩니다. 그 말은 즉, #[b skin.html] 파일에 남는다는 얘기가 됩니다.
      pre(data-label="views/Header/BlogMenu.pug")
        code.lang-pug {{ blogMenu }}
      p 
        blockquote.blockquote-type-2 우리가 #[b 뷰 컴포넌트]를 사용할 때 붙이는 #[b scoped] 는 효력의 범위가 컴포넌트 내부로 한정됩니다. 하지만 티도리 프레임워크의 #[b 퍼그 템플릿] 내부에서 쓰인 #[b scoped] 는 해당 코드가 특정 범위에 들어와야 실행이 되며 #[b 실행효력]이 #[b 전역적]입니다.
    article.paragraph
      h2(id="프로덕션 코드") 프로덕션 코드
      p 우리가 만든 스킨을 이제 사용자에게 배포하기 위해 #[b 빌드]하면 다음과 같은 코드로 나뉘어집니다. #[b div#__tidory] 는 #[b app.pug] 에 정의되어 있습니다.
      h3(id="skin") skin.html
      pre(data-label="skin.html")
        code.lang-html {{ skin }}
      h3(id="style") style.css
      pre(data-label="style.css")
        code.lang-css {{ style }}
      h3(id="script") images/script.js
      pre(data-label="images/script.js")
        code.lang-javascript {{ script }}
    article.paragraph
      h2(id="티스토리 예제 패키지") 티스토리 예제 패키지
      p 티도리로 작성한 코드를 별도로 분리해서 #[b 패키지] 형태로 제공할 수도 있습니다. #[a(href="/docs/package") 패키지]에서 그 내용을 확인 하실 수도 있습니다. 하지만, 미리 사용해보죠! 지금 작성한 예제는 패키지로 별도로 작성해두었습니다.
      pre
        code.lang-bash
          | # https://github.com/pronist/tidory-example
          | npm install pronist/tidory-example
      p 이제 #[b index.pug]에 다음과 같이 포함만 시키면 된답니다.
      pre(data-label="index.pug")
        code.lang-pug {{ pkg }}
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: a(:href="$store.state.menu.template.href") #[i.fas.fa-angle-left] {{ $store.state.menu.template.label }}
      div.right: a(:href="$store.state.menu.framework.href") {{ $store.state.menu.framework.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  components: {
    AppPage
  },
  data() {
    return {
      pkg: `include @tidory/example`,
      index: `extends app

block TIDORY
  //- template
  include views/Header`,
      header: `header#header(role="header")
  style.
    html, body, #header {
      width: 100%;
      height: 100%;
    }
    #header {
      display: table;
    }
    #header > div {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
    }
  div
    //- Tistory Blog Title
    include Header/BlogTitle
    //- Tistory Blog Menu
    include Header/BlogMenu`,
      blogTitle: `h1
  style.
    h1 {
      margin-bottom: 25px;
    }
    h1 > a {
      text-decoration: none;
      font-size: 1.6em;
    }
  //- skin.html
  a(href="[##_blog_link_##]")
    | [##_title_##]
  //- script.js
  script.
    console.log("Hello, World!")`,
      blogMenu: `nav#nav(role="navigation")
  style.
    #nav li {
      margin: 0 15px;
      display: inline-block;
    }
    #nav li a {
      font-size: 1.05em;
      font-weight: 300;
    }
  //- skin.html
  | [##_blog_menu_##]
  script(scoped).
    console.log("Hello, World!")`,
      skin: `<header id="header" role="header">
  <div>
    <h1>
      <a href="[##_blog_link_##]">[##_title_##]</a>
    </h1>
    <nav id="nav" role="navigation">
      [##_blog_menu_##]
      \<script\>
        console.log("Hello, World!");
      \<\/script\>
    </nav>
  </div>
</header>`,
      style: `#header,
body,
html {
  width: 100%;
  height: 100%
}
#header {
  display: table
}
#header > div {
  display: table-cell;
  vertical-align: middle;
  text-align: center
}
h1 {
  margin-bottom: 25px
}
h1 > a {
  text-decoration: none;
  font-size: 1.6em
}
#nav li {
  margin: 0 15px;
  display: inline-block
}
#nav li a {
  font-size: 1.05em;
  font-weight: 300
}`,
      script: `"use strict";

console.log("Hello, World!");`
    }
  }
}
</script>

