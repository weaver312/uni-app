(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-file-file"],{"0b34":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".image[data-v-2592387d]{width:100%;height:%?360?%}.btn-savefile[data-v-2592387d]{background-color:#007aff;color:#fff}",""]),t.exports=e},"2a8f":function(t,e,n){"use strict";n.r(e);var i=n("c20c"),a=n("c729");for(var c in a)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("2fb9");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"2592387d",null,!1,i["a"],s);e["default"]=l.exports},"2fb9":function(t,e,n){"use strict";var i=n("af1c"),a=n.n(i);a.a},7190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=uni.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.tempFilePath=e.tempFilePaths[0]},fail:function(t){}})},saveFile:function(){var t=this;this.tempFilePath.length>0?uni.saveFile({tempFilePath:this.tempFilePath,success:function(e){t.savedFilePath=e.savedFilePath,uni.setStorageSync("savedFilePath",e.savedFilePath),uni.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(t){uni.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(t),showCancel:!1})}}):uni.showModal({content:"请选择文件",showCancel:!1})},clear:function(){uni.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){uni.downloadFile({url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b3f1d0b0-5168-11eb-bd01-97bc1429a9ff.pdf",success:function(t){uni.openDocument({filePath:t.tempFilePath,success:function(){console.log("打开文档成功")}})}})}}};e.default=i},af1c:function(t,e,n){var i=n("0b34");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("52f63dba",i,!0,{sourceMap:!1,shadowMode:!1})},c20c:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i}));var i={pageHead:n("0586").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t.tempFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:t.tempFilePath,mode:"aspectFit"}})]:t._e(),!t.tempFilePath&&t.savedFilePath?[n("v-uni-image",{staticClass:"image",attrs:{src:t.savedFilePath,mode:"aspectFit"}})]:t._e(),t.tempFilePath||t.savedFilePath?t._e():[n("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[t._v("+ 请选择文件")])],n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{staticClass:"btn-savefile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveFile.apply(void 0,arguments)}}},[t._v("保存文件")]),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("删除文件")])],1),n("v-uni-view",{staticClass:"btn-area"},[n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openDocument.apply(void 0,arguments)}}},[t._v("打开pdf文件")])],1)],2)],1)},c=[]},c729:function(t,e,n){"use strict";n.r(e);var i=n("7190"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=a.a}}]);