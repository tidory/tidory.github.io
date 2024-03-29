---
index: 4
category: 튜토리얼
title: 티스토리 예제
---

## 템플릿 작성

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

현재 **views/Header.pug** 파일이 포함되어 있습니다. 해당 템플릿은 **부모 템플릿**이 됩니다. 프로덕트를 위해 빌드하게 되면 `style` 는 **style.css** 파일로, `script` 를 사용하면 **images/script.js** 파일로 분리됩니다.

```pug
extends app

block TIDORY
  s_t3
    #__tidory
      include views/Header

  style.
    #__tidory {
      height: 100vh;
      align-items: center;
      display: flex;
      justify-content: center;
      text-align: center;
    }
```

### views/Header.pug

이번에는 **Header/Title.pug**, **Header/Navigation.pug** 를 포함하고 있습니다. 각각 **블로그 제목** 과 **블로그 메뉴**입니다. 이 둘은 **자식 템플릿**입니다.

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

우리가 만든 스킨을 이제 **사용자에게 배포**하거나 **자신의 블로그에 적용**하기 위해 [빌드 및 배포](/docs/deployment)를 하면 다음과 같은 코드로 나뉘어집니다.

### skin.html

```html
<div id="__tidory">
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
#__tidory {
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center
}
```
