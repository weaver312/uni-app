(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-1"],{"03ee":function(e,t,n){"use strict";var a=n("179b"),i=n.n(a);i.a},"05ea":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".new-page__text[data-v-96417b38]{font-size:14px;color:#666}.root[data-v-96417b38]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-96417b38]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-96417b38]{padding:20px}.new-page__color[data-v-96417b38]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-96417b38]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-96417b38]{margin-top:15px;width:300px}",""]),e.exports=t},"10da":function(e,t,n){"use strict";var a=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("f3f3")),o=n("2f62"),c={data:function(){return{}},computed:(0,i.default)((0,i.default)({},(0,o.mapState)(["colorIndex","colorList"])),(0,o.mapGetters)(["currentColor"])),methods:(0,i.default)((0,i.default)({},(0,o.mapMutations)(["setColorIndex"])),{},{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-2"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};t.default=c},"179b":function(e,t,n){var a=n("05ea");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("97d072c0",a,!0,{sourceMap:!1,shadowMode:!1})},"813a":function(e,t,n){"use strict";n.r(t);var a=n("10da"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},8930:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:e.currentColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setColorIndex(e.colorIndex>1?0:e.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[e._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[e._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navToNvue.apply(void 0,arguments)}}},[e._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navToVue.apply(void 0,arguments)}}},[e._v("跳转VUE页面")])],1)],1)],1)},o=[]},e7ec:function(e,t,n){"use strict";n.r(t);var a=n("8930"),i=n("813a");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("03ee");var c,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"96417b38",null,!1,a["a"],c);t["default"]=u.exports}}]);