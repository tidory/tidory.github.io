<template lang="pug">
app-page
  header.header(role="header" slot="header")
    div.index {{ $store.state.patchNote.page }}
    h1 {{ $store.state.patchNote.label }}
  main.text(slot="text" role="text")
    article.paragraph
      h2 티도리 7.0
      p #[b 티도리 7.0] 에서 큰 변화는 없습니다. 내부적으로 몇가지 설정의 변화와 복잡성 해소를 위한 템플릿의 몇가지 변화가 있을 뿐이지만, 메인 버전이 바뀐 것은 기존 #[b 티도리 6.1] 버전과는 설정상 호환이 안 되기 때문입니다.
      h2 tidory.config.js
      p #[b tidory.config.js] 파일이 새로 추가되었습니다. 해당 파일은 프레임워크에서 사용하기 위한 환경변수 파일입니다. 즉, 템플릿에 사용되는 #[b .env] 파일과는 구별됩니다. 이는 실제로는 템플릿에 사용되지 않으면서 선언되어 있어 자칫 혼동할 여지가 생기는 것으로 구분할 필요성이 생겼습니다. 따로 #[a(:href="$store.state.menu.configuration.href") 환경설정] 가이드가 마련되어 있습니다. 
    article.paragraph
      h2 webpack.base.conf.js
      p #[b webpack.base.conf.js] 파일은 길기만 했던 웹팩 설정 파일이었습니다. 과감하게 삭제하고 환경설정과 결합했으며 이제 복잡한 설정구문을 볼 필요는 없습니다.
    article.paragraph
      h2 webpack.entry.js
      p #[b webpack.entry.js] 파일은 #[b assets/app.js] 파일로 이동되었습니다.
  footer.footer(slot="footer" role="footer")
    div.arrows
      div.right: a(:href="$store.state.menu.home.href") {{ $store.state.menu.home.label }} #[i.fas.fa-angle-right]
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
  components: {
    AppPage
  }
}
</script>