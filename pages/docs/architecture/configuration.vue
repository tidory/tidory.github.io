<template lang="pug">
  section#tidory-architecture-wrapper
    h1.section-title 설정 파일
    article.categories
      h1 설정 파일
      div.categories
        h2: a(href="#설정파일") 설정 파일
        h3: a(href="#webpack") webpack.base.conf.js
        h3: a(href="#entry") webpack.entry.js
        h3: a(href="#environment") .env
    article.box
      h2(id="설정파일") 설정 파일
      div.paragraph
        h3(id="webpack") webpack.base.conf.js
        div.paragraph
          | <b>Webpack</b> 의 <b>기본 설정</b> 으로 정해진 파일입니다. 해당 파일을 통해 기본적인 웹팩 설정을 변경할 수 있습니다. 설정 정보가 궁금하다면 웹팩의 공식 홈페이지를 참고해주시기 바랍니다 <b><a href="https://webpack.js.org/configuration/" target="_blank">https://webpack.js.org/configuration/</a></b>
        div.paragraph
          pre
            code(class="language-javascript")
              | {{ base }}
      div.paragraph
        h3(id="entry") webpack.entry.js
        div.paragraph
          | <b>Webpack</b> 의 <b>엔트리</b> 로 정해진 파일입니다. 여기서는 <b>번들링</b> 될 모든 파일을 포함시켜야 하며 <b>.css, .less, .js</b> 등이 <b>app.js</b> 에 포함됩니다. <b>webpack.base.conf.js</b> 설정에 따라 포함시킬 수 있는 파일이 다르며 기본적으로 <b>js, css</b> 파일을 포함시킬 수 있습니다. 이 파일에 포함시킬 것들은 주로 수정을 하지않는 <b>라이브러리</b> 입니다. 예를 들면 <b>부트스트랩</b> 과 같은 경우가 있겠습니다.
        div.paragraph
          pre
            code(class="language-javascript")
              | {{ entry }}
      div.paragraph
        h3(id="environment") .env
        div.paragraph
          | 이 파일은 개발과정에서 설정 할 수 있는 <b>상수로 구성된 설정파일</b>입니다. 이 파일은 깃허브에 배포시 포함시킬 필요가 없습니다. <b>티스토리 API</b> 설정이나 <b>PUBLIC PATH</b> 등의 환경설정 정보를 설정할 때 사용합니다.
        div.paragraph
          pre
            code(class="language-javascript")
              | {{ environment }}
</template>
<script>
  export default {
    data: function() {
      return {
        entry: `webpack.entry.js

 /* webpack.entry.js
  * 
  * Entry for bundling by webpack.
  * for example, if you have your own script, or plguin,
  * you can import that. 
  * ex) import "./bower_components/animate.css/animate.min.css"
  * 
  * you are able to include js, css
  * if you want to contain other scripts like .ts, .less, .sass,
  * set the loaders in ./webpack.base.conf.js
  * 
  * after import assets it will be contained in app.js
 */

import Vue from 'vue';

Vue.component(
  'hello-component', 
  require('~/components/hello-component.vue').default
);

new Vue({
  el: '#app'
});`,
        base: `webpack.base.conf.js
  
const VueLoaderPlugin = require('vue-loader/lib/plugin')

require('dotenv').config();

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use:  ["style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}`,
        environment: `.env

# APP

APP_MODE=development

# Development

TISTORY_CLIENT_ID=dc08305218d22fb1af479b044d4707d0
TISTORY_CALLBACK=http://localhost:8080

# Build

# TISTORY_CLIENT_ID=7a27ccf663340c05c6dc2e4d28f63be7
# TISTORY_CALLBACK=https://appwriter.tistory.com
# PUBLIC_PATH=https://tistory2.daumcdn.net/tistory/2710108/skin/images/`
      }
    },
    head() {
      return {
        title: "설정 파일 - 티도리(TIDORY)",
        meta: [
          { content: '설정 파일 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    }
  }
</script>