<template lang="pug">
  section#tidory-index-wrapper
    h1.section-title 티도리 시작하기
    article.categories
      h1 티도리 시작하기
      div.categories
        h2: a(href="#티스토리 스킨 제작 프레임워크") 티스토리 스킨 제작 프레임워크
        h2: a(href="#시작하기 전에") 시작하기 전에
        h2: a(href="#참고 사이트") 참고사이트
        h2: a(href="#설치하기") 설치하기
        h3: a(href="#티도리 프로젝트 설치") 티도리 프로젝트 설치
        h2: a(href="#개발서버 시작") 개발서버 시작
    article.box
      h2(id="티스토리 스킨 제작 프레임워크") 티스토리 스킨 제작 프레임워크
      div.paragraph
        | <b>티도리</b> 는 <b>티스토리 스킨 제작</b> 을 위해 고안된 <b>프레임워크</b> 입니다. 개발자의 입맛에 맞게 다양한 기능을 사용하여 신속하고 재사용성이 높은 스킨제작을 목적으로 하고 있습니다.
      div.paragraph
        | * 프레임워크는 어플리케이션을 빠르게 개발하기 위해 제공되는 '틀' 같은 존재입니다.
      div.paragraph
        | 프레임워크 관련 피드백 및 질문사항, 구인관련 사항은 <b>pronist@naver.com</b> 으로 보내주시면 감사하겠습니다.
    article.box
      h2(id="시작하기 전에") 시작하기 전에
      div.paragraph
        | 티도리 프레임워크를 시작하기 전에 다음과 같은 도구들이 필요합니다.
      div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
        p Programming Language: HTML, CSS, JS
        p Extension: Pug
        p
          | Package Manager: npm
      div.paragraph
        | * npm(Node Package Manager): <b>npm</b> 은 자바스크립트 모듈 및 라이브러리가 등록되어있는 저장소를 사용하여 자신 또는 다른 사람이 제작한 패키지를 관리할 수 있도록해주는 도구입니다. 서버에서 사용하는 <b>node.js</b> 와 관련이 깊습니다.
      div.paragraph  
        | * Pug: <b>Pug</b> 는 <b>HTML</b> 페이지의 코드 길이를 줄여주고 각종 부가기능을 추가하여 마크업을 빠르게 작성할 수 있도록 해주는 <b>확장언어</b> 입니다.
    article.box
      h2(id="참고 사이트") 참고사이트
      div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
        p
          | Pug: 
          a.tx-link(href='https://pugjs.org/api/getting-started.html', target='_blank') https://pugjs.org/api/getting-started.html
        p
          | Node Package Manager: 
          a.tx-link(href='https://www.npmjs.com/get-npm', target='_blank') https://www.npmjs.com/get-npm
    article.box
      h2(id="설치하기") 설치하기
      div.paragraph
        | 먼저 <b>npm</b> 을 통해 모듈을 설치해야 합니다. <b>tidory</b> 모듈은 <b>티도리 프로젝트 템플릿</b> 과 상호작용하여 작동합니다. <b>CLI(Command Line Interface)</b> 상에서 명령을 통해 실행합니다.
      div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
        p(style='clear: none; float: none; text-align: left;') $ npm install -g tidory
      div.paragraph
        | * 티도리 모듈에 대한 문서는 npm 패키지에 포함되어 있습니다. <a href="https://www.npmjs.com/package/tidory" target='_blank'>https://www.npmjs.com/package/tidory</a> 를 참고해주시기 바랍니다.
      div.paragraph
        | * CLI(Command Line Interface): <b>CLI</b> 는 명령줄을 사용하여 지시를 내릴 수 있는 환경을 말합니다. <b>Windows</b> 에서 사용하는 <b>cmd</b>, <b>powershell</b> 이나 <b>리눅스</b> 의 <b>터미널(Terminal)</b> 정도가 있습니다.
      div.paragraph
        h3(id="티도리 프로젝트 설치") 티도리 프로젝트 설치
        div.paragraph
          | <b>Tidory</b> 를 설치했다면, 프로젝트 템플릿을 <b>git</b> 저장소로 부터 받아올 수 있습니다. 다음과 같은 명령을 사용하여 템플릿을 받아온 뒤, 해당 폴더로 이동합니다.
        div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
          p
            | $ tidory new &lt;TISTORY_SKIN_NAME&gt;
            | $ cd TISTORY_SKIN_NAME
            | $ npm install
        div.paragraph
          | * 기본 프로젝트 템플릿은 티도리 <b>github</b> 페이지에서 찾을 수 있습니다. <a href="https://github.com/pronist/tidory-starter-template" target='_blank'>https://github.com/pronist/tidory-starter-template</a>
      div.paragraph
        | 데모로 작성되어있는 앱을 어떻게 실행시키면 될까요? 간단하게 알아보도록 하겠습니다. <b>tidory start</b> 명령을 사용하면 <b>http://localhost:8080</b> 주소로 <b>webpack-dev-server</b> 를 실행시킬 수 있습니다. 템플릿 파일이 수정되면 <b>자동으로 리로드</b> 됩니다.
      div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
        p
          | $ tidory start
      div.paragraph
        | 추가적으로, 프로젝트 템플릿에는 <b>설정파일(.env)</b> 이 <b>.env.example</b> 이라는 이름으로 되어있습니다. 해당 파일의 이름을 <b>.env</b> 파일로 변경해주세요.
</template>
<script>
  export default {
    head() {
      return {
        script: [
          {
            type: 'application/ld+json',
            innerHTML: `
              { 
                "@context" : "http://schema.org",
                "@type" : "Organization",
                "name": "티스토리 프레임워크, 티도리(TIDORY)",
                "url" : "http://www.tidory.com",
                "sameAs": [
                  "http://www.tistory.com/",
                  "https://www.github.com/pronist/tidory",
                  "https://www.npmjs.com/package/tidory"
                ]
              }
            `
          }
        ],
        __dangerouslyDisableSanitizers: ['script']
      }
    }
  }
</script>