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

현재 **views/Header.pug** 파일이 포함되어 있습니다. 해당 템플릿은 **부모 템플릿**이 됩니다. `style` 태그는 빌드하면 **style.css** 파일로, `script` 태그를 사용하면 **images/script.js** 파일로 분리됩니다.

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

`8.2.1` 버전부터는 [PostCSS](https://postcss.org), [TailwindCSS](https://tailwindcss.com/) 가 기본 템플릿에 포함됩니다. 따라서 스타일 태그로 따로 분리하지 않아도 사용할 수 있습니다. 스타일이 대부분의 코드를 차지하는 티스토리 스킨의 특성상 TailwindCSS 와 함께 사용하면 생산성에서 큰 이점을 볼 수 있습니다.


```pug
#__tidory(class="h-screen flex justify-center text-center items-center")
```

`style` 에서 TailwindCSS 의 `@apply` 를 사용할 수도 있습니다.

```pug
style.
  #__tidory {
    @apply h-screen flex justify-center text-center items-center
  }
```

TailwindCSS 를 사용하기 위해서는 `@tailiwnd base`, `@tailiwnd components`, `@tailiwnd utilities` 를 포함해야 하는데, 기본 템플릿에서 asserts/app.css 를 살펴보면 다음과 같은 코드가 있습니다.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

app.css 는 index.pug 에서 `postcss` 필터를 사용하고 있습니다. [postcss-pug-filter](https://github.com/tidory/postcss-pug-filter) 는 티도리 프레임워크에 내장되어 있으며 다음과 같이 사용되어 있습니다.

```pug
style
  include:postcss @/app.css
```

> PostCSS, TailwindCSS 는 프레임워크에서 사용이 강제되지 않습니다. 사용하고 싶지 않다면 `postcss` 필터를 사용하지 않으면 그만입니다. 

#### fixed

만약 **스킨 옵션**을 구현해야 할 때처럼, 분리가 되면 안 되는 상황이라면 어떨까요? `style`, `script` 태그에 `fixed` 속성을 부여하면 해당 태그는 **style.css**, **images/script.js** 로 분리되지 않습니다. 그 말은 즉, **skin.html** 에 남는다는 이야기가 됩니다.

```pug
script(fixed).
  window.skinOptions = {
    example: '[##_var_example_##]'
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

## 프로덕션 코드

우리가 만든 스킨을 이제 **사용자에게 배포**하거나 **자신의 블로그에 적용**하기 위해 [빌드 및 배포](/docs/deployment)를 하면 다음과 같은 코드로 나뉘어집니다.

### skin.html

```html
<div id="__tidory">
  <header>
    <h1>[##_title_##]</h1>
    <nav>[##_blog_menu_##]</nav>
  </header>
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
