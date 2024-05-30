---
index: 7
category: 스케일링 업
title: 환경변수
---

## .env

**.env** 는 템플릿 내부 또는 **app.js** 에서 사용하는 상수 설정 파일입니다. 프레임워크에서 직접 사용하는 것이 아닌 템플릿에서 사용된다는 점에서 **tidory.config.js** 와 구별됩니다.

예를 들어 티스토리에 API에 등록된 앱을 사용하기 위해 다음과 같이 **티스토리 API** 로그인을 위한 상수가 정의되어 있다고 가정해봅시다.

```ini
TISTORY_CLIENT_ID=dc08305218d22fb1af479b044d4707d0
TISTORY_CALLBACK=http://localhost:8080
```

이제 이렇게 정의된 환경변수는 **템플릿 내부**와 **컴포넌트**에서 사용할 수 있습니다. 환경변수는 **컴파일 타임**에 `process.env` 에 정의됩니다.

```pug
form(method="GET" action="https://www.tistory.com/oauth/authorize/")
  input(type="hidden"
    name="client_id"
    value=`${process.env.TISTORY_CLIENT_ID}`)
  input(type="hidden"
    name="redirect_uri"
    value=`${process.env.TISTORY_CALLBACK}`)
  input(type="hidden" name="response_type" value="token")
  button(type="submit") Sign in with TISTORY
```
