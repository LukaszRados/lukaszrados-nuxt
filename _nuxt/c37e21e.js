(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{292:function(t,o,n){"use strict";n.r(o);var l={props:["paddingBottom","src"],data:function(){return{loaded:!1,shown:!1}},methods:{onScroll:function(){var t=this.$el.getBoundingClientRect().top-window.innerHeight;t<500&&(this.loaded=!0),t<-100&&(this.shown=!0,window.removeEventListener("scroll",this.onScroll,{passive:!0}))}},mounted:function(){window.addEventListener("scroll",this.onScroll,{passive:!0}),this.onScroll()},destroyed:function(){window.removeEventListener("scroll",this.onScroll,{passive:!0})}},e=n(17),component=Object(e.a)(l,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("picture",{staticClass:"block relative w-full my-8 mx-auto lg:my-16 transform transition-all duration-500 ease-in-out",class:{"translate-y-20 opacity-0":!t.shown,"max-w-1200":t.paddingBottom<100,"max-w-3xl":t.paddingBottom>=100}},[n("div",{staticClass:"h-0 w-full bg-gray-200",style:"padding-bottom: "+t.paddingBottom+"%"}),t._v(" "),n("transition",[t.loaded?n("img",{staticClass:"absolute w-full h-full top-0 left-0",attrs:{src:t.src,alt:""}}):t._e()])],1)}),[],!1,null,null,null);o.default=component.exports}}]);