/*! vue-ydui v0.2.0 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var s=r[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var r={};return e.m=t,e.c=r,e.p="/dist/",e(0)}({0:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0;var s=r(55),i=n(s);e.ProgressBar=i.default},1:function(t,e){t.exports=function(t,e,r,n){var s,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),r&&(a._scopeId=r),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:s,exports:i,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(n[i]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&n[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),t.push(o))}},t}},3:function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=d[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(o(r.parts[s]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],s=0;s<r.parts.length;s++)i.push(o(r.parts[s]));d[r.id]={id:r.id,refs:1,parts:i}}}}function s(t,e){for(var r=[],n={},s=0;s<e.length;s++){var i=e[s],o=i[0],a=i[1],l=i[2],u=i[3],d={css:a,media:l,sourceMap:u};n[o]?(d.id=t+":"+n[o].parts.length,n[o].parts.push(d)):(d.id=t+":0",r.push(n[o]={id:o,parts:[d]}))}return r}function i(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),s=null!=n;if(s&&p)return v;if(g){var o=h++;n=f||(f=i()),e=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else n=n||i(),e=l.bind(null,n),r=function(){n.parentNode.removeChild(n)};return s||e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function a(t,e,r,n){var s=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,s);else{var i=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function l(t,e){var r=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(r+="\n/*# sourceURL="+s.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document,s=r(4),d={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){p=r;var i=s(t,e);return n(i),function(e){for(var r=[],o=0;o<i.length;o++){var a=i[o],l=d[a.id];l.refs--,r.push(l)}e?(i=s(t,e),n(i)):i=[];for(var o=0;o<r.length;o++){var l=r[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var r=[],n={},s=0;s<e.length;s++){var i=e[s],o=i[0],a=i[1],l=i[2],u=i[3],d={id:t+":"+s,css:a,media:l,sourceMap:u};n[o]?n[o].parts.push(d):r.push(n[o]={id:o,parts:[d]})}return r}},7:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),n=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||r.test(t)||n.test(t)};e.pageScroll=r,e.isColor=n},23:function(t,e,r){e=t.exports=r(2)(),e.push([t.id,".m-progressbar{position:relative;color:#333;width:100%;height:100%}.m-progressbar>svg{width:100%}.m-progressbar>svg>path{-webkit-transition:all .8s linear;transition:all .8s linear}.progressbar-content{position:absolute;top:50%;left:50%;font-size:.3rem;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},55:function(t,e,r){r(113);var n=r(1)(r(146),r(85),null,null);t.exports=n.exports},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-progressbar"},["line"!=t.type?r("div",{staticClass:"progressbar-content"},[t._v(t._s(100*t.progress)+"%")]):t._e(),t._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{viewBox:t.viewBox,preserveAspectRatio:"line"==t.type?"none":""}},[r("path",{attrs:{"fill-opacity":t.fillColor?1:0,d:t.getPathString,fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.trailWidth}}),t._v(" "),r("path",{ref:"trailPath",style:{strokeDasharray:t.stroke.dasharray,strokeDashoffset:t.stroke.dashoffset},attrs:{"fill-opacity":"0",d:t.getPathString,stroke:t.trailColor,"stroke-width":t.strokeWidth?t.strokeWidth:t.trailWidth}})])])},staticRenderFns:[]}},113:function(t,e,r){var n=r(23);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);r(3)("dff5c4ae",n,!0)},146:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(7);e.default={name:"yd-progressbar",data:function(){return{viewBox:"0 0 100 100",show:!1,stroke:{dasharray:"",dashoffset:""}}},props:{type:{type:String,validator:function(t){return["circle","line"].indexOf(t)>-1},default:"circle"},fillColor:{type:String,validator:function(t){return(0,n.isColor)(t)}},strokeWidth:{validator:function(t){return/^\d*$/.test(t)},default:0},strokeColor:{type:String,validator:function(t){return(0,n.isColor)(t)},default:"#E5E5E5"},trailWidth:{validator:function(t){return/^\d*$/.test(t)},default:0,require:!0},trailColor:{type:String,validator:function(t){return(0,n.isColor)(t)},default:"#646464"},progress:{validator:function(t){return/^(0(.\d+)?|1(\.0+)?)$/.test(t)},default:0}},methods:{init:function(){var t=this,e=this.length=this.$refs.trailPath.getTotalLength();this.stroke.dashoffset=e,this.stroke.dasharray=e+","+e,this.scrollview=this.getScrollview(),this.show=!0,"line"==this.type&&(this.viewBox="0 0 100 "+(this.strokeWidth?this.strokeWidth:this.trailWidth)),setTimeout(function(){t.checkInview()},0),this.bindEvent()},getScrollview:function(){var t=document.defaultView.getComputedStyle(this.$el.parentNode).overflowY;return"scroll"==t||"auto"==t?this.$el.parentNode:this.$parent.$refs.scrollview?this.$parent.$refs.scrollview:window},checkInview:function(){var t=this.scrollview,e=t==window?document.body.offsetHeight:t.offsetHeight,r=t===window?0:t.getBoundingClientRect().top,n=this.$el.getBoundingClientRect().top-r,s=n+this.$el.offsetHeight;(n>=0&&n<e||s>0&&s<=e)&&(this.stroke.dashoffset=this.length-this.progress*this.length)},bindEvent:function(){this.scrollview.addEventListener("scroll",this.checkInview),this.scrollview.addEventListener("resize",this.checkInview)},unbindEvent:function(){this.scrollview.removeEventListener("scroll",this.checkInview),this.scrollview.removeEventListener("resize",this.checkInview)}},watch:{progress:function(t){this.stroke.dashoffset=this.length-t*this.length}},computed:{getPathString:function(){if("line"==this.type)return"M 0,{R} L 100,{R}".replace(/\{R\}/g,this.trailWidth/2);var t=50-(this.strokeWidth?this.strokeWidth:this.trailWidth)/2;return"M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}".replace(/\{R\}/g,t).replace(/\{2R\}/g,2*t)}},mounted:function(){this.init()},destoryed:function(){this.unbindEvent()}}}})});