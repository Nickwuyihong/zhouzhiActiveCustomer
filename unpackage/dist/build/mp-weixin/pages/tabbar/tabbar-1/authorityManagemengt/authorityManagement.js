(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/authorityManagemengt/authorityManagement"],{"2a10":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"body"},[n("scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"}},t._l(t.shops,function(e,o){return n("view",{staticClass:"content",attrs:{eventid:"0e72a971-0-"+o},on:{click:function(e){t.jump(o)}}},[n("view",[t._v(t._s(e.company_name))])])}))],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"7e9a":function(t,e,n){"use strict";n.r(e);var o=n("a2fc"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},"8d7e":function(t,e,n){"use strict";n.r(e);var o=n("2a10"),a=n("7e9a");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("f53c");var u=n("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,"4b69666c",null);e["default"]=c.exports},a2fc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("9403")),a=s(n("eb14"));function s(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{scrollTop:0,shops:[],shop:{}}},methods:{jump:function(e){console.log(1),this.shop=this.shops[e],console.log(this.shop),o.default.savecompany(this.shop),t.navigateBack({delta:""})}},onLoad:function(){var e=this;o.default.getToken()?t.request({url:a.default.shop(),header:{token:o.default.getToken()},success:function(n){200==n.data.code?(console.log(n),e.shops=n.data.value,console.log(e.shops)):1005==n.data.code&&t.showToast({title:"您不属于任何商家",duration:2e3,icon:"none"})}}):(t.showToast({title:"未登录",icon:"none"}),setTimeout(function(){t.navigateTo({url:"../login"})},1e3))}};e.default=u}).call(this,n("543d")["default"])},b5ee:function(t,e,n){},c3ea:function(t,e,n){"use strict";n("901f");var o=s(n("b0ce")),a=s(n("8d7e"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},f53c:function(t,e,n){"use strict";var o=n("b5ee"),a=n.n(o);a.a}},[["c3ea","common/runtime","common/vendor"]]]);