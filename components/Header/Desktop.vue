<template lang="pug">
  nav#desktop(role="navigation")
    h1#title TidoryNavigation
    div
      ul(style="float: left;")
        li: Donation
        li(v-for="item in nav")
          a(v-bind:href="item.path") {{ item.label }}
      ul(style="float: right;")
        li(v-for="(item, index) in $store.state.docs.docs")
          a(v-bind:href="item.path") {{ item.label }}
</template>

<script>
  import Donation from './Donation.vue'

  export default {
    data() {
      return {
        nav: [
          this.$store.state.community.github,
          this.$store.state.community.npm,
          this.$store.state.community.tistorySkinGuide
        ]
      }
    },
    components: {
      Donation
    }
  }
</script>
<style lang="less">
  @media all and (min-width: 1170px) {
    #desktop {
      line-height: 55px;
      width: 1170px;
      margin:0 auto;
      ul {
        padding-left: 10px;
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
    }
  }
  @media all and (max-width: 1170px) {
    #desktop {
      display: none;
    }
  }
</style>