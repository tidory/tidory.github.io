<template lang="pug">
app-page(:active="$store.state.menu.basic.distribute.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.basic.distribute.page }}
    h1 {{ $store.state.menu.basic.distribute.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="빌드") 빌드(Build)
      p 빌드는 #[b 두 가지의 모드]가 존재하는데, #[b 압축(Compressed)]과 #[b 비압축(Uncompressed)]입니다. 압축버전은 일반적으로 개발자가 자신의 스킨을 적용할 때 사용하며, 그렇지 않은 버전은 유저에게 배포하기 위한 것입니다.
      h3(id="비압축") 비압축(Uncompressed)
      p 빌드는 기본적으로 비압축모드로 진행되며 #[b tidory build] 명령을 내리면 됩니다.
      pre
        code.lang-bash 
          | # tidory build
          | npm run build
      h3(id="압축") 압축(Compressed)
      p #[b 개발자가 직접 사용하기 위해 빌드하는 모드]입니다. 웹페이지 로드속도를 향상시키기 위해 코드를 압축합니다.
      pre
        code.lang-bash 
          | # tidory build --compress
          | npm run build:compress
    article.paragraph
      h2(id="배포") 배포(Distribution) #[span.version 티도리 6.1]
      p #[b 배포]는 #[b 현재 사용 중인 스킨을 덮어쓰는 모드]가 있고, #[b 스킨저장소에 저장하는 모드]가 있습니다. 추가적으로 배포를 사용하려면 #[a(:href="$store.state.menu.basic.configuration.href") 환경설정]에 #[b ts_session, url] 항목이 정상적으로 등록되어 있어야합니다. 
      p 
        blockquote.blockquote-type-2 배포를 하기 전에 먼저 빌드해야 합니다. #[b dist] 디렉토리를 대상으로 배포하기 때문이죠.
      h3(id="덮어쓰기") 덮어쓰기(Overwrite)
      p 현재 사용 중인 스킨에 덮어쓰려면 #[b tidory deploy] 명령으로 할 수 있습니다. 현재 사용 중인 스킨의 코드가 덮어써지고 업로드된 파일이 삭제되고 재업로드 됩니다.
      pre
        code.lang-bash
          | # tidory deploy
          | npm run deploy
      h3(id="저장소") 저장소(Store)
      p #[b 스킨저장소]에 저장하려면 #[a(:href="$store.state.menu.basic.configuration.href") 환경설정]에 #[b name] 항목이 정상적으로 등록되어 있어야합니다. 
      pre
        code.lang-bash
          | # tidory store
          | npm run store
    article.paragraph
      h2(id="프로덕션 코드") 프로덕션 코드
      p
        blockquote.blockquote-type-3
          pre.
            dist/
            ├── images/
            │   ├── script.js
            │   └── app.js
            ├── preview256.jpg
            ├── preview560.jpg
            ├── preview1600.jpg
            ├── index.xml
            ├── skin.html
            └── style.css
      h3(id="images") images/*
      p #[b images] 폴더는 템플릿 또는 컴포넌트에 포함된 리소스들이 모여있는 파일이며, 추가적으로 템플릿 내부에서 작성한 #[b scoped] 속성이 사용되지 않은 #[b script] 태그의 집합인 #[b script.js], #[b assets/app.js] 에서 포함한 에셋들의 집합인 #[b app.js] 가 있습니다.
      h3(id="skin") skin.html
      p 티스토리 스킨으로 업로드할 최종 #[b html] 파일입니다.
      h3(id="style") style.css
      p 템플릿에 있는 #[b scoped] 속성이 사용되지 않은 #[b style] 태그들의 집합 파일입니다.
      h3(id="preview") preview*.jpg
      p #[b docs] 폴더에 있던 미리보기 파일이며 #[b preview256.jpg, preview560.jpg, preview1600.jpg] 파일이 존재합니다. 사용자에게 스킨 미리보기로써 제공됩니다.
      h3(id="index") index.xml
      p #[b docs] 폴더에 있던 #[b 티스토리 스킨 설정]파일입니다.
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: a(:href="$store.state.menu.basic.configuration.href") #[i.fas.fa-angle-left] {{ $store.state.menu.basic.configuration.label }}
      div.right: a(:href="$store.state.menu.advanced.framework.href") {{ $store.state.menu.advanced.framework.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  components: {
    AppPage
  }
}
</script>