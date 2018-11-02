<template lang="pug">
section#tidory-prologue-wrapper
    h1.section-title 티도리 6.0
    article.categories
      h1 티도리 6.0
      div.categories
        h2: a(href="#프레임워크의 방향성") 프레임워크의 방향성
        h2: a(href="#bye") 복잡한 것들은 안녕
        h3: a(href="#티도리 API") 티도리 API
        h3: a(href="#라우팅과 데이터베이스") 라우팅과 데이터베이스
        h3: a(href="#테스팅") 테스팅
        h3: a(href="#스킨 미리보기") 스킨 미리보기
        h2: a(href="#뷰 & 리액트면 충분해!") 뷰 & 리액트면 충분해!
        h3: a(href="#컴포넌트") 컴포넌트(Component)
        h2: a(href="#티도리 모듈") 티도리 모듈
        h2: a(href="#디렉토리 간소화") 디렉토리 간소화
        h2: a(href="#인라인 속성") 인라인 속성
    article.box
      h2(id="프레임워크의 방향성") 프레임워크의 방향성
      div.paragraph
        | 티도리를 사용하여 티스토리 스킨을 여러번 개발해보니 거의 사용하지 않는 기능이 다수 있었으며 <b>오버엔지니어링(Overengineering)</b> 에 가까운 기능을 프레임워크가 제공하고 있었다는 것을 알게 되었습니다. <b>오지랖</b> 이 너무 넓었다는 얘기가 되겠지요. 본 프레임워크는 뷰(Vue.js) 프레임워크를 롤모델로 삼아 <b>진입장벽</b> 을 낮추고 <b>빠른 러닝코스</b> 를 갖추도록 하고자합니다.
    article.box
      h2(id="복잡한 것들은 안녕") 복잡한 것들은 안녕
      div.paragraph
        | <b>티도리 1.0</b> 부터 <b>티도리 5.2</b> 까지 추가하고 또 추가하는, 추가의 연속이었습니다. 이제는 간결하게 잘라낼 시간이 왔습니다. <b>티도리 API</b>, <b>라우팅과 데이터베이스</b>, <b>테스팅</b>, <b>스킨 미리보기</b> 기능을 제거했습니다.
      div.paragraph
        h3(id="티도리 API") 티도리 API
        div.paragraph
          | <b>티도리 API</b> 는 기존에 제공하던 <b>inline</b> 속성 이외에 <b>tidory.config.js</b> 에서 사용하던 것들 <b>(전역변수, 사용자 지정 디렉티브, 이벤트, 비동기 데이터)</b> 을 모두 제거하였습니다. 런타임중에 일어나는 것들이 아니라, 컴파일타임에서 제공하는 기능들은 크게 의미가 없기 때문입니다. 개인적으로 기능이 많은 스킨을 개발하면서도 티도리 API는 거의 사용하지 않았습니다.
        div.paragraph
          | 그나마 사용하던 것이 <b>전역변수</b> 쪽인데, 이마저도 <b>.env</b> 환경설정을 사용하는 것과 퍼그에서 제공하는 <b>믹스인</b> 을 포함하는 것으로 커버가 가능합니다.
        h3(id="라우팅과 데이터베이스") 라우팅과 데이터베이스
        div.paragraph
          | <b>라우팅과 데이터베이스</b> 기능은 위에서 언급한 <b>오버엔지니어링(Overengineering)</b> 입니다. 아래에서 이야기 하게될 <b>뷰 & 리액트 컴포넌트</b> 를 사용하는 것만으로도 관련 모듈을 통해 충분히 커버가 가능하며 프레임워크에서 특정 모듈을 지정해주는 것은 결과적으로 <b>자유도</b> 를 해치는 행위가 되었으며, 진입장벽을 높히는 원인이되었습니다.
        h3(id="테스팅") 테스팅
        div.paragraph
          | <b>테스팅</b> 은 <b>티도리 API</b> 를 테스트하기 위해 만들어졌엇습니다만, 이제는 그것을 사용하지 않기때문에 자연스럽게 같이 사라지게 되었습니다.
        h3(id="스킨 미리보기") 스킨 미리보기
        div.paragraph
          | <b>스킨 미리보기</b> 기능은 도움이 될 수 있었으나, 어떤 때는 동작하고 어떤 때는 동작하지 않는 것으로 매우 불안정했으며, 테스팅 과정또한 바람직하지 못했습니다. 티스토리가 공식적으로 지원하지 않는 이상은 추가 되지 않을 것으로 보여집니다.
    article.box
      h2(id="뷰 & 리액트면 충분해!") 뷰 & 리액트면 충분해!
      div.paragraph
        | 라우팅과 데이터베이스와 같은 삭제당한 기능은 <b>뷰 & 리액트</b> 컴포넌트를 사용하는것으로 해결할 수 있습니다. <b>npm</b> 이 가지고 있는 방대한 레포지토리로는 많은 것을 할 수 있습니다. <b>webpack</b> 을 사용하면서 자바스크립트 프레임워크를 사용하지 않는 것은 득보다 실이 많습니다.
        h3(id="컴포넌트") 컴포넌트(Component)
        div.paragraph
          | 기존에는 <b>뷰(Vue) 컴포넌트</b> 만을 프로젝트에 포함했으나, 이제 <b>리액트(React) 컴포넌트</b> 도 사용할 수 있습니다. <b>assets/components</b> 폴더에 컴포넌트를 작성하고 <b>webpack.entry.js</b> 에서 등록하고 템플릿에서 사용합니다.
    article.box
      h2(id="티도리 모듈") 티도리 모듈
      div.paragraph
        | <b>티도리 모듈</b> 의 사용법이 일부 변경되었습니다. 스킨 미리보기 등의 기능이 사라져 명령 수가 줄었으며 프로젝트를 생성하는 방법이 변경되었고, 빌드 모드에 따른 명령어 분기도 사라졌습니다. 프로젝트를 생성하는 방법은 <b><a href="/#%ED%8B%B0%EB%8F%84%EB%A6%AC%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%84%A4%EC%B9%98">시작하기</a></b> 를, 빌드 모드 변경에 대해서는 <b><a href="/docs/distribution/mode">빌드 및 배포모드</a></b> 를 참고합니다. <b><a href="https://www.npmjs.com/package/tidory">npm</a></b> 를 참고해도 좋습니다.
    article.box
      h2(id="디렉토리 간소화") 디렉토리 간소화
      div.paragraph
        | 기능 삭제로 인해 해당 기능들이 점유하고 있던 디렉토리들이 제거되었습니다. 스킨제작을 위한 필수 디렉토리만 존재하며 <b>컴포넌트(Component)</b> 또한 옵션이기 때문에 <b>assets</b> 폴더 아래로 이동되었습니다.
      div.paragraph
        div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
          pre.
            ├── assets/
            ├── docs/
            │     ├── index.xml
            │     ├── preview256.jpg
            │     ├── preview560.jpg
            │     └── preview1600.jpg
            ├── images/
            ├── layouts/
            │     └── default.pug
            ├── views/
            ├── .env
            ├── app.pug
            ├── index.pug
            ├── webpack.base.conf.js
            └── webpack.entry.js
    article.box
      h2(id="인라인 속성") 인라인 속성
      div.paragraph
        | 스타일과 스크립트를 <b>style.css</b> 와 <b>script.js</b> 로 분리하지 않고 그대로 두기 위해 사용하던 <b>inline</b> 속성의 이름이 혼동을 야기할 수도 있는 것으로 판단되어 <b>scoped</b> 라는 이름으로 재명명 되었습니다. <b><a href="/docs/template/resources">리소스</a></b> 부분을 참고해주세요.
</template>
<script>
  export default {
    head() {
      return {
        title: "패치노트 - 티도리(TIDORY)"
      }
    }
  }
</script>