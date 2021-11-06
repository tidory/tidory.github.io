---
index: 7

category: 스케일링 업
title: 자바스크립트 프레임워크
---

## 자바스크립트 프레임워크

티도리 프레임워크에서는 모던 자바스크립트 프레임워크인 뷰(Vue.js)와 리액트(React), 스벨트(Svelte)를 지원합니다. 컴포넌트(Component)를 만들고 포함시켜 템플릿에서 사용할 수 있습니다. 컴포넌트는 사용하고 싶을 때 사용하면 되지만 몇 가지 주의사항이 있으니 알아보도록 합시다.

### 언제 사용해야 할까?

**사용자에게 커스텀을 허용하지 않는 경우**, 컴포넌트는 자바스크립트를 통해 렌더링되고 웹팩을 통해 번들링 되기 때문에 커스텀하기 정말 어렵습니다. 때문에 사용자가 직접 코드를 변경할 필요가 없고 위젯형태로 제공하는 경우라면 컴포넌트가 좋습니다.

**스킨 코드와 완전 무관한 경우**, 컴포넌트를 사용하면 DOM(Document Object Model)이 자바스크립트로 구성되므로 **티스토리가 치환자를 통해 해석하지 못합니다.** 따라서 컴포넌트 내부에 티스토리 치환자를 사용하면 안됩니다. 티스토리가 제공하는 기능이 아닌, 외부에서 제공하는 기능을 넣는 경우에 사용하면 좋습니다.

## 컴포넌트

뷰 또는 리액트, 스벨트 컴포넌트(Component)를 사용하면 티스토리 스킨을 어플리케이션(Application) 레벨까지 올릴 수 있습니다. **npm** 이 가진 방대한 레포지토리를 사용하여 라우팅과 데이터베이스 모듈을 사용할 수도 있습니다. SPA 프레임워크 중 하나라도 사용하면 SPA(Single Page Application)을 만들기 위한 준비는 완료 된 것입니다.

### 뷰(Vue)

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

app.component('app', App)
app.mount('#app')
```

### 리액트(React)

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

### 스벨트(Svelte)

티도리 8.0.0 이상부터 **Svelte** 를 지원합니다.

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

## 리소스

**컴포넌트**에서 에셋을 포함하려면 **속성 바인딩** 기능을 사용하거나, 정적파일처럼 포함시키면 됩니다. 우리가 일반적으로 **skin.html** 에 **./images/logo.png** 와 같은 형식으로 포함하면 티스토리는 자동으로 에셋의 경로를 CDN(Content Delivery Network)으로 변경합니다.

컴포넌트에서 정적파일 또는 에셋을 불러오는 경우 자바스크립트를 통한 포함이므로 **스킨 내부에서 별도로 경로 변환을 하지 않습니다.** 따라서 따로 `public_path` 설정을 해줄 필요가 있습니다.

```vue
<template>
  //- PUBLIC_PATH/favicon.png
  <img src="./images/favicon.png">
  //- PUBLIC_PATH/__WEBPACK_CHANGED__.png
  <img v-bind:src='require("../images/favicon.png")'>
</template>
```

> **public_path** 설정은 [환경설정](/docs/configuration)에서 알아볼 수 있습니다.
