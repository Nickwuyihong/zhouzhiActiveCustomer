<script>
	import Api from 'api'

	export default {
		data: {
			token: 'i',
			height: 0
		},
		onLaunch: function() {
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
			return this.data.token
		}
	};
</script>

<style>
	/*每个页面公共css */
</style>
