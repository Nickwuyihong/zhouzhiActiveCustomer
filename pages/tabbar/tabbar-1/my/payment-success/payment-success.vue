<template>
	<view class="body">
		<view class="content">
			<view class="content-top">支付成功</view>
			<view class="content-bottom">交易时间：</view>
			<view class="content-bottom">套餐说明：</view>
			<view class="content-bottom">实际金额：</view>
			<view class="content-bottom">订单号：</view>
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
.content{
	display: flex;
	flex-direction: column;
	height: 85%;
	width: 90%;
}
.content-top{
	display: block;
	color: #333333;
	font-size: 40upx;
	margin-bottom: 150upx;
}
.content-bottom{
	display: block;
	color: #808080;
	font-size: 35upx;
	margin-bottom: 80upx;
}
</style>
