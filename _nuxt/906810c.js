(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(t,e,n){var content=n(181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("5c1fa1c4",content,!0,{sourceMap:!1})},179:function(t,e,n){var content=n(183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("ea7dd5e8",content,!0,{sourceMap:!1})},180:function(t,e,n){"use strict";n(178)},181:function(t,e,n){var r=n(29)(!1);r.push([t.i,"#spy{position:absolute;top:0;width:180px;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px!important}#spy ul{border-left:1px dashed rgba(0,0,0,.2);top:50px;width:180px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;max-width:180px}#spy ul li a{font-size:.82rem}#spy ul li.uk-active a{transition-duration:.5s;color:rgba(0,0,0,.9);font-weight:500}#spy a[data-tag=h3]{padding-left:15px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=r},182:function(t,e,n){"use strict";n(179)},183:function(t,e,n){var r=n(29)(!1);r.push([t.i,'#document{margin-top:25px;color:rgba(0,0,0,.85);position:relative}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#f0506e}#document .version:before{content:"#";color:#f0506e;margin-right:5px}#document header{text-align:center;margin-bottom:50px}#document header h1{font-weight:500;font-size:2.1em}#document header .page_number{margin-bottom:15px;color:#f0506e;font-weight:500;font-size:1.1em}#document article *{word-break:break-all}#document article h2>a,#document article h3>a{text-decoration:none;color:#000}#document article h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document article h2:before{content:"#";color:#f0506e;font-weight:400;margin-right:10px}#document article h3{font-size:1.2em}#document article h3,#document article h4{font-weight:500;margin-top:25px;margin-bottom:20px}#document article h4{font-size:1.1em}#document article p{margin:35px 0;line-height:1.9em}#document article ol{padding-left:20px}#document article ol li{line-height:1.9em;padding:10px 0}#document article ol li p{margin:8px 0}#document article b{color:#f0506e;font-weight:500}#document article a{text-decoration:underline}#document article pre{border-radius:5px;background:none;border:none}#document article pre>code{background-color:#f8f8f8;padding:15px}#document article blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document article .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document article .blockquote-type-1 p{margin:10px 0}#document article .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document article .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:400}#document footer .pager{margin-top:50px;display:flex;justify-content:space-between}#document footer .pager a{text-decoration:none!important}#document footer .pager .prev i{margin-right:3px}#document footer .pager .next i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}',""]),t.exports=r},184:function(t,e,n){"use strict";n(185);var r=n(187),o=(n(50),{data:function(){return{spies:[]}},mounted:function(){var t=this.$parent.$refs.document,e=this.$refs.spy.querySelector("ul");this.setAnchorHeadings(t,"h2, h3"),this.extractHeadings(t,"h2, h3").forEach((function(t){var n=document.createElement("a");n.textContent=t.label,n.setAttribute("href",t.href),n.setAttribute("data-tag",t.tag);var r=document.createElement("li");r.appendChild(n),e.appendChild(r)})),UIkit.sticky("#spy > #spy__shadow",{offset:35}),UIkit.scrollspyNav("#spy ul",{closest:"li",offset:35})},methods:{setAnchorHeadings:function(t,e){Object(r.a)(t.querySelectorAll(e)).forEach((function(t){var e=encodeURIComponent(t.textContent).replace(/[0-9-_.!~*'()\s]/g,"-"),n=document.createElement("a");n.setAttribute("href","#"+e),n.textContent=t.textContent,t.innerHTML=n.outerHTML,t.setAttribute("id",e)}))},extractHeadings:function(t,e){return Object(r.a)(t.querySelectorAll(e)).reduce((function(t,e){var n=e.querySelector("a");return t.push({href:n.getAttribute("href"),label:e.textContent,tag:e.tagName.toLowerCase()}),t}),[])}}}),l=(n(180),n(8)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"spy"}},[n("div",{ref:"spy",attrs:{id:"spy__shadow"}},[n("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.spies,(function(e){return n("li",{class:e.cls},[n("a",{attrs:{href:e.href}},[t._v(t._s(e.label))])])})),0)])])}),[],!1,null,null,null).exports,d=n(186),v=n.n(d),_={head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.title}},mounted:function(){hljs.initHighlighting(),this.$store.commit("activeMenu",this.index+1)},computed:{index:function(){var t=this;return this.$store.state.pages.findIndex((function(e){return e.href===t.$route.path}))},url:function(){return this.$store.state.pages[this.index].doc}},asyncComputed:{content:function(){return fetch(this.url).then((function(t){return t.text().then((function(text){return(new v.a).render(text)}))}))}},components:{ScrollSpy:c}},h=(n(182),Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"document",attrs:{id:"document"}},[n("header",[n("div",{staticClass:"page_number"},[t._v(t._s(t.index+1))]),n("h1",[t._v(t._s(t.$store.state.pages[t.index].label))])]),n("article",{domProps:{innerHTML:t._s(t.content)}}),n("footer",[n("div",{staticClass:"pager"},[t.index>0?n("div",{staticClass:"prev"},[n("a",{attrs:{href:t.$store.state.pages[t.index-1].href}},[n("i",{staticClass:"fas fa-angle-left"}),t._v("\n"+t._s(t.$store.state.pages[t.index-1].label))])]):t._e(),t.index<t.$store.state.pages.length?n("div",{staticClass:"next"},[n("a",{attrs:{href:t.$store.state.pages[t.index+1].href}},[t._v(t._s(t.$store.state.pages[t.index+1].label)+"\n"),n("i",{staticClass:"fas fa-angle-right"})])]):t._e()])]),n("ScrollSpy")],1)}),[],!1,null,null,null));e.a=h.exports},255:function(t,e,n){"use strict";n.r(e);var r={components:{AppPage:n(184).a},data:function(){return{deploy:'"scripts": {\n  "deploy": "tidory deploy"\n}',pushDir:'"scripts": {\n  "dist": "tidory production && push-dir --dir=dist --branch=tistory-skin --cleanup && tidory deploy"\n}',deployer:'const TistorySkin = require(\'tistory-skin\');\n\n/**\n * Deploy Tistory Skin\n *\n * @param {String} blogURL\n * @param {String} tsSession\n * @param {String} dist\n */\nasync function deploy(blogURL, tsSession, dist) {\n  /**\n   * Create TistorySkin instance\n   */\n  const skin = new TistorySkin(blogURL, tsSession);\n\n  // Clear current skin file storage\n  await skin.clear();\n  // Deploy\n  await skin.deploy(dist);\n}\n\ndeploy("https://pronist.tistory.com",\n       "efd0c5228b2b6c8a2db76275873bdf5a291626d0",\n       "./dist");'}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-page",{attrs:{active:t.$store.state.menu.basic.distribute.page,title:t.$store.state.menu.basic.distribute.label}},[n("header",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"index"},[t._v(t._s(t.$store.state.menu.basic.distribute.page))]),n("h1",[t._v(t._s(t.$store.state.menu.basic.distribute.label))])]),n("main",{staticClass:"text",attrs:{slot:"text"},slot:"text"},[n("article",{staticClass:"paragraph"},[n("h2",[t._v("빌드(Build)")]),n("p",[n("b",[t._v("빌드")]),t._v("는 티도리 프로젝트를 티스토리 또는 유저에게 배포하기 위해 "),n("b",[t._v("배포 파일을 만드는 과정")]),t._v("입니다. 소스코드가 "),n("b",[t._v("skin.html, style.css")]),t._v(" 로 분리되며 "),n("b",[t._v("app.js, script.js")]),t._v(" 가 생성됩니다. 또한 "),n("b",[t._v("docs")]),t._v(" 의 내부와 "),n("b",[t._v("images")]),t._v(" 가 복사됩니다.")]),n("pre",[n("code",{staticClass:"bash"},[t._v("# tidory production\nnpm run production")])])]),n("article",{staticClass:"paragraph"},[n("h2",[t._v("배포(Distribution)")]),n("p",[n("b",[t._v("배포")]),t._v("는 "),n("b",[t._v("현재 사용 중인 스킨을 덮어쓰는 모드")]),t._v("가 있고, "),n("b",[t._v("스킨저장소에 저장하는 모드")]),t._v("가 있습니다. 배포를 사용하려면 "),n("a",{attrs:{href:t.$store.state.menu.basic.configuration.href}},[t._v("환경설정")]),t._v("에 "),n("code",[t._v("ts_session, url")]),t._v(" 항목이 정상적으로 등록되어 있어야합니다.")]),n("p"),n("blockquote",{staticClass:"blockquote-type-2"},[t._v("배포를 하기 전에 먼저 빌드해야 합니다. "),n("b",[t._v("dist")]),t._v(" 디렉토리를 대상으로 배포하기 때문이죠.")]),n("p"),n("h3",[t._v("tidory store")]),n("p",[t._v("스킨의 "),n("b",[t._v("이름")]),t._v("은 "),n("b",[t._v("index.xml")]),t._v(" 에 있는 "),n("code",[t._v("name")]),t._v(" 값에 따라 자동적으로 주입됩니다.")]),n("pre",[n("code",{staticClass:"bash"},[t._v("# tidory store\nnpm run store")])]),n("h3",[t._v("tidory deploy")]),n("p",[t._v("현재 환경설정에 "),n("code",[t._v("url")]),t._v(" 에 지정된 블로그에 "),n("b",[t._v("skin.html, style.css, index.xml")]),t._v(" 파일을 적용시키고 업로드 되어 있는 모든 파일을 삭제하고 "),n("b",[t._v("images")]),t._v(" 폴더에 있는 파일을 다시 업로드합니다. 주로 유저에게 배포하기 전에 블로그에 미리 적용시켜보기 위해 사용합니다.")]),n("pre",[n("code",{staticClass:"bash"},[t._v("# tidory deploy\nnpm run deploy")])])]),n("article",{staticClass:"paragraph"},[n("h2",[t._v("프로덕션 코드")]),n("p"),n("blockquote",{staticClass:"blockquote-type-3"},[n("pre",[t._v("dist/\n├── images/\n│   ├── script.js\n│   └── app.js\n├── preview256.jpg\n├── preview560.jpg\n├── preview1600.jpg\n├── index.xml\n├── skin.html\n└── style.css")])]),n("p"),n("h3",[t._v("images/*")]),n("p",[n("b",[t._v("images")]),t._v(" 폴더는 템플릿 또는 컴포넌트에 포함된 리소스들이 모여있는 파일이며, 추가적으로 템플릿 내부에서 작성한 "),n("b",[t._v("scoped")]),t._v(" 속성이 사용되지 않은 "),n("b",[t._v("script")]),t._v(" 태그의 집합인 "),n("b",[t._v("script.js")]),t._v(", "),n("b",[t._v("assets/app.js")]),t._v(" 에서 포함한 에셋들의 집합인 "),n("b",[t._v("app.js")]),t._v(" 가 있습니다.")]),n("h3",[t._v("skin.html")]),n("p",[t._v("티스토리 스킨으로 업로드할 최종 "),n("b",[t._v("html")]),t._v(" 파일입니다.")]),n("h3",[t._v("style.css")]),n("p",[t._v("템플릿에 있는 "),n("b",[t._v("scoped")]),t._v(" 속성이 사용되지 않은 "),n("b",[t._v("style")]),t._v(" 태그들의 집합 파일입니다.")]),n("h3",[t._v("preview*.jpg")]),n("p",[n("b",[t._v("docs")]),t._v(" 폴더에 있던 미리보기 파일이며 "),n("b",[t._v("preview256.jpg, preview560.jpg, preview1600.jpg")]),t._v(" 파일이 존재합니다. 사용자에게 스킨 미리보기로써 제공됩니다.")]),n("h3",[t._v("index.xml")]),n("p",[n("b",[t._v("docs")]),t._v(" 폴더에 있던 "),n("b",[t._v("티스토리 스킨 설정")]),t._v("파일입니다.")])]),n("article",{staticClass:"paragraph"},[n("h2",[t._v("코드 저장소")]),n("p",[n("b",[t._v("깃허브(Github)")]),t._v("와 같은 코드 저장소와 스킨 코드를 연동하려면 어떻게 하면 좋을까요? 티스토리 스킨은 "),n("b",[t._v("FTP(File Transfer Protocol)")]),t._v("을 지원하는 것도 아니며 그렇다고 공식적으로 코드 저장소와의 코드 공유를 지원하지도 않습니다.")]),n("p",[t._v("하지만, 한 가지 해결책이 있습니다. 티도리 프레임워크를 통해 빌드된 소스코드를 코드 저장소에 배포하면서 동시에 티스토리 스킨에 코드를 적용시킨다면 가능합니다. "),n("b",[t._v("빌드(Build) - 코드 저장소 배포(Push) - 스킨 적용(Deploy)")]),t._v("의 과정을 통해 코드 저장소와 스킨 코드를 동일하게 구성할 수 있습니다.")]),n("h3",[t._v("push-dir")]),n("p",[n("b",[t._v("push-dir")]),t._v(" 은 코드 저장소에 특정 디렉토리를 특정 브랜치에 푸쉬할 수 있도록 해주는 패키지입니다. 해당 패키지가 있으면 스킨을 빌드하면 나오는 "),n("b",[t._v("dist")]),t._v(" 디렉토리만을 독립적으로 다른 브랜치에 올릴 수 있습니다.")]),n("pre",[n("code",{staticClass:"bash"},[t._v("npm install --save-dev push-dir")])]),n("h3",[t._v("package.json")]),n("p",[n("a",{attrs:{href:"https://github.com/tidory/tidory",target:"_blank",rel:"noreferrer"}},[t._v("티도리 프로젝트 템플릿")]),t._v("에 있는 "),n("b",[t._v("package.json")]),t._v(" 에 보면 아래와 같이 나와있는 것을 볼 수 있습니다. "),n("b",[t._v("npm run deploy")]),t._v(" 명령어는 빌드된 티스토리 스킨을 현재 스킨에 적용시키는 명령어입니다.")]),n("pre",[n("code",{staticClass:"javascript"},[t._v(t._s(t.deploy))])]),n("p",[n("b",[t._v("npm run dist")]),t._v(" 명령을 따로 만들고, 배포 순서에 따라 빌드를 하고, "),n("b",[t._v("push-dir")]),t._v(" 을 먼저 하는 것으로 코드 저장소에 푸쉬한 다음, 스킨에 적용시키도록 바꿔주면 코드 저장소와 스킨 코드를 동일하게 만들 수 있습니다. 티스토리에서 제공하는 "),n("b",[t._v("스킨 편집")]),t._v("은 없다고 여기십시오.")]),n("pre",[n("code",{staticClass:"javascript"},[t._v(t._s(t.pushDir))])]),n("p"),n("blockquote",{staticClass:"blockquote-type-2"},[t._v("위와 같이 명령어를 구성하면 "),n("b",[t._v("빌드(Build) - 코드 저장소 배포(Push) - 스킨 적용(Deploy)")]),t._v("의 순서로 배포를 자동화할 수 있습니다. 코드 저장소에 "),n("b",[t._v("tistory-skin")]),t._v(" 브랜치가 별도로 생성되어 개발코드가 아닌, 오직 스킨의 코드만 푸쉬됩니다.")]),n("p"),n("h2",[t._v("티스토리 스킨 API")]),n("p",[t._v("티도리 프레임워크가 아닌 "),n("b",[t._v("다른 프로젝트")]),t._v("에 자신의 스킨 프로젝트를 직접 연동할 수 있도록 만들어 보고 싶을 수도 있습니다. 티도리 프레임워크에서 "),n("b",[t._v("티스토리 서버와 통신")]),t._v("하는 부분(프리뷰, 배포, 저장)에는 필자가 작성한 "),n("b",[t._v("API(Application Programming Interface)")]),t._v("가 사용됩니다.")]),n("p",[n("a",{attrs:{href:"https://github.com/tidory/tistory-skin",target:"_blank",rel:"noreferrer"}},[t._v("(Unofficial) Tistory Skin")]),t._v(" 을 사용하면, "),n("b",[t._v("티스토리 스킨 저장소")]),t._v("를 조작을 할 수 있습니다. "),n("b",[t._v("스킨 편집")]),t._v("에 있는 대부분의 기능(파일 및 스킨 추가, 삭제, 프리뷰, 스킨코드 변경 등)을 프로그래밍이 가능한 형태로 제공합니다.")]),n("pre",[n("code",{staticClass:"javascript"},[t._v(t._s(t.deployer))])])])]),n("footer",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[n("div",{staticClass:"arrows"},[n("div",{staticClass:"left"},[n("a",{attrs:{href:t.$store.state.menu.basic.configuration.href}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(" "+t._s(t.$store.state.menu.basic.configuration.label))])]),n("div",{staticClass:"right"},[n("a",{attrs:{href:t.$store.state.menu.advanced.framework.href}},[t._v(t._s(t.$store.state.menu.advanced.framework.label)+" "),n("i",{staticClass:"fas fa-angle-right"})])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);