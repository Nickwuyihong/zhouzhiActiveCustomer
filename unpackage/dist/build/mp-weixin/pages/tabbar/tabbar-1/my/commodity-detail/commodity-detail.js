(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/my/commodity-detail/commodity-detail"],{3686:function(t,e,n){"use strict";n("7caf");var c=i(n("b0ce")),a=i(n("f442"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,c.default)(a.default))},9493:function(t,e,n){"use strict";n.r(e);var c=n("a553"),a=n.n(c);for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);e["default"]=a.a},"9c86":function(t,e,n){"use strict";var c=n("e524"),a=n.n(c);a.a},a553:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{index:0,commodityType:[{src:"../../../../../static/logo.png",price:"1288"},{src:"../../../../../static/logo.png",price:"3864"},{src:"../../../../../static/logo.png",price:"6528"},{src:"../../../../../static/logo.png",price:"11856"}]}},onLoad:function(t){this.index=t.index,console.log(this.index)},methods:{pay:function(){t.redirectTo({url:"../payment-success/payment-success"})}}};e.default=n}).call(this,n("543d")["default"])},e524:function(t,e,n){},f442:function(t,e,n){"use strict";n.r(e);var c=n("fd65"),a=n("9493");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("9c86");var o=n("2877"),s=Object(o["a"])(a["default"],c["a"],c["b"],!1,null,null,null);e["default"]=s.exports},fd65:function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"body"},[n("scroll-view",{staticClass:"content",attrs:{"scroll-y":!0}},[n("image",{staticClass:"picture",attrs:{src:t.commodityType[t.index].src}})]),n("view",{staticClass:"content-bottom"},[n("view",{staticClass:"content-bottom-main"},[n("view",{staticClass:"content-bottom-main-left"},[n("text",[t._v("合计："+t._s(t.commodityType[t.index].price))])]),n("view",{staticClass:"content-bottom-main-right"},[n("button",{staticClass:"btn",attrs:{eventid:"3bdcbe0a-0"},on:{click:t.pay}},[t._v("支付")])],1)])])],1)},a=[];n.d(e,"a",function(){return c}),n.d(e,"b",function(){return a})}},[["3686","common/runtime","common/vendor"]]]);