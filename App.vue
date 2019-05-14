<script>
	import Api from 'api'

	export default {
		data: {
			height: 0,
			nickname: '',
			avatarUrl: '',
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
		getToken: function() {
			try {
				var value = uni.getStorageSync('token')
				// var value='i'
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
