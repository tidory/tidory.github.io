<template lang="pug">
app-page(:active="$store.state.menu.basic.example.page" :title="$store.state.menu.basic.example.label")
  header.header(slot="header")
    .index {{ $store.state.menu.basic.example.page }}
    h1 {{ $store.state.menu.basic.example.label }}
  main.text(slot="text")
    article.paragraph
      h2 템플릿 작성
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
      h3 index.pug
      p 현재 #[b views/Header] 파일이 포함되어 있습니다. 해당 템플릿은 #[b 부모 템플릿]이 됩니다.
      highlight-code(lang='less')
        | {{ index }}
      h3 views/Header.pug
      p 이번에는 #[b Header/BlogTitle] 과 #[b Header/BlogMenu] 를 포함하고 있습니다. 각각 #[b 블로그 제목] 과 #[b 블로그 메뉴]입니다. 이 둘은 #[b 자식 템플릿]입니다. #[b style] 태그는 빌드하면 #[b style.css] 파일로, #[b script] 태그를 사용하면 #[b images/script.js] 파일로 분리됩니다!
      highlight-code(lang='less')
        | {{ header }}
      p 만약 #[b 스킨 옵션]을 구현해야 할 때처럼, 분리가 되면 안 되는 상황이라면 어떨까요? #[b style, script] 태그에 #[b scoped] 속성을 부여하면 해당 태그는 #[b style.css, images/script.js] 로 분리되지 않습니다. 그 말은 즉, #[b skin.html] 에 남는다는 이야기가 됩니다.
      h3 views/Header/BlogTitle.pug
      highlight-code(lang='less')
        | {{ blogTitle }}
      h3 views/Header/BlogMenu.pug
      highlight-code(lang='less')
        | {{ blogMenu }}
      p 마크업에 보이지 않는 #[b li, a] 태그에 스타일을 준 이유는 무엇일까요? #[b 티스토리 스킨 치환자]인 #[b 메뉴 치환자]는 티스토리 스킨에 적용되면 #[b li, a] 태그를 포함하기 때문입니다.
    article.paragraph
      h2 프로덕션 코드
      p 우리가 만든 스킨을 이제 #[b 사용자에게 배포]하거나 #[b 자신의 블로그에 적용]하기 위해 #[NuxtLink(:to="$store.state.menu.basic.distribute.href") 빌드 및 배포]를 하면 다음과 같은 코드로 나뉘어집니다.
      h3 skin.html
      highlight-code(lang='html')
        | {{ skin }}
      h3 style.css
      highlight-code(lang='css')
        | {{ style }}
    article.paragraph
      h2 티스토리 예제 패키지
      p 티도리로 작성한 코드를 별도로 분리해서 #[b 패키지] 형태로 제공할 수도 있습니다. #[NuxtLink(:to="$store.state.menu.advanced.package.href") 패키지]에서 그 내용을 확인 하실 수도 있습니다. 하지만, 미리 사용해보죠! 지금 작성한 예제는 패키지로 별도로 작성해두었습니다.
      highlight-code(lang='bash')
        | # https://github.com/tidory/example
        | npm install tidory/example
      p 이제 #[b views/Header] 대신에 #[b index.pug] 에 다음과 같이 포함만 시키면 된답니다.
      highlight-code(lang='less')
        | {{ pkg }}
  footer.footer(slot="footer")
    .arrows
      .left: NuxtLink(:to="$store.state.menu.basic.template.href") #[i.fas.fa-angle-left] {{ $store.state.menu.basic.template.label }}
      .right: NuxtLink(:to="$store.state.menu.basic.configuration.href") {{ $store.state.menu.basic.configuration.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage
  },
  data () {
    return {
      pkg: 'include @tidory/example',
      index: `extends app

block TIDORY
  s_t3
    div#__tidory
      include views/Header`,
      header: `#example
  include Header/BlogTitle
  include Header/BlogMenu

style.
  #example {
    display: inline-block;
    text-align: center;
  }
  #example a {
    text-decoration: none;
    color: black;
    transition-duration: 0.3s;
    pointer-events: initial !important;
  }
  #example a:hover {
    color: #ed5207 !important;
  }`,
      blogTitle: `h1#blogTitle
  a(href="[##_blog_link_##]")
    | [##_title_##]

style.
  #example #blogTitle {
    color: #525252;
    font-size: 2.8em;
    font-weight: 200;
    margin: 0px;
  }`,
      blogMenu: `nav#blogMenu
  | [##_blog_menu_##]

style.
  #example #blogMenu {
    margin-top: 35px;
  }
  #example #blogMenu ul {
    padding: 0px;
    margin: 0px;
  }
  #example #blogMenu ul li {
    margin: 0 15px;
    display: inline-block;
  }
  #example #blogMenu ul li a {
    font-size: 1.05em;
    font-weight: 300;
  }
  header > nav ul li a:hover {
    color: #ed5207;
  }`,
      skin: `<div id="example">
  <h1 id="blogTitle"><a href="[##_blog_link_##]">[##_title_##]</a></h1>
  <nav id="blogMenu">[##_blog_menu_##]</nav>
</div>`,
      style: `#example #blogTitle {
  color: #525252;
  font-size: 2.8em;
  font-weight: 200;
  margin: 0
}
#example #blogMenu {
  margin-top: 35px
}
#example #blogMenu ul {
  padding: 0;
  margin: 0
}
#example #blogMenu ul li {
  margin: 0 15px;
  display: inline-block
}
#example #blogMenu ul li a {
  font-size: 1.05em;
  font-weight: 300
}
header > nav ul li a:hover {
  color: #ed5207
}
#example {
  display: inline-block;
  text-align: center
}
#example a {
  text-decoration: none;
  color: #000;
  transition-duration: .3s;
  pointer-events: initial!important
}
#example a:hover {
  color: #ed5207!important
}`
    }
  }
}
</script>
