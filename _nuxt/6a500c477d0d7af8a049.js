(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(t,e,r){var content=r(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("5c1fa1c4",content,!0,{sourceMap:!1})},164:function(t,e,r){var content=r(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("ea7dd5e8",content,!0,{sourceMap:!1})},165:function(t,e,r){"use strict";var o=r(163);r.n(o).a},166:function(t,e,r){(e=r(20)(!1)).push([t.i,"#spy{position:absolute;top:0;width:180px;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px!important}#spy ul{border-left:1px dashed rgba(0,0,0,.2);top:50px;width:180px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;max-width:180px}#spy ul li a{font-size:.82rem}#spy ul li.uk-active a{transition-duration:.5s;color:rgba(0,0,0,.9);font-weight:500}#spy a[data-tag=h3]{padding-left:15px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=e},167:function(t,e,r){"use strict";var o=r(164);r.n(o).a},168:function(t,e,r){(e=r(20)(!1)).push([t.i,'#document{margin-top:25px;color:rgba(0,0,0,.85);position:relative}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#f0506e}#document .version:before{content:"#";color:#f0506e;margin-right:5px}#document .header{text-align:center;margin-bottom:50px}#document .header h1{font-weight:500;font-size:2.1em}#document .header .index{margin-bottom:15px;color:#f0506e;font-weight:500;font-size:1.1em}#document .paragraph{margin:35px 0}#document .paragraph *{word-break:break-all}#document .paragraph h2>a,#document .paragraph h3>a{text-decoration:none;color:#000}#document .paragraph h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document .paragraph h2:before{content:"#";color:#f0506e;font-weight:400;margin-right:10px}#document .paragraph h3{font-size:1.2em}#document .paragraph h3,#document .paragraph h4{font-weight:500;margin-top:25px;margin-bottom:20px}#document .paragraph h4{font-size:1.1em}#document .paragraph p{margin:25px 0;line-height:1.9em}#document .paragraph ol{padding-left:20px}#document .paragraph ol li{line-height:1.9em;padding:10px 0}#document .paragraph ol li p{margin:8px 0}#document .paragraph b{color:#f0506e;font-weight:500}#document .paragraph a{text-decoration:underline}#document .paragraph pre{border-radius:5px;background:none;border:none}#document .paragraph pre>code{background-color:#f8f8f8;padding:15px}#document .paragraph blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document .paragraph .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document .paragraph .blockquote-type-1 p{margin:10px 0}#document .paragraph .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document .paragraph .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:400}#document .footer .arrows{overflow:hidden;margin-top:50px}#document .footer .arrows a{text-decoration:none!important}#document .footer .arrows .left{float:left}#document .footer .arrows .left i{margin-right:3px}#document .footer .arrows .right{float:right}#document .footer .arrows .right i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}',""]),t.exports=e},169:function(t,e,r){"use strict";r(80);var o=r(64);var n=r(81);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l={data:function(){return{spies:[]}},mounted:function(){var t=this.$parent.$refs.document,e=this.$refs.spy.querySelector("ul");this.setAnchorHeadings(t,"h2, h3"),this.extractHeadings(t,"h2, h3").forEach((function(t){var r=document.createElement("a");r.textContent=t.label,r.setAttribute("href",t.href),r.setAttribute("data-tag",t.tag);var o=document.createElement("li");o.appendChild(r),e.appendChild(o)})),UIkit.sticky("#spy > #spy__shadow",{offset:35}),UIkit.scrollspyNav("#spy ul",{closest:"li",offset:35})},methods:{setAnchorHeadings:function(t,e){c(t.querySelectorAll(e)).forEach((function(t){var e=encodeURIComponent(t.textContent).replace(/[0-9-_.!~*'()\s]/g,"-"),r=document.createElement("a");r.setAttribute("href","#"+e),r.textContent=t.textContent,t.innerHTML=r.outerHTML,t.setAttribute("id",e)}))},extractHeadings:function(t,e){return c(t.querySelectorAll(e)).reduce((function(t,e){var r=e.querySelector("a");return t.push({href:r.getAttribute("href"),label:e.textContent,tag:e.tagName.toLowerCase()}),t}),[])}}},d=(r(165),r(7)),h={props:["active","title"],head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.title}},mounted:function(){hljs.initHighlighting(),this.$store.commit("activeMenu",this.active)},components:{ScrollSpy:Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"spy"}},[r("div",{ref:"spy",attrs:{id:"spy__shadow"}},[r("ul",{staticClass:"uk-nav uk-nav-default"},t._l(t.spies,(function(e){return r("li",{class:e.cls},[r("a",{attrs:{href:e.href}},[t._v(t._s(e.label))])])})),0)])])}),[],!1,null,null,null).exports}},f=(r(167),Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page"}},[e("section",{ref:"document",attrs:{id:"document"}},[this._t("header"),this._t("text"),this._t("footer"),e("ScrollSpy")],2)])}),[],!1,null,null,null));e.a=f.exports},175:function(t,e,r){"use strict";r.r(e);var o={components:{AppPage:r(169).a}},n=r(7),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-page",{attrs:{active:t.$store.state.menu.basic.getStarted.page,title:t.$store.state.menu.basic.getStarted.label}},[r("header",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"index"},[t._v(t._s(t.$store.state.menu.basic.getStarted.page))]),r("h1",[t._v(t._s(t.$store.state.menu.basic.getStarted.label))])]),r("main",{staticClass:"text",attrs:{slot:"text"},slot:"text"},[r("article",{staticClass:"paragraph"},[r("h2",[t._v("Tidory CLI")]),r("p",[r("b",[t._v("Tidory CLI")]),t._v(" 는 티도리 프레임워크의 템플릿과 상호작용하기 위한 "),r("b",[t._v("CLI(Command Line Interface)")]),t._v(" 환경에서 실행하는 "),r("b",[t._v("NPM(Node Package Manager)")]),t._v(" 패키지입니다. 개발 서버를 켜거나, 빌드 및 배포를 할 때 사용합니다. 다음과 같은 명령을 사용하여 템플릿을 받아온 뒤, 프로젝트 구동을 위한 "),r("b",[t._v("NPM")]),t._v(" 패키지들을 설치하십시오.")]),r("pre",[r("code",{staticClass:"bash"},[t._v("# Download tidory project template\ngit clone https://github.com/tidory/tidory my-app\n# Move into the folder\ncd my-app\n# Install NPM Packages\nnpm install")])]),r("p"),r("blockquote",{staticClass:"blockquote-type-2"},[t._v("티도리 프레임워크를 통해 티스토리 스킨을 개발하기 위해서는 "),r("a",{attrs:{href:"https://git-scm.com"}},[t._v("Git")]),t._v(", "),r("a",{attrs:{href:"https://nodejs.org/ko"}},[t._v("Node.js")]),t._v(" 가 필수적으로 사용됩니다. 따라서 먼저 시작하기 전에 해당 개발도구가 설치되어 있는지 살펴보시기 바랍니다.")]),r("p")]),r("article",{staticClass:"paragraph"},[r("h2",[t._v("라이브(Live) 서버")]),r("p",[t._v("데모로 작성되어있는 앱을 어떻게 실행시키면 될까요? 간단하게 알아보도록 하겠습니다. "),r("b",[t._v("tidory start")]),t._v(" 명령을 사용하면 "),r("b",[t._v("http://localhost:8080")]),t._v(" 주소로 "),r("b",[t._v("webpack-dev-server")]),t._v(" 를 실행시킬 수 있습니다. 프리뷰 서버는 "),r("b",[t._v("tidory preview")]),t._v(" 로 시작할 수 있으며 "),r("b",[t._v("http://localhost:3000")]),t._v(" 에서 시작합니다.")]),r("h3",[t._v("개발(Development) 서버")]),r("p",[r("b",[t._v("개발(Development)")]),t._v(" 서버는 "),r("b",[t._v("치환자가 동작하지 않은 모습 그대로")]),t._v("를 보여줍니다. 해석 이전에 스킨자체의 모습을 볼 때 주로 사용합니다. 또한 치환자를 직접넣기 전에 더미데이터로 디자인을 구성할 때 사용하는 것도 좋습니다.")]),r("pre",[r("code",{staticClass:"bash"},[t._v("npm start # tidory start")])]),r("h3",[t._v("프리뷰(Preview) 서버")]),r("p",[r("b",[t._v("프리뷰(Preview)")]),t._v(" 서버는 티스토리에 직접 요청을 보내고 "),r("b",[t._v("치환자가 해석된 모습")]),t._v("을 렌더링합니다. 홈, 글, 카테고리 등 "),r("b",[t._v("프리뷰 모드(Mode)")]),t._v("를 지정하여 티스토리 서버에 올라갔을 때의 모습을 볼 수 있습니다.")]),r("p"),r("blockquote",{staticClass:"blockquote-type-2"},[t._v("프리뷰 서버를 실행하려면 "),r("a",{attrs:{href:t.$store.state.menu.basic.configuration.href}},[t._v("환경설정")]),t._v("에서 "),r("b",[t._v("ts_session, url, mode")]),t._v(" 가 설정되어 있어야 합니다.")]),r("p"),r("pre",[r("code",{staticClass:"bash"},[t._v("npm run preview # tidory preview")])])]),r("article",{staticClass:"paragraph"},[r("h2",[t._v("빌드 및 배포")]),r("p",[r("b",[t._v("빌드 및 배포")]),t._v("는 기본적으로 "),r("b",[t._v("tidory production")]),t._v(" 명령과 "),r("b",[t._v("tidory store")]),t._v(" 가 있습니다. 빌드와 배포를 하는 여러 방법이 있지만, 시작하기 단계에서는 자세한 설명없이 넘어가도록 하겠습니다. 자세한 내용은 "),r("a",{attrs:{href:t.$store.state.menu.basic.distribute.href}},[t._v("빌드 및 배포")]),t._v(" 문서를 참고해 주시기 바랍니다.")]),r("pre",[r("code",{staticClass:"bash"},[t._v("npm run production # tidory production")])])])]),r("footer",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[r("div",{staticClass:"arrows"},[r("div",{staticClass:"left"},[r("a",{attrs:{href:t.$store.state.menu.prologue.intro.href}},[r("i",{staticClass:"fas fa-angle-left"}),t._v(" "+t._s(t.$store.state.menu.prologue.intro.label))])]),r("div",{staticClass:"right"},[r("a",{attrs:{href:t.$store.state.menu.basic.directory.href}},[t._v(t._s(t.$store.state.menu.basic.directory.label)+" "),r("i",{staticClass:"fas fa-angle-right"})])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);