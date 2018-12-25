<template lang="pug">
  nav#tidory-nav
    h1.section-title TidoryNavigation
    div.tidory-nav-inner
      ul.nav
        li(v-for="item in nav")
          a(v-bind:href="item.path") {{ item.label }}
      ul.nav2
        li(v-for="(item, index) in $store.state.docs.docs")
          a(v-bind:href="item.path") {{ item.label }}
</template>
<script>
  export default {
    data() {
      return {
        nav: [
          this.$store.state.community.github,
          this.$store.state.community.npm,
          this.$store.state.community.tistorySkinGuide
        ]
      }
    }
  }
</script>
<style lang="less">
  @media all and (min-width: 1170px) {
    ul.nav, ul.nav2 {
      li {
        float: left;
        text-align: center;
        padding: 0 12px;
        font-size: 0.9em;
        &:last-child {
          padding-right: 0;
        }
        a {
          color: black !important;
          font-weight: 400 !important;
          &:hover {
            color: #ed5207 !important;
          }   
        }
      }
    }
    div.tidory-nav-inner {
      line-height: 55px;
      width: 1170px;
      margin:0 auto;
      > ul.nav {
        padding-left: 10px;
      }
      ul.nav {
        overflow: hidden;
        float: left;
      }
      ul.nav2 {
        float: right;
      }
    }
  }
  @media all and (max-width: 1170px) {
    nav#tidory-nav {
      display: none;
    }
  }
</style>