__NUXT_JSONP__("/docs/example", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR){return {data:[{article:{slug:ac,index:4,category:t,title:ad,toc:[{id:ae,depth:af,text:ag},{id:ah,depth:A,text:ai},{id:aj,depth:A,text:L},{id:ak,depth:A,text:al},{id:am,depth:A,text:an},{id:ao,depth:af,text:ap},{id:aq,depth:A,text:M},{id:ar,depth:A,text:H}],body:{type:"root",children:[{type:b,tag:as,props:{id:ae},children:[{type:b,tag:l,props:{href:"#%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%9E%91%EC%84%B1",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"티스토리 예제로 템플릿 작성의 기초를 알아보겠습니다. 간단하게 "},{type:b,tag:i,props:{},children:[{type:a,value:"블로그의 제목과 메뉴"}]},{type:a,value:"를 출력하는 것을 해보죠. 우리가 작성할 예제의 폴더구조는 다음과 같습니다."}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,"language-plaintext"]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"├── views\u002F\n│     ├── Header.pug\n│     ├── Header\n│           ├── Navigation.pug\n│           └── Title.pug\n└── index.pug\n"}]}]}]},{type:a,value:f},{type:b,tag:B,props:{id:ah},children:[{type:b,tag:l,props:{href:"#indexpug",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"현재 "},{type:b,tag:i,props:{},children:[{type:a,value:L}]},{type:a,value:" 파일이 포함되어 있습니다. 해당 템플릿은 "},{type:b,tag:i,props:{},children:[{type:a,value:"부모 템플릿"}]},{type:a,value:"이 됩니다. "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" 태그는 빌드하면 "},{type:b,tag:i,props:{},children:[{type:a,value:H}]},{type:a,value:" 파일로, "},{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:a,value:" 태그를 사용하면 "},{type:b,tag:i,props:{},children:[{type:a,value:at}]},{type:a,value:" 파일로 분리됩니다."}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"extends app"}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"block TIDORY"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"s_t3"}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:O}]}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"include views\u002FHeader"}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,"multiline-plain-text"]},children:[{type:a,value:"\n    #__tidory {\n      height: 100vh;\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      text-align: center;\n    }"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"또한 CSS 작업시 유용하게 사용할 수 있는 "},{type:b,tag:l,props:{href:"https:\u002F\u002Fpostcss.org",rel:[Q,R,S],target:T},children:[{type:a,value:"PostCSS"}]},{type:a,value:D},{type:b,tag:l,props:{href:"https:\u002F\u002Ftailwindcss.com\u002F",rel:[Q,R,S],target:T},children:[{type:a,value:"TailwindCSS"}]},{type:a,value:" 가 기본 템플릿에 포함되어 있습니다. 따라서 스타일 태그로 따로 분리하지 않아도 사용할 수 있습니다. 스타일이 대부분의 코드를 차지하는 티스토리 스킨의 특성상 TailwindCSS 와 함께 사용하면 생산성에서 큰 이점을 볼 수 있습니다. TailwindCSS 를 사용하기 위해서는 "},{type:b,tag:g,props:{},children:[{type:a,value:"@tailiwnd base"}]},{type:a,value:D},{type:b,tag:g,props:{},children:[{type:a,value:"@tailiwnd components"}]},{type:a,value:D},{type:b,tag:g,props:{},children:[{type:a,value:"@tailiwnd utilities"}]},{type:a,value:" 를 포함해야 하는데, 기본 템플릿에서 asserts\u002Fapp.css 를 살펴보면 다음과 같은 코드가 있습니다."}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,aw]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:a,value:" base"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,U]},children:[{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:a,value:" components"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,U]},children:[{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:a,value:" utilities"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"app.css 는 index.pug 에서 "},{type:b,tag:g,props:{},children:[{type:a,value:X}]},{type:a,value:" 필터를 사용하고 있습니다. "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Ftidory\u002Fpostcss-pug-filter",rel:[Q,R,S],target:T},children:[{type:a,value:"postcss-pug-filter"}]},{type:a,value:" 는 티도리 프레임워크에 내장되어 있으며 다음과 같이 사용되어 있습니다. PostCSS, TailwindCSS 는 프레임워크에서 사용이 강제되지 않습니다. 사용하고 싶지 않다면 "},{type:b,tag:g,props:{},children:[{type:a,value:X}]},{type:a,value:" 필터를 사용하지 않으면 그만입니다."}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"include:postcss @\u002Fapp.css"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ax}]},{type:a,value:" 에 TailwindCSS 의 클래스를 나열할 수도 있고, "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" 에서 TailwindCSS 의 "},{type:b,tag:g,props:{},children:[{type:a,value:"@apply"}]},{type:a,value:" 를 사용할 수도 있습니다. "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" 에서 사용할 때는 "},{type:b,tag:g,props:{},children:[{type:a,value:X}]},{type:a,value:" 필터를 사용하는 것을 잊지마세요!"}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,ay]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,aA]},children:[{type:b,tag:c,props:{className:[d,aB]},children:[{type:a,value:"\"h-screen flex justify-center text-center items-center\""}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aC}]}]}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,"filter"]},children:[{type:b,tag:c,props:{className:[d,"filter-name",aD]},children:[{type:a,value:":postcss"}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,a]},children:[{type:a,value:"#__tidory {\n      @apply h-screen flex justify-center text-center items-center\n    }"}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"h4",props:{id:I},children:[{type:b,tag:l,props:{href:"#fixed",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"만약 "},{type:b,tag:i,props:{},children:[{type:a,value:"스킨 옵션"}]},{type:a,value:"을 구현해야 할 때처럼, 분리하면 안 되는 상황이라면 어떨까요? "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:D},{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:a,value:" 에 "},{type:b,tag:g,props:{},children:[{type:a,value:I}]},{type:a,value:" 속성을 부여하면 해당 태그는 "},{type:b,tag:i,props:{},children:[{type:a,value:H}]},{type:a,value:D},{type:b,tag:i,props:{},children:[{type:a,value:at}]},{type:a,value:" 로 분리되지 않습니다. 그 말은 즉, "},{type:b,tag:i,props:{},children:[{type:a,value:M}]},{type:a,value:" 에 남는다는 이야기가 됩니다."}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:N},{type:b,tag:c,props:{className:[d,ay]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aC}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,"multiline-script"]},children:[{type:a,value:j},{type:b,tag:c,props:{className:[d,"dom",aD]},children:[{type:a,value:"window"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,"property-access"]},children:[{type:a,value:"skinOptions"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:Z}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aF}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,"literal-property",E]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:F}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,aB]},children:[{type:a,value:"'[##_var_example_##]'"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aG}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:B,props:{id:aj},children:[{type:b,tag:l,props:{href:"#viewsheaderpug",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:L}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"이번에는 "},{type:b,tag:i,props:{},children:[{type:a,value:"Header\u002FTitle.pug"}]},{type:a,value:D},{type:b,tag:i,props:{},children:[{type:a,value:"Header\u002FNavigation.pug"}]},{type:a,value:" 를 포함하고 있습니다. 각각 "},{type:b,tag:i,props:{},children:[{type:a,value:"블로그 제목"}]},{type:a,value:" 과 "},{type:b,tag:i,props:{},children:[{type:a,value:"블로그 메뉴"}]},{type:a,value:"입니다. 이 둘은 "},{type:b,tag:i,props:{},children:[{type:a,value:"자식 템플릿"}]},{type:a,value:"입니다."}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:_}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"include Header\u002FTitle"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"include Header\u002FNavigation"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:B,props:{id:ak},children:[{type:b,tag:l,props:{href:"#viewsheadertitlepug",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:al}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:$}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,aH]},children:[{type:a,value:aI}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:B,props:{id:am},children:[{type:b,tag:l,props:{href:"#viewsheadernavigationpug",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,y]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aa}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,aH]},children:[{type:a,value:aJ}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:as,props:{id:ao},children:[{type:b,tag:l,props:{href:"#%ED%94%84%EB%A1%9C%EB%8D%95%EC%85%98-%EC%BD%94%EB%93%9C",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"우리가 만든 스킨을 이제 "},{type:b,tag:i,props:{},children:[{type:a,value:"사용자에게 배포"}]},{type:a,value:"하거나 "},{type:b,tag:i,props:{},children:[{type:a,value:"자신의 블로그에 적용"}]},{type:a,value:"하기 위해 "},{type:b,tag:"nuxt-link",props:{to:aK},children:[{type:a,value:aL}]},{type:a,value:"를 하면 다음과 같은 코드로 나뉘어집니다."}]},{type:a,value:f},{type:b,tag:B,props:{id:aq},children:[{type:b,tag:l,props:{href:"#skinhtml",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:M}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,"language-html"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,aA]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aN}]},{type:a,value:"__tidory"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aN}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:B,props:{id:ar},children:[{type:b,tag:l,props:{href:"#stylecss",ariaHidden:p,tabIndex:q},children:[{type:b,tag:c,props:{className:[r,s]},children:[]}]},{type:a,value:H}]},{type:a,value:f},{type:b,tag:k,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,aw]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:b,tag:c,props:{className:[d,aM]},children:[{type:a,value:O}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aF}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"height"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"100"}]},{type:b,tag:c,props:{className:[d,"unit"]},children:[{type:a,value:"vh"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"align-items"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"display"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:" flex"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"justify-content"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"text-align"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:" center\n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aG}]},{type:a,value:f}]}]}]}]},dir:"\u002Fdocs",path:aP,extension:".md",createdAt:"2022-11-30T15:47:30.108Z",updatedAt:"2022-11-30T15:47:30.112Z"},prev:{slug:"template",title:aQ},next:{slug:"configuration",title:aR}}],fetch:{"0":{docs:[{category:t,title:"시작하기",path:"\u002Fdocs\u002Fget-started"},{category:t,title:"디렉터리",path:"\u002Fdocs\u002Fdirectory"},{category:t,title:aQ,path:"\u002Fdocs\u002Ftemplate"},{category:t,title:ad,path:aP},{category:t,title:aR,path:"\u002Fdocs\u002Fconfiguration"},{category:t,title:aL,path:aK},{category:ab,title:"패키지",path:"\u002Fdocs\u002Fpackage"},{category:ab,title:"프레임워크",path:"\u002Fdocs\u002Fframework"}],docsCategories:[t,ab],links:[{category:"티스토리 API",items:[{title:"Open API",path:"https:\u002F\u002Fgithub.com\u002Fsearch?q=user%3Atistory-projects+tistory-api&type=public"},{title:"Tistory Skin API",path:"https:\u002F\u002Fgithub.com\u002Ftidory\u002Ftistory-skin"}]},{category:"메타",items:[{title:"패치노트",path:"https:\u002F\u002Fgithub.com\u002Ftidory\u002Fcli\u002Fblob\u002Fmaster\u002FCHANGELOG.md"},{title:"티스토리 스킨 가이드",path:"https:\u002F\u002Ftistory.github.io\u002Fdocument-tistory-skin"}]}]}},mutations:void 0}}("text","element","span","token","punctuation","\n","code","tag","strong","\n  ","div","a","nuxt-content-highlight","pre","line-numbers","true",-1,"icon","icon-link","튜토리얼","p"," ","\u003E","style","language-pug",";",3,"h3","keyword",", ","property",":","\n    ","style.css","fixed","\u003C","\u003C\u002F","views\u002FHeader.pug","skin.html","script","#__tidory",".","nofollow","noopener","noreferrer","_blank","atrule","rule","@tailwind","postcss","attr-name","=","header","h1","nav","스케일링 업","example","티스토리 예제","템플릿-작성",2,"템플릿 작성","indexpug","index.pug","viewsheaderpug","viewsheadertitlepug","views\u002FHeader\u002FTitle.pug","viewsheadernavigationpug","views\u002FHeader\u002FNavigation.pug","프로덕션-코드","프로덕션 코드","skinhtml","stylecss","h2","images\u002Fscript.js","\n\n","attr-id","language-css","class","attributes","(","attr-value","string",")","variable","operator","{","}","plain-text","[##_title_##]","[##_blog_menu_##]","\u002Fdocs\u002Fdeployment","빌드 및 배포","id","\""," center","\u002Fdocs\u002Fexample","템플릿","환경설정")));