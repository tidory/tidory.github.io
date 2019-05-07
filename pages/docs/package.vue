<template lang="pug">
app-page(:active="$store.state.menu.advanced.package.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.advanced.package.page }}
    h1 {{ $store.state.menu.advanced.package.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="package") 티도리 패키지 #[span.version 티도리 7.1] 
      p 프레임워크의 또 하나의 특징은, #[b 다른 사람이 작성한 코드]를 프로젝트에 포함 시킬 수 있다는 점입니다. 티도리 프레임워크 또한 패키지를 작성하는 것으로 다른 사람에게 자신의 코드를 제공할 수 있습니다. 
    article.paragraph
      p
        div.blockquote-type-3
          pre.
            ├── index.pug
            ├── package.json
            ├── LICENSE
            └── README.md
      p #[b 티도리 패키지]의 기본 폴더구조이며 필수적인 것은 아닙니다. 하지만 프로젝트 템플릿에서 기본적으로 포함하는 템플릿은 #[b index.pug] 입니다. 기본 패키지 예제는 #[a(href="https://github.com/tidory/default-header" target="_blank") default-header] 예제를 참고해주세요.
    article.paragraph
      h2(id="package-development") 패키지 개발
      p 티도리 패키지는 #[b 취급]을 #[b NPM 패키지]로 취급하기 때문에 #[b package.json] 이 필수적입니다. #[b 티도리 패키지]는 다른 패키지와는 달리 테스트하기 어려운 점이 있는데, 우리가 기존에 사용하던 #[b tidory-cli] 를 사용하면 #[b 개발 서버, 프리뷰 서버]를 똑같이 이용할 수 있습니다. 티도리에 등록된 패키지인 #[b default-header, default-sidebar, example] 레포지토리를 사용하면 패키지 개발을 조금 더 쉽게할 수 있습니다.
      h3(id="package.json") package.json
      p 패키지 매니저는 #[b npm] 을 사용하지만 본질적으로 NPM 패키지라고 보기에는 무리가 있습니다. 따라서 패키지에는 이름에 제약을 걸어둡니다. 티도리 패키지는 #[b @tidory] 스코프 아래에 두는 것을 원칙으로 합니다. 또한 NPM 레지스트리에 #[b 공표(Publish)] 하는 일이 없도록 하십시오. 레지스트리는 #[b github] 를 사용하세요.
      pre(data-label="package.json")
        code.lang-json {{ pkg }}
      p #[b 패키지]로 제공된 #[b 레포지토리]에는 #[b env, tidory.config.js] 등 개발을 위한 파일이 포함되어 있는데, #[b 티도리 프로젝트 템플릿]에서 포함할 때는 의미가 없으므로 #[b files] 배열에 포함시킬 필요가 없습니다. 하지만 #[b 컴포넌트] 또는 #[b 템플릿]이 위치하는 디렉토리가 있다면 그것을 추가시켜야 합니다.
      h3(id="뷰 & 리액트 컴포넌트") 뷰 & 리액트 컴포넌트
      p 티도리 프레임워크는 #[b 뷰 컴포넌트]와 #[b 리액트 컴포넌트] 해석이 가능합니다. 티도리 패키지 내부에서 컴포넌트를 당연히 포함시킬 수 있습니다. 기존에 #[b app.js] 에서 작성했던 것을 그대로 #[b index.js] 에 작성하면 됩니다. 컴포넌트가 포함된 패키지는 #[a(href="https://github.com/tidory/default-sidebar" target="_blank") default-sidebar] 예제를 참고해주세요.
    article.paragraph
      h2(id="@tidory") @tidory
      p #[b @tidory] 별칭은 미리 정의된 템플릿 별칭입니다. #[b @tidory/package] 형식으로 사용하면 #[b node_modules/@tidory/package/index.pug] 를 포함하며 만약 같은 패키지에 속한 다른 템플릿을 포함시키고 싶다면 #[b @tidory/package/HelloWorld] 와 같은 방식으로 포함시킬 수 있습니다. 
      pre(data-label="index.pug")
        code.lang-pug {{ template }}
      p 
        blockquote.blockquote-type-2 #[b 다른 티도리 패키지]를 종속하는 패키지를 개발할 때도 #[b @tidory] 별칭을 사용하여 포함시킬 수 있습니다.
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: a(:href="$store.state.menu.advanced.framework.href") #[i.fas.fa-angle-left] {{ $store.state.menu.advanced.framework.label }}
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
  "name": "@tidory/package",
  "main": "index.js"
  "version": "1.0.0",
  "files": [
    "index.js",
    "index.pug",
    "LICENSE",
    "README.md"
  ]
}`,
      template: `//- node_modules/@tidory/my-package/index
include @tidory/my-package
//- node_modules/@tidory/my-package/HelloWorld
include @tidory/my-package/HelloWorld
`
    }
  }
}
</script>