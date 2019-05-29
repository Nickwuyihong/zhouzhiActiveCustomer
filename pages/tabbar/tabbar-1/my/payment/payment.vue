<template>
	<view class="body">
		<view class="content">
			<view class="content-main" v-for="(iterm,index) in commodity">
				<view class="commodity">
					<view class="commodity-left">
						<view class="commodity-left-top">
							<text>{{iterm.type}}</text>
						</view>
						<view class="commodity-left-bottom">
							<text>{{iterm.money}}</text>
						</view>
					</view>
					<view class="commodity-right">
						<button class='btn' @click="scan(index)">套餐详情</button>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//商品
				commodity: [{
						type: '单月套餐',
						money: '1288/月'
					},
					{
						type: '季度套餐',
						money: '1288/月'
					},
					{
						type: '半年套餐',
						money: '1088/月'
					},
					{
						type: '年度套餐',
						money: '988/月'
					},
				]

			}
		},
		onLoad() {


		},
		methods: {
			scan:function(index){
				uni.navigateTo({
					url:'../commodity-detail/commodity-detail?index='+index
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
		display: flex;
		align-items: center;
	}

	.content {
		height: 90%;
		width: 100%;
		display: flex;
		flex-direction: column;

	}

	.content-main {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
	}

	.commodity {
		display: flex;
		width: 85%;
		height: 80%;
		border: 2upx solid #000000;
		flex: row;
	}

	.commodity-left {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.commodity-left-top {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.commodity-left-bottom {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.commodity-right {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
	}

	.btn {
		font-size: 33upx;
		display: block;
		border-radius: 20upx;
		color: #FFFFFF;
		background: #FF6E6E;
	}
	text{
		font-size: 35upx;
		color: #808080;
		margin-left: 10upx;
	}
</style>
