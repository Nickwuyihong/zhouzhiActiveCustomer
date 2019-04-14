<template>
	<view class="page">
		<view class="content-1">
			<view class="text">
				<view style="font-size: 30upx;color: #727171;">门店名称：</view>
				<view style="font-size: 35upx;color: #898989;">{{shop.company_name}}</view>
			</view>
		</view>
		<view class="content-2" v-for="(iterm,index) in shops">
			<view class="text">{{iterm.name}}</view>
			<view class="image" @click="jump(index)">
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
				shops: [{
						name: '绑定交流圈'
					},
					{
						name: '运营者管理'
					},
					{
						name: '卷核销员管理'
					}
				]
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
		}
	}
</script>

<style>
	.page {
		height: 100vh;
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
		background: #FFFFFF;
		color: #000000;
		margin-bottom: 40upx;
	}

	.text {
		display: flex;
		flex: 1;
		font-size: 35upx;
		color: #595757;
		align-items: center;
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
