(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{345:function(t,e,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("07a9a6c8",content,!0,{sourceMap:!1})},357:function(t,e,r){"use strict";r(345)},358:function(t,e,r){var n=r(36)(!1);n.push([t.i,"#article-detail[data-v-34c49c92]{padding:2rem}",""]),t.exports=n},375:function(t,e,r){"use strict";r.r(e);var n=r(10),c=(r(54),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,e.prev=1,e.next=4,r.$get("/articles?slug=".concat(n.slug));case 4:return c=e.sent,article=c.length?c[0]:null,e.abrupt("return",{article:article});case 9:return e.prev=9,e.t0=e.catch(1),console.error("Error fetching article:",e.t0),e.abrupt("return",{article:null});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()},data:function(){return{article:{}}}}),o=(r(357),r(21)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"min-vh-100 bg-light justify-content-center align-content-center",attrs:{id:"article-detail"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h1",{domProps:{innerHTML:t._s(t.article.titulo)}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.article.content)}})])])])])}),[],!1,null,"34c49c92",null);e.default=component.exports}}]);