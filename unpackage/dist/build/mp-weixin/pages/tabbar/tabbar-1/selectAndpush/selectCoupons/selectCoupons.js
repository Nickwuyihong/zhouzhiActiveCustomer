(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/selectAndpush/selectCoupons/selectCoupons"],{"0e9f":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(s("fc86")),n=o(s("be61"));function o(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{showed:!1,checkedBottom:!0,time:[],number:0,repeat:0,companyId:"",startTime:"",endTime:"",cyid:[],couponsInfor:{},customers:[{number:"",placeholderName:"2019/2/19 00:00-2019/2/26 00:00",title:"发布时间",checked:!0,ending:""},{number:"",placeholderName:"20",title:"点赞数达到",checked:!0,ending:"个"},{number:"",placeholderName:"20",title:"点赞数前",checked:!1,ending:"个"}]}},onLoad:function(e){var t=this;t.couponsInfor=JSON.parse(e.couponsInfor),console.log(t.couponsInfor),t.companyId=t.couponsInfor.companyId},methods:{inputType:function(e){if(0==e)return"input1"},switchchecked:function(e){this.customers[e].checked=!this.customers[e].checked,console.log(this.customers[e].checked)},checkedbottom:function(){this.checkedBottom=!this.checkedBottom},readySelect:function(){var t=this;for(var s in this.customers)1==this.customers[s].checked&&(""==this.customers[s].number&&(this.customers[s].number=this.customers[s].placeholderName),console.log(this.customers[s].number));this.showed=!0,this.time=this.customers[0].number.split("-"),this.startTime=Math.round(new Date(this.time[0])/1e3),this.endTime=Math.round(new Date(this.time[1])/1e3),console.log(c.default.getToken()),console.log(this.startTime),console.log(this.endTime),console.log(this.customers[1].number),console.log(this.customers[2].number),console.log(this.checkedBottom),console.log(this.companyId),e.request({url:n.default.screenUser(),method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",token:c.default.getToken()},data:{companyId:this.companyId,start:this.startTime,end:this.endTime,upNo:this.customers[2].number,upNum:this.customers[1].number,repeat:this.checkedBottom},success:function(e){for(var s in console.log(e),e.data.value.result)t.cyid.push(e.data.value.result[s].cyid);t.number=e.data.value.number,t.repeat=e.data.value.repeat,console.log(t.cyid)}})},renewClick:function(){this.showed=!1},submit:function(){var t=this;e.navigateTo({url:"./select/select?cyid="+JSON.stringify(t.cyid)+"&couponsInfor="+JSON.stringify(t.couponsInfor)})}}};t.default=a}).call(this,s("543d")["default"])},"17b5":function(e,t,s){},"45b8":function(e,t,s){"use strict";s.r(t);var c=s("0e9f"),n=s.n(c);for(var o in c)"default"!==o&&function(e){s.d(t,e,function(){return c[e]})}(o);t["default"]=n.a},"484f":function(e,t,s){"use strict";s.r(t);var c=s("4e0e"),n=s("45b8");for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);s("9571");var a=s("2877"),i=Object(a["a"])(n["default"],c["a"],c["b"],!1,null,"3b028456",null);t["default"]=i.exports},"4e0e":function(e,t,s){"use strict";var c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"dialog"},[s("view",{staticClass:"content"},[s("text",{staticClass:"text-content"},[e._v("请填写筛选条件:")]),s("checkbox-group",{attrs:{mpcomid:"3780d02a-0"}},[s("view",{staticClass:"content-main"},[s("checkbox",{attrs:{checked:e.customers[0].checked,eventid:"3780d02a-0"},on:{click:function(t){e.switchchecked(0)}}}),e._v(e._s(e.customers[0].title)),s("view",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customers[0].number,expression:"customers[0].number"}],staticClass:"input1",attrs:{placeholder:e.customers[0].placeholderName,eventid:"3780d02a-1"},domProps:{value:e.customers[0].number},on:{input:function(t){t.target.composing||(e.customers[0].number=t.target.value)}}})]),e._v(e._s(e.customers[0].ending))],1),s("view",{staticClass:"content-main"},[s("checkbox",{attrs:{checked:e.customers[1].checked,eventid:"3780d02a-2"},on:{click:function(t){e.switchchecked(1)}}}),e._v(e._s(e.customers[1].title)),s("view",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customers[1].number,expression:"customers[1].number"}],attrs:{placeholder:e.customers[1].placeholderName,eventid:"3780d02a-3"},domProps:{value:e.customers[1].number},on:{input:function(t){t.target.composing||(e.customers[1].number=t.target.value)}}})]),e._v(e._s(e.customers[1].ending))],1),s("view",{staticClass:"content-main"},[s("checkbox",{attrs:{checked:e.customers[2].checked,eventid:"3780d02a-4"},on:{click:function(t){e.switchchecked(2)}}}),e._v(e._s(e.customers[2].title)),s("view",{staticClass:"input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customers[2].number,expression:"customers[2].number"}],attrs:{placeholder:e.customers[2].placeholderName,eventid:"3780d02a-5"},domProps:{value:e.customers[2].number},on:{input:function(t){t.target.composing||(e.customers[2].number=t.target.value)}}})]),e._v(e._s(e.customers[2].ending))],1)]),s("text",{staticClass:"text-content"},[e._v("选项:")]),s("checkbox-group",{attrs:{mpcomid:"3780d02a-1"}},[s("view",{staticClass:"content-main"},[s("checkbox",{attrs:{checked:e.checkedBottom,eventid:"3780d02a-6"},on:{click:e.checkedbottom}},[e._v("检测重复发布者")])],1),s("view",{staticClass:"content-main"},[s("checkbox",{attrs:{checked:"true"}},[e._v("筛选从最符合条件者开始")])],1),s("view",{staticClass:"content-main"},[s("checkbox",{attrs:{checked:"true"}},[e._v("提示该用户活动期间第几次发布")])],1)]),s("button",{staticClass:"btn",attrs:{eventid:"3780d02a-7"},on:{click:e.readySelect}},[e._v("进行预筛选")])],1),e.showed?s("view",{staticClass:"dialog-cover"},[s("view",{staticClass:"dialog-content"},[e._m(0),s("view",{staticClass:"dialog-main"},[s("view",{staticClass:"text-content"},[e._v("本次活动共"+e._s(e.number)+"人参与;")]),s("view",{staticClass:"text-content"},[e._v("符合筛选条件的内容"+e._s(e.number)+"篇;")]),s("view",{staticClass:"text-content"},[e._v("其中重复发布"+e._s(e.repeat)+"篇;")]),s("view",{staticClass:"text-content"},[e._v("...")])]),s("view",{staticClass:"dialog-content-1"},[s("button",{staticClass:"btn-1",attrs:{eventid:"3780d02a-8"},on:{click:e.submit}},[e._v("开始筛选")])],1),s("view",{staticClass:"dialog-content-2"},[s("button",{staticClass:"btn-1",staticStyle:{background:"green"},attrs:{eventid:"3780d02a-9"},on:{click:e.renewClick}},[e._v("重新设置筛选条件")])],1)])]):e._e()])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"dialog-content-title"},[s("view",{staticClass:"text-content"},[e._v("预筛选结果")])])}];s.d(t,"a",function(){return c}),s.d(t,"b",function(){return n})},"656c":function(e,t,s){"use strict";s("7caf");var c=o(s("b0ce")),n=o(s("484f"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,c.default)(n.default))},9571:function(e,t,s){"use strict";var c=s("17b5"),n=s.n(c);n.a}},[["656c","common/runtime","common/vendor"]]]);