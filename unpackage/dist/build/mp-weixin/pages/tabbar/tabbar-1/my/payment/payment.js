(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/my/payment/payment"],{"020f":function(t,e,n){"use strict";var a=n("ca85"),o=n.n(a);o.a},"10fa":function(t,e,n){"use strict";n.r(e);var a=n("5ece"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=o.a},"5add":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"body"},[n("view",{staticClass:"content"},t._l(t.commodity,function(e,a){return n("view",{staticClass:"content-main"},[n("view",{staticClass:"commodity"},[n("view",{staticClass:"commodity-left"},[n("view",{staticClass:"commodity-left-top"},[n("text",[t._v(t._s(e.type))])]),n("view",{staticClass:"commodity-left-bottom"},[n("text",[t._v(t._s(e.money))])])]),n("view",{staticClass:"commodity-right"},[n("button",{staticClass:"btn",attrs:{eventid:"bfd9e6ae-0-"+a},on:{click:function(e){t.scan(a)}}},[t._v("套餐详情")])],1)])])}))])},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"5ece":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{commodity:[{type:"单月套餐",money:"1288/月"},{type:"季度套餐",money:"1288/月"},{type:"半年套餐",money:"1088/月"},{type:"年度套餐",money:"988/月"}]}},onLoad:function(){},methods:{scan:function(e){t.navigateTo({url:"../commodity-detail/commodity-detail?index="+e})}}};e.default=n}).call(this,n("543d")["default"])},a3b7:function(t,e,n){"use strict";n.r(e);var a=n("5add"),o=n("10fa");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("020f");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},c99f:function(t,e,n){"use strict";n("7caf");var a=c(n("b0ce")),o=c(n("a3b7"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},ca85:function(t,e,n){}},[["c99f","common/runtime","common/vendor"]]]);