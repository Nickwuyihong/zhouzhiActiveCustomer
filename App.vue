<script>
	import Api from 'api'

	export default {
		data() {
			return {
				token: 0,
				height: 0,

			}
		},
		onLaunch: function() {
			console.log('App Launch');

			uni.request({
				url: Api.testLogin(),
				method: 'GET',
// 				header: {
// 					cipher: '47153133655C36F09C86040128E874BD'
// 				},
				data: {
					userId: 112
				},
				success: res => {
					console.log(res)
					if (res.data.status == 1) {
						uni.showToast({
							title: '登录成功'
						})
						this.token = res.data.token
					}
				},
				fail: () => {},
				complete: () => {}
			});

			setTimeout(() => {
				uni.setTabBarBadge({
					index: 1,
					text: '31'
				});
				uni.showTabBarRedDot({
					index: 3
				});
			}, 1000);

		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		getToken: function() {
			return this.token
		}
	};
</script>

<style>
	/*每个页面公共css */
</style>
