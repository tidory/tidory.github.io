(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{280:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("528fd4f4",content,!0,{sourceMap:!1})},281:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("1b90cc35",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n.r(e);var o={props:{toc:{type:Array,required:!0}}},r=(n(287),n(289),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{attrs:{id:"spy"}},[n("ul",t._l(t.toc,(function(link){return n("li",{key:link.id,class:{h2:2===link.depth,h3:3===link.depth}},[n("a",{attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("a6360c74",content,!0,{sourceMap:!1})},284:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6fd16325",content,!0,{sourceMap:!1})},285:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("32bdcc84",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("14ab943a",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(280)},288:function(t,e,n){var o=n(17)(!1);o.push([t.i,"#spy{position:absolute;top:0;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px!important;height:100%}#spy ul{position:-webkit-sticky;position:sticky;top:35px;border-left:1px dashed rgba(0,0,0,.2);width:180px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;margin:8px 0;max-width:180px}#spy ul li a{font-size:.82rem}#spy ul li.h3{padding-left:35px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=o},289:function(t,e,n){"use strict";n(281)},290:function(t,e,n){var o=n(17)(!1);o.push([t.i,'#TIDORY[data-theme="1"] #spy ul{border-color:hsla(0,0%,100%,.5)}',""]),t.exports=o},291:function(t,e,n){"use strict";n.r(e);var o={components:{Spy:n(282).default},props:{document:{type:Object,required:!0},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.document.title}}},r=(n(292),n(294),n(298),n(300),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"document"}},[n("spy",{attrs:{toc:t.document.toc}}),n("article",[n("h1",[t._v(t._s(t.document.title))]),n("nuxt-content",{attrs:{document:t.document}}),n("div",{staticClass:"pagination"},[t.prev?n("div",{staticClass:"prev"},[n("nuxt-link",{attrs:{to:{params:{slug:t.prev.slug}}}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(t._s(t.prev.title))])],1):t._e(),t.next?n("div",{staticClass:"next"},[n("nuxt-link",{attrs:{to:{params:{slug:t.next.slug}}}},[t._v(t._s(t.next.title)),n("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spy:n(282).default})},292:function(t,e,n){"use strict";n(283)},293:function(t,e,n){var o=n(17)(!1);o.push([t.i,"#document{color:rgba(0,0,0,.85);position:relative}",""]),t.exports=o},294:function(t,e,n){"use strict";n(284)},295:function(t,e,n){var o=n(17),r=n(296),c=n(297),l=o(!1),d=r(c);l.push([t.i,"#document article h1{text-align:center;margin-bottom:50px;font-weight:500;font-size:2.1em}#document article *{word-break:break-all}#document article h2>a,#document article h3>a{text-decoration:none;color:#000}#document article h2{font-weight:400;margin-top:25px;margin-bottom:20px;font-size:1.5em}#document article h2 .icon.icon-link{background-image:url("+d+");display:inline-block;width:20px;height:20px;background-size:20px 20px;margin-right:3px}#document article h3{font-size:1.2em}#document article h3,#document article h4{font-weight:500;margin-top:25px;margin-bottom:20px}#document article h4{font-size:1.1em}#document article p{margin:25px 0;line-height:1.9em}#document article ol,#document article ul{list-style-type:disc;padding-left:20px}#document article ol li,#document article ul li{line-height:1.9em;padding:10px 0}#document article ol li p,#document article ul li p{margin:8px 0}#document article b,#document article strong{color:#f0506e;font-weight:500}#document article a{text-decoration:underline}#document article pre[class*=language-]{border-radius:5px;border:none}#document article pre[class*=language-]>code{line-height:1.8em}#document article b>code,#document article blockquote>code,#document article p>code,#document article strong>code{border-radius:5px;background-color:#f8f8f8;color:#f0506e;padding:2px 8px;font-size:.92rem}#document article blockquote{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em;margin-top:25px}#document article blockquote p{margin:0}",""]),t.exports=l},296:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},297:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBjbGFzcz0iaGVyb2ljb24tdWkiIGQ9Ik0xMS4wMyA4aDMuOTRsMS4wNi00LjI0YTEgMSAwIDEgMSAxLjk0LjQ4TDE3LjAzIDhIMjBhMSAxIDAgMCAxIDAgMmgtMy40N2wtMSA0SDE4YTEgMSAwIDEgMSAwIDJoLTIuOTdsLTEuMDYgNC4yNWExIDEgMCAxIDEtMS45NC0uNDlsLjk0LTMuNzZIOS4wM2wtMS4wNiA0LjI1YTEgMSAwIDEgMS0xLjk0LS40OUw2Ljk3IDE2SDRhMSAxIDAgMCAxIDAtMmgzLjQ3bDEtNEg2YTEgMSAwIDAgMSAwLTJoMi45N2wxLjA2LTQuMjRhMSAxIDAgMSAxIDEuOTQuNDhMMTEuMDMgOHptLS41IDJsLTEgNGgzLjk0bDEtNGgtMy45NHoiLz48L3N2Zz4="},298:function(t,e,n){"use strict";n(285)},299:function(t,e,n){var o=n(17)(!1);o.push([t.i,"#document .pagination{margin-top:50px;overflow:hidden}#document .pagination a{text-decoration:none!important}#document .pagination .prev{float:left}#document .pagination .prev i{margin-right:8px}#document .pagination .next{float:right}#document .pagination .next i{margin-left:8px}",""]),t.exports=o},300:function(t,e,n){"use strict";n(286)},301:function(t,e,n){var o=n(17)(!1);o.push([t.i,'#TIDORY[data-theme="1"] article h1,#TIDORY[data-theme="1"] article h2,#TIDORY[data-theme="1"] article h3,#TIDORY[data-theme="1"] article h4,#TIDORY[data-theme="1"] article ol,#TIDORY[data-theme="1"] article p,#TIDORY[data-theme="1"] article ul{color:#fff}#TIDORY[data-theme="1"] article a,#TIDORY[data-theme="1"] article b,#TIDORY[data-theme="1"] article strong{color:#5db0d7}#TIDORY[data-theme="1"] article h2 .icon.icon-link{filter:invert()}#TIDORY[data-theme="1"] article pre[class*=language-]{background-color:#292a2d}#TIDORY[data-theme="1"] article b code,#TIDORY[data-theme="1"] article blockquote code,#TIDORY[data-theme="1"] article p code,#TIDORY[data-theme="1"] article strong code{background-color:#292a2d;color:#fff}#TIDORY[data-theme="1"] .pagination a{color:#fff}',""]),t.exports=o},314:function(t,e,n){"use strict";n.r(e);var o=n(24),r=n(8),c=(n(41),{components:{Document:n(291).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article,c,l,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("docs",r.slug).fetch();case 3:return article=e.sent,e.next=6,n("docs").only(["title","slug"]).sortBy("index","asc").surround(r.slug).fetch();case 6:return c=e.sent,l=Object(o.a)(c,2),d=l[0],m=l[1],e.abrupt("return",{article:article,prev:d,next:m});case 11:case"end":return e.stop()}}),e)})))()}}),l=n(19),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("document",{attrs:{document:t.article,next:t.next,prev:t.prev}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Document:n(291).default})}}]);