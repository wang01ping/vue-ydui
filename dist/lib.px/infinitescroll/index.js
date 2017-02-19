/*! vue-ydui v0.2.0 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.ydui=t(require("Vue")):e.ydui=t(e.Vue)}(this,function(e){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}({0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.InfiniteScroll=void 0;var o=i(46),s=n(o);t.InfiniteScroll=s.default},1:function(e,t){e.exports=function(e,t,i,n){var o,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(o=e,s=e.default);var u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),i&&(u._scopeId=i),n){var d=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];d[e]=function(){return t}})}return{esModule:o,exports:s,options:u}}},8:function(t,i){t.exports=e},46:function(e,t,i){var n=i(1)(i(137),i(99),null,null);e.exports=n.exports},99:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._t("list"),e._v(" "),i("div",{ref:"tag"}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&e.isDone,expression:"!isLoading && isDone"}],staticClass:"list-donetip"},[e._t("doneTip",[e._v("没有更多数据了")])],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"list-loading"},[e._t("loadingTip",[e._v("加载中")])],2)],2)},staticRenderFns:[]}},137:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(8),s=n(o);t.default={name:"yd-infinitescroll",data:function(){return{isLoading:!1,isDone:!1}},props:{onInfinite:{type:Function,required:!0}},methods:{init:function(){var e=this;s.default.prototype.$yduiBus=this.$yduiBus||new s.default,this.scrollview=this.getScrollview(),this.scrollview.addEventListener("scroll",function(){e.throttle(e.scrollHandler)}),this.$yduiBus.$on("ydui.infinitescroll.loadedDone",function(){e.isLoading=!1,e.isDone=!0}),this.$yduiBus.$on("ydui.infinitescroll.finishLoad",function(){e.isLoading=!1})},getScrollview:function(){var e=document.defaultView.getComputedStyle(this.$el.parentNode).overflowY;return"scroll"==e||"auto"==e?this.$el.parentNode:this.$parent.$refs.scrollview?this.$parent.$refs.scrollview:window},scrollHandler:function(){if(!this.isLoading&&!this.isDone){var e=this.scrollview,t=e==window?document.body.offsetHeight:e.offsetHeight,i=e==window?0:e.getBoundingClientRect().top;this.$refs.tag.getBoundingClientRect().top<=i+t+t/10&&(this.isLoading=!0,this.onInfinite())}},throttle:function(e,t){clearTimeout(e.tId),e.tId=setTimeout(function(){e.call(t)},100)}},mounted:function(){this.init()},destroyed:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler)}}}})});