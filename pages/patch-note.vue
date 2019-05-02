<template lang="pug">
app-page
  header.header(role="header" slot="header")
    div.index #
    h1 {{ $store.state.menu.meta.patchNote.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2 tidory store
      p #[b tidory store] 의 사용법이 일부 변경되었습니다. 이제 스킨의 이름을 옵션으로 받지 않으며 #[b tidory.config.js] 에 설정된 #[b name] 속성으로 결정됩니다. #[b tidory] 는 #[b new] 명령어를 제외한 모든 명령어에서 #[a(href="https://github.com/tidory/tidory") tidory] 와 종속성을 갖습니다.
    article.paragraph
      h2 tidory new
      p 기존의 #[b tidory new] 명령어는 #[b tidory] 의 #[b master] 브랜치에서 가져왔었습니다. 그래서 과거 버전에서도 템플릿은 늘 최신으로 설치되었지만, 이제는 티도리 버전에 맞는 템플릿이 설치됩니다.
    article.paragraph
      h2 tidory.config.js
      p #[b name, alias] 속성이 추가되었습니다. #[b name] 속성은 스킨을 #[b 저장(store)]할 때 사용되는 옵션입니다. #[b alias] 속성은 템플릿에서 에셋을 불러올 때 사용하는 별칭입니다. 아참, 그리고 웹팩 별칭은 별도입니다.
      pre(data-label="tidory.config.js")
        code.lang-javascript {{ tidoryConfig }}
      p 이렇게 설정한 값은 다음과 같은 형태로 템플릿에서 사용할 수 있습니다. 이제는 #[b ../../../assets/styl/app.styl] 와 같은 형태를 벗어나십시오!
      pre(data-label="index.pug")
        code.lang-pug {{ pugAlias }}
    article.paragraph
      h2 tidory-starter-template
      p #[b tidory] 는 #[b tidory-cli] 버전이 변경되었을 때 빌드하려면 글로벌로 설치된 #[b tidory] 의 버전을 #[b 템플릿에 맞춰야 하는 문제점]이 있었습니다. 이제 그것이 해결되어 프로젝트 템플릿에 #[b tidory] 가 내장됩니다. 물론 기존처럼 글로벌로 설치된 #[b tidory] 를 사용할 수도 있습니다.
      pre(data-label="package.json")
        code.lang-json {{ pkg }}
    article.paragraph
      h2 티도리 패키지
      p 티도리는 #[b 코드 분리]가 가능하다는 장점이 있지만, 정작 개별 패키지를 개발하는 방법은 없었습니다. 하지만 이제부터는 #[b 패키지 개발]이 가능합니다. 티도리 패키지는 #[b NPM 패키지]로 #[b 취급]합니다. 하지만 본질적으로 NPM 패키지는 아니므로 NPM 레지스트리에 저장해서 전역 레지스트리를 오염시키는 것은 좋지 않습니다. 따라서 티도리 패키지는 이름에 제약조건을 걸어둡니다. 패키지에 대한 내용은 #[a(href="/docs/package") 패키지]를 참고해주세요.
    article.paragraph
      h2 뷰, 리액트 .pug 지원 삭제
      p #[b 뷰 컴포넌트]와 #[b 리액트 컴포넌트]에서 본래 #[b pug] 를 사용할 수 있도록 지원했었지만, 그런 종속성은 좋지 않은 듯하여 제거하였습니다. #[b pug] 는 템플릿으로써만 사용할 뿐, 선택적으로 사용하는 컴포넌트까지 그런 컨셉에 대한 영향을 줄 필요는 없는듯 합니다.
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  components: {
    AppPage
  },
  data() {
    return {
      tidoryConfig: `module.exports = {
  name: 'TIDORY',
  alias: {
    // as String
    '@styl': 'assets/styl',
    // as Function
    '@md': fn => fn.replace(/^@md/, 'assets/md')
  }
}`,
      pugAlias: `//- include assets/styl/app.styl
include:stylus @styl/app.styl
//- assets/md/index.md
include:markdown-it @md/index.md
`,
      pkg: `"scripts": {
  "start": "tidory start",
  "preview": "tidory preview",
  "build": "tidory build",
  "build:compress": "tidory build --compress",
  "deploy": "tidory deploy",
  "store": "tidory store"
},
"dependencies": {
  "tidory": "^7.1"
}`
    }
  }
}
</script>