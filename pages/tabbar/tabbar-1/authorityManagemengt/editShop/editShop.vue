<template>
	<view class="page">
		<view class="content-1">
			<view class="text">
				<view style="font-size: 30upx;color: #727171;">门店名称：</view>
				<view style="font-size: 35upx;color: #595757;">{{shop.company_name}}</view>
			</view>
		</view>
		<view class="content-2" v-if="showed1">
			<view class="text">绑定交流圈</view>
			<view class="image" @click="jump(0)">
				<image class="picture" src="../../../../../static/image/大于号-01.png"></image>
			</view>
			<view></view>
		</view>
		<view class="content-2" style="height: 150upx;" v-if="showed2">
			<view class="text-wrapper">
				<view class="text">绑定交流圈</view>
				<view class="text-1">{{circle_name}}</view>
				<!-- <view class="image" @click="jump(0)">
				<image class="picture" src="../../../../../static/image/大于号-01.png"></image>
			</view> -->
			</view>
		</view>
		<view class="content-2">
			<view class="text">运营者管理</view>
			<view class="image" @click="jump(1)">
				<image class="picture" src="../../../../../static/image/大于号-01.png"></image>
			</view>
		</view>
		<view class="content-2">
			<view class="text">劵核销员管理</view>
			<view class="image" @click="jump(2)">
				<image class="picture" src="../../../../../static/image/大于号-01.png"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				shop: {},
				circle_name: '',
				showed1: false,
				showed2: false
			}
		},
		methods: {
			jump: function(index) {
				if (index == 0) {
					uni.navigateTo({
						url: './bindingShop/binding?shop=' + JSON.stringify(this.shop)
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: './operationShop/operationShop?shop=' + JSON.stringify(this.shop)
					})
				} else {
					uni.navigateTo({
						url: './delectingCoupons/delectingCoupons?shop=' + JSON.stringify(this.shop)
					})
				}
			}
		},
		onLoad(data) {
			console.log(data)
			this.shop = JSON.parse(data.shop)
			console.log(this.shop)
			if (this.shop.circle_name != null) {
				this.circle_name = this.shop.circle_name
				this.showed2 = true
				this.showed1 = false
			} else {
				this.showed1 = true
				this.showed2 = false
			}
		}
	}
</script>

<style>
	.page {
			/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
		background-color: #F2F2F2;
		display: flex;
		flex-direction: column;
	}

	.content-1 {
		padding: 20upx;
		display: flex;
		height: 100upx;
		flex-direction: row;
		background: #FFFFFF;
		color: #808080;
		margin-top: 1upx;
		margin-bottom: 40upx;
	}

	.content-2 {
		padding: 20upx;
		display: flex;
		height: 100upx;
		flex-direction: row;
		align-items: center;
		background: #FFFFFF;
		color: #000000;
		margin-bottom: 40upx;
	}

	.text-wrapper {
		display: compact;
		flex-direction: column;
		align-items: center;
	}

	.text {
		display: flex;
		font-size: 35upx;
		color: #595757;
		align-items: center;
	}

	.text-1 {
		display: flex;
		font-size: 35upx;
		margin-top: 18upx;
		margin-left: 35upx;
		color: #898989;
	}

	.image {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: flex-end;
	}

	.picture {
		height: 35upx;
		width: 35upx;
	}
</style>
