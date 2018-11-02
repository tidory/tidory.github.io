<template lang="pug">
  section#tidory-distribution-wrapper
    h1.section-title 배포 디렉토리
    article.categories
      h1 배포 디렉토리
      div.categories
        h3: a(href="#assets") images/*
        h3: a(href="#skin") skin.html
        h3: a(href="#style") style.css
        h3: a(href="#preview") preview*.jpg
        h3: a(href="#index") index.xml
    article.box
      div.paragraph
        div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
          pre.
            dist/
            ├── images/
            │   ├── script.js
            │   └── app.js
            ├── preview256.jpg
            ├── preview560.jpg
            ├── preview1600.jpg
            ├── index.xml
            ├── skin.html
            └── style.css
    article.box
      div.paragraph
        h3(id="images") images/*
        div.paragraph
          | <b>images</b> 폴더는 템플릿 또는 컴포넌트에 포함된 <b>리소스</b> 들이 모여있는 파일이며, 추가적으로 템플릿 내부에서 작성한 <b>scoped</b> 속성이 사용되지 않은 <b>script</b> 태그의 집합인 <b>script.js</b>, <b>webpack.entry.js</b> 에서 포함한 에셋들의 집합인 <b>app.js</b> 가 있습니다.
      div.paragraph
        h3(id="skin") skin.html
        div.paragraph
          | <b>티스토리 스킨</b> 으로 업로드할 최종 <b>html</b> 파일입니다.
      div.paragraph
        h3(id="style") style.css
        div.paragraph
          | 템플릿에 있는 <b>scoped</b> 속성이 사용되지 않은 <b>style</b> 태그들의 집합 파일입니다.
      div.paragraph
        h3(id="preview") preview*.jpg
        div.paragraph
          | <b>docs</b> 폴더에 있던 미리보기 파일이며 <b>preview256.jpg</b>, <b>preview560.jpg</b>, <b>preview1600.jpg</b> 파일이 존재합니다.
      div.paragraph
        h3(id="index") index.xml
        div.paragraph
          | <b>docs</b> 폴더에 있던 티스토리 스킨 설정파일입니다.
</template>
<script>
  export default {
    head() {
      return {
        title: "배포 디렉토리 - 티도리(TIDORY)",
        meta: [
          { content: '배포 디렉토리 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    }
  }
</script>