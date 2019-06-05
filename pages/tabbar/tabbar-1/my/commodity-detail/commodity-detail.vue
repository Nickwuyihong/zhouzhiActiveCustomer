<template>
	<view class="body">
		<scroll-view class="content" :scroll-y="true">
			<image :src="commodityType[index].src" class="picture"></image>
		</scroll-view>
		<view class="content-bottom">
			<view class="content-bottom-main">
				<view class="content-bottom-main-left" >
					<text style="display: block;margin-bottom: 10upx;font-weight: bold;">￥{{commodityType[index].price}}</text>
					<text style="font-size: 35upx;">{{commodityType[index].type}}</text>
				</view>
				<view class="content-bottom-main-right">
					<button class="btn" @click="pay">我想购买</button>
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
						price: '1288',
						type:'单月套餐',
						index:'2'
					},
					{
						src: "../../../../../static/logo.png",
						price: '3864',
						type:'季度套餐',
						index:'3'
					},
					{
						src: "../../../../../static/logo.png",
						price: '6528',
						type:'半年套餐',
						index:'4'
					},
					{
						src: "../../../../../static/logo.png",
						price: '11856',
						type:'年度套餐',
						index:'5'
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
             	url:'../payment-success/payment-success?commodityType='+JSON.stringify(this.commodityType[this.index])
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
		height:85%;
		width: 100%;

	}

	.content-bottom {
		display: flex;
		height: 15%;
		width: 100%;
		background: #FFFFFF;
		align-items: center;
		justify-content: center;
	}

	.content-bottom-main {
		display: flex;
		width: 90%;
		height: 100%;
		flex-direction: row;
	}

	.content-bottom-main-left {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding-left: 20upx;
		justify-content: center;
		font-size: 40upx;
		color: #595757;
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
		width: 250upx;
		height: 70upx;
		line-height: 70upx;
		border-radius: 20upx;
	}
</style>
