<template lang="pug">
div#ads(role="advertisement")
  a(href="https://www.inflearn.com/course/%ed%94%84%eb%a0%88%ec%9e%84%ec%9b%8c%ed%81%ac/" target="_blank")
    img.banner(src="https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/jms_tistory.jpg")
</template>

<script>
export default {
  /** empty */
}
</script>

<style lang="stylus">
@media all and (min-width: 1170px)
  #ads
    .banner
      position fixed
      top 290px
      left 1120px
      width 280px
      border-radius 5px
@media all and (max-width: 1170px)
  #ads
    display none
</style>
