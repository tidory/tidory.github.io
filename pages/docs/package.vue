<template lang="pug">
app-page(:active="$store.state.menu.advanced.package.page" :title="$store.state.menu.advanced.package.label")
  header.header(slot="header")
    .index {{ $store.state.menu.advanced.package.page }}
    h1 {{ $store.state.menu.advanced.package.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2 티도리 패키지
      p 프레임워크의 또 하나의 특징은, #[b 다른 사람이 작성한 코드]를 프로젝트에 포함 시킬 수 있다는 점입니다. 티도리 프레임워크 또한 패키지를 작성하는 것으로 #[b 다른 사람에게 자신의 코드를 제공]할 수 있습니다. #[a(href="https://github.com/tidory/example") tidory/example] 패키지를 참고하면 도움이 될 수 있습니다.
      p 티도리 패키지의 #[b 기본 폴더구조는 티도리 프로젝트 템플릿]과 동일합니다. 하지만 #[b 취급]을 #[b NPM 패키지]로 취급하기 때문에 #[b package.json] 의 내용이 조금은 다릅니다.
      h3 package.json
      p 본질적으로 티도리 패키지는 #[b NPM 패키지]라고 보기에는 무리가 있습니다. 따라서 패키지에는 이름에 제약을 걸어둡니다. 티도리 패키지는 #[b @tidory] 스코프 아래에 두는 것을 원칙으로 합니다. 또한 NPM 공식 레지스트리에 #[b 공표(Publish)] 하는 일이 없도록 하십시오.
      highlight-code(lang='json')
        | {{ pkg }}
      p #[b 티도리 프로젝트 템플릿]에는 #[b env, tidory.config.js] 등 개발을 위한 파일이 포함되어 있는데, 실질적으로 어플리케이션에서 포함할 때는 의미가 없으므로 #[b files] 배열에 포함시킬 필요가 없습니다. 위의 설정이 필수적인 것은 아니며, 필요에 따라 변경할 수 있습니다. 예를 들면 리액트, 뷰 컴포넌트가 있는 경우 해당 폴더를 포함시킬 수도 있겠죠.
    article.paragraph
      h2 패키지 사용하기
      p 만들어진 패키지를 사용하려면 어떻게 하면 좋을까요? 예를 들면 패키지의 이름이 #[b example] 이고, 패키지를 코드 저장소에 올렸다면, 프로젝트에서는 다음과 같이 포함될 수 있습니다.
      highlight-code(lang='json')
        | {{ pkg2 }}
      p 위와 같이 수동으로 추가하지 않고, #[b npm install] 명령으로 추가하고 싶다면, 아래와 같은 명령을 작성하면 프로젝트의 #[b package.json] 에 자동으로 추가됩니다. 아래의 명령은 깃허브의 #[a(href="https://github.com/tidory/example") https://github.com/tidory/example] 레포지토리를 다운로드 하라는 의미입니다.
      highlight-code(lang='bash')
        | npm install tidory/example
      h3 자식 패키지
      p 자바스크립트 프레임워크 컴포넌트를 포함한 각종 #[b 자식 패키지]가 포함된 티도리 패키지를 사용하고 싶다면, 일반 NPM 패키지처럼 #[b app.js] 에서 포함할 수 있습니다.
      highlight-code(lang='javascript')
        | require("@tidory/example")
      p
        blockquote.blockquote-type-2 #[b 자식 패키지]는 티도리 패키지를 포함하여 사용될 수 있는 범용 NPM 패키지를 지칭하는 것입니다.
      h3 템플릿에 포함하기
      p 티도리 패키지에 포함된 #[b 템플릿]을 포함하려면, 퍼그에서 제공하는 #[b include] 키워드를 통해 포함시킬 수 있습니다. #[b 템플릿 별칭]을 지정하지 않았다면, 경로를 전부 입력해야 합니다. 하지만, #[b @tidory] 별칭은 티도리 프레임워크 내부에 미리 등록되어 있습니다.
      highlight-code(lang='less')
        | include node_modules/@tidory/example/index
      p
        blockquote.blockquote-type-2 템플릿 별칭은 #[NuxtLink(:to="$store.state.menu.basic.configuration.href") 환경설정]에서 알아볼 수 있습니다.
      h3 @tidory
      p #[b @tidory] 별칭은 미리 정의된 템플릿 별칭입니다. #[b @tidory/package] 형식으로 사용하면 #[b node_modules/@tidory/package/index.pug] 를 포함하며 만약 같은 패키지에 속한 다른 템플릿을 포함시키고 싶다면 #[b @tidory/package/HelloWorld] 와 같은 방식으로 포함시킬 수 있습니다.
      highlight-code(lang='less')
        | {{ template }}
      p
        blockquote.blockquote-type-2 #[b 다른 티도리 패키지]를 사용하는 패키지 개발 시 #[b @tidory] 별칭을 사용하여 포함시킬 수 있습니다.
  footer.footer(slot="footer" role="footer")
    .arrows
      .left: NuxtLink(:to="$store.state.menu.advanced.framework.href") #[i.fas.fa-angle-left] {{ $store.state.menu.advanced.framework.label }}
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage
  },
  data () {
    return {
      pkg: `{
  "name": "@tidory/example",
  "version": "1.0.0",
  "main": "assets/app.js",
  "files": [
    "assets",
    "index.pug"
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
