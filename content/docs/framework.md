---
index: 9
category: 스케일링 업
title: 프레임워크
---

## Tailwind CSS

[PostCSS](https://postcss.org), [TailwindCSS](https://tailwindcss.com/) 가 티도리 프레임워크 템플릿에 포함되어 있습니다. 따라서 스타일 태그로 따로 분리하지 않아도 사용할 수 있습니다. 스타일이 대부분의 코드를 차지하는 티스토리 스킨의 특성상 Tailwind CSS 와 함께 사용하면 생산성에서 큰 이점을 볼 수 있습니다. TailwindCSS 를 사용하기 위해서는 `@tailiwnd base`, `@tailiwnd components`, `@tailiwnd utilities` 를 포함해야 하는데, 기본 템플릿에서 **asserts/app.css** 를 살펴보면 다음과 같은 코드가 있습니다.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**app.css** 는 `postcss` 필터를 사용하고 있습니다. PostCSS, Tailwind CSS 는 프레임워크에서 사용이 강제되지 않습니다. 사용하고 싶지 않다면 `postcss` 필터를 사용하지 않으면 그만입니다. `postcss` 필터가 기본적으로 참고하는 설정파일은 `postcss.config.js` 입니다.

```pug
style
  include:postcss @/app.css
```

`class` 에 Tailwind CSS 의 클래스를 나열할 수도 있고, `style` 에서 `@apply` 를 사용할 수도 있습니다. `style` 에서 사용할 때는 `postcss` 필터를 사용하는 것을 잊지마세요!

```pug
#__tidory(class="h-screen flex justify-center text-center items-center")

style
  :postcss
    #__tidory {
      @apply h-screen flex justify-center text-center items-center
    }
```


## Alpine

[알파인(Alpine)](https://alpinejs.dev)은 티도리 프레임워크와 궁합이 잘 맞는 경량급 자바스크립트 프레임워크입니다. 널리 사용되는 자바스크립트 프레임워크인 뷰, 리액트와 같은 프레임워크를 티도리 프레임워크에서 사용할 때 가질 수 있는 한계를 명확하게 극복합니다. 배우기도 쉽기 때문에 제이쿼리보다 더 더 나은 선택이 될 수 있습니다. 티도리 프레임워크 템플릿에는 **app.js** 에 이미 알파인을 사용하기 위한 준비가 되어 있습니다.

```js
import Alpine from 'alpinejs'

window.Alpine = Alpine
```

아래의 예는 알파인을 사용하여 다크 모드와 라이트 모드를 전환하는 버튼을 만든 것입니다. 아주 단순하게도 `x-data` 를 사용하면 알파인 컴포넌트가 정의됩니다. `dark` 라는 프로퍼티의 참 거짓 여부에 따라 `dark` 클래스를 [바인딩](https://alpinejs.dev/directives/bind#binding-classes)합니다.

```pug
html(
  x-data="{ dark: window.matchMedia('(prefers-color-scheme: dark)').matches }"
  :class="{ dark: dark }")
```

그 다음, 버튼으로 다음과 같이 클릭이 발생하면 `dark` 프로퍼티를 반전시키는 것이 끝입니다.

```pug
button(@click="dark = ! dark")
```

알파인은 **런타임(Runtime)** 에 동작하지만, 기본적으로는 다른 자바스크립트 프레임워크와는 달리 알파인 컴포넌트는 별도의 자바스크립트 파일로 번들링하지 않아도 됩니다. 즉, 제이쿼리와 비슷합니다. **app.js** 에서 알파인 컴포넌트를 포함하는 일도 물론 가능은 하지만, 태그에 인라인으로 사용하거나 템플릿에서 `script` 태그 내부에 `alpine:init` [이벤트](https://alpinejs.dev/essentials/lifecycle#alpine-initialization)를 받아서 알파인 컴포넌트를 정의하는 것이 더 간단한 방법입니다.

```js
document.addEventListener('alpine:init', () => {
    Alpine.data(...)
})
```

## SPA

티도리 프레임워크에서는 모던 자바스크립트 프레임워크인 뷰(Vue.js)와 리액트(React), 스벨트(Svelte)를 지원합니다. 컴포넌트(Component)를 만들고 포함시켜 템플릿에서 사용할 수 있습니다. 컴포넌트는 사용하고 싶을 때 사용하면 되지만 한계가 분명하게 있습니다.

**사용자에게 커스텀을 허용하지 않는 경우**, 컴포넌트는 자바스크립트를 통해 렌더링되고 웹팩을 통해 번들링 되기 때문에 커스텀하기 정말 어렵습니다. 때문에 사용자가 직접 코드를 변경할 필요가 없고 위젯형태로 제공하는 경우라면 컴포넌트가 좋습니다.

**스킨 코드와 완전 무관한 경우**, 컴포넌트를 사용하면 DOM(Document Object Model)이 자바스크립트로 구성되므로 **티스토리가 치환자를 통해 해석하지 못합니다.** 따라서 컴포넌트 내부에 티스토리 치환자를 사용하면 안됩니다. 티스토리가 제공하는 기능이 아닌, 외부에서 제공하는 기능을 넣는 경우에 사용하면 좋습니다.

### React

```bash
npm install react@17 react-dom@17
```

#### components/App.js

```js
import React from 'react'

export default class HelloWorld extends React.Component {
  render () {
    return (
      <h1>Hello, world!</h1>
    )
  }
}
```

### Vue

```bash
npm install vue@3
```

#### components/App.vue

```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    props: ['title']
  }
</script>
```

#### *.pug

```pug
#app
  //- Using Vue Component
  app(title="[##_title_##]")
```

#### assets/app.js

```js
import { createApp } from 'vue'
import App from './components/app.vue'

const app = createApp({
  components: {
    App
  }
})

app.mount('#app')
```

#### *.pug

```pug
//- Rendering React Component
#app
```

#### assets/app.js

```js
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

const rootElement = document.getElementById('app')
ReactDOM.render(<App />, rootElement)
```

### Svelte

```bash
npm install svelte@3
```

#### components/App.svelte

```html
<script>
 let name = 'world'
</script>

<h1>Hello, {name}!</h1>
```

#### *.pug

```pug
//- Rendering Svelte
#app
```

#### assets/app.js

```js
import App from './components/app.svelte'

const app = new App({
  target: document.getElementById('app')
})
```
