<template lang="pug">
app-page(:active="$store.state.menu.configuration.page")
  header.header(role="header" slot="header")
    div.index {{ $store.state.menu.configuration.page }}
    h1 {{ $store.state.menu.configuration.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2(id="tidory.config.js") tidory.config.js #[span.version 티도리 7.0]
      p #[b tidory.config.js] 파일은 티도리 프레임워크를 위한 환경설정 파일입니다. 템플릿에서 쓰이는 변수가 아닌, #[b 오직 프레임워크의 동작]만을 위해 사용되는 환경변수만 선언되는 파일입니다. 예를 들어 빌드 및 배포를 위한 #[b 티스토리 세션] 값이나 프리뷰를 보기위한 모드 설정 등이 해당됩니다.
      pre(data-label="tidory.config.js")
        code.lang-javascript {{ tidoryConfig }}
      h3(id="ts_session") ts_session
      p #[b 티스토리 세션] 값입니다. 티스토리에 로그인 한 이후 #[b 쿠키 저장소]에 보면 #[b TSSESSION] 이라는 값이 있는데, 그것을 넣으면 됩니다. 해당 변수는 세션값이기에 절대 외부로 노출되어서는 안 되며 해당 프레임워크에는 스킨을 #[b 프리뷰]하거나 #[b 배포]하기 위한 용도로만 사용됩니다.
      h3(id="url") url
      p #[b 티스토리 블로그 주소]입니다. 세션과 마찬가지로 #[b 프리뷰]하거나 #[b 배포]를 하기 위해 사용됩니다. 자신이 가지고 있는 블로그여야 합니다.
      h3(id="preview.mode") preview.mode
      p #[b 프리뷰 모드]입니다. #[b 프리뷰 서버]를 사용할 때 어느 페이지를 기점으로 프리뷰 할 지 설정합니다. #[b 홈, 글, 카테고리, 태그, 위치로그, 미디어로그, 방명록] 모드가 있으며 각각 #[b index. entry, category, tag, location, media, guestbook] 에 대응합니다.
      h3(id="build.public_path") build.public_path
      p #[b 컴포넌트 자원 공개경로]를 설정합니다. 컴포넌트와 같이 자바스크립트를 통해 이미지와 같은 리소스를 사용하면 티스토리에 의해 경로가 자동으로 변환되지 않아 올바르게 로드될 수 없습니다. 따라서 #[b 공개 경로(Public Path)]를 설정해주어야 합니다. 해당 주소는 블로그마다 다릅니다.   
      h3(id="extends") extends(webpackConfig: Object)
      p #[b 웹팩 설정 확장]입니다. 파라매터로 웹팩 오브젝트가 들어가며 기본 웹팩설정 이외에 확장해서 사용할 수 있습니다. 다음과 같이 사용할 수 있습니다.
      pre(data-label="tidory.config.js")
        code.lang-javascript {{ webpackConfig }}
    article.paragraph
      h2(id="env") .env
      p #[b .env] 환경설정 파일은 템플릿 내부 또는 #[b app.js] 에서 사용하는 상수 설정 파일입니다. 프레임워크에서 직접 사용하는 것이 아닌 템플릿에서 사용된다는 점에서 #[b tidory.config.js] 와 구별됩니다. 예를 들어 티스토리에 API에 등록된 앱을 사용하기 위해 다음과 같이 #[b 티스토리 API] 로그인을 위한 상수가 정의되어 있다고 가정해봅시다.
      pre
        code.lang-none {{ env }}
      p 이제 이렇게 정의된 환경변수는 #[b 템플릿 내부]와 #[b 웹팩 설정], 그리고 #[b 컴포넌트]에서 사용할 수 있습니다. 환경변수는 #[b 컴파일타임]에 #[b process.env] 객체 아래에 정의됩니다. 다음과 같이 말이죠!
      pre
        code.lang-pug {{ form }}
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.left: a(:href="$store.state.menu.framework.href") #[i.fas.fa-angle-left] {{ $store.state.menu.framework.label }} 
      div.right: a(:href="$store.state.menu.distribute.href") {{ $store.state.menu.distribute.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  components: {
    AppPage
  },
  data() {
    return {
      tidoryConfig: `/**
 * Tistory session cookie value
 * '195fd2d417429d34ce6ced9a2a460fe55b69f6a3'
 */
ts_session: null,

/**
 * Tistory blog URL
 * 'https://appwriter.tistory.com'
 */
url: null,

/** 
 * Preview
 */
preview: {
  /**
   * Preview Mode
   * 
   * index 
   * entry 
   * category 
   * tag,
   * location
   * media,
   * guestbook
   */
  mode: 'index'
},

/**
 * Build
 */
build: {
  /**
   * Assets public path
   * 'https://tistory2.daumcdn.net/tistory/2710108/skin/images/'
   */
  public_path: null
},

/**
 * Webpack configuration extends
 */
extends(webpackConfig) {
  // ...
}`,
      webpackConfig: `extends(webpackConfig) {
  webpackConfig.module.rules.push({
    test: /\.styl(us)?$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'stylus-loader'
    ]
  });
}`,
      env: `TISTORY_CLIENT_ID=dc08305218d22fb1af479b044d4707d0
TISTORY_CALLBACK=http://localhost:8080`,
      form: `form(method="GET" action="https://www.tistory.com/oauth/authorize/")
  input(type="hidden" 
    name="client_id"
    value=\`\${process.env.TISTORY_CLIENT_ID}\`)
  input(type="hidden" 
    name="redirect_uri" 
    value=\`\${process.env.TISTORY_CALLBACK}\`)
  input(type="hidden" name="response_type" value="token")
  button(type="submit") Sign in with TISTORY`
    }
  }
}
</script>