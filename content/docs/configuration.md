---
index: 3
category: 튜토리얼
title: 설정
---

## tidory.config.js

**tidory.config.js** 은 티도리 프레임워크를 위한 설정파일입니다. 템플릿에서 쓰이는 변수가 아닌, **프레임워크의 동작**만을 위해 사용되는 설정만 정의됩니다. 예를 들어 빌드 및 배포를 위한 **티스토리 세션** 값이나 프리뷰를 보기위한 모드 등이 해당됩니다.

티도리로 만든 프로젝트를 오픈소스로 공개할 때 `ts_session`, `url` 등의 민감한 정보가 포함되면 곤란한 경우가 있으므로 만약 **tidory.config.js** 가 존재하지 않는 경우, **tidory.config.example.js** 가 포함됩니다. 이렇게 하면 소스를 오픈하여 배포할 때에도 민감한 정보를 보호할 수 있습니다.

```js
module.exports = {
  ts_session: '', // Tistory session cookie value
  url: '', // Tistory blog URL

  /**
   * Preview
   */
  preview: {
    /**
     * Preview Mode
     *
     * index
     * entry
     * category
     * tag
     * guestbook
     */
    mode: 'index',

    /**
     * Home Type
     *
     * NONE
     * COVER
     */
    homeType: 'NONE',

    /**
     * Cover Settings
     */
    coverSettings: [
      {
        description: '',
        index: 0,
        name: 'list',
        title: '',
        dataType: 'RECENT',
        data: {
          category: 'ALL',
          size: '5'
        }
      },
      {
        description: '',
        index: 0,
        name: 'gallery',
        title: '',
        dataType: 'CUSTOM',
        data: {
          title: '',
          summary: '',
          url: 'https://www.tistory.com',
          thumbnail: 'https://www.tistory.com/sample.png'
        }
      },
    ],

    /**
     * Skin Settings
     * 
     * @see https://tistory.github.io/document-tistory-skin/common/index.xml.html
     */ 
    skinSettings: {
      entriesOnPage: "5",
      entriesOnList: "5"
    },

    /**
     * Variables
     */
    variableSettings: {
      tidory: 'a Web Framework for Tistory Skin'
    }
  },

  /**
   * Build
   */
  build: {
    /**
     * Assets public path
     */
    public_path: null
  },

  /**
   * Template aliases
   */
  alias: {
    // as String
    '@styl': 'assets/styl',
    // as Function
    '@md': fn => fn.replace(/^@md/, 'assets/md')
  },

  /**
   * Webpack configuration extends
   * 
   * @param {object} webpackConfig
   */
  extends (webpackConfig) {
    webpackConfig.module.rules = [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      ...webpackConfig.module.rules
    ]
  }
}
```

### ts_session: string

**티스토리 세션** 값입니다. 티스토리에 로그인 한 이후 **쿠키 저장소**에 보면 **TSSESSION** 이라는 값이 있는데, 그것을 넣으면 됩니다. 해당 변수는 세션 값이기에 절대 외부로 노출되어서는 안 되며 스킨을 **프리뷰**하거나 **빌드 및 배포**하기 위한 용도로만 사용됩니다.

### url: string

**티스토리 블로그 주소**입니다. 세션과 마찬가지로 **프리뷰**하거나 **빌드 및 배포**하기 위해 사용됩니다. 자신이 가지고 있는 블로그여야 합니다.

### preview.mode: string

**프리뷰 모드**입니다. **프리뷰 서버**를 사용할 때 어느 페이지를 프리뷰 할 지 설정합니다. **홈**, **글**, **카테고리**, **태그**, **방명록**을 프리뷰할 수 있습니다.

### preview.homeType: string

[홈 커버](https://tistory.github.io/document-tistory-skin/common/cover.html)를 프리뷰할 때 사용합니다. `NONE` 은 최신 글, 커버를 개발할 때는 `COVER` 로 설정하여 사용합니다.

### preview.coverSettings: array[object]

[홈 커버](https://tistory.github.io/document-tistory-skin/common/cover.html)를 프리뷰할 때 사용합니다. **스킨 편집**에서 커버를 세팅할 필요 없이, 컨텐츠, 인덱스, 제목 등을 지정하여 프리뷰할 수 있습니다. [공식문서](https://tistory.github.io/document-tistory-skin/common/cover.html)에서 **기본값** 항목을 참고하시기 바랍니다.

> `preview.homeType` 이 `COVER` 로 설정되어 있어야 합니다.

### preview.skinSettings: object

[설정 기본값](https://tistory.github.io/document-tistory-skin/common/index.xml.html)을 프리뷰할 때 사용합니다.

### preview.variableSettings: object

[스킨 옵션](https://tistory.github.io/document-tistory-skin/common/variable.html)을 프리뷰할 때 사용합니다.

### build.public_path: string

**컴포넌트 자원 공개경로**를 설정합니다. 뷰, 리액트와 같은 컴포넌트에서 같이 자바스크립트를 통해 이미지와 같은 리소스를 사용하면 티스토리에 의해 경로가 자동으로 변환되지 않아 올바르게 로드될 수 없습니다. 따라서 `public_path` 를 설정해주어야 합니다. 해당 주소는 블로그마다 다릅니다. 공개 경로는 다음과 같이 생겼습니다.

```plaintext
https://tistory1.daumcdn.net/tistory/2710108/skin/images
```

**공개 경로**를 찾기위해서는, 적용시키려는 티스토리 블로그에 접속하여 브라우저에 내장된 **개발자 도구**를 열고 직접 경로를 알아내야 합니다. `script`, `link` 에 쓰여있는 리소스 경로를 주의깊게 살펴보십시오.

> 공개 경로는 `tidory production` 을 사용한 빌드과정 중, `ts_session` 의 설정 여부에 따라 **자동 주입**됩니다. 따라서 특별한 경우가 아니라면 직접 설정할 필요는 없습니다.

### alias: object

**템플릿 별칭**을 설정합니다. 문자열로 지정을 해줄 수도 있고 함수형태로 사용할 수도 있습니다. 함수의 파라매터는 해당 별칭이 사용된 자원의 **파일 이름**입니다. 템플릿에서는 다음과 같이 사용하는 것이 가능합니다.

```pug
//- assets/styl/app.styl
include @styl/app.styl
```

### extends(webpackConfig: object)

**웹팩 설정 확장**입니다. 파라매터로 웹팩 오브젝트가 들어가며 기본 웹팩설정 이외에 재정의, 추가하거나 확장해서 사용할 수 있습니다. 

> 티도리 프레임워크의 웹팩 버전은 현재 **Webpack 5** 입니다.
