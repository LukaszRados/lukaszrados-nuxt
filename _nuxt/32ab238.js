(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,6],{263:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{loaded:!1}},methods:{onScroll:function(){this.$el.getBoundingClientRect().top-window.innerHeight<-100&&(this.loaded=!0,window.removeEventListener("scroll",this.onScroll,{passive:!0}))}},mounted:function(){window.addEventListener("scroll",this.onScroll,{passive:!0}),this.onScroll()},destroyed:function(){window.removeEventListener("scroll",this.onScroll,{passive:!0})}},r=e(17),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"transition-all duration-500 ease-in-out transform",class:{"opacity-0 translate-y-10":!t.loaded,"opacity-100":t.loaded}},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},264:function(t,n,e){"use strict";e.r(n);var o=e(17),component=Object(o.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"inline-block h-6 w-12 relative transition-width duration-500 ease-in-out hover:w-24"},[e("span",{staticClass:"block h-px w-4 bg-black transform origin-left rotate-45 absolute mt-3"}),t._v(" "),e("span",{staticClass:"block h-px w-4 bg-black transform origin-left -rotate-45 absolute mt-3"}),t._v(" "),e("span",{staticClass:"block h-px w-full bg-black mt-3 absolute top-0"})])}],!1,null,null,null);n.default=component.exports},269:function(t,n,e){var content=e(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(38).default)("46fe41a0",content,!0,{sourceMap:!1})},274:function(t,n,e){"use strict";e(269)},275:function(t,n,e){var o=e(37)(!1);o.push([t.i,".content h2,.content h3,.content p{max-width:56rem;padding-left:1rem;padding-right:1rem;margin-left:auto;margin-right:auto}.content h2{font-size:1.5rem}.content h2,.content h3{margin-top:2rem;margin-bottom:1rem}.content h3{font-size:1.25rem}.content p{font-size:1.125rem;margin-top:1rem;margin-bottom:1rem}.content a{text-decoration:underline}.content a:hover{text-decoration:none}@media (min-width:768px){.content p{font-size:1.25rem;margin-top:1.5rem;margin-bottom:1.5rem}.content h2{font-size:1.875rem}.content h2,.content h3{margin-top:3rem;margin-bottom:1.5rem}.content h3{font-size:1.5rem}}@media (min-width:1024px){.content h2,.content h3,.content p{margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem}.content p{margin-top:2rem;margin-bottom:2rem}}",""]),t.exports=o},290:function(t,n,e){"use strict";e.r(n);e(23),e(26);var o=e(3),r={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,o=t.params,r=t.app,n.next=3,e("posts/".concat(r.i18n.locale,"/").concat(o.slug)).fetch();case 3:return l=n.sent,n.abrupt("return",{post:l});case 5:case"end":return n.stop()}}),n)})))()},head:function(){return{title:this.post.title,meta:[{hid:"og:title",name:"og:title",content:this.post.title},{hid:"description",name:"description",content:this.post.intro},{hid:"og:description",name:"og:description",content:this.post.intro},{hid:"og:url",name:"og:url",content:this.$route.path}]}}},l=(e(274),e(17)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("fade-in-section",[e("div",{staticClass:"ml-16 max-w-4xl pr-4 mb-12 lg:mx-auto lg:px-8 lg:my-16"},[e("nuxt-link",{attrs:{to:t.localePath("/blog")}},[e("back-button")],1),t._v(" "),e("h1",{staticClass:"text-xl lg:text-2xl mb-6 mt-4"},[t._v(t._s(t.post.title))]),t._v(" "),e("p",{staticClass:"text-2xl lg:text-3xl"},[t._v(t._s(t.post.intro))])],1),t._v(" "),e("div",{staticClass:"content"},[e("nuxt-content",{attrs:{document:t.post}}),t._v(" "),e("div",{staticClass:"w-8 h-px bg-black mx-auto my-8 lg:my-12"}),t._v(" "),e("p",[t._v(t._s(t.$t("blog.followMe")))])],1)])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{BackButton:e(264).default,FadeInSection:e(263).default})}}]);