<template>
	<view class="body">
		<view class="content">
			<view class="content-1">
				<image class="box-image" :src='avatarUrl'></image>
			</view>
			<view class="content-2">
				<text class="text-content">{{name}}</text>
			</view>
		</view>
		<view class="content" @click="jump('/pages/tabbar/tabbar-1/authorityManagemengt/authorityManagement')">选择门店</view>
		<view class="content" @click="jump('/pages/tabbar/tabbar-1/authorityManagemengt/editShop/editShop')">权限管理</view>
		<view class="content" @click="toQRCode()">二维码名片</view>
	</view>
</template>

<script>
	import App from '../../../../App.vue'
	import Api from '../../../../api.js'
	export default {
		data() {
			return {
				position: '游客',
				avatarUrl: '',
				name: ''
			};
		},
		methods: {
			jump(url) {
				if (!url) return;
				uni.navigateTo({
					url
				});
			},
			toQRCode: function() {
				var that = this
				if (App.getToken()) {
					uni.navigateTo({
						url: 'QRCodeCard/QRCodeCard'
					})
				} else {
					uni.showToast({
						title: '未登录',
						icon: 'none'
					})
				}
			}
		},
		onShow() {
			var that = this;
			if (App.getToken()) {
				uni.request({
					url: Api.seeUser(),
					header: {
						token: App.getToken(),
					},
					data: {
						otherId: App.getUserId()
					},
					success(res) {
						console.log(res)
						if (res.data.code) {
							uni.showToast({
								title: 'token失效！',
								icon: 'none'
							})
							uni.clearStorage()
						} else {
							that.avatarUrl = res.data.user.author_image
							that.name = res.data.user.author_name
						}
					}
				})
			} else {
				uni.showToast({
					title: '未登录',
					icon: 'none'
				})
				setTimeout(function() {
					uni.navigateTo({
						url: '../login'
					})
				}, 1000)
			}
		}
	}
</script>

<style>
	.body {
		display: block;
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
		background-color: #f7f8f8;
	}

	.content {
		display: flex;
		padding-left: 40upx;
		background: #FFFFFF;
		align-items: center;
		font-size: 35upx;
		color: #595757;
		height: 120upx;
		width: 100%;
		margin-bottom: 20upx;
	}

	.content-1 {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-start;
	}

	.content-2 {
		display: flex;
		flex: 5;
		align-items: center;
		justify-content: flex-start;
	}

	.box-image {
		height: 70upx;
		width: 70upx;
		margin-right: 20upx;
		margin-left: 30upx;
		/* border-radius: 1upx; */
	}

	.text-content {
		line-height: 60upx;
		text-align: center;
		display: block;
		font-size: 35upx;
		color: grey;
	}
</style>
