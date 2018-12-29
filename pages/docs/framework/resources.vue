<template lang="pug">
  section#document(role="document")
    h1#title 정적파일 및 에셋
    Page
      div#jumpMenu(slot="jumpMenu" role="jumpMenu")
        h1 정적파일 및 에셋
        div.headers
          h2: a(href="#컴포넌트") 컴포넌트
          h2: a(href="#CSS 프레임워크") CSS 프레임워크
          h2: a(href="#PUBLIC PATH") PUBLIC PATH
      div#text(slot="text" role="text")
        article.box
          h2(id="컴포넌트") 컴포넌트
          div.paragraph
            | 컴포넌트에서 에셋을 포함하려면 <b>속성 바인딩</b> 기능을 포함하거나, 정적파일을 포함하듯 포함시키면 됩니다. 다만, 컴포넌트에서 정적파일 또는 에셋을 불러오는 경우 자바스크립트를 통한 포함이므로 스킨 내부에서 별도로 <b>경로 변환을 하지 않습니다.</b> 따라서 따로 <b>PUBLIC PATH</b> 설정을 해줄 필요가 있습니다.
          div.paragraph      
            pre
              code(class="language-html")
                | {{ vue }}
        article.box
          h2(id="CSS 프레임워크") CSS 프레임워크
          div.paragraph
            | <b>Semantic UI</b> 같은 <b>CSS 프레임워크</b> 를 <b>webpack.entry.js</b> 에 포함하여 사용하는 경우 해당 CSS 프레임워크가 사용하는 에셋(<b>아이콘</b> 같은) 또한 컴포넌트에서 에셋을 부르는 것과 같이 <b>자바스크립트를 통한 포함</b> 이기 때문에 마찬가지로 <b>PUBLIC PATH</b> 설정을 해야합니다.    
        article.box
          h2(id="PUBLIC PATH") PUBLIC PATH
          div.paragraph
            | <b>webpack.base.conf.js</b> 에서 <b>publicPath</b> 부분을 설정하는 것으로 컴포넌트에 포함된 에셋도 티스토리 스킨에서 불러올 수 있습니다. 해당 주소는 <b>블로그</b> 마다 다를 수 있으며, 개발자 도구 등을 통해 사용하고자 하는 블로그의 <b>PUBLIC PATH</b> 를 알아야 합니다. 사용자 배포용으로 개발하는 경우에는 곤란할 수도 있으므로 <b>CDN(Content Delivery Network)</b> 으로 에셋을 불러오시기 바랍니다.
          div.paragraph      
            pre
              code(class="language-javascript")
                | {{ config }}
</template>
<script>
  import Page from '~/components/Page.vue';

  export default {
    data: function() {
      return {
        static: `*.pug

//- https://tistory2.daumcdn.net/tistory/2710108/skin/images/favicon.png
img(src="./images/favicon.png")
//- https://tistory2.daumcdn.net/tistory/2710108/skin/images/_WEBPACK_CHANGED__.png
img(src=require("~/assets/images/favicon.png"))`,
        vue: `*.vue

<template>
  //- PUBLIC_PATH/favicon.png
  <img src="./images/favicon.png">
  //- PUBLIC_PATH/__WEBPACK_CHANGED__.png
  <img v-bind:src='require("~/assets/images/favicon.png")'>
</template>`,
        config: `webpack.base.conf.js
      
{
  test: /.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'file-loader',
  options: {
    publicPath: 'https://tistory2.daumcdn.net/tistory/2710108/skin/images/'
  }
},
{
  test: /.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
  loader: 'file-loader',
  options: {
    publicPath: 'https://tistory2.daumcdn.net/tistory/2710108/skin/images/'
  }
},
{
  test: /.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'file-loader',
  options: {
    publicPath: 'https://tistory2.daumcdn.net/tistory/2710108/skin/images/'
  }
}`
      }
    },
    head() {
      return {
        title: "정적파일 및 에셋 - 티도리(TIDORY)",
        meta: [
          { content: '정적파일 및 에셋 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    },
    components: {
      Page
    }
  }
</script>