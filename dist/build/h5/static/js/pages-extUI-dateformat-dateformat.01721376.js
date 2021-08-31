(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-dateformat-dateformat"],{"0122":function(t,e,n){"use strict";function i(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.default=i=function(t){return typeof t}:e.default=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i,n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0")},"04d5":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",[t._v(t._s(t.dateShow))])},r=[]},"123b":function(t,e,n){"use strict";var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=c,e.friendlyDate=d;var a=i(n("0122"));function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t+="";while(t.length<e)t="0"+t;return t.slice(-e)}n("fb6a"),n("c975"),n("ac1f"),n("5319");var o={yyyy:function(t){return r(t.year,4)},yy:function(t){return r(t.year)},MM:function(t){return r(t.month)},M:function(t){return t.month},dd:function(t){return r(t.day)},d:function(t){return t.day},hh:function(t){return r(t.hour)},h:function(t){return t.hour},mm:function(t){return r(t.minute)},m:function(t){return t.minute},ss:function(t){return r(t.second)},s:function(t){return t.second},SSS:function(t){return r(t.millisecond,3)},S:function(t){return t.millisecond}};function u(t){if(t instanceof Date)return t;switch((0,a.default)(t)){case"string":return t.indexOf("T")>-1?new Date(t):new Date(t.replace(/-/g,"/"));default:return new Date(t)}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd hh:mm:ss";if(!t&&0!==t)return"";t=u(t);var n={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),millisecond:t.getMilliseconds()},i=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/,a=!0,r=e;while(a)a=!1,r=r.replace(i,(function(t){return a=!0,o[t](n)}));return r}function d(t,e){var n=e.locale,i=void 0===n?"zh":n,a=e.threshold,r=void 0===a?[6e4,36e5]:a,o=e.format,d=void 0===o?"yyyy/MM/dd hh:mm:ss":o;if("-"===t)return t;if(!t&&0!==t)return"";var l,f,s={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},b=s[i]||s.zh,h=u(t),p=h.getTime()-Date.now(),x=Math.abs(p);if(x<r[0])return p<0?b.justNow:b.soon;if(x>=r[1])return c(h,d);var v=b.later;p<0&&(v=b.ago,p=-p);var m=Math.floor(p/1e3),w=Math.floor(m/60),y=Math.floor(w/60),g=Math.floor(y/24),k=Math.floor(g/30),_=Math.floor(k/12);switch(!0){case _>0:l=_,f=b.year;break;case k>0:l=k,f=b.month;break;case g>0:l=g,f=b.day;break;case y>0:l=y,f=b.hour;break;case w>0:l=w,f=b.minute;break;default:l=m,f=b.second;break}return"en"===i&&(1===l?l="a":f+="s"),b.template.replace(/{\s*num\s*}/g,l+"").replace(/{\s*unit\s*}/g,f).replace(/{\s*suffix\s*}/g,v)}},"13cf":function(t,e,n){"use strict";var i=n("ef7f"),a=n.n(i);a.a},"17a7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-section[data-v-76375ba1]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-76375ba1]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-76375ba1]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-76375ba1]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-76375ba1]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-76375ba1]{font-size:14px;color:#333}.distraction[data-v-76375ba1]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-76375ba1]{font-size:12px;color:#999}",""]),t.exports=e},"24ee":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("e25e");var i=n("123b"),a={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,i.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=a},"2e5a":function(t,e,n){"use strict";n.r(e);var i=n("5b38"),a=n("8d94");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("c78b");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"76375ba1",null,!1,i["a"],o);e["default"]=c.exports},"3e05":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-3ab5a40d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-3ab5a40d]{font-size:14px;line-height:inherit}.example[data-v-3ab5a40d]{padding:0 15px 15px}.example-info[data-v-3ab5a40d]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-3ab5a40d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-3ab5a40d]{padding:0 15px}.example-info[data-v-3ab5a40d]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-3ab5a40d]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-3ab5a40d]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-3ab5a40d]{font-size:18px;color:#fff}.word-btn[data-v-3ab5a40d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-3ab5a40d]{background-color:#4ca2ff}.example-body[data-v-3ab5a40d]{line-height:1.5em}body.?%PAGE?%[data-v-3ab5a40d]{background-color:#efeff4}',""]),t.exports=e},"57a1":function(t,e,n){"use strict";n.r(e);var i=n("7565"),a=n("885c");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("13cf");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3ab5a40d",null,!1,i["a"],o);e["default"]=c.exports},"5b38":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},r=[]},7565:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniSection:n("2e5a").default,uniDateformat:n("c97c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("日期格式化组件，通常用于需要展示友好的日期格式的场景")]),n("uni-section",{attrs:{title:"基础用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-dateformat",{attrs:{date:t.now-72e5}}),n("uni-dateformat",{attrs:{date:"2020/12/12"}})],1),n("uni-section",{attrs:{title:"设置阈值",type:"line"}}),n("v-uni-text",{staticClass:"example-info"},[t._v("阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后")]),n("v-uni-view",{staticClass:"example-body"},[n("uni-dateformat",{attrs:{date:t.now-3e4,threshold:[0,36e5]}}),n("uni-dateformat",{attrs:{date:t.now-3e4,threshold:[0,0]}})],1),n("uni-section",{attrs:{title:"使用英文",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-dateformat",{attrs:{date:t.now-12e5,threshold:[6e4,36e5],locale:"en"}}),n("uni-dateformat",{attrs:{date:t.now-3e4,threshold:[6e4,36e5],locale:"en"}}),n("uni-dateformat",{attrs:{date:t.now-8e4,threshold:[6e4,36e5],locale:"en"}})],1)],1)},r=[]},8453:function(t,e,n){"use strict";n.r(e);var i=n("24ee"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"885c":function(t,e,n){"use strict";n.r(e);var i=n("c184"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"88d0":function(t,e,n){var i=n("17a7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4e063e5b",i,!0,{sourceMap:!1,shadowMode:!1})},"8d94":function(t,e,n){"use strict";n.r(e);var i=n("dfda"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c184:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{now:Date.now()}},methods:{}};e.default=i},c78b:function(t,e,n){"use strict";var i=n("88d0"),a=n.n(i);a.a},c97c:function(t,e,n){"use strict";n.r(e);var i=n("04d5"),a=n("8453");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"4270d529",null,!1,i["a"],o);e["default"]=c.exports},dfda:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},ef7f:function(t,e,n){var i=n("3e05");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("889b114a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);