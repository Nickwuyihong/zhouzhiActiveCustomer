<template>
	<view class="body">
		<view class="content">
			<view class="content-top">
				<view class="content-main-top">
					<view style="display:block;font-size: 30upx;margin-bottom: 20upx;">我的余额</view>
					<text style="color: #000000;font-size: 40upx;font-weight: bold;">￥ 2000</text>
				</view>
				<view class="content-main">
					<button class="btn" style="background: #5acc93;">充值</button>
				</view>
				<view class="content-main">
					<button class="btn" style="background: #FF6E6E;">提现</button>
				</view>
			</view class="content-main">
			<view class="content-bottom">
				<view class="content-bottom-1">
					<view style="margin-left:30upx ;color: #808080;">周知服务</view>
				</view>
				<view class="content-bottom-2">
					<view class="bottom-detail" @click="jump('../payment/payment')">套餐收费</view>
					<view class="bottom-detail" @click="jump('../code/code')">激活码</view>
				</view>
                <view class="content-bottom-3">
				<view class="bottom-detail" @click="jump('../order/order')">订单列表</view>
				<view class="bottom-detail"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
         jump:function(url){
			 uni.navigateTo({
			 	url: url
			 	
			 });
		 }
		}
	}
</script>

<style>
	.body {
		/* #ifdef H5 */
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 100%;
		background: #F2F2F2;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		height: 90%;
		width: 85%;
	}

	.content-top {
		display: flex;
		flex-direction: column;
		background-color: #C9CACA;
		width: 100%;
		height: 40%;
		margin-bottom: 10%;

		border-radius: 20upx;
	}

	.content-bottom {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 30%;
		background: #FFFFFF;
		border: 1upx solid #C9CACA;
		border-radius: 20upx;
	}

	.content-main {
		display: flex;
		flex: 1;
		justify-content: center;
	}

	.content-main-top {
		display: flex;
		flex: 2;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.btn {
		display: block;
		font-size: 35upx;
		width: 200upx;
		height: 75upx;
		line-height: 75upx;
		border-radius: 15upx;
		color: #FFFFFF;
	}
	.content-bottom-1{
		display: flex;
		flex: 2;
		font-size: 35upx;
		align-items: center;
		justify-content: center;
	}
	.content-bottom-2{
		display: flex;
		flex: 4;
		flex-direction: row;
		font-size: 35upx;
	}
	.content-bottom-3{
		display: flex;
		flex: 4;
		flex-direction: row;
		font-size: 35upx;
	}
	.bottom-detail{
		display: flex;
		flex: 1;
		border-top: 2upx solid #C9CACA;
		border-right: 2upx solid #C9CACA;
		align-items: center;
		justify-content: center;
	}
</style>
