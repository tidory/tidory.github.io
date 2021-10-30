(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(e,t,n){var content=n(181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("5c1fa1c4",content,!0,{sourceMap:!1})},179:function(e,t,n){var content=n(183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("ea7dd5e8",content,!0,{sourceMap:!1})},180:function(e,t,n){"use strict";n(178)},181:function(e,t,n){var o=n(29)(!1);o.push([e.i,"#spy{position:absolute;top:0;width:180px;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px!important}#spy ul{border-left:1px dashed rgba(0,0,0,.2);top:50px;width:180px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;max-width:180px}#spy ul li a{font-size:.82rem}#spy ul li.uk-active a{transition-duration:.5s;color:rgba(0,0,0,.9);font-weight:500}#spy a[data-tag=h3]{padding-left:15px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),e.exports=o},182:function(e,t,n){"use strict";n(179)},183:function(e,t,n){var o=n(29)(!1);o.push([e.i,'#document{margin-top:25px;color:rgba(0,0,0,.85);position:relative}#document .version{font-weight:600;margin-left:5px;font-size:14px;color:#f0506e}#document .version:before{content:"#";color:#f0506e;margin-right:5px}#document header{text-align:center;margin-bottom:50px}#document header h1{font-weight:500;font-size:2.1em}#document header .page_number{margin-bottom:15px;color:#f0506e;font-weight:500;font-size:1.1em}#document article *{word-break:break-all}#document article h2>a,#document article h3>a{text-decoration:none;color:#000}#document article h2{font-weight:400;margin-bottom:35px;font-size:1.5em}#document article h2:before{content:"#";color:#f0506e;font-weight:400;margin-right:10px}#document article h3{font-size:1.2em}#document article h3,#document article h4{font-weight:500;margin-top:25px;margin-bottom:20px}#document article h4{font-size:1.1em}#document article p{margin:35px 0;line-height:1.9em}#document article ol{padding-left:20px}#document article ol li{line-height:1.9em;padding:10px 0}#document article ol li p{margin:8px 0}#document article b{color:#f0506e;font-weight:500}#document article a{text-decoration:underline}#document article pre{border-radius:5px;background:none;border:none}#document article pre>code{background-color:#f8f8f8;padding:15px}#document article blockquote{line-height:inherit;font-size:inherit;font-style:inherit}#document article .blockquote-type-1{border:1px solid rgba(0,0,0,.1);padding:15px}#document article .blockquote-type-1 p{margin:10px 0}#document article .blockquote-type-2{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em}#document article .blockquote-type-3{background-color:#f8f8f8;padding:15px;font-weight:400}#document footer .pager{margin-top:50px;display:flex;justify-content:space-between}#document footer .pager a{text-decoration:none!important}#document footer .pager .prev i{margin-right:3px}#document footer .pager .next i{margin-left:3px}@media (min-width:1200px){#document{padding-bottom:75px}}@media (max-width:1200px){#document{padding-bottom:35px}}',""]),e.exports=o},184:function(e,t,n){"use strict";n(185);var o=n(187),r=(n(50),{data:function(){return{spies:[]}},mounted:function(){var e=this.$parent.$refs.document,t=this.$refs.spy.querySelector("ul");this.setAnchorHeadings(e,"h2, h3"),this.extractHeadings(e,"h2, h3").forEach((function(e){var n=document.createElement("a");n.textContent=e.label,n.setAttribute("href",e.href),n.setAttribute("data-tag",e.tag);var o=document.createElement("li");o.appendChild(n),t.appendChild(o)})),UIkit.sticky("#spy > #spy__shadow",{offset:35}),UIkit.scrollspyNav("#spy ul",{closest:"li",offset:35})},methods:{setAnchorHeadings:function(e,t){Object(o.a)(e.querySelectorAll(t)).forEach((function(e){var t=encodeURIComponent(e.textContent).replace(/[0-9-_.!~*'()\s]/g,"-"),n=document.createElement("a");n.setAttribute("href","#"+t),n.textContent=e.textContent,e.innerHTML=n.outerHTML,e.setAttribute("id",t)}))},extractHeadings:function(e,t){return Object(o.a)(e.querySelectorAll(t)).reduce((function(e,t){var n=t.querySelector("a");return e.push({href:n.getAttribute("href"),label:t.textContent,tag:t.tagName.toLowerCase()}),e}),[])}}}),l=(n(180),n(8)),c=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"spy"}},[n("div",{ref:"spy",attrs:{id:"spy__shadow"}},[n("ul",{staticClass:"uk-nav uk-nav-default"},e._l(e.spies,(function(t){return n("li",{class:t.cls},[n("a",{attrs:{href:t.href}},[e._v(e._s(t.label))])])})),0)])])}),[],!1,null,null,null).exports,d=n(186),f=n.n(d),m={head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.title}},mounted:function(){hljs.initHighlighting(),this.$store.commit("activeMenu",this.index+1)},computed:{index:function(){var e=this;return this.$store.state.pages.findIndex((function(t){return t.href===e.$route.path}))},url:function(){return this.$store.state.pages[this.index].doc}},asyncComputed:{content:function(){return fetch(this.url).then((function(e){return e.text().then((function(text){return(new f.a).render(text)}))}))}},components:{ScrollSpy:c}},v=(n(182),Object(l.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{ref:"document",attrs:{id:"document"}},[n("header",[n("div",{staticClass:"page_number"},[e._v(e._s(e.index+1))]),n("h1",[e._v(e._s(e.$store.state.pages[e.index].label))])]),n("article",{domProps:{innerHTML:e._s(e.content)}}),n("footer",[n("div",{staticClass:"pager"},[e.index>0?n("div",{staticClass:"prev"},[n("a",{attrs:{href:e.$store.state.pages[e.index-1].href}},[n("i",{staticClass:"fas fa-angle-left"}),e._v("\n"+e._s(e.$store.state.pages[e.index-1].label))])]):e._e(),e.index<e.$store.state.pages.length?n("div",{staticClass:"next"},[n("a",{attrs:{href:e.$store.state.pages[e.index+1].href}},[e._v(e._s(e.$store.state.pages[e.index+1].label)+"\n"),n("i",{staticClass:"fas fa-angle-right"})])]):e._e()])]),n("ScrollSpy")],1)}),[],!1,null,null,null));t.a=v.exports},260:function(e,t,n){"use strict";n.r(t);var o={components:{AppPage:n(184).a},data:function(){return{pkg:'{\n  "name": "@tidory/example",\n  "version": "1.0.0",\n  "main": "assets/app.js",\n  "files": [\n    "assets",\n    "index.pug"\n  ]\n}',pkg2:'"dependencies": {\n  "@tidory/example": "github:tidory/example"\n}',template:"//- node_modules/@tidory/example/index\ninclude @tidory/example\n//- node_modules/@tidory/example/HelloWorld\ninclude @tidory/example/HelloWorld\n"}}},r=n(8),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("app-page",{attrs:{active:e.$store.state.menu.advanced.package.page,title:e.$store.state.menu.advanced.package.label}},[n("header",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"index"},[e._v(e._s(e.$store.state.menu.advanced.package.page))]),n("h1",[e._v(e._s(e.$store.state.menu.advanced.package.label))])]),n("main",{staticClass:"text",attrs:{slot:"text"},slot:"text"},[n("article",{staticClass:"paragraph"},[n("h2",[e._v("티도리 패키지")]),n("p",[e._v("프레임워크의 또 하나의 특징은, "),n("b",[e._v("다른 사람이 작성한 코드")]),e._v("를 프로젝트에 포함 시킬 수 있다는 점입니다. 티도리 프레임워크 또한 패키지를 작성하는 것으로 "),n("b",[e._v("다른 사람에게 자신의 코드를 제공")]),e._v("할 수 있습니다.")]),n("p",[e._v("티도리 패키지의 "),n("b",[e._v("기본 폴더구조는 티도리 프로젝트 템플릿")]),e._v("과 동일합니다. 하지만 "),n("b",[e._v("취급")]),e._v("을 "),n("b",[e._v("NPM 패키지")]),e._v("로 취급하기 때문에 "),n("b",[e._v("package.json")]),e._v(" 의 내용이 조금은 다릅니다.")]),n("h3",[e._v("package.json")]),n("p",[e._v("본질적으로 티도리 패키지는 "),n("b",[e._v("NPM 패키지")]),e._v("라고 보기에는 무리가 있습니다. 따라서 패키지에는 이름에 제약을 걸어둡니다. 티도리 패키지는 "),n("b",[e._v("@tidory")]),e._v(" 스코프 아래에 두는 것을 원칙으로 합니다. 또한 NPM 공식 레지스트리에 "),n("b",[e._v("공표(Publish)")]),e._v("하는 일이 없도록 하십시오.")]),n("pre",[n("code",{staticClass:"json"},[e._v(e._s(e.pkg))])]),n("p",[n("b",[e._v("티도리 프로젝트 템플릿")]),e._v("에는 "),n("b",[e._v("env, tidory.config.js")]),e._v(" 등 개발을 위한 파일이 포함되어 있는데, 실질적으로 어플리케이션에서 포함할 때는 의미가 없으므로 "),n("b",[e._v("files")]),e._v(" 배열에 포함시킬 필요가 없습니다. 위의 설정이 필수적인 것은 아니며, 필요에 따라 변경할 수 있습니다. 예를 들면 리액트, 뷰 컴포넌트가 있는 경우 해당 폴더를 포함시킬 수도 있겠죠.")])]),n("article",{staticClass:"paragraph"},[n("h2",[e._v("패키지 사용하기")]),n("p",[e._v("만들어진 패키지를 사용하려면 어떻게 하면 좋을까요? 예를 들면 패키지의 이름이 "),n("b",[e._v("example")]),e._v(" 이고, 패키지를 코드 저장소에 올렸다면, 프로젝트에서는 다음과 같이 포함될 수 있습니다.")]),n("pre",[n("code",{staticClass:"json"},[e._v(e._s(e.pkg2))])]),n("p",[e._v("위와 같이 수동으로 추가하지 않고, "),n("b",[e._v("npm install")]),e._v(" 명령으로 추가하고 싶다면, 아래와 같은 명령을 작성하면 프로젝트의 "),n("b",[e._v("package.json")]),e._v(" 에 자동으로 추가됩니다. 깃허브의 레포지토리를 다운로드 하라는 의미입니다.")]),n("pre",[n("code",{staticClass:"bash"},[e._v("npm install tidory/example")])]),n("h3",[e._v("자식 패키지")]),n("p",[e._v("자바스크립트 프레임워크 컴포넌트를 포함한 각종 "),n("b",[e._v("자식 패키지")]),e._v("가 포함된 티도리 패키지를 사용하고 싶다면, 일반 NPM 패키지처럼 "),n("b",[e._v("app.js")]),e._v(" 에서 포함할 수 있습니다.")]),n("pre",[n("code",{staticClass:"javascript"},[e._v('require("@tidory/example")')])]),n("p"),n("blockquote",{staticClass:"blockquote-type-2"},[n("b",[e._v("자식 패키지")]),e._v("는 티도리 패키지를 포함하여 사용될 수 있는 범용 NPM 패키지를 지칭하는 것입니다.")]),n("p"),n("h3",[e._v("템플릿에 포함하기")]),n("p",[e._v("티도리 패키지에 포함된 "),n("b",[e._v("템플릿")]),e._v("을 포함하려면, 퍼그에서 제공하는 "),n("b",[e._v("include")]),e._v(" 키워드를 통해 포함시킬 수 있습니다. "),n("b",[e._v("템플릿 별칭")]),e._v("을 지정하지 않았다면, 경로를 전부 입력해야 합니다. 하지만, "),n("b",[e._v("@tidory")]),e._v(" 별칭은 티도리 프레임워크 내부에 미리 등록되어 있습니다.")]),n("pre",[n("code",{staticClass:"less"},[e._v("include node_modules/@tidory/example/index")])]),n("p"),n("blockquote",{staticClass:"blockquote-type-2"},[e._v("템플릿 별칭은 "),n("a",{attrs:{href:e.$store.state.menu.basic.configuration.href}},[e._v("환경설정")]),e._v("에서 알아볼 수 있습니다.")]),n("p"),n("h3",[e._v("@tidory")]),n("p",[n("b",[e._v("@tidory")]),e._v(" 별칭은 미리 정의된 템플릿 별칭입니다. "),n("b",[e._v("@tidory/package")]),e._v(" 형식으로 사용하면 "),n("b",[e._v("node_modules/@tidory/package/index.pug")]),e._v(" 를 포함하며 만약 같은 패키지에 속한 다른 템플릿을 포함시키고 싶다면 "),n("b",[e._v("@tidory/package/HelloWorld")]),e._v(" 와 같은 방식으로 포함시킬 수 있습니다.")]),n("pre",[n("code",{staticClass:"less"},[e._v(e._s(e.template))])]),n("p"),n("blockquote",{staticClass:"blockquote-type-2"},[n("b",[e._v("다른 티도리 패키지")]),e._v("를 사용하는 패키지 개발 시 "),n("b",[e._v("@tidory")]),e._v(" 별칭을 사용하여 포함시킬 수 있습니다.")]),n("p")])]),n("footer",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[n("div",{staticClass:"arrows"},[n("div",{staticClass:"left"},[n("a",{attrs:{href:e.$store.state.menu.advanced.framework.href}},[n("i",{staticClass:"fas fa-angle-left"}),e._v(" "+e._s(e.$store.state.menu.advanced.framework.label))])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);