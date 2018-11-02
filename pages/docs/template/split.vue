<template lang="pug">
  section#tidory-style-wrapper
    h1.section-title 템플릿 분리
    article.categories
      h1 템플릿 분리
      div.categories
        h2: a(href="#티스토리 스킨 구조") 티스토리 스킨 구조
        h2: a(href="#템플릿 분리") 템플릿 분리
        h2: a(href="#부모와 자식 템플릿") 부모와 자식 템플릿
    article.box
      h2(id="티스토리 스킨 구조") 티스토리 스킨 구조
      div.paragraph
        | <b>티스토리의 스킨구조</b> 는 티스토리 스킨 가이드의 <a href="https://www.tistory.com/guide/skin/step2">스킨구조</a> 파트에서 친절하게 설명해주고 있습니다. 아래의 그림에서보면 <b>container</b> 아래에 <b>header</b>, <b>content</b>, <b>sidebar</b>, <b>footer</b> 로 분리되어있는 것을 볼 수 있습니다. 템플릿 분리야 말로 티도리 프레임워크가 만들어진 계기입니다.
      div.paragraph
        img(src="~assets/images/sa-template-01.png")
    article.box
      h2(id="템플릿 분리") 템플릿 분리
      div.paragraph
        | 우리가 템플릿을 분리해야하는 가장 중요한 이유는 <b>재활용</b> 입니다. 템플릿 하나에는 <b>스타일</b>, <b>마크업</b>, <b>스크립트</b> 가 통째로 들어가기 때문에 다른 스킨을 제작할 때 포함시키기만 하면 다시 작성하지 않아도 됩니다.
    article.box
      h2(id="부모와 자식 템플릿") 부모와 자식 템플릿
      div.paragraph
        | 템플릿을 어떻게 분리시켜야 하는가?, 티스토리에서 나누어 놓은 구조에 따라 우리는 다음과 같은 폴더구조를 만들 수 있습니다.
      div.paragraph
        div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
          pre.
            ├── views/
            │     ├── Header.pug
            │     ├── Content.pug
            │     ├── Sidebar.pug
            │     └── Footer.pug
      div.paragraph
        | 이렇게 1차적으로 크게 분리된 것이 <b>부모 템플릿</b> 입니다. 이제 각 영역에 속할 <b>자식 템플릿</b> 을 만들어봐야 합니다. 자식들은 티스토리 스킨 가이드에 다음과 같이 나와있습니다.
      div.paragraph
        img(src="~assets/images/sa-template-02.png")
      div.paragraph
        | 우리가 아무래도 가장 많이 쓰게 될 기능들은 <b>header</b> 부분의 제목과 메뉴, <b>content</b> 부분의 <b>entry</b>, 그리고 <b>sidebar</b> 와 <b>footer</b> 정도 되겠군요. 여기서 더 쪼개서 <b>인덱스</b> 페이지와 <b>퍼머링크</b> 페이지로 구분할 수도 있겠습니다.
      div.paragraph
        | 인덱스와 퍼머링크 페이지를 구분하지 않는다는 가정하에 나눠보면 다음과 같습니다.
      div.paragraph
        div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
          pre.
            ├── views/
            │     ├── Header.pug
            │     ├── Header
            │           ├── BlogTitle.pug
            │           └── BlogMenu.pug
            │     ├── Content.pug
            │     ├── Content
            │           └── Entry.pug
            │     ├── Sidebar.pug
            │     └── Footer.pug
      div.paragraph
        | <b>자식 템플릿</b> 의 위치는 절대적인 것은 아니나, <b>부모 템플릿의 이름과 똑같은 폴더</b> 아래에 놓는 것을 원칙으로 합니다.
</template>
<script>
  export default {
    head() {
      return {
        title: "템플릿 분리 - 티도리(TIDORY)",
        meta: [
          { content: '템플릿 분리 - 티도리(TIDORY)', property: 'og:title' }
        ]
      }
    }
  }
</script>