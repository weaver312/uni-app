(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-transition-transition"],{"0122":function(t,e,n){"use strict";function i(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.default=i=function(t){return typeof t}:e.default=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0")},"10eb":function(t,e,n){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"17a7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),t.exports=e},"276c":function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"2da5":function(t,e,n){"use strict";var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d0ff")),o=i(n("0122")),r=i(n("f3f3"));n("a9e3"),n("4160"),n("159b"),n("99af"),n("ac1f"),n("5319");var s=n("9f55"),c={name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:function(){return"fade"}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}},customClass:{type:String,default:""}},data:function(){return{isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}},watch:{show:{handler:function(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,r.default)((0,r.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),e="";for(var n in t){var i=this.toLine(n);e+=i+":"+t[n]+";"}return e},transformStyles:function(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created:function(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.duration&&(this.durationTime=t.duration),this.animation=(0,s.createAnimation)(Object.assign(this.config,t))},onClick:function(){this.$emit("click",{detail:this.isShow})},step:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.animation){for(var n in t)try{var i;if("object"===(0,o.default)(t[n]))(i=this.animation)[n].apply(i,(0,a.default)(t[n]));else this.animation[n](t[n])}catch(r){console.error("方法 ".concat(n," 不存在"))}return this.animation.step(e),this}},run:function(t){this.animation&&this.animation.run(t)},open:function(){var t=this;clearTimeout(this.timer),this.transform="",this.isShow=!0;var e=this.styleInit(!1),n=e.opacity,i=e.transform;"undefined"!==typeof n&&(this.opacity=n),this.transform=i,this.$nextTick((function(){t.timer=setTimeout((function(){t.animation=(0,s.createAnimation)(t.config,t),t.tranfromInit(!1).step(),t.animation.run(),t.$emit("change",{detail:t.isShow})}),20)}))},close:function(t){var e=this;this.animation&&this.tranfromInit(!0).step().run((function(){e.isShow=!1,e.animationData=null,e.animation=null;var t=e.styleInit(!1),n=t.opacity,i=t.transform;e.opacity=n||1,e.transform=i,e.$emit("change",{detail:e.isShow})}))},styleInit:function(t){var e=this,n={transform:""},i=function(t,i){"fade"===i?n.opacity=e.animationType(t)[i]:n.transform+=e.animationType(t)[i]+" "};return"string"===typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((function(e){i(t,e)})),n},tranfromInit:function(t){var e=this,n=function(t,n){var i=null;"fade"===n?i=t?0:1:(i=t?"-100%":"0","zoom-in"===n&&(i=t?.8:1),"zoom-out"===n&&(i=t?1.2:1),"slide-right"===n&&(i=t?"100%":"0"),"slide-bottom"===n&&(i=t?"100%":"0")),e.animation[e.animationMode()[n]](i)};return"string"===typeof this.modeClass?n(t,this.modeClass):this.modeClass.forEach((function(e){n(t,e)})),this.animation},animationType:function(t){return{fade:t?1:0,"slide-top":"translateY(".concat(t?"0":"-100%",")"),"slide-right":"translateX(".concat(t?"0":"100%",")"),"slide-bottom":"translateY(".concat(t?"0":"100%",")"),"slide-left":"translateX(".concat(t?"0":"-100%",")"),"zoom-in":"scaleX(".concat(t?1:.8,") scaleY(").concat(t?1:.8,")"),"zoom-out":"scaleX(".concat(t?1:1.2,") scaleY(").concat(t?1:1.2,")")}},animationMode:function(){return{fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=c},"2e5a":function(t,e,n){"use strict";n.r(e);var i=n("5b38"),a=n("8d94");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c78b");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"76375ba1",null,!1,i["a"],r);e["default"]=c.exports},3200:function(t,e,n){"use strict";n.r(e);var i=n("c28a"),a=n("e2ca");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"25ed78f2",null,!1,i["a"],r);e["default"]=c.exports},4053:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=a(n("b6802"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,i.default)(t)}},4733:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{show:!0,modeClass:"fade",styles:{}}},onLoad:function(){},methods:{handle:function(t){this.show=!this.show,this.modeClass=t},custom:function(){this.$refs.ani.step({width:"100px",height:"100px",rotate:"180"},{delay:200,duration:300}),this.$refs.ani.step({width:"100px",height:"100px",rotate:"0"},{transformOrigin:"50% 50%"}),this.$refs.ani.step({translateX:"-100px"},{timingFunction:"ease-in",duration:100}),this.$refs.ani.step({translateX:"100px"},{timingFunction:"ease",duration:300}),this.$refs.ani.step({translateX:"50px",scale:1.5},{timingFunction:"linear",duration:100}),this.$refs.ani.step({translateX:"0px",scale:1},{timingFunction:"linear",duration:150}),this.$refs.ani.run()}}};e.default=i},"5b38":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[]},"6c85":function(t,e,n){"use strict";var i=n("7584"),a=n.n(i);a.a},7584:function(t,e,n){var i=n("9e17");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1fb37ff4",i,!0,{sourceMap:!1,shadowMode:!1})},"88d0":function(t,e,n){var i=n("17a7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4e063e5b",i,!0,{sourceMap:!1,shadowMode:!1})},"8d94":function(t,e,n){"use strict";n.r(e);var i=n("dfda"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"9e17":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-431ed2b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-431ed2b2]{font-size:14px;line-height:inherit}.example[data-v-431ed2b2]{padding:0 15px 15px}.example-info[data-v-431ed2b2]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-431ed2b2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-431ed2b2]{padding:0 15px}.example-info[data-v-431ed2b2]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-431ed2b2]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-431ed2b2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-431ed2b2]{font-size:18px;color:#fff}.word-btn[data-v-431ed2b2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-431ed2b2]{background-color:#4ca2ff}.example[data-v-431ed2b2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:150px;background-color:#fff}.example-body[data-v-431ed2b2]{padding:10px 20px;padding-bottom:0}.transition-button[data-v-431ed2b2]{\nwidth:100%;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-bottom:10px}\n.example[data-v-431ed2b2]  .transition{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100px;height:100px;border-radius:5px;text-align:center;background-color:#4cd964;box-shadow:0 0 5px 1px rgba(0,0,0,.2)}\n.text[data-v-431ed2b2]{font-size:14px;color:#fff}body.?%PAGE?%[data-v-431ed2b2]{background-color:#efeff4}',""]),t.exports=e},"9f55":function(t,e,n){"use strict";var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=f,n("caad"),n("2532"),n("99af"),n("d3b7"),n("4160"),n("159b");var a=i(n("f3f3")),o=i(n("276c")),r=i(n("e954")),s=function(){function t(e,n){(0,o.default)(this,t),this.options=e,this.animation=uni.createAnimation(e),this.currentStepAnimates={},this.next=0,this.$=n}return(0,r.default)(t,[{key:"_nvuePushAnimates",value:function(t,e){var n=this.currentStepAnimates[this.next],i={};if(i=n||{styles:{},config:{}},c.includes(t)){i.styles.transform||(i.styles.transform="");var a="";"rotate"===t&&(a="deg"),i.styles.transform+="".concat(t,"(").concat(e+a,") ")}else i.styles[t]="".concat(e);this.currentStepAnimates[this.next]=i}},{key:"_animateRun",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.$.$refs["ani"].ref;if(n)return new Promise((function(i,o){nvueAnimation.transition(n,(0,a.default)({styles:t},e),(function(t){i()}))}))}},{key:"_nvueNextAnimate",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=t[n];if(a){var o=a.styles,r=a.config;this._animateRun(o,r).then((function(){n+=1,e._nvueNextAnimate(t,n,i)}))}else this.currentStepAnimates={},"function"===typeof i&&i(),this.isEnd=!0}},{key:"step",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.animation.step(t),this}},{key:"run",value:function(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((function(){"function"===typeof t&&t()}),this.$.durationTime)}}]),t}(),c=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"],l=["opacity","backgroundColor"],u=["width","height","left","right","top","bottom"];function f(t,e){if(e)return clearTimeout(e.timer),new s(t,e)}c.concat(l,u).forEach((function(t){s.prototype[t]=function(){var e;return(e=this.animation)[t].apply(e,arguments),this}}))},a9e0:function(t,e,n){"use strict";function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630")},c28a:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShow?n("v-uni-view",{ref:"ani",class:t.customClass,style:t.transformStyles,attrs:{animation:t.animationData},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[]},c39c:function(t,e,n){"use strict";n.r(e);var i=n("4733"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c78b:function(t,e,n){"use strict";var i=n("88d0"),a=n.n(i);a.a},c9a2:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniSection:n("2e5a").default,uniTransition:n("3200").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("过渡动画，通常用于元素的过渡效果，例如淡隐淡出效果，遮罩层的效果、放大缩小的效果等")]),n("uni-section",{attrs:{title:"示例",type:"line"}}),n("v-uni-view",{staticClass:"example"},[n("uni-transition",{ref:"ani",attrs:{"custom-class":"transition","mode-class":t.modeClass,styles:t.styles,show:t.show}},[n("v-uni-text",{staticClass:"text"},[t._v("示例元素")])],1)],1),n("uni-section",{attrs:{title:"操作",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("v-uni-button",{staticClass:"transition-button",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handle("fade")}}},[t._v("淡隐淡出")]),n("v-uni-button",{staticClass:"transition-button",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handle(["fade","slide-top"])}}},[t._v("由上至下")]),n("v-uni-button",{staticClass:"transition-button",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handle(["fade","slide-right"])}}},[t._v("由右至左过")]),n("v-uni-button",{staticClass:"transition-button",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handle(["fade","zoom-in"])}}},[t._v("由小到大过")]),n("v-uni-button",{staticClass:"transition-button",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v("自定义动画")])],1)],1)},o=[]},d0ff:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var i=s(n("4053")),a=s(n("a9e0")),o=s(n("dde1")),r=s(n("10eb"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,i.default)(t)||(0,a.default)(t)||(0,o.default)(t)||(0,r.default)()}},dfda:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},e2ca:function(t,e,n){"use strict";n.r(e);var i=n("2da5"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e954:function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},ee83:function(t,e,n){"use strict";n.r(e);var i=n("c9a2"),a=n("c39c");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6c85");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"431ed2b2",null,!1,i["a"],r);e["default"]=c.exports}}]);