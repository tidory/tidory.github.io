<template lang="pug">
app-page(:active="$store.state.menu.advanced.framework.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.advanced.framework.page }}
    h1 {{ $store.state.menu.advanced.framework.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2 자바스크립트 프레임워크
      p 티도리 프레임워크에서는 모던 자바스크립트 프레임워크인 #[b 뷰(Vue.js)]와 #[b 리액트(React)]를 지원합니다. #[b 컴포넌트(Component)]를 만들고 포함시켜 템플릿에서 사용할 수 있습니다. 컴포넌트는 사용하고 싶을 때 사용하면 되지만 몇 가지 주의사항이 있으니 알아보도록 합시다.
      h3 언제 사용해야 할까?
      p #[b 사용자에게 커스텀을 허용하지 않는 경우], 컴포넌트는 자바스크립트를 통해 렌더링되고 웹팩을 통해 번들링 되기 때문에 커스텀하기 정말 어렵습니다. 때문에 사용자가 직접 코드를 변경할 필요가 없고 위젯형태로 제공하는 경우라면 컴포넌트가 좋겠네요.
      p #[b 스킨 코드와 완전 무관한 경우], 컴포넌트를 사용하면 #[b DOM(Document Object Model)]이 자바스크립트로 구성되므로 #[b 티스토리가 치환자를 통해 해석하지 못합니다.] 따라서 컴포넌트 내부에 티스토리 치환자를 사용하면 안됩니다. 티스토리가 제공하는 기능이 아닌, 외부에서 제공하는 기능을 넣는 경우에 사용하면 좋습니다.
    article.paragraph
      h2 컴포넌트
      p 뷰 또는 리액트 #[b 컴포넌트(Component)]를 사용하면 티스토리 스킨을 #[b 어플리케이션(Application)]레벨까지 올릴 수 있습니다. #[b npm] 이 가진 방대한 레포지토리를 사용하여 라우팅과 데이터베이스 모듈을 사용할 수도 있습니다. 두 프레임워크 중 하나라도 사용하면 #[b SPA(Single Page Application)]을 만들기 위한 준비는 완료 된 것입니다.
      h3 뷰(Vue.js)
      pre
        code.html {{ vue }}
      pre
        code.pug {{ vueTemplate }}
      p
        blockquote.blockquote-type-2 컴포넌트 #[b 내부]에서 치환자를 쓰면 안 되지만, 컴포넌트 내부로 치환된 값을 넘길 수는 있습니다! 프레임워크가 #[b DOM(Document Object Model)]를 형성하기 전에, 티스토리의 치환이 먼저 발생하기 때문입니다. 이렇게 사용하면 컴포넌트와 치환자가 종속관계를 맺지 않고 컴포넌트는 그저 들어온 값을 활용하는 형태가 됩니다.
      p #[b assets/app.js] 는 #[b 웹팩(Webpack)]의 시작점이 되는 파일입니다. #[b 뷰 컴포넌트]를 템플릿에서 사용하려면 #[b app.js] 에 컴포넌트를 등록해야 인식합니다. #[b Vue.component] 메서드를 이용하여 컴포넌트를 전역적으로 등록하시기 바랍니다.
      pre
        code.javascript {{ vueEntry }}
      h3 리액트(React)
      pre
        code.javascript {{ react }}
      pre
        code.pug {{ reactTemplate }}
      p #[b 리액트 컴포넌트]를 템플릿에서 사용하려면 #[b ReactDOM] 을 사용하여 #[b app.js] 에서 컴포넌트를 #[b #app] 에 바인딩하세요.
      pre
        code.javascript {{ reactEntry }}
    article.paragraph
      h2 리소스
      p #[b 컴포넌트]에서 에셋을 포함하려면 #[b 속성 바인딩] 기능을 사용하거나, 정적파일처럼 포함시키면 됩니다. 우리가 일반적으로 #[b skin.html] 에 #[b ./images/logo.png] 와 같은 형식으로 포함하면 티스토리는 자동으로 에셋의 경로를 #[b CDN(Content Delivery Network)]으로 변경합니다. 컴포넌트에서 정적파일 또는 에셋을 불러오는 경우 자바스크립트를 통한 포함이므로 #[b 스킨 내부에서 별도로 경로 변환을 하지 않습니다.] 따라서 따로 #[b public_path] 설정을 해줄 필요가 있습니다.
      pre
        code.html {{ resource }}
      p
        blockquote.blockquote-type-2 #[b public_path] 설정은 #[a(:href="$store.state.menu.basic.configuration.href") 환경설정]에서 알아볼 수 있습니다.
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: a(:href="$store.state.menu.basic.distribute.href") #[i.fas.fa-angle-left] {{ $store.state.menu.basic.distribute.label }}
      div.right: a(:href="$store.state.menu.advanced.package.href") {{ $store.state.menu.advanced.package.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue'

export default {
  components: {
    AppPage
  },
  data () {
    return {
      vue: `<template>
  <h1>{{ title }}</h1>
</template>

\<script\>
  export default {
    props: ['title']
  }
\<\/script\>`,
      vueTemplate: `div#app
  //- Using Vue Component
  hello-world(title="[##_title_##]")`,
      vueEntry: `import Vue from 'vue'

Vue.component(
  'hello-world',
  require('./components/hello-world.vue').default
);

new Vue({
  el: '#app',
});`,
      react: `import React from 'react'

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Tistory skin framework, Tidory</h1>
    )
  }
}

module.exports = HelloWorld;`,
      reactTemplate: `//- Rendering React Component
div#app`,
      reactEntry: `import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = require('./components/HelloWorld');

const rootElement = document.getElementById('app');
ReactDOM.render(<HelloWorld />, rootElement);`,
      resource: `<template>
  //- PUBLIC_PATH/favicon.png
  <img src="./images/favicon.png">
  //- PUBLIC_PATH/__WEBPACK_CHANGED__.png
  <img v-bind:src='require("../images/favicon.png")'>
</template>`
    }
  }
}
</script>
