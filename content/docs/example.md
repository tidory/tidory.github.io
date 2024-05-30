---
index: 4
category: 튜토리얼
title: 티스토리 예제
---

티스토리 예제로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 **블로그의 제목과 메뉴**를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다.

```plaintext
├── views/
│     ├── Header.pug
│     ├── Header
│           ├── Navigation.pug
│           └── Title.pug
└── index.pug
```

### index.pug

**views/Header.pug** 파일이 포함되어 있습니다. 해당 템플릿은 **부모 템플릿**이 됩니다.

```pug
extends app

block TIDORY
  s_t3
    #container
      include views/Header

  style.
    #container {
      height: 100vh;
      align-items: center;
      display: flex;
      justify-content: center;
      text-align: center;
    }
```

### views/Header.pug

**Header/Title.pug**, **Header/Navigation.pug** 를 포함하고 있습니다. 각각 **블로그 제목** 과 **블로그 메뉴**입니다. 이 둘은 **자식 템플릿**입니다.

```pug
header
  include Header/Title
  include Header/Navigation
```

### views/Header/Title.pug

```pug
h1 [##_title_##]
```

### views/Header/Navigation.pug

```pug
nav [##_blog_menu_##]
```

## 프로덕트

우리가 만든 스킨을 이제 **사용자에게 배포**하거나 **자신의 블로그에 적용**하기 위해 [빌드 및 배포](/docs/deployment)하면 다음과 같이 분리됩니다. `style, script` 는 각각 **style.css**, **images/script.js** 로 분리됩니다. 만약 스타일 및 스크립트가 분리되지 않길 원한다면 [fixed](/docs/api#fixed) 속성을 부여할 수 있습니다.

### skin.html

```html
<div id="container">
  <s_t3>
    <header>
      <h1>[##_title_##]</h1>
      <nav>[##_blog_menu_##]</nav>
    </header>
  </s_t3>
</div>
```

### style.css

```css
#container {
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center
}
```
