(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/selectAndpush/selectAndpush"],{"0028":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"body"},[n("scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"}},t._l(t.activities,function(e,i){return n("view",{key:i,staticClass:"content"},[n("view",{staticClass:"content-left"},[n("text",{staticClass:"text-content-1",staticStyle:{color:"#4d4d4d"}},[t._v(t._s(e.activity_name))])]),n("view",{staticClass:"content-right"},[n("button",{staticClass:"btn",staticStyle:{background:"#FF6E6E"},attrs:{eventid:"7fd1d428-0-"+i},on:{click:function(e){t.intocoupons(i)}}},[t._v("进入")])],1)])}))],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"0062":function(t,e,n){},"0c3b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("fc86")),a=o(n("be61"));function o(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{scan:"true",scrollTop:0,shops:[],activity_id:"",activities:[],activitystate:[]}},onShow:function(){var e=this;i.default.getToken()?t.request({url:a.default.getActivity(),header:{token:i.default.getToken()},data:{companyId:i.default.getcompany().company_id},success:function(n){if(console.log(n),16e3==n.data.code)t.showToast({title:"您没有权限",duration:2e3,icon:"none"});else if(n.data.value.length>0)for(var i in n.data.value)e.activities=n.data.value;else t.showToast({title:"您暂时没有活动",duration:2e3,icon:"none"});console.log(e.activities)}}):(t.showToast({title:"未登录",icon:"none"}),setTimeout(function(){t.navigateTo({url:"../login"})},1e3))},methods:{intocoupons:function(e){var n=this;n.activity_id=n.activities[e].activity_id,t.navigateTo({url:"intoCoupons/intoCoupons?activity_id="+JSON.stringify(n.activity_id)+"&shops="+JSON.stringify(n.shops)})}}};e.default=c}).call(this,n("543d")["default"])},"2cad":function(t,e,n){"use strict";n("7caf");var i=o(n("b0ce")),a=o(n("e4c2"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"8fcf":function(t,e,n){"use strict";var i=n("0062"),a=n.n(i);a.a},e344:function(t,e,n){"use strict";n.r(e);var i=n("0c3b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},e4c2:function(t,e,n){"use strict";n.r(e);var i=n("0028"),a=n("e344");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("8fcf");var c=n("2877"),s=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"13e53164",null);e["default"]=s.exports}},[["2cad","common/runtime","common/vendor"]]]);