(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-web-view-local-web-view-local"],{"0bb7":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}));var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("v-uni-web-view",{attrs:{src:"/hybrid/html/local.html"},on:{message:function(n){arguments[0]=n=e.$handleEvent(n),e.getMessage.apply(void 0,arguments)}}})],1)},u=[]},"1ca6":function(e,n,t){"use strict";t.r(n);var a=t("c7b7"),i=t.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=i.a},"424e":function(e,n,t){"use strict";t.r(n);var a=t("0bb7"),i=t("1ca6");for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);var c,r=t("f0c5"),o=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"06410297",null,!1,a["a"],c);n["default"]=o.exports},c7b7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={methods:{getMessage:function(e){uni.showModal({content:JSON.stringify(e.detail),showCancel:!1})}}};n.default=a}}]);