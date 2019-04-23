<template>
	<view class="body">
		<view class="content-top">
			<text class="text1">扫描结果</text>
			<view class="img">
				<image class="img-image" src="../../../../static/img/qa.png"></image>
			</view>
			<text class="text2">{{coupon.couponName}}</text>
			<view class="content-bottom">
				<button class="btn" @click="sure">确认兑换</button>
			</view>
		</view>
	</view>
</template>

<script>
	import App from '../../../../App.vue'
	import Api from '../../../../api.js'
	export default {
		data() {
			return {
				type: '',
				account: '',
				couponId: '',
				coupon: {}
			}
		},
		onLoad(options) {
			var that = this
			that.type = options.type
			var l = options.result.split(":")
			that.account = l[0]
			that.couponId = l[1]
			uni.request({
				url: Api.companyConsume() + "/" + that.couponId,
				header: {
					token: App.getToken()
				},
				data: {
					companyId: 5
				},
				success: function(res) {
					console.log(res)
					if (res.data.code == 200) {
						that.coupon = res.data.value
					} else {
						uni.showToast({
							title: '获取券详情失败',
							icon: 'none'
						})
					}
				}
			})
		},
		methods: {
			sure: function() {
				var that = this
				console.log(that.couponId)
				console.log(that.account)
				uni.request({
					url: Api.companyConsume(),
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						token: App.getToken()
					},
					data: {
						couponId: that.couponId,
						account: that.account,
						companyId: 5
					},
					success: function(res) {
						console.log(res)
						if (res.data.code == 200) {
							uni.showToast({
								title: '兑换成功'
							})
							uni.navigateTo({
								url: './sure',
							})
						} else if (res.data.code == 1009) {
							uni.showToast({
								title: '您没有这个权限',
								icon: 'none'
							})
						} else {
							uni.showToast({
								title: '兑换失败',
								icon: 'none'
							})
						}
					}
				})
			}
		}

	}
</script>

<style>
	.body {
		margin-top: 200upx;
		display: flex;
		flex-direction: column;
	}

	.content-top {
		display: flex;
		flex-direction: column;
	}

	.text1 {
		display: flex;
		margin: 10upx;
		color: grey;
		font-size: 30upx;
		align-items: center;
		justify-content: center;
	}

	.text2 {
		color: grey;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img-image {
		margin: 0 auto;
		height: 300upx;
		width: 300upx;
	}

	.img {
		display: flex;
		margin: 30upx 0;
	}

	.btn {
		color: #FFFFFF;
		background: green;
		margin-top: 100upx;
		border-radius: 25upx;
		height: 100Upx;
		width: 450upx;
	}
</style>
