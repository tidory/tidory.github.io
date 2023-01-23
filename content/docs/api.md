---
index: 7
category: 스케일링 업
title: API
---

## API

티도리 프레임워크에서 사용할 수 있는 API 로는 `style`, `script` 태그에서 사용가능한 `fixed`, `once` 디렉티브를 제공합니다.

### fixed

만약 **스킨 옵션**을 구현해야 할 때처럼, 분리하면 안 되는 상황이라면 어떨까요? `fixed` 속성을 부여하면 해당 태그는 **style.css**, **images/script.js** 로 분리되지 않습니다. 그 말은 즉, **skin.html** 에 남는다는 이야기가 됩니다.

```pug
style(fixed).
  :root {
    --h-width: [##_var_width_##]px;
  }

script(fixed).
  window.skinOptions = {
    width: '[##_var_width_##]'
  }
```

### once

때때로 공통 템플릿을 여러 번 포함하고 싶은데 내부에 `style`, `script` 를 함께 두고 싶은 경우도 있습니다. 이런 경우 마크업은 의도대로 여러 번 포함시키지만 정작 스타일과 스크립트까지 같이 포함되는 일이 발생합니다. 

예를 들어서 **Parmalink** 템플릿에 **TOC(Table Of Contents)** 가 포함된다고 가정하였을 때, **Permalink** 템플릿의 마크업을 믹스인으로 묶었다고 가정해보죠.

```pug
mixin permalink(pageType, type)
  div(id=pageType)
    include permalink/TOC
    | #{`[##_${type}_rep_desc_##]`}
```

**permalink/TOC** 에는 다음과 같은 코드가 있을 수 있습니다. `style` 태그를 가지고 있음을 주목하세요.

```pug
#toc
  ol
    each item in toc
      li
        a(href=`#${item.id}`)= item.text
        
style.
  #toc { ... }
```

이 경우, `permalink` 믹스인을 게시글 뿐만 아니라 공지사항이나 페이지에도 사용하게 된다면 TOC 는 여러 번 포함되게 됩니다. 다음과 같이 사용한다면 어떨까요?

```pug
include Permalink

//- 공지사항
s_notice_rep
  s_permalink_article_rep
    +permalink('permalink', 'notice')
//- 글 및 페이지
s_article_rep
  s_permalink_article_rep
    +permalink('permalink', 'article')
  s_page_rep
    +permalink('page', 'article')
```

`permalink` 믹스인에는 TOC 가 포함되어 있으며, 그 템플릿에는 `style` 이 정의되어 있습니다. 즉, `peramlink` 믹스인을 사용할 수록 **TOC** 템플릿에 정의된 스타일이 중복해서 포함됨을 의미합니다. 이러한 것은 우리가 기대하는 동작이라고 볼 수 없습니다. 템플릿을 분리하는 이유는 재사용하기 위함인데, 그 의도에 부합하지 않습니다. 

이런 경우 `once` 속성을 부여하면 해당 태그는 중복해서 포함되더라도 한 번만 포함됩니다. `once=<id>` 와 같이 사용할 수 있습니다.

```pug
style(once='toc').
  #toc { ... }
```

티도리 프레임워크 내부에서 템플릿을 컴파일하는 과정에서 `once` 를 포함하고, 같은 `id` 를 가진 스타일 및 스크립트가 다수 존재하는 경우, 하나만 남기고 전부 지워버립니다.
