<template lang="pug">
app-page(:active="$store.state.menu.getStarted.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.getStarted.page }}
    h1 {{ $store.state.menu.getStarted.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="시작하기 전에") 시작하기 전에
      p 티도리 프레임워크는 #[b HTML, CSS, Javascript]에 대한 기본적인 지식이 있다고 가정합니다. 따라서 해당 지식이 없다면 프레임워크를 배우기는 어려울 수 있습니다. 또한 템플릿 엔진으로 #[b 퍼그(pug)]를 사용합니다. 퍼그는 HTML의 코드 길이를 줄여주는 것은 물론, 그 외 부가적으로 다양한 기능을 제공하는 템플릿 엔진입니다. 따라서 기본 지식이외에 #[b 퍼그]를 추가적으로 알고있어야 합니다.
    article.paragraph  
      h2(id="티도리") 티도리(Tidory)
      p #[b 티도리(Tidory)]는 티도리 프레임워크와 상호작용하기 위한 #[b CLI(Command Line Interface)] 환경에서 실행하는 #[b NPM(Node Package Manager)] 패키지입니다. 다음과 같은 명령을 통해 티도리를 설치해야합니다.
      pre
        code.lang-bash
          | # Install TIDORY module
          | npm install -g tidory
      p
        blockquote.blockquote-type-2
          | * CLI(Command Line Interface): 명령줄 인터페이스를 의미합니다. 이것을 지원하는 환경에는 윈도우의 cmd, powershell 그리고 리눅스의 terminal 이 있습니다.
          br
          | * NPM(Node Package Manager): 자바스크립트 런타임 환경인 node.js 용 패키지 관리자입니다. 프론트엔드과 백엔드 구분없이 다양한 패키지를 이용할 수 있습니다.
    article.paragraph
      h2(id="티도리 프로젝트 설치") 티도리 프로젝트 설치
      p #[b 티도리]를 설치했다면 프로젝트 템플릿을 #[b github] 저장소로부터 받아올 수 있습니다. 다음과 같은 명령을 사용하여 템플릿을 받아온 뒤, 프로젝트 구동을 위한 #[b NPM] 패키지들을 설치하십시오.
      pre
        code.lang-bash
          | # Download TIDORY project
          | tidory new MyApp
          | # Move into project folder
          | cd MyApp
          | # Install NPM Packages
          | npm install
      p 
        blockquote.blockquote-type-2 기본 프로젝트 템플릿은 #[b 깃허브 저장소] #[a(href="https://github.com/pronist/tidory-starter-template") https://github.com/pronist/tidory-starter-template] 에서 찾을 수 있습니다.
    article.paragraph  
      h2(id="라이브 서버") 라이브(Live) 서버
      p 데모로 작성되어있는 앱을 어떻게 실행시키면 될까요? 간단하게 알아보도록 하겠습니다. #[b tidory start] 명령을 사용하면 #[b http://localhost:8080] 주소로 #[b webpack-dev-server] 를 실행시킬 수 있습니다. 프리뷰 서버는 #[b tidory preview] 로 시작할 수 있으며 #[b http://localhost:3000] 에서 시작합니다.
      h3(id="개발 서버") 개발(Development) 서버
      p #[b 개발(Development)]서버는 #[b 치환자가 동작하지 않은 모습 그대로]를 보여줍니다. 해석 이전에 스킨자체의 모습을 볼 때 주로 사용합니다. 또한 치환자를 직접넣기 전에 더미데이터로 디자인을 구성할 때 사용하는 것도 좋습니다.
      pre
        code.lang-bash
          | # Development Server
          | npm start # tidory start
      h3(id="프리뷰 서버") 프리뷰(Preview) 서버 #[span.version 티도리 6.1]
      p #[b 프리뷰(Preview)]서버는 티스토리에 직접 요청을 보내고 #[b 치환자가 해석된 모습]을 렌더링합니다. 홈, 글, 카테고리 등 #[b 프리뷰 모드(Mode)]를 지정하여 티스토리 서버에 올라갔을 때의 모습을 볼 수 있습니다. 프리뷰 서버를 실행하려면 #[a(:href="$store.state.menu.configuration.href") 환경설정]에서 #[b ts_session, url, mode] 가 설정되어 있어야 합니다.
      pre
        code.lang-bash
          | # Preview Server
          | npm run preview # tidory preview
    article.paragraph
      h2(id="빌드 및 배포") 빌드 및 배포
      p #[b 빌드 및 배포]는 기본적으로 #[b tidory build] 명령과 #[b tidory store] 가 있습니다. 빌드와 배포를 하는 방법에는 몇가지 있지만, 시작하기 단계에서는 자세한 설명없이 넘어가도록 하겠습니다. 자세한 내용은 #[a(:href="$store.state.menu.distribute.href") 빌드 및 배포] 문서를 참고해 주시기 바랍니다.
      pre
        code.lang-bash
          | # Build
          | npm run build # tidory build
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: a(:href="$store.state.menu.home.href") #[i.fas.fa-angle-left] {{ $store.state.menu.home.label }}
      div.right: a(:href="$store.state.menu.directory.href") {{ $store.state.menu.directory.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  components: {
    AppPage
  }
}
</script>