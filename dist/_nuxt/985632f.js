(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6],{326:function(t,e,o){var content=o(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("faf268ea",content,!0,{sourceMap:!1})},327:function(t,e,o){var content=o(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("ddf10d46",content,!0,{sourceMap:!1})},330:function(t,e,o){var map={"./acp.webp":331,"./agua-doce.webp":332,"./baccega.webp":333,"./biocon.webp":334,"./crh.webp":335,"./euro.webp":336,"./id.webp":337,"./md.webp":338,"./roxvel.webp":339};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=330},331:function(t,e,o){t.exports=o.p+"img/acp.0a2da37.webp"},332:function(t,e,o){t.exports=o.p+"img/agua-doce.15df512.webp"},333:function(t,e,o){t.exports=o.p+"img/baccega.0d854dc.webp"},334:function(t,e,o){t.exports=o.p+"img/biocon.4f0cbab.webp"},335:function(t,e,o){t.exports=o.p+"img/crh.ec080a7.webp"},336:function(t,e,o){t.exports=o.p+"img/euro.c6c4f4c.webp"},337:function(t,e,o){t.exports=o.p+"img/id.23eccf4.webp"},338:function(t,e,o){t.exports=o.p+"img/md.54f0029.webp"},339:function(t,e,o){t.exports=o.p+"img/roxvel.df51d08.webp"},340:function(t,e,o){"use strict";o(326)},341:function(t,e,o){var n=o(36)(!1);n.push([t.i,"#carouselSection{position:relative;overflow:hidden}.slick-slide img{display:block;width:100%;height:auto;filter:saturate(0);transition:filter .3s ease}.blur{filter:saturate(0) blur(2px)}.no-blur{filter:saturate(0)!important}.fade-left,.fade-right{position:absolute;top:0;bottom:0;width:20%;z-index:2;pointer-events:none;background:linear-gradient(90deg,hsla(0,0%,100%,.7),transparent)}.fade-right{right:0;background:linear-gradient(270deg,hsla(0,0%,100%,.7),transparent)}",""]),t.exports=n},342:function(t,e,o){"use strict";o(327)},343:function(t,e,o){var n=o(36)(!1);n.push([t.i,"#blog-index a[data-v-539be1bb]{text-decoration:none}#blog-index a[data-v-539be1bb],#blog-index a[data-v-539be1bb]:hover{font-size:1rem!important;color:#000!important}#blog-index a[data-v-539be1bb]:hover{text-decoration:underline}#blog-index[data-v-539be1bb]{font-size:12px;color:#7a7a7a}.article-category[data-v-539be1bb]{font-weight:400;border-radius:100px;border:10px #000;font-size:10px;padding:3px 10px;background-color:#f4eaff;color:var(--color-secondary)}",""]),t.exports=n},346:function(t,e,o){var content=o(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("191948f3",content,!0,{sourceMap:!1})},353:function(t,e,o){"use strict";o.r(e);o(55),o(16),o(30);var n=o(347),r=o.n(n),c=(o(348),o(349),{components:{VueSlickCarousel:r.a},data:function(){return{images:this.importAll(o(330)),slickOptions:{infinite:!0,slidesToShow:7,slidesToScroll:1,autoplay:!0,autoplaySpeed:1e3,arrows:!0,dots:!1,initialSlide:0},currentIndex:0}},methods:{importAll:function(t){return t.keys().map(t)},handleAfterChange:function(t){this.currentIndex=t},isCentralImage:function(t){var e=(this.currentIndex+3)%this.images.length,o=(e-1+this.images.length)%this.images.length,n=(e+1)%this.images.length;return t===e||t===o||t===n}},mounted:function(){this.$refs.carousel.goTo(0)}}),l=(o(340),o(21)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"carouselSection"}},[e("vue-slick-carousel",t._b({ref:"carousel",on:{afterChange:t.handleAfterChange}},"vue-slick-carousel",t.slickOptions,!1),t._l(t.images,(function(image,o){return e("div",{key:o,staticClass:"col-2"},[e("img",{class:["d-block","w-100",{"no-blur":t.isCentralImage(o),blur:!t.isCentralImage(o)}],attrs:{src:image,alt:"..."}})])})),0),t._v(" "),e("div",{staticClass:"fade-left"}),t._v(" "),e("div",{staticClass:"fade-right"})],1)}),[],!1,null,null,null);e.default=component.exports},354:function(t,e,o){"use strict";o.r(e);o(88),o(38),o(44),o(70),o(71),o(45),o(16),o(29);var n=o(10),r=o(27),c=(o(54),o(85));function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){Object(r.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var v={computed:d(d({},Object(c.c)("articles",["getArticles"])),{},{articles:function(){return this.getArticles}}),methods:d({},Object(c.b)("articles",["fetchArticles"])),created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchArticles();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{baseURL:"https://str-gsstudio.gsstudio.com.br"}}},m=(o(342),o(21)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"min-vh-100 justify-content-center align-content-center",attrs:{id:"blog-index"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("h2",{staticClass:"text-center py-5"},[t._v("Blog")]),t._v(" "),e("div",{staticClass:"col"},[e("div",{staticClass:"row d-flex gscard"},t._l(t.articles,(function(article){return e("article",{key:article.id,staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"row"},[e("picture",[e("source",{attrs:{srcset:"".concat(t.baseURL).concat(article.thumb.formats.medium.url)}}),t._v(" "),e("img",{staticClass:"img-fluid pb-2",attrs:{src:"".concat(t.baseURL).concat(article.thumb.formats.medium.url),alt:article.titulo}})]),t._v(" "),e("h4",{staticClass:"pt-2"},[e("div",{staticClass:"mb-3"},[e("span",{staticClass:"article-category",domProps:{innerHTML:t._s(article.category.title)}})]),t._v(" "),e("nuxt-link",{attrs:{to:"/artigos/".concat(article.slug)}},[t._v(t._s(article.titulo))])],1),t._v(" "),e("div",{domProps:{innerHTML:t._s(article.content)}})])])})),0)])])])])}),[],!1,null,"539be1bb",null);e.default=component.exports},359:function(t,e,o){t.exports=o.p+"img/icon-design.784f4b0.svg"},360:function(t,e,o){t.exports=o.p+"img/icon-marketing.0ae8558.svg"},361:function(t,e,o){t.exports=o.p+"img/icon-tecnologia.03ddfd9.svg"},362:function(t,e,o){t.exports=o.p+"img/sites.aed52b7.svg"},363:function(t,e,o){t.exports=o.p+"img/gestao_de_conteudo.4f33d73.svg"},364:function(t,e,o){t.exports=o.p+"img/lojas_virtuais.afdb37c.svg"},365:function(t,e,o){t.exports=o.p+"img/branding.c7e66f5.svg"},366:function(t,e,o){"use strict";o(346)},367:function(t,e,o){var n=o(36)(!1);n.push([t.i,"#index h1[data-v-6a842491]{font-size:var(--texto-grande)!important}#index p[data-v-6a842491]{font-size:var(--texto-medio)!important}#sobre img[data-v-6a842491]{width:100px!important}#conquistas .count[data-v-6a842491]{font-size:2rem;font-weight:700}.carousel-item[data-v-6a842491]{transition:transform .5s ease,opacity .5s ease!important}.carousel-fade .carousel-item[data-v-6a842491]{opacity:0!important;transition-duration:.5s!important;transition-property:opacity!important}.carousel-fade .carousel-item-next.carousel-item-start[data-v-6a842491],.carousel-fade .carousel-item-prev.carousel-item-end[data-v-6a842491],.carousel-fade .carousel-item.active[data-v-6a842491]{opacity:1!important}.carousel-fade .carousel-item-next[data-v-6a842491],.carousel-fade .carousel-item-prev[data-v-6a842491],.carousel-fade .carousel-item.active.carousel-item-end[data-v-6a842491],.carousel-fade .carousel-item.active.carousel-item-start[data-v-6a842491]{transform:translateX(0)!important}.carousel-item img[data-v-6a842491]{filter:blur(5px)!important;transition:filter .5s ease!important}.carousel-item.active img[data-v-6a842491]{filter:blur(0)!important}#servicos p[data-v-6a842491]{width:calc(1100px - 30%)!important}#servicos img[data-v-6a842491]{width:50%!important}#servicos .gscard[data-v-6a842491]{width:auto!important;margin:1px!important;padding:2rem!important;height:100%!important}#cta .container[data-v-6a842491]{height:50vh!important;border-radius:10px!important}#cta .col p[data-v-6a842491]{width:calc(900px - 20%)!important}#cta section h2[data-v-6a842491]{color:#fff!important}",""]),t.exports=n},376:function(t,e,o){"use strict";o.r(e);o(16),o(31),o(29),o(30),o(72);var n=o(145),r=o(359),c=o.n(r),l=o(360),d=o.n(l),v=o(361),m=o.n(v),f=o(362),h=o.n(f),_=o(363),C=o.n(_),x=o(364),w=o.n(x),y=o(365),k=o.n(y),O={name:"IndexPage",components:{DefaultLayout:n.a,BlogComponent:function(){return Promise.resolve().then(o.bind(null,354))},Contato:function(){return o.e(0).then(o.bind(null,352))}},data:function(){return{designIcon:c.a,marketingIcon:d.a,technologyIcon:m.a,sitesIcon:h.a,socialMediaIcon:C.a,ecommerceIcon:w.a,brandingIcon:k.a}},mounted:function(){this.initCounters()},methods:{initCounters:function(){var t=this,e=document.querySelectorAll(".count"),o=new IntersectionObserver((function(n){n.forEach((function(n){n.isIntersecting&&(t.startCounting(e,9e3),o.unobserve(n.target))}))}),{threshold:1}),n=document.getElementById("conquistas");n&&o.observe(n)},startCounting:function(t,e){t.forEach((function(t){!function o(){var n=+t.getAttribute("data-count"),r=+t.innerText,c=n/(e/100);r<n?(t.innerText=Math.ceil(r+c),setTimeout(o,10)):t.innerText=n}()}))}}},j=(o(366),o(21)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("DefaultLayout",[e("main",[e("section",{staticClass:"d-flex align-items-center min-vh-100",attrs:{id:"index"}},[e("div",{staticClass:"container text-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h1",[t._v("Aumente a "),e("em",[t._v("performance")]),t._v(" da sua "),e("em",[t._v("empresa.")])]),t._v(" "),e("p",{staticClass:"my-4"},[t._v("Destaque sua empresa à frente de seus concorrentes com estratégias de branding, marketing e tecnologia.")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center"},[e("nuxt-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"btn btn-primary",attrs:{to:"#sobre"}},[t._v("Nos conheça um pouco")]),t._v(" "),e("nuxt-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"btn btn-primary-border",attrs:{to:"#contato"}},[t._v("Entre em contato rapidamente")])],1)])])])]),t._v(" "),e("section",{staticClass:"d-flex align-items-center bg-light py-5",attrs:{id:"sobre"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-5"},[e("h2",[t._v("Somos especialistas")]),t._v(" "),e("p",{staticClass:"my-3 d-block"},[t._v("\n              Design publicitário, marketing online/offline e websites.\n              Na GS STUDIO, combinamos criatividade e estratégias comprovadas para desenvolver campanhas de marketing eficazes e impactantes.\n              Nossos especialistas em tecnologia oferecem soluções personalizadas para maximizar a eficiência do seu negócio.\n            ")]),t._v(" "),e("nuxt-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"btn btn-primary",attrs:{to:"#index"}},[t._v("Nos conheça um pouco")])],1),t._v(" "),e("div",{staticClass:"col-7 text-center align-content-center content-justify-center px-5"},[e("div",[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"col-4 gscard gscard-border gscard gscard-border-border"},[e("img",{staticClass:"img-fluid p-3",attrs:{src:t.designIcon,alt:"Design",loading:"lazy"}}),t._v(" "),e("h3",[t._v("Design")]),t._v(" "),e("nuxt-link",{attrs:{to:"#none"}},[t._v("Saiba mais")])],1),t._v(" "),e("div",{staticClass:"col-4 gscard gscard-border"},[e("img",{staticClass:"img-fluid p-3",attrs:{src:t.marketingIcon,alt:"Marketing",loading:"lazy"}}),t._v(" "),e("h3",[t._v("Marketing")]),t._v(" "),e("nuxt-link",{attrs:{to:"#none"}},[t._v("Saiba mais")])],1),t._v(" "),e("div",{staticClass:"col-4 gscard gscard-border"},[e("img",{staticClass:"img-fluid p-3",attrs:{src:t.technologyIcon,alt:"Tecnologia",loading:"lazy"}}),t._v(" "),e("h3",[t._v("Tecnologia")]),t._v(" "),e("nuxt-link",{attrs:{to:"#none"}},[t._v("Saiba mais")])],1)])])])])])]),t._v(" "),e("section",{staticClass:"py-5 text-center",attrs:{id:"conquistas"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"gscard gscard-border"},[e("h3",[e("em",[t._v("+ de "),e("em",{staticClass:"count",attrs:{"data-count":"65"}},[t._v("0")])])]),t._v(" "),e("span",[t._v("Sites produzidos")])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"gscard gscard-border"},[e("h3",[e("em",[t._v("+ de "),e("em",{staticClass:"count",attrs:{"data-count":"250"}},[t._v("0")])])]),t._v(" "),e("span",[t._v("Clientes ativos")])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"gscard gscard-border"},[e("h3",[e("em",[t._v("+ de "),e("em",{staticClass:"count",attrs:{"data-count":"80"}},[t._v("0")])])]),t._v(" "),e("span",[t._v("Marcas desenvolvidas")])])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"gscard gscard-border"},[e("h3",[e("em",[t._v("+ de "),e("em",{staticClass:"count",attrs:{"data-count":"7"}},[t._v("0")])])]),t._v(" "),e("span",[t._v("Anos de mercado")])])])])])]),t._v(" "),e("section",{staticClass:"bg-light min-vh-50 align-content-center justify-content-center",attrs:{id:"parceiros"}},[e("div",{staticClass:"container text-center"},[e("div",{staticClass:"row"},[e("h2",[t._v("Parceiros e clientes")]),t._v(" "),e("div",{attrs:{id:"app"}},[e("div",{staticClass:"col"},[e("carousel")],1)])])])]),t._v(" "),e("section",{staticClass:"min-vh-100 align-content-center justify-content-center",attrs:{id:"servicos"}},[e("div",{staticClass:"container text-center"},[e("div",{staticClass:"row justify-content-center align-content-center"},[e("h2",[t._v("Soluções e serviços")]),t._v(" "),e("p",{staticClass:"my-3"},[t._v("\n            A GS STUDIO está comprometida com resultados. Acreditamos que a criatividade e o design, \n            alinhados com uma estratégia eficaz, geram resultados melhores e duradouros. \n          ")]),t._v(" "),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"gscard gscard-border"},[e("img",{staticClass:"img-fluid p-3",attrs:{src:t.sitesIcon,alt:"Sites",loading:"lazy"}}),t._v(" "),e("h3",[t._v("Sites")]),t._v(" "),e("span",[e("nuxt-link",{attrs:{to:"#none"}},[t._v("Saiba mais")])],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"gscard gscard-border"},[e("img",{staticClass:"img-fluid p-3",attrs:{src:t.socialMediaIcon,alt:"Redes sociais",loading:"lazy"}}),t._v(" "),e("h3",[t._v("Redes sociais")]),t._v(" "),e("span",[e("nuxt-link",{attrs:{to:"#none"}},[t._v("Saiba mais")])],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"gscard gscard-border"},[e("img",{staticClass:"img-fluid p-3",attrs:{src:t.ecommerceIcon,alt:"Lojas virtuais",loading:"lazy"}}),t._v(" "),e("h3",[t._v("Lojas virtuais")]),t._v(" "),e("span",[e("nuxt-link",{attrs:{to:"#none"}},[t._v("Saiba mais")])],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-3"},[e("div",{staticClass:"gscard gscard-border"},[e("img",{staticClass:"img-fluid p-3",attrs:{src:t.brandingIcon,alt:"Marcas",loading:"lazy"}}),t._v(" "),e("h3",[t._v("Marcas")]),t._v(" "),e("span",[e("nuxt-link",{attrs:{to:"#none"}},[t._v("Saiba mais")])],1)])])]),t._v(" "),e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("nuxt-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"btn btn-primary",attrs:{to:"#none"}},[t._v(" Veja mais serviços")])],1)])])])]),t._v(" "),e("section",{staticClass:"min-vh-50 text-center gscard",attrs:{id:"cta"}},[e("div",{staticClass:"container justify-content-center align-content-center bg-cta"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col text-light"},[e("h2",{staticClass:"text-light"},[t._v("Transforme Resultados com Design, Marketing e Tecnologia!")]),t._v(" "),e("div",{staticClass:"subheadline d-flex justify-content-center py-2"},[e("p",[t._v("Potencialize seu negócio com soluções criativas e inovadoras. Nós entregamos resultados excepcionais através de estratégias personalizadas e tecnologia de ponta.")])]),t._v(" "),e("nuxt-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"btn btn-white",attrs:{to:"#none"}},[e("em",[t._v("Começar orçamento")])])],1)])])]),t._v(" "),e("BlogComponent")],1)])}),[],!1,null,"6a842491",null);e.default=component.exports;installComponents(component,{Carousel:o(353).default,BlogComponent:o(354).default})}}]);