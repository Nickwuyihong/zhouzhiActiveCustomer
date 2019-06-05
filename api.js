var BASE_URL = 'https://www.oijkl.com/xz_cp/'
var BASE_URL2 = 'https://www.oijkl.com/V2/'

export default {
	testLogin: function() {
		return BASE_URL + 'testLogin/'
	},
	usersAccount: function() {
		return BASE_URL + 'users/account/'
	},
	usersCompany: function() {
		return BASE_URL + 'users/company/'
	},
	//获取商家
	company: function() {
		return BASE_URL + 'company/createCoupon'
	},
	companyActivity: function() {
		return BASE_URL + 'company/activity/'
	},
	screenUser: function() {
		return BASE_URL + 'business/screenUser'
	},
	searchCircle: function() {
		return BASE_URL2 + "searchCircle"
	},
	shop: function() {
		return BASE_URL + 'users/company'
	},
	bindingCircle: function() {
		return BASE_URL + 'bill/company2circle'
	},
	companyId: function(id) {
		return BASE_URL + 'business/companyId=' + id
	},
	getActivity: function() {
		return BASE_URL + 'company/getActivity'
	},
	getCoupons: function(a) {
		return BASE_URL + 'company/activity/' + a
	},
	//优惠券详情
	getCouponsdetail: function(id) {
		return BASE_URL + 'business/id=' + id
	},
	//获得文章
	postCoupons: function() {
		return BASE_URL + 'business/userCoupon4'
	},
	//获得中奖用户
	getUser: function(id) {
		return BASE_URL + 'business/typeId=' + id
	},
	getArtical: function() {
		return BASE_URL2 + 'searchCyid'
	},
	getContent: function() {
		return BASE_URL2 + 'readCyinfor'
	},
	companyConsume: function() {
		return BASE_URL + 'company/consume'
	},
	//登录
	forelogin: function() {
		return BASE_URL2 + "forelogin"
	},
	//验证token
	forecheck: function() {
		return BASE_URL2 + "forecheck";
	},
	//上传新用户
	updateFristMessage: function() {
		return BASE_URL2 + "updateFristMessage"
	},
	addoperator: function() {
		return BASE_URL + 'company/staff'
	},
	//查看用户信息
	seeUser: function() {
		return BASE_URL2 + 'myInformation'
	},
	seeotheruser:function(){
		return BASE_URL2 + 'seeUser'
	},
	//获取周知号
	companyConsume:function(){
		return BASE_URL + 'company/consume'
	},
	//激活码
	codeActivate:function(){
		return BASE_URL2 + 'UseCodeNum'
	},
	//获取当前活动下的卡券
	getactivityCoupons:function(url){
		return BASE_URL+'company/activity/'+url
	},
	//集赞活动接口
	likeCollect:function(){
		return BASE_URL+'company/activity2'
	},
	//新发布活动接口
	newPublish:function(){
		return BASE_URL+'company/activity1'
	},
	//打卡活动接口
	puch:function(){
		return BASE_URL+'company/activity3'
	},
	//打卡券接口
	puchCoupon:function(){
		return BASE_URL+'company/createCoupon1'
	},
	//关闭活动接口
	closeActivity:function(){
		return BASE_URL+'company/closeActivity'
	}
}
