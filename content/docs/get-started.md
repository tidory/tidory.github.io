---
index: 1
category: 튜토리얼
title: 시작
---

다음과 같은 명령을 사용하여 [티도리 프레임워크 템플릿](https://github.com/tidory/tidory)을 받아온 뒤, 프로젝트 구동을 위한 **NPM** 패키지들을 설치하십시오.

```bash
git clone https://github.com/tidory/tidory tistory-skin
cd tistory-skin
```

> 티도리 프레임워크를 통해 티스토리 스킨을 개발하기 위해서는 [Git](https://git-scm.com), [Node.js](https://nodejs.org/ko) 가 필수적으로 사용됩니다. 따라서 먼저 시작하기 전에 해당 개발도구가 설치되어 있는지 살펴보시기 바랍니다. 

프로젝트를 다운 받았다면 이제 프로젝트 개발을 위한 패키지를 설치할 수 있습니다.

```bash
npm install
```

## 라이브 서버

데모로 작성되어있는 앱을 어떻게 실행시키면 될까요? `npm start` 명령을 사용하면 **http://localhost:8080** 주소로 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) 를 실행시킬 수 있습니다.

```bash
npm start
```

## 프리뷰 서버

**프리뷰 서버**는 `npm run preview` 로 시작할 수 있으며 **http://localhost:3000** 에서 시작합니다. 티스토리에 직접 요청을 보내고 **치환자가 해석된 모습**을 렌더링합니다. 티스토리 스킨 편집에서 볼 수 있는 홈, 글, 카테고리 등 프리뷰 모드를 지정하여 티스토리 서버에 올라갔을 때의 모습을 볼 수 있습니다.

>[환경설정](/docs/configuration)에서 `ts_session`, `url`, `mode` 가 설정되어 있어야 합니다.

```bash
npm run preview
```

프리뷰 서버의 경우 티스토리에서 받아온 문서를 렌더링하지만, 로컬 서버이기 때문에 그 한계가 명확하여 치환자나 프로필 카드, 댓글 등 티스토리에서 자바스크립트를 통해 렌더링하는 컴포넌트가 기대했던 모습과는 다르게 나타나는 경우도 있으니 주의해야합니다. 

> 프리뷰 서버 실행시 **index.xml** 을 자동으로 업로드하여 스킨 설정을 초기화하므로 유의하십시오.
 
> 프리뷰 서버는 두 버전으로 제공됩니다. 이제는 사용되지 않고 있는 구 버전과 현재 스킨 편집에 적용되고 있는 신 버전입니다. 신 버전이라도 티스토리에서 내부적으로 발생하는 버그도 있으므로 구 버전도 제공합니다. 구 버전을 실행하려면 `npm run preview:old` 를 사용하십시오.
