(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/editActive/randomMode/randomCoupon"],{1304:function(t,e,i){"use strict";i("7caf");var o=a(i("b0ce")),s=a(i("2593"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(s.default))},"13e8":function(t,e,i){"use strict";i.r(e);var o=i("b8e6"),s=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=s.a},"16b4":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("body",{attrs:{mpcomid:"4594d83c-0"}},[i("view",{staticClass:"body"},[i("view",{staticClass:"img_list"},t._l(t.ads,function(t,e){return i("image",{key:e,attrs:{src:t.img}})})),i("view",{staticClass:"detail"},[i("view",{staticClass:"title"},[t._v("优惠券详情")]),i("view",{staticClass:"items"},[i("text",{staticStyle:{color:"#888888"}},[t._v("优惠名称：")]),i("text",[t._v(t._s(t.coupon.couponName))])]),i("view",{staticClass:"items"},[i("text",{staticStyle:{color:"#888888"}},[t._v("优惠券码：")]),i("text",[t._v("11111111111")])]),i("view",{staticClass:"items"},[i("text",{staticStyle:{color:"#888888"}},[t._v("中奖概率：")]),i("text",[t._v(t._s(t.coupon.probability))])]),i("view",{staticClass:"items"},[i("text",{staticStyle:{color:"#888888"}},[t._v("数量上限：")]),i("text",[t._v(t._s(t.coupon.toplimit))])]),i("view",{staticClass:"items"},[i("text",{staticStyle:{color:"#888888"}},[t._v("发券时间：")]),i("text",[t._v(t._s(t.coupon.publishTime))])]),i("view",{staticClass:"items"},[i("text",{staticStyle:{color:"#888888"}},[t._v("有效日期：")]),i("text",[t._v(t._s(t.coupon.exTime))])]),i("view",{staticClass:"items"},[i("text",{staticStyle:{color:"#888888"}},[t._v("可用日期：")]),i("text",[t._v(t._s(t.coupon.availableTime))])]),i("view",{staticClass:"items"},[i("text",{staticStyle:{color:"#888888"}},[t._v("状态：")]),i("text",{staticStyle:{color:"#FFBB00"}},[t._v("未兑换")])]),i("view",{staticClass:"rules"},[i("text",{staticStyle:{color:"#888888"}},[t._v("活动规则：")]),t._l(t.coupon.rule,function(e,o){return i("text",{key:o,staticStyle:{"text-indent":"25px"},attrs:{decode:"emsp"}},[t._v(t._s(o+1)+" . "+t._s(e))])})],2)])])])},s=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s})},2593:function(t,e,i){"use strict";i.r(e);var o=i("16b4"),s=i("13e8");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("3dbc");var c=i("2877"),n=Object(c["a"])(s["default"],o["a"],o["b"],!1,null,"0e8e3b7a",null);e["default"]=n.exports},"3dbc":function(t,e,i){"use strict";var o=i("9548"),s=i.n(o);s.a},9548:function(t,e,i){},b8e6:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{coupon:{},ads:[],active:!0}},onLoad:function(t){console.log(t),this.coupon=JSON.parse(t.detail),console.log(this.coupon),this.ads=JSON.parse(t.ads),console.log(this.ads)},methods:{jump:function(e){console.log(e),0==e.currentTarget.id?t.navigateTo({url:"limitedMode/limitedMode"}):1==e.currentTarget.id?t.navigateTo({url:"randomMode/randomMode"}):t.navigateTo({url:"historyActive/historyActive"})}}};e.default=i}).call(this,i("543d")["default"])}},[["1304","common/runtime","common/vendor"]]]);