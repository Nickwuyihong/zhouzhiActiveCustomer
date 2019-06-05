<script>
	import Api from 'api'
	
	export default {
		data() {
			return{
				height: 0,
				nickname: '',
				avatarUrl: '',
				activityId:''
			}
		},
		onLoad: function(res) {

		},
		onLaunch: function() {
			var that = this
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		//url错误
		geturlerror:function(path){
			var newpath='http://oijkl.com/'+path.substring(path.indexOf('/',9)+1,path.length)
			return newpath
		},
		// geturl: function(path) {
		// 	const OSS=require('./pages/components/OSS.js')
		// 	var client = new OSS({
		// 		region: 'oss-cn-shenzhen', //换成你自己的
		// 		accessKeyId: 'LTAIrYEkBW0VumzL',
		// 		accessKeySecret: 'HIFMVls12Iq7WhUWtFs1Ec4PuyCLU0',
		// 		bucket: 'zhouzhi-test1',
		// 	});
		// 	var options = {
		// 		expires: 3600
		// 	};
		// 	var newpath=path.substring(path.indexOf('/',9)+1,path.length)
		// 	var url = client.signatureUrl(newpath, options);
		// 	return url
		// 	console.log(url)
		// },
		//存活动id
		setactivityId:function(activityId){
			this.activityId=activityId
		},
		getactivityId:function(){
			return this.activityId
		},
		getToken: function() {
			try {
				var value = uni.getStorageSync('token')
				// var value='e32bc9af704bbb7fe190f0ada2607b19'
				// var value=''
				console.log('获取token完成')
				return value
			} catch (e) {
				console.log(e)
			}
		},
		getUserId: function() {
			try {
				var id = uni.getStorageSync('userid')
				console.log('获取userid完成')
				console.log(id)
				return id
			} catch (e) {
				console.log(e)
			}
		},
		saveToken: function(token) {
			try {
				uni.setStorageSync('token', token)
				console.log('存储token完成')
			} catch (e) {
				console.log(e)
			}
		},
		saveUserId: function(userid) {
			try {
				uni.setStorageSync('userid', userid)
				console.log('存储userid完成')
			} catch (e) {
				console.log(e)
			}
		},
		savecompany: function(company) {
			try {
				uni.setStorageSync('company', company)
				console.log(company)
				console.log('存储company完成')
			} catch (e) {
				console.log(e)
			}
		},
		getcompany: function() {
			try {
				var company = uni.getStorageSync('company')
				console.log('获取company完成')
				console.log(company)
				return company
			} catch (e) {
				console.log(e)
			}
		},
		//验证token是否正确
		checkToken: function(succ) {
			var token = uni.getStorageSync('token')
			// console.log('验证token的值是：'+token)
			uni.request({
				url: Api.forecheck(),
				header: {
					'token': token
				},
				success: function(res) {
					succ && succ(res.data)
					// console.log(res.data)
				}
			})
		},
	};
</script>

<style>
	/*每个页面公共css */
</style>
