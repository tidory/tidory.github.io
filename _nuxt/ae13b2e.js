(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{299:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("2f2a7b9a",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";r.r(e);var n={props:{toc:{type:Array,required:!0}},data:function(){return{show:!1}}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"spy"}},[t.show?t._e():e("button",{staticClass:"fixed right-0 top-20 bg-gray-500 w-8 h-8 flex justify-center items-center rounded xl:hidden",on:{click:function(e){t.show=!t.show}}},[e("span",{staticClass:"text-hidden"},[t._v("목차")]),e("i",{staticClass:"fas fa-tasks text-gray-50"})]),e("div",{staticClass:"fixed p-4 right-4 w-48 top-20 bg-gray-500 rounded list-none text-left z-0 transition-all xl:w-40 xl:bg-transparent xl:backdrop-blur-0 xl:p-0 xl:absolute xl:top-0 xl:right-auto xl:ml-[calc(620px+110px)] xl:h-full xl:block xl:transition-none",class:[t.show?"right-4":"-right-52"]},[e("button",{staticClass:"absolute text-base top-2 right-4 text-h-500 dark:text-h-200 2xl:hidden",on:{click:function(e){t.show=!t.show}}},[e("span",{staticClass:"text-hidden"},[t._v("목차 닫기")]),e("i",{staticClass:"fa-solid fa-xmark"})]),e("ul",{ref:"nav",staticClass:"xl:sticky xl:top-9 xl:box-border"},t._l(t.toc,(function(link){return e("li",{key:link.id,staticClass:"my-2 box-border first:mt-0 last:mb-0",class:{"pl-0":2===link.depth,"pl-4":3===link.depth}},[e("a",{staticClass:"text-gray-100 break-all text-sm xl:hover:text-gray-50",attrs:{href:"#".concat(link.id)}},[t._v(t._s(link.text))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-12 overflow-hidden text-base",attrs:{id:"pagination"}},[t.prev?e("div",{staticClass:"float-left"},[e("nuxt-link",{attrs:{to:{params:{slug:t.prev.slug}}}},[e("i",{staticClass:"fas fa-angle-left mr-2"}),t._v(t._s(t.prev.title))])],1):t._e(),t.next?e("div",{staticClass:"float-right"},[e("nuxt-link",{attrs:{to:{params:{slug:t.next.slug}}}},[t._v(t._s(t.next.title)),e("i",{staticClass:"fas fa-angle-right ml-2"})])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,r){"use strict";r(299)},303:function(t,e,r){var n=r(68),o=r(208),l=r(209),c=n((function(i){return i[1]})),d=o(l);c.push([t.i,"#document article h2,#document article h3,#document article h4{margin-top:1.5rem;margin-bottom:1.5rem;scroll-margin-top:4rem;font-weight:400}#document article h2{font-size:1.25rem;line-height:1.75rem}#document article h2 .icon.icon-link{position:relative;top:0.125rem;margin-right:0.375rem;display:inline-block;height:1.25rem;width:1.25rem;background-image:url("+d+");background-size:20px 20px}#document article h3{font-size:1.125rem;line-height:1.75rem}#document article h4{font-size:1rem;line-height:1.5rem;font-weight:600}#document article p{margin-top:1.5rem;margin-bottom:1.5rem;line-height:2}#document article p a{text-decoration-line:underline}#document article ol,#document article ul{list-style-type:initial;padding-left:1.25rem}#document article ol li,#document article ul li{padding-top:0.625rem;padding-bottom:0.625rem;line-height:1.75rem}#document article ol li p,#document article ul li p{margin-top:0.5rem;margin-bottom:0.5rem}#document article b,#document article strong{font-weight:500;--tw-text-opacity:1;color:rgb(93 176 215 / var(--tw-text-opacity))}#document article a{--tw-text-opacity:1;color:rgb(93 176 215 / var(--tw-text-opacity));text-decoration-thickness:0px}#document article pre[class*=language-]{border-radius:0.375rem;border-width:0px;--tw-bg-opacity:1;background-color:rgb(41 42 45 / var(--tw-bg-opacity))}#document article b code,#document article blockquote code,#document article p code,#document article strong code{border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(41 42 45 / var(--tw-bg-opacity));padding-top:0.125rem;padding-bottom:0.125rem;padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(248 250 252 / var(--tw-text-opacity))}#document article blockquote{margin-top:1.5rem;border-left-width:2px;border-style:solid;padding-left:0.75rem;text-align:left;font-size:0.875rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(169 170 171 / var(--tw-text-opacity))}",""]),c.locals={},t.exports=c},304:function(t,e,r){"use strict";r.r(e);var n={props:{document:{type:Object,required:!0},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},head:function(){return{title:this.document.title}},created:function(){this.$nuxt.$emit("load",this.document)}},o=(r(302),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative",attrs:{id:"document"}},[e("app-spy",{attrs:{toc:t.document.toc}}),e("article",{staticClass:"text-gray-50",on:{click:function(e){return t.$nuxt.$emit("toc")}}},[e("h1",{staticClass:"text-center mb-12 font-medium text-4xl"},[t._v(t._s(t.document.title))]),e("nuxt-content",{attrs:{document:t.document}})],1),e("app-pagination",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSpy:r(300).default,AppPagination:r(301).default})},319:function(t,e,r){"use strict";r.r(e);var n=r(24),o=r(9),l=(r(41),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article,l,c,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("docs",o.slug).fetch();case 3:return article=e.sent,e.next=6,r("docs").only(["title","slug"]).sortBy("index","asc").surround(o.slug).fetch();case 6:return l=e.sent,c=Object(n.a)(l,2),d=c[0],m=c[1],e.abrupt("return",{article:article,prev:d,next:m});case 11:case"end":return e.stop()}}),e)})))()}}),c=r(14),component=Object(c.a)(l,(function(){var t=this;return(0,t._self._c)("app-document",{attrs:{document:t.article,next:t.next,prev:t.prev}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppDocument:r(304).default})}}]);