<template>
	<view class="body">
		<scroll-view class="content" :scroll-y="true">
			<image :src="commodityType[index].src" class="picture"></image>
		</scroll-view>
		<view class="content-bottom">
			<view class="content-bottom-main">
				<view class="content-bottom-main-left">
					<text>合计：{{commodityType[index].price}}</text>
				</view>
				<view class="content-bottom-main-right">
					<button class="btn" @click="pay">支付</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				commodityType: [{
						src: "../../../../../static/logo.png",
						price: '1288'
					},
					{
						src: "../../../../../static/logo.png",
						price: '3864'
					},
					{
						src: "../../../../../static/logo.png",
						price: '6528'
					},
					{
						src: "../../../../../static/logo.png",
						price: '11856'
					}
				]
			}
		},
		onLoad(res) {
			this.index = res.index
			console.log(this.index)
		},

		methods: {
			
			pay: function() {
             uni.redirectTo({
             	url:'../payment-success/payment-success'
             })
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

	}

	.content {
		display: flex;
		height: 80%;
		width: 100%;

	}

	.content-bottom {
		display: flex;
		height: 20%;
		width: 100%;
		align-items: center;
		justify-content: center;
	}

	.content-bottom-main {
		display: flex;
		width: 80%;
		height: 60%;
		border: 2upx solid #000000;
		border-radius: 25upx;
		flex-direction: row;
	}

	.content-bottom-main-left {
		display: flex;
		flex: 1;
		padding-left: 20upx;
		align-items: center;
		font-size: 35upx;
		color: #000000;
	}

	.content-bottom-main-right {
		display: flex;
		flex: 1;
		padding-right: 20upx;
		align-items: center;
		justify-content: flex-end;
	}

	.picture {
		display: block;
		width: 100%;
		height: 80vh;
	}

	.btn {
		font-size: 35upx;
		color: #FFFFFF;
		background: rgb(255, 100, 100);
		display: block;
		width: 180upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 20upx;
	}
</style>
