(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-login-login"],{"220d":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var i={pageHead:t("0586").default},o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap"},[t("v-uni-view",{staticStyle:{background:"#FFF",padding:"40rpx"}},[!0===e.hasLogin?[t("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[e._v("已登录"),e.isUniverifyLogin?t("v-uni-text",{staticStyle:{"font-size":"0.8em"}},[e.phoneNumber.length?t("i",[e._v("（"+e._s(e.phoneNumber)+"）")]):t("i",{staticClass:"uni-icon_toast uni-loading"})]):e._e()],1),t("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t("v-uni-text",[e._v("每个账号仅需登录 1 次，\\n后续每次进入页面即可自动拉取用户信息。")])],1)]:e._e(),!1===e.hasLogin?[t("v-uni-view",{staticClass:"uni-h3 uni-center uni-common-mt"},[e._v("未登录")]),t("v-uni-view",{staticClass:"uni-hello-text uni-center"},[e._v("请点击按钮登录")])]:e._e()],2),t("v-uni-view",{staticClass:"uni-btn-v uni- uni-common-mt"},e._l(e.providerList,(function(n,i){return t("v-uni-button",{key:i,staticClass:"page-body-button",attrs:{type:"primary",loading:"univerify"===n.id&&e.univerifyBtnLoading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tologin(n)}}},[e._v(e._s(n.name))])})),1)],1)],1)},a=[]},7612:function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,"uni-button[data-v-7752645c]{background-color:#007aff;color:#fff}",""]),e.exports=n},"780c":function(e,n,t){"use strict";t.r(n);var i=t("220d"),o=t("938d");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("83e9");var r,u=t("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"7752645c",null,!1,i["a"],r);n["default"]=c.exports},"83cb":function(e,n,t){"use strict";function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},"83e9":function(e,n,t){"use strict";var i=t("a397"),o=t.n(i);o.a},"938d":function(e,n,t){"use strict";t.r(n);var i=t("e596"),o=t.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=o.a},a397:function(e,n,t){var i=t("7612");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("d611958a",i,!0,{sourceMap:!1,shadowMode:!1})},c1e7:function(e,n,t){"use strict";function i(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,o,a=[],r=!0,u=!1;try{for(t=t.call(e);!(r=(i=t.next()).done);r=!0)if(a.push(i.value),n&&a.length===n)break}catch(c){u=!0,o=c}finally{try{r||null==t["return"]||t["return"]()}finally{if(u)throw o}}return a}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i,t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0")},ceef:function(e,n,t){"use strict";function i(e){if(Array.isArray(e))return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},d0af:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=c;var i=u(t("ceef")),o=u(t("c1e7")),a=u(t("dde1")),r=u(t("83cb"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,n){return(0,i.default)(e)||(0,o.default)(e,n)||(0,a.default)(e,n)||(0,r.default)()}},e596:function(e,n,t){"use strict";var i=t("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("96cf"),t("d81d"),t("99af"),t("c975");var o=i(t("d0af")),a=i(t("c964")),r=i(t("f3f3")),u=t("2f62"),c="univerifyInfo",s={data:function(){return{title:"login",providerList:[],phoneNumber:"",univerifyBtnLoading:!1}},computed:(0,r.default)({},(0,u.mapState)(["hasLogin","isUniverifyLogin","univerifyErrorMsg"])),onLoad:function(){var e=this;uni.getProvider({service:"oauth",success:function(n){e.providerList=n.provider.map((function(e){var n="";switch(e){case"weixin":n="微信登录";break;case"qq":n="QQ登录";break;case"sinaweibo":n="新浪微博登录";break;case"xiaomi":n="小米登录";break;case"alipay":n="支付宝登录";break;case"baidu":n="百度登录";break;case"toutiao":n="头条登录";break;case"apple":n="苹果登录";break;case"univerify":n="一键登录";break}return{name:n,id:e}}))},fail:function(e){console.log("获取登录通道失败",e)}}),this.hasLogin&&this.isUniverifyLogin&&this.getPhoneNumber(uni.getStorageSync(c)).then((function(n){e.phoneNumber=n}))},methods:(0,r.default)((0,r.default)((0,r.default)({},(0,u.mapMutations)(["login","setUniverifyLogin"])),(0,u.mapActions)(["getPhoneNumber"])),{},{Toast:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;uni.showToast(Object.assign({},e,{duration:n}))},tologin:function(e){var n=this;"univerify"===e.id&&(this.univerifyBtnLoading=!0),uni.login({provider:e.id,success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("login success:",i),n.Toast({title:"登录成功"}),n.login(e.id);case 3:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}(),fail:function(e){if(console.log("login fail:",e),"30002"==e.code)return uni.closeAuthView(),void n.Toast({title:"其他登录方式"});1e3!=e.code?"30005"!=e.code?"30003"!=e.code&&uni.showModal({showCancel:!1,title:"登录失败",content:JSON.stringify(e)}):uni.showModal({showCancel:!1,title:"预登录失败",content:n.univerifyErrorMsg||e.errMsg}):uni.showModal({title:"登录失败",content:"".concat(e.errMsg,"\n，错误码：").concat(e.code),confirmText:"开通指南",cancelText:"确定",success:function(e){e.confirm&&setTimeout((function(){plus.runtime.openWeb("https://ask.dcloud.net.cn/article/37965")}),500)}})},complete:function(){n.univerifyBtnLoading=!1}})},loginByUniverify:function(e,n){var t=this;this.setUniverifyLogin(!0),uni.closeAuthView();var i=(0,r.default)({provider:e},n.authResult);this.getPhoneNumber(i).then((function(e){t.phoneNumber=e,uni.setStorageSync(c,i)})).catch((function(e){uni.showModal({showCancel:!1,title:"手机号获取失败",content:"".concat(e.errMsg,"\n，错误码：").concat(e.code)}),console.error(n)}))},loginByApple:function(e,n){return(0,a.default)(regeneratorRuntime.mark((function n(){var t,i,a,r,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,uni.getUserInfo({provider:e});case 2:a=n.sent,r=(0,o.default)(a,2),t=r[0],i=r[1],t&&(u=t.errMsg,~u.indexOf("uni.login")&&(u="请在登录页面完成登录操作"),uni.showModal({title:"获取用户信息失败",content:"错误原因"+u,showCancel:!1})),uni.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByApple",params:i.userInfo},success:function(e){console.log("uniId login success",e),0!==e.data.code?uni.showModal({showCancel:!1,content:"苹果登录失败: ".concat(JSON.stringify(e.data.msg))}):(uni.setStorageSync("openid",e.data.openid),uni.setStorageSync("apple_nickname",e.data.userInfo.nickname))},fail:function(e){uni.showModal({content:"苹果登录失败: ".concat(JSON.stringify(e)),showCancel:!1})}});case 8:case"end":return n.stop()}}),n)})))()}})};n.default=s}}]);