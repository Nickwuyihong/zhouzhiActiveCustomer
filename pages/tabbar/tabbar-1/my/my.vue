<template>
	<view class="body">
		<view class="content-top">
			<view class="content-top-main" style="display: flex;height: 100upx;">
				<view class="content-1">
					<image class="box-image" :src='avatarUrl' :onerror='errorImage'></image>
				</view>
				<view class="content-2">
					<view class="content-2-top">
						<text class="text-content" style="color: #000000;font-weight: bold;">{{name}}</text>
					</view>
					<view class="content-2-bottom">
						<text class="text-content" style="margin-right: 20upx;">{{identity}}</text>
						<text class="text-content" v-if="showed1">门店：{{shopName}}</text>
						<picker mode="selector" @change="bindPickerChange" :range="shops" id="0" range-key="company_name" v-if="showed2">
							<text class="text-content">门店：{{shopName}}</text>
						</picker>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="content" @click="jump('/pages/tabbar/tabbar-1/authorityManagemengt/authorityManagement')">选择门店</view> -->
		<view class="content" @click="jump('/pages/tabbar/tabbar-1/authorityManagemengt/editShop/editShop')">权限管理</view>
		<view class="content" @click="jump('./wallet/wallet')">钱包</view>
		<view class="content" @click="toQRCode()">二维码名片</view>
	</view>
</template>

<script>
	import App from '../../../../App.vue'
	import Api from '../../../../api.js'
	export default {
		data() {
			return {
				url:'',
				errorImage: 'this.src=' + this.url,
				showed1: false,
				showed2: false,
				identity: "",
				avatarUrl: '',
				name: '',
				shopName: '',
				shops: []
			};
		},
		methods: {
			bindPickerChange: function(e) {
				var that = this
				console.log(e)
				console.log('picker发送选择改变，携带值为', e.target.value)
				var ind = e.target.value
				that.shopName = that.shops[e.target.value].company_name
				App.savecompany(that.shops[e.target.value])
			},
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
				console.log(App.getcompany())
				if (App.getcompany()) {
					that.showed1 = false
					that.showed2 = true
					this.shopName = App.getcompany().company_name;
					this.identity = '店员'
					uni.request({
						url: Api.shop(),
						header: {
							token: App.getToken()
						},
						success: function(res) {
							if (res.data.code == 200) {
								that.shops = res.data.value
							} else {
								uni.showToast({
									title: '获取门店失败',
									duration: 2000,
									icon: 'none'
								})
							}
						},
					})
				} else {
					uni.request({
						url: Api.shop(),
						header: {
							token: App.getToken()
						},
						success: function(res) {
							if (res.data.code == 200) {
								that.showed1 = false
								that.showed2 = true
								that.identity = '店员'
								that.shopName = '请选择门店'
								console.log(res)
								that.shops = res.data.value;
								console.log(that.shops);
							} else if (res.data.code == 1005) {
								that.shopName = '无'
								that.identity = '游客'
								that.showed1 = true
								that.showed2 = false
								// uni.showToast({
								// 	title: '您不属于任何商家',
								// 	duration: 2000,
								// 	icon:'none'
								// })
							}
						}
					})
				}
				console.log(App.getcompany().company_name);
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
							that.url = App.geturlerror(res.data.user.author_image)
							console.log(that.url)
							that.avatarUrl = App.geturl(res.data.user.author_image)
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
		height: 100upx;
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
		flex-direction: column;
	}

	.content-2-top {
		display: flex;
		flex: 1;
	}

	.content-2-bottom {
		display: flex;
		flex: 1;
	}

	.box-image {
		height: 100upx;
		width: 100upx;
		margin-right: 20upx;
		border-radius: 15upx;
		/* border-radius: 1upx; */
	}

	.text-content {
		line-height: 60upx;
		text-align: center;
		display: block;
		font-size: 35upx;
		color: grey;
	}

	.content-top {
		display: flex;
		padding-left: 40upx;
		background: #FFFFFF;
		flex-direction: row;
		margin-top: 40upx;
		font-size: 35upx;
		color: #595757;
		height: 170upx;
		width: 100%;
		margin-bottom: 30upx;
	}
</style>
