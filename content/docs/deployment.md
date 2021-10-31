## 빌드(Build)

**빌드**는 티도리 프로젝트를 티스토리 또는 유저에게 배포하기 위해 **배포 파일을 만드는 과정**입니다. 소스코드가 **skin.html, style.css** 로 분리되며 **images/app.js, images/script.js** 가 생성됩니다. 또한 **docs** 의 내부와 **images** 가 복사됩니다.

```bash
# tidory production
npm run production
```

## 배포(Distribution)

**배포**는 **현재 사용 중인 스킨을 덮어쓰는 모드**가 있고, **스킨저장소에 저장하는 모드**가 있습니다. 배포를 사용하려면 [환경설정](/docs/configuration)에 `ts_session, url` 항목이 정상적으로 등록되어 있어야합니다.

> 배포를 하기 전에 먼저 빌드해야 합니다. **dist** 디렉토리를 대상으로 배포하기 때문이죠.

### tidory store

빌드 결과를 티스토리 스킨 저장소에 저장합니다. 스킨의 **이름**은 **index.xml** 에 있는 `name` 값에 따라 자동적으로 주입됩니다.

```bash
# tidory store
npm run store
```

### tidory deploy

현재 환경설정에 `url` 에 지정된 블로그에 **skin.html, style.css, index.xml** 파일을 적용시키고 업로드 되어 있는 모든 파일을 삭제하고 **images** 폴더에 있는 파일을 다시 업로드합니다. 주로 유저에게 배포하기 전에 블로그에 미리 적용시켜보기 위해 사용합니다.

```bash
# tidory deploy
npm run deploy
```

## 프로덕션 코드

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

### images/*

**images** 폴더는 템플릿 또는 컴포넌트에 포함된 리소스들이 모여있는 파일이며, 추가적으로 템플릿 내부에서 작성한 **scoped** 속성이 사용되지 않은 **script** 태그의 집합인 **script.js**, **assets/app.js** 에서 포함한 에셋들의 집합인 **app.js** 가 있습니다.

### skin.html

티스토리 스킨으로 업로드할 최종 **html** 파일입니다.

### style.css

템플릿에 있는 **scoped** 속성이 사용되지 않은 **style** 태그들의 집합 파일입니다.

### preview*.jpg

**docs** 폴더에 있던 미리보기 파일이며 **preview256.jpg, preview560.jpg, preview1600.jpg** 파일이 존재합니다. 사용자에게 스킨 미리보기로써 제공됩니다.

### index.xml

**docs** 폴더에 있던 **티스토리 스킨 설정**파일입니다.

## 코드 저장소

**깃허브**와 같은 코드 저장소와 스킨 코드를 연동하려면 어떻게 하면 좋을까요? 티스토리 스킨은 FTP(File Transfer Protocol)을 지원하는 것도 아니며 그렇다고 공식적으로 코드 저장소와의 코드 공유를 지원하지도 않습니다.

하지만, 한 가지 해결책이 있습니다. 티도리 프레임워크를 통해 빌드된 소스코드를 코드 저장소에 배포하면서 동시에 티스토리 스킨에 코드를 적용시킨다면 가능합니다. **빌드 - 코드 저장소 배포 - 스킨 적용**의 과정을 통해 코드 저장소와 스킨 코드를 동일하게 구성할 수 있습니다.

### push-dir

**push-dir** 은 코드 저장소에 특정 디렉토리를 특정 브랜치에 푸쉬할 수 있도록 해주는 패키지입니다. 해당 패키지가 있으면 스킨을 빌드하면 나오는 **dist** 디렉토리만을 독립적으로 다른 브랜치에 올릴 수 있습니다.

```bash
npm install --save-dev push-dir
```

### package.json

[티도리 프로젝트 템플릿](https://github.com/tidory/tidory)에 있는 **package.json** 에 보면 아래와 같이 나와있는 것을 볼 수 있습니다. `npm run deploy` 명령어는 빌드된 티스토리 스킨을 현재 스킨에 적용시키는 명령어입니다.

```json
"scripts": {
  "deploy": "tidory deploy"
}
```

`npm run dist` 명령을 따로 만들고, 배포 순서에 따라 빌드를 하고, **push-dir** 을 먼저 하는 것으로 코드 저장소에 푸쉬한 다음, 스킨에 적용시키도록 바꿔주면 코드 저장소와 스킨 코드를 동일하게 만들 수 있습니다. 티스토리에서 제공하는 **스킨 편집**은 없다고 여기십시오.

```json
"scripts": {
  "dist": "tidory production && push-dir --dir=dist --branch=tistory-skin --cleanup && tidory deploy"
}
```

위와 같이 명령어를 구성하면 빌드(Build) - 코드 저장소 배포(Push) - 스킨 적용(Deploy)의 순서로 배포를 자동화할 수 있습니다. 코드 저장소에 **tistory-skin** 브랜치가 별도로 생성되어 개발코드가 아닌, 오직 스킨의 코드만 푸쉬됩니다.
