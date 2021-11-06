---
index: 3

category: 튜토리얼
title: 템플릿
---

## 문서 구조

티도리 프레임워크에서 템플릿은 [퍼그(Pug)](https://pugjs.org/api/getting-started.html)를 사용합니다. **퍼그**는 HTML 파트별로 나누고 코드의 길이를 줄여주는 효과적인 템플릿 엔진입니다. **티도리 프로젝트 템플릿**에서는 크게 **app.pug, index.pug, views/*.pug** 로 구성되어 있습니다. 각각이 어떻게 연결되어있는지 살펴보죠!

## 코드 분할

우리가 템플릿을 분리해야하는 가장 중요한 이유는 **재활용**입니다. 템플릿 하나에는 **스타일, 마크업, 스크립트**가 통째로 들어가기 때문에 다른 스킨을 제작할 때 포함시키기만 하면 다시 작성하지 않아도 됩니다.

자, 이제 우리가 다음과 같은 구조로 템플릿을 분리해 놓았다고 생각해봅시다. 이렇게 1차적으로 크게 분리된 것이 **부모 템플릿**입니다. 이제 각 영역에 속할 **자식 템플릿**을 만들어봐야 합니다.

```plgintext
├── views/
│     ├── Header.pug
│     ├── Content.pug
│     ├── Sidebar.pug
│     └── Footer.pug
```

이렇게 나뉘어 있는 것을 조금 더 세부적으로 분리해보겠습니다. 자식 템플릿의 위치는 절대적인 것은 아니나, 부모 템플릿의 이름과 똑같은 폴더 아래에 놓는 것을 원칙으로 합니다.

```plaintext
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
```
