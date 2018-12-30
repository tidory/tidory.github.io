<template lang="pug">
  article#content(role="content")
    slot(name="jumpMenu")
    Adsense(data-ad-client="ca-pub-2513331130923231" data-ad-slot="6481206507")
    slot(name="text")
    Adsense(data-ad-client="ca-pub-2513331130923231" data-ad-slot="9817816286")
</template>

<script>
  export default {
    /** empty */
  }
</script>

<style lang="less">
  /** Document */
  #document {
    position: relative;
    z-index: 1;
    overflow: hidden;
    #content {
      #jumpMenu {
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
        .headers {
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
      .adsbygoogle {
        margin: 25px 0;
      }
      #text {
        .box {
          &:first-of-type{
            h2 {
              margin-top: 15px;
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
          .paragraph {
            margin: 25px 0;
            line-height: 1.8em;
            font-weight: 300;
            iframe {
              width: 100%;
            }
          }
          .txc-textbox {
            line-height: 30px;
            font-weight: 300;
            pre {
              line-height: 24px;
            }
          }
        }
      }
    }
  }
  @media all and (min-width: 1170px) {
    #document {
      width: 919px;
      float: left;
      box-sizing: border-box;
      #content {
        width: 620px;
        margin: 0 auto;
      }
    }
  }
  @media all and (max-width: 1170px) {
    #content {
      width: 100%;
      #text {
        .paragraph {
          > img {
            width: 100%;
          }
        }
        .header {
          h1 {
            margin-top: 0;
          }
        }
        .box {
          h2 {
            margin-top: 25px !important;
          }
        }
      }
    }
  }
</style>