(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-2"],{1264:function(t,e,n){"use strict";n.r(e);var a=n("6401"),i=n("75dc");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("e611");var c,r=n("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"3a8cc741",null,!1,a["a"],c);e["default"]=l.exports},"16ae":function(t,e,n){var a=n("f841");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("059a483e",a,!0,{sourceMap:!1,shadowMode:!1})},"61ac":function(t,e,n){"use strict";var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f3f3")),o=n("2f62"),c={data:function(){return{}},computed:(0,i.default)((0,i.default)({},(0,o.mapState)(["colorIndex","colorList"])),(0,o.mapGetters)(["currentColor"])),methods:(0,i.default)({},(0,o.mapMutations)(["setColorIndex"]))};e.default=c},6401:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1)],1)],1)},o=[]},"75dc":function(t,e,n){"use strict";n.r(e);var a=n("61ac"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},e611:function(t,e,n){"use strict";var a=n("16ae"),i=n.n(a);i.a},f841:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".new-page__text[data-v-3a8cc741]{font-size:14px;color:#666}.root[data-v-3a8cc741]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-3a8cc741]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-3a8cc741]{padding:20px}.new-page__color[data-v-3a8cc741]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-3a8cc741]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-3a8cc741]{margin-top:15px;width:300px}",""]),t.exports=e}}]);