(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4],{269:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("20b05aee",content,!0,{sourceMap:!1})},270:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("2a310620",content,!0,{sourceMap:!1})},271:function(t,e,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("6df90f80",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n(269)},273:function(t,e,n){var o=n(28)(!1);o.push([t.i,"#spy{position:absolute;top:0;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px!important;height:100%}#spy ul{position:-webkit-sticky;position:sticky;top:35px;border-left:1px dashed;border-left-color:var(--color-border);width:180px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;margin:8px 0;max-width:180px}#spy ul li a{font-size:.82rem}#spy ul li.h3{padding-left:35px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=o},274:function(t,e,n){"use strict";n(270)},275:function(t,e,n){var o=n(28)(!1);o.push([t.i,"#pagination{margin-top:50px;overflow:hidden}#pagination a{text-decoration:none!important;color:var(--color)}#pagination .prev{float:left}#pagination .prev i{margin-right:8px}#pagination .next{float:right}#pagination .next i{margin-left:8px}",""]),t.exports=o},276:function(t,e,n){"use strict";n.r(e);var o={props:{toc:{type:Array,required:!0}}},r=(n(272),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{attrs:{id:"spy"}},[n("ul",t._l(t.toc,(function(link){return n("li",{key:link.id,class:{h2:2===link.depth,h3:3===link.depth}},[n("a",{attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var o={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},r=(n(274),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pagination"}},[t.prev?n("div",{staticClass:"prev"},[n("nuxt-link",{attrs:{to:{params:{slug:t.prev.slug}}}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(t._s(t.prev.title))])],1):t._e(),t.next?n("div",{staticClass:"next"},[n("nuxt-link",{attrs:{to:{params:{slug:t.next.slug}}}},[t._v(t._s(t.next.title)),n("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n(271)},279:function(t,e,n){var o=n(28),r=n(280),l=n(281),c=o(!1),d=r(l);c.push([t.i,"#document{position:relative}#document article{color:var(--color)}#document article h1{text-align:center;margin-bottom:50px;font-weight:500;font-size:2.1rem}#document article *{word-break:break-all}#document article h2>a,#document article h3>a{text-decoration:none}#document article h2{font-weight:400;margin-top:25px;margin-bottom:20px;font-size:1.4rem}#document article h2 .icon.icon-link{background-image:url("+d+");display:inline-block;width:20px;height:20px;background-size:20px 20px;margin-right:3px;filter:var(--color-filter-invert)}#document article h3{font-size:1.1rem}#document article h3,#document article h4{font-weight:500;margin-top:25px;margin-bottom:20px}#document article h4{font-size:1rem}#document article p{margin:25px 0;line-height:1.8rem}#document article ol,#document article ul{list-style-type:disc;padding-left:20px}#document article ol li,#document article ul li{line-height:1.8rem;padding:10px 0}#document article ol li p,#document article ul li p{margin:8px 0}#document article b,#document article strong{color:var(--color-highlight);font-weight:500}#document article a{text-decoration:underline;color:var(--color-highlight)}#document article pre[class*=language-]{border-radius:5px;border:none;background-color:#292a2d}#document article pre[class*=language-]>code{line-height:1.8em}#document article b>code,#document article blockquote>code,#document article p>code,#document article strong>code{border-radius:5px;color:var(--color-code-text);background-color:var(--color-code-background);padding:2px 8px;font-size:.92rem}#document article blockquote{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:var(--color-blockquote-background);line-height:1.8em;text-align:left;font-size:.9rem;margin-top:25px}#document article blockquote p{margin:0}",""]),t.exports=c},280:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},281:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="},282:function(t,e,n){"use strict";n.r(e);var o={props:{document:{type:Object,required:!0},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},head:function(){return{title:this.document.title}}},r=(n(278),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"document"}},[n("app-spy",{attrs:{toc:t.document.toc}}),n("article",[n("h1",[t._v(t._s(t.document.title))]),n("nuxt-content",{attrs:{document:t.document}})],1),n("app-pagination",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSpy:n(276).default,AppPagination:n(277).default})},296:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(41),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("index").fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),l=n(17),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-document",{attrs:{document:t.article}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppDocument:n(282).default})}}]);