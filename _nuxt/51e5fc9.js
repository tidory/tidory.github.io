(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3],{280:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("69171ed8",content,!0,{sourceMap:!1})},281:function(t,e,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("66153315",content,!0,{sourceMap:!1})},282:function(t,e,o){"use strict";o.r(e);var n={props:{toc:{type:Array,required:!0}}},r=(o(290),o(292),o(19)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"spy"}},[o("ul",t._l(t.toc,(function(link){return o("li",{key:link.id,class:{h2:2===link.depth,h3:3===link.depth}},[o("a",{attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,o){var content=o(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("a6360c74",content,!0,{sourceMap:!1})},284:function(t,e,o){var content=o(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("6fd16325",content,!0,{sourceMap:!1})},285:function(t,e,o){var content=o(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("32bdcc84",content,!0,{sourceMap:!1})},286:function(t,e,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("14ab943a",content,!0,{sourceMap:!1})},287:function(t,e,o){var content=o(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("8ed2c17c",content,!0,{sourceMap:!1})},288:function(t,e,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7b8308a1",content,!0,{sourceMap:!1})},289:function(t,e,o){"use strict";o.r(e);o(294),o(296),o(13);var n={components:{Scrollspy:o(282).default},props:{document:{type:Object,required:!0}},head:function(){return{title:"티스토리 스킨 프레임워크, 티도리(TIDORY) ― "+this.document.title}},computed:{pages:function(){return this.$store.state.pages.flatMap((function(t){return t.items}))}}},r=(o(297),o(299),o(301),o(303),o(305),o(307),o(19)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"document"}},[o("aside",[o("scrollspy",{attrs:{toc:t.document.toc}})],1),o("header",[o("h1",[t._v(t._s(t.document.title))])]),o("article",[o("nuxt-content",{attrs:{document:t.document}})],1),o("footer",[o("div",{staticClass:"pagination"},[t.document.i>0?o("div",{staticClass:"prev"},[o("nuxt-link",{attrs:{to:t.pages[t.document.i-1].path}},[o("i",{staticClass:"fas fa-angle-left"}),t._v(t._s(t.pages[t.document.i-1].title))])],1):t._e(),t.document.i<t.pages.length-1?o("div",{staticClass:"next"},[o("nuxt-link",{attrs:{to:t.pages[t.document.i+1].path}},[t._v(t._s(t.pages[t.document.i+1].title)),o("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Scrollspy:o(282).default})},290:function(t,e,o){"use strict";o(280)},291:function(t,e,o){var n=o(17)(!1);n.push([t.i,"#spy{position:-webkit-sticky;position:sticky;top:35px}#spy ul{border-left:1px dashed rgba(0,0,0,.2);width:180px}#spy ul,#spy ul li{box-sizing:border-box}#spy ul li{padding-left:20px;margin:8px 0;max-width:180px}#spy ul li a{font-size:.82rem}#spy ul li.h3{padding-left:35px}@media screen and (max-width:1200px){#spy{display:none!important}}",""]),t.exports=n},292:function(t,e,o){"use strict";o(281)},293:function(t,e,o){var n=o(17)(!1);n.push([t.i,'#container[data-theme="1"] #spy ul{border-color:hsla(0,0%,100%,.5)}#container[data-theme="1"] #spy ul li a{color:hsla(0,0%,100%,.8)}',""]),t.exports=n},294:function(t,e,o){"use strict";var n=o(4),r=o(295),c=o(64),l=o(25),d=o(41),f=o(106);n({target:"Array",proto:!0},{flatMap:function(t){var e,o=l(this),n=d(o);return c(t),(e=f(o,0)).length=r(e,o,o,n,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},295:function(t,e,o){"use strict";var n=o(1),r=o(83),c=o(41),l=o(49),d=n.TypeError,f=function(t,e,source,o,n,m,h,x){for(var element,v,y=n,_=0,w=!!h&&l(h,x);_<o;){if(_ in source){if(element=w?w(source[_],_,e):source[_],m>0&&r(element))v=c(element),y=f(t,e,element,v,y,m-1)-1;else{if(y>=9007199254740991)throw d("Exceed the acceptable array length");t[y]=element}y++}_++}return y};t.exports=f},296:function(t,e,o){o(105)("flatMap")},297:function(t,e,o){"use strict";o(283)},298:function(t,e,o){var n=o(17)(!1);n.push([t.i,"#document{color:rgba(0,0,0,.85);position:relative}",""]),t.exports=n},299:function(t,e,o){"use strict";o(284)},300:function(t,e,o){var n=o(17)(!1);n.push([t.i,"#document aside{position:absolute;top:0;list-style:none;text-align:left;font-weight:400;z-index:0;margin-left:730px!important;height:100%}",""]),t.exports=n},301:function(t,e,o){"use strict";o(285)},302:function(t,e,o){var n=o(17)(!1);n.push([t.i,"#document header{text-align:center;margin-bottom:50px}#document header h1{font-weight:500;font-size:2.1em}",""]),t.exports=n},303:function(t,e,o){"use strict";o(286)},304:function(t,e,o){var n=o(17)(!1);n.push([t.i,'#document article *{word-break:break-all}#document article h2>a,#document article h3>a{text-decoration:none;color:#000}#document article h2{font-weight:400;margin-top:25px;margin-bottom:20px;font-size:1.5em}#document article h2:before{content:"#";color:#f0506e;font-weight:400;margin-right:10px}#document article h3{font-size:1.2em}#document article h3,#document article h4{font-weight:500;margin-top:25px;margin-bottom:20px}#document article h4{font-size:1.1em}#document article p{margin:25px 0;line-height:1.9em}#document article ol,#document article ul{list-style-type:disc;padding-left:20px}#document article ol li,#document article ul li{line-height:1.9em;padding:10px 0}#document article ol li p,#document article ul li p{margin:8px 0}#document article b,#document article strong{color:#f0506e;font-weight:500}#document article a{text-decoration:underline}#document article pre[class*=language-]{border-radius:5px;border:none}#document article pre[class*=language-]>code{line-height:1.8em}#document article b>code,#document article blockquote>code,#document article p>code,#document article strong>code{border-radius:5px;background-color:#f8f8f8;color:#f0506e;padding:2px 8px;font-size:.92rem}#document article blockquote{border:solid #acacac;border-width:0 0 0 2px;padding:1px 0 0 12px;color:#666;line-height:1.8em;text-align:left;font-size:.9em;margin-top:25px}#document article blockquote p{margin:0}',""]),t.exports=n},305:function(t,e,o){"use strict";o(287)},306:function(t,e,o){var n=o(17)(!1);n.push([t.i,"#document footer .pagination{margin-top:50px;overflow:hidden}#document footer .pagination a{text-decoration:none!important}#document footer .pagination .prev{float:left}#document footer .pagination .prev i{margin-right:8px}#document footer .pagination .next{float:right}#document footer .pagination .next i{margin-left:8px}",""]),t.exports=n},307:function(t,e,o){"use strict";o(288)},308:function(t,e,o){var n=o(17)(!1);n.push([t.i,'#container[data-theme="1"] article h1,#container[data-theme="1"] article h2,#container[data-theme="1"] article h3,#container[data-theme="1"] article h4,#container[data-theme="1"] article ol,#container[data-theme="1"] article p,#container[data-theme="1"] article ul,#container[data-theme="1"] header h1{color:#fff}#container[data-theme="1"] article a,#container[data-theme="1"] article b,#container[data-theme="1"] article h2:before,#container[data-theme="1"] article strong{color:#5db0d7}#container[data-theme="1"] article pre[class*=language-]{background-color:#292a2d}#container[data-theme="1"] article b code,#container[data-theme="1"] article blockquote code,#container[data-theme="1"] article p code,#container[data-theme="1"] article strong code{background-color:#292a2d;color:#fff}#container[data-theme="1"] footer a{color:#fff}',""]),t.exports=n},325:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(50),{components:{Document:o(289).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("docs/framework").fetch();case 3:return n=e.sent,e.abrupt("return",{page:n});case 5:case"end":return e.stop()}}),e)})))()}}),c=o(19),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Document",{attrs:{document:t.page}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Document:o(289).default})}}]);