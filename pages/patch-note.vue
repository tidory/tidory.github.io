<template lang="pug">
AppPage(index=8)
  header.header(role="header" slot="header")
    div.index 08
    h1 티도리 6.1
  main.text(slot="text" role="text")
    article.paragraph
      h2 프리뷰(Preview) 서버
      p 이제 개발서버 뿐만 아니라 티스토리 스킨 치환자가 해석된 상태로 개발을 진행할 수 있습니다. 바로 #[b 프리뷰(Preview)] 서버입니다! 프리뷰 서버는 티스토리 서버와 직접 통신하여 템플릿을 컴파일하고 해석된 #[b HTML] 코드를 받아 브라우저에 렌더링합니다. 프리뷰 서버는 #[b tidory preview] 명령어를 사용하여 구동시킬 수 있습니다.
      pre
        code.lang-bash tidory preview
    article.paragraph
      h2 배포(Distribute) 모드
      p 티도리 프레임워크에 부족했던 것이 있었다면 아무래도 배포모드가 아닐까 싶습니다. 하지만 이제 그것도 해결되었습니다. #[b tidory deploy] 는 현재 사용 중인 티스토리 스킨을 덮어쓰고, #[b tidory store] 는 스킨 저장소에 저장합니다.
      pre
        code.lang-bash
        | # Overwrite
        | tidory deploy
        | # Store TISTORY SKIN on Skin Storage
        | tidory store TISTORY_SKIN
    article.paragraph
      h2 환경변수
      P 프리뷰 서버와 배포 모드를 위해서는 #[b .env] 파일에 #[b BLOG_URL, TSSESSION] 변수를 필수적으로 설정해야합니다. #[b BLOG_URL] 은 테스트할 티스토리 블로그이고 #[b TSSESSION] 변수는 현재 자신이 로그인한 티스토리에서 사용하고 있는 #[b 세션쿠키]의 값입니다. 티스토리에 로그인하고 개발자 도구를 열고 #[b 쿠키 저장소]를 확인하여 #[b TSSESSION] 값을 넣으십시오!
      pre(data-label=".env")
        code.lang-none {{ env }}
</template>

<script>
import AppPage from '~/components/AppPage.vue';

export default {
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