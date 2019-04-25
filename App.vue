<script>
	import Api from 'api'

	export default {
		data: {
			height: 0,
			company_id:'5'
		},
		onLoad:function(res){
			
		},
		onLaunch: function() {
			var that = this
			console.log('App Launch');
			// 			setTimeout(() => {
			// 				uni.setTabBarBadge({
			// 					index: 1,
			// 					text: '31'
			// 				});
			// 				uni.showTabBarRedDot({
			// 					index: 3
			// 				});
			// 			}, 1000);
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
				//console.log('获取token完成')
				return value
			} catch (e) {
				console.log(e)
			}
		},
		saveToken: function(token) {
			try {
				uni.setStorageSync('token', token)
				//console.log('存储token完成')
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
		getCompany_id: function() {
			return this.data.company_id
		}
	};
</script>

<style>
	/*每个页面公共css */
</style>
