(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/authorityManagemengt/authorityManagement"],{"4c8a":function(t,e,n){"use strict";n.r(e);var o=n("5c3c"),a=n("e7e0");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("ab16");var c=n("2877"),u=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,"36c5517c",null);e["default"]=u.exports},"5c3c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"body"},[n("scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"}},t._l(t.shops,function(e,o){return n("view",{staticClass:"content",attrs:{eventid:"2b988661-0-"+o},on:{click:function(e){t.jump(o)}}},[n("view",[t._v(t._s(e.company_name))])])}))],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},a6f6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("fc86")),a=s(n("be61"));function s(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{scrollTop:0,shops:[],shop:{}}},methods:{jump:function(e){console.log(1),this.shop=this.shops[e],console.log(this.shop),o.default.savecompany(this.shop),t.navigateBack({delta:""})}},onLoad:function(){var e=this;o.default.getToken()?t.request({url:a.default.shop(),header:{token:o.default.getToken()},success:function(n){200==n.data.code?(console.log(n),e.shops=n.data.value,console.log(e.shops)):1005==n.data.code&&t.showToast({title:"您不属于任何商家",duration:2e3,icon:"none"})}}):(t.showToast({title:"未登录",icon:"none"}),setTimeout(function(){t.navigateTo({url:"../login"})},1e3))}};e.default=c}).call(this,n("543d")["default"])},ab16:function(t,e,n){"use strict";var o=n("f2a0"),a=n.n(o);a.a},d293:function(t,e,n){"use strict";n("7caf");var o=s(n("b0ce")),a=s(n("4c8a"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},e7e0:function(t,e,n){"use strict";n.r(e);var o=n("a6f6"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},f2a0:function(t,e,n){}},[["d293","common/runtime","common/vendor"]]]);