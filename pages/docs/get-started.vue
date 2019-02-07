<template lang="pug">
AppPage
  header.header(role="header" slot="header")
    div.index 02
    h1 시작하기
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="시작하기 전에") 시작하기 전에
      p 티도리 프레임워크는 #[b HTML, CSS, Javascript]에 대한 기본적인 지식이 있다고 가정합니다. 따라서 해당 지식이 없다면 프레임워크를 배우기는 어려울 수 있습니다. 또한 템플릿 엔진으로 #[b 퍼그(pug)]를 사용합니다. 퍼그는 HTML의 코드 길이를 줄여주는 것은 물론, 그 외 부가적으로 다양한 기능을 제공하는 템플릿 엔진입니다. 따라서 기본 지식이외에 #[b 퍼그]를 추가적으로 알고있어야 합니다.
    article.paragraph  
      h2(id="티도리") 티도리(Tidory)
      p #[b 티도리(Tidory)]는 티도리 프레임워크와 상호작용하기 위한 #[b CLI(Command Line Interface)] 환경에서 실행하는 #[b NPM(Node Package Manager)] 패키지입니다. 다음과 같은 명령을 통해 티도리를 설치해야합니다.
      p
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
      p
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
      h2(id="환경설정") 환경설정
      p 프로젝트 설치가 끝나고 나면 해야할 것이 바로 #[b 환경설정]입니다. 환경설정은 #[b .env] 파일에서 합니다. 환경설정이 무엇인지 알고싶다면 #[nuxt-link(to="/docs/directory#env") 환경설정]을 참고해주세요. 자신이 가지고 있는 어떤 블로그를 프리뷰하고 배포할 지 설정을 해주어야 합니다. 다른 것들은 상황에 따라 넣어도 되고 삭제해도 되지만, 필수적으로 있어야 하는 것은 #[b BLOG_URL, TSSESSION] 변수입니다.
      p
        pre(data-label=".env")
          code.lang-none {{ env }}
      p 여기서 #[b TSSESSION] 변수는 브라우저에서 제공하는 #[b 개발자도구(F12)]를 열고 #[b 쿠키 저장소]에서 #[b TSSESSION] 값을 넣어주시면 됩니다. #[b 세션]쿠키는 중요한 정보이므로 절대 외부에 노출되어서는 안됩니다. 또한 세션이기 때문에 로그인하고 로그아웃하고 재 로그인하면 값이 변경되므로 주의하십시오.
    article.paragraph  
      h2(id="라이브 서버") 라이브(Live) 서버
      p 데모로 작성되어있는 앱을 어떻게 실행시키면 될까요? 간단하게 알아보도록 하겠습니다. #[b tidory start] 명령을 사용하면 #[b http://localhost:8080] 주소로 #[b webpack-dev-server] 를 실행시킬 수 있습니다. 프리뷰 서버는 #[b tidory preview] 로 시작할 수 있으며 #[b http://localhost:3000] 에서 시작합니다.
      h3(id="개발 서버") 개발(Development) 서버
      p #[b 개발(Development)]서버는 #[b 치환자가 동작하지 않은 모습 그대로]를 보여줍니다. 해석 이전에 스킨자체의 모습을 볼 때 주로 사용합니다. 또한 치환자를 직접넣기 전에 더미데이터로 디자인을 구성할 때 사용하는 것도 좋습니다. 즉 개발서버로 개발하다가 스킨의 완성이 가까워지면 프리뷰서버로 넘어가는 것이죠.
      h3(id="프리뷰 서버") 프리뷰(Preview) 서버 #[span.version 티도리 6.1]
      p #[b 프리뷰(Preview)]서버는 티스토리에 직접 요청을 보내고 #[b 치환자가 해석된 모습]을 렌더링합니다. 홈, 글, 카테고리 등 #[b 프리뷰 모드(Mode)]를 지정하여 티스토리 서버에 올라갔을 때의 모습을 볼 수 있습니다.
      p
        pre
          code.lang-bash
            | # Development Server
            | tidory start
            | # Preview Server
            | # tidory preview
    article.paragraph
      h2(id="빌드 및 배포") 빌드 및 배포
      p #[b 빌드 및 배포]는 기본적으로 #[b tidory build] 명령과 #[b tidory store] 가 있습니다. 빌드와 배포를 하는 방법에는 몇가지 있지만, 시작하기 단계에서는 자세한 설명없이 넘어가도록 하겠습니다. 자세한 내용은 #[nuxt-link(to="/docs/distribute") 빌드 및 배포] 문서를 참고해 주시기 바랍니다.
      p
        pre
          code.lang-bash
            | # For Distribute
            | tidory build
            | # Store TISTORY SKIN on Skin Storage
            | # tidory store TISTORY_SKIN
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: nuxt-link(to="/") #[i.fas.fa-angle-left] 티도리 프레임워크 
      div.right: nuxt-link(to="/docs/directory/") 디렉토리 #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  mounted() {
    this.$store.commit('activeMenu', 1);
  },
  components: {
    AppPage
  },
  data() {
    return {
      env: `BLOG_URL=https://appwriter.tistory.com
TSSESSION=`
    }
  }
}
</script>