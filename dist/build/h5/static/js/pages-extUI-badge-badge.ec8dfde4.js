(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-badge-badge"],{"044c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},data:function(){return{value:0,customStyle:{backgroundColor:"#2C405A",color:"red"}}},mounted:function(){var t=this,e=setInterval((function(){t.value>=199?clearInterval(e):t.value++}),100)}};e.default=a},"047d":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-badge--x"},[t._t("default"),t.text?i("v-uni-text",{staticClass:"uni-badge",class:t.classNames,style:[t.badgeWidth,t.positionStyle,t.customStyle,t.dotStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},o=[]},"167f":function(t,e,i){var a=i("c8a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5a3c1a50",a,!0,{sourceMap:!1,shadowMode:!1})},"17a7":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),t.exports=e},2412:function(t,e,i){"use strict";i.r(e);var a=i("539c"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},2418:function(t,e,i){"use strict";i.r(e);var a=i("044c"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"2e5a":function(t,e,i){"use strict";i.r(e);var a=i("5b38"),n=i("8d94");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c78b");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"76375ba1",null,!1,a["a"],r);e["default"]=c.exports},"2fb8":function(t,e,i){"use strict";var a=i("4f11"),n=i.n(a);n.a},"4f11":function(t,e,i){var a=i("78db");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2b052d7f",a,!0,{sourceMap:!1,shadowMode:!1})},"539c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"normal"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,e=this.type,i=this.size,a=this.absolute;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+i,a?"uni-badge--absolute":""]},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,e=10;this.isDot&&(t=5,e=5);var i="".concat(-t+this.offset[0],"px"),a="".concat(-e+this.offset[1],"px"),n={rightTop:{right:i,top:a},rightBottom:{right:i,bottom:a},leftBottom:{left:i,bottom:a},leftTop:{left:i,top:a}},o=n[this.absolute];return o||n["rightTop"]},badgeWidth:function(){return{width:"".concat(this.width,"px")}},dotStyle:function(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,e=this.text,i=this.maxNum;return t?"":Number(e)>i?"".concat(i,"+"):e}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},"54ac":function(t,e,i){"use strict";i.r(e);var a=i("e841"),n=i("2418");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5f3b");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"fc36ce0c",null,!1,a["a"],r);e["default"]=c.exports},"5b38":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[]},"5f3b":function(t,e,i){"use strict";var a=i("167f"),n=i.n(a);n.a},"78db":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-badge--x[data-v-729d809a]{\n\n\ndisplay:inline-block;\nposition:relative}.uni-badge--absolute[data-v-729d809a]{position:absolute}.uni-badge[data-v-729d809a]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;box-sizing:border-box;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:20px;line-height:20px;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;\ncursor:pointer\n}.uni-badge--inverted[data-v-729d809a]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-729d809a]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-729d809a]{color:#999;background-color:initial}.uni-badge--primary[data-v-729d809a]{color:#fff;background-color:#007aff}.uni-badge--primary-inverted[data-v-729d809a]{color:#007aff;background-color:initial}.uni-badge--success[data-v-729d809a]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-729d809a]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-729d809a]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-729d809a]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-729d809a]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-729d809a]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-729d809a]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""]),t.exports=e},"7eb1":function(t,e,i){"use strict";i.r(e);var a=i("047d"),n=i("2412");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("2fb8");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"729d809a",null,!1,a["a"],r);e["default"]=c.exports},"88d0":function(t,e,i){var a=i("17a7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4e063e5b",a,!0,{sourceMap:!1,shadowMode:!1})},"8d94":function(t,e,i){"use strict";i.r(e);var a=i("dfda"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c78b:function(t,e,i){"use strict";var a=i("88d0"),n=i.n(a);n.a},c8a7:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-fc36ce0c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-fc36ce0c]{font-size:14px;line-height:inherit}.example[data-v-fc36ce0c]{padding:0 15px 15px}.example-info[data-v-fc36ce0c]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-fc36ce0c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-fc36ce0c]{padding:0 15px}.example-info[data-v-fc36ce0c]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-fc36ce0c]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-fc36ce0c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-fc36ce0c]{font-size:18px;color:#fff}.word-btn[data-v-fc36ce0c]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-fc36ce0c]{background-color:#4ca2ff}\n.example-body[data-v-fc36ce0c]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-badge-left-margin[data-v-fc36ce0c]{margin-left:10px}.uni-badge-absolute[data-v-fc36ce0c]{margin-left:40px}.box[data-v-fc36ce0c]{width:40px;height:40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;background-color:#dcdfe6;color:#fff;font-size:12px}.box-text[data-v-fc36ce0c]{text-align:center;color:#fff;font-size:12px}body.?%PAGE?%[data-v-fc36ce0c]{background-color:#efeff4}',""]),t.exports=e},dfda:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},e841:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniSection:i("2e5a").default,uniBadge:i("7eb1").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-text",{staticClass:"example-info"},[t._v("数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等")]),i("uni-section",{attrs:{title:"定位: aboslute 属性 + offset 属性",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:t.value,absolute:"rightTop",size:"small",type:"primary"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"box-text"},[t._v("右上")])],1)],1),i("uni-badge",{staticClass:"uni-badge-absolute",attrs:{text:t.value,absolute:"rightTop",offset:[-10,-10],size:"small",type:"primary"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"box-text"},[t._v("右上+偏移")])],1)],1),i("uni-badge",{staticClass:"uni-badge-absolute",attrs:{size:"small",text:t.value,absolute:"rightBottom",type:"primary"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"box-text"},[t._v("右下")])],1)],1),i("uni-badge",{staticClass:"uni-badge-absolute",attrs:{size:"small",text:t.value,absolute:"leftTop",type:"primary","max-num":10}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"box-text"},[t._v("左上")])],1)],1)],1),i("uni-section",{attrs:{title:"仅显示点: is-dot 属性",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{"is-dot":!0,text:t.value,absolute:"rightTop",size:"small",type:"primary"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"box-text"},[t._v("圆点")])],1)],1),i("uni-badge",{staticClass:"uni-badge-absolute",attrs:{"is-dot":!0,text:t.value,absolute:"rightTop",offset:[-5,-5],size:"small",type:"success"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"box-text"},[t._v("圆点+偏移")])],1)],1),i("uni-badge",{staticClass:"uni-badge-absolute",attrs:{"is-dot":!0,text:t.value,absolute:"rightTop",size:"small",type:"error"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"box-text"},[t._v("圆点")])],1)],1),i("uni-badge",{staticClass:"uni-badge-absolute",attrs:{"is-dot":!0,text:t.value,absolute:"rightTop",size:"small",type:"warning"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-text",{staticClass:"box-text"},[t._v("圆点")])],1)],1)],1),i("uni-section",{attrs:{title:"有底色",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"1"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"2",type:"primary"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"34",type:"success"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"45",type:"warning"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"123",type:"error"}})],1),i("uni-section",{attrs:{title:"无底色",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"1"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"2",type:"primary"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"34",type:"success"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"45",type:"warning"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{inverted:!0,text:"123",type:"error"}})],1),i("uni-section",{attrs:{title:"迷你",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"1",size:"small"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"2",type:"primary",size:"small"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"34",type:"success",size:"small"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"45",type:"warning",size:"small"}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"123",type:"error",size:"small"}})],1),i("uni-section",{attrs:{title:"自定义样式",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"2",type:"primary",customStyle:t.customStyle}}),i("uni-badge",{staticClass:"uni-badge-left-margin",attrs:{text:"2",type:"primary",customStyle:{color:"red"}}})],1)],1)},o=[]}}]);