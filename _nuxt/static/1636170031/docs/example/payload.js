__NUXT_JSONP__("/docs/example", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq){return {data:[{article:{slug:"example",index:4,category:l,title:O,toc:[{id:P,depth:Q,text:R},{id:S,depth:v,text:T},{id:U,depth:v,text:G},{id:V,depth:v,text:W},{id:X,depth:v,text:Y},{id:Z,depth:Q,text:_},{id:$,depth:v,text:H},{id:aa,depth:v,text:I}],body:{type:"root",children:[{type:b,tag:ab,props:{id:P},children:[{type:b,tag:m,props:{href:"#%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%9E%91%EC%84%B1",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:R}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"티스토리 예제로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 "},{type:b,tag:h,props:{},children:[{type:a,value:"블로그의 제목과 메뉴"}]},{type:a,value:"를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다."}]},{type:a,value:f},{type:b,tag:j,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-plaintext"]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"├── views\u002F\n│     ├── Header.pug\n│     ├── Header\n│           ├── Navigation.pug\n│           └── Title.pug\n└── index.pug\n"}]}]}]},{type:a,value:f},{type:b,tag:w,props:{id:S},children:[{type:b,tag:m,props:{href:"#indexpug",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:T}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"현재 "},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:" 파일이 포함되어 있습니다. 해당 템플릿은 "},{type:b,tag:h,props:{},children:[{type:a,value:"부모 템플릿"}]},{type:a,value:"이 됩니다. "},{type:b,tag:i,props:{},children:[{type:a,value:ac}]},{type:a,value:" 태그는 빌드하면 "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:" 파일로, "},{type:b,tag:i,props:{},children:[{type:a,value:"script"}]},{type:a,value:" 태그를 사용하면 "},{type:b,tag:h,props:{},children:[{type:a,value:"images\u002Fscript.js"}]},{type:a,value:" 파일로 분리됩니다."}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"만약 "},{type:b,tag:h,props:{},children:[{type:a,value:"스킨 옵션"}]},{type:a,value:"을 구현해야 할 때처럼, 분리가 되면 안 되는 상황이라면 어떨까요? "},{type:b,tag:i,props:{},children:[{type:a,value:"style, script"}]},{type:a,value:" 태그에 "},{type:b,tag:i,props:{},children:[{type:a,value:"scoped"}]},{type:a,value:" 속성을 부여하면 해당 태그는 "},{type:b,tag:h,props:{},children:[{type:a,value:"style.css, images\u002Fscript.js"}]},{type:a,value:" 로 분리되지 않습니다. 그 말은 즉, "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:" 에 남는다는 이야기가 됩니다."}]},{type:a,value:f},{type:b,tag:j,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,C]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"extends app"}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"block TIDORY"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"s_t3"}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j},{type:b,tag:c,props:{className:[d,"attr-id"]},children:[{type:a,value:ad}]}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"include views\u002FHeader"}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"."}]},{type:b,tag:c,props:{className:[d,"multiline-plain-text"]},children:[{type:a,value:"\n    #__tidory {\n      height: 100vh;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      text-align: center;\n    }"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:w,props:{id:U},children:[{type:b,tag:m,props:{href:"#viewsheaderpug",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:G}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"이번에는 "},{type:b,tag:h,props:{},children:[{type:a,value:"Header\u002FTitle.pug"}]},{type:a,value:ae},{type:b,tag:h,props:{},children:[{type:a,value:"Header\u002FNavigation.pug"}]},{type:a,value:" 를 포함하고 있습니다. 각각 "},{type:b,tag:h,props:{},children:[{type:a,value:"블로그 제목"}]},{type:a,value:ae},{type:b,tag:h,props:{},children:[{type:a,value:"블로그 메뉴"}]},{type:a,value:"입니다. 이 둘은 "},{type:b,tag:h,props:{},children:[{type:a,value:"자식 템플릿"}]},{type:a,value:"입니다."}]},{type:a,value:f},{type:b,tag:j,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,C]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:K}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"include Header\u002FTitle"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"include Header\u002FNavigation"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:w,props:{id:V},children:[{type:b,tag:m,props:{href:"#viewsheadertitlepug",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:W}]},{type:a,value:f},{type:b,tag:j,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,C]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:L}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:ag}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:w,props:{id:X},children:[{type:b,tag:m,props:{href:"#viewsheadernavigationpug",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:Y}]},{type:a,value:f},{type:b,tag:j,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,C]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:ah}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:ab,props:{id:Z},children:[{type:b,tag:m,props:{href:"#%ED%94%84%EB%A1%9C%EB%8D%95%EC%85%98-%EC%BD%94%EB%93%9C",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:_}]},{type:a,value:f},{type:b,tag:x,props:{},children:[{type:a,value:"우리가 만든 스킨을 이제 "},{type:b,tag:h,props:{},children:[{type:a,value:"사용자에게 배포"}]},{type:a,value:"하거나 "},{type:b,tag:h,props:{},children:[{type:a,value:"자신의 블로그에 적용"}]},{type:a,value:"하기 위해 "},{type:b,tag:"nuxt-link",props:{to:ai},children:[{type:a,value:aj}]},{type:a,value:"를 하면 다음과 같은 코드로 나뉘어집니다."}]},{type:a,value:f},{type:b,tag:w,props:{id:$},children:[{type:b,tag:m,props:{href:"#skinhtml",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:H}]},{type:a,value:f},{type:b,tag:j,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-html"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:j}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:a,value:"__tidory"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:w,props:{id:aa},children:[{type:b,tag:m,props:{href:"#stylecss",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:j,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-css"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:ad}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"height"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"100"}]},{type:b,tag:c,props:{className:[d,"unit"]},children:[{type:a,value:"vh"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"align-items"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"display"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:" flex"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"justify-content"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"text-align"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:" center\n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:f}]}]}]}]},dir:"\u002Fdocs",path:an,extension:".md",createdAt:ao,updatedAt:ao},prev:{slug:"template",title:ap},next:{slug:"configuration",title:aq}}],fetch:{"0":{menuItems:[{category:l,items:[{category:l,title:"시작하기",path:"\u002Fdocs\u002Fget-started"},{category:l,title:"디렉터리",path:"\u002Fdocs\u002Fdirectory"},{category:l,title:ap,path:"\u002Fdocs\u002Ftemplate"},{category:l,title:O,path:an},{category:l,title:aq,path:"\u002Fdocs\u002Fconfiguration"},{category:l,title:aj,path:ai}]},{category:N,items:[{category:N,title:"자바스크립트 프레임워크",path:"\u002Fdocs\u002Fframework"},{category:N,title:"티도리 패키지",path:"\u002Fdocs\u002Fpackage"}]},{category:"티스토리 API",items:[{title:"Tistory for Javascript",path:"https:\u002F\u002Fgithub.com\u002Ftidory\u002Ftistory.js"},{title:"Tistory for PHP",path:"https:\u002F\u002Fgithub.com\u002Ftidory\u002Ftistory.php"},{title:"(Unofficial) Tistory Skin ",path:"https:\u002F\u002Fgithub.com\u002Ftidory\u002Ftistory-skin"}]},{category:"메타",items:[{title:"티스토리 스킨 가이드",path:"https:\u002F\u002Ftistory.github.io\u002Fdocument-tistory-skin"},{title:"패치노트",path:"https:\u002F\u002Fgithub.com\u002Ftidory\u002Fcli\u002Fblob\u002Fmaster\u002FCHANGELOG.md"},{title:"티도리 프레임워크 강좌",path:"https:\u002F\u002Fwww.inflearn.com\u002Fcourse\u002F%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC\u002F#"}]}],_asyncComputed:{}}},mutations:void 0}}("text","element","span","token","punctuation","\n","tag","strong","code","div","\n  ","튜토리얼","a","true",-1,"icon","icon-link","\u003E","nuxt-content-highlight","pre","line-numbers",3,"h3","p","keyword"," ","property",":","language-pug","\u003C","\u003C\u002F",";","views\u002FHeader.pug","skin.html","style.css","\n    ","header","h1","nav","스케일링 업","티스토리 예제","템플릿-작성",2,"템플릿 작성","indexpug","index.pug","viewsheaderpug","viewsheadertitlepug","views\u002FHeader\u002FTitle.pug","viewsheadernavigationpug","views\u002FHeader\u002FNavigation.pug","프로덕션-코드","프로덕션 코드","skinhtml","stylecss","h2","style","#__tidory"," 과 ","plain-text","[##_title_##]","[##_blog_menu_##]","\u002Fdocs\u002Fdeployment","빌드 및 배포","id","\""," center","\u002Fdocs\u002Fexample","2021-11-06T03:39:41.897Z","템플릿","환경설정")));