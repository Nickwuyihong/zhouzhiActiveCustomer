(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/tabbar-1"],{"0568":function(t,e,n){},"1b72":function(t,e,n){"use strict";n.r(e);var a=n("3d32"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},"3d32":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("fc86")),i=c(n("be61"));function c(t){return t&&t.__esModule?t:{default:t}}getApp();var s={data:function(){return{title:"Hello",items:[{src:"../../../static/img/activeCenter.png",text:"活动中心"},{src:"../../../static/img/screening&publishing.png",text:"筛选及发布"},{src:"../../../static/img/privilegeManagement.png",text:"管理"}]}},onLoad:function(){console.log(a.default.getToken()),t.request({url:i.default.usersAccount(),header:{token:a.default.getToken()},success:function(t){console.log(t)}})},methods:{jump:function(e){console.log("adadasd"),2==e?t.navigateTo({url:"authorityManagemengt/authorityManagement"}):1==e?t.navigateTo({url:"selectAndpush/selectAndpush"}):t.navigateTo({url:"editActive/editActive"})},scanning:function(){t.navigateTo({url:"scanning/success"})}}};e.default=s}).call(this,n("543d")["default"])},"492c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"body"},[n("view",{staticClass:"content"},[n("image",{staticClass:"box-image",attrs:{src:"../../../static/img/scan.png",eventid:"02455551-0"},on:{click:t.scanning}}),n("text",{staticStyle:{margin:"auto","font-size":"50rpx","font-weight":"bold"}},[t._v("扫一扫")])]),n("view",{staticClass:"bottom"},t._l(t.items,function(e,a){return n("view",{key:e.index,staticClass:"items"},[n("image",{staticClass:"box-image1",attrs:{src:e.src,id:e.index,eventid:"02455551-1-"+a},on:{click:function(e){t.jump(a)}}}),n("text",{staticStyle:{margin:"auto","font-size":"37rpx",color:"grey"}},[t._v(t._s(e.text))])])}))])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},7106:function(t,e,n){"use strict";n.r(e);var a=n("492c"),i=n("1b72");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("810a");var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"fddc8b7a",null);e["default"]=u.exports},"810a":function(t,e,n){"use strict";var a=n("0568"),i=n.n(a);i.a},"821d":function(t,e,n){"use strict";n("7caf");var a=c(n("b0ce")),i=c(n("7106"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))}},[["821d","common/runtime","common/vendor"]]]);