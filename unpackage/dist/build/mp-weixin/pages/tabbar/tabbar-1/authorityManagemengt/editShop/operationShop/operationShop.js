(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/authorityManagemengt/editShop/operationShop/operationShop"],{"1d82":function(e,t,a){},a690:function(e,t,a){"use strict";a.r(t);var o=a("fa36"),n=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);t["default"]=n.a},aeea:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"body"},[a("scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":e.scrollTop,"scroll-y":"true"}},[a("view",{staticClass:"content"},[a("view",{staticClass:"content-1"},[a("image",{staticClass:"box-image",attrs:{src:"../../../../../../static/image/添加奖励-01.png",eventid:"748b8ce1-0"},on:{click:e.addOperator}})]),a("view",{staticClass:"content-2"},[a("text",{staticClass:"text-content"},[e._v("添加运营")])])]),e._l(e.operation,function(t,o){return a("view",{staticClass:"content"},[a("view",{staticClass:"content-left"},[a("image",{staticClass:"box-image",attrs:{src:t.image}}),a("view",{staticClass:"text-content"},[e._v(e._s(t.operate))])]),a("view",{staticClass:"content-right"},[a("button",{staticClass:"btn",attrs:{eventid:"748b8ce1-1-"+o},on:{click:function(t){e.deleteOperator(o)}}},[e._v("移除")])],1)])})],2)],1)},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})},bc33:function(e,t,a){"use strict";a("7caf");var o=s(a("b0ce")),n=s(a("d621"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(n.default))},d621:function(e,t,a){"use strict";a.r(t);var o=a("aeea"),n=a("a690");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("eaeb");var r=a("2877"),u=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"901f0a44",null);t["default"]=u.exports},eaeb:function(e,t,a){"use strict";var o=a("1d82"),n=a.n(o);n.a},fa36:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(a("fc86")),n=s(a("be61"));s(a("8764"));function s(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{scrollTop:0,account_id:"",userid:"",userinfor:{},operation:[]}},onLoad:function(){var t=this;e.request({url:n.default.addoperator(),header:{token:o.default.getToken()},data:{companyId:o.default.getcompany().company_id},success:function(a){if(console.log(a),200==a.data.code)for(var s in a.data.value)4==a.data.value[s].level&&(t.userid=a.data.value[s].userid,e.request({url:n.default.seeUser(),header:{token:o.default.getToken()},data:{otherId:t.userid},success:function(e){console.log(e),t.userinfor={image:e.data.user.author_image,operate:e.data.user.author_name,userid:e.data.user.author_id},t.operation.push(t.userinfor),console.log(t.operation)}}));else e.showToast({title:"您没有这个权限",icon:"none"})}})},methods:{deleteOperator:function(t){var a=this;console.log(a.operation[t].userid),e.request({url:n.default.addoperator(),method:"DELETE",header:{"Content-Type":"application/x-www-form-urlencoded",token:o.default.getToken()},data:{companyId:o.default.getShop().company_id,userid:a.operation[t].userid},success:function(e){console.log(e),a.operation.splice(t,1)}})},addOperator:function(){var t=this;e.scanCode({success:function(a){t.account_id=a.result,console.log(t.account_id),e.request({url:n.default.addoperator(),method:"POST",header:{token:o.default.getToken(),"Content-Type":"application/x-www-form-urlencoded"},data:{companyId:o.default.getShop().company_id,account:t.account_id,level:!0},success:function(a){console.log(a),console.log(a.data.value.userid),t.userid=a.data.value.userid,console.log(t.userid),200==a.data.code?e.request({url:n.default.seeUser(),header:{token:o.default.getToken()},data:{otherId:t.userid},success:function(e){console.log(e),t.userinfor={image:e.data.user.author_image,operate:e.data.user.author_name},t.operation.push(t.userinfor),console.log(t.operation)}}):1006==a.data.code?e.showToast({title:"此员工已经存在",icon:"none"}):e.showToast({title:"您没有权限",icon:"none"})}})}})}}};t.default=r}).call(this,a("543d")["default"])}},[["bc33","common/runtime","common/vendor"]]]);