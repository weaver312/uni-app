(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-video-video"],{2971:function(e,t,a){"use strict";a.r(t);var i=a("886e"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"2f57":function(e,t,a){"use strict";var i=a("5a3e"),n=a.n(i);n.a},"5a3e":function(e,t,a){var i=a("5cd9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("6a6fcc7f",i,!0,{sourceMap:!1,shadowMode:!1})},"5ac4":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var i={pageHead:a("0586").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[e._v("视频来源")])],1),a("v-uni-view",{staticClass:"uni-list-cell-right"},[a("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.sourceTypeChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1)],1)],1),e.src?[a("v-uni-video",{staticClass:"video",attrs:{src:e.src}})]:[a("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseVideo.apply(void 0,arguments)}}},[e._v("+ 添加视频")])]],2)},s=[]},"5cd9":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".video[data-v-52d023f7]{width:100%}.camera-tips[data-v-52d023f7]{padding:%?10?% %?30?%}",""]),e.exports=t},"69e8":function(e,t,a){"use strict";a.r(t);var i=a("5ac4"),n=a("2971");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("2f57");var c,u=a("f0c5"),r=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"52d023f7",null,!1,i["a"],c);t["default"]=r.exports},"886e":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("e25e");var i=[["camera"],["album"],["camera","album"]],n={data:function(){return{title:"chooseVideo",sourceTypeIndex:2,sourceType:["拍摄","相册","拍摄或相册"],src:"",cameraList:[{value:"back",name:"后置摄像头",checked:"true"},{value:"front",name:"前置摄像头"}],cameraIndex:0}},onUnload:function(){this.src="",this.sourceTypeIndex=2,this.sourceType=["拍摄","相册","拍摄或相册"]},methods:{radioChange:function(e){for(var t=0;t<this.cameraList.length;t++)if(this.cameraList[t].value===e.detail.value){this.cameraIndex=t;break}},sourceTypeChange:function(e){this.sourceTypeIndex=parseInt(e.detail.value)},chooseVideo:function(){var e=this;uni.chooseVideo({camera:this.cameraList[this.cameraIndex].value,sourceType:i[this.sourceTypeIndex],success:function(t){e.src=t.tempFilePath},fail:function(e){}})}}};t.default=n}}]);