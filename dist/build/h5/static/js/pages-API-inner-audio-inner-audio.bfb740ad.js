(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-inner-audio-inner-audio"],{"0122":function(t,n,i){"use strict";function e(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?n.default=e=function(t){return typeof t}:n.default=e=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=e,i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0")},"0f93":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,".play-time-area[data-v-02d1e44d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px}.duration[data-v-02d1e44d]{margin-left:auto}.play-button-area[data-v-02d1e44d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:50px}.icon-play[data-v-02d1e44d]{width:60px;height:60px}",""]),t.exports=n},"70ef":function(t,n,i){var e=i("0f93");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("b8196250",e,!0,{sourceMap:!1,shadowMode:!1})},"7b98":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var e={pageHead:i("0586").default},o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("page-head",{attrs:{title:"audio"}}),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-slider",{attrs:{value:t.position,min:0,max:t.duration},on:{changing:function(n){arguments[0]=n=t.$handleEvent(n),t.onchanging.apply(void 0,arguments)},change:function(n){arguments[0]=n=t.$handleEvent(n),t.onchange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"play-button-area"},[i("v-uni-image",{staticClass:"icon-play",attrs:{src:t.playImage},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)}}})],1)],1)},a=[]},"7e23":function(t,n,i){"use strict";i.r(n);var e=i("c0e4"),o=i.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},c0e4:function(t,n,i){"use strict";var e=i("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("0122")),a="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3",u={data:function(){return{title:"innerAudioContext",isPlaying:!1,isPlayEnd:!1,currentTime:0,duration:100}},computed:{position:function(){return this.isPlayEnd?0:this.currentTime},playImage:function(){return this.isPlaying?"/static/pause.png":"/static/play.png"}},onLoad:function(){this._isChanging=!1,this._audioContext=null,this.createAudio()},onUnload:function(){null!=this._audioContext&&this.isPlaying&&this.stop()},methods:{createAudio:function(){var t=this,n=this._audioContext=uni.createInnerAudioContext();return n.autoplay=!1,n.src=a,n.onPlay((function(){console.log("开始播放")})),n.onTimeUpdate((function(i){!0!==t._isChanging&&(t.currentTime=n.currentTime||0,t.duration=n.duration||0)})),n.onEnded((function(){t.currentTime=0,t.isPlaying=!1,t.isPlayEnd=!0})),n.onError((function(n){t.isPlaying=!1,console.log(n.errMsg),console.log(n.errCode)})),n},onchanging:function(){this._isChanging=!0},onchange:function(t){console.log(t.detail.value),console.log((0,o.default)(t.detail.value)),this._audioContext.seek(t.detail.value),this._isChanging=!1},play:function(){this.isPlaying?this.pause():(this.isPlaying=!0,this._audioContext.play(),this.isPlayEnd=!1)},pause:function(){this._audioContext.pause(),this.isPlaying=!1},stop:function(){this._audioContext.stop(),this.isPlaying=!1}}};n.default=u},c486:function(t,n,i){"use strict";i.r(n);var e=i("7b98"),o=i("7e23");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("f76a");var u,r=i("f0c5"),s=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"02d1e44d",null,!1,e["a"],u);n["default"]=s.exports},f76a:function(t,n,i){"use strict";var e=i("70ef"),o=i.n(e);o.a}}]);