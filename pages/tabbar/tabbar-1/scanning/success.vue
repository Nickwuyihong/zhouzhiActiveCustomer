<template>
	<view class="body">
		<view class="content-top">
			<text class="text1">扫描结果</text>

			<!-- <view class="img">
				<image class="img-image" src="../../../../static/img/qa.png"></image>
			</view> -->
			<view class="couponImg">
				<view class="left">
					<text style="margin: auto;">{{coupon.company}}</text>
					<text style="font-size: x-large;margin: auto;margin-top: 0;">{{coupon.couponName}}</text>
				</view>
				<view class="right">
					<!-- <button v-if="coupon.disable==true" size="mini" style="background: #BBBBBB;">查看详情</button>
					<button v-else size="mini" v-on:click="toDetail(0)">查看详情</button> -->
				</view>
			</view>

			<view class="detail">
				<view class="title">优惠券详情</view>
				<view class="items">
					<text style="color: #888888;">优惠名称：</text>
					<text>{{coupon.couponName}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">优惠券码：</text>
					<text>{{coupon.couponId}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">有效日期：</text>
					<text>{{coupon.startTime}}-{{coupon.endTime}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">可用时间：</text>
					<text>{{coupon.availableTime}}天</text>
				</view>
				<view class="items">
					<text style="color: #888888;">状态：</text>
					<text v-if="coupon.used==false" style="color: #FFBB00;">未兑换</text>
					<text v-else style="color: #FFBB00;">已兑换</text>
				</view>
				<view class="rules">
					<text style="color: #888888;">活动规则：</text>
					<text decode="emsp" style="text-indent: 25px;">{{coupon.couponState}}</text>
					<!-- <text v-for="(item,index) in coupon.rule" :key="index" decode="emsp" style="text-indent: 25px;"> {{index + 1}} .
						{{item}}</text> -->
				</view>
			</view>

			<!-- <text class="text2">{{coupon.couponName}}</text> -->
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
						var s = new Date(that.coupon.startTime)
						var e = new Date(that.coupon.endTime)
						that.coupon.startTime = s.toLocaleDateString()
						that.coupon.endTime = e.toLocaleDateString()
						that.coupon.availableTime = (e.getTime() - s.getTime()) / 86400000
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
		display: flex;
		flex-direction: column;
	}

	.content-top {
		display: flex;
		flex-direction: column;
	}

	.text1 {
		display: flex;
		margin: 60upx;
		color: grey;
		font-size: 40upx;
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

	.couponImg {
		height: 150upx;
		width: 90%;
		border: 3px solid #ffdd00;
		border-radius: 20upx;
		display: flex;
		margin: auto;
	}

	.left {
		height: 100%;
		width: 50%;
		display: flex;
		flex-direction: column;
		color: #FFBB00;
	}

	.right {
		height: 100%;
		width: 50%;
		display: flex;
		align-items: center;
	}

	.right button {
		background: #FFBB00;
		color: #FFFFFF;
		border-radius: 60upx;
	}

	.title {
		width: 90%;
	}

	.items {
		width: 80%;
		padding-top: 20upx;
	}

	.detail {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-top: 50upx;
		align-items: center;
	}

	.rules {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-top: 20upx;
	}
</style>
