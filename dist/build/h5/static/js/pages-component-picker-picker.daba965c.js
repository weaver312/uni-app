(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-picker-picker"],{"17c4":function(i,t,e){"use strict";e.r(t);var a=e("1ad0"),n=e("b7a2");for(var s in n)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(s);e("9b6a");var l,u=e("f0c5"),c=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"4a1c1d28",null,!1,a["a"],l);t["default"]=c.exports},"1ad0":function(i,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return a}));var a={pageHead:e("0586").default},n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:i.title}}),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("普通选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{value:i.index,range:i.array,"range-key":"name"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindPickerChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.array[i.index].name))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("多列选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"multiSelector",value:i.multiIndex,range:i.multiArray},on:{columnchange:function(t){arguments[0]=t=i.$handleEvent(t),i.bindMultiPickerColumnChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.multiArray[0][i.multiIndex[0]])+"，"+i._s(i.multiArray[1][i.multiIndex[1]])+"，"+i._s(i.multiArray[2][i.multiIndex[2]]))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("时间选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"time",value:i.time,start:"09:01",end:"21:01"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindTimeChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.time))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-picker-tips"},[i._v("注：选择 09:01 ~ 21:01 之间的时间, 不在区间内不能选中")]),e("v-uni-view",{staticClass:"uni-title uni-common-pl"},[i._v("日期选择器")]),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[i._v("当前选择")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-picker",{attrs:{mode:"date",value:i.date,start:i.startDate,end:i.endDate},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.bindDateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input"},[i._v(i._s(i.date))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"uni-picker-tips"},[i._v("注：选择当前时间 ±10 年之间的时间, 不在区间内不能选中")])],1)},s=[]},"7e22":function(i,t,e){var a=e("f303");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("8d844624",a,!0,{sourceMap:!1,shadowMode:!1})},"9b6a":function(i,t,e){"use strict";var a=e("7e22"),n=e.n(a);n.a},a0e2:function(i,t,e){"use strict";function a(i){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return"start"===i?e-=10:"end"===i&&(e+=10),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(e,"-").concat(a,"-").concat(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("99af"),e("a434");var n={data:function(){return{title:"picker",array:[{name:"中国"},{name:"美国"},{name:"巴西"},{name:"日本"}],index:0,multiArray:[["亚洲","欧洲"],["中国","日本"],["北京","上海","广州"]],multiIndex:[0,0,0],date:a({format:!0}),startDate:a("start"),endDate:a("end"),time:"12:01"}},methods:{bindPickerChange:function(i){console.log("picker发送选择改变，携带值为："+i.detail.value),this.index=i.detail.value},bindMultiPickerColumnChange:function(i){switch(console.log("修改的列为："+i.detail.column+"，值为："+i.detail.value),this.multiIndex[i.detail.column]=i.detail.value,i.detail.column){case 0:switch(this.multiIndex[0]){case 0:this.multiArray[1]=["中国","日本"],this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[1]=["英国","法国"],this.multiArray[2]=["伦敦","曼彻斯特"];break}this.multiIndex.splice(1,1,0),this.multiIndex.splice(2,1,0);break;case 1:switch(this.multiIndex[0]){case 0:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[2]=["东京","北海道"];break}break;case 1:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["伦敦","曼彻斯特"];break;case 1:this.multiArray[2]=["巴黎","马赛"];break}break}this.multiIndex.splice(2,1,0);break}this.$forceUpdate()},bindDateChange:function(i){this.date=i.detail.value},bindTimeChange:function(i){this.time=i.detail.value}}};t.default=n},b7a2:function(i,t,e){"use strict";e.r(t);var a=e("a0e2"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(i){e.d(t,i,(function(){return a[i]}))}(s);t["default"]=n.a},f303:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,".uni-picker-tips[data-v-4a1c1d28]{font-size:12px;color:#666;margin-bottom:15px;padding:0 15px\n\t/* text-align: right; */}",""]),i.exports=t}}]);