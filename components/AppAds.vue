<template lang="pug">
div#ads(role="advertisement")
  a(href="https://www.inflearn.com/course/%ed%94%84%eb%a0%88%ec%9e%84%ec%9b%8c%ed%81%ac/" target="_blank")
    img.banner(src="https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/jms_tistory.jpg")
  app-google-adsense(
    data-ad-layout="in-article"
    data-ad-format="fluid"
    data-ad-slot="6481206507"
  )
  app-google-adsense(
    data-ad-format="auto"
    data-ad-slot="2231056024"
  )
</template>

<script>
import AppGoogleAdsense from './AppGoogleAdsense.vue';

export default {
  components: {
    AppGoogleAdsense
  }
}
</script>

<style lang="stylus">
@media all and (min-width: 1170px)
  #ads
    position absolute
    top 290px
    left 1120px
    &, *
      width 280px
    .banner
      border-radius 5px
      margin-bottom 8px
@media all and (max-width: 1170px)
  #ads
    display none
</style>
