<template>
	<view class="body">
		<view class="content">
			<view class="content-top">
				<text>订单号：</text>
				<text>123456789123456789 </text>
				<text style="color: red;">(未支付)</text>
			</view>
			<view class="content-top">
				<text>套餐名称：</text>
				<text></text>
			</view>
			<view class="content-top">
				<text>数量</text>：
			</view>
			<view class="content-top">
				<text>套餐说明：</text>
			</view>
			<view class="content-top">
				<text>金额：</text>
				<text>{{}}</text>
			</view>
			<view class="content-top">
				<text>优惠：</text>
				<text></text>
			</view>
			<view class="content-top" style="font-size: 42upx">
				<text >实付：</text>
				<text></text>
			</view>
			<view class="content-top">
				<text>支付方式：</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commodityType:{}
			}
		},
		onLoad(res) {
			console.log(JSON.parse(res.commodityType))
			this.commodityType=JSON.parse(res.commodityType)
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
	margin-top: 2%;
	height: 98%;
	width: 100%;
	background: #FFFFFF;
}
.content-top{
	display: flex;
	height: 70upx;
	width: 100%;
	margin-left: 30upx;
	color: #595757;
	font-size: 30upx;
	font-weight: 550;
	line-height: 70upx;
}
.content-bottom{
	display: block;
	color: #808080;
	font-size: 35upx;
	margin-bottom: 80upx;
}
</style>
