(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6],{263:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{loaded:!1}},methods:{onScroll:function(){this.$el.getBoundingClientRect().top-window.innerHeight<-100&&(this.loaded=!0,window.removeEventListener("scroll",this.onScroll,{passive:!0}))}},mounted:function(){window.addEventListener("scroll",this.onScroll,{passive:!0}),this.onScroll()},destroyed:function(){window.removeEventListener("scroll",this.onScroll,{passive:!0})}},r=n(17),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"transition-all duration-500 ease-in-out transform",class:{"opacity-0 translate-y-10":!t.loaded,"opacity-100":t.loaded}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("3673f6c0",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";n(265)},268:function(t,e,n){var o=n(37)(!1);o.push([t.i,'.card[data-v-9bd0e01e]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));border-top-width:1px;border-bottom-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203,213,224,var(--border-opacity));margin-top:-1px;padding:1rem;display:flex;flex-direction:column;transition-property:all;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.card[data-v-9bd0e01e],.image[data-v-9bd0e01e]{position:relative}.image[data-v-9bd0e01e]{background-position:100% 0;background-repeat:no-repeat;align-self:flex-end;width:66.666667%;background-size:auto 100%}.image[data-v-9bd0e01e]:after{content:"";padding-bottom:80%;display:block;height:0}@media (min-width:768px){.row[data-v-9bd0e01e]{display:flex;align-items:stretch}.card[data-v-9bd0e01e]{width:33.333333%;height:16rem}.card[data-v-9bd0e01e]:not(:nth-child(3)){border-right-width:1px}}@media (min-width:1024px){.card[data-v-9bd0e01e]{padding:2rem;flex-direction:row;justify-content:space-between;position:relative}.row--active .card[data-v-9bd0e01e]{height:24rem}.card--active[data-v-9bd0e01e]{width:50%}.card--inactive[data-v-9bd0e01e]{width:25%}.image[data-v-9bd0e01e]{position:absolute;top:0;right:0;width:0;margin-top:2rem;margin-right:2rem;transition-property:all;transition-duration:.5s;transition-timing-function:cubic-bezier(.4,0,.2,1);height:calc(100% - 4rem)}.row--active .card--active .image[data-v-9bd0e01e]{width:66.666667%}.image[data-v-9bd0e01e]:after{display:none}}',""]),t.exports=o},271:function(t,e,n){"use strict";n.r(e);n(44),n(26);var o=n(3),r={data:function(){return{activeColumn:null,activeRow:null}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.app,e.next=3,n("galleries").without(["photos"]).sortBy("order").fetch();case 3:return o=e.sent,e.abrupt("return",{chunks:o.reduce((function(output,t){return output[output.length-1].length%3==0&&output.push([]),output[output.length-1].push(t),output}),[[]]).filter((function(t){return 0!==t.length}))});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.$t("globals.title"),meta:[{hid:"og:title",name:"og:title",content:this.$t("globals.title")},{hid:"description",name:"description",content:this.$t("globals.description")},{hid:"og:description",name:"og:description",content:this.$t("globals.description")},{hid:"og:url",name:"og:url",content:this.$route.path}]}}},l=(n(267),n(17)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fade-in-section",t._l(t.chunks,(function(e,o){return n("div",{key:JSON.stringify(e),staticClass:"row",class:{"row--active":t.activeRow===o}},t._l(e,(function(e,r){return n("div",{key:e.slug,staticClass:"card",class:{"card--active":null!==t.activeColumn&&t.activeColumn%3==r%3,"card--inactive":null!==t.activeColumn&&t.activeColumn%3!==r},on:{mouseenter:function(e){t.activeColumn=r,t.activeRow=o},mouseleave:function(e){t.activeColumn=null,t.activeRow=null}}},[n("h2",{staticClass:"text-xl leading-tight mb-4 relative z-10",domProps:{innerHTML:t._s(e["title_"+t.$i18n.locale])}}),t._v(" "),n("div",{staticClass:"image",style:"background-image: url("+e.background+")"}),t._v(" "),n("nuxt-link",{staticClass:"absolute top-0 left-0 w-full h-full opacity-0 z-20",attrs:{to:t.localePath("/photography/"+e.slug)}},[t._v("\n                "+t._s(e["title_"+t.$i18n.locale])+"\n            ")])],1)})),0)})),0)}),[],!1,null,"9bd0e01e",null);e.default=component.exports;installComponents(component,{FadeInSection:n(263).default})}}]);