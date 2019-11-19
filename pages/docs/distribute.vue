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
      p #[b 티스토리 스킨 저장소]에 저장하려면 #[a(:href="$store.state.menu.basic.configuration.href") 환경설정]에 #[b name] 항목이 정상적으로 등록되어 있어야합니다. 해당 설정의 값에 따라 저장되는 스킨의 이름이 달라집니다.
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
    article.paragraph
      h2(id="코드 저장소") 코드 저장소
      p #[b 깃허브(Github)]와 같은 코드 저장소와 스킨 코드를 연동하려면 어떻게 하면 좋을까요? 티스토리 스킨은 #[b FTP(File Transfer Protocol)]을 지원하는 것도 아니며 그렇다고 공식적으로 코드 저장소와의 코드 공유를 지원하지도 않습니다.
      p 하지만, 한 가지 해결책이 있습니다. 티도리 프레임워크를 통해 빌드된 소스코드를 코드 저장소에 배포하면서 동시에 티스토리 스킨에 코드를 적용시킨다면 가능합니다. #[b 빌드(Build) - 코드 저장소 배포(Push) - 스킨 적용(Deploy)]의 과정을 통해 코드 저장소와 스킨 코드를 동일하게 구성할 수 있습니다.
      h3(id="push-dir") push-dir
      p #[b push-dir] 은 코드 저장소에 특정 디렉토리를 특정 브랜치에 푸쉬할 수 있도록 해주는 패키지입니다. 해당 패키지가 있으면 스킨을 빌드하면 나오는 #[b dist] 디렉토리만을 독립적으로 다른 브랜치에 올릴 수 있습니다.
      pre
        code.lang-bash
          | npm install --save-dev push-dir
      h3(id="package.json") package.json
      p #[a(href="https://github.com/tidory/tidory") 티도리 프로젝트 템플릿]에 있는 #[b package.json] 에 보면 아래와 같이 나와있는 것을 볼 수 있습니다. #[b npm run deploy] 명령어는 빌드된 티스토리 스킨을 현재 스킨에 적용시키는 명령어입니다. 
      pre
        code.lang-javascript
          | {{ deploy }}
      p #[b npm run deploy:github] 명령을 따로 만들고, 배포 순서에 따라 빌드를 하고, #[b push-dir] 을 먼저 하는 것으로 코드 저장소에 푸쉬한 다음, 스킨에 적용시키도록 바꿔주면 코드 저장소와 스킨 코드를 동일하게 만들 수 있습니다. 티스토리에서 제공하는 #[b 스킨 편집]은 없다고 여기십시오.
      pre
        code.lang-javascript
          | {{ pushDir }}
      p 
        blockquote.blockquote-type-2 위와 같이 명령어를 구성하면 #[b 빌드(Build) - 코드 저장소 배포(Push) - 스킨 적용(Deploy)]의 순서로 배포를 자동화할 수 있습니다. 코드 저장소에 #[b tistory-skin] 브랜치가 별도로 생성되어 개발코드가 아닌, 오직 스킨의 코드만 푸쉬됩니다. #[b 테스트용 스킨 프로젝트]인 #[a(href="https://github.com/pronist/tistory-skin") https://github.com/pronist/tistory-skin] 을 참고하십시오.
      h2(id="tistory-skin-api") 티스토리 스킨 API
      p 티도리 프레임워크가 아닌 #[b 다른 프로젝트]에 자신의 스킨 프로젝트를 직접 연동할 수 있도록 만들어 보고 싶을 수도 있습니다. 티도리 프레임워크에서 #[b 티스토리 서버와 통신]하는 부분(프리뷰, 배포, 저장)에는 필자가 작성한 #[b API(Application Programming Interface)]가 사용됩니다. 
      p #[a(href="https://github.com/tidory/tistory-skin") (Unofficial) Tistory Skin] 을 사용하면, #[b 티스토리 스킨 저장소]를 조작을 할 수 있습니다. #[b 스킨 편집]에 있는 대부분의 기능(파일 및 스킨 추가, 삭제, 프리뷰, 스킨코드 변경 등)을 프로그래밍이 가능한 형태로 제공합니다.
      pre
        code.lang-javascript
          | {{ deployer }}
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
  },
  data() {
    return {
      deploy: `"scripts": {
  "deploy": "tidory deploy"
}`,
      pushDir: `"scripts": {
  "deploy:github": "tidory build --compress && push-dir --dir=dist --branch=tistory-skin --cleanup && tidory deploy"
}`,
      deployer: `const TistorySkin = require('tistory-skin');
      
/**
 * Deploy Tistory Skin
 *
 * @param {String} blogURL 
 * @param {String} tsSession
 * @param {String} dist 
 */
async function deploy(blogURL, tsSession, dist) {
  /**
   * Create TistorySkin instance
   */
  const skin = new TistorySkin(blogURL, tsSession);

  // Clear current skin file storage
  await skin.clear();
  // Deploy
  await skin.deploy(dist);
}

deploy("https://appwriter.tistory.com", 
       "efd0c5228b2b6c8a2db76275873bdf5a291626d0", 
       "./dist");`
    }
  }
}
</script>