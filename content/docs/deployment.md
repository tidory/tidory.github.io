---
index: 4
category: 튜토리얼
title: 빌드 및 배포
---

## 빌드

**빌드**는 사용자에게 배포하기 위해 **배포 파일을 만드는 과정**입니다. `npm run production` 을 사용하여 빌드할 수 있습니다.

```bash
npm run production
```

마크업, 스타일, 스크립트가 **skin.html**, **style.css**, **images/script.js** 로 분리되며 웹팩의 엔트리(Entry)인 **assets/app.js** 를 번들링한 **images/app.js** 가 생성됩니다. 또한 **index.xml**, **preview.jpg** 가 있는 **docs** 및 정적 에셋이 있는 **images** 의 내부가 복사됩니다.

```plaintext
dist/
├── images/
│   ├── script.js
│   └── app.js
├── preview256.jpg
├── preview560.jpg
├── preview1600.jpg
├── index.xml
├── skin.html
└── style.css
```

## 배포

**배포**는 **빌드**된 결과물을 **현재 사용 중인 스킨을 덮어쓰거나**, **스킨저장소에 저장할 수** 있게합니다.

> [환경설정](/docs/configuration)에서 `ts_session`, `url` 가 설정되어 있어야합니다.

### tidory store

티스토리 스킨 저장소에 저장합니다. 스킨의 **이름**은 **index.xml** 에 있는 `name` 값에 따라 자동적으로 주입됩니다.

```bash
npm run store
```

### tidory deploy

전에 이미 배포되어 있던 모든 파일을 삭제하고 다시 배포합니다. 주로 유저에게 배포하기 전에 블로그에 미리 적용시켜보기 위해 사용합니다.

> 티스토리 서버에서 잠시 뒤에 다시 시도하라는 에러를 던지기도 하는데, 이 경우 에러 메시지에 따라 잠시 뒤에 실행해보시기 바랍니다.

```bash
npm run deploy
```
