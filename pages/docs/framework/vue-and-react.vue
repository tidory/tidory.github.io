<template lang="pug">
  section#document(role="document")
    h1#title 뷰 & 리액트
    Page
      div#jumpMenu(slot="jumpMenu" role="jumpMenu")
        h1 뷰 & 리액트
        div.headers
          h2: a(href="#컴포넌트") 컴포넌트(Component)
          h3: a(href="#언제 사용해야 할까?") 언제 사용해야 할까?
          h2: a(href="#뷰") 뷰(Vue.js)
          h2: a(href="#리액트") 리액트(React)
      div#text(slot="text" role="text")
        article.box
          h2(id="컴포넌트") 컴포넌트(Component)
          div.paragraph
            | 뷰 또는 리액트 <b>컴포넌트(Component)</b> 를 사용하면 티스토리 스킨을 <b>어플리케이션(Application)</b> 레벨까지 올릴 수 있습니다. <b>npm</b> 이 가진 방대한 레포지토리를 사용하여 <b>라우팅과 데이터베이스</b> 모듈을 사용할 수도 있습니다. 두 프레임워크 중 하나라도 사용하면 <b>SPA(Single Page Application)</b> 을 만들기 위한 준비는 완료 된 것입니다.
          div.paragraph
            h3(id="언제 사용해야 할까?") 언제 사용해야 할까?
            div.paragraph
              | <b>사용자에게 커스텀을 허용하지 않는 경우</b>, 컴포넌트는 자바스크립트를 통해 렌더링되고 웹팩을 통해 번들링 되기 때문에 커스텀하기 정말 어렵습니다.
            div.paragraph
              | <b>스킨 코드와 완전 무관한 경우</b>, <b>skin.html</b> 내부에 있는 자바스크립트가 아닌, <b>app.js</b> 로 렌더링되는 <b>DOM(Document Object Model)</b> 은 <b>티스토리 치환자 및 전용 태그</b> 를 해석하지 못합니다. 따라서 컴포넌트에는 스킨과 무관한 코드가 들어가야 합니다. 예를 들어 사이드바에 구글 애드센스를 설치하고 싶은 경우가 있겠습니다.
        article.box
          h2(id="뷰") 뷰(Vue.js)
          div.paragraph      
            pre
              code(class="language-html")
                | {{ component }}
          div.paragraph      
            pre
              code(class="language-pug")
                | {{ pugWithComponent }}
          div.paragraph
            | <b>뷰 컴포넌트</b> 를 템플릿에서 사용하려면 <b>webpack.entry.js</b> 에 컴포넌트를 등록해야 인식합니다. <b>Vue.component</b> 메서드를 이용하여 컴포넌트를 전역적으로 등록하시기 바랍니다.
          div.paragraph      
            pre
              code(class="language-javascript")
                | {{ registerComponent }}
        article.box
          h2(id="리액트") 리액트(React)
          div.paragraph      
            pre
              code(class="language-js")
                | {{ ReactComponent }}
          div.paragraph      
            pre
              code(class="language-pug")
                | {{ pugWithComponent2 }}
          div.paragraph
            | <b>리액트 컴포넌트</b> 를 템플릿에서 사용하려면 <b>ReactDOM</b> 을 사용하여 <b>webpack.entry.js</b> 에 컴포넌트를 바인딩하세요.
          div.paragraph      
            pre
              code(class="language-javascript")
                | {{ registerReactComponent }}
</template>

<script>
  import Page from '~/components/Page.vue';

  export default {
    data: function() {
      return {
        component: `assets/components/hello-world.vue
        
\<template\>
  <h1>Tistory skin framework, Tidory</h1>
\<\/template\>
\<script\>
  export default {
    /** empty */
  }
\<\/script\>`,
        ReactComponent: `assets/components/HelloWorld.js
        
import React from 'react'

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Tistory skin framework, Tidory</h1>
    )
  }
}

module.exports = HelloWorld;`,
        pugWithComponent: `*.pug

//- container
div#app
  //- 뷰 컴포넌트를 사용합니다.
  hello-world
`,
        pugWithComponent2: `*.pug

//- container
div#app
`,
      registerComponent: `webpack.entry.js
      
import Vue from 'vue'

Vue.component(
  'hello-world',
   require('~/assets/components/hello-world.vue').default
);

new Vue({
  el: '#app',
});`,
      registerReactComponent: `webpack.entry.js
      
import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = require('~/assets/components/HelloWorld');

const rootElement = document.getElementById('app');
ReactDOM.render(<HelloWorld />, rootElement);`
      }
    },
    head() {
      return {
        title: "뷰 & 리액트 - 티도리(TIDORY)",
        meta: [
          { content:  '뷰 & 리액트 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    },
    components: {
      Page
    },
  }
</script>