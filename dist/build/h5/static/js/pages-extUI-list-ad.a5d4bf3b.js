(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-list-ad"],{"255e":function(e,t,i){"use strict";var n=i("9860"),a=i.n(n);a.a},"3b52":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("99af"),i("4160"),i("159b"),i("ac1f"),i("1276");var n={components:{},data:function(){return{UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},listData:[]}},onLoad:function(){this.getList()},methods:{getList:function(){var e=this,t={column:"id,post_id,title,author_name,cover,published_at"};uni.request({url:"https://unidemo.dcloud.net.cn/api/news",data:t,success:function(t){if(200==t.statusCode){var i=e.setTime(t.data);e.listData=e.reload?i:e.listData.concat(i),console.log(e.listData)}},fail:function(e,t){console.log("fail"+JSON.stringify(e))}})},setTime:function(e){var t=this,i=[];return e.forEach((function(e){i.push({author_name:e.author_name,cover:e.cover,id:e.id,post_id:e.post_id,published_at:t.format(e.published_at),title:e.title})})),i},format:function(e){var t=this.parse(e),i=Date.now()-t.getTime();if(i<this.UNITS["天"])return this.humanize(i);var n=function(e){return e<10?"0"+e:e};return t.getFullYear()+"/"+n(t.getMonth()+1)+"/"+n(t.getDate())+"-"+n(t.getHours())+":"+n(t.getMinutes())},parse:function(e){var t=e.split(/[^0-9]/);return new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5])}}};t.default=n},9860:function(e,t,i){var n=i("e99e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("5ecec896",n,!0,{sourceMap:!1,shadowMode:!1})},e195:function(e,t,i){"use strict";i.r(t);var n=i("3b52"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},e99e:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-7e154590]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-7e154590]{font-size:14px;line-height:inherit}.example[data-v-7e154590]{padding:0 15px 15px}.example-info[data-v-7e154590]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-7e154590]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-7e154590]{padding:0 15px}.example-info[data-v-7e154590]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-7e154590]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-7e154590]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-7e154590]{font-size:18px;color:#fff}.word-btn[data-v-7e154590]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-7e154590]{background-color:#4ca2ff}body.?%PAGE?%[data-v-7e154590]{background-color:#efeff4}',""]),e.exports=t},f3a3:function(e,t,i){"use strict";i.r(t);var n=i("fd95"),a=i("e195");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("255e");var r,l=i("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"7e154590",null,!1,n["a"],r);t["default"]=c.exports},fd95:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniSection:i("2e5a").default,uniList:i("7f33").default,uniListItem:i("4c2b").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-text",{staticClass:"example-info"},[e._v("此示例展示了ad广告组件在 uni-list 中的应用")]),i("uni-section",{attrs:{title:"列表嵌套广告",type:"line"}}),i("uni-list",[e._l(e.listData,(function(e,t){return[t>0&&(t+1)%10==0?i("v-uni-ad",{attrs:{adpid:"1111111111","unit-id":"",appid:"",apid:"",type:"feed"}}):i("uni-list-item",{attrs:{title:e.title,note:e.author_name,thumb:e.cover,"thumb-size":"lg"}})]}))],2)],1)},o=[]}}]);