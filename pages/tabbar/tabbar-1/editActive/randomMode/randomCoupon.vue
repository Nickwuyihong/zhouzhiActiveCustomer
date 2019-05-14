<template>
	<body>
		<view class="body">
			<view class="img_list">
				<image v-for="(item,index) in ads" :key="index" :src="item.img"></image>
			</view>
			<view class="detail">
				<view class="title">优惠券详情</view>
				<view class="items">
					<text style="color: #888888;">优惠名称：</text>
					<text>{{coupon.couponName}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">优惠券码：</text>
					<text>11111111111</text>
				</view>
				<view class="items">
					<text style="color: #888888;">中奖概率：</text>
					<text>{{coupon.probability}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">数量上限：</text>
					<text>{{coupon.toplimit}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">发券时间：</text>
					<text>{{coupon.publishTime}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">有效日期：</text>
					<text>{{coupon.exTime}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">可用日期：</text>
					<text>{{coupon.availableTime}}</text>
				</view>
				<view class="items">
					<text style="color: #888888;">状态：</text>
					<text style="color: #FFBB00;">未兑换</text>
				</view>
				<view class="rules">
					<text style="color: #888888;">活动规则：</text>
					<text v-for="(item,index) in coupon.rule" :key="index" decode="emsp" style="text-indent: 25px;"> {{index + 1}} . {{item}}</text>
				</view>
			</view>
		</view>
	</body>	
</template>

<script>
	export default {
		data() {
			return {
				coupon: {},
				ads: [],
				active: true
			}
		},
		onLoad(e) {
			console.log(e)
			this.coupon = JSON.parse(e.detail)
			console.log(this.coupon)
			this.ads = JSON.parse(e.ads)
			console.log(this.ads)
		},
		methods: {
			jump: function(e) {
				console.log(e)
				if (e.currentTarget.id == 0) {
					uni.navigateTo({
						url: 'limitedMode/limitedMode'
					})
				} else if (e.currentTarget.id == 1) {
					uni.navigateTo({
						url: 'randomMode/randomMode'
					})
				} else {
					uni.navigateTo({
						url: 'historyActive/historyActive'
					})
				}
			}
		}
	}
</script>


<style lang="scss" scoped>
	html,body {
		margin: 0;
		padding: 0;
		outline: none;
		list-style: none;
		width: 100%;
		height: 100%;
		font-family: "微软雅黑";
		background: #F2F2F2;
	}

	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: auto;
		/* #endif */
		background: #F2F2F2;
	}

	.img_list {
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
	}

	.img_list image {
		width: 100%;
		height: 400upx;
		margin: auto;
		padding-top: 50upx;
	}
	
	.title{
		width: 90%;
	}
	
	.items{
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
	
	.rules{
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-top: 20upx;
	}
</style>
