(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{326:function(e,t,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("faf268ea",content,!0,{sourceMap:!1})},330:function(e,t,n){var map={"./acp.webp":331,"./agua-doce.webp":332,"./baccega.webp":333,"./biocon.webp":334,"./crh.webp":335,"./euro.webp":336,"./id.webp":337,"./md.webp":338,"./roxvel.webp":339};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=330},331:function(e,t,n){e.exports=n.p+"img/acp.0a2da37.webp"},332:function(e,t,n){e.exports=n.p+"img/agua-doce.15df512.webp"},333:function(e,t,n){e.exports=n.p+"img/baccega.0d854dc.webp"},334:function(e,t,n){e.exports=n.p+"img/biocon.4f0cbab.webp"},335:function(e,t,n){e.exports=n.p+"img/crh.ec080a7.webp"},336:function(e,t,n){e.exports=n.p+"img/euro.c6c4f4c.webp"},337:function(e,t,n){e.exports=n.p+"img/id.23eccf4.webp"},338:function(e,t,n){e.exports=n.p+"img/md.54f0029.webp"},339:function(e,t,n){e.exports=n.p+"img/roxvel.df51d08.webp"},340:function(e,t,n){"use strict";n(326)},341:function(e,t,n){var o=n(36)(!1);o.push([e.i,"#carouselSection{position:relative;overflow:hidden}.slick-slide img{display:block;width:100%;height:auto;filter:saturate(0);transition:filter .3s ease}.blur{filter:saturate(0) blur(2px)}.no-blur{filter:saturate(0)!important}.fade-left,.fade-right{position:absolute;top:0;bottom:0;width:20%;z-index:2;pointer-events:none;background:linear-gradient(90deg,hsla(0,0%,100%,.7),transparent)}.fade-right{right:0;background:linear-gradient(270deg,hsla(0,0%,100%,.7),transparent)}",""]),e.exports=o},353:function(e,t,n){"use strict";n.r(t);n(55),n(16),n(30);var o=n(347),r=n.n(o),c=(n(348),n(349),{components:{VueSlickCarousel:r.a},data:function(){return{images:this.importAll(n(330)),slickOptions:{infinite:!0,slidesToShow:7,slidesToScroll:1,autoplay:!0,autoplaySpeed:1e3,arrows:!0,dots:!1,initialSlide:0},currentIndex:0}},methods:{importAll:function(e){return e.keys().map(e)},handleAfterChange:function(e){this.currentIndex=e},isCentralImage:function(e){var t=(this.currentIndex+3)%this.images.length,n=(t-1+this.images.length)%this.images.length,o=(t+1)%this.images.length;return e===t||e===n||e===o}},mounted:function(){this.$refs.carousel.goTo(0)}}),l=(n(340),n(21)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"carouselSection"}},[t("vue-slick-carousel",e._b({ref:"carousel",on:{afterChange:e.handleAfterChange}},"vue-slick-carousel",e.slickOptions,!1),e._l(e.images,(function(image,n){return t("div",{key:n,staticClass:"col-2"},[t("img",{class:["d-block","w-100",{"no-blur":e.isCentralImage(n),blur:!e.isCentralImage(n)}],attrs:{src:image,alt:"..."}})])})),0),e._v(" "),t("div",{staticClass:"fade-left"}),e._v(" "),t("div",{staticClass:"fade-right"})],1)}),[],!1,null,null,null);t.default=component.exports}}]);