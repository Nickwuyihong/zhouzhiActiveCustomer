(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/selectAndpush/selectCoupons/select/scanCustomer/scanCustomer"],{"77b3":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{scrollTop:0,avatars:[],couponsInfor:{}}},onLoad:function(t){var n=this;console.log(t.userid),n.avatars=JSON.parse(t.userid),n.couponsInfor=JSON.parse(t.couponsInfor),console.log(n.couponsInfor)},methods:{jump:function(){t.navigateTo({url:"./startSelect/scanCoupons/scanCoupons?avatars="+JSON.stringify(this.avatars)+"&couponsInfor="+JSON.stringify(this.couponsInfor)})}}};n.default=a}).call(this,a("543d")["default"])},b8b8:function(t,n,a){},e1d8:function(t,n,a){"use strict";a.r(n);var e=a("77b3"),s=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=s.a},e709:function(t,n,a){"use strict";a.r(n);var e=a("fdb4"),s=a("e1d8");for(var o in s)"default"!==o&&function(t){a.d(n,t,function(){return s[t]})}(o);a("e7a6");var r=a("2877"),c=Object(r["a"])(s["default"],e["a"],e["b"],!1,null,"009f27fc",null);n["default"]=c.exports},e7a6:function(t,n,a){"use strict";var e=a("b8b8"),s=a.n(e);s.a},eb30:function(t,n,a){"use strict";a("7caf");var e=o(a("b0ce")),s=o(a("e709"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))},fdb4:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("view",{staticClass:"body"},[a("view",{staticClass:"content"},[a("scroll-view",{staticClass:"content-main",attrs:{"scroll-y":"true"}},[a("view",{staticClass:"picture-avtatar"},t._l(t.avatars,function(t,n){return a("image",{staticClass:"avatar",attrs:{src:t.author_image}})}))])],1),a("view",{staticClass:"content-bottom"},[a("button",{staticClass:"btn",attrs:{eventid:"3f6cc43a-0"},on:{click:t.jump}},[t._v("确定名单")])],1)])},s=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return s})}},[["eb30","common/runtime","common/vendor"]]]);