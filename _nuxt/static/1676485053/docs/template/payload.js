__NUXT_JSONP__("/docs/template", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{article:{slug:"template",index:3,category:c,title:i,toc:[{id:j,depth:k,text:l},{id:m,depth:k,text:n}],body:{type:"root",children:[{type:b,tag:o,props:{id:j},children:[{type:b,tag:h,props:{href:"#%EB%AC%B8%EC%84%9C-%EA%B5%AC%EC%A1%B0",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:l}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"티도리 프레임워크에서 템플릿은 "},{type:b,tag:h,props:{href:"https:\u002F\u002Fpugjs.org\u002Fapi\u002Fgetting-started.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"퍼그(Pug)"}]},{type:a,value:"를 사용합니다. "},{type:b,tag:e,props:{},children:[{type:a,value:"퍼그"}]},{type:a,value:"는 HTML 파트별로 나누고 코드의 길이를 줄여주는 효과적인 템플릿 엔진입니다. "},{type:b,tag:e,props:{},children:[{type:a,value:"티도리 프로젝트 템플릿"}]},{type:a,value:"에서는 크게 "},{type:b,tag:e,props:{},children:[{type:a,value:"app.pug, index.pug, views\u002F*.pug"}]},{type:a,value:" 로 구성되어 있습니다. 각각이 어떻게 연결되어있는지 살펴보죠!"}]},{type:a,value:d},{type:b,tag:o,props:{id:m},children:[{type:b,tag:h,props:{href:"#%EC%BD%94%EB%93%9C-%EB%B6%84%ED%95%A0",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:n}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"우리가 템플릿을 분리해야하는 가장 중요한 이유는 "},{type:b,tag:e,props:{},children:[{type:a,value:"재활용"}]},{type:a,value:"입니다. 템플릿 하나에는 "},{type:b,tag:e,props:{},children:[{type:a,value:"스타일, 마크업, 스크립트"}]},{type:a,value:"가 통째로 들어가기 때문에 다른 스킨을 제작할 때 포함시키기만 하면 다시 작성하지 않아도 됩니다."}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"자, 이제 우리가 다음과 같은 구조로 템플릿을 분리해 놓았다고 생각해봅시다. 이렇게 1차적으로 크게 분리된 것이 "},{type:b,tag:e,props:{},children:[{type:a,value:"부모 템플릿"}]},{type:a,value:"입니다. 이제 각 영역에 속할 "},{type:b,tag:e,props:{},children:[{type:a,value:"자식 템플릿"}]},{type:a,value:"을 만들어봐야 합니다."}]},{type:a,value:d},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,"language-text"]},children:[{type:b,tag:y,props:{},children:[{type:a,value:"├── views\u002F\n│     ├── Header.pug\n│     ├── Content.pug\n│     ├── Sidebar.pug\n│     └── Footer.pug\n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"이렇게 나뉘어 있는 것을 조금 더 세부적으로 분리해보겠습니다. 자식 템플릿의 위치는 절대적인 것은 아니나, 부모 템플릿의 이름과 똑같은 폴더 아래에 놓는 것을 원칙으로 합니다."}]},{type:a,value:d},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,"language-plaintext"]},children:[{type:b,tag:y,props:{},children:[{type:a,value:"├── views\u002F\n│     ├── Header.pug\n│     ├── Header\n│           ├── BlogTitle.pug\n│           └── BlogMenu.pug\n│     ├── Content.pug\n│     ├── Content\n│           └── Entry.pug\n│     ├── Sidebar.pug\n│     └── Footer.pug\n"}]}]}]}]},dir:"\u002Fdocs",path:z,extension:".md",createdAt:A,updatedAt:A},prev:{slug:"directory",title:B},next:{slug:"example",title:C}}],fetch:{"0":{docs:[{category:c,title:"시작하기",path:"\u002Fdocs\u002Fget-started"},{category:c,title:B,path:"\u002Fdocs\u002Fdirectory"},{category:c,title:i,path:z},{category:c,title:C,path:"\u002Fdocs\u002Fexample"},{category:c,title:"환경설정",path:"\u002Fdocs\u002Fconfiguration"},{category:c,title:"빌드 및 배포",path:"\u002Fdocs\u002Fdeployment"},{category:f,title:"환경변수",path:"\u002Fdocs\u002Fenvironment-variables"},{category:f,title:"API",path:"\u002Fdocs\u002Fapi"},{category:f,title:"프레임워크",path:"\u002Fdocs\u002Fframework"},{category:f,title:"패키지",path:"\u002Fdocs\u002Fpackage"}],docsCategories:[c,f],links:[{category:"티스토리 API",items:[{title:"Open API",path:"https:\u002F\u002Fgithub.com\u002Fsearch?q=user%3Atistory-projects+tistory-api&type=public"},{title:"Tistory Skin API",path:"https:\u002F\u002Fgithub.com\u002Ftistory-projects\u002Ftistory-skin"}]},{category:"메타",items:[{title:"패치노트",path:"https:\u002F\u002Fgithub.com\u002Ftidory\u002Fcli\u002Fblob\u002Fmaster\u002FCHANGELOG.md"},{title:"티스토리 스킨 가이드",path:"https:\u002F\u002Ftistory.github.io\u002Fdocument-tistory-skin"}]}]}},mutations:void 0}}("text","element","튜토리얼","\n","strong","스케일링 업","p","a","템플릿","문서-구조",2,"문서 구조","코드-분할","코드 분할","h2","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","code","\u002Fdocs\u002Ftemplate","2023-02-15T18:16:41.760Z","디렉터리","티스토리 예제")));