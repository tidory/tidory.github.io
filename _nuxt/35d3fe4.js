(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3],{280:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("69171ed8",content,!0,{sourceMap:!1})},281:function(t,e,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("66153315",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n.r(e);var o={props:{toc:{type:Array,required:!0}}},r=(n(291),n(293),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"spy"}},[n("ul",t._l(t.toc,(function(link){return n("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[n("a",{attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("a6360c74",content,!0,{sourceMap:!1})},284:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6fd16325",content,!0,{sourceMap:!1})},285:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("32bdcc84",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("14ab943a",content,!0,{sourceMap:!1})},287:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("8ed2c17c",content,!0,{sourceMap:!1})},288:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("7b8308a1",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";n.r(e);n(295),n(297),n(13),n(290);var o={components:{Scrollspy:n(282).default},props:{document:{type:Object,required:!0}},head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.pages[this.index].title}},computed:{pages:function(){return this.$store.state.pages.flatMap((function(t){return t.items}))},index:function(){var t=this;return this.pages.findIndex((function(e){return e.path===t.$route.path}))}}},r=(n(298),n(300),n(302),n(304),n(306),n(308),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"document"}},[n("aside",[n("scrollspy",{attrs:{toc:t.document.toc}})],1),n("header",[n("h1",[t._v(t._s(t.pages[t.index].title))])]),n("article",[n("nuxt-content",{attrs:{document:t.document}})],1),n("footer",[n("div",{staticClass:"pagination"},[t.index>0?n("div",{staticClass:"prev"},[n("a",{attrs:{href:t.pages[t.index-1].path}},[n("i",{staticClass:"fas fa-angle-left"}),t._v(t._s(t.pages[t.index-1].title))])]):t._e(),t.index<t.pages.length-1?n("div",{staticClass:"next"},[n("a",{attrs:{href:t.pages[t.index+1].path}},[t._v(t._s(t.pages[t.index+1].title)),n("i",{staticClass:"fas fa-angle-right"})])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Scrollspy:n(282).default})},290:function(t,e,n){"use strict";var o=n(4),r=n(64).findIndex,c=n(105),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},291:function(t,e,n){"use strict";n(280)},292:function(t,e,n){var o=n(17)(!1);o.push([t.i,"#spy{position:-webkit-sticky;position:sticky;top:35px}#spy ul{border-left:1px dashed rgba(0,0,0,.2);width:180px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;margin:8px 0;max-width:180px}#spy ul li a{font-size:.82rem}#spy ul li.toc3{padding-left:35px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=o},293:function(t,e,n){"use strict";n(281)},294:function(t,e,n){var o=n(17)(!1);o.push([t.i,'#container[data-theme="1"] #spy ul{border-color:hsla(0,0%,100%,.5)}#container[data-theme="1"] #spy ul li a{color:hsla(0,0%,100%,.8)}',""]),t.exports=o},295:function(t,e,n){"use strict";var o=n(4),r=n(296),c=n(65),l=n(25),d=n(41),f=n(106);o({target:"Array",proto:!0},{flatMap:function(t){var e,n=l(this),o=d(n);return c(t),(e=f(n,0)).length=r(e,n,n,o,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},296:function(t,e,n){"use strict";var o=n(1),r=n(83),c=n(41),l=n(49),d=o.TypeError,f=function(t,e,source,n,o,m,h,x){for(var element,v,y=o,_=0,w=!!h&&l(h,x);_<n;){if(_ in source){if(element=w?w(source[_],_,e):source[_],m>0&&r(element))v=c(element),y=f(t,e,element,v,y,m-1)-1;else{if(y>=9007199254740991)throw d("Exceed the acceptable array length");t[y]=element}y++}_++}return y};t.exports=f},297:function(t,e,n){n(105)("flatMap")},298:function(t,e,n){"use strict";n(283)},299:function(t,e,n){var o=n(17)(!1);o.push([t.i,"#document{color:rgba(0,0,0,.85);position:relative}",""]),t.exports=o},300:function(t,e,n){"use strict";n(284)},301:function(t,e,n){var o=n(17)(!1);o.push([t.i,"#document aside{position:absolute;top:0;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px!important;height:100%}",""]),t.exports=o},302:function(t,e,n){"use strict";n(285)},303:function(t,e,n){var o=n(17)(!1);o.push([t.i,"#document header{text-align:center;margin-bottom:50px}#document header h1{font-weight:500;font-size:2.1em}",""]),t.exports=o},304:function(t,e,n){"use strict";n(286)},305:function(t,e,n){var o=n(17)(!1);o.push([t.i,'#document article *{word-break:break-all}#document article h2>a,#document article h3>a{text-decoration:none;color:#000}#document article h2{font-weight:400;margin-top:25px;margin-bottom:20px;font-size:1.5em}#document article h2:before{content:"#";color:#f0506e;font-weight:400;margin-right:10px}#document article h3{font-size:1.2em}#document article h3,#document article h4{font-weight:500;margin-top:25px;margin-bottom:20px}#document article h4{font-size:1.1em}#document article p{margin:25px 0;line-height:1.9em}#document article ol,#document article ul{list-style-type:disc;padding-left:20px}#document article ol li,#document article ul li{line-height:1.9em;padding:10px 0}#document article ol li p,#document article ul li p{margin:8px 0}#document article b,#document article strong{color:#f0506e;font-weight:500}#document article a{text-decoration:underline}#document article pre[class*=language-]{border-radius:5px;border:none}#document article pre[class*=language-]>code{line-height:1.8em}#document article b>code,#document article blockquote>code,#document article p>code,#document article strong>code{border-radius:5px;background-color:#f8f8f8;color:#f0506e;padding:2px 8px;font-size:.92rem}#document article blockquote{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em;margin-top:25px}#document article blockquote p{margin:0}',""]),t.exports=o},306:function(t,e,n){"use strict";n(287)},307:function(t,e,n){var o=n(17)(!1);o.push([t.i,"#document footer .pagination{margin-top:50px;overflow:hidden}#document footer .pagination a{text-decoration:none!important}#document footer .pagination .prev{float:left}#document footer .pagination .prev i{margin-right:8px}#document footer .pagination .next{float:right}#document footer .pagination .next i{margin-left:8px}",""]),t.exports=o},308:function(t,e,n){"use strict";n(288)},309:function(t,e,n){var o=n(17)(!1);o.push([t.i,'#container[data-theme="1"] article h1,#container[data-theme="1"] article h2,#container[data-theme="1"] article h3,#container[data-theme="1"] article h4,#container[data-theme="1"] article ol,#container[data-theme="1"] article p,#container[data-theme="1"] article ul,#container[data-theme="1"] header h1{color:#fff}#container[data-theme="1"] article a,#container[data-theme="1"] article b,#container[data-theme="1"] article h2:before,#container[data-theme="1"] article strong{color:#5db0d7}#container[data-theme="1"] article pre[class*=language-]{background-color:#292a2d}#container[data-theme="1"] article b code,#container[data-theme="1"] article blockquote code,#container[data-theme="1"] article p code,#container[data-theme="1"] article strong code{background-color:#292a2d;color:#fff}#container[data-theme="1"] footer a{color:#fff}',""]),t.exports=o},328:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(50),{components:{Document:n(289).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("docs/template").fetch();case 3:return o=e.sent,e.abrupt("return",{page:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(19),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Document",{attrs:{document:t.page}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Document:n(289).default})}}]);