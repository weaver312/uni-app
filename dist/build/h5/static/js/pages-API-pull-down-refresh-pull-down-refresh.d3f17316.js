(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-pull-down-refresh-pull-down-refresh"],{"335a":function(t,a,e){"use strict";var n=e("ad21"),o=e.n(n);o.a},"78a6":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("99af");var n={data:function(){return{title:"下拉刷新 + 加载更多",data:[],loadMoreText:"加载中...",showLoadMore:!1,max:0}},onLoad:function(){this.initData()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout((function(){t.setListData()}),300))},onPullDownRefresh:function(){console.log("onPullDownRefresh"),this.initData()},methods:{initData:function(){var t=this;setTimeout((function(){t.max=0,t.data=[];var a=[];t.max+=20;for(var e=t.max-19;e<t.max+1;e++)a.push(e);t.data=t.data.concat(a),uni.stopPullDownRefresh()}),300)},setListData:function(){var t=[];this.max+=10;for(var a=this.max-9;a<this.max+1;a++)t.push(a);this.data=this.data.concat(t)}}};a.default=n},8386:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".text[data-v-e3701e26]{margin:%?16?% 0;width:100%;background-color:#fff;height:%?120?%;line-height:%?120?%;text-align:center;color:#555;border-radius:%?8?%}",""]),t.exports=a},8946:function(t,a,e){"use strict";e.r(a);var n=e("78a6"),o=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},ad21:function(t,a,e){var n=e("8386");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("ee8b51dc",n,!0,{sourceMap:!1,shadowMode:!1})},eddd:function(t,a,e){"use strict";e.r(a);var n=e("f551"),o=e("8946");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("335a");var r,s=e("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"e3701e26",null,!1,n["a"],r);a["default"]=u.exports},f551:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={pageHead:e("0586").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticStyle:{"font-size":"12px",color:"#666"}},[t._v("注：PC 不支持下拉刷新")]),t._l(t.data,(function(a,n){return e("v-uni-view",{key:n,staticClass:"text"},[t._v("list - "+t._s(a))])})),t.showLoadMore?e("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],2)],1)},i=[]}}]);