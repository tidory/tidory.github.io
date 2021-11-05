---
index: 2
title: 디렉터리
---

```plaintext
├── assets/
│     └── app.js
├── docs/
│     ├── index.xml
│     ├── preview256.jpg
│     ├── preview560.jpg
│     └── preview1600.jpg
├── images/
├── views/
├── .env
├── app.pug
├── index.pug
└── tidory.config.js
```

## tidory/tidory

**티도리 프로젝트 템플릿**인 [tidory/tidory](https://github.com/tidory/tidory) 의 레포지토리에 대한 내용입니다. 티도리 프레임워크는 정해진 디렉토리 구조가 있으므로 이를 따를 필요가 있습니다.

### assets/*

해당 디렉토리에는 **app.js** 에 포함될 파일 뿐만 아니라, 다른 소스에서 포함되는 styl, less 와 같은 확장 템플릿 파일 및 퍼그 템플릿에 인라인으로 포함되는 파일, 자바스크립트 플러그인, **컴포넌트**도 여기에 위치합니다.

### docs/*

티스토리 스킨 업로드에 필요한 파일이 위치하고 있습니다. **index.xml, preview256.jpg, preview560.jpg, preview1600.jpg**, 빌드하면 **dist** 폴더로 이동합니다.

### images/*

보통 프레임워크에서 정적파일이 위치하는 디렉터리의 이름은 **static** 으로 처리 될 수 있습니다만, 티스토리에서는 **images** 폴더로 모든 **정적파일**을 관리합니다.

### views/*.pug

**pug 템플릿 파일**이 위치할 폴더입니다. 보통 **index.pug** 파일의 `block TIDORY` 부분에서 템플릿파일을 포함시킵니다. 소스구조는 분활해서 구성하는 것이 원칙입니다. [템플릿](/docs/template)을 참고하세요.
