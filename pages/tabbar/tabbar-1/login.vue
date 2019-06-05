<template>
	<view class="body">
		<image style='width:56px;height:56px;' src='../../../static/logo.png'></image>
		<text style='margin-top:-28px;' class="name">密客</text>
		<button v-if="showBt" type="primary" open-type="getUserInfo" @getuserinfo="onGotUserInfo">点击授权登录</button>
	</view>
</template>

<script>
	import App from '../../../App.vue'
	import Api from '../../../api.js'

	export default {
		data() {
			return {
				token: '',
				JSCODE: '',
				type: 0, //0:主页 1:分享 2:邀请
				showBt: false,
				nickName: '听风者',
				gender: 1,
				avatarUrl: '',
				userId:'',
				circleId: '',
				cyId: '',
				isNew: 1, //如果是0，则不是新用户，1则是新用户
				status: 0,
				city: '',
				province: '',
				country: ''
			};
		},
		onLoad() {
			// 			uni.login({
			// 				provider: 'weixin',
			// 				success: function(res) {
			// 					console.log(res);
			// 					console.log(App.getToken())
			// 					uni.request({
			// 						url: Api.usersAccount(),
			// 						header: {
			// 							token: App.getToken()
			// 						},
			// 						success: function(res) {
			// 							console.log(res)
			// 						}
			// 					})
			// 				}
			// 			})
		},
		onShow: function() {
			console.log('App Show');
			uni.showLoading({
				title: '加载中',
			})
			var that = this
			var value = App.getToken();
			if (value) { //token存在
				that.token = value
				// console.log('token存在：' + value)
				//token验证
				App.checkToken(function(data) {
					// console.log('checkToken')
					that.status = data.status
					// console.log('验证token返回的信息：' + that.data.status)
					if (that.status == 1) {
						//console.log('验证token成功')
						// App.saveUserId(data.userId)
						that.toNext()
					} else {
						// console.log('验证token失败')
						that.getCode(); //重新登录
					}
				});
			} else {
				console.log('token不存在')
				//that.toNext()
				that.getCode()
			}
		},
		methods: {
			onGotUserInfo: function(e) {
				uni.showLoading({
					title: '登录中',
				})
				var that = this
				console.log(e)
				that.nickName = e.detail.userInfo.nickName
				that.gender = e.detail.userInfo.gender
				that.avatarUrl = e.detail.userInfo.avatarUrl
				that.city = e.detail.userInfo.city
				that.province = e.detail.userInfo.province
				that.country = e.detail.userInfo.country
				console.log(that.JSCODE)
				console.log(e.detail.encryptedData, )
				console.log(e.detail.iv)
				//往服务器发送参数拿token
				uni.request({
					url: Api.forelogin(),
					data: {
						JSCODE: that.JSCODE,
						Version: 3,
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv
					},
					success: function(res) {
						uni.hideLoading()
						if (res.data.status == 1) {
							console.log(res)
							App.saveToken(res.data.token)
							App.saveUserId(res.data.userId)
							console.log(res.data.userId)
							if (res.data.isNew == 1) {
								that.upload_user()
							}
							that.toNext()
						} else {
							console.log(res)
							uni.showToast({
								title: '登录失败',
								icon: 'none'
							})
						}
					},
					fail: function(res) {
						console.log(res)
					}
				})
			},
			upload_user: function() {
				var that = this
				console.log(that.avatarUrl)
				console.log(that.nickName)
				uni.request({
					url: Api.updateFristMessage(),
					data: {
						sex: that.gender,
						name: that.nickName,
						url: that.avatarUrl
					},
					header: {
						token: App.getToken()
					},
					success: function(res) {
						if (res.data.status == 1) {
							console.log("上传成功")
						}
						console.log(res)
					}
				})
			},
			getCode: function() {
				var that = this;
				uni.login({
					provider: 'weixin',
					success: function(res) {
						uni.hideLoading()
						// console.log("JSCODE:" + res.code)
						if (res.code) {
							that.JSCODE = res.code
							that.showBt = true
						} else {
							console.log('获取用户登录态失败！' + res.errMsg)
						}
					}
				})
			},
			login: function() {
				uni.showLoading({
					title: '加载中',
				})
				var that = this
				var value = App.getToken();
				if (value) { //token存在
					that.token = value
					// console.log('token存在：' + value)
					//token验证
					App.checkToken(function(data) {
						that.status = data.status
						// console.log('验证token返回的信息：' + that.data.status)
						if (that.status == 1) {
							// console.log('验证token成功')
							App.saveUserId(data.userId)
							that.toNext()
						} else {
							// console.log('验证token失败')
							that.getCode(); //重新登录
						}
					});
				} else {
					console.log('token不存在')
					//that.toNext()
					that.getCode()
				}
			},
			toNext: function() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	};
</script>

<style scoped>
	.body {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 200upx 0;
		box-sizing: border-box;
		background-image: url("http://www.oijkl.com:8090/basic/background.jpg");
		background-size: cover;
	}

	.body button {
		width: 80%;
		margin-top: 80upx;
		height: 110upx;
	}

	.content {
		text-align: center;
		height: 88%;
		width: 100%;
		background: #f2f2f2;
		display: flex;
		flex-direction: column;
	}

	.box-image {
		width: 600upx;
		height: 600upx;
		margin: auto;
		margin-bottom: 0;
	}

	.bottom {
		height: 12%;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.box-image1 {
		height: 100upx;
		width: 100upx;
		border-radius: 100%;
		margin: auto;
		margin-bottom: 0;
	}

	.items {
		display: flex;
		flex-direction: column;
		margin: auto;
		align-items: center;
		height: 100%;
	}
</style>
