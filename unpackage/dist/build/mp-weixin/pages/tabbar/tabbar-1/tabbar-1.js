(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/tabbar-1"],{"0c9e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"body"},[n("view",{staticClass:"content"},[n("image",{staticClass:"box-image",attrs:{src:"../../../static/img/scan.png",eventid:"02455551-0"},on:{click:t.scanning}}),n("text",{staticStyle:{margin:"auto","font-size":"50rpx","font-weight":"bold"}},[t._v("扫一扫")])])])},c=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c})},"1b72":function(t,e,n){"use strict";n.r(e);var a=n("3d32"),c=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=c.a},"3d32":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("fc86")),c=u(n("be61")),o=u(n("8764"));function u(t){return t&&t.__esModule?t:{default:t}}getApp();var i={components:{tkiQrcode:o.default},data:function(){return{title:"Hello",items:[{src:"../../../static/img/activeCenter.png",text:"活动中心"},{src:"../../../static/img/screening&publishing.png",text:"筛选及发布"},{src:"../../../static/img/privilegeManagement.png",text:"管理"}]}},onLoad:function(){console.log(a.default.getToken()),t.request({url:c.default.usersAccount(),header:{token:a.default.getToken()},success:function(t){console.log(t)}})},methods:{jump:function(e){console.log("adadasd"),2==e?t.navigateTo({url:"authorityManagemengt/authorityManagement"}):1==e?t.navigateTo({url:"selectAndpush/selectAndpush"}):t.navigateTo({url:"editActive/editActive"})},scanning:function(){a.default.getToken()?t.scanCode({success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),t.navigateTo({url:"scanning/success?type="+e.scanType+"&result="+e.result})}}):t.navigateTo({url:"login"})}}};e.default=i}).call(this,n("543d")["default"])},"6fa4":function(t,e,n){},7106:function(t,e,n){"use strict";n.r(e);var a=n("0c9e"),c=n("1b72");for(var o in c)"default"!==o&&function(t){n.d(e,t,function(){return c[t]})}(o);n("b1b8");var u=n("2877"),i=Object(u["a"])(c["default"],a["a"],a["b"],!1,null,"4be6b945",null);e["default"]=i.exports},"821d":function(t,e,n){"use strict";n("7caf");var a=o(n("b0ce")),c=o(n("7106"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(c.default))},b1b8:function(t,e,n){"use strict";var a=n("6fa4"),c=n.n(a);c.a}},[["821d","common/runtime","common/vendor"]]]);