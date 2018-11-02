<template lang="pug">
  div#tidory-framework-wrapper
    TidoryHeader
    main#tidory
      div#tidory-docs-wrapper
        TidoryDocsNav
        div#tidory-docs-content-wrapper
          div.tidory-docs-content-inner
            nuxt
    TidoryFooter
</template>
<script>
  // import $ from 'jquery';

  import TidoryHeader from '~/components/TidoryHeader.vue'
  import TidoryDocsNav from '~/components/TidoryDocsNav.vue'
  import TidoryFooter from '~/components/TidoryFooter.vue'
  
	export default {
    mounted() {
      /** Adsense */
      // let 
      //   nav = $('#tidory-docsNav-wrapper'),
      //   categories = $('article.categories'),
      //   docs = $('.tidory-docs-content-inner') 
      // ;
      // if(categories.length < 0) {
      //   docs.prepend(this.adsense('6481206507'))
      // }
      // else {
      //   categories.after(this.adsense('6481206507'));
      // }
      // nav.append(this.adsense('2231056024'));
      // docs.append(this.adsense('9817816286'));
    },
    methods: {
      // adsense(slot) {
      //   return `\<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"\>\<\/script\>
      //   <ins class="adsbygoogle"
      //       style="display:block; text-align:center;margin-top: 25px;"
      //       data-ad-layout="in-article"
      //       data-ad-format="fluid"
      //       data-ad-client="ca-pub-2513331130923231"
      //       data-ad-slot="${slot}"></ins>
      //   \<script\>
      //       (adsbygoogle = window.adsbygoogle || []).push({});
      //   \<\/script\>`
      // }
    },
		components: {
      TidoryHeader,
      TidoryDocsNav,
      TidoryFooter
    }
  }
</script>
<style lang="less">
  /** Global */
  * {
    margin: 0;
    padding: 0;
  }
  /** Framework */
  div#tidory-framework-wrapper {
    font-family: 'Noto Sans KR', sans-serif;
    height: inherit;
    color: rgba(0,0,0, 0.8);
    li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: gray;
      font-weight: 300;
      transition-duration: 0.3s;
    }
    a:hover {
      color: black;
    }
    pre {
      margin: 0;
      font-size:0.85em;
      font-weight: 300;
    }
    b, strong {
      background-color: #f8f8f8;
      color: #ed5207;
      font-weight: 400;
      padding: 0px 5px;
      border-radius: 5px;
      font-size: 0.85em;
      display: inline-block;
      height: 23px;
      line-height: 23px;
    }
    h1.section-title {
      width: 1px;
      height: 1px;
      overflow: hidden;
      margin: -1px;
      text-indent: -9999px;
    }
    div.txc-textbox, a {
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
    }
  }
  /** Document */
  div#tidory-docs-wrapper {
    position: relative;
    z-index: 1;
    section {
      article.categories {
        h1, h2, h3 {
          a {
            color: #ed5207 !important;  
            font-weight: 500;
          }
          &::before {
            color: #ed5207 !important;  
          }
        }
        h1 {
          font-weight: 400;
          font-size: 1.8em;
          margin-top: 15px;
        }
        div.categories {
          border-bottom: 1px solid #f0f2f1;
          padding-bottom: 35px;
          h2 {
            font-size: 1.0em;
            word-break: break-all;
            margin: 3px 0;
            a {
              font-weight: 500;
            }
            &::before {
              content: '#';
              opacity: 0.5;
              font-weight: 300;
              margin-right: 10px;
            }
          }
          h3 {
            margin: 3px 0;
            margin-left: 35px;
            font-size: 0.9em;
            font-weight: 300;
            a {
              font-weight: 400;
            }
            &::before {
              content: '#';
              opacity: 0.5;
              font-weight: 300;
              margin-right: 10px;
            }
          }
        }
      }
      article.box {
        &:first-of-type {
          h2 {
            margin-top: 0px;
          }
        }
        h2 {
          font-size: 1.6em;
          margin-top: 75px;
          margin-bottom: 25px;
          word-break: break-all;
          font-weight: 400;
          &::before {
            content: '#';
            color: #ed5207;
            font-weight: 300;
            margin-right: 10px;
          }
        }
        h3 {
          font-size: 1.2em;
          margin-top: 25px;
          margin-bottom: 15px;
          word-break: break-all;
          font-weight: 500;
        }
        h4 {
          margin-bottom: 15px;
        }
        ul {
          li {
            font-weight: 300;
          }
        }
        div.paragraph {
          margin: 25px 0;
          line-height: 1.8em;
          font-weight: 300;
          iframe {
            width: 100%;
          }
        }
        div.txc-textbox {
          line-height: 30px;
          font-weight: 300;
          pre {
            line-height: 24px;
          }
        }
      }
    }
  }
  @media all and (min-width: 1170px) {
    div#tidory-docs-wrapper {
      width: 1170px;
      margin: 0 auto;
      margin-top: 75px;
      margin-bottom: 125px;
      overflow: hidden;
    }
    div#tidory-docs-content-wrapper {
      width: 919px;
      float: left;
    }
    div.tidory-docs-content-inner {
      width: 620px;
      margin: 0 auto;
      box-sizing: border-box;
    }
  }
  @media all and (max-width: 1170px) {
    div#tidory-docs-wrapper {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      margin: 25px auto;
      margin-top: 0px;
      overflow: hidden;
    }
    div.tidory-docs-content-inner {
      width: 100%;
      div.paragraph {
        > img {
          width: 100%;
        }
      }
      article.header {
        h1 {
          margin-top: 0;
        }
      }
      article.box {
        h2 {
          margin-top: 25px !important;
        }
      }
    }
  }
</style>
