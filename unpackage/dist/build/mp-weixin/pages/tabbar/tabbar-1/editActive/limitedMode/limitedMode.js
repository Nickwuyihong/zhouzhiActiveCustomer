(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/editActive/limitedMode/limitedMode"],{"0891":function(t,i,e){"use strict";var o=e("f95d"),a=e.n(o);a.a},"1c00":function(t,i,e){"use strict";e.r(i);var o=e("c2d0"),a=e("795c");for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);e("0891");var s=e("2877"),c=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);i["default"]=c.exports},"795c":function(t,i,e){"use strict";e.r(i);var o=e("ade5"),a=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,function(){return o[t]})}(n);i["default"]=a.a},ade5:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=s(e("b5d0")),a=s(e("be61")),n=s(e("fc86"));function s(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{activeName:"",ads:[],readyToUpdate:!0,coupon:{couponName:"请输入券名",availableTime:"",exTime:"",organization:"请选择机构",rule:"",disable:!0,modifyDiscount:!1,toplimit:"",company_index:0},organizationList:[],couponList:[],activityId:0}},components:{xyDialog:o.default},onLoad:function(){},created:function(){var i=this;i.coupon.organization="请输入发券机构",t.getStorage({key:"active",success:function(t){console.log(t.data),i.activityId=t.data.activityId,i.ads=t.data.ads,i.couponList=t.data.couponList,i.activeName=t.data.activeName,i.activeName.length>0&&i.ads.length>0&&i.couponList.length>0?i.readyToUpdate=!1:i.readyToUpdate=!0}}),t.request({url:a.default.usersCompany(),header:{token:n.default.getToken()},success:function(e){console.log(e),200==e.data.code?i.organizationList=e.data.value:t.showToast({title:"获取发券机构列表失败",icon:"none"})}})},methods:{bindPickerChange:function(t){var i=this;console.log(t),console.log("picker发送选择改变，携带值为",t.target.value);var e=t.target.value;if(0==t.currentTarget.id)i.coupon.company_index=e,i.coupon.organization=i.organizationList[e].company_name;else{var o=t.currentTarget.id-1;i.couponList[o].company_index=e,i.couponList[o].organization=i.organizationList[e].company_name}},jump:function(i){console.log(i),0==i.currentTarget.id?t.navigateTo({url:""}):(i.currentTarget.id,t.navigateTo({url:""}))},add_discount:function(){this.coupon.modifyDiscount=!0},add_img:function(){var i=this;t.chooseImage({success:function(t){var e=t.tempFilePaths,o={img:e[0]};i.ads.push(o)}}),this.activeName.length>0&&this.ads.length>0&&this.couponList.length>0?this.readyToUpdate=!1:this.readyToUpdate=!0},setTitle:function(t){this.activeName=t.detail.value,console.log(this.activeName),this.activeName.length>0&&this.ads.length>0&&this.couponList.length>0?this.readyToUpdate=!1:this.readyToUpdate=!0},setLink:function(t){this.ads[t.currentTarget.id].link=t.detail.value,this.activeName.length>0&&this.ads.length>0&&this.couponList.length>0?this.readyToUpdate=!1:this.readyToUpdate=!0},setName:function(t){if(console.log(t),0==t.currentTarget.id)this.coupon.couponName=t.detail.value,this.coupon.couponName.length>0&&this.coupon.toplimit.length>0&&"请输入券名"!=this.coupon.couponName&&this.coupon.exTime.length>0&&"请输入发券机构"!=this.coupon.organization&&this.coupon.organization.length>0&&this.coupon.rule.length>0?this.coupon.disable=!1:this.coupon.disable=!0;else{var i=t.currentTarget.id-1;console.log(i),this.couponList[i].couponName=t.detail.value,this.couponList[i].couponName.length>0&&"请输入券名"!=this.couponList[i].couponName&&this.couponList[i].toplimit.length>0&&this.couponList[i].exTime.length>0&&"请输入发券机构"!=this.couponList[i].organization&&this.couponList[i].organization.length>0&&this.couponList[i].rule.length>0?this.couponList[i].disable=!1:this.couponList[i].disable=!0}},setToplimit:function(t){if(console.log(t),0==t.currentTarget.id)this.coupon.toplimit=t.detail.value,this.coupon.couponName.length>0&&"请输入券名"!=this.coupon.couponName&&this.coupon.toplimit.length>0&&this.coupon.exTime.length>0&&"请输入发券机构"!=this.coupon.organization&&this.coupon.organization.length>0&&this.coupon.rule.length>0?this.coupon.disable=!1:this.coupon.disable=!0;else{var i=t.currentTarget.id-1;console.log(i),this.couponList[i].toplimit=t.detail.value,this.couponList[i].couponName.length>0&&"请输入券名"!=this.couponList[i].couponName&&this.couponList[i].toplimit.length>0&&this.couponList[i].exTime.length>0&&"请输入发券机构"!=this.couponList[i].organization&&this.couponList[i].organization.length>0&&this.couponList[i].rule.length>0?this.couponList[i].disable=!1:this.couponList[i].disable=!0}},setATime:function(t){if(0==t.currentTarget.id)this.coupon.availableTime=t.detail.value,this.coupon.couponName.length>0&&"请输入券名"!=this.coupon.couponName&&this.coupon.toplimit.length>0&&this.coupon.exTime.length>0&&"请输入发券机构"!=this.coupon.organization&&this.coupon.organization.length>0&&this.coupon.rule.length>0?this.coupon.disable=!1:this.coupon.disable=!0;else{var i=t.currentTarget.id-1;this.couponList[i].availableTime=t.detail.value,this.couponList[i].couponName.length>0&&"请输入券名"!=this.couponList[i].couponName&&this.couponList[i].toplimit.length>0&&this.couponList[i].exTime.length>0&&"请输入发券机构"!=this.couponList[i].organization&&this.couponList[i].organization.length>0&&this.couponList[i].rule.length>0?this.couponList[i].disable=!1:this.couponList[i].disable=!0}},setETime:function(t){if(0==t.currentTarget.id)this.coupon.exTime=t.detail.value,this.coupon.couponName.length>0&&"请输入券名"!=this.coupon.couponName&&this.coupon.toplimit.length>0&&this.coupon.exTime.length>0&&"请输入发券机构"!=this.coupon.organization&&this.coupon.organization.length>0&&this.coupon.rule.length>0?this.coupon.disable=!1:this.coupon.disable=!0;else{var i=t.currentTarget.id-1;this.couponList[i].exTime=t.detail.value,this.couponList[i].couponName.length>0&&"请输入券名"!=this.couponList[i].couponName&&this.couponList[i].toplimit.length>0&&this.couponList[i].exTime.length>0&&"请输入发券机构"!=this.couponList[i].organization&&this.couponList[i].organization.length>0&&this.couponList[i].rule.length>0?this.couponList[i].disable=!1:this.couponList[i].disable=!0}},setRule:function(t){if(0==t.currentTarget.id)this.coupon.rule=t.detail.value,this.coupon.couponName.length>0&&"请输入券名"!=this.coupon.couponName&&this.coupon.toplimit.length>0&&this.coupon.exTime.length>0&&"请输入发券机构"!=this.coupon.organization&&this.coupon.organization.length>0&&this.coupon.rule.length>0?this.coupon.disable=!1:this.coupon.disable=!0;else{var i=t.currentTarget.id-1;this.couponList[i].rule=t.detail.value,this.couponList[i].couponName.length>0&&"请输入券名"!=this.couponList[i].couponName&&this.couponList[i].toplimit.length>0&&this.couponList[i].exTime.length>0&&"请输入发券机构"!=this.couponList[i].organization&&this.couponList[i].organization.length>0&&this.couponList[i].rule.length>0?this.couponList[i].disable=!1:this.couponList[i].disable=!0}},toDetail:function(i){0==i?t.navigateTo({url:"coupon?detail="+JSON.stringify(this.coupon)+"&ads="+JSON.stringify(this.ads)}):(i--,console.log(i),t.navigateTo({url:"coupon?detail="+JSON.stringify(this.couponList[i])+"&ads="+JSON.stringify(this.ads)}))},addCoupon:function(){0==this.coupon.disable?(this.coupon.modifyDiscount=!1,this.couponList.push(this.coupon),this.coupon={couponName:"请输入券名",availableTime:"",exTime:"",organization:"请输入发券机构",rule:"",disable:!0,modifyDiscount:!1,toplimit:"",company_index:0}):t.showToast({title:"请填写完整信息",icon:"none"}),this.activeName.length>0&&this.ads.length>0&&this.couponList.length>0?this.readyToUpdate=!1:this.readyToUpdate=!0},modify:function(t){this.couponList[t].modifyDiscount=!0},save:function(t){this.couponList[t].modifyDiscount=!1},createActive:function(){this.$refs.xyDialog02.alert()},saveActive:function(){var i=this,e={activeName:i.activeName,activityId:i.activityId,ads:i.ads,couponList:i.couponList};t.setStorage({key:"active",data:e,success:function(){console.log("success"),t.showToast({title:"保存成功"}),setTimeout(function(){t.navigateBack({delta:1})},2e3)}})},handleClose:function(){console.log("点击关闭按钮"),t.showToast({title:"点击关闭按钮,触发自定义事件",icon:"none"})},handleConfirm:function(){var i=this;console.log("点击确定按钮");for(var e=0;e<i.couponList.length;e++){console.log(e);for(var o=0,s=0;s<i.organizationList.length;s++)i.organizationList[s].company_name==i.couponList[e].organization&&function(){console.log(e),o=i.organizationList[s].company_id;var c=e;t.request({url:a.default.companyActivity(),method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:n.default.getToken()},data:{name:i.activeName,companyId:o},success:function(e){if(console.log(e),200==e.data.code){i.activityId=e.data.value.activity_id,console.log(c);var s=new Date(i.couponList[c].availableTime).getTime();console.log(s),"NaN"==s.toString()&&(s=0,console.log(s)),t.request({url:a.default.company(),method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:n.default.getToken()},data:{companyId:o,activityId:i.activityId,name:i.couponList[c].couponName,state:i.couponList[c].rule,vaildDays:i.couponList[c].exTime,num:i.couponList[c].toplimit,money:1,start:s},success:function(i){console.log(i),200==i.data.code?t.showToast({title:"第"+c+"个活动创建成功"}):t.showToast({title:"第"+c+"个您没有权限进行创建!",icon:"none"})}})}else t.showToast({title:"第"+c+"个获取活动id失败",icon:"none"})}})}()}}}};i.default=c}).call(this,e("543d")["default"])},c2d0:function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"body"},[e("view",{staticClass:"title"},[t._v("活动名称")]),e("view",{staticClass:"activeName"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activeName,expression:"activeName"}],staticStyle:{width:"90%",margin:"auto"},attrs:{type:"text",value:t.activeName,placeholder:"请输入活动名称",eventid:"514fbc5b-0"},domProps:{value:t.activeName},on:{input:[function(i){i.target.composing||(t.activeName=i.target.value)},t.setTitle]}})]),e("view",{staticClass:"title"},[t._v("活动内容")]),t._m(0),0==t.ads.length?e("view",{staticClass:"add_img"},[e("view",{staticStyle:{margin:"auto","margin-left":"50rpx"}},[t._v("添加广告图片")]),e("image",{attrs:{src:"../../../../../static/img/addImg.png",eventid:"514fbc5b-1"},on:{click:t.add_img}}),e("view",{staticStyle:{margin:"auto","margin-left":"50rpx","margin-top":"0"}},[t._v("输入广告链接")]),e("textarea",{staticStyle:{width:"85%",margin:"auto","margin-left":"70rpx","margin-top":"0",color:"#007AFF",height:"100rpx"},attrs:{type:"text",value:"",placeholder:"请输入广告推文链接"}})]):e("view",[t._l(t.ads,function(i,o){return e("view",{key:i.index,staticClass:"add_img"},[e("view",{staticStyle:{margin:"auto","margin-left":"50rpx"}},[t._v("图片"+t._s(o+1))]),e("image",{staticStyle:{width:"85%"},attrs:{src:i.img,eventid:"514fbc5b-2-"+o},on:{click:t.add_img}}),e("view",{staticStyle:{margin:"auto","margin-left":"50rpx","margin-top":"0"}},[t._v("广告链接"+t._s(o+1))]),e("textarea",{staticStyle:{width:"85%",margin:"auto","margin-left":"70rpx","margin-top":"0",color:"#007AFF",height:"100rpx"},attrs:{type:"text",value:i.link,placeholder:"请输入广告推文链接",id:o,eventid:"514fbc5b-3-"+o},on:{input:t.setLink}})])}),e("view",{staticClass:"add_reward",staticStyle:{"margin-top":"40rpx"}},[e("image",{attrs:{src:"../../../../../static/img/addReward.png",eventid:"514fbc5b-4"},on:{click:t.add_img}}),e("text",[t._v("继续添加广告图片")])])],2),e("view",{staticClass:"title",staticStyle:{"margin-top":"50rpx"}},[t._v("奖励设置")]),t.couponList.length>0?e("view",{},t._l(t.couponList,function(i,o){return e("view",{key:o},[e("view",{staticStyle:{width:"90%",display:"flex","justify-content":"space-between",margin:"auto","align-items":"center",height:"100rpx"}},[e("text",[t._v("优惠"+t._s(o+1))]),e("button",{staticStyle:{margin:"0"},attrs:{type:"default",size:"mini",eventid:"514fbc5b-5-"+o},on:{click:function(i){t.modify(o)}}},[t._v("修改")])],1),1==i.modifyDiscount?e("view",[e("view",{staticClass:"add_reward2"},[e("view",{staticClass:"couponImg"},[e("view",{staticClass:"left"},[e("text",{staticStyle:{margin:"auto"}},[t._v(t._s(i.organization))]),e("text",{staticStyle:{"font-size":"x-large",margin:"auto","margin-top":"0"}},[t._v(t._s(i.couponName))])]),e("view",{staticClass:"right"},[1==i.disable?e("button",{staticStyle:{background:"#BBBBBB"},attrs:{size:"mini"}},[t._v("查看详情")]):e("button",{attrs:{size:"mini",eventid:"514fbc5b-6-"+o},on:{click:function(e){t.toDetail(i+1)}}},[t._v("查看详情")])],1)]),e("text",{staticStyle:{"padding-top":"20rpx",color:"#BBBBBB"}},[t._v("券预览图")]),e("view",{staticStyle:{width:"90%","padding-top":"20rpx"}},[t._v("填写相关信息")]),e("view",{staticClass:"inputs"},[e("text",{staticStyle:{width:"20%"}},[t._v("券名：")]),e("input",{staticStyle:{width:"85%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",value:i.couponName,placeholder:"请输入券名",id:o+1,eventid:"514fbc5b-7-"+o},on:{input:t.setName}})]),e("view",{staticClass:"inputs"},[e("view",{staticStyle:{width:"30%"}},[t._v("数量上限：")]),e("input",{staticStyle:{width:"70%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",value:i.toplimit,placeholder:"请输入该券数量上限 (例: 300张)",id:o+1,eventid:"514fbc5b-8-"+o},on:{input:t.setToplimit}})]),e("view",{staticClass:"inputs"},[e("view",{staticStyle:{width:"30%"}},[t._v("可用时间：")]),e("input",{staticStyle:{width:"70%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",value:i.availableTime,placeholder:"请输入优惠券可用时间",id:o+1,eventid:"514fbc5b-9-"+o},on:{input:t.setATime}})]),e("view",{staticClass:"inputs"},[e("view",{staticStyle:{width:"30%"}},[t._v("券有效期：")]),e("input",{staticStyle:{width:"70%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",value:i.exTime,placeholder:"请输入优惠券有效期",id:o+1,eventid:"514fbc5b-10-"+o},on:{input:t.setETime}})]),e("view",{staticClass:"inputs"},[e("view",{staticStyle:{width:"30%"}},[t._v("发券机构：")]),e("picker",{attrs:{mode:"selector",id:o+1,value:t.couponList[o].company_index,range:t.organizationList,"range-key":"company_name",eventid:"514fbc5b-11-"+o},on:{change:t.bindPickerChange}},[e("view",{staticClass:"uni-input"},[t._v(t._s(t.organizationList[t.couponList[o].company_index].company_name))])])],1),e("view",{staticClass:"inputs",staticStyle:{"align-items":"flex-start"}},[e("view",{staticStyle:{width:"30%"}},[t._v("使用规则：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:i.rule,expression:"item.rule"}],staticStyle:{width:"70%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text","auto-height":"true",placeholder:"请输入使用规则",id:o+1,eventid:"514fbc5b-12-"+o},domProps:{value:i.rule},on:{input:[function(t){t.target.composing||(i.rule=t.target.value)},t.setRule]}},[t._v('<s:property :value="item.rule"/>')])]),e("button",{staticClass:"btn",attrs:{eventid:"514fbc5b-13-"+o},on:{click:function(i){t.save(o)}}},[t._v("确定")])],1)]):e("view",[e("view",{staticClass:"add_reward"},[e("view",{staticClass:"couponImg"},[e("view",{staticClass:"left"},[e("text",{staticStyle:{margin:"auto"}},[t._v(t._s(i.organization))]),e("text",{staticStyle:{"font-size":"x-large",margin:"auto","margin-top":"0"}},[t._v(t._s(i.couponName))])]),e("view",{staticClass:"right"},[1==i.disable?e("button",{staticStyle:{background:"#BBBBBB"},attrs:{size:"mini"}},[t._v("查看详情")]):e("button",{attrs:{size:"mini",eventid:"514fbc5b-14-"+o},on:{click:function(i){t.toDetail(o+1)}}},[t._v("查看详情")])],1)])])])])})):t._e(),e("view",{staticStyle:{width:"90%",display:"flex","justify-content":"space-between",margin:"auto","align-items":"center",height:"100rpx"}},[e("text",[t._v("优惠"+t._s(t.couponList.length+1))])]),0==t.coupon.modifyDiscount?e("view",{staticClass:"add_reward",attrs:{eventid:"514fbc5b-23"},on:{click:t.add_discount}},[e("image",{attrs:{src:"../../../../../static/img/addReward.png"}}),e("text",[t._v("添加奖励")])]):e("view",{staticClass:"add_reward2"},[e("view",{staticClass:"couponImg"},[e("view",{staticClass:"left"},[e("text",{staticStyle:{margin:"auto"}},[t._v(t._s(t.coupon.organization))]),e("text",{staticStyle:{"font-size":"x-large",margin:"auto","margin-top":"0"}},[t._v(t._s(t.coupon.couponName))])]),e("view",{staticClass:"right"},[1==t.coupon.disable?e("button",{staticStyle:{background:"#BBBBBB"},attrs:{size:"mini"}},[t._v("查看详情")]):e("button",{attrs:{size:"mini",eventid:"514fbc5b-15"},on:{click:function(i){t.toDetail(0)}}},[t._v("查看详情")])],1)]),e("text",{staticStyle:{"padding-top":"20rpx",color:"#BBBBBB"}},[t._v("券预览图")]),e("view",{staticStyle:{width:"90%","padding-top":"20rpx"}},[t._v("填写相关信息")]),e("view",{staticClass:"inputs"},[e("text",{staticStyle:{width:"20%"}},[t._v("券名：")]),e("input",{staticStyle:{width:"85%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",value:"",placeholder:"请输入券名",id:"0",eventid:"514fbc5b-16"},on:{input:t.setName}})]),e("view",{staticClass:"inputs"},[e("view",{staticStyle:{width:"30%"}},[t._v("数量上限：")]),e("input",{staticStyle:{width:"70%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",placeholder:"请输入该券数量上限 (例: 300张)",id:"0",eventid:"514fbc5b-17"},on:{input:t.setToplimit}})]),e("view",{staticClass:"inputs"},[e("view",{staticStyle:{width:"30%"}},[t._v("可用时间：")]),e("input",{staticStyle:{width:"70%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",value:"",placeholder:"请输入优惠券可用时间",id:"0",eventid:"514fbc5b-18"},on:{input:t.setATime}})]),e("view",{staticClass:"inputs"},[e("view",{staticStyle:{width:"30%"}},[t._v("券有效期：")]),e("input",{staticStyle:{width:"70%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",value:"",placeholder:"请输入优惠券有效期",id:"0",eventid:"514fbc5b-19"},on:{input:t.setETime}})]),e("view",{staticClass:"inputs"},[e("view",{staticStyle:{width:"30%"}},[t._v("发券机构：")]),e("view",{}),e("picker",{attrs:{mode:"selector",value:t.coupon.company_index,range:t.organizationList,id:"0","range-key":"company_name",eventid:"514fbc5b-20"},on:{change:t.bindPickerChange}},[e("view",{staticClass:"uni-input"},[t._v(t._s(t.organizationList[t.coupon.company_index].company_name))])])],1),e("view",{staticClass:"inputs",staticStyle:{"align-items":"flex-start"}},[e("view",{staticStyle:{width:"30%"}},[t._v("使用规则：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.coupon.rule,expression:"coupon.rule"}],staticStyle:{width:"70%","border-bottom":"1px solid #F2F2F2"},attrs:{type:"text",value:"","auto-height":"true",placeholder:"请输入使用规则",id:"0",eventid:"514fbc5b-21"},domProps:{value:t.coupon.rule},on:{input:[function(i){i.target.composing||(t.coupon.rule=i.target.value)},t.setRule]}})]),e("button",{staticClass:"btn",attrs:{eventid:"514fbc5b-22"},on:{click:t.addCoupon}},[t._v("确定")])],1),t.couponList.length>0?e("view",{staticStyle:{width:"80%",display:"flex","justify-content":"space-between",margin:"auto","margin-top":"100rpx"}},[e("button",{staticClass:"btnSave",attrs:{size:"default",eventid:"514fbc5b-24"},on:{click:t.saveActive}},[t._v("保存")]),e("button",{staticClass:"btnCreate",attrs:{size:"default",disabled:t.readyToUpdate,eventid:"514fbc5b-25"},on:{click:t.createActive}},[t._v("创建活动")])],1):t._e(),e("xy-dialog",{ref:"xyDialog02",attrs:{title:"false",message:"确定创建？",eventid:"514fbc5b-26",mpcomid:"514fbc5b-0"},on:{cancelButton:t.handleClose,confirmButton:t.handleConfirm}}),e("view",{staticClass:"title"})],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"preview"},[e("view",{staticClass:"preview_img"}),e("view",{staticClass:"preview_text"},[t._v("预览图")])])}];e.d(i,"a",function(){return o}),e.d(i,"b",function(){return a})},cd51:function(t,i,e){"use strict";e("7caf");var o=n(e("b0ce")),a=n(e("1c00"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},f95d:function(t,i,e){}},[["cd51","common/runtime","common/vendor"]]]);