(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/login"],{"0250":function(t,e,o){"use strict";o.r(e);var n=o("ea11"),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"55aa":function(t,e,o){"use strict";o("7caf");var n=s(o("b0ce")),a=s(o("da2e"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},6068:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"body"},[o("image",{staticStyle:{width:"56px",height:"56px"},attrs:{src:"../../../static/logo.png"}}),o("text",{staticClass:"name",staticStyle:{"margin-top":"-28px"}},[t._v("i周知商家版")]),t.showBt?o("button",{attrs:{type:"primary","open-type":"getUserInfo",eventid:"6ca422fa-0"},on:{getuserinfo:t.onGotUserInfo}},[t._v("点击授权登录")]):t._e()],1)},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},"62c7":function(t,e,o){},"7f9b":function(t,e,o){"use strict";var n=o("62c7"),a=o.n(n);a.a},da2e:function(t,e,o){"use strict";o.r(e);var n=o("6068"),a=o("0250");for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);o("7f9b");var i=o("2877"),c=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"a05262be",null);e["default"]=c.exports},ea11:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(o("fc86")),a=s(o("be61"));function s(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{token:"",JSCODE:"",type:0,showBt:!1,nickName:"听风者",gender:1,avatarUrl:"",circleId:"",cyId:"",isNew:1,status:0,city:"",province:"",country:""}},onLoad:function(){},onShow:function(){console.log("App Show"),t.showLoading({title:"加载中"});var e=this,o=n.default.getToken();o?(e.token=o,n.default.checkToken(function(t){e.status=t.status,1==e.status?e.toNext():e.getCode()})):(console.log("token不存在"),e.getCode())},methods:{onGotUserInfo:function(e){t.showLoading({title:"登录中"});var o=this;console.log(e),o.nickName=e.detail.userInfo.nickName,o.gender=e.detail.userInfo.gender,o.avatarUrl=e.detail.userInfo.avatarUrl,o.city=e.detail.userInfo.city,o.province=e.detail.userInfo.province,o.country=e.detail.userInfo.country,console.log(o.JSCODE),console.log(e.detail.encryptedData),console.log(e.detail.iv),t.request({url:a.default.forelogin(),data:{JSCODE:o.JSCODE,Version:1,encryptedData:e.detail.encryptedData,iv:e.detail.iv},success:function(e){t.hideLoading(),1==e.data.status?(console.log(e),n.default.saveToken(e.data.token),1==e.data.isNew&&o.upload_user(),o.toNext()):(console.log(e),t.showToast({title:"登录失败",icon:"none"}))},fail:function(t){console.log(t)}})},upload_user:function(){var e=this;console.log(e.avatarUrl),console.log(e.nickName),t.request({url:a.default.updateFristMessage(),data:{sex:e.gender,name:e.nickName,url:e.avatarUrl},header:{token:n.default.getToken()},success:function(t){1==t.data.status&&console.log("上传成功"),console.log(t)}})},getCode:function(){var e=this;t.login({provider:"weixin",success:function(o){t.hideLoading(),o.code?(e.JSCODE=o.code,e.showBt=!0):console.log("获取用户登录态失败！"+o.errMsg)}})},login:function(){t.showLoading({title:"加载中"});var e=this,o=n.default.getToken();o?(e.token=o,n.default.checkToken(function(t){e.status=t.status,1==e.status?e.toNext():e.getCode()})):(console.log("token不存在"),e.getCode())},toNext:function(){t.navigateBack({delta:1})}}};e.default=i}).call(this,o("543d")["default"])}},[["55aa","common/runtime","common/vendor"]]]);