---
index: 1
category: 튜토리얼
title: 시작하기
---

## 설치

**Tidory CLI** 는 티도리 프레임워크의 템플릿과 상호작용하기 위한 **CLI(Command Line Interface)** 환경에서 실행하는 **NPM(Node Package Manager)** 패키지입니다. 개발 서버를 켜거나, 빌드 및 배포를 할 때 사용합니다. 다음과 같은 명령을 사용하여 템플릿을 받아온 뒤, 프로젝트 구동을 위한 **NPM** 패키지들을 설치하십시오.

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

데모로 작성되어있는 앱을 어떻게 실행시키면 될까요? 간단하게 알아보도록 하겠습니다. `npm start` 명령을 사용하면 **http://localhost:8080** 주소로 **webpack-dev-server** 를 실행시킬 수 있습니다. 기본적으로 라이브 서버를 비롯한 티도리 프레임워크에서 사용하는 명령어들은 [cli](https://github.com/tidory/cli) 에서 구현되었습니다.

```bash
npm start
```

## 프리뷰 서버

**프리뷰 서버**는 `npm run preview` 로 시작할 수 있으며 **http://localhost:3000** 에서 시작합니다. 티스토리에 직접 요청을 보내고 **치환자가 해석된 모습**을 렌더링합니다. 홈, 글, 카테고리 등 프리뷰 모드를 지정하여 티스토리 서버에 올라갔을 때의 모습을 볼 수 있습니다. 프리뷰 서버에서는 기본적으로 티스토리 서버에 치환자 처리를 위한 요청을 보내야 하는데, 이러한 일은 [tidory-skin](https://github.com/tistory-projects/tistory-skin) 를 사용하여 처리하게 됩니다.

```bash
npm run preview
```

> 프리뷰 서버를 실행하려면 [환경설정](/docs/configuration)에서 `ts_session, url, mode` 가 설정되어 있어야 합니다.

### index.xml

프리뷰 서버 사용시 주의해야 할 점은 티스토리 스킨 설정이 담긴 `index.xml` 이 적용되지 않을 가능성이 있다는 것입니다. 따라서 스킨 옵션과 같은 설정들이 프리뷰 서버에서 반영되지 않은 경우, 티스토리에 직접 `index.xml` 을 업로드 해야할 수도 있습니다. 현재 티스토리 버그로 인해 `스킨 편집` 에서의 업로드는 동작하지 않을 수 있으며 스킨 저장소에서 스킨을 적용하는 방식으로 처리해야 할 것입니다.

## 빌드 및 배포

**빌드 및 배포**는 기본적으로 `tidory production` 명령과 `tidory store` 가 있습니다. 빌드와 배포를 하는 여러 방법이 있지만, 시작하기 단계에서는 자세한 설명없이 넘어가도록 하겠습니다. 자세한 내용은 [빌드 및 배포](/docs/deployment)를 참고해 주시기 바랍니다.
