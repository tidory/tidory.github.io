<template lang="pug">
app-page(:active="$store.state.menu.package.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.package.page }}
    h1 {{ $store.state.menu.package.label }}
  main.text(slot="text" role="text")
    article.paragraph
      p
        div.blockquote-type-3
          pre.
            ├── index.pug
            ├── package.json
            ├── LICENSE
            └── README.md
      p 티도리 패키지의 기본 폴더구조이며 필수적인 것은 아닙니다. 하지만 프로젝트 템플릿에서 기본적으로 포함하는 템플릿은 #[b index.pug] 입니다. #[b index.pug] 는 패키지의 최상위 템플릿으로서 존재합니다. 기본 패키지 예제는 #[a(href="https://github.com/pronist/tidory-default-header") default-header] 예제를 참고해주세요.
    article.paragraph
      h2(id="@tidory") @tidory #[span.version 티도리 7.1] 
      p #[b @tidory] 별칭은 미리 정의된 별칭입니다. 템플릿 내에서 특별하게 동작합니다. #[b @tidory/my-package] 형식으로 사용하면 #[b node_modules/@tidory/my-package/index.pug] 를 포함하며 만약 다른 템플릿을 포함시키고 싶다면 #[b @tidory/my-package/other] 와 같은 방식으로 포함시킬 수 있습니다. 
      pre(data-label="index.pug")
        code.lang-pug {{ template }}
      p #[b include] 하려는 패치가 존재하는 디렉토리라면 기본적으로 그 아래에 있는 #[b index.pug] 를 가리키게 됩니다. 그러나 #[b 디렉토리]가 아닌 파일이라면 해당 파일을 가리킵니다.
    article.paragraph
      h2(id="package.json") package.json #[span.version 티도리 7.1]
      p 티도리 패키지는 #[b NPM 패키지]로 #[b 취급]하고 패키지 매니저 또한 #[b npm] 을 사용합니다. 하지만 본질적으로 NPM 패키지라고 보기에는 무리가 있습니다. 따라서 패키지에는 이름에 제약을 걸어둡니다. 티도리 패키지는 #[b @tidory] 스코프 아래에 두는 것을 원칙으로 합니다. 또한 NPM 레지스트리에 #[b 공표(Publish)] 하는 일이 없도록 하십시오. 레지스트리는 #[b github] 를 사용하세요.
      pre(data-label="package.json")
        code.lang-json {{ pkg }}
    article.paragraph
      h2(id="모듈과 패키지 종속") 모듈과 패키지 종속 #[span.version 티도리 7.1]
      p 티도리 패키지가 다른 #[b NPM 패키지]나 #[b 티도리 패키지]에 종속할 수 있을까요?
      h3(id="뷰 & 리액트 컴포넌트") 뷰 & 리액트 컴포넌트
      p 티도리 프레임워크는 #[b 뷰 컴포넌트]와 #[b 리액트 컴포넌트] 해석이 가능합니다. 티도리 패키지 내부에서 컴포넌트를 당연히 포함시킬 수 있습니다. 기존에 #[b app.js] 에서 작성했던 것을 그대로 #[b index.js] 에 작성하면 됩니다. 컴포넌트가 포함된 패키지는 #[a(href="https://github.com/pronist/tidory-default-sidebar") default-sidebar] 예제를 참고해주세요.
      p 오직 컴포넌트만을 티도리 패키지에 포함시킬 필요는 없습니다. 티도리 패키지에는 템플릿 파일이 포함되어 있으므로 해당 템플릿파일에서 컴포넌트를 사용하는 경우도 있을 수 있을 수 있습니다. #[b @tidory] 스코프 아래에 생성된 패키지는 리액트 컴포넌트에서 사용하는 #[b jsx] 템플릿 스트링을 해석할 수 있습니다. 
      h3(id="티도리 패키지") 티도리 패키지
      p 우리가 #[b npm] 을 사용하는 이상, 패키지에서 또 다른 티도리 패키지에 종속하는 것도 할 수 있습니다. 다른 티도리 패키지의 템플릿에 접근하는 방법도 프로젝트 템플릿에서 티도리 패키지에 접근하는 것과 다르지 않습니다. 그저 #[b @tidory] 별칭을 하십시오.
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: a(:href="$store.state.menu.distribute.href") #[i.fas.fa-angle-left] {{ $store.state.menu.distribute.label }}
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  components: {
    AppPage
  },
  data() {
    return {
      pkg: `{
  "name": "@tidory/my-package",
  "main": "index.js"
  "version": "1.0.0"
}`,
      template: `//- node_modules/@tidory/my-package/index
include @tidory/my-package
//- node_modules/@tidory/my-package/other
include @tidory/my-package/other
`
    }
  }
}
</script>