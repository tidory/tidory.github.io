---
index: 8
category: 스케일링 업
title: API
---

## fixed

만약 **스킨 옵션**을 구현해야 할 때처럼, 스타일 및 스크립트가 분리되면 안 되는 상황이라면 어떨까요? `fixed` 속성을 부여하면 해당 태그는 따로 분리되지 않습니다. 그 말은 즉, **skin.html** 에 남는다는 이야기가 됩니다.

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

## once

때때로 공통 템플릿을 여러 번 포함하고 싶은데 특정 태그는 한 번만 포함하길 원하는 경우가 있습니다. 예를 들어서 믹스인에 템플릿이 포함된다고 가정해봅시다.

```pug
mixin permalink(pageType, type)
  div(id=pageType)
    include permalink/TOC
    | #{`[##_${type}_rep_desc_##]`}
```

템플릿에는 다음과 같은 코드가 있을 수 있습니다. `style` 을 가지고 있음을 주목하세요.

```pug
#toc
  ol
    each item in toc
      li
        a(href=`#${item.id}`)= item.text
        
style.
  #toc { ... }
```

이 경우, 믹스인을 게시글 뿐만 아니라 공지사항이나 페이지에도 사용하게 된다면 템플릿은 여러 번 포함되고, 믹스인을 사용할 수록 템플릿에 정의된 스타일이 중복해서 포함됩니다. 이러한 것은 우리가 기대하는 동작이라고 볼 수 없습니다.

```pug
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

이를 해결하기 위해서 `once` 속성을 부여하면 중복해서 포함되더라도 한 번만 포함됩니다. `once=<id>` 와 같이 사용할 수 있습니다. `id` 는 **태그가 아닌 프로젝트 단위로 고유**해야 합니다.

```pug
style(once='toc')
```

티도리 프레임워크 내부에서 템플릿을 컴파일하는 과정에서 `once` 를 포함하고, 같은 `id` 를 가진 태그가 다수 존재하는 경우, 하나만 남기고 전부 지워버립니다. 또한 먼저 나온 태그를 남기기 때문에 순서를 신경써야 합니다.
