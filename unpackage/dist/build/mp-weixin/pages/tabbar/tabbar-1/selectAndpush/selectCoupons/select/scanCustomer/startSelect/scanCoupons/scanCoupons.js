(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/selectAndpush/selectCoupons/select/scanCustomer/startSelect/scanCoupons/scanCoupons"],{"07fe":function(t,e,s){"use strict";s("7caf");var o=a(s("b0ce")),n=a(s("4ca9"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(n.default))},"33e9":function(t,e,s){"use strict";var o=s("64f6"),n=s.n(o);n.a},"4ca9":function(t,e,s){"use strict";s.r(e);var o=s("b0c2"),n=s("ddb4");for(var a in n)"default"!==a&&function(t){s.d(e,t,function(){return n[t]})}(a);s("33e9");var c=s("2877"),i=Object(c["a"])(n["default"],o["a"],o["b"],!1,null,"51f131b6",null);e["default"]=i.exports},"64f6":function(t,e,s){},b0c2:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"body"},[s("view",{staticClass:"content"},[s("view",{staticClass:"content-main"},[s("view",{staticStyle:{"font-size":"25rpx",color:"#808080",margin:"20rpx 30rpx"}},[t._v("本期优惠券:")]),s("view",{staticClass:"picture"},[s("view",{staticClass:"picture-left"},[s("view",{staticStyle:{"font-size":"30rpx","margin-left":"30rpx","margin-top":"10rpx"}},[t._v(t._s(t.couponsInfor.companyName))]),s("view",{staticStyle:{"font-size":"45rpx","margin-left":"30rpx"}},[t._v(t._s(t.couponsInfor.couponName))])]),s("view",{staticClass:"picture-right"},[s("button",{staticClass:"btn-1",attrs:{eventid:"9e7018d0-0"},on:{click:t.scan}},[t._v("查看详情")])],1)])]),s("view",{staticClass:"content-center"},[s("view",{staticStyle:{"font-size":"25rpx",color:"#808080",margin:"20rpx 30rpx"}},[t._v("本期名单:")]),s("scroll-view",{staticClass:"picture-1",attrs:{"scroll-y":"true","scroll-top":0}},[s("view",{staticClass:"picture-avtatar"},t._l(t.customers,function(t,e){return s("image",{staticClass:"avatar",attrs:{src:t.author_image}})}))])],1)]),s("view",{staticClass:"content-bottom"},[s("button",{staticClass:"btn",attrs:{eventid:"9e7018d0-1"},on:{click:t.jump}},[t._v("确定发布")])],1),t.showed?s("view",{staticClass:"dialog-cover"},[s("view",{staticClass:"sure"},[s("view",{staticStyle:{display:"flex",flex:"1","align-items":"center","justify-content":"center"}},[t._v("发布成功")]),s("view",{staticStyle:{display:"flex",flex:"1"}},[s("button",{staticClass:"btn",attrs:{eventid:"9e7018d0-2"},on:{click:t.recall}},[t._v("回到主页")])],1)])]):t._e()])},n=[];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return n})},ddb4:function(t,e,s){"use strict";s.r(e);var o=s("e028"),n=s.n(o);for(var a in o)"default"!==a&&function(t){s.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},e028:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(s("be61")),n=a(s("fc86"));function a(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{couponsInfor:{},customers:[],showed:!1}},methods:{jump:function(){var e=this;for(var s in e.customers)t.request({url:o.default.postCoupons(),method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",token:n.default.getToken()},data:{userId:e.customers[s].author_id,companyId:"5",typeId:e.couponsInfor.coupon_type_id},success:function(t){console.log(t)}}),console.log(e.customers[s].author_id),console.log(e.couponsInfor.coupon_type_id);e.showed=!0},recall:function(){t.navigateTo({url:"../../../../../selectAndpush"}),this.showed=!1},scan:function(){t.navigateTo({url:"./couponsDetails/couponsDetails?couponsInfor="+JSON.stringify(this.couponsInfor)})}},onLoad:function(t){console.log(t),this.customers=JSON.parse(t.avatars),this.couponsInfor=JSON.parse(t.couponsInfor),console.log(this.couponsInfor),console.log(this.customers)}};e.default=c}).call(this,s("543d")["default"])}},[["07fe","common/runtime","common/vendor"]]]);