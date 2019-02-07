<template lang="pug">
AppPage(index=0)
  header.header(role="header" slot="header")
    div.index 01
    h1 티도리 프레임워크를 소개합니다
  main.text(slot="text" role="text")
    article.paragraph
      h2 티스토리 스킨 제작 프레임워크
      p 아직도 티스토리 스킨을 개발할 때 HTML에 생으로 코딩하시나요? #[b 티도리 프레임워크]는 #[b 티스토리 스킨 제작]을 위해 고안된 프레임워크입니다. 개발자의 입맛에 맞게 다양한 기능을 사용하여 신속하고 #[b 재사용성이 높은 스킨]제작을 목적으로 하고 있습니다. 프레임워크는 어플리케이션을 빠르게 개발하기 위해 제공되는 #[b 틀]같은 존재입니다. 프레임워크가 #[b 개발의 시작부터 배포까지 모든 것을 책임]지므로 사용자는 비지니스 로직에 집중하기만 하면 됩니다. 설정만 해두면 명령어 한 번만 입력하면 뚝딱이랍니다.
    article.paragraph  
      h2 템플릿 분리
      p(style="text-align: center;")
        img(src="~assets/images/webpack.png")
      p 기존의 스킨개발 방식은 하나의 HTML에 #[b 헤더, 본문, 푸터, 사이드바]를 모두 몰아넣는 방식이었습니다. 티도리 프레임워크에서는 #[b 웹팩(Webpack)]을 번들링도구로 사용합니다. 개발과정부터 하나의 파일에 모두 넣을 필요가 없습니다. 개발단계에서 #[b 기능별로 분리]하여 다른 스킨을 제작할 때 #[b 재사용]할 수 있습니다. 또한 #[b 프론트엔드 템플릿엔진]의 일종인 #[b 퍼그(pug)]를 사용하므로 코드의 길이가 줄어들기 때문에 가독성이 향상됩니다.
    article.paragraph  
      h2 싱글 파일 템플릿
      p 기능별로 분리된 템플릿을 관리할 때 #[b CSS, Javascript]를 별도로 분리하여 관리할 필요가 없습니다. 하나의 템플릿파일에 #[b style, script] 가 포함되어 빌드할 때는 #[b style.css, script.js 파일로 자동으로 분리]됩니다!
      p 여기에 예시로 작성된 #[b HelloWorld.pug] 템플릿이 있습니다. 이것을 빌드하면 어떻게될까요?
      pre(data-label="HelloWorld.pug")
        code.lang-pug {{ index }}
      p 위의 템플릿은 빌드시 각각 #[b skin.html, styls.css, script.js] 파일로 나뉘게 됩니다. #[b skin.html] 은 티스토리의 메인 스킨파일이고 #[b style.css] 파일은 스킨의 메인스타일을 담당하며 #[b script.js] 파일은 #[b webpack] 번들링으로 생성되는 #[b app.js] 이외에 사용자 정의 스크립트가 담겨있는 파일입니다.
    article.paragraph  
      h2 자바스크립트 프레임워크
      p
        img(src="~assets/images/vue-react.png" style="width: 100%;")
      p 대표적 자바스크립트 프레임워크인 #[b 뷰(Vue), 리액트(React), 앵귤러(Angular)]중에서 #[b 뷰와 리액트]를 미리 프로젝트에 설정해두었습니다. 따라서 두 개의 프레임워크를 사용하여 티스토리 스킨을 #[b 어플리케이션] 레벨까지 올릴 수 있습니다. 티스토리 스킨을 #[b SPA(Single Page Application)]로 격상시키세요!
    article.paragraph  
      h2 라이브 개발 서버
      p 티도리 프레임워크는 두 개의 #[b 라이브 서버]를 제공합니다. 하나는 치환자가 해석된 서버, #[b 프리뷰(Preivew)]서버라 칭합니다. 또 하나는 치환자가 해석되지 않은 서버, #[b 개발(Development)]서버입니다. 두 서버는 공통적으로 로컬에 서버를 동작시키고 #[b 자동으로 브라우저를 오픈]시킵니다. 템플릿 파일이 수정되면 브라우저는 자동으로 #[b 새로고침(Reload)]됩니다.
    article.paragraph
      h2 빌드 및 배포
      p 개발을 마치고나면 해야 할 일은 #[b 빌드 및 배포]입니다. #[b 빌드]는 스킨 템플릿을 빌드하고 #[b skin.html], #[b style.css], 그리고 정적 파일이 있는 #[b images] 폴더를 생성합니다. 또한 티스토리 스킨 메타파일인 #[b index.xml, preview*.jpg] 를 복사합니다. #[b 배포]는 빌드된 스킨을 #[b 현재 티스토리 스킨에 적용]하거나, #[b 스킨저장소]에 저장할 수 있습니다.
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.right: a(href="/docs/get-started/") 시작하기 #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  components: {
    AppPage
  },
  data() {
    return {
      index: `//- style.css
style.
  body {
    margin: 0px;
    padding: 0px;
  }
//- skin.html
h1 Hello, World!
//- script.js
script.
  console.log("Hello, World!");`
    }
  }
}
</script>