<template lang="pug">
app-page(:active="$store.state.menu.advanced.package.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.advanced.package.page }}
    h1 {{ $store.state.menu.advanced.package.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="티도리 패키지") 티도리 패키지 #[span.version 티도리 7.1] 
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
      p 티도리 패키지는 #[b 취급]을 #[b NPM 패키지]로 취급하기 때문에 #[b package.json] 이 필수적입니다. #[b 티도리 패키지]는 다른 패키지와는 달리 테스트하기 어려운 점이 있는데, 우리가 기존에 사용하던 #[b tidory-cli] 를 사용하면 #[b 개발 서버, 프리뷰 서버]를 똑같이 이용할 수 있습니다. #[a(href="https://github.com/tidory" target="_blank") tidory] 에 등록된 패키지인 #[a(href="https://github.com/tidory/default-header" target="_blank") default-header], #[a(href="https://github.com/tidory/default-sidebar" target="_blank") default-sidebar], #[a(href="https://github.com/tidory/example" target="_blank") example] 레포지토리를 사용하면 패키지 개발을 조금 더 쉽게할 수 있습니다.
      h3(id="package.json") package.json
      p 패키지 매니저는 #[b npm] 을 사용하지만 본질적으로 NPM 패키지라고 보기에는 무리가 있습니다. 따라서 패키지에는 이름에 제약을 걸어둡니다. 티도리 패키지는 #[b @tidory] 스코프 아래에 두는 것을 원칙으로 합니다. 또한 NPM 공식 레지스트리에 #[b 공표(Publish)] 하는 일이 없도록 하십시오.
      pre(data-label="package.json")
        code.lang-json {{ pkg }}
      p #[b 패키지]로 제공된 #[b 레포지토리]에는 #[b env, tidory.config.js] 등 개발을 위한 파일이 포함되어 있는데, #[b 티도리 프로젝트 템플릿]에서 포함할 때는 의미가 없으므로 #[b files] 배열에 포함시킬 필요가 없습니다. 하지만 #[b 컴포넌트] 또는 #[b 템플릿]이 위치하는 디렉토리가 있다면 그것을 추가시켜야 합니다.
      h3(id="뷰 & 리액트 컴포넌트") 뷰 & 리액트 컴포넌트
      p 티도리 프레임워크는 #[b 뷰 컴포넌트]와 #[b 리액트 컴포넌트] 해석이 가능합니다. 티도리 패키지 내부에서 컴포넌트를 당연히 포함시킬 수 있습니다. 기존에 #[b app.js] 에서 작성했던 것을 그대로 #[b index.js] 에 작성하면 됩니다. 컴포넌트가 포함된 패키지는 #[a(href="https://github.com/tidory/default-sidebar" target="_blank") default-sidebar] 예제를 참고해주세요.
    article.paragraph
      h2(id="패키지 사용하기") 패키지 사용하기
      p 만들어진 패키지를 사용하려면 어떻게 하면 좋을까요? 예를 들면 패키지의 이름이 #[b example] 이고, 패키지를 코드 저장소에 올렸다면, 프로젝트에서는 다음과 같이 포함될 수 있습니다. 이는 #[a(href="https://github.com/tidory/tidory" target="_blank") 티도리 프로젝트 템플릿]에서 #[b package.json] 에서도 찾을 수 있습니다.
      pre(data-label="package.json")
        code.lang-json {{ pkg2 }}
      p 위와 같이 수동으로 추가하지 않고, #[b npm install] 명령으로 추가하고 싶다면, 아래와 같은 명령을 작성하면 프로젝트의 #[b package.json] 에 자동으로 추가됩니다. 아래의 명령은 깃허브의 #[a(href="https://github.com/tidory/example") https://github.com/tidory/example] 레포지토리를 다운로드 하라는 의미입니다.
      pre
        code.lang-bash
          | npm install tidory/example
      h3(id="자식 패키지") 자식 패키지
      p 자바스크립트 프레임워크 컴포넌트를 포함한 각종 #[b 자식 패키지]가 포함된 티도리 패키지를 사용하고 싶다면, 일반 NPM 패키지처럼 티도리 패키지 제작시 #[b index.js] 를 포함하고, #[b app.js] 에서 포함할 수 있습니다.
      pre
        code.lang-javascript
          | require("@tidory/example")
      p 
        blockquote.blockquote-type-2 #[b 자식 패키지]는 티도리 패키지를 포함하여 사용될 수 있는 범용 NPM 패키지를 지칭하는 것입니다.
      h3(id="템플릿에 포함하기") 템플릿에 포함하기
      p 티도리 패키지에 포함된 #[b 템플릿]을 포함하려면, 퍼그에서 제공하는 #[b include] 키워드를 통해 포함시킬 수 있습니다. #[b 템플릿 별칭]을 지정하지 않았다면, 경로를 전부 입력해야 합니다. 하지만, #[b @tidory] 별칭은 미리 등록되어 있습니다.
      pre
        code.lang-pug
          | include node_modules/@tidory/example/index
      p 
        blockquote.blockquote-type-2 템플릿 별칭은 #[a(:href="$store.state.menu.basic.configuration.href") 환경설정]에서 알아볼 수 있습니다.
      h3(id="@tidory") @tidory
      p #[b @tidory] 별칭은 미리 정의된 템플릿 별칭입니다. #[b @tidory/package] 형식으로 사용하면 #[b node_modules/@tidory/package/index.pug] 를 포함하며 만약 같은 패키지에 속한 다른 템플릿을 포함시키고 싶다면 #[b @tidory/package/HelloWorld] 와 같은 방식으로 포함시킬 수 있습니다.
      pre(data-label="index.pug")
        code.lang-pug {{ template }}
      p 
        blockquote.blockquote-type-2 #[b 다른 티도리 패키지]를 사용하는 패키지 개발 시 #[b @tidory] 별칭을 사용하여 포함시킬 수 있습니다.
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
  "name": "@tidory/example",
  "main": "index.js"
  "version": "1.0.0",
  "files": [
    "index.js",
    "index.pug",
    "LICENSE",
    "README.md"
  ]
}`,
      pkg2: `"dependencies": {
  "@tidory/example": "github:tidory/example"
}`,
      template: `//- node_modules/@tidory/example/index
include @tidory/example
//- node_modules/@tidory/example/HelloWorld
include @tidory/example/HelloWorld
`
    }
  }
}
</script>