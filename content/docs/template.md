---
index: 2
category: 튜토리얼
title: 템플릿
---

티도리 프레임워크에서 템플릿은 [퍼그(Pug)](https://pugjs.org/api/getting-started.html)를 사용합니다. **퍼그**는 마크업을 관심사에 따라 분리하고 코드의 길이를 줄여주는 효과적인 템플릿 엔진입니다. **티도리 프로젝트 템플릿**에서는 크게 **app.pug**, **index.pug**, **views/*.pug** 로 구성되어 있습니다.

## 관심사 분리

우리가 템플릿을 분리해야하는 가장 중요한 이유는 **관심사 분리**입니다. 템플릿 하나에는 **스타일**, **마크업**, **스크립트**가 통째로 들어가도록 구성했기 때문에 특정 주제 또는 기능에 대한 코드만을 묶어서 관리할 수 있습니다.

### 부모

다음과 같은 구조로 템플릿을 분리해 놓았다고 생각해봅시다. 이렇게 1차적으로 크게 분리된 것이 **부모 템플릿**입니다.

```plgintext
├── views/
│     ├── Header.pug
│     ├── Content.pug
│     ├── Sidebar.pug
│     └── Footer.pug
```
### 자식

이제 각 영역에 속할 **자식 템플릿**을 만들어봅시다. 자식 템플릿의 위치는 절대적인 것은 아니나, **부모 템플릿의 이름과 똑같은 디렉토리 아래**에 놓는 것을 기본 전제로 합니다.

```plaintext
├── views/
│     ├── Header.pug
│     └── Header
│           ├── BlogTitle.pug
│           └── BlogMenu.pug
│     ├── Content.pug
│     └── Content
│           └── Entry.pug
│     ├── Sidebar.pug
│     └── Footer.pug
```

## 예시

간단한 예시로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 **블로그의 제목과 메뉴**를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다.

```plaintext
├── views/
│     ├── Header.pug
│     └── Header
│           ├── Navigation.pug
│           └── Title.pug
├── app.pug    
└── index.pug
```

### app.pug

**app.pug** 는 스킨이 아닌 문서 레이어입니다. 다크모드와 같이 문서 전반에 영향을 미칠 수 있는 설정을 추가하는 것이 좋습니다. 

```pug
doctype html

html(lang="ko")
  head
    title [##_page_title_##]

  body(id="[##_body_id_##]")
    block TIDORY

    script.
      document.addEventListener('DOMContentLoaded', () => {
        const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

        dark && document.documentElement.classList.add('dark')
      })
```

### index.pug

**index.pug** 는 `extends app` 을 통해 **app.pug** 를 상속하는 한편, 문서가 아닌 스킨의 인덱스 레이어입니다. 아래의 예제에서는 **views/Header.pug** 가 포함되어 있습니다. 이는 **부모 템플릿**이 됩니다.

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

자식 템플릿으로 **Header/Title.pug**, **Header/Navigation.pug** 를 포함하고 있습니다. 각각 **블로그 제목** 과 **블로그 메뉴**입니다.

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

## 빌드

우리가 만든 스킨을 이제 **사용자에게 배포**하거나 **자신의 블로그에 적용**하기 위해 [빌드 및 배포](/docs/deployment)를 하게 되면 다음과 같이 분리됩니다.

>  스킨 옵션 등의 구현을 위해 코드가 분리되지 않길 원한다면 [fixed](/docs/api#fixed) 속성을 부여할 수 있습니다.

### skin.html

```html
<!DOCTYPE html>

<html lang="ko">
  <head>
    <title>[##_page_title_##]</title>
    <script defer src="./images/app.537a5184a206c1de4585.js"></script>
    <link rel="stylesheet" href="./style.css">
    <script defer src="./images/script.8tvFrJsnbm1XBB4PblAH.js"></script>
  </head>
  <body id="[##_body_id_##]">
    <s_t3>
      <div id="container">
        <header>
          <h1>[##_title_##]</h1>
          <nav>[##_blog_menu_##]</nav>
        </header>
      </div>
    </s_t3>
  </body>
</html>
```

### style.css

```css
#container {
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}
```

### images/script.js

```js
document.addEventListener('DOMContentLoaded', function() {
  var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  dark && document.documentElement.classList.add('dark');
});
```
